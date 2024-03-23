import {Outlet, useLocation, useNavigate} from "react-router-dom";
import useAuthentication from "../../api/useAuthentication.js";
import {useEffect, useState} from "react";
import {Preferences} from "@capacitor/preferences";
import useXRAY from "../../api/useXRAY.js";

export default function RequireAuth() {
    const location = useLocation();
    const {user: currentUser, initUser, fetchUserData, saveUserData} = useAuthentication();
    const [initialized, setInitialized] = useState(false);
    const navigate = useNavigate();
    const {initializeXRAY} = useXRAY();

    useEffect(() => {
        initUserData()
    }, []);

    async function initUserData() {
        try {
            if (!currentUser) {
                // get user data from storage
                const tokenResult = await Preferences.get({key: 'token'})
                const token = tokenResult.value;
                if (token) {
                    // found old token and user data, wait for fetch of user data
                    // before deciding to redirect or not
                    const user = await fetchUserData(token)
                    await saveUserData(user, token)

                    if (!user.signed_up) {
                        // user not signed up, redirect
                        const search = new URLSearchParams({
                            redirect: location.pathname
                        }).toString();
                        return navigate("/login?" + search)
                    }
                } else {
                    // no token found, wait for init anon user, then redirect
                    const {user, token} = await initUser();
                    await saveUserData(user, token);

                    const search = new URLSearchParams({
                        redirect: location.pathname
                    }).toString();
                    return navigate("/login?" + search)
                }
            }

            // this depends on token being saved in local storage,
            // so we await all saveUserData calls
            initializeXRAY();
        } finally {
            setInitialized(true)
        }
    }

    return initialized ? <Outlet/> : null
}

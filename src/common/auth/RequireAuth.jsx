import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import useAuthentication from '../api/useAuthentication.js';
import {useEffect, useState, useMemo, memo} from 'react';
import {Preferences} from '@capacitor/preferences';
import useXRAY from '../api/useXRAY.js';
import trackingSettings from '../../constants/trackingSettings.js';

function RequireAuth() {
  const location = useLocation();
  const {user: currentUser, fetchUserData, saveUserData} = useAuthentication();
  const [initialized, setInitialized] = useState(false);
  const navigate = useNavigate();
  const {initializeXRAY} = useXRAY();

  const checkAuth = useMemo(
    () => async () => {
      try {
        if (!currentUser) {
          // get user data from storage
          const tokenResult = await Preferences.get({key: 'token'});
          const token = tokenResult.value;
          const searchParams = new URLSearchParams({
            redirect: location.pathname + location.search,
          }).toString();
          const rejectLink = '/login?' + searchParams;

          if (token) {
            // found old token and user data, wait for fetch of user data
            // before deciding to reject or not
            try {
              const user = await fetchUserData(token);
              await saveUserData(user, token);

              if (!user.signed_up) {
                // user account is anonymous account, reject
                return navigate(rejectLink);
              }
            } catch (e) {
              console.error(e);
              // token is invalid, re-direct
              return navigate(rejectLink);
            }
          } else {
            // no token found, reject
            return navigate(rejectLink);
          }
        }

        // this depends on token being saved in local storage,
        // so we await all saveUserData calls
        if (trackingSettings.enableXRAY) {
          initializeXRAY();
        }
      } finally {
        setInitialized(true);
      }
    },
    [
      currentUser,
      fetchUserData,
      saveUserData,
      location,
      navigate,
      initializeXRAY,
    ]
  );

  useEffect(() => {
    checkAuth();
  }, []);

  return initialized ? <Outlet /> : <div>Loading...</div>;
}

export default memo(RequireAuth);

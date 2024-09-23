import {Outlet} from 'react-router-dom';
import useAuthentication from '../api/useAuthentication.js';
import {useEffect, useMemo, memo} from 'react';
import {Preferences} from '@capacitor/preferences';
import useXRAY from '../api/useXRAY.js';
import trackingSettings from '../../constants/trackingSettings.js';

function PublicAuth() {
  const {user, fetchUserData, initUser, saveUserData, setUser} =
    useAuthentication();
  const {initializeXRAY} = useXRAY();

  const initUserData = useMemo(
    () => async () => {
      if (!user) {
        // get user data from storage
        const userDataResult = await Preferences.get({key: 'userData'});
        const tokenResult = await Preferences.get({key: 'token'});
        let token, userData;

        // found old token and user data, save it first, then async update
        if (userDataResult.value && tokenResult.value) {
          token = tokenResult.value;
          try {
            userData = JSON.parse(userDataResult.value);
            saveUserData(userData, token);
          } catch {
            console.warn('userData invalid');
          }

          // now perform async update, meaning re-sync with server
          try {
            userData = await fetchUserData(token);
            await saveUserData(userData, token);
          } catch (e) {
            // token is invalid, re-init anon user or just wipe it
            console.error(e);
            if (trackingSettings.enableAnonUsers) {
              const {user: userData, token} = await initUser();
              await saveUserData(userData, token);
            } else {
              await Promise.all([
                Preferences.remove({key: 'token'}),
                Preferences.remove({key: 'userData'}),
              ]);
              setUser(null);
            }
          }
        } else {
          // no old token and user data found, init anon user
          if (trackingSettings.enableAnonUsers) {
            const {user, token} = await initUser();
            await saveUserData(user, token);
          }
        }
      }

      // this depends on token being saved in local storage,
      // so we await all saveUserData calls
      if (trackingSettings.enableXRAY) {
        initializeXRAY();
      }
    },
    [user, fetchUserData, initUser, saveUserData, setUser, initializeXRAY]
  );

  useEffect(() => {
    initUserData();
  }, []);

  return <Outlet />;
}

export default memo(PublicAuth);

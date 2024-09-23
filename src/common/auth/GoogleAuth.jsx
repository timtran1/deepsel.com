import {Preferences} from '@capacitor/preferences';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useQuery from '../../hooks/useQuery.jsx';

export default function GoogleAuth() {
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    storeAccessToken();
  }, []);

  async function storeAccessToken() {
    const accessToken = query.get('access_token');
    await Preferences.set({
      key: 'token',
      value: accessToken,
    });
    navigate('/');
  }

  return <></>;
}

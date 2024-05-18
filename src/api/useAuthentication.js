import {useState} from 'react';
import {Preferences} from "@capacitor/preferences";
import backendHost from "../constants/backendHost.js";
import UserState from "../stores/UserState.js";
import {Device} from '@capacitor/device';
import {useNetwork} from '@mantine/hooks';
import {useLocation} from "react-router-dom";
import {useDeviceData} from 'react-device-detect'

export default function useAuthentication() {
    const {user, setUser} = UserState(state => state)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const network = useNetwork();
    const location = useLocation();
    const deviceData = useDeviceData();

    async function saveUserData(userData, token) {
        setUser({...userData, token})
        return Promise.all([
            Preferences.set({
                key: 'userData',
                value: JSON.stringify(userData)
            }),
            Preferences.set({
                key: 'token',
                value: token
            })
        ])
    }

    async function initUser() {
        let deviceInfo = await Device.getInfo()
        deviceInfo = {
            ...deviceInfo,
            location,
            referrer: document.referrer,
            user_agent: navigator.userAgent,
            network,
            os_version: deviceInfo.osVersion === 'unknown' ? deviceData.os.name : deviceInfo.osVersion,
            browser: deviceData.browser,
            cpu: deviceData.cpu,
        }

        const res = await fetch(`${backendHost}/init`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                device_info: deviceInfo,
                organization_id: user?.organization_id || 1
            })
        })
        return res.json()
    }

    async function fetchUserData(token) {
        const response = await fetch(`${backendHost}/user/util/me`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        if (response.status !== 200) {
            const {detail} = await response.json()
            setError(detail)
            throw new Error(detail)
        }
        return response.json()
    }

    async function login({username, password}) {
        try {
            setLoading(true)
            const response = await fetch(`${backendHost}/token`, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `username=${username}&password=${password}`
            })

            if (response.status !== 200) {
                const {detail} = await response.json()
                setError(detail)
                throw new Error(detail)
            }

            const {
                access_token: token,
                user: userData
            } = await response.json()

            await saveUserData(userData, token)
        } finally {
            setLoading(false)
        }
    }

    async function signup({username, password}, autoLogin = true) {
        try {
            setLoading(true)
            const response = await fetch(`${backendHost}/signup`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username,
                    password,
                    organization_id: user?.organization_id || 1
                }),
            })

            if (response.status !== 200) {
                const {detail} = await response.json()
                setError(detail)
                throw new Error(detail)
            }

            if (autoLogin) {
                return login({username, password})
            } else {
                return response.json()
            }
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        await Promise.all([
            Preferences.remove({key: 'token'}),
            Preferences.remove({key: 'userData'})
        ])
        setUser(null)
        window.location.reload()
    }


    return {
        user,
        setUser,
        saveUserData,
        initUser,
        fetchUserData,
        login,
        signup,
        logout,
        loading,
        error,
    }
}

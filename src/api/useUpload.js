import backendHost from "../constants/backendHost.js";
import useAuthentication from "./useAuthentication.js";
import {useState} from "react";

export default function useUpload() {
    const {user} = useAuthentication()
    const {token} = user

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function uploadFile(file) {
        try {
            setLoading(true)
            const formData = new FormData();
            formData.append('file', file)

            const res = await fetch(`${backendHost}/uploads`, {
                method: 'POST',
                headers: {Authorization: `Bearer ${token}`},
                body: formData
            })
            if (!res.status === 200) {
                const {detail} = await res.json()
                setError(detail)
                throw new Error(detail)
            }

            const resp = await res.json()
            const {filename} = resp
            return filename
        } finally {
            setLoading(false)
        }
    }

    async function removeFile(filename) {
        try {
            setLoading(true)
            const res = await fetch(`${backendHost}/uploads/${filename}`, {
                method: 'DELETE',
                headers: {Authorization: `Bearer ${token}`},
            })
            if (!res.status === 200) {
                const {detail} = await res.json()
                setError(detail)
                throw new Error(detail)
            }
        } finally {
            setLoading(false)
        }
    }

    return {
        uploadFile,
        removeFile,
        loading,
        error
    }
}
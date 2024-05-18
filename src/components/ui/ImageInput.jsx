import {useState, useEffect} from 'react';
import useUpload from "../../api/useUpload.js";
import NotificationState from "../../stores/NotificationState.js";
import {FileButton, Indicator, LoadingOverlay} from '@mantine/core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import backendHost from "../../constants/backendHost.js";

export default function ImageInput(props) {
    const {
        placeholder = '/images/placeholder.png',
        alt = 'Image',
        width = 80,
        height = 80,
        value,
        onChange
    } = props

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(value || '')
    const {uploadFile, removeFile, loading} = useUpload();
    const {notify} = NotificationState(state => state)

    useEffect(() => {
        if (image) {
            handleImageChange()
        }
    }, [image])

    async function handleImageChange() {
        try {
            const fileUrl = await uploadFile(image);
            setImageUrl(fileUrl)
            if (onChange) onChange(fileUrl)
        } catch (err) {
            notify({message: err.message, type: 'error'})
            console.error('Error during image upload:', err)
        }
    }

    async function handleRemoveImage() {
        try {
            await removeFile(imageUrl);
            setImageUrl('')
            if (onChange) onChange('')
        } catch (err) {
            notify({message: err.message, type: 'error'})
            console.error('Error during image remove:', err)
        }
    }

    return (
        <div className={`relative`}>
            {imageUrl ?
                <Indicator onClick={handleRemoveImage} color="red"
                           inline size={20} className={`cursor-pointer`}
                           label={<FontAwesomeIcon icon={faXmark} className={`h-3 w-3`}/>}
                >
                    <img src={`${backendHost}/uploads/${imageUrl}`} alt={alt} width={width} height={height}/>
                </Indicator>
                :
                <FileButton onChange={setImage} accept="image/png,image/jpeg">
                    {(props) =>
                        <Indicator {...props}
                                   inline size={20} className={`cursor-pointer`}
                                   label={<FontAwesomeIcon icon={faPlus} className={`h-3 w-3`}/>}
                        >
                            <img src={placeholder} alt={alt} width={width} height={height}/>
                        </Indicator>}
                </FileButton>
            }
            {loading && <LoadingOverlay visible={loading} opacity={0.8}/>}
        </div>
    )
}

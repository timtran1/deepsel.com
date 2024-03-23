import backendHost from "../../constants/backendHost.js";

export default function ImageDisplay(props) {
    const {
        placeholder = '/images/placeholder.png',
        alt = 'Image',
        width = 80,
        height = 80,
        src,
    } = props

    return (
        <div className={`relative`}>
            {src ?
                <img src={`${backendHost}/uploads/${src}`} alt={alt} width={width} height={height}/>
                :
                <img src={placeholder} alt={alt} width={width} height={height}/>
            }
        </div>
    )
}

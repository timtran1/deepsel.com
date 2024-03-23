import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faCheck} from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button"
import {useNavigate} from "react-router-dom";
import H3 from "@/components/ui/H3.jsx";

export default function CreateFormActionBar(props) {
    const {loading, title} = props
    const navigate = useNavigate()

    return (
        <div className={`flex w-full justify-between fields-end mb-[12px]`}>
            <div>
                <H3>{title}</H3>
                <Button className={`shadow text-[14px] font-[600] `} variant={`outline`}
                        onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-1 h-3 w-3" size={`sm`}/>Back
                </Button>
            </div>

            <Button className={`shadow text-[14px] font-[600] bg-primary-main text-primary-contrastText`}
                    disabled={loading} loading={loading} variant={`filled`} type={`submit`}>
                <FontAwesomeIcon icon={faCheck} className="mr-1 h-4 w-4" size={`sm`}/>Save
            </Button>
        </div>
    )
}
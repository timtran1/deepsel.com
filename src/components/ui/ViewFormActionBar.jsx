import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button"
import {useNavigate} from "react-router-dom";
import NotificationState from "../../stores/NotificationState.js";

export default function ViewFormActionBar(props) {
    const {
        query,
        allowEdit = true,
        allowDelete = true,
    } = props
    const {loading, deleteWithConfirm, record} = query
    const navigate = useNavigate()
    const {notify} = NotificationState(state => state)

    function handleDelete() {
        try {
            deleteWithConfirm([record.id],
                () => navigate(-1),
                error => notify({message: error.message, type: 'error'})
            )
        } catch (e) {
            console.error(e)
            notify({message: e.message, type: 'error'})
        }
    }

    return (
        <div className={`flex w-full justify-between roles-end mb-[12px]`}>
            <div>
                <Button className={`shadow text-[14px] font-[600] `} variant={`outline`}
                    onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-1 h-3 w-3" size={`sm`} /> Back
                </Button>
            </div>

            <div className={`flex items-center gap-1`}>
                {allowEdit &&
                    <Button className={`shadow text-[14px] font-[600]`}
                            onClick={() => navigate(`edit`)}
                            disabled={loading} loading={loading} variant={`filled`}>
                        <FontAwesomeIcon icon={faPen} className="mr-2 h-3 w-3" size={`sm`}/> Edit
                    </Button>
                }
                {allowDelete &&
                    <Button variant={`subtle`}
                            onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrash} className="mr-2 h-3 w-3" size={`sm`}/>
                        Delete
                    </Button>
                }
            </div>
        </div>
    )
}
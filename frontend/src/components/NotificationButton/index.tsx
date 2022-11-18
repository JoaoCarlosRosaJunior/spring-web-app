import axios from "axios";
import icon from "../../assets/img/notification-icon.svg"
import { BASE_URL } from "../../utils/request";
import "./style.css"

type ButtonProperties = {
    saleId: number;
}

function handleClick(id: number) {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {

        });
}

function NotificationButton({ saleId }: ButtonProperties) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
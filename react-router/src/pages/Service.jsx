import { useParams } from "react-router-dom";

const Service = () => {
    const { id } = useParams();

    return <div>
        This is the page of the service <b>{id}</b>
    </div>
}

export default Service;
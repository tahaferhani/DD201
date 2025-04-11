import { Link } from "react-router-dom";

const Services = () => {
    return <div>
        <h1>Services Page</h1>

        <table border={1}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Service 1</td>
                    <td><Link to="/service/1">Détail</Link></td>
                </tr>
                <tr>
                    <td>Service 2</td>
                    <td><Link to="/service/2">Détail</Link></td>
                </tr>
                <tr>
                    <td>Service 3</td>
                    <td><Link to="/service/3">Détail</Link></td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Services;
import { Link } from "react-router-dom";

export default function Links() {
    return (
        <ul>
            <li>
                <Link to="/">Home으로 가기</Link>
            </li>
            <li>
                <Link to="/List">List로 가기</Link>
            </li>
        </ul>
    )

}
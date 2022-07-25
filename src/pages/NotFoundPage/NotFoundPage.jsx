import { Link } from "react-router-dom";
import s from "./not-found-page.module.css"

const NotFoundPage = () => {
    return (
        <main>
            <div className="container">
                <h2 className="error">Page not found</h2>
                <Link className={s.link} to="/">Back to home page</Link>
            </div>
        </main>
    )
}

export default NotFoundPage;
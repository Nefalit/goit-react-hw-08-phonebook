import {Link} from "react-router-dom";

import s from "./logo.module.css";

const Logo = ()=> {
    return <Link to="/" className={s.logo}>App Phonebook</Link>
}

export default Logo;
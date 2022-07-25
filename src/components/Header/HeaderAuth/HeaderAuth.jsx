import {NavLink} from "react-router-dom";

import s from "./header-auth.module.css";

const getClassName = ({isActive}) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
}

const HeaderAuth = ()=> {
    return (
        <div>
            <NavLink to="/login" className={getClassName}>Login</NavLink> <span className={s.stick}>|</span><NavLink to="/register" className={getClassName}>Registration</NavLink>
        </div>
    )
}

export default HeaderAuth;
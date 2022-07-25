import {NavLink} from "react-router-dom";

import s from "./header-auth.module.css";

const getClassName = ({isActive}) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
}

const HeaderAuth = ()=> {
    return (
        <div>
            <NavLink to="/login" className={getClassName}>Login</NavLink> | <NavLink to="/register" className={getClassName}>Register</NavLink>
        </div>
    )
}

export default HeaderAuth;
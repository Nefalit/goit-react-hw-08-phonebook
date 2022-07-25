import useAuth from "../../shared/hooks/useAuth";

import Logo from "./Logo/Logo";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import UserMenu from "./UserMenu/UserMenu";

import s from "./header.module.css";

const Header = () => {
    const isLogin = useAuth()
    
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header__row}>
                    <Logo />
                    {isLogin ? <UserMenu /> : <HeaderAuth />}
                </div>
            </div>
        </header>
    )
}

export default Header;
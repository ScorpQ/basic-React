import { NavLink } from 'react-router-dom';

export default function header() {
    return(
        <>
            <NavLink to="/">Anasayfa</NavLink>
            <NavLink to="/about">Hakkında</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/articles">Article</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </>
    );
}
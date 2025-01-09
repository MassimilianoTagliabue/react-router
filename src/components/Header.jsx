import { NavLink } from "react-router-dom";

function Header() {

    const menu = [
        {
            path: "/",
            title: "Homepage"
        },
        {
            path: "/about",
            title: "About us"
        },
        {
            path: "/postList",
            title: "Lista dei Post"
        }
    ]


    return (
        <header>

            <nav className="navbar bg-dark border-bottom border-body " data-bs-theme="dark">
                <ul className="nav nav-tabs">
                    {menu.map((curPage) =>
                        <li key={curPage.title} li className="nav-item">
                            <NavLink className="nav-link" to={curPage.path}>{curPage.title}</NavLink>
                        </li>
                    )}
                </ul>
            </nav>





        </header>
    )
}

export default Header;
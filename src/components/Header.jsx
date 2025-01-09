import { NavLink } from "react-router-dom";

function Header() {

    const menu = [
        {
            path: "/",
            title: "Homepage"
        },
        {
            path:"/about",
            title:"About us"
        },
        {
            path:"/postList",
            title:"Lista dei Post"
        }
    ]


    return (
        <header>
            <h3>Sono header file</h3>
            <ul>
                {menu.map((curPage) => 
                    <li key={curPage.title}><NavLink to={curPage.path}>{curPage.title}</NavLink></li>
                )}
            </ul>
        </header>
    )
}

export default Header;
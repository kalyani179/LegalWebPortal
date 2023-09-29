import './style.css';
function Header(){
    return (
        <div id="header">
            <a className="nav-link">Home</a>
            <a className="nav-link">DashBoard</a>
            <a className="nav-link">SignIn</a>
        </div>
    )
}
function Footer(){
    return (
        <div id="footer">
            All rights reserved 2022-2023
        </div>
    )
}
export {Header};
export {Footer};
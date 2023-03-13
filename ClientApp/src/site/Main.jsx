import { Outlet, Link } from "react-router-dom";

export default _ =>
    <>
        <Link to="/login">login</Link>
        <Link to="/signin">signin</Link>
        <Outlet/>
    </>
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./Sing_login/Login";
import Signin from "./Sing_login/signin";

export default _ =>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route index element={<Login/>}/>
                <Route path="signin" element={<Signin/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
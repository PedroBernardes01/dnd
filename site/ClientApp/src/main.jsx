import React from "react"
import Sidenav from "./home/sidenav/Sidenav"
import Character from "./home/character/Character.jsx"
export default _ =>
    <div style={{minWidth: "100%",minHeight: "100%",position: "fixed"}}>
        <Sidenav/>
        <Character/>
    </div>
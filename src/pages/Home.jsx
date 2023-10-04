import React from "react";
import Register from "./Register";
import Login from "./Login";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Chats from "../components/Chats";
import Search from "../components/Search";
import input from "../components/input";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />  
            </div>
        </div>
    )
}

export default Home
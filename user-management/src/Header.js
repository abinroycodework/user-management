import React from 'react';
import './Header.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Users from "./Users";
import AddUsers from "./AddUser";
import Home from "./Home";

function Header() {
    return (
        <> 
            <Router>
                <div class='header'>

                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/add-user">Add User</Link>
                        </li>
                    </ul>

                    <hr />

                    <Routes >
                        <Route exact path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/add-user" element={<AddUsers />} />
                    </Routes >
                </div>


            </Router>
        </>
    );

}

export default Header;
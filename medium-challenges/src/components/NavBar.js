import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <div>
            <div>
                <ul className="header1">
                    <Link to="/easy">
                        <li>Counter</li>
                    </Link>
                    <Link to="/medium">
                        <li>Movie</li>
                    </Link>
                    <Link to="/hard">
                        <li>To-do List</li>
                    </Link>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}

export default Header;
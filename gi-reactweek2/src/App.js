import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterApp from "./pages/CounterApp";
import MovieApp from "./pages/MovieApp";
import ToDoApp from "./pages/ToDoApp";
import './App.css';

const App = () => {
    return (
        <Router>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/counter" className="nav-link">
                            Easy Challenge
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/movies" className="nav-link">
                            Medium Challenge
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/todo" className="nav-link">
                            Hard Challenge
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/counter" element={<CounterApp />} />
                <Route path="/movies" element={<MovieApp />} />
                <Route path="/todo" element={<ToDoApp />} />
            </Routes>
        </Router>

    );
};

export default App;
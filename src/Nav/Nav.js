import React from "react";

function Nav() {
    return (

        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <button className="navbar-toggler pull-left" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Get Sh*t Done</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Today</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">This week</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Future</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
import React from 'react';

import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="nav has-shadow">
                    <div className="container">
                        <div className="nav-left">
                            <button className='boards-button'>Boards</button>
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input is-success" type="text" placeholder="Text input" value="Search" />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-user"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fa fa-check"></i>
                                    </span>
                                </p>
                            </div>

                            <a className="nav-item is-tab is-hidden-mobile">+</a>
                            <a className="nav-item is-tab is-hidden-mobile">About</a>
                        </div>
                        <a className="nav-item">
                            <img className='trello-logo' src="http://www.easy-insight.com/images/trello.png" alt="Trello logo" />
                        </a>
                        <span className="nav-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <div className="nav-right nav-menu">
                            <p className="field">
                                <a className="button">
                                    <span className="icon is-small">
                                        <i className="fa fa-bold">+</i>
                                    </span>
                                </a>
                                <a className="button">
                                    <span className="icon is-small">
                                        <i className="fa fa-bold">i</i>
                                    </span>
                                </a>
                                <a className="button">
                                    <span className="icon is-small">
                                        <i className="fa fa-bold">A</i>
                                    </span>
                                </a>
                                <a className="button">
                                    <span className="icon is-small">
                                        <i className="fa fa-bold">P</i>
                                    </span>
                                </a>

                            </p>

                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default NavBar;
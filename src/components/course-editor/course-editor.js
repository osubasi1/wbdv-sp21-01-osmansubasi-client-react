import React from 'react'
import {Link} from "react-router-dom";
import "./course-editor.css"

const CourseEditor = ({history}) =>


<div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light header">


    <span className="course-name mx-auto mr-md-5">
            <a href="/" className="mr-2 mt-1">
                <i className="fas fa-times cross-editor"/>
           </a>
            CS 5610 - WebDev
        </span>


        <div className="collapse navbar-collapse">
            <ul className="navbar-nav course-editor">
                <li className="nav-item">
                    <a className="nav-link" href="#">Build</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Pages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Theme</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Store</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">App</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Settings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-plus"/>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <div>
        <div className="row">
            <div className="col-md-3 module-list text-left">
                <ul className="nav flex-column nav-pills module-list-pill">
                    <a className="nav-link mr-2 mb-3" href="#">
                        Module 1 - jQuery
                        <i className="fas fa-times float-right mt-1 ml-1"/>
                    </a>
                    <a className="nav-link active mr-2 mb-3" href="#">
                        Module 2 - React
                        <i className="fas fa-times float-right mt-1 ml-1"/>
                    </a>
                    <a className="nav-link  mr-2 mb-3" href="#">
                        Module 3 - Redux
                        <i className="fas fa-times float-right mt-1 ml-1"/>
                    </a>
                    <a className="nav-link mr-2 mb-3" href="#">
                        Module 4 - Native
                        <i className="fas fa-times float-right mt-1 ml-1"/>
                    </a>
                    <a className="nav-link mr-2 mb-3" href="#">
                        Module 5 - Angular
                        <i className="fas fa-times float-right mt-1 ml-1"/>
                    </a>
                    <a className="nav-link mr-2 mb-3" href="#">
                        Module 6 - Node
                        <i className="fas fa-times float-right mt-1 ml-1"/>
                    </a>
                    <a className="nav-link mr-2 mb-3" href="#">
                        Module 7: Mongo
                        <i className="fas fa-times float-right mt-1 ml-1"/>
                    </a>
                    <a className="nav-link mr-2">
                        <div className="row">
                            <div className="col-9 col-md-10">
                                <input className="form-control"
                                       type="text"
                                       placeholder="New Module Name">
                                </input>
                            </div>
                            <div className="col-3 col-md-2">
                                <i className="fas fa-plus float-right mt-1 ml-1"/>
                            </div>
                        </div>

                    </a>
                </ul>
            </div>


            <div className="col-md-9 topic-list">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-pills topic-pill-list">
                            <li className="nav-item mr-2 mb-2">
                                <a className="nav-link" href="#">Topic 1</a>
                            </li>
                            <li className="nav-item mr-2 mb-2">
                                <a className="nav-link active" href="#">Topic 2</a>
                            </li>
                            <li className="nav-item mr-2 mb-2">
                                <a className="nav-link" href="#">Topic 3</a>
                            </li>
                            <li className="nav-item mr-2 mb-2">
                                <a className="nav-link" href="#">Topic 4</a>
                            </li>
                            <li className="nav-item mr-2 mb-2">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-plus"/>
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>

    </div>

</div>

export default CourseEditor
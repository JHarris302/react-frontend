import React from 'react';
import {Nav, NavLink} from 'react-router-dom'
import '../css/nav.css';

class nav extends React.Component{

  render(){
    return (
        <nav className="nav">
            <b>{this.props.user.username}  |</b> 
            <NavLink to="/home"> home</NavLink> | 
            <NavLink to="/login"> login</NavLink> |
            <NavLink to="/register"> register</NavLink> 
        </nav>
        );
    }
}

export default nav;
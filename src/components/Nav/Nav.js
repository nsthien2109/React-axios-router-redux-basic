import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <>
        <header className="navbar">
          <Link to="/">Home</Link> 
          <Link to="/about">About</Link> 
          <Link to="/user">User</Link> 
        </header>
      </>
    )
  }
}

export default Nav

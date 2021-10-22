import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faLayerGroup, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="sidebar">

      <h1 className="admin-panel-logo">Book Shop</h1>

      <div className="side-nav-links">

        <Link className="admin-panal-nav-link" to="/admin/managebooks" > <FontAwesomeIcon icon={faLayerGroup} /> Manage Books</Link>
        
        <br />

        <Link className="admin-panal-nav-link" to="/admin/addbooks" > <FontAwesomeIcon icon={faPlusSquare} /> Add Books</Link>

        <br />

        <Link className="admin-panal-nav-link" to="/admin" > <FontAwesomeIcon icon={faEdit} />Edit Books</Link>

      </div>

    </div>
  );
};

export default Sidebar;

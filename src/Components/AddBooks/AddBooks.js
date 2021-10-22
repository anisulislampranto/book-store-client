import React from "react";
import NewBookInput from "../NewBookInput/NewBookInput";
import Sidebar from "../Sidebar.js/Sidebar";
import "./AddBooks.css";

const AddBooks = () => {
  return (
    <div className="add-book-section">
      <Sidebar />
      <div className="book-input">
        <h2 className="headline-addbook">Add Book</h2>
        <NewBookInput/>
      </div>

    </div>
  );
};

export default AddBooks;

import React from "react";
import NavTabs from "./NavTabs"

function Header({ currentPage, handlePageChange }) {
  return (
<nav className="navbar py-4 navbar-blue bg-blue d-flex justify-content-around">
  <h1>Isaac Harris</h1>
    <NavTabs handlePageChange={handlePageChange} currentPage={currentPage}/>
</nav>
  );
}


export default Header;
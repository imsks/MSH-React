import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { signOutUser } from "../store/actions/authActions";
import config from "../config";
// import i18n from "../i18n/index";

const Navbar = (props) => {
  const { data } = props;

  const signOut = () => {
    console.log("Signed out");
  };

  return (
    <div>
      {/* Navigation starts now */}
      <div className="nav" id="nav">
        <a className="nav__logo" href="/">
          MSH
        </a>
        <nav className="navigation" id="myNav">
          {data ? (
            <a href="/" onClick={signOut}>
              Sign out
            </a>
          ) : (
            ""
          )}
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const data = JSON.parse(localStorage.getItem("admin"));
  return {
    data,
    isLangDataExist: state.auth.isLangDataExist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => dispatch(signOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

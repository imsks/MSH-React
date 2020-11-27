import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { signOutUser } from "../store/actions/authActions";
import Modal from "../components/Modal";
import config from "../config";
// import i18n from "../i18n/index";
import i18n from "i18next";

const Navbar = (props) => {
  const [currLang, setCurrLang] = useState(null);
  const [navbarAvtar, setNavbarAvtar] = useState(
    "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
  );

  const signOut = () => {
    props.signOutUser();
  };

  const { id, isLangDataExist } = props;
  // console.log(isLangDataExist);

  useEffect(() => {
    const languageData = localStorage.getItem("languageData");

    // console.log(id)
    // console.log(languageData)
    if (languageData === null && id !== null) {
      axios({
        method: "get",
        url: `${config.REACT_APP_NODE_API_URL}/api/user/${id}`,
      })
        .then((res) => {
          localStorage.setItem("languageData", res.data.data.languageData);
          console.log(languageData);
          setCurrLang(res.data.data.languageData);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCurrLang(languageData);
    }
  }, []);

  // Fetch Navbar Data
  useEffect(() => {
    const currentLanguage = localStorage.getItem("changeLanguage");

    // 2. Selecting default value for language
    if (document.getElementById("changeLanguage")) {
      document.getElementById("changeLanguage").value = currentLanguage
        ? currentLanguage
        : "hin";
    }

    axios({
      method: "get",
      url: `${config.REACT_APP_NODE_API_URL}/api/user/${id}`,
    })
      .then((res) => {
        // console.log(res.data.data)
        if (res.data.data.photoUrl) {
          setNavbarAvtar(res.data.data.photoUrl);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeLanguage = (e) => {
    // console.log(
    //   document.getElementById("changeLanguage").selectedOptions[0].value
    // );
    localStorage.setItem(
      "changeLanguage",
      document.getElementById("changeLanguage").selectedOptions[0].value
    );
    i18n.changeLanguage(
      document.getElementById("changeLanguage").selectedOptions[0].value
    );
    window.location.reload();
  };

  return (
    <div>
      {/* Navigation starts now */}
      <div className="nav" id="nav">
        <a className="nav__logo" href="/">
          <img src="/assets/logo-black.png" className="nav__logo__image" />
        </a>
        <nav className="navigation" id="myNav">
          {id ? (
            <ul className="navigation__nav">
              {!currLang ? (
                <li className="navigation__item">
                  <Modal
                    className="navigation__link"
                    isModalOpen={!isLangDataExist}
                    currLang={currLang}
                  />
                </li>
              ) : (
                ""
              )}

              {window.location.pathname !== "/verify" ||
              window.location.pathname !== `${"activate-account" + id}` ? (
                <div className="navigation__auth">
                  <li className="navigation__item">
                    <label htmlFor="profile2" className="profile-dropdown">
                      <input type="checkbox" id="profile2" />
                      <img src={navbarAvtar} />
                      <ul>
                        <li>
                          <a href="/activity">{i18n.t("Activity")}</a>
                        </li>
                        <li>
                          <a href="/edit">{i18n.t("Edit Profile")}</a>
                        </li>

                        <li>
                          <a href="/" onClick={signOut}>
                            {i18n.t("Sign out")}
                          </a>
                        </li>
                      </ul>
                    </label>
                  </li>
                </div>
              ) : (
                ""
              )}
            </ul>
          ) : (
            <ul className="navigation__nav">
              <h1 className="navigation__nav__select__label">
                Website Language
              </h1>
              <select
                className="navigation__nav__select"
                id="changeLanguage"
                onChange={changeLanguage}
              >
                <option value="hin" className="navigation__nav__select__option">
                  Hindi
                </option>
                <option value="en" className="navigation__nav__select__option">
                  English
                </option>
              </select>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const data = JSON.parse(localStorage.getItem("currentUser"));
  const id = data && data._id;

  return {
    id,
    isLangDataExist: state.auth.isLangDataExist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => dispatch(signOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

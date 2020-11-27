import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userSignInWithEmailAndPassword } from "../store/actions/authActions";

const Homepage = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
    props.userSignInWithEmailAndPassword({
      userName,
      password,
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const { data, error } = props;
  if (data) return <Redirect to="/dashboard" />;

  return (
    <main className="homepage">
      <section className="homepage__auth">
        <h1 className="heading-primary--main">Login as an admin</h1>
        <div className="homepage__auth__content">
          <form
            className="homepage__auth__content__form"
            autoComplete="false"
            onSubmit={handleSignin}
          >
            <input
              type="text"
              className="homepage__auth__content__form__input"
              name="userName"
              placeholder="Your User Name"
              onChange={handleInput}
              autoComplete="false"
              required
            />

            <input
              type="password"
              className="homepage__auth__content__form__input"
              name="password"
              placeholder="Your Password"
              onChange={handleInput}
              autoComplete="false"
              required
            />

            <button className="btn btn-md homepage__auth__content__form__submit">
              {submitClicked && !error ? "Signing up" : "Sign up"}
            </button>
          </form>
          {error && error ? (
            <h1 className="homepage__auth__content__form__error">error</h1>
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  const data = JSON.parse(localStorage.getItem("admin"));
  console.log(data)

  return {
    data,
    error: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignInWithEmailAndPassword: (credentials) =>
      dispatch(userSignInWithEmailAndPassword(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

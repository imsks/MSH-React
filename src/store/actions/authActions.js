import axios from "axios";
import config from "../../config";

// Signing in User
export const userSignInWithEmailAndPassword = (credentials) => {
  return (dispatch) => {
    const { userName, password } = credentials;

    axios({
      method: "post",
      url: `${config.REACT_APP_NODE_API_URL}/api/admin/auth/signin`,
      data: {
        userName,
        password,
      },
    })
      .then((res) => {
        // const { _id } = res.data.user;
        // console.log(res.data.data);

        localStorage.setItem("admin", JSON.stringify(res.data.data));

        dispatch({
          type: "SIGNIN_SUCCESS",
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "SIGNIN_ERROR",
          err,
        });
      });
  };
};

// Signing out User
export const signOutUser = () => {
  return (dispatch) => {
    localStorage.setItem("currentUser", null);
    dispatch({
      type: "SIGNOUT__SUCCESS",
    });
  };
};

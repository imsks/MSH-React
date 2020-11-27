const initState = {
  authError: null,
};

const authReducers = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null,
        isLangDataExist: !localStorage.getItem("languageData") ? false : true
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: "Whoops Something Went Wrong. Try Again",
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGNIN_ERROR":
      return {
        ...state,
        authError: "Whoops Something Went Wrong. Try Again",
      };
    case "SIGNOUT_SUCCESS":
      return {
        ...state,
        authError: null,
      };
      case "USER_ACCOUNT_ACTIVE":
      return {
        ...state,
        isAccountActivated: action.isAccountActivated,
      };
    case "PASSWORD_UPDATE__SUCCESS":
      return {
        ...state,
        message: action.message,
      };
    case "PASSWORD_UPDATE__ERROR":
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default authReducers;

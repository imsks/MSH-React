const userReducers = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CAR_DETAILS__SUCCESS":
      return {
        ...state,
        message: action.message,
      };

    case "ADD_CAR_DETAILS__FAILED":
      return {
        ...state,
        error: action.error,
      };

    case "EDIT_CAR_DETAILS__SUCCESS":
      return {
        ...state,
        message: action.message,
      };

    case "EDIT_CAR_DETAILS__FAILED":
      return {
        ...state,
        error: action.error,
      };

    case "DELETE_CAR_DETAILS__SUCCESS":
      return {
        ...state,
        message: action.message,
      };

    case "DELETE_CAR_DETAILS__FAILED":
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default userReducers;

import axios from "axios";
import config from "../../config";

// Edit Car Details
export const addCarDetails = (payload) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: `${config.REACT_APP_NODE_API_URL}/api/admin/cars/add-car-data/`,
      data: { ...payload },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "ADD_CAR_DETAILS__SUCCESS",
          message: res.data.message,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_CAR_DETAILS__FAILED",
          error: err.data.message,
        });
      });
  };
};

// Edit Car Details
export const editCarDetails = (payload) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: `${config.REACT_APP_NODE_API_URL}/api/admin/cars/edit-car-data/`,
      data: { ...payload },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "EDIT_CAR_DETAILS__SUCCESS",
          message: res.data.message,
        });
      })
      .catch((err) => {
        dispatch({
          type: "EDIT_CAR_DETAILS__FAILED",
          error: err.data.message,
        });
      });
  };
};

// Delete Car Details
export const deleteCarDetails = (payload) => {
  return (dispatch) => {
    console.log(payload);
    axios({
      method: "post",
      url: `${config.REACT_APP_NODE_API_URL}/api/admin/cars/delete-a-car/`,
      data: { ...payload },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "DELETE_CAR_DETAILS__SUCCESS",
          message: res.data.message,
        });
      })
      .catch((err) => {
        dispatch({
          type: "DELETE_CAR_DETAILS__FAILED",
          error: err.data.message,
        });
      });
  };
};

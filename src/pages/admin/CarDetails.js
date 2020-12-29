import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import config from "../../config";
import {
  editCarDetails,
  deleteCarDetails,
} from "../../store/actions/userActions";

const CarDetails = (props) => {
  const [carName, setCarName] = useState("");
  const [modelNo, setModelNo] = useState("");
  const [type, setType] = useState("");
  const [carImage, setCarImage] = useState("");
  const [exShowRoom, setExShowRoom] = useState(0);
  const [taxCollectedAtSource, setTaxCollectedAtSource] = useState(0);
  const [insuranceFor1Year, setInsuranceFor1Year] = useState(0);
  const [
    insuranceDifferentsAmountFor2Years,
    setInsuranceDifferentsAmountFor2Years,
  ] = useState(0);
  const [
    roadTaxAndRegistrationCharges,
    setRoadTaxAndRegistrationCharges,
  ] = useState(0);
  const [Fastag, setFastag] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [addOns, setAddOns] = useState([]);
  const [addOnName, setAddOnName] = useState("");
  const [addOnValue, setAddOnValue] = useState("");
  const [editClicked, setEditClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);

  useEffect(() => {
    // console.log(localStorage.getItem("admin"));
    axios({
      method: "get",
      url: `${
        config.REACT_APP_NODE_API_URL
      }/api/admin/cars/get-car-data-by-id/${
        window.location.pathname.split("/")[2]
      }`,
    })
      .then((res) => {
        // Set Data
        setCarName(res.data.data.carData.carName);
        setModelNo(res.data.data.carData.modelNo);
        if (document.getElementById("type")) {
          setType(res.data.data.carData.type);
          document.getElementById("type").value = res.data.data.carData.type;
        }
        setCarImage(res.data.data.carData.carImage);
        setExShowRoom(res.data.data.carData.exShowRoom);
        setTaxCollectedAtSource(res.data.data.carData.taxCollectedAtSource);
        setInsuranceFor1Year(res.data.data.carData.insuranceFor1Year);
        setAddOns(Object.values(res.data.data.carData.addOnsData));
        setInsuranceDifferentsAmountFor2Years(
          res.data.data.carData.insuranceDifferentsAmountFor2Years
        );
        setRoadTaxAndRegistrationCharges(
          res.data.data.carData.roadTaxAndRegistrationCharges
        );
        setFastag(res.data.data.carData.Fastag);
        setDiscount(res.data.data.carData.discount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handle input
  const handleInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "carName":
        setCarName(value);
        break;
      case "modelNo":
        setModelNo(value);
        break;
      case "carImage":
        setCarImage(value);
        break;
      case "exShowRoom":
        setExShowRoom(value);
        break;
      case "taxCollectedAtSource":
        setTaxCollectedAtSource(value);
        break;
      case "insuranceFor1Year":
        setInsuranceFor1Year(value);
        break;
      case "insuranceDifferentsAmountFor2Years":
        setInsuranceDifferentsAmountFor2Years(value);
        break;
      case "roadTaxAndRegistrationCharges":
        setRoadTaxAndRegistrationCharges(value);
        break;
      case "Fastag":
        setFastag(value);
        break;
      case "discount":
        setDiscount(value);
        break;
      default:
        break;
    }
  };

  // Handle Add Add-on
  const handleAddAddOn = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "addOnName":
        setAddOnName(value);
        break;
      case "addOnValue":
        setAddOnValue(value);
        break;
    }
  };

  // Adding Add-on
  const addAddOn = (e) => {
    e.preventDefault();

    setAddOns((oldArray) => [
      ...oldArray,
      {
        addOnName,
        addOnValue,
      },
    ]);
  };

  // Handle Delete Add-On
  const deleteAddOn = (e) => {
    e.preventDefault();
    const arr = addOns.filter((item, key) => item.addOnName !== e.target.value);
    setAddOns(arr);
  };

  // Handle Select type
  const handleSelectType = () => {
    setType(document.getElementById("type").selectedOptions[0].value);
  };

  // Handle Car Details
  const handleEditCarDetails = (e) => {
    e.preventDefault();
    setEditClicked(true);
    props.editCarDetails({
      carId: window.location.pathname.split("/")[2],
      carData: {
        carName,
        modelNo,
        type,
        carImage,
        exShowRoom,
        taxCollectedAtSource,
        insuranceFor1Year,
        insuranceDifferentsAmountFor2Years,
        roadTaxAndRegistrationCharges,
        Fastag,
        discount,
        addOnsData: {
          ...addOns,
        },
      },
    });

    setTimeout(() => {
      setEditClicked(false);
    }, 3000);
  };

  // Handle Delete Details
  const handleDeleteCarDetails = (e) => {
    e.preventDefault();
    setDeleteClicked(true);
    props.deleteCarDetails({
      carId: window.location.pathname.split("/")[2],
    });
  };

  const id = localStorage.getItem("admin");

  const { data, error, message } = props;
  if (!data) return <Redirect to="/" />;

  return (
    <section className="cardetails">
      <div className="cardetails__header">
        <h1 className="cardetails__header__heading heading-primary--main u-center-text">
          Edit Car Details
        </h1>
      </div>
      <div className="cardetails__auth__content">
        {carName !== "" ? (
          <form
            className="cardetails__auth__content__form"
            autoComplete="false"
            onSubmit={handleEditCarDetails}
          >
            <label className="cardetails__auth__content__form__label">
              Car Name
            </label>
            <input
              type="text"
              className="addcar__auth__content__form__input"
              name="carName"
              onChange={handleInput}
              autoComplete="false"
              value={carName || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Model No
            </label>
            <input
              type="text"
              className="addcar__auth__content__form__input"
              name="modelNo"
              onChange={handleInput}
              autoComplete="false"
              value={modelNo || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Choose Car Type
            </label>
            <select
              className="addcar__auth__content__form__select"
              id="type"
              onChange={handleSelectType}
            >
              <option
                value="Petrol"
                className="addcar__auth__content__form__select__option"
              >
                Petrol
              </option>
              <option
                value="Diesel"
                className="addcar__auth__content__form__select__option"
              >
                Diesel
              </option>
            </select>
            <label className="cardetails__auth__content__form__label">
              Car Image Link
            </label>
            <input
              type="text"
              className="addcar__auth__content__form__input"
              name="carImage"
              onChange={handleInput}
              autoComplete="false"
              value={carImage || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Ex ShowRoom Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="exShowRoom"
              onChange={handleInput}
              autoComplete="false"
              value={exShowRoom || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Tax Collected At Source Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="taxCollectedAtSource"
              onChange={handleInput}
              autoComplete="false"
              value={taxCollectedAtSource || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Insurance For 1 Year Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="insuranceFor1Year"
              onChange={handleInput}
              autoComplete="false"
              value={insuranceFor1Year || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Insurance Differents Amount For 2 Years Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="insuranceDifferentsAmountFor2Years"
              onChange={handleInput}
              autoComplete="false"
              value={insuranceDifferentsAmountFor2Years || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Road Tax And Registration Charges Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="roadTaxAndRegistrationCharges"
              onChange={handleInput}
              autoComplete="false"
              value={roadTaxAndRegistrationCharges || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Fastag Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="Fastag"
              onChange={handleInput}
              autoComplete="false"
              value={Fastag || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Discount
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="discount"
              onChange={handleInput}
              autoComplete="false"
              value={discount || ""}
              required
            />
            <div className="cardetails__auth__content__form__addon">
              <h1 className="cardetails__header__heading heading-primary--main u-center-text">
                Add Add-Ons
              </h1>
              <div className="cardetails__auth__content__form__addon__input">
                <label className="cardetails__auth__content__form__label">
                  Name
                </label>
                <input
                  type="text"
                  className="cardetails__auth__content__form__addon__input__name"
                  name="addOnName"
                  onChange={handleAddAddOn}
                  autoComplete="false"
                />
              </div>

              <div className="cardetails__auth__content__form__addon__input">
                <label className="cardetails__auth__content__form__label">
                  Value
                </label>
                <input
                  type="text"
                  className="cardetails__auth__content__form__addon__input__value"
                  name="addOnValue"
                  onChange={handleAddAddOn}
                  autoComplete="false"
                />
              </div>

              <div className="cardetails__auth__content__form__addon__content">
                {addOns.map((addOn, key) => (
                  <div
                    className="cardetails__auth__content__form__addon__content__item"
                    key={key}
                  >
                    <h2 className="cardetails__header__subheading heading-secondary--main u-center-text">
                      {addOn.addOnName}
                    </h2>
                    <h2 className="cardetails__header__subheading heading-secondary--main u-center-text">
                      {addOn.addOnValue}
                    </h2>
                    <button
                      className="btn btn-md cardetails__auth__content__form__submit"
                      onClick={deleteAddOn}
                      value={addOn.addOnName}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>

              <button
                className="btn btn-md cardetails__auth__content__form__submit"
                onClick={addAddOn}
              >
                Add Add-on
              </button>
            </div>

            <button className="btn btn-md cardetails__auth__content__form__submit">
              {editClicked && !error ? "Editing up" : "Edit details"}
            </button>
            <button
              className="btn btn-md cardetails__auth__content__form__submit"
              onClick={handleDeleteCarDetails}
            >
              {deleteClicked && !error ? "Deleting..." : "Delete details"}
            </button>
          </form>
        ) : (
          <h1 className="cardetails__header__loading heading-primary--main u-center-text">
            Loading...
          </h1>
        )}

        {error && error ? (
          <h1 className="cardetails__auth__content__form__error u-center-text">
            error
          </h1>
        ) : (
          ""
        )}
        {message && message ? (
          <h1 className="cardetails__auth__content__form__message u-center-text">
            {message}
          </h1>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const data = JSON.parse(localStorage.getItem("admin"));

  return {
    data,
    error: state.user.error,
    message: state.user.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editCarDetails: (credentials) => dispatch(editCarDetails(credentials)),
    deleteCarDetails: (credentials) => dispatch(deleteCarDetails(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails);

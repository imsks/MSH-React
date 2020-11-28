import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import config from "../../config";
import { addCarDetails } from "../../store/actions/userActions";

const AddCar = (props) => {
  const [carName, setCarName] = useState("");
  const [modelNo, setModelNo] = useState("");
  const [type, setType] = useState("");
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
  const [basicAccessoriesKit, setBasicAccessoriesKit] = useState(0);
  const [extendedWarranty, setExtendedWarranty] = useState(0);
  const [roadSideAssistance, setRoadSideAssistance] = useState(0);
  const [onRoadPrice, setOnRoadPrice] = useState(0);
  const [zeroDepPolicy, setZeroDepPolicy] = useState(0);
  const [
    hydrostaticLockCoverAndKeyCost,
    setHydrostaticLockCoverAndKeyCost,
  ] = useState(0);
  const [returnToInvoice, setReturnToInvoice] = useState(0);
  const [priceToConnectedDevice, setPriceToConnectedDevice] = useState(0);
  const [
    totalOnRoadPriceWithOptionalAddOns,
    setTotalOnRoadPriceWithOptionalAddOns,
  ] = useState(0);
  const [
    oneYearSubscriptionOfConnectedDevices,
    setOneYearSubscriptionOfConnectedDevices,
  ] = useState(0);
  const [submitClicked, setSubmitClicked] = useState(false);

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
      case "basicAccessoriesKit":
        setBasicAccessoriesKit(value);
        break;
      case "extendedWarranty":
        setExtendedWarranty(value);
        break;
      case "roadSideAssistance":
        setRoadSideAssistance(value);
        break;
      case "onRoadPrice":
        setOnRoadPrice(value);
        break;
      case "zeroDepPolicy":
        setZeroDepPolicy(value);
        break;
      case "hydrostaticLockCoverAndKeyCost":
        setHydrostaticLockCoverAndKeyCost(value);
        break;
      case "returnToInvoice":
        setReturnToInvoice(value);
        break;
      case "priceToConnectedDevice":
        setPriceToConnectedDevice(value);
        break;
      case "totalOnRoadPriceWithOptionalAddOns":
        setTotalOnRoadPriceWithOptionalAddOns(value);
        break;
      case "oneYearSubscriptionOfConnectedDevices":
        setOneYearSubscriptionOfConnectedDevices(value);
        break;
      default:
        break;
    }
  };

  // Handle Select type
  const handleSelectType = () => {
    setType(document.getElementById("type").selectedOptions[0].value);
  };

  // Handle Car Details
  const handleAddCarDetails = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
    props.addCarDetails({
      carData: {
        carName,
        modelNo,
        type,
        exShowRoom,
        taxCollectedAtSource,
        insuranceFor1Year,
        insuranceDifferentsAmountFor2Years,
        roadTaxAndRegistrationCharges,
        Fastag,
        basicAccessoriesKit,
        extendedWarranty,
        roadSideAssistance,
        onRoadPrice,
        zeroDepPolicy,
        hydrostaticLockCoverAndKeyCost,
        returnToInvoice,
        priceToConnectedDevice,
        totalOnRoadPriceWithOptionalAddOns,
        oneYearSubscriptionOfConnectedDevices,
      },
    });

    setTimeout(() => {
      setSubmitClicked(false);
    }, 3000);
  };

  const id = localStorage.getItem("admin");

  const { data, error, message } = props;
  if (!data) return <Redirect to="/" />;

  return (
    <section className="addcar">
      <div className="addcar__header">
        <h1 className="addcar__header__heading heading-primary--main u-center-text">
          Car Details
        </h1>
      </div>
      <div className="addcar__auth__content">
        <form
          className="addcar__auth__content__form"
          autoComplete="false"
          onSubmit={handleAddCarDetails}
        >
          <label className="addcar__auth__content__form__label">Car Name</label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="carName"
            onChange={handleInput}
            autoComplete="false"
            required
          />
          <label className="addcar__auth__content__form__label">Model No</label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="modelNo"
            onChange={handleInput}
            autoComplete="false"
            required
          />
          <label className="addcar__auth__content__form__label">
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
          <label className="addcar__auth__content__form__label">
            Ex ShowRoom Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="exShowRoom"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Tax Collected At Source Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="taxCollectedAtSource"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Insurance For 1 Year Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="insuranceFor1Year"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Insurance Differents Amount For 2 Years Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="insuranceDifferentsAmountFor2Years"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Road Tax And Registration Charges Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="roadTaxAndRegistrationCharges"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Fastag Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="Fastag"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Basic Accessories Kit Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="basicAccessoriesKit"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Extended Warranty Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="extendedWarranty"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Road Side Assistance Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="roadSideAssistance"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            On Road Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="onRoadPrice"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Zero Dep Policy Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="zeroDepPolicy"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Hydrostatic Lock Cover And Key Cost Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="hydrostaticLockCoverAndKeyCost"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Return To Invoice Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="returnToInvoice"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Price To Connected Device Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="priceToConnectedDevice"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            Total On Road Price With Optional AddOns Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="totalOnRoadPriceWithOptionalAddOns"
            onChange={handleInput}
            autoComplete="false"
          />
          <label className="addcar__auth__content__form__label">
            One Year Subscription Of Connected Devices Price
          </label>
          <input
            type="text"
            className="addcar__auth__content__form__input"
            name="oneYearSubscriptionOfConnectedDevices"
            onChange={handleInput}
            autoComplete="false"
          />

          <button className="btn btn-md addcar__auth__content__form__submit">
            {submitClicked && !error ? "Adding up" : "Add Car"}
          </button>
        </form>
        {error && error ? (
          <h1 className="addcar__auth__content__form__error">error</h1>
        ) : (
          ""
        )}
        {message && message ? (
          <h1 className="addcar__auth__content__form__message">{message}</h1>
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
    addCarDetails: (credentials) => dispatch(addCarDetails(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);

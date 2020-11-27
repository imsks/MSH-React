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
        // console.log(res.data.data.carData);

        // Set Data
        setExShowRoom(res.data.data.carData.exShowRoom);
        setTaxCollectedAtSource(res.data.data.carData.taxCollectedAtSource);
        setInsuranceFor1Year(res.data.data.carData.insuranceFor1Year);
        setInsuranceDifferentsAmountFor2Years(
          res.data.data.carData.insuranceDifferentsAmountFor2Years
        );
        setRoadTaxAndRegistrationCharges(
          res.data.data.carData.roadTaxAndRegistrationCharges
        );
        setFastag(res.data.data.carData.Fastag);
        setBasicAccessoriesKit(res.data.data.carData.basicAccessoriesKit);
        setExtendedWarranty(res.data.data.carData.extendedWarranty);
        setRoadSideAssistance(res.data.data.carData.roadSideAssistance);
        setOnRoadPrice(res.data.data.carData.onRoadPrice);
        setZeroDepPolicy(res.data.data.carData.zeroDepPolicy);
        setHydrostaticLockCoverAndKeyCost(
          res.data.data.carData.hydrostaticLockCoverAndKeyCost
        );
        setReturnToInvoice(res.data.data.carData.returnToInvoice);
        setPriceToConnectedDevice(res.data.data.carData.priceToConnectedDevice);
        setTotalOnRoadPriceWithOptionalAddOns(
          res.data.data.carData.totalOnRoadPriceWithOptionalAddOns
        );
        setOneYearSubscriptionOfConnectedDevices(
          res.data.data.carData.oneYearSubscriptionOfConnectedDevices
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handle input
  const handleInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
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

  // Handle Car Details
  const handleEditCarDetails = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
    props.editCarDetails({
      carId: window.location.pathname.split("/")[2],
      carData: {
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

  // Handle Delete Details
  const handleDeleteCarDetails = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
    props.deleteCarDetails({
      carId: window.location.pathname.split("/")[2],
    });

    setTimeout(() => {
      setSubmitClicked(false);
    }, 3000);
  };

  const id = localStorage.getItem("admin");

  const { data, error, message } = props;
  if (!data) return <Redirect to="/" />;

  return (
    <section className="cardetails">
      <div className="cardetails__header">
        <h1 className="cardetails__header__heading heading-primary--main u-center-text">
          Car Details
        </h1>
      </div>
      <div className="cardetails__auth__content">
        <form
          className="cardetails__auth__content__form"
          autoComplete="false"
          onSubmit={handleEditCarDetails}
        >
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="exShowRoom"
            placeholder="Your Ex ShowRoom Price"
            onChange={handleInput}
            autoComplete="false"
            value={exShowRoom}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="taxCollectedAtSource"
            placeholder="Your Tax Collected At Source Price"
            onChange={handleInput}
            autoComplete="false"
            value={taxCollectedAtSource}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="insuranceFor1Year"
            placeholder="Your Insurance For 1 Year Price"
            onChange={handleInput}
            autoComplete="false"
            value={insuranceFor1Year}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="insuranceDifferentsAmountFor2Years"
            placeholder="Your Insurance Differents Amount For 2 Years Price"
            onChange={handleInput}
            autoComplete="false"
            value={insuranceDifferentsAmountFor2Years}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="roadTaxAndRegistrationCharges"
            placeholder="Your Road Tax And Registration Charges Price"
            onChange={handleInput}
            autoComplete="false"
            value={roadTaxAndRegistrationCharges}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="Fastag"
            placeholder="Your Fastag Price"
            onChange={handleInput}
            autoComplete="false"
            value={Fastag}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="basicAccessoriesKit"
            placeholder="Your Basic Accessories Kit Price"
            onChange={handleInput}
            autoComplete="false"
            value={basicAccessoriesKit}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="extendedWarranty"
            placeholder="Your Extended Warranty Price"
            onChange={handleInput}
            autoComplete="false"
            value={extendedWarranty}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="roadSideAssistance"
            placeholder="Your Road Side Assistance Price"
            onChange={handleInput}
            autoComplete="false"
            value={roadSideAssistance}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="onRoadPrice"
            placeholder="Your On Road Price"
            onChange={handleInput}
            autoComplete="false"
            value={onRoadPrice}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="zeroDepPolicy"
            placeholder="Your Zero Dep Policy Price"
            onChange={handleInput}
            autoComplete="false"
            value={zeroDepPolicy}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="hydrostaticLockCoverAndKeyCost"
            placeholder="Your Hydrostatic Lock Cover And Key Cost Price"
            onChange={handleInput}
            autoComplete="false"
            value={hydrostaticLockCoverAndKeyCost}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="returnToInvoice"
            placeholder="Your Return To Invoice Price"
            onChange={handleInput}
            autoComplete="false"
            value={returnToInvoice}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="priceToConnectedDevice"
            placeholder="Your Price To Connected Device Price"
            onChange={handleInput}
            autoComplete="false"
            value={priceToConnectedDevice}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="totalOnRoadPriceWithOptionalAddOns"
            placeholder="Your Total On Road Price With Optional AddOns Price"
            onChange={handleInput}
            autoComplete="false"
            value={totalOnRoadPriceWithOptionalAddOns}
            required
          />
          <input
            type="text"
            className="cardetails__auth__content__form__input"
            name="oneYearSubscriptionOfConnectedDevices"
            placeholder="Your One Year Subscription Of Connected Devices Price"
            onChange={handleInput}
            autoComplete="false"
            value={oneYearSubscriptionOfConnectedDevices}
            required
          />

          <button className="btn btn-md cardetails__auth__content__form__submit">
            {submitClicked && !error ? "Editing up" : "Edit details"}
          </button>
          <button
            className="btn btn-md cardetails__auth__content__form__submit"
            onClick={handleDeleteCarDetails}
          >
            {submitClicked && !error ? "Deleting..." : "Delete details"}
          </button>
        </form>
        {error && error ? (
          <h1 className="cardetails__auth__content__form__error">error</h1>
        ) : (
          ""
        )}
        {message && message ? (
          <h1 className="cardetails__auth__content__form__message">
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

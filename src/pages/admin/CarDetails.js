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

  // Handle Car Image
  const handleChangeCarImage = (e) => {
    // Handle Blog Thumbnail
    const fileList = e.target.files;
    // console.log(e.target.files);

    const f = fileList[0];
    // console.log(f);

    const reader = new FileReader();

    reader.onload = (frEvent) => {
      setCarImage(frEvent.target.result);
      console.log(frEvent.target.result);
    };
    reader.readAsDataURL(f);
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

    window.location.href = "/dashboard";

    setTimeout(() => {
      setDeleteClicked(false);
    }, 3000);
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
              Your Basic Accessories Kit Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="basicAccessoriesKit"
              onChange={handleInput}
              autoComplete="false"
              value={basicAccessoriesKit || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Extended Warranty Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="extendedWarranty"
              onChange={handleInput}
              autoComplete="false"
              value={extendedWarranty || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Road Side Assistance Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="roadSideAssistance"
              onChange={handleInput}
              autoComplete="false"
              value={roadSideAssistance || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your On Road Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="onRoadPrice"
              onChange={handleInput}
              autoComplete="false"
              value={onRoadPrice || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Zero Dep Policy Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="zeroDepPolicy"
              onChange={handleInput}
              autoComplete="false"
              value={zeroDepPolicy || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Hydrostatic Lock Cover And Key Cost Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="hydrostaticLockCoverAndKeyCost"
              onChange={handleInput}
              autoComplete="false"
              value={hydrostaticLockCoverAndKeyCost || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Return To Invoice Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="returnToInvoice"
              onChange={handleInput}
              autoComplete="false"
              value={returnToInvoice || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Price To Connected Device Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="priceToConnectedDevice"
              onChange={handleInput}
              autoComplete="false"
              value={priceToConnectedDevice || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your Total On Road Price With Optional AddOns Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="totalOnRoadPriceWithOptionalAddOns"
              onChange={handleInput}
              autoComplete="false"
              value={totalOnRoadPriceWithOptionalAddOns || ""}
              required
            />
            <label className="cardetails__auth__content__form__label">
              Your One Year Subscription Of Connected Devices Price
            </label>
            <input
              type="text"
              className="cardetails__auth__content__form__input"
              name="oneYearSubscriptionOfConnectedDevices"
              onChange={handleInput}
              autoComplete="false"
              value={oneYearSubscriptionOfConnectedDevices || ""}
              required
            />

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

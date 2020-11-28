import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import config from "../../config";

const AdminDashboard = () => {
  const [allCarsList, setAllCarsList] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${config.REACT_APP_NODE_API_URL}/api/admin/cars/get-all-cars`,
    })
      .then((res) => {
        // console.log(res.data.data);
        // // const { isApproved } = res.data.data;
        setAllCarsList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(allCarsList);

  const id = localStorage.getItem("admin");

  if (!id) return <Redirect to="/" />;

  return (
    <section className="admindashboard">
      <div className="admindashboard__header__heading heading-primary--main u-center-text">
        Welcome to MSH
      </div>

      <h1
        className="admindashboard__header__heading heading-primary--sub u-center-text"
        style={{ margin: "4rem 0 2rem 0" }}
      >
        Add A New Car?
      </h1>

      <button className="btn btn-md">
        <Link
          to="/add"
          className="admindashboard__header__link u-center-text"
        >
          Add Car
        </Link>
      </button>

      <h1
        className="admindashboard__header__heading heading-primary--sub u-center-text"
        style={{ margin: "4rem 0 0 0" }}
      >
        Choose a car to change the data
      </h1>
      {allCarsList.length !== 0 ? (
        <div className="admindashboard__content">
          {allCarsList.map((car, key) => {
            return car.data.carData.carName ? (
              <Link
                key={key}
                className="admindashboard__content__card"
                to={`/car/${car.id}`}
              >
                <h1 className="heading-primary--main">
                  {car.data.carData.carName}
                </h1>
                <h2 className="heading-primary--sub">
                  {car.data.carData.modelNo}
                </h2>
                <h3 className="heading-primary--sub">
                  {car.data.carData.type}
                </h3>
              </Link>
            ) : (
              ""
            );
          })}
        </div>
      ) : (
        <h1
          className="admindashboard__header__heading heading-primary--sub u-center-text"
          style={{ margin: "2rem 0 2rem 0" }}
        >
          Loading...
        </h1>
      )}
    </section>
  );
};

export default AdminDashboard;

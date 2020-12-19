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
        setAllCarsList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

      <a href="/add" className="admindashboard__header__link u-center-text">
        <button className="btn btn-md">Add Car</button>
      </a>

      <div className="admindashboard__quote">
        <h1
          className="admindashboard__header__heading heading-primary--sub u-center-text"
          style={{ margin: "4rem 0 2rem 0" }}
        >
          OR
        </h1>
        <a href="/quotes" className="admindashboard__header__link u-center-text">
          <button className="btn btn-md">View All Quotes</button>
        </a>
      </div>

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
                <img
                  src={
                    car.data.carData.carImage ||
                    "https://images.financialexpress.com/2020/05/3-13-1.jpg"
                  }
                  className="admindashboard__content__card__image"
                />
                <div className="admindashboard__content__card__content">
                  <h1 className="heading-primary--main">
                    {car.data.carData.carName}
                  </h1>
                  <h2 className="heading-primary--sub">
                    {car.data.carData.modelNo}
                  </h2>
                  <h3 className="heading-primary--sub">
                    {car.data.carData.type}
                  </h3>
                </div>
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

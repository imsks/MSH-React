import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import config from "../../config";

const AdminDashboard = () => {
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    // console.log(localStorage.getItem("admin"));
    axios({
      method: "get",
      url: `${config.REACT_APP_NODE_API_URL}/api/admin/user/get-user/${id}`,
    })
      .then((res) => {
        const { isApproved } = res.data.data;
        setIsAllowed(isApproved);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(isAllowed);

  const id = localStorage.getItem("currentAdmin");

  if (!id) return <Redirect to="/admin/auth" />;

  return (
    <section className="admindashboard">
      <div className="admindashboard__header">
        <h1 className="admindashboard__header__heading heading-primary--main u-center-text">
          Welcome to Admin Dashboard
        </h1>
      </div>

      {isAllowed ? (
        <div className="admindashboard__content">
          <div className="admindashboard__content__actioncards">
            <a
              href="/admin/approve-instructor-requests"
              className="admindashboard__content__link"
            >
              <div className="admindashboard__content__actioncards__item">
                <h3 className="heading-secondary--main admindashboard__content__actioncards__item__heading">
                  Approve Instrutor Requests
                </h3>
                <p className="heading-secondary--sub admindashboard__content__actioncards__item__subheading">
                  You can approve instructor requests and add them into Trilingo
                  family.
                </p>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <h1 className="admindashboard__header__heading heading-secondary--main u-center-text">
          You're not authorised to be an admin yet.
        </h1>
      )}
    </section>
  );
};

export default AdminDashboard;

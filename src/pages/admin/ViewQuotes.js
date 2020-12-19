import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

const ViewQuotes = () => {
  const [allQuotesList, setAllQuotesList] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${config.REACT_APP_NODE_API_URL}/api/user/quote/get-all-quotes`,
    })
      .then((res) => {
        setAllQuotesList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const bookACar = (id, status) => {
    console.log(status);
    axios({
      method: "post",
      url: `${config.REACT_APP_NODE_API_URL}/api/user/quote/set-book`,
      data: {
        id,
        isBooked: status,
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(allQuotesList);

  return (
    <div className="viewquotes">
      <h1 className="viewquotes__header heading-primary--main u-center-text">
        View Quotes
      </h1>

      <div className="viewquotes__content">
        {allQuotesList.map((quote, key) => {
          return (
            <div className="viewquotes__content__card" key={key}>
              <h3 className="viewquotes__content__card__text">Car Details</h3>
              <ul className="viewquotes__content__card__car__list">
                {quote.quoteData.carDetails.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className="viewquotes__content__card__car__list__item"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
              <div className="viewquotes__content__card__prospect__list">
                <h3 className="viewquotes__content__card__text">
                  Prospect Details
                </h3>
                {quote.quoteData.prospectDetails.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className="viewquotes__content__card__car__list__item"
                    >
                      {Object.values(item)}
                    </li>
                  );
                })}
              </div>
              <div className="viewquotes__content__card__metadata">
                <h3 className="viewquotes__content__card__text">
                  Add-ons Included -{" "}
                  {quote.quoteData.isAddOnsIncluded ? "Yes" : "No"}
                </h3>
                <h3 className="viewquotes__content__card__text">
                  Quoted on
                  {" " +
                    new Date(quote.quoteData.date).toString().substring(0, 25)}
                </h3>
                <h3 className="viewquotes__content__card__text">
                  By
                  {" " + quote.quoteData.userName}
                </h3>
              </div>
              <button
                className="btn btn-md"
                onClick={() => bookACar(quote.id, !quote.quoteData.isBooked)}
              >
                {quote.quoteData.isBooked ? "Unbook" : "Book"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewQuotes;

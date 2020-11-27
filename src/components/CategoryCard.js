import React from "react";

const CategoryCard = (props) => {
  const { title, progress } = props;
  // console.log(props);
  return (
    <div className="categorycard">
      <h1 className="categorycard__heading">{title}</h1>
      <h2>{progress + "% completed"}</h2>
    </div>
  );
};

export default CategoryCard;

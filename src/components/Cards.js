import React from "react";
import Card from "./Card";

const Cards = ({ apiData, checker}) => {
  // console.log(apiData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8 px-5 mx-auto">
      {apiData.map((element, index) => (
        <Card 
        item={checker === "top10" ? element.item : element} 
        key={element.id}
        checker={checker}
        />
      ))}
    </div>
  );
};

export default Cards;


// We using tenary operator to create reusabiltiy as we have are using different apis and they have different keys like in one image is used and in another its thumb.
// checker === 'top10' ? element.item : element



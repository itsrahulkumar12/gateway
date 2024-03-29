import React from "react";

const PlaceCard = ({ url, place, desc }) => {
  return (
    <div className="max-w-sm  w-[300px] rounded overflow-hidden shadow-lg">
      <img className="w-full" src={url} alt={place} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{place}</div>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
      <div className="pb-2 flex justify-end me-3">
        <button className="inline-block bg-[#F2D831] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Let's go
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;

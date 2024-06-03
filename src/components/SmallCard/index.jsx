import React from "react";
import { FaMapMarkerAlt, FaMoneyBillWave, FaClock } from "react-icons/fa";
import './style.css';

const SmallCard = ({ activity, index, onSelect }) => {
  const { activityName, club, venue, shortTime, shortCost, image } = activity;

  return (
    <div className="card small-card" style={{ width: '10rem' }}>
      <img className="card-img-top" src={image} alt={club} />
      <div className="card-body">
        <h5 className="card-title">{activityName}</h5>
        <p className="card-text ">{club}</p>
        <p className="card-text"><span><FaMapMarkerAlt /></span> &nbsp; {venue}</p>
        <p className="card-text"><span><FaClock /></span> &nbsp; {shortTime}</p>
        <p className="card-text"><span><FaMoneyBillWave /></span> &nbsp; {shortCost}</p>
        <div className="mx-auto">
          <button 
            className="btn btn-outline-info"
            data-bs-toggle="modal"
            data-bs-target="#bigCardModal"
            onClick={() => onSelect(activity, index)}
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;

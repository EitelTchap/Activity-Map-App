import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaUser, FaAlignLeft, FaWhatsapp } from "react-icons/fa";
import activities from "../Activities";
import './style.css';
import Map from "../Map";

const BigCard = ({ activity }) => {
  const [index, setIndex] = useState(activities.findIndex(act => act.id === activity.id));

  const checkNumber = (number) => {
    if (number > activities.length - 1) {
      return 0;
    }
    if (number < 0) {
      return activities.length - 1;
    }
    return number;
  };

  const nextActivity = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevActivity = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const getRandomActivity = () => {
    let randomIndex = Math.floor(Math.random() * activities.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };

  const currentActivity = activities[index];

  const {
    activityName,
    club,
    category,
    venue,
    googleMapURL,
    description,
    whatsappURL,
    lead,
    cost,
    payment,
    time,
    image,
  } = currentActivity;

  return (
    <article className="review">
      <div className="container d-flex justify-content-center align-items-center">
        <button className="prev-btn" onClick={prevActivity}>
          <FaChevronLeft />
        </button>
        <img src={image} alt={club} className="club-img" />
        <button className="next-btn" onClick={nextActivity}>
          <FaChevronRight />
        </button>
      </div>
      <h4 className="activityName">{activityName}</h4>
      <h5 className="club">{club}</h5>
      <p className="category">{category}</p>
      <div className="description">
        <h6><span><FaMapMarkerAlt /></span> Location</h6>
        <a href={googleMapURL}> {venue} </a>
      </div>
      <Map activities={activities} currentActivity={currentActivity} />
      <div className="description">
        <h6><span><FaUser /></span> Lead</h6>
        <p>{lead}</p>
      </div>
      <div className="description">
        <h6><span><FaClock /></span> When?</h6>
        <p>{time}</p>
      </div>
      <div className="description">
        <h6><span><FaAlignLeft /></span> Details</h6>
        <p>{description}</p>
      </div>
      <div className="description">
        <h6><span><FaMoneyBillWave /></span> Payment</h6>
        <p>{cost}</p>
        <p>Name: {payment.name} &nbsp;&nbsp;&nbsp; Bank: {payment.bank}</p>
        <p>Account Number: {payment.accountNumber} &nbsp;&nbsp;&nbsp; Sort Code: {payment.sortCode}</p>
      </div>
      <a href={whatsappURL} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="whatsapp-icon" /> Join Whatsapp
      </a>
    </article>
  );
};

export default BigCard;

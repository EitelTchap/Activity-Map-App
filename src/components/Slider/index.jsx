import React, { useRef, useState, useEffect } from "react";
import ReactCardCarousel from "react-card-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SmallCard from "../SmallCard";
import activities from "../Activities";
import './style.css';

const Slider = ({ onSelect }) => {
  const carouselRef = useRef(null);

  // Ensure localStorage has a default value of centeredCardID as 1 if not set
  useEffect(() => {
    if (!localStorage.getItem('centeredCardID')) {
      localStorage.setItem('centeredCardID', '1');
    }
  }, []);

  // Initialize the centeredCardID from localStorage if it exists
  const initialCenteredCardID = () => {
    const savedID = localStorage.getItem('centeredCardID');
    return savedID ? parseInt(savedID, 10) : activities[0].id;
  };

  const [centeredCardID, setCenteredCardID] = useState(initialCenteredCardID);

  useEffect(() => {
    localStorage.setItem('centeredCardID', centeredCardID);
  }, [centeredCardID]);

  const getCurrentIndex = () => {
    return activities.findIndex(activity => activity.id === centeredCardID);
  };

  const prevActivity = () => {
    const currentIndex = getCurrentIndex();
    const newIndex = currentIndex === 0 ? activities.length - 1 : currentIndex - 1;
    setCenteredCardID(activities[newIndex].id);
    carouselRef.current.prev();
  };

  const nextActivity = () => {
    const currentIndex = getCurrentIndex();
    const newIndex = currentIndex === activities.length - 1 ? 0 : currentIndex + 1;
    setCenteredCardID(activities[newIndex].id);
    carouselRef.current.next();
  };

  return (
    <div className="slider-container">
      <button
        className="slider-button slider-button-left"
        onClick={prevActivity}
      >
        <FaChevronLeft />
      </button>

      <ReactCardCarousel ref={carouselRef} autoplay={false} autoplay_speed={1500}>
        {activities.map((activity, index) => (
          <div key={index}>
            <SmallCard activity={activity} index={index} onSelect={onSelect} />
          </div>
        ))}
      </ReactCardCarousel>

      <button
        className="slider-button slider-button-right"
        onClick={nextActivity}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
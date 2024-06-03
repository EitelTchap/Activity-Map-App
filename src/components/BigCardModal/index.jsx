import React from "react";
import BigCard from "../BigCard";
import './style.css';

const BigCardModal = ({ activity }) => {
  if (!activity) return null;

  return (
    <div className="modal fade" id="bigCardModal" tabIndex="-1" role="dialog" aria-labelledby="bigCardModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h5 className="modal-title text-center" id="bigCardModalLabel">Details</h5>
          </div>
          <div className="modal-body">
            <BigCard activity={activity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCardModal;

import React from "react";
import locationLogo from "../Resources/location-icon.png";
export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img className="card-img" src={`Resources/${props.img}`} alt="" />
        <div className="card-details">
          <div className="card-location">
            <img className="card-location-icon" src={locationLogo} alt="" />
            <span className="card-country">{props.country}</span>
            <a className="card-location-link" href={props.locationLink}>
              View on Google Maps
            </a>
          </div>
          <h1 className="card-placeName">{props.placeName}</h1>
          <p className="card-date">{props.date}</p>
          <p className="card-desciption">{props.description}</p>
        </div>
      </div>
      <hr className="card-line-break" />
    </div>
  );
}

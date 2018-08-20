import React, { Component } from "react";
import "./restaurant.css";
class RestaurantList extends Component {
  render() {
    return (
      <div>
        <div className="container2">
          <div>
            <img
              src="../images/Kritunga.jpg"
              alt="Kritunga Restaurant"
              className="iconDetails"
            />
          </div>
          <div className="right">
            <h3>Kritunga Restaurant </h3>
          </div>
          <div>
            <img
              src="../images/BiryaniZone.jpg"
              alt="BiryaniZone"
              className="iconDetails"
            />
          </div>
          <div className="right">
            <h3>BiryaniZone </h3>
          </div>
          <div>
            <img
              src="../images/HydChefs.jpg"
              alt="HyderabadChefs"
              className="iconDetails"
            />
          </div>
          <div className="right">
            <h3>Hyderabad Chefs</h3>
          </div>
          <div>
            <img
              src="../images/Rayruch.jpg"
              alt="Rayalaseema Ruchulu Restaurant"
              height="100px"
              width="150px"
              ALIGN="right"
              className="iconDetails"
            />
          </div>
          <div className="right">
            <h3>Rayalaseema Ruchulu</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default RestaurantList;

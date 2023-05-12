import React from "react";
import HeaderPage from "../FirstPage/HeaderPage/HeaderPage";
import Button from "../Button/button";

function Visual() {
  return (
    <div className="visual-frame">
      <div className="visual-headerpage">
        <HeaderPage props=" Visual Search" />
      </div>
      <div className="img ">
        <div className="Visual-Div">
          <p>
            Search for an outfit by <br /> taking a photo or uploading <br /> an
            image
          </p>
          <Button props=" Take a photo" />
          <span className="Visual-Button">
            <Button props=" Upload a photo" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Visual;

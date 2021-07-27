import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import "./header.css";

const Header: React.FC = () => {

  const [colorThemeChecked, setColorThemeChecked] = useState(false);
  const [layoutThemeChecked, setLayoutThemeChecked] = useState(false);

  useEffect(() => {
    const colorTheme = localStorage.getItem("colorTheme");
    const layoutTheme = localStorage.getItem("layoutTheme");

    let colorDataAttr = "light";
    if (colorTheme == null) colorDataAttr = "light";
    else colorDataAttr = colorThemeChecked ? "dark" : "light";

    let layoutDataAttr = "normal";
    if (layoutTheme == null) layoutDataAttr = "normal";
    else layoutDataAttr = layoutThemeChecked ? "large" : "normal";

    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-colortheme", colorDataAttr);

    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-layouttheme", layoutDataAttr);
  }, [colorThemeChecked, layoutThemeChecked]);

  const toggleThemeChange = () => {
    setColorThemeChecked((previousValue) => {
      let checked = !previousValue
      if (checked === false) {
        localStorage.setItem("colorTheme", "light");
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-colortheme", "light");
      } else {
        localStorage.setItem("colorTheme", "dark");
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-colortheme", "dark");
      }

      return !previousValue
    });

  };

  const toggleLayoutChange = () => {
    setLayoutThemeChecked((previousValue) => {
      let checked = !previousValue;
      if (checked === false) {
        localStorage.setItem("layoutTheme", "normal");
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-layoutTheme", "normal");
      } else {
        localStorage.setItem("layoutTheme", "large");
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-layoutTheme", "large");
      }

      return !previousValue;
    });
  };


  return (
    <div className="header">
      <div className="links-container">
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/feed">
          Feed
        </Link>
      </div>
      <div className="button-container">
        <button
          id="mode"
          className="theme-changer"
          onClick={() => toggleThemeChange()}
        >
          <FontAwesomeIcon
            icon={colorThemeChecked ? faMoon : faSun}
            color={colorThemeChecked ? "darkgray" : "#FFA500"}
          />
        </button>
        <button
          id="layout"
          className="theme-changer"
          onClick={() => toggleLayoutChange()}
        >
          <FontAwesomeIcon icon={layoutThemeChecked ? faEye : faEyeSlash} />
        </button>
      </div>
    </div>
  );
};

export default Header;

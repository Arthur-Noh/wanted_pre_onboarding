import React, { useState } from "react";
import styles from "./toggle.module.css";
import { COMMON_COLOR_ENUM } from "../commons/enum/commonColorEnum";

const Toggle = () => {

  const clickStyle = {
    color: "#5B5D5E",
    fontWeight: "800",
    flex: 1,
    textAlign: "center",
    zIndex: 10,
  }

  const nonClickStyle = {
    color: "#A1A0A0",
    fontWeight: "800",
    flex: 1,
    textAlign: "center",
    zIndex: 10,
  }

  const [ toggleFontState, setToggleFontState ] = React.useState(true);
  const [ leftStyle, setLeftStyle ] = React.useState(clickStyle);
  const [ rightStyle, setRightStyle ] = React.useState(nonClickStyle);

  const changeToggle = () => {
    setToggleFontState(!toggleFontState);
  }

  React.useEffect(() => {
    setLeftStyle(toggleFontState? clickStyle: nonClickStyle);
    setRightStyle(!toggleFontState? clickStyle: nonClickStyle);

  }, [ toggleFontState, setToggleFontState ])

  return (
    <label className={styles.toggle}>
      <input type="checkbox"/>
      <span className={styles.slider}/>
      <div style={{ display: "flex", position: "absolute", alignItems: "center", top: 0, right: 0, bottom: 0, left: 0 }} onClick={changeToggle}>
        <div style={leftStyle}>기본</div>
        <div style={rightStyle}>상세</div>
      </div>
    </label>
  )
}

export default Toggle;

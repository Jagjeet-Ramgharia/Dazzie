import React, { ChangeEventHandler } from "react";
import styles from "./switch.module.scss";

type props = {
  checked: boolean;
  onchange: ChangeEventHandler;
};

function CustomSwitch({ checked, onchange }: props) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={onchange} />
      <span className={styles.slider}></span>
    </label>
  );
}

export default CustomSwitch;

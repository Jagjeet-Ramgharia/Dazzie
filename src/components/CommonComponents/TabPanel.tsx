import React, { useEffect, useState } from "react";

export default function TabPanel(props: any) {
  const [inProp, setInProp] = useState(false);
  const { children, value, index, ...other } = props;
  useEffect(() => {
    setInProp(value === index);
  }, [value, index]);

  return (
    <div
      // className="fade"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

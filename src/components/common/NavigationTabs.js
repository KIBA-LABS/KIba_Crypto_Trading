import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function NavigationTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        style={{ float: "right", border: "none", fontWeight: "bold" }}
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="white"
        aria-label="secondary tabs example"
      >
        <Tab
          value="one"
          style={{ outline: "none", fontWeight: "bold" }}
          label="HOME"
        />
        <Tab
          style={{ outline: "none", fontWeight: "bold" }}
          value="two"
          label="Buy"
        />
        <Tab
          style={{ outline: "none", fontWeight: "bold" }}
          value="three"
          label="Sell"
        />
        <Tab
          style={{ outline: "none", fontWeight: "bold" }}
          value="three"
          label="Market History"
        />
      </Tabs>
    </Box>
  );
}

import React from "react";
import Icon from "./Icon";

// source https://material.io/tools/icons/?icon=error&style=baseline
const Warning = props => (
  <Icon
    {...props}
    path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
  />
);

export default Warning;

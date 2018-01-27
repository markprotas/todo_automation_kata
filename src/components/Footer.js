import React from "react";
import FilterLink from "../containers/FilterLink";

const Footer = () => (
  <p>
    Show:{" "}
    <FilterLink filter="SHOW_ALL" linkId="showAll">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE" linkId="showActive">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED" linkId="showCompleted">
      Completed
    </FilterLink>
  </p>
);

export default Footer;

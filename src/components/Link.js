import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick, linkId }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      id={linkId}
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  linkId: PropTypes.string.isRequired
};

export default Link;

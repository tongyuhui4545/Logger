import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return (
    <div>
      <li className="collection-item">
        <div>
          {tech.firstName} {tech.lastName}
          <a href="!#" className="secondary-content">
            <i className="material-icons red-text">delete</i>
          </a>
        </div>
      </li>
    </div>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;

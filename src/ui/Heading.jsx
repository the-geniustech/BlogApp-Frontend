// import PropTypes from "prop-types";
import classNames from "classnames";

const Heading = ({ as: Component, children }) => {
  const headingClass = classNames({
    "text-3xl font-semibold": Component === "h1",
    "text-2xl font-semibold": Component === "h2",
    "text-2xl font-medium": Component === "h3",
    "text-3xl font-semibold text-center": Component === "h4",
    "leading-tight": true,
  });

  return <Component className={headingClass}>{children}</Component>;
};

// Heading.propTypes = {
//   as: PropTypes.oneOf(["h1", "h2", "h3", "h4"]).isRequired,
//   children: PropTypes.node.isRequired,
// };

export default Heading;

import propTypes from "prop-types";
export const Button = ({ showFilms, isShown }) => {
  return (
    <button onClick={showFilms}>{isShown ? "Hidefilms" : "Show films"}</button>
  );
};

Button.propTypes = {
  showFilms: propTypes.func.isRequired,
  isShown: propTypes.bool.isRequired,
};

import propTypes from "prop-types";
export const GalleryListItem = ({ img, title, id }) => {
  return (
    <li id={id}>
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} />
      <h2>{title}</h2>
    </li>
  );
};

GalleryListItem.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
};

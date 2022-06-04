import propTypes from "prop-types";
import s from "./Gallery.module.css";

export const GalleryListItem = ({ img, title, id, isWatched, onClick }) => {
  return (
    <li className={s.galleryItem}>
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${img}`}
        alt={title}
        className={s.galleryImg}
        onClick={() => onClick(img)}
      />

      {/* <p onClick={() => toggleWatched(id)}>Watched: {isWatched.toString()}</p> */}
    </li>
  );
};

GalleryListItem.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string,
  id: propTypes.number.isRequired,
  isWatched: propTypes.bool.isRequired,
  // toggleWatched: propTypes.func.isRequired,
};

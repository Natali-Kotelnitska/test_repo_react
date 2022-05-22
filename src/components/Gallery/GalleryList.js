import { GalleryListItem } from "./GalleryListItem";
import propTypes from "prop-types";
export const GalleryList = ({ movies, toggleWatched }) => {
  return (
    <ul>
      {movies.map(({ img, title, id, isWatched }) => (
        <GalleryListItem
          img={img}
          title={title}
          id={id}
          isWatched={isWatched}
          toggleWatched={toggleWatched}
          key={id}
        />
      ))}
    </ul>
  );
};

GalleryList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      img: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
      isWatched: propTypes.bool.isRequired,
    })
  ),
  toggleWatched: propTypes.func.isRequired,
};

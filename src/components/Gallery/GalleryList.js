import { GalleryListItem } from "./GalleryListItem";
import propTypes from "prop-types";
export const GalleryList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ img, title, id }) => (
        <GalleryListItem img={img} title={title} id={id} key={id} />
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
    })
  ),
};

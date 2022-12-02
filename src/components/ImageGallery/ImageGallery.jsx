import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './Styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({pictures = [], onClick = () => {}}) => {

    return (
      <>
        <GalleryList>
          {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              onClick={onClick}
            />
          ))}
        </GalleryList>
      </>
    );
};
ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    )
}

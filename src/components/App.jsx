import React, { useState } from 'react';
import { searchImgFromApi } from 'Api/Api';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import Loader from './Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

 export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [searchQ, setSearchQ] = useState('');
  const [page, setPage] = useState(1);
  const [modalImg, setModalImg] = useState(false);
  const [loader, setLoader] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);

  useEffect(() => {
    if (searchQ) {
      loadSearchingImg();
    }

    async function loadSearchingImg() {
      try {
        setLoader(true);
        setHideBtn(true);
        const data = await searchImgFromApi(searchQ, page);

        if (!data.hits.length) {
          setLoader(false);
          return toast('🦄 Sorry, we not found images...');
        }

        setPictures(prevState => [...prevState, ...data.hits]);
        setLoader(false);

        if (page === Math.ceil(data.totalHits / 12)) {
          toast('🦄 Sorry, this is the end of list...');
          setHideBtn(false);
        }
        return;
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchQ, page]);

  const searchImg = searchQuerry => {
    if (!searchQuerry || searchQuerry === searchQ) return;
    setSearchQ(searchQuerry);
    setPage(1);
    setPictures([]);
    setHideBtn (false);
  };

  const onClickLoadMore = () => {
    setPage(page + 1);
  };

  const onModalOpen = url => {
    setModalImg(url);
  };

  const onModalClose = () => {
    setModalImg('');
  };

  return (
    <div className="App">
      <Searchbar onSubmit={searchImg} />
      <ImageGallery pictures={pictures} onClick={onModalOpen} />
      {pictures.length > hideBtn && <Button onClick={onClickLoadMore} />}

      {modalImg && <Modal closeModal={onModalClose} url={modalImg} />}

      {loader && <Loader />}
      <ToastContainer />
    </div>
  );
};

export default App;

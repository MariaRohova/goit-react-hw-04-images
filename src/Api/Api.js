import axios from 'axios';

export async function searchImgFromApi (searchQuerry, page) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchQuerry}&page=${page}&key=31037310-19e6bbc5f2d6061f6c8861bbf&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default searchImgFromApi;
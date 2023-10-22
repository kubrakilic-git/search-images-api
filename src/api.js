import axios from 'axios';
const searchImages = async (valinput) =>{
    //burada unplash apiye istek atacağız
    //acces key kullanıldı
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID gNKjPLhO3fHQKYkbnNLZMUMsQvNQB6wpLNWECI5DK5U'
      },
      params:{
        query:valinput
      }
    })
    return response.data.results;
  }




  export default searchImages;

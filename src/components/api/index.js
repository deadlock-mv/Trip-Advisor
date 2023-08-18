import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

const options = {
    params: {
      bl_latitude: '11.847676',
      bl_longitude: '108.473209',
      tr_longitude: '109.149359',
      tr_latitude: '12.838442',
    },
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  // add key in the headers 
export const getPlaceData = async (type, sw, ne) => {
    try{
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
            },
            headers: {
              'X-RapidAPI-Key': '',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
          });

        return data;
    }
    catch (error){
        console.log(error);
    }
    
}

export const getWeatherData = async () => {
  try{
    const {data} = await.axios.get()
  }
  catch (error){
    console.log(error);
  }
}
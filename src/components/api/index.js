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
      'X-RapidAPI-Key': '6011cafca3msh7e5425ce941bb38p10e2c3jsnb0b334ce19d0',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

export const getPlaceData = async (sw, ne) => {
    try{
        const {data : {data}} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
            },
            headers: {
              'X-RapidAPI-Key': '909b0164d2msh36cb1478feaa187p1f20b5jsn68d77c897dbc',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
          });

        return data;
    }
    catch (error){
        console.log(error);
    }
    
}
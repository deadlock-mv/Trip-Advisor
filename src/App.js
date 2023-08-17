import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlaceData } from './components/api/index';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const [places, setPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({sw:{} , ne:{} });

    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState("hotels");
    const [rating, setRating] = useState('');

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
            setCoordinates({lat: latitude, lng: longitude});
        });
    },[]);

    useEffect(()=>{
        setIsLoading(true);

        getPlaceData(type, bounds.sw, bounds.ne)
            .then((data)=>{
                console.log(data);
                setPlaces(data);
                setIsLoading(false);
            })
    },[type, coordinates, bounds]);
     
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <List 
                    places={places}
                    childClicked={childClicked}
                    isLoading={isLoading}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates = {setCoordinates}
                        setBounds = {setBounds}
                        coordinates = {coordinates}
                        places = {places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;
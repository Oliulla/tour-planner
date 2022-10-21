import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SpotDetails = () => {
    const spotDetails = useLoaderData();
    console.log(spotDetails)
    return (
        <div>
            <h2>{spotDetails.name}</h2>
        </div>
    );
};

export default SpotDetails;
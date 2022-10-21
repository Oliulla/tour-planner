import React from 'react';
import EachCard from '../EachCard/EachCard';

const SpotCards = ({spots, handleBooking}) => {
    return (
        <div className='row mt-5'>
            {
                spots.map(spot => (
                    <EachCard key={spot.id}
                        spot={spot}
                        handleBooking={handleBooking}
                    />
                ))
            }
            
        </div>
    );
};

export default SpotCards;
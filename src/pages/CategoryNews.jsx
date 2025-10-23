import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {paramID} = useParams();

    return (
        <div>
            <h1>category news ${paramID}</h1>
        </div>
    );
};

export default CategoryNews;
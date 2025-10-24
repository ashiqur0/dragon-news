import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const {thumbnail_url, title, details, category_id} = news;

    return (
        <div className='p-8'>
            <img src={thumbnail_url} className='w-full h-[350px] object-cover' alt="" />
            <h2 className='font-bold text-2xl text-primary mt-5 mb-2'>{title}</h2>
            <p className='mb-8'>{details}</p>
            <Link to={`/category/${category_id}`} className='font-medium text-base-100 bg-secondary px-6 py-2 flex items-center gap-3 w-1/3'>
            <FaArrowLeft />
            <span>All news in this category</span>
            </Link>
        </div>
    );
};

export default NewsDetailsCard;
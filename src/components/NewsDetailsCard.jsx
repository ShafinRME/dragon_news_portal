import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const { title, image_url, details, category_id } = news;
    return (
        <div className='space-y-5'>
            <img className='w-full h-[350px] object-cover' src={image_url} alt="" />
            <h2 className='text-2xl'>{title}</h2>
            <p className='text-accent'>{details}</p>
            <Link className='btn btn-secondary' to={`/category/${category_id}`}>Back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;
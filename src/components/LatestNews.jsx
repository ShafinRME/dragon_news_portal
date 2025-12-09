import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    const [trendingNews, setTrendingNews] = useState([]);

    useEffect(() => {
        fetch('/news.json') // Ensure this path is correct
            .then((res) => res.json())
            .then((data) => {
                // Filter only trending news items
                const trending = data.filter(item => item.others?.is_trending);
                setTrendingNews(trending);
            })
            .catch((err) => console.error("Failed to load news:", err));
    }, []);

    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>

            <Marquee className='flex gap-10' pauseOnHover={true} speed={60}>
                {
                    trendingNews.map((item) => (
                        <p key={item.id} className='font-bold mr-5 whitespace-nowrap'>
                            {item.title}
                        </p>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;

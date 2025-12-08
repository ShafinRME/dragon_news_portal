import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayouts/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails);
    }, [data, id]);

    return (
        <div>
            <header >
                <Header></Header>
            </header>
            <main className="grid grid-cols-12 gap-5 w-11/12 mx-auto">
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard key={id} news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
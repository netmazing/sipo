import React from 'react';
import Layout from '../components/Layout';
import "../css/news.css";
import NewsList from '../components/news/NewsList';

const news = () => {
    return (
        <Layout>
            <main className="news">
                <header className="news__header header">
                    <h1 className="news__title title">Konferencje i spotkania</h1>
                </header>
                <div className="news__wrapper">
                    <NewsList />
                </div>
            </main>
        </Layout>
    )
}

export default news

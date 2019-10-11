import React from 'react';
import Layout from '../components/Layout';
import "../css/news.css";

const news = () => {
    return (
        <Layout>
            <main className="news">
                <header className="news__header header">
                    <h1 className="news__title title">Konferencje i spotkania</h1>
                </header>
            </main>
        </Layout>
    )
}

export default news

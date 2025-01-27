import { useState, useEffect } from 'react';
import { Article } from '../types/Article';

export const ArticleList = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) throw new Error('Failed to fetch articles');
                const data = await response.json();
                setArticles(data.map((article: Article) => ({ ...article, likes: 0 })));
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            }
        };

        fetchArticles();
    }, []);

    const handleLike = (id: number) => {
        setArticles(articles.map(article =>
            article.id === id
                ? { ...article, likes: (article.likes || 0) + 1 }
                : article
        ));
    };

    if (error) return <div>{error}</div>;

    return (
        <div>
            {articles.map(article => (
                <div style={{ border: '1px solid #ccc' }} key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                    <button onClick={() => handleLike(article.id)}>
                        Like ({article.likes || 0})
                    </button>
                </div>
            ))}
        </div>
    );
};

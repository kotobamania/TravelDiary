import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardData from './CardData';

const ArticlePage = () => {
    const { id } = useParams();
    const article = CardData.find((card) => card.id === parseInt(id, 10));
    const navigate = useNavigate();

    if (!article) {
      return <div>Article not found</div>;
    };

    const goBack = () => {
      navigate(-1);
    };

    return (
      <div className='article'>
        <span onClick={goBack} className='goback'>
          &lt; Go Back
        </span>
      <article>
        <h2>{article.title}</h2>
        <h3>{article.place}</h3>
        <img src={`/images/${article.cardImg}`} className="cardImg" alt="" />
        {/*<p>{article.stats.viewCnt} Views</p>
        <p>{article.stats.commentCnt} Comments</p> */}
        <p className="date">Update: {article.date}</p>
        <p className="article">{article.article}</p>
        <p className="author">{article.author}</p>
        <img src={`/images/${article.authorImg}`} className="authorImg" alt="" />
      </article>
      </div>
    );
  };

  export default ArticlePage;

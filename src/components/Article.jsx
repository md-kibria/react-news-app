import React from 'react'

const Article = ({ article }) => {

    return (
        <a href={article.url}>
            <div className='card mb-3'>
                {/* Article Thumbnail */}
                <img src={article.urlToImage} className='card-img-top' alt="" />

                <div className="card-body text-secondary">

                    <h3 className='article-title'>{article.title}</h3>
                    <p>{article.description}</p>

                    <div className="meta d-flex justify-content-between">
                        <h6 className='text-bold'>{new Date(article.publishedAt).toDateString()}</h6>
                        <p>{article.author}</p>
                    </div>
                    
                </div>
            </div>
        </a>
    )
}

export default Article

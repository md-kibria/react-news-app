import Loader from './Loader'
import Article from './Article'

const News = ({ articles, isLoading }) => {

    return (
        <main className='main'>
            {isLoading && <Loader />}
            {
                articles.map((article, i) => <Article key={i} article={article} />)
            }
        </main>
    )
}

export default News

import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import axios from './utils/axios'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({articles: [], totalResults: 0})
  const [currentPage, setCurrentPage] = useState(1)
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')

  const postPerPage = 10
  let totalResults = data.totalResults
  let totalPage = Math.ceil(totalResults / postPerPage)

  useEffect(() => {
    async function fetchData() {
      try {
        let url = `${process.env.REACT_APP_NEWS_URL}?country=us&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${postPerPage}&page=${currentPage}&category=${category}&q=${q}`
        const { data } = await axios.get(url)
        
        setData(data)
        setIsLoading(false)

      } catch (error) {
        alert('Ops! Something wrong')
        setIsLoading(true)
        console.log(error)
      }
    }

    fetchData()
  }, [currentPage, q, category])

  return (
    <div className="app container">
      <Header
        title="News App"
        totalResults={totalResults}
        totalPage={totalPage}
        currentPage={currentPage}
        q={q}
        setQ={setQ}
        category={category}
        setCategory={setCategory}
      />
      <News articles={data.articles} isLoading={isLoading} />
      <Footer
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;

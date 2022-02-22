import React from 'react'

const categories = {
    science: 'Science',
    technology: 'Technology',
    echonomic: 'Echonomic',
    sports: 'Sports',
    entertainment: 'Entertainment',
}

const Header = ({ title, totalResults, totalPage, currentPage, q, setQ, category, setCategory }) => {

    const handleQ = e => {
        e.preventDefault()
        setQ(e.target.value)
    }

    const handleSetCategory = cat => {
        if (category === cat) {
            setCategory('')
        } else {
            setCategory(cat)
        }
    }

    return (
        <header>
            <h1 className='title text-secondary'>{title}</h1>
            <div className="form-group d-flex">
                <input
                    type="search"
                    className="form-control"
                    placeholder='Search...'
                    onChange={e => handleQ(e)}
                    value={q}
                />
            </div>
            <div className="categories">
                {
                    Object.keys(categories).map(cat => (
                        <button key={cat} className={category === cat ? 'btn btn-warning' : 'btn btn-light'} onClick={() => handleSetCategory(cat)}>{categories[cat]}</button>
                    ))
                }
            </div>
            <div className="result d-flex justify-content-between">
                {totalResults !== 0 && <p className='text-secondary'>Total results {totalResults}</p>}
                {totalPage !== 0 && <p className="text-secondary">page {currentPage} of {totalPage}</p>}
            </div>
        </header>
    )
}

export default Header

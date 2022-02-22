import React from 'react'

const Footer = ({ totalPage, currentPage, setCurrentPage }) => {

    const handleChengePage = page => {
        setCurrentPage(page)
    }

    const handleGoNext = () => {
        setCurrentPage(currentPage + 1)
    }

    const handleGoPrev = () => {
        setCurrentPage(currentPage - 1)
    }

    return (
        <footer className='footer'>
            <button className="btn btn-warning" onClick={handleGoPrev} disabled={currentPage === 1}>Prev</button>
            <div className="pagination">
                {
                    Array(totalPage).fill('*').map((v, i) => (
                        <p
                            key={i}
                            className={i + 1 === currentPage ? 'page active' : 'page'}
                            onClick={() => handleChengePage(i + 1)}
                        >
                            {i + 1}
                        </p>
                    ))
                }
            </div>
            <button className="btn btn-warning" onClick={handleGoNext} disabled={currentPage === totalPage}>Next</button>
        </footer>
    )
}

export default Footer

import data from './booksData';
import './Products.css'
import { useState } from 'react';

function Products(props) {
    console.log(data);
    const cardStyle = {
        maxWidth: '540px'
    }
    const [books, setBooks] = useState(data);
    const [currBook, setCurrBook] = useState('');

    const handleChange=(event)=>{
        setCurrBook(event.target.value);
    }
    
    const handleSearch=(event)=>{
        event.preventDefault()
        let filBook = books.filter((item)=>item.title===currBook)
        setBooks(filBook);
        console.log(filBook);
    }

 
    //filtering data based on the key
    const sortBook = (event, key) => {
        if(key === 'price') {
            const sorteddata=[...books].sort((a,b)=>{
                return Number(a.price)-Number(b.price)
            })
            setBooks(sorteddata);
        } 
        if(key === 'rating') {
            const sorteddata=[...books].sort((a,b)=>{
                return Number(b.rating)-Number(a.rating)
            })
            setBooks(sorteddata);
        }
        if(key === 'random') {
            setBooks(data);
        }
    }

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">BuyMyBooks.com</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" onClick={(e)=> sortBook(e, 'random')}>Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#" onClick={(e)=> sortBook(e, 'price')}>Sort by Price</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#"  onClick={(e)=> sortBook(e, 'rating')}>Sort by rating</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Log-out</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>handleChange(e)}/>
                            <button class="btn btn-outline-success" onClick={(e)=> handleSearch(e)}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='container'>
                <div className='row'>
                    {
                        books.map((item) => (
                            <div className="card mb-3" style={cardStyle}>

                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.thumbnailUrl} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.shortDescription}</p>
                                            <p className="card-text"><small className="text-muted">{item.authors[0]}</small></p>
                                            <p>₹ {item.price}</p>
                                            <p>Stars: {item.rating}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
        </div>
    )
}

export default Products
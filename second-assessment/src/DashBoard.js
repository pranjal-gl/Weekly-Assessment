import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css'
import NavComp from './NavComp';
import data from './booksData'

function DashBoard(props) {

    //using static user data
    const user = {
        username: "admin",
        fname: "Peter Parker",
        imgURL: 'https://imgix.bustle.com/uploads/image/2022/3/22/c146552e-4482-46f7-8216-c8307fd90a5d-peter-parker.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.5173&fp-y=0.341'
    }
    const cardStyle = {
        maxWidth: '540px'
    }

    //for purchased items
    const books = data.filter((item) => item.pur === true);

    //for wishlist
    const wish = data.filter((item)=>item.wish === true);
    console.log(books);
    return (
        <div>
            <NavComp></NavComp>
            <div className='div'>
                <h1>Dashboard</h1>
                <img src={user.imgURL} className='profImg' />
                <h2>{user.fname}</h2>
                <p>Username: {user.username}</p>
                <div>
                    <p>Delivery Address: San Jose, California, US</p>
                </div>
                <button className="btn">
                    <NavLink className='link' to='/products' style={({ isActive }) => (
                        { color: isActive ? 'red' : 'blue' }
                    )}>
                        Proceed to Shopping
                    </NavLink>
                </button>
                <h1>Recent Purchase</h1>
            </div>

            <div>
                
                <div className='container'>
                    <div className='row'>
                        {
                            books.map((item)=> (
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='div'>
                <h1>Wishlist</h1>
                <div className='container'>
                    <div className='row'>
                        {
                            wish.map((item)=> (
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashBoard
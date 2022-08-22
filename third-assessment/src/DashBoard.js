import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, getMovies, deleteMovie } from "./useSlice";
import { Link } from 'react-router-dom';
const DashBoard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch])
    const { movies } = useSelector((state) => state.movies.value)

    const deleteCurrMovie = (e, key) => {
        e.preventDefault();
        dispatch(deleteMovie(key));
        console.log("deleted");
    }

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleChange = (e, key) => {
        if (key === 'title') setTitle(e.target.value);
        if (key === 'date') setDate(e.target.value);
    }
    const addNewMovie = (e) => {
        e.preventDefault();
        const newMovieData = {
            Title: title,
            Released: date,
        }
        dispatch(addMovie(newMovieData));
        console.log("added");
    }

    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <Link to='/home'>Home</Link>
                <Link to='/dashboard'>DashBoard</Link>
            </nav>
            <h1>DashBoard</h1>
            
            <div>
                <h3>
                    Add movies
                </h3>
                <form>
                    <div className='login-form'>
                        <input type='text' placeholder='Title' onChange={(e) => handleChange(e, 'title')} />
                        <br />
                        <input type='text' placeholder='Release Date' onChange={(e) => handleChange(e, 'date')} />
                        <br />
                        <button className='btn btn-primary' onClick={(e)=>addNewMovie(e)}>
                            Add
                        </button>
                    </div>
                </form>
                <h5>Once added, please navigate to home page and get back to DashBoard for changes to reflect in the DashBoard</h5>
            </div>
            <div className="container">
                <div className="row">
                    {
                        movies.map((item) => (
                            <div className="card card-body col-4">
                                <h4>{item.Title}</h4>
                                <p>Release date: {item.Released}</p>
                                <button onClick={(e)=>deleteCurrMovie(e, item.id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default DashBoard;
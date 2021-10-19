import { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/category/"
        })
        .then(response =>{
            setCategories(response.data)
        })
    }, [])

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                {categories.map(category=>(
                    <li class="nav-item">
                        <a class="nav-link" key={category.id} href="#">{category.name}</a>
                    </li>
                ))}
                
                
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;

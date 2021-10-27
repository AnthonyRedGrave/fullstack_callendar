import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'
import Table from '../Calendar/Table.js'


function Main() {

    // useEffect(()=>{
    //     axios({
    //         method: "GET",
    //         url: "http://127.0.0.1:8000/api/token/",
    //         credentials: 'include',
    //     })
    //     .then(response =>{
    //         console.log(response.data)
    //     })
    // })

  return (
    <div>
        <Table/>
    </div>

  );
}

export default Main;
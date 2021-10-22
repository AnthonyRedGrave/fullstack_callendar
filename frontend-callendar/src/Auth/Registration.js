import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom' 


function Registration(){

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = (e: SyntheticEvent) =>{
        e.preventDefault();

        axios({
            url: "http://localhost:8000/api/auth/users/",
            method: "POST",
            data:{ 
                username: login,
                password: password
            }

        })
        .then(response=>{
            console.log(response.data)
            setRedirect(true)
        })

        
    }

    if (redirect){
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <h1>Регистрация нового пользователя</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Логин</label>
                    <input type="input" className="form-control" id="exampleFormControlInput1" placeholder="Логин" onChange={e=>setLogin(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Пароль</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Пароль" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Войти</button>
                </div>
            </form>
        </div>


    )

}

export default Registration;
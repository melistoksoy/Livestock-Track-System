import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import logo from './assets/logo.png'
import { Outlet, Link } from "react-router-dom";
import {  useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function Login() {

    const [number,setNumber]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/user/login", {
          number: number,
          password: password,
          }).then((res) => 
          {
           console.log(res.data);
           
           if (res.data.message == "User not exits") 
           {
             alert("Kullanıcı Bulunamadı!");
           } 
           else if(res.data.message == "Login Success")
           { 
              
              navigate('/profile/home');
           } 
           else if(res.data.message == "Password Not Match")
           { 
            alert("Hatalı Şifre!");
           } 
            else 
           { 
              alert("Giriş Yapılamadı.");
           }
        }, fail => {
         console.error(fail); // Error!
});
      }
       

         catch (err) {
          alert(err);
        }
      }
    
    
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='bg-white p-3 rounded-2 w-25 border'>
                <div>
                    <img src={logo} alt="" className='logo' />
                    <h2>HKTS</h2>

                </div>

                <form action="">
                    <div className='mb-1'>
                        <label htmlFor="phone-number"></label>
                        <input type="phone-number" placeholder='Telefon Numarası' name='phone-number'
                            className='form-control rounded-0'
                            value={number}
                            onChange={(event)=> {
                                setNumber(event.target.value);
                            }} />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"></label>
                        <input type="password" placeholder='Şifre' name='password'
                            className='form-control rounded-0'
                            value={password}
                            onChange={(event)=> {
                                setPassword(event.target.value);
                            }} />

                    </div>
                    <button type='submit' className='btn w-100 rounded-1 mb-3' style={{ backgroundColor: '#7AA874' }} onClick={login}> Giriş Yap</button>
                    <Link to="/kayıt">
                        <button className='btn btn-default border w-100 bg-light rounded-1 text-decoration'>Kaydol</button>
                        </Link>
                        
                  

                </form>
            </div>

        </div>
    )
}

export default Login
import React from 'react'
import logo from './assets/logo.png'
import { useState } from "react";
import axios from "axios";


function Register() {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");


  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/user/save", {
        name: name,
        surname: surname,
        number: number,
        password: password,
      });
      alert("Kayıt Oluşturuldu.");
      window.location.href = '/';

    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center  register'>

      <div className='bg-white p-3 rounded-2 w-25 border' >
        <div>
          <img src={logo} alt="" className='logo' />
          <h2>HKTS</h2>

        </div>
        <form>
          <div class="form-group mb-3">


            <input type="text" class="form-control" id="employeename" placeholder="Adı"

              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

          </div>

          <div class="form-group mb-3">

            <input type="email" class="form-control" id="email" placeholder="Soyadı"

              value={surname}
              onChange={(event) => {
                setSurname(event.target.value);
              }}

            />

          </div>
          <div class="form-group mb-3">

            <input type="email" class="form-control" id="email" placeholder="Telefon Numarası"

              value={number}
              onChange={(event) => {
                setNumber(event.target.value);
              }}

            />

          </div>

          <div class="form-group mb-3">

            <input type="password" class="form-control" id="password" placeholder="Şifre"

              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}

            />
          </div>

          <button type="submit" class="btn btn-default border w-100 rounded-1 mb-3" style={{ backgroundColor: '#7AA874' }} onClick={save} >Kaydet</button>



        </form>
        <div className='hesap'>
          <p>Hesabın var mı? <a href=" /">Giriş Yap</a></p>
        </div>

      </div>



    </div>
  );
}

export default Register;
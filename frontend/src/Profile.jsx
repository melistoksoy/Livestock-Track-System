import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet } from 'react-router-dom'
import logo from './assets/logo-top.png'

function Profile() {
  const onClick = () => {
    localStorage.clear();

  }
  return (
    <div className='profile'>

      <div class="container-fluid mt-5 pt-0">


        <div class="row">

          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">

            <div class="d-flex flex-column align-items-center align-items-sm-start px-2 pt-4 text-white vh-100">

              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                  <a href="/profile/home" class="nav-link align-middle px-0 text-white">
                    <i class="fs-4 bi-house "></i> <span class="ms-1 d-none d-sm-inline">Anasayfa</span>
                  </a>
                </li>
                <li>
                  <Link to="/profile/animals" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                    <i class="fs-4 bi-card-list "></i>  <span class="ms-1 d-none d-sm-inline">Hayvanlarım</span> </Link>

                </li>

                <li>
                  <a href="/profile/addanimal" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                    <i class="fs-4 bi-clipboard2-plus"></i> <span class="ms-1 d-none d-sm-inline">Hayvan Kaydı</span></a>

                </li>
                <li>
                  <a href="/profile/vacc" class="nav-link px-0 align-middle text-white">
                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Aşı Takvimi</span></a>
                </li>
                <li>
                  <a href="/profile/vet" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                    <i class="fs-4 bi-calendar-check"></i> <span class="ms-1 d-none d-sm-inline">Veteriner Randevusu</span> </a>

                </li>
                <li>
                  <a href="/" class="nav-link px-0 align-middle text-white">
                    <i class="fs-4 bi-power"></i> <span class="ms-1 d-none d-sm-inline" onClick={onClick}>Çıkış Yap</span> </a>
                </li>
              </ul>


            </div>

          </div>



          <div className='col'>
            <nav class="navbar fixed-top navbar-light bg-dark">
              <a class="navbar-brand text-white" href="#">
                Hayvan Kayıt ve Takip Sistemi
              </a>
            </nav>
            
            <div className='pt-5 content'>
      
              <Outlet />
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
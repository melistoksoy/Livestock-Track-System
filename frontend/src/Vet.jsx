import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Vet() {
  let navigate = useNavigate();

  const [data, setData] = useState({
    cons: '',
    name: '',
    day: '',
    hour: '',
  });
  const { cons, name, day, hour } = data;
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/vet", data);
    navigate('/profile/cons');

  };
  const onClick = () => {

    navigate('/profile/cons');
  };


  return (

    <div className=" ">
      <div className="d-flex flex-column p-4 align-items-center">
        <form className="row g-3 w-50" onSubmit={onSubmit} >
          <div className="col-12">
            <label htmlFor="cons" className="form-label">
              Muayene Konusu
            </label>
            <input
              type="text"
              className="form-control"
              name="cons"
              placeholder="Muayene konusu"
              autoComplete="off"
              onChange={onInputChange}
            />
          </div>

          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Veteriner Hekim
            </label>

            <select
              className="form-select"
              name='name'
              onChange={onInputChange}


            >
              <option value="">Hekim seçiniz.</option>
              <option value="Vet. Hek. Ali Ömer">Vet. Hek. Ali Ömer</option>
              <option value="Vet. Hek. Deniz Tuna">Vet. Hek. Deniz Tuna</option>
              <option value="Vet. Hek. İpek Gökdere">Vet. Hek. İpek Gökdere</option>
              <option value="Vet. Hek. Mert Yılmaz">Vet. Hek. Mert Yılmaz</option>

            </select>
          </div>

          <div className="col-12">
            <label htmlFor="day" className="form-label">
              Randevu Tarih
            </label>
            <input
              type="text"
              className="form-control"
              name='day'
              placeholder="Randevu Tarihi"
              onChange={onInputChange}


            />
          </div>

          <div className="col-12">
            <label htmlFor="hour" className="form-label">
              Randevu Saati
            </label>
            <input
              type="text"
              className="form-control"
              name='hour'
              placeholder="Randevu Saati"
              onChange={onInputChange}


            />
          </div>



          <div className=" d-flex justify-content-center">
            <button type="submit" className="btn col-4 btn-primary m-2 justify-content-center " style={{ backgroundColor: '#1D5B79' }}>
              Randevu Oluştur
            </button>
            <button type="submit" className=" col-4 btn btn-primary m-2 d-flex justify-content-center" style={{ backgroundColor: '#EF6262' , border:'none'}}  onClick={onClick}>
              Randevuları Görüntüle
            </button>

          </div>
        </form>

      </div>



    </div>
  )
}

export default Vet
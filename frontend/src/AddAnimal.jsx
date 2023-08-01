import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddAnimal() {
  let navigate = useNavigate();

  const [data, setData] = useState({
    earNumber: '',
    type: '',
    age: '',
    gender: '',
    pregnancy: '',
  });

  const { earNumber, type, age, gender, pregnancy } = data;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/animal", data);
    navigate('/profile/animals');
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <form className="row g-3 w-50" onSubmit={onSubmit}>
        <div className="col-12">
          <label htmlFor="earNumber" className="form-label">
            Küpe Numarası
          </label>
          <input
            type="text"
            className="form-control"
            name="earNumber"
            placeholder="Küpe Numarası"
            autoComplete="off"
            onChange={onInputChange}
            value={earNumber}
          />
        </div>
      
        <div className="col-12">
          <label htmlFor="type" className="form-label">
            Türü
          </label>
         
          <select
            className="form-select"
            name='type'
            onChange={onInputChange}
            value={type}
          >
            <option value="">Türü seçiniz.</option>
            <option value="Koyun">Koyun</option>
            <option value="İnek">İnek</option>
            <option value="Dana">Dana</option>
            <option value="Keçi">Keçi</option>
            <option value="Manda">Manda</option>

          </select>
        </div>
        <div className="col-12">
          <label htmlFor="age" className="form-label">
            Yaşı
          </label>
          <input
            type="text"
            className="form-control"
            name='age'
            placeholder="Yaşı"
            onChange={onInputChange}
            value={age}
          />
        </div>
        
        <div className="col-12">
          <label htmlFor="gender" className="form-label">
            Cinsiyeti
          </label>
         
          <select
            className="form-select"
            name='gender'
            onChange={onInputChange}
            value={gender}
          >
            <option value="">Cinsiyet seçiniz.</option>
            <option value="Dişi">Dişi</option>
            <option value="Erkek">Erkek</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="pregnancy" className="form-label">
            Gebelik Durumu
          </label>
         
          <select
            className="form-select"
            name='pregnancy'
            onChange={onInputChange}
            value={pregnancy}
          >
            <option value="">Gebelik durumu seçiniz.</option>
            <option value="Gebe">Gebe</option>
            <option value="Gebe Değil">Gebe Değil</option>
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1D5B79' }}>
            Hayvan Ekle
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAnimal;

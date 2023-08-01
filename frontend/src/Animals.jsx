import React, { useEffect, useState } from 'react';
import axios from 'axios';

import male from './assets/male.png';
import female from './assets/female.png';

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    loadAnimals();
  }, []);

  const loadAnimals = async () => {
    const result = await axios.get("http://localhost:8080/animals");
    setAnimals(result.data);
  };

  const handleTypeFilter = (event) => {
    setTypeFilter(event.target.value);
  };

  const filteredAnimals = typeFilter
    ? animals.filter((animal) => animal.type === typeFilter)
    : animals;

  return (
    <div className='container'>
   

      <div className="col-1 mt-4">
        
        <select
          className="form-select"
          name='filter'
          value={typeFilter}
          onChange={handleTypeFilter}
        >
          <option value="">Tümü</option>
          <option value="Koyun">Koyun</option>
          <option value="İnek">İnek</option>
          <option value="Dana">Dana</option>
          <option value="Keçi">Keçi</option>
          <option value="Manda">Manda</option>
        </select>
      </div>

      <div className='d-flex flex-wrap  py-4'>
        {filteredAnimals.map((animal, index) => (
          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className="card-title">{animal.earNumber}</h5>
                {animal.gender === 'Dişi' && (
                  <img src={female} alt="" style={{ width: '40px', height: '40px' }} />
                )}
                {animal.gender === 'Erkek' && (
                  <img src={male} alt="" style={{ width: '30px', height: '30px' }} />
                )}
              </div>
              <p className="card-text">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"> Türü : {animal.type} </li>
                  <li className="list-group-item"> Yaşı: {animal.age} </li>
                  {animal.gender === 'Dişi' && (
                    <li className="list-group-item">Hamilelik Durumu: {animal.pregnancy} </li>
                  )}
                </ul>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animals;

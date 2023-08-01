import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';



function Cons() {

    const [vets, setVets] = useState([]);

  useEffect(() => {
    loadVets();
  }, [])

  const loadVets = async () => {
    const result = await axios.get("http://localhost:8080/vets");
    setVets(result.data);
  }
  return (
    <div className=''>


    <h2>Randevularım</h2>
    
    <div className='mt-3'>
    
    
      <table class="table table-hover table-striped border shadow">
        <thead >
          <tr>
            <th scope="col">#</th>
            <th scope="col">Randevu Konusu</th>
            <th scope="col">Hekim</th>
            <th scope="col">Tarih</th>
            <th scope="col">Saat</th>
    
          </tr>
        </thead>
        <tbody>
    
          {
            vets.map((vet, index) => (
              <tr>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{vet.cons}</td>
                <td>{vet.name}</td>
                <td>{vet.day}</td>
                <td>{vet.hour}</td>
    
              </tr>
    
    
            ))
          }
    
    
        </tbody>
      </table>
    
    </div>
    
    
    </div>
  )
}

export default Cons


import React from 'react'
import './flightCard.css'
export default function FlightCard({flight_id,airline,status,departure_gate, arrival_gate, scheduled_departure, scheduled_arrival}) {
   /*,
      { 
       "flight_id": "6E 2342",
        "airline": "Indigo",
        "status": "Delayed",
        "departure_gate": "C3",
        "arrival_gate": "D4",
        "scheduled_departure": "2024-07-26T16:00:00Z",
        "scheduled_arrival": "2024-07-26T20:00:00Z",
        "actual_departure": null,
        "actual_arrival": null
    } */
  return (
    <div className='card'>
      <div className='left'>
        <p>{flight_id}</p>
        <p>{airline}</p>
        <span>{status}</span>
      </div>
      <div className='right'>
        <div className=''>
          <p><span>Departure Time : </span>{scheduled_departure}</p>
          <p><span>Departure Gate : </span>{departure_gate}</p>
          <p><span>Arrival Time : </span>{scheduled_arrival}</p>
          <p><span>Arrival Gate : </span>{arrival_gate}</p>
        </div>
      </div>
    </div>
  )
}

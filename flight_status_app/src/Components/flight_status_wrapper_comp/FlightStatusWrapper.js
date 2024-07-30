import React, { useEffect, useState } from 'react'
import FlightCard from '../fLight_card_component/FlightCard'
import './statuswrapper.css'
export default function FlightStatusWrapper() {
    const [allFlightsData, setallFlightsData] = useState([])

    useEffect(() => {
      async function fetchallFlights(){
          const reponse =  await fetch('http://localhost:4000/allFlightStatus')
          const respData = await reponse.json()
          setallFlightsData(respData)
      }

      fetchallFlights()
    }, [])
    
    if(!allFlightsData){
        return <div>Loading . . . </div>
    }
   
  return (
    <div className='wrapper'>
        {
            allFlightsData.map((flight)=>{
                return <FlightCard 
                key={flight.flight_id} 
                flight_id={flight.flight_id}
                airline = {flight.airline}
                status = {flight.status}
                departure_gate = {flight.departure_gate}
                arrival_gate = {flight.arrival_gate}
                scheduled_departure = {flight.scheduled_departure}
                scheduled_arrival = {flight.scheduled_arrival}
                />
            })
        }
    </div>
  )
}

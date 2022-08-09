import React from "react";
import './AdminBooking.module.css'
import 'react-toastify/dist/ReactToastify.css';
const booking = (props) => {
    return (  
      <>
        <tr>
          <td>{props.data.appointmentId}</td>
          <td>{props.data.center.name}</td>
          <td>{props.data.user.name}</td>
          <td>{props.data.productName}</td>
          <td>{props.data.bookingDate}</td><br></br>
          <td>{props.data.bookingTime}</td> 
        </tr>
      </>
                      
  );
};
  
export default booking;
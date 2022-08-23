import React, { useEffect, useState } from "react";
import BookAppointmentForm from "../../../components/User/BookAppointmentForm/BookAppointmentForm";
import styles from "./UserDashboard.module.css";
import UserCentreCard from "../../../components/User/UserCentreCard/UserCentreCard";
import AvailableSlots from "../../../components/User/AvailableSlots/AvailableSlots";
import ReactModal from "react-modal";
import { createSlots } from "./DashboardUtil";
import { fetchCenterBookings } from "../../../api/myaxios";
function UserDashboard(props) {
  const [cardData, setCardData] = useState({});

  const [showModal, setShowModal] = useState(false);

  const [_time, setTime] = useState();

  const [_date, setDate] = useState();

  const [appointmentList, setAppointmentList] = useState([]);

  const card = JSON.parse(localStorage.getItem("bookCenterDetails"));

  const isNewAppointment = JSON.parse(localStorage.getItem("isNewAppointment"));

  const appointmentInfo = JSON.parse(
    localStorage.getItem("AppointmentDetails")
  );

  const fetchAppointmentList = async () => {
    let res = await fetchCenterBookings(card.serviceCenterId);
    setAppointmentList(res.data);
  };

  useEffect(() => {
    setCardData(card);
    fetchAppointmentList();
    if (!isNewAppointment) {
      setDate(appointmentInfo.bookingDate);
      setTime(appointmentInfo.bookingTime);
    }
  }, []);

  const slots = createSlots(appointmentList);

  const setDateTime = (date, time) => {
    setDate(date);
    setTime(time);
  };

  return (
    <>
      <div className={styles.sidePanel}>
        <p>D</p>
        <p>A</p>
        <p>S</p>
        <p>H</p>
        <p>B</p>
        <p>0</p>
        <p>A</p>
        <p>R</p>
        <p>D</p>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <UserCentreCard
            data={cardData}
            enableOptions={false}
            enableSlotButton={true}
            showModal={setShowModal}
          />
        </div>
        <div className={styles.form}>
          {<BookAppointmentForm center={cardData} date={_date} time={_time} />}
        </div>
      </div>
      <ReactModal isOpen={showModal} className={styles.modal}>
        <AvailableSlots
          slots={slots}
          showModal={setShowModal}
          setDateTime={setDateTime}
        />
        <button
          className={`btn btn-danger ${styles.closeButton}`}
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </ReactModal>
    </>
  );
}

export default UserDashboard;

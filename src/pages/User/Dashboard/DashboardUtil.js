const convertDateToString = (date) => {
  let dd = date.getDate();
  dd = dd >= 10 ? dd : "0" + dd;
  let mm = date.getMonth() + 1;
  mm = mm >= 10 ? mm : "0" + mm;
  let yyyy = date.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};

export const createSlots = (appointmentList) => {
  let slots = [];
  const currentDate = new Date();
  //creating a list of 5 dates that we need
  const dateList = [];

  for (let i = 0; i < 5; i++) {
    let newDate = currentDate;
    newDate.setDate(newDate.getDate() + 1);
    dateList.push(convertDateToString(newDate));
  }

  for (let date of dateList) {
    let slot = {
      date: date,
      "10:00": true,
      "11:00": true,
      "12:00": true,
      "13:00": true,
      "14:00": true,
      "15:00": true,
      "16:00": true,
      "17:00": true,
    };

    for (let appointment of appointmentList) {
      if (date === appointment.bookingDate) {
        slot[appointment.bookingTime] = false;
      }
    }
    slots.push(slot);
  }
  return slots;
  console.log("method finished execution");
};

// export const createFilteredSlotList = () => {
//   const slots = card.slots;

//   console.log("Debug");

//   const currentDate = new Date();

//   //creating a list of 5 dates that we need
//   const dateList = [];

//   for (let i = 0; i < 5; i++) {
//     let newDate = currentDate;
//     newDate.setDate(newDate.getDate() + 1);
//     dateList.push(convertDateToString(newDate));
//   }

//   //filtering slots base on dateList array
//   let filteredSlots = slots.filter((item) => {
//     let flag = false;
//     for (let date of dateList) {
//       if (date === item.date) {
//         flag = true;
//       }
//     }
//     return flag;
//   });

//   console.log("New Debug: Filtered Slots: ", filteredSlots);
//   return filteredSlots;
// };

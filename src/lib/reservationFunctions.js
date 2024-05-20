import axios from "axios";

export const reservationById = async (id) => {
    console.log(id)
    try {
      const response = await axios.get(`http://localhost:5000/reservation/${id}`);
      console.log("In the function",response.data)
      return response.data[0];
    } catch (error) {
      alert(error);
    }
  };

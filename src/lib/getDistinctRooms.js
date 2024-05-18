import axios from "axios";

export const getDistinctRooms = async () => {
  try {
    const response = await axios.get("http://localhost:5000/roomType");
    return response.data;
  } catch (error) {
    alert(error);
  }
};

export const singleRoomOfType = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/roomType/${id}`);
    return response.data[0];
  } catch (error) {
    alert(error);
  }
};

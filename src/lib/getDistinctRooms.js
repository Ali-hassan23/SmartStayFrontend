import axios from "axios";

export const getDistinctRooms = async () => {
  try {
    const response = await axios.get("http://localhost:5000/rooms");
    return response.data;
  } catch (error) {
    alert(error);
  }
};

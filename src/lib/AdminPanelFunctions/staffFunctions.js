const { default: axios } = require("axios");

export const getAllStaffMembers = async (token) => {
  console.log(token);
  try {
    if (!token) {
      // If token is not present, display a message to the user to login
      console.log("User is not logged in. Please login.");
      return;
    }
    const response = await axios.get("http://localhost:5000/staff",{headers: {
      Authorization: `Bearer ${token}`
    }});
    
    return response.data;
  } catch (error) {
    alert(error);
    // console.log(error);
  }
};

export const getStaffById = async (staffId) => {
    console.log('Staff ID:', staffId);
  try {
    const response = await axios.get(`http://localhost:5000/staff/${staffId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const { default: axios } = require("axios");

export const getAllStaffMembers = async () => {
  try {
    const response = await axios.get("http://localhost:5000/staff");
    return response.data;
  } catch (error) {
    alert(error);
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

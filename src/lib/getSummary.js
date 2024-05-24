import axios from "axios";

export const summaryCount = async() => {
    try {
        const response = await axios.get('http://localhost:5000/dashboard')
        return response.data[0];
    } catch (error) {
        console.log(error);
    }
}

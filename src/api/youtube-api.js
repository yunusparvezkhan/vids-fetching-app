import axios from "axios";
const KEY = AIzaSyBQtlfdd5xkBn4WX3md22D_DMtZDipey6Y;

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})
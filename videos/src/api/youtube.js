import axios from "axios";

const KEY = "AIzaSyBeCSY2dFq4VSiUp-dJVH_EmrUnVJjRE6s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: `${KEY}`,
  },
});

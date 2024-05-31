import axios from "axios";

const UNSPLASH_API_URL = "https://api.unsplash.com/photos/random";
const UNSPLASH_ACCESS_KEY = "CK2xMh268X5wpR_VSis7x5ew1dASTeURbAI25b4n9mw";

export const fetchRandomImage = (query) => {
  return axios.get(
    `${UNSPLASH_API_URL}?query=${query}&orientation=landscape&count=1`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  );
};

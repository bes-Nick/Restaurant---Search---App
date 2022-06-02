import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer tRY2Z1DCaV3j9wthGC6AfyDeBSyIahDet9Dpue-xYWbbxBBuZlZlULRJGvm9nS6kfhTUcyD8zvKaGBwuwSaEu9DfBqCzuwHMhf24-TFnxKPNBDhszFNB-24QN6qQYnYx",
  },
});

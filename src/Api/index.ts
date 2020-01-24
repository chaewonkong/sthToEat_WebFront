import axios from "axios";

export const baseURL = "http://localhost:3004/graphql";

const baseApi = axios.create({
  baseURL,
  timeout: 3000
});

export const Api = {
  postLikeDish: async () => {
    const res = await baseApi.post("/dishes", { type: "LIKE" });
    return res;
  },
  postDislikeDish: async () => {
    const res = await baseApi.post("/dishes", { type: "DISLIKE" });
    return res;
  }
};

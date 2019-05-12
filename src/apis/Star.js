import http from "../utils/HttpUtil";

export const getlist = () => {
  return http.get("/star/starlist");
};

import http from "../utils/HttpUtil";

export const login = params => {
  return http.post("/public/user/login", params);
};

import http from "../utils/HttpUtil";

export const getlist = params => {
    return http.post("/public/products/getlist", params);
};

import api from "../../axiosInterceptor";

const getUser = async () => {
    try {
        const response = await api.get("/user");
        return response.data;
    } catch (error) {
        return {};
    }
};

export default { getUser };

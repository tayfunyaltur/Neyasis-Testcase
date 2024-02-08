import api from "../../axiosInterceptor";

const getPopulerSearches = async () => {
    try {
        const response = await api.get("/popularSearches");
        return response.data.map((item: any) => item.name);
    } catch (error) {
        return [];
    }
};

const getOpenPositions = async () => {
    try {
        const response = await api.get("/openPositions");
        return response.data;
    } catch (error) {
        return [];
    }
};

const getPartnerURLS = async () => {
    try {
        const response = await api.get("/partnerURLS");
        return response.data.map((item: any) => item.url);
    } catch (error) {
        return [];
    }
};

const getSuggestions = async () => {
    try {
        const response = await api.get("/suggestions");
        return response.data;
    } catch (error) {
        return [];
    }
};

export default {
    getPopulerSearches,
    getOpenPositions,
    getPartnerURLS,
    getSuggestions,
};

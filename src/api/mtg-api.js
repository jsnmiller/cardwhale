import axios from "axios";

export const advancedSearch = async (options) => {
    const {
        data: { results: productIds },
        error,
    } = await axios
        .post("/api/catalog/categories/1/search", options)
        .then(({ data }) => ({
            data,
        }))
        .catch((error) => ({ error }));
    const {
        data: { results: productDetailsList },
    } = await axios.get(`/api/catalog/products/${productIds.join(",")}`);
    return { productDetailsList, error };
};

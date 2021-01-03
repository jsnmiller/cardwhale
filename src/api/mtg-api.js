import axios from "axios";

export const advancedSearch = (options) =>
    axios
        .post("/api/catalog/categories/1/search", options)
        .then(({ data }) => ({
            data,
        }))
        .catch((error) => ({ error }));

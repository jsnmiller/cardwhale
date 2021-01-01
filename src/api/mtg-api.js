const apiVersion = "v1.39.0";
const basePath = `http://api.tcgplayer.com/v1.39.0/catalog/categories/1/search`;
const token = `zEOiDu1qqLG0W8Q148WnSy8KSHUAaXW5YN47gY09u5WoJmdusBJpAIKOTWsvVA2Op06cuedgA7gnwTrwscdgi4iOyzGRbS2tGZVZiFIujEL5kur4bamO3USMhRov1BMsxAv8ul2umE44TUolyo9p974AGMXPS5SfSJkGe2PpPdchZGa9diLLCvV4quti1HcvxRUcXojlnPveZA4-82lf_3GghcpdM5QXU2IL4Hg-YHLslLiSTBUEHwKB6NCfaLgxNY3aE2JUseWNSxCgCr1jXikf7wBskxXCA8y-PQNArOUIe79oW2zukp_vefAFU30m2f4s6g`;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "User-Agent": "Cardwhale",
};

export const advancedSearch = (options) => {
    return fetch(`${basePath}/search`, {
        method: "POST",
        headers,
        body: JSON.stringify(options),
    });
};

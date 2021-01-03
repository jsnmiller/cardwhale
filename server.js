const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

const apiVersion = process.env.TCG_API_VERSION;
const token = process.env.TCG_API_TOKEN;
const isProduction =
    process.env.NODE_ENV && process.env.NODE_ENV.trim() === "production";
const basePath = `https://api.tcgplayer.com/${apiVersion}`;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "User-Agent": "Cardwhale",
};

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (isProduction) {
    console.log("Production build");
    app.use(express.static(path.join(__dirname, "build")));

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "build", "index.html"));
    });
}

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

app.use(express.json());

app.post("/api/*", (request, response) => {
    axios({
        method: "POST",
        headers,
        url: `${basePath}/${request.path.split("/api/")[1]}`,
        data: request.body,
    })
        .then(({ data }) => {
            response.json(data);
        })
        .catch((error) => {
            response.json(error);
        });
});

app.get("/api/*", (request, response) => {
    axios({
        method: "GET",
        headers,
        url: `${basePath}/${request.path.split("/api/")[1]}`,
    })
        .then(({ data }) => {
            response.json(data);
        })
        .catch((error) => {
            response.json(error);
        });
});

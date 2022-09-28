// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/topselling", (req, res) => {
    res.json('[{"src":"images/img-1.jpg","text":"Lorem ipsum dolor sit amet, in eleifend inimicus elaboraret his, harum efficiendi mel ne. Sale percipit vituperata","label":"Áo thun nam","path":"/products?id=500","price":"$500.00"},{"src":"images/img-2.jpg","text":"Lorem ipsum dolor sit amet, in eleifend inimicus elaboraret his, harum efficiendi mel ne. Sale percipit vituperata","label":"Áo thun nam","path":"/products?id=500","price":"$500.00"},{"src":"images/img-3.jpg","text":"Lorem ipsum dolor sit amet, in eleifend inimicus elaboraret his, harum efficiendi mel ne. Sale percipit vituperata","label":"Áo thun nam","path":"/products?id=500","price":"$500.00"},{"src":"images/img-4.jpg","text":"Lorem ipsum dolor sit amet, in eleifend inimicus elaboraret his, harum efficiendi mel ne. Sale percipit vituperata","label":"Áo thun nam","path":"/products?id=500","price":"$500.00"},{"src":"images/img-5.jpg","text":"Lorem ipsum dolor sit amet, in eleifend inimicus elaboraret his, harum efficiendi mel ne. Sale percipit vituperata","label":"Áo thun nam","path":"/products?id=500","price":"$500.00"},{"src":"images/img-6.jpg","text":"Lorem ipsum dolor sit amet, in eleifend inimicus elaboraret his, harum efficiendi mel ne. Sale percipit vituperata","label":"Áo thun nam","path":"/products?id=500","price":"$500.00"}]');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
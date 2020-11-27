require('dotenv').config()
const express = require('express');

const app = express();

//app should listen on port 7000 or use the one in the env file
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} with a ✔✨✨ speed.`)
});
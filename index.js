const express = require("express");
const axios = require("axios");

const app = express();

app.get("/pincode", (req, res) => {
    
    axios.get('https://api.postalpincode.in/pincode/110062')
    .then(r => res.json(r.data))

})


app.listen(8000, () => {
    console.log(`listening on 8000`)
})
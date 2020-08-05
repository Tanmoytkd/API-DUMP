const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.all(/.*/, (req, res) => {
    res.send(req.url);
    console.log(req);
    console.log("\n\n\n");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
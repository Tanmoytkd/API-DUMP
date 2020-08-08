const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.all(/.*/, (req, res) => {
    setTimeout(()=>{
        let response = JSON.stringify({
            url : req.url
        });
        res.send(response);
    }, 1000);

    console.log(req);
    console.log("\n\n\n");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
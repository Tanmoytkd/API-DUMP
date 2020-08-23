const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all(/.*/, (req, res) => {
    setTimeout(()=>{
        let response = JSON.stringify({
            url : req.url,
            body: `${JSON.stringify(req.body, null, 2)}`
        });
        res.send(response);
    }, 1000);

    console.log(req.body);
    console.log("\n\n\n");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
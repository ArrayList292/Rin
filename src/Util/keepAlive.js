let express = require('express'),
    http = require('http'),
    app = express();

app.get('/', (req, res) => {
    res.redirect("https://discord.com/oauth2/authorize?client_id=732807386414317658&scope=bot&permissions=11889985");
    res.sendStatus(200);
})

setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

app.listen(process.env.PORT, () => { console.log("[Keep Me Alive] Listening on port " + process.env.PORT) });
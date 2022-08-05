const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const fs = require("fs")
const gamesInfo = JSON.parse(fs.readFileSync("games.json", "utf8"))
console.log("You have " + gamesInfo.length + " games!")

app.set("view engine", "ejs")

app.use(express.static(__dirname))

app.get("/", (req, res) => {
  res.render("index", { gamesInfo: gamesInfo, index_url_code: req.query })
})
//
app.get("/game", (req, res) => {
  res.render("gamepage", { gamesInfo: gamesInfo, index_url_code: req.query })
})

app.listen(port)

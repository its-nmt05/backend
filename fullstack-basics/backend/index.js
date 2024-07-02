// const express = require("express") #Don't prefer this format. Legacy CommonJS standard

// modern ES6 standard
import express from "express"

const app = express()

// app.get("/", (req, res) => {
//     res.send("Server is ready")
// })

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!",
        },
        {
            id: 2,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!",
        },
        {
            id: 3,
            title: "Why don't skeletons fight each other?",
            content: "They don't have the guts.",
        },
        {
            id: 4,
            title: "What do you call fake spaghetti?",
            content: "An impasta!",
        },
        {
            id: 5,
            title: "Why did the math book look sad?",
            content: "Because it had too many problems.",
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`[SERVER] Server started at http://localhost:${port}`)
})

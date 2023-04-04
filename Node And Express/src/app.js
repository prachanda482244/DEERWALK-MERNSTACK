// import connectDb from "./connection/connectDb";
// import express, { json } from 'express'
// import middle from './middleware/middle'
const connectDb = require('./connection/connectDb')
const express = require('express')
const middle = require('./middleware/middle')

connectDb()

const app = express();
app.use(middle)

app.get('/', (req, res) => {
    res.status(200).send("Home Page hello server")
})

app.all('*', (req, res) => {
    res.status(404).send("44 page not found")
})

app.listen(3000, () => {
    console.log("server is running")
})
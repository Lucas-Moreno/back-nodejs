import express from 'express'
import process from 'process'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app
export {}
const mongoose = require('mongoose')
const app = require('../app')

const { DB_HOST, PORT=3000 } = process.env

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT)
    console.log('Database connection successful')
  })
  .catch((error:any) => {
    console.log((error as Error).message)
    process.exit(1)
  })



// export {};
const mongoose = require('mongoose')
const app = require('../app.ts')

const { DB_HOST, PORT } = process.env

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT)
    console.log('Database connection successful')
  })
  .catch((error:any) => {
    console.log((error as Error).message)
    process.exit(1)
  })

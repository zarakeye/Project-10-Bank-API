const mongoose = require('mongoose')
const databaseUrl = "mongodb+srv://stephanebazze:bATD9glHKpNBd6j0@cluster0.miv3h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  // process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}

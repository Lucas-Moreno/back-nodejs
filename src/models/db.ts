import mongoose from 'mongoose'
import process from 'process'
import { MongooseModuleOptions } from '@nestjs/mongoose'

const uri = `mongodb+srv://${process.env.NAME_DB}:${process.env.PASSWORD_DB}@cluster0.bqizz.mongodb.net/test-db?retryWrites=true&w=majority`

const options: MongooseModuleOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set('strictQuery', false)

mongoose.connect(
  uri,
  options,
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded")
    } else {
      console.log("Error in db connection :" + err)
    }
  }
)
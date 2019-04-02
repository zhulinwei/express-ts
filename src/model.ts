import * as mongoose from 'mongoose';
import { Test } from './interface';
 
const TestSchema = new mongoose.Schema({
  age: Number,
  name: String,
  createAt: Date,
});
 
const testModel = mongoose.model<Test & mongoose.Document>('Test', TestSchema);
 
export default testModel;

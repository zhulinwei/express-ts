import mongoose from 'mongoose';
import Test from './interface.test';
 
const TestSchema = new mongoose.Schema({
  age?: number;
  name?: string;
  createAt?: Date;
});
 
const testModel = mongoose.model<Test & mongoose.Document>('Test', TestSchema);
 
export default testModel;

/**
 * Created by Jora Khachatran on 6/25/2017.
 */
const mongoose=require('mongoose');

let Schema = mongoose.Schema({
    Name:String,
    Email:String,
    Message:String
},{collection: 'JaneJohn'});
let User = module.exports = mongoose.model('User',Schema,'JaneJohn');


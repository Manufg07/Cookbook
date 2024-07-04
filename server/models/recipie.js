const { Schema} =require('mongoose');
const { model} =require('mongoose');

const recipieSchema = new Schema({
//    courseId: { type: String, required: true },
   item: { type: String, required: true },
   ingredients: { type: String, required: true },
   instructions: { type: String, required: true },
});

const recipie = model('recipie', recipieSchema);

module.exports = recipie;

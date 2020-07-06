const mongoose = require('mongoose');
const {Schema} = mongoose;

const shopSchema = new Schema({
    name: String,
    menus: [String],
    status: Boolean,
})

mongoose.model('shops', shopSchema);
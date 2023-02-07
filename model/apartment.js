const { kStringMaxLength } = require("buffer");
let mongoose = require("mongoose");
let Schema = mongoose.Schema

let aptSchema = Schema({
    city: String,
    location: Number,
    bedrooms: Number,
    bathrooms: Number,
    price: Number,
    inhabitants: Number
});

module.exports = mongoose.model('apartment', aptSchema);
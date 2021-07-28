const mongoose = require('mongoose')
coinsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    coins: Number,
    bank: String
});
module.exports = mongoose.model("Coins", coinsSchema)
// this is the same schema for the Economy part, so if needed you can replace database/coins.js with your edited version of this

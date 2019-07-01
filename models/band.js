const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const BandSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  bandName: {
    type: String,
    required: true
  }
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const BandCollection = mongoose.model('band', BandSchema)

/* Step 4
 */

function getAllBands() {
  return BandCollection.find() 
}

function addNewBand(newBand) {
  return BandCollection.create(newBand)
}

function getBand(bandId) {
  return BandCollection.findById(bandId)
}

function updateBand(bandId, updatedBand) {
  return BandCollection.findByIdAndUpdate(bandId, updatedBand)
}

function deleteBand(bandId) {
  return BandCollection.findByIdAndDelete(bandId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllBands,
  getBand,
  addNewBand,
  updateBand,
  deleteBand
}



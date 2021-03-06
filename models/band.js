const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const BandSchema = new mongoose.Schema({
  bandName: {
    type: String,
    required: true
  },
  // bandName: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Band'
  // },
  aboutBand: {
    type: String,
    required: true
  },
  photoCredit: {
    type: String,
    required: true
  },
  imgLink: {
    type: String,
  }
})

// const Band = mongoose.model('Band', BandSchema, 'bandName');

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



const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const GigSchema = new mongoose.Schema({
  bandId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  gigName: {
    type: String,
    required: true
  },
  gigDescription: {
    type: String,
    required: true 
  },
  dateOfGig: {
    type: Date,
    required: true
  },
  typeOfPerformance: {
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


/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const GigCollection = mongoose.model('gig', GigSchema)

/* Step 4
 */

function getAllGigs() {
  return GigCollection.find() 
}

function addNewGig(bandId, newGig) {
  newGig.bandId = bandId
  // console.log(newGig)
  return GigCollection.create(newGig)
}
 
function getGig(gigId) {
  return GigCollection.findById(gigId)
}

function getGigsByBandId(bandId) {
  return GigCollection.find({bandId: bandId})
}

function updateGig(gigId, updatedGig) {
  return GigCollection.findByIdAndUpdate(gigId, updatedGig)
}

function deleteGig(gigId) {
  return GigCollection.findByIdAndDelete(gigId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllGigs,
  getGig,
  addNewGig,
  updateGig,
  deleteGig,
  getGigsByBandId
}


const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const MemberSchema = new mongoose.Schema({
  bandId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  memberName: {
    type: String,
    required: true
  },
  memberEmail: {
    type: String,
    required: true
  },
  // bandName: {
  //   type: band.bandId,
  // }
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const MemberCollection = mongoose.model('member', MemberSchema)

/* Step 4
 */

function getAllMembers() {
  return MemberCollection.find() 
}

function addNewMember(bandId, newMember) {
  newMember.bandId = bandId
  return MemberCollection.create(newMember)
}

function getMember(memberId) {
  return MemberCollection.findById(memberId)
}

function getMembersByBandId(bandId) {
  return MemberCollection.find({bandId: bandId})
}

function updateMember(memberId, updatedMember) {
  return MemberCollection.findByIdAndUpdate(memberId, updatedMember)
}

function deleteMember(memberId) {
  return MemberCollection.findByIdAndDelete(memberId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllMembers,
  getMember,
  addNewMember,
  updateMember,
  deleteMember,
  getMembersByBandId
}



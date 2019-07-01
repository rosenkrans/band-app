const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const MemberSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  memberName: {
    type: String,
    required: true
  },
  memberEmail: {
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
const MemberCollection = mongoose.model('member', MemberSchema)

/* Step 4
 */

function getAllMembers() {
  return MemberCollection.find() 
}

function addNewMember(newMember) {
  return MemberCollection.create(newMember)
}

function getMember(memberId) {
  return MemberCollection.findById(memberId)
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
  deleteMember
}


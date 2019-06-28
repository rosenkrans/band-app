const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const IssueSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  summary: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true 
  },
  createdAt: {
    type: Date,
    required: true
  },
  status: {
    type: String
    // required: true
  },
  priority: {
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
const IssueCollection = mongoose.model('Issue', IssueSchema)

/* Step 4
 */

function getAllIssues() {
  return IssueCollection.find() 
}

function addNewIssue(newIssue) {
  return IssueCollection.create(newIssue)
}

function getIssue(issueId) {
  return IssueCollection.findById(issueId)
}

function updateIssue(issueId, updatedIssue) {
  return IssueCollection.findByIdAndUpdate(issueId, updatedIssue)
}

function deleteIssue(issueId) {
  return IssueCollection.findByIdAndDelete(issueId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllIssues,
  getIssue,
  addNewIssue,
  updateIssue,
  deleteIssue
}


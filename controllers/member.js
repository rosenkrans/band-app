/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const memberApi = require('../models/member.js')
const bandApi = require('../models/band.js')
/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const memberRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 */ 
memberRouter.get('/', (req, res) => {
  bandApi.getBand(req.params.bandId)
    .then((band) => {
      memberApi.getMembersByBandId(req.params.bandId)
        .then((members) => {
          res.render('members/members', {bandId: req.params.bandId, members: members, band: band}) 
        })
    })
    .catch((err) => {
      res.send(err)
    })
})

memberRouter.get('/create', (req, res) => {
  res.render('members/createMemberForm', {bandId: req.params.bandId}) 
})

memberRouter.post('/', (req, res) => {
  memberApi.addNewMember(req.params.bandId, req.body)
    .then((newMember) => {
      res.redirect(`/bands/${req.params.bandId}/members`)
    })
    .catch((err) => {
      res.send(err)
    })
})

memberRouter.get('/:memberId', (req, res) => {
  bandApi.getBand(req.params.bandId)
    .then((band) => {
      memberApi.getMember(req.params.memberId)
        .then((member) => {
          res.render('members/member', {
            bandId: req.params.bandId,
            member: member,
            band: band})
        })
    })
    .catch((err) => {
      res.send(err)
    })
})

memberRouter.get('/:memberId/edit', (req, res) => {
  memberApi.getMember(req.params.memberId)
    .then((member) => {
      res.render('members/editMemberForm', {
        bandId: req.params.bandId,
        member: member})
    })
    .catch((err) => {
      res.send(err)
    })
})

memberRouter.put('/:memberId', (req, res) => {
  memberApi.updateMember(req.params.memberId, req.body)
    .then(() => {
      res.redirect(`/bands/${req.params.bandId}/members`) 
    })
    .catch((err) => {
      res.send(err)
    })
})

memberRouter.delete('/:memberId', (req, res) => {
  memberApi.deleteMember(req.params.memberId)
    .then(() => {
      res.redirect(`/bands/${req.params.bandId}/members`)
    })
    .catch((err) => {
      res.send(err) 
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  memberRouter
}



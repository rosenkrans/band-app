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
const gigApi = require('../models/gig.js')
const bandApi = require('../models/band.js')
/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const gigRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 */ 

gigRouter.get('/', (req, res) => {
  bandApi.getBand(req.params.bandId)
    .then((band) => {
      gigApi.getGigsByBandId(req.params.bandId)
        .then((gigs) => {
          res.render('gigs/gigs', {bandId: req.params.bandId, gigs: gigs, band: band}) 
        })
    })
    .catch((err) => {
      res.send(err)
    })
})


// gigRouter.get('/', (req, res) => {
//   gigApi.getGigsByBandId(req.params.bandId)
//     .then((gigs) => {
//       res.render('gigs/gigs', {bandId: req.params.bandId, gigs: gigs}) 
//     })
//     .catch((err) => {
//       res.send(err)
//     })
// })



gigRouter.get('/create', (req, res) => {
  res.render('gigs/createGigForm', {bandId: req.params.bandId}) 
})


gigRouter.post('/', (req, res) => {
  // console.log(req.params.bandId, req.body)  
  gigApi.addNewGig(req.params.bandId, req.body)
    .then((newGig) => {
      res.redirect(`/bands/${req.params.bandId}/gigs`)
    })
    .catch((err) => {
      res.send(err)
    })
})

gigRouter.get('/:gigId', (req, res) => {
  gigApi.getGig(req.params.gigId)
    .then((gig) => {
      res.render('gigs/gig', {bandId: req.params.bandId, gig: gig})
    })
    .catch((err) => {
      res.send(err)
    })
})

gigRouter.get('/:gigId/edit', (req, res) => {
  gigApi.getGig(req.params.gigId)
    .then((gig) => {
      let dateOfGig = gig.dateOfGig
            if (dateOfGig !== null) {
              dateOfGig = dateOfGig.toISOString().substring(0, 10)
            }
      res.render('gigs/editGigForm', {
        bandId: req.params.bandId,
        gig: gig,
        dateOfGig: dateOfGig
      })
    })
    .catch((err) => {
      res.send(err)
    })
})

gigRouter.put('/:gigId', (req, res) => {
  // console.log('im putting')
  gigApi.updateGig(req.params.gigId, req.body)
    .then(() => {
      res.redirect(`/bands/${req.params.bandId}/gigs/${req.params.gigId}`) 
    })
    .catch((err) => {
      res.send(err)
    })
})

gigRouter.delete('/:gigId', (req, res) => {
  gigApi.deleteGig(req.params.gigId)
    .then(() => {
      res.redirect(`/bands/${req.params.bandId}/gigs`)
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
  gigRouter
}

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
const bandApi = require('../models/band.js')
const gigApi = require('../models/gig.js')
const memberApi = require('../models/member.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const bandRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 */ 
bandRouter.get('/', (req, res) => {
  bandApi.getAllBands()
    .then((bands) => {
      res.render('bands/bands', {bands}) 
    })
    .catch((err) => {
      res.send(err)
    })
})

bandRouter.get('/create', (req, res) => {
  res.render('bands/createBandForm') 
})

bandRouter.post('/', (req, res) => {
  bandApi.addNewBand(req.body)
    .then((newBand) => {
      res.redirect('/bands')
    })
    .catch((err) => {
      res.send(err)
    })
})

bandRouter.get('/:bandId', (req, res) => {
  bandApi.getBand(req.params.bandId)
    .then((band) => {
      res.render('bands/band', {band})
    })
    .catch((err) => {
      res.send(err)
    })
})

bandRouter.get('/:bandId/edit', (req, res) => {
  bandApi.getBand(req.params.bandId)
    .then((band) => {
      res.render('bands/editBandForm', {band})
    })
    .catch((err) => {
      res.send(err)
    })
})

bandRouter.put('/:bandId', (req, res) => {
  bandApi.updateBand(req.params.bandId, req.body)
    .then(() => {
      res.redirect('/bands') 
    })
    .catch((err) => {
      res.send(err)
    })
})

bandRouter.delete('/:bandId', (req, res) => {
  bandApi.deleteBand(req.params.bandId)
    .then(() => {
      res.redirect('/bands')
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
  bandRouter
}



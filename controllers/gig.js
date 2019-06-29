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

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const gigRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 */ 
gigRouter.get('/', (req, res) => {
  gigApi.getAllGigs()
    .then((gigs) => {
      res.render('gigs/gigs', {gigs}) 
    })
    .catch((err) => {
      res.send(err)
    })
})

gigRouter.get('/create', (req, res) => {
  res.render('gigs/createGigForm') 
})

gigRouter.post('/', (req, res) => {
  gigApi.addNewGig(req.body)
    .then((newGig) => {
      res.redirect('/gigs')
    })
    .catch((err) => {
      res.send(err)
    })
})

gigRouter.get('/:gigId', (req, res) => {
  gigApi.getGig(req.params.gigId)
    .then((gig) => {
      res.render('gigs/gig', {gig})
    })
    .catch((err) => {
      res.send(err)
    })
})

gigRouter.delete('/:gigId', (req, res) => {
  gigApi.deleteGig(req.params.gigId)
    .then(() => {
      res.redirect('/gigs')
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

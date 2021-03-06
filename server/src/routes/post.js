const express = require('express')
const router = express.Router()

const User = require('../models/userModel')
const Show = require('../models/showModal')
const Movie = require('../models/movieModal')
const Special = require('../models/specialModal')

// POST
router.post('/postShow', async (req, res, next) => {
	const body = req.body
	try {
		const show = new Show(body)
		await show.save()
		res.send('saved')
	} catch (error) {
		next(new Error(error))
	}
})

router.post('/postMovie', async (req, res, next) => {
	const body = req.body
	try {
		const movie = new Movie(body)
		await movie.save()
		res.send('saved')
	} catch (error) {
		next(new Error(error))
	}
})

router.post('/postSpecial', async (req, res, next) => {
	const body = req.body
	try {
		const special = new Special(body)
		await special.save()
		res.send('saved')
	} catch (error) {
		next(new Error(error))
	}
})

module.exports = router

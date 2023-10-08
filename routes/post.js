const express = require('express');
const app = express.Router();
const Post = require('../models/Post');
const requireLogin = require('../middleware/requireLogin'); 

app.put('/create', requireLogin, async (req,res) => {
	const {Title,Description} = req.body;
	try {
		if (Title && Description) {
			Post.create({
				Owner_id: req.user, 
				Title: Title,
				Description: Description
			})
			.then(post => {
				res.json({title: 'Post added successfully', status: true})
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					errorMessage: 'Failed to upload post', 
					status: false
				});
			});
		}
		else {
			res.status(400).json({
				errorMessage: 'Please fill all the details',
				status: false
			});
		}
	} catch (e) {
		console.log(e);
		res.status(500).json({
			errorMesssage: 'There was an error while posting',
			status: false
		});
	}
});

module.exports = app;
	

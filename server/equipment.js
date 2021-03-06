'use strict';

const db = require('APP/db');
const Product = db.model('product');
const Equipment = db.model('equipment');
const Review = db.model('review');

module.exports = require('express').Router()
	.get('/', (req, res, next) =>
		Equipment.findAll({
			include: [{
				where: {disabled: false},
				required: true,
				model: Product
			}]
		})
			.then(equipment => res.json(equipment))
			.catch(next))
	.get('/:id', (req, res, next) =>
		Equipment.findById(req.params.id, {include: [{
			model: Product,
			include: [Review]
		}]})
			.then(equipment => res.json(equipment))
			.catch(next));

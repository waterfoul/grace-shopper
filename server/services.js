'use strict';

const db = require('APP/db');
const Product = db.model('product');
const Service = db.model('service');

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
	  Service.findAll({
			include: [{
				where: {disabled: false},
				required: true,
				model: Product
			}]
		})
    .then(records => res.json(records))
    .catch(next))
  .get('/:id', (req, res, next) =>
	  Service.findById(req.params.id, {include: [Product]})
    .then(record => res.json(record))
    .catch(next));

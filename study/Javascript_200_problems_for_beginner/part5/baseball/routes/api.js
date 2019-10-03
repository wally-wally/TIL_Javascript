'use strict';

const express = require('express');
const services = require('../services');
const createError = require('http-errors');

const router = express.Router();

router.route('/list')
  .get(getList);

router.route('/')
  .post(makeGame);

router.route('/:id')
  .get(getGame)
  .delete(deleteGame);

router.route('/:id/guess')
  .post(postGuess);

const checkError = (err) => {
  return err.code ? err : createError(400, err);
};

async function getList(req, res, next) {
  try {
    res.send(services.getGames());
  } catch (err) {
    next(checkError(err));
  }
}

async function makeGame(req, res, next) {
  const digit = req.body.digit;

  try {
    const id = services.makeGame(digit);
    res.send({ id });
  } catch (err) {
    next(checkError(err));
  }
}

async function getGame(req, res, next) {
  const id = req.params.id;

  try {
    res.send(services.getGame(id));
  } catch (err) {
    next(checkError(err));
  }
}

async function postGuess(req, res, next) {
  const guess = req.body.guess ? req.body.guess.split('').map(g => +g) : [];
  const id = req.params.id;

  try {
    res.send(services.guessAnswer(id, guess));
  } catch (err) {
    next(checkError(err));
  }
}

async function deleteGame(req, res, next) {
  const id = req.params.id;

  try {
    res.send(services.removeGame(id));
  } catch (err) {
    next(checkError(err));
  }
}

module.exports = router;

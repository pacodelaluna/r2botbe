'use strict'

const APIuser = require('express').Router()
const db = require('../lib/mongodb-functions')

APIuser.get('/test', (req, res) => {
  res.send('response from API user')
})
APIuser.post('/votedone', function (req, res) {
  const phone = req.body.phone
  const hkid = req.body.hkid
  db.insert('users', { _id: phone, hkid: hkid, voted: true }, function (err, cb) {
    if (err) {
      if (err.code === 11000) {
        res.send('phone already vote')
      } else {
        res.send({err: 'error adding voters'})
        console.log('error insert user', err)
      }
    } else {
      res.send('vote done')
    }
  })
})
APIuser.get('/doesitvote', function (req, res) {
  const phone = req.body.phone
  db.findOne('users', { _id: phone }, function (err, record) {
    if (err) {
      res.send({err: 'error searching vote'})
      console.log('error searching vote - doesitvote', err)
    } else if (record.voted === true) {
      res.send('user vote')
    } else {
      res.send('user doesn`t vote')
    }
  })
})

module.exports = APIuser

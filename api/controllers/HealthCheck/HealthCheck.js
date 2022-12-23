'use strict'

const util = require('util')
const mysql = require('mysql2')
const db = require('../../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM Persons'
        db.query(sql, (err, response) => {
            if (err) throw err
            //res.json(response)
            res.json({"success": true})
        })
    }
};
const express = require('express');
const router = express.Router();
const db = require('../data/db-config');

router.get('/employees', async (req, res) => {
    try {
        const employees = await db.find();
        return res.status(200).json({ employees });
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
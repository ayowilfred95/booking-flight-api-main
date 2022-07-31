const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getFlights);

router.get("/id", controller.getFlight);

router.post("/", controller.createFlight);

router.put("/id", controller.updateFlight);

module.exports = router;


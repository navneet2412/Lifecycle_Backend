const express = require("express");
const { body } = require('express-validator');
const {isAuth} = require("../middleware/is-auth");

const {addBlock} = require('../controllers/blocks/add-blocks');
const {dispatchBlock} = require("../controllers/blocks/dispatch-blocks");
const { faada } = require("../controllers/blocks/fetch-faadaId");
const { blocklist } = require("../controllers/blocks/fetch-blocklist");
const { addSpoilage } = require("../controllers/blocks/add-spoilage");

const router = express.Router();

router.post('/add-block', isAuth, addBlock);

router.post("/add-spoilage", isAuth, addSpoilage);

router.post('/dispatch-block', isAuth, dispatchBlock);

router.post("/fetch-faadaId", isAuth, faada);

router.get("/fetch-blocklist", isAuth, blocklist);
module.exports = router;
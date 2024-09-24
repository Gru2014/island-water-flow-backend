const express = require('express');
const SheetController = require('../controllers/sheetController');

const router = express.Router();

router.get('/tabs', SheetController.getTabs);
router.get('/sheet-data/:tabName', SheetController.getSheetData);

module.exports = router;

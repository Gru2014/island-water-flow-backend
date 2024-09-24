const SheetModel = require('../models/sheetModel');

class SheetController {
  static async getTabs(req, res) {
    try {
      const tabs = await SheetModel.getSheetMetadata();
      res.json(tabs);
    } catch (error) {
      console.error('Error in getTabs:', error);
      res.status(500).json({ error: 'Failed to retrieve tabs' });
    }
  }

  static async getSheetData(req, res) {
    try {
      let tabName = req.params.tabName.replace(/-/g, ' ');
      const data = await SheetModel.getSheetData(tabName);
      res.json(data);
    } catch (error) {
      console.error('Error in getSheetData:', error);
      res.status(500).json({ error: 'Failed to retrieve data' });
    }
  }
}

module.exports = SheetController;

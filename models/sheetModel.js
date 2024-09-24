const { sheets } = require('../config/googleAuth');

const spreadsheetId = '1guE4DI4wQpBXPlXRKXVEeb3nH84Phq6YqgYK9M4NUT0';

class SheetModel {
  static async getSheetData(tabName) {
    const range = `${tabName}!A1:Z`;
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      return response.data.values;
    } catch (error) {
      console.error('Error fetching sheet data:', error);
      throw error;
    }
  }

  static async getSheetMetadata() {
    try {
      const response = await sheets.spreadsheets.get({
        spreadsheetId,
        fields: 'sheets.properties',
      });
      return response.data.sheets.map(sheet => sheet.properties.title);
    } catch (error) {
      console.error('Error fetching sheet metadata:', error);
      throw error;
    }
  }
}

module.exports = SheetModel;

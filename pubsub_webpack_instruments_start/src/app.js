const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentInfoView = require('./views/InstrumentInfoView.js');
const InstrumentsMenuView = require('./views/InstrumentsMenuView.js');

console.log('JavaScript Loaded');

document.addEventListener('DOMContentLoaded', () => {
  //Starts Dropdown menu
  const instrumentsMenuElement = document.querySelector('#instrument-families');
  const instrumentsMenuView = new InstrumentsMenuView(instrumentsMenuElement);
  instrumentsMenuView.listenForData();

  // Starts Info View
  const instrumentInfoElement = document.querySelector('#instrument-info');
  const instrumentInfoView = new InstrumentInfoView(instrumentInfoElement);
  instrumentInfoView.receiveSelectedDataFromModel();

  //Starts Model
  const instrumentsFamilies = new InstrumentFamilies();
  instrumentsFamilies.sendData();
  instrumentsFamilies.receiveDataFromMenu();
  //  Starts events

});

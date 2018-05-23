const PubSub = require('../helpers/pub_sub.js');

const InstrumentsMenuView = function (element) {
  this.element = element;
}

InstrumentsMenuView.prototype.listenForData = function () {
  PubSub.subscribe("InstrumentFamilies:send-data", (event) => {
    this.populateMenu(event.detail);
    this.onChangeListener();
  })
};

InstrumentsMenuView.prototype.populateMenu = function (instrumentsFamilies) {
  instrumentsFamilies.forEach( (instrumentFamily, index) => {
    const item = document.createElement('option');
    item.textContent = instrumentFamily.name;
    item.value = index;
    this.element.appendChild(item);
  });
};

InstrumentsMenuView.prototype.onChangeListener = function () {
  this.element.addEventListener('change', (event) => {
    PubSub.publish('InstrumentsMenuView:send-selected-family', event.target.value);
  });
};



module.exports = InstrumentsMenuView;

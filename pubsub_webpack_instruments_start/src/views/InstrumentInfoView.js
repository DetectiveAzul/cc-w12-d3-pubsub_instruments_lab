const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(element) {
  this.element = element;
};

InstrumentInfoView.prototype.receiveSelectedDataFromModel = function () {
  PubSub.subscribe("InstrumentFamilies:send-familiy", (event) => {
    this.renderInfo(event.detail);
  });

};

InstrumentInfoView.prototype.renderInfo = function (instrumentFamily) {
  this.element.innerHTML = '';
  for (let key in instrumentFamily) {
      const line = document.createElement('p');
      line.textContent = `${key}: ${instrumentFamily[key]}`;
      this.element.appendChild(line);
  };
};




module.exports = InstrumentInfoView;

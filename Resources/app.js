Titanium.UI.setBackgroundColor('#000');

var App = {};
App.ui = require('App/ui');
require('App/cell');

(function() {

App.tabGroup = App.ui.createAppsTabGroup();
App.tabGroup.open();

})();

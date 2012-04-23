//シングルコンテキストを理解する
Titanium.UI.setBackgroundColor('#000');
//tableViewTestで挑戦

//グローバルな変数を定義
var App = {};
App.ui = require('App/ui');
require('App/cell');

(function() {

App.tabGroup = App.ui.createAppsTabGroup();
App.tabGroup.open();

})();

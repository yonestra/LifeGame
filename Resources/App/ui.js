//ui.js

(function() {
    
    exports.createAppWindow = function(){
		var win = Ti.UI.createWindow();
		
    	win.title = 'LifeGame';
		win.backgroundColor = '#933';
		
		var base = App.cell.createBase(10,50);
		
		var baseView = App.cell.createBaseView(base);
		win.add(baseView);
		
		var button = Ti.UI.createButton({
            bottom:30, height:40, width:100,
            title:'実行', 
        });
        button.addEventListener('click', function(){
            App.cell.executeOneCycle(baseView, base);
        });
        win.add(button);
		
	  	return win;
    	
    };

    exports.createAppsTabGroup = function(){
        
    	var tabGroup = Ti.UI.createTabGroup();
    	
    	var table1win = App.ui.createAppWindow();
    	table1win.hideTabBar();
    	
		App.ui.tab1 = Ti.UI.createTab({
			title: "Life Game",
			window:table1win});
    	
    	tabGroup.addTab(App.ui.tab1);
    	
    	return tabGroup;
    	
    };
})();

// Include your namespaced libraries
var coreLibrary = new Fliplet.Registry.get('tabs:1.0:core');

// This function will run for each instance found in the page
Fliplet.Widget.instance('tabs', function (data) {
  // Create new widget library
  var tabsCore = new coreLibrary(this, data);

  // Initialise the widget
  tabsCore.initialize();
});
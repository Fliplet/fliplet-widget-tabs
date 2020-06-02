// Use the Fliplet.Registry to define javascript libraries
// that your widget need to use. Make sure to namespace them
// with the widget version (e.g. 1.0) so that new versions
// won't conflict between each other.

Fliplet.Registry.set('tabs:1.0:core', function (element, data) {
  var mode = Fliplet.Env.get('mode');
  var isDev = Fliplet.Env.get('development');

  data.tabs = data.tabs || []

  function registerHelpers() {
    Handlebars.registerHelper('isInteractable', function(options) {
      var result = mode === 'interact' || isDev;

      if (result === false) {
        return options.inverse(this);
      }

      return options.fn(this);
    });
  }

  function insertAddNewTab() {
    var addNewTabTemplate = Fliplet.Widget.Templates['templates.build.new-tab'];
    var addNewTabHTML = addNewTabTemplate();

    $('.fl-tabs-container .nav-tabs').append(addNewTabHTML);
  }

  function attachObeservers() {
    $(element)
      .on('click', '.nav-tabs a:not(.add-new-tab)', function () {
        var $tab = $(this).parent();
        var tabIndex = $tab.index();
        var $tabs = $(element).find('.nav-tabs');
        var $tabPanel = $(element).find('.tab-content');
        var $tabPane = $tabPanel.find('.tab-pane').eq(tabIndex);

        $tabs.find('.active').removeClass('active');
        $tabPanel.find('.active').removeClass('active');
        $tab.addClass('active');
        $tabPane.addClass('active');
      })
      .on('click', '.nav-tabs a.add-new-tab', function () {
        var numberOfTabs = $(element).find('.nav-tabs a').length;

        data.tabs.push({
          name: 'New tab ' + numberOfTabs
        });

        saveTabs(data);
      });
  }

  function initialize() {
    registerHelpers();
    insertAddNewTab();
    attachObeservers();
  }

  function saveTabs(widgetData) {
    return Fliplet.API.request({
      url: 'v1/widget-instances/' + widgetData.id,
      method: 'PUT',
      data: widgetData
    })
      .then(function (response) {
        var widget = response.widgetInstance;

        Fliplet.Studio.emit('reload-widget-instance', widget.id);
      });
  } 
  

  return {
    initialize: initialize
  };
});
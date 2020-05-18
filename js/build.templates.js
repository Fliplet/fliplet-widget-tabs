this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.build.new-tab"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "  <li>\r\n    <a href=\"#\" class=\"add-new-tab\"><i class=\"fa fa-plus\"></i> Add tab</a>\r\n  </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.isInteractable || (depth0 != null ? depth0.isInteractable : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"isInteractable","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.isInteractable) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});
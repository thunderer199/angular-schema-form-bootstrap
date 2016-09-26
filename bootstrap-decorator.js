angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/bootstrap/actions-trcl.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\" ng-transclude=\"\"></div>");
$templateCache.put("decorators/bootstrap/actions.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\"><input ng-repeat-start=\"item in form.items\" type=\"submit\" class=\"btn {{ item.style || \'btn-default\' }} {{form.fieldHtmlClass}}\" value=\"{{item.title}}\" ng-if=\"item.type === \'submit\'\"> <button ng-repeat-end=\"\" class=\"btn {{ item.style || \'btn-default\' }} {{form.fieldHtmlClass}}\" type=\"button\" ng-disabled=\"form.readonly\" ng-if=\"item.type !== \'submit\'\" ng-click=\"buttonClick($event,item)\"><span ng-if=\"item.icon\" class=\"{{item.icon}}\"></span>{{item.title}}</button></div>");
$templateCache.put("decorators/bootstrap/array.html","<div ng-if=\"form.readonly && $$value$$\" sf-array=\"form\" class=\"schema-form-array {{form.htmlClass}}\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\"><label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label><ol class=\"list-group\" ng-model=\"modelArray\" ui-sortable=\"\"><li class=\"list-group-item {{form.fieldHtmlClass}}\" ng-repeat=\"item in modelArray track by $index\"><sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator></li></ol></div><div sf-array=\"form\" class=\"schema-form-array {{form.htmlClass}}\" ng-if=\"!form.readonly\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\"><label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label><ol class=\"list-group\" ng-model=\"modelArray\" ui-sortable=\"\"><li class=\"list-group-item {{form.fieldHtmlClass}}\" ng-repeat=\"item in modelArray track by $index\"><button ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" style=\"position: relative; z-index: 20;\" type=\"button\" class=\"close pull-right\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button><sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator></li></ol><div class=\"clearfix\" style=\"padding: 15px;\"><button ng-hide=\"form.readonly || form.add === null\" ng-click=\"appendToArray()\" type=\"button\" class=\"btn {{ form.style.add || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</button></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/checkbox.html","<div class=\"checkbox schema-form-checkbox {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"{{form.labelHtmlClass}}\"><input type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.title\"></span></label><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/checkboxes.html","<div sf-array=\"form\" ng-model=\"$$value$$\" class=\"form-group schema-form-checkboxes {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\"><label><input type=\"checkbox\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"{{form.fieldHtmlClass}}\" ng-model=\"titleMapValues[$index]\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.titleMap[$index].name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/default.html","<div ng-if=\"form.readonly && $$value$$ && $$value$$.length > 0\" class=\"panel panel-default schema-form-{{form.type}} {{form.htmlClass}}\"><div class=\"panel-heading\"><label ng-show=\"showTitle()\">{{form.title}}</label></div><div class=\"panel-body\"><span ng-bind=\"$$value$$\"></span> <button ng-if=\"form.description\" class=\"btn btn-default pull-right\" ng-click=\"tab.show_index = !tab.show_index ? $index : tab.show_index !== $index ? $index : null\"><i class=\"glyphicon glyphicon-question-sign\"></i></button></div><div class=\"panel-footer\" ng-if=\"form.feedback || (form.description && tab.show_index === $index )\"><span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" aria-hidden=\"true\"></span><div ng-show=\"tab.show_index === $index\" class=\"help-block\" sf-message=\"form.description\"></div></div></div><div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-if=\"!form.readonly\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label><div ng-class=\"{\'input-group\': form.description || hasSuccess() }\" ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\"><input ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-model-options=\"form.ngModelOptions\" ng-model=\"$$value$$\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" style=\"border-color: #3c763d;\" ng-if=\"hasSuccess() && form.feedback !== false\" disabled=\"disabled\"><i class=\"glyphicon glyphicon-ok\" style=\"color: #3c763d;\"></i></button> <button ng-if=\"form.description\" class=\"btn btn-default\" ng-click=\"tab.show_index = !tab.show_index ? $index : tab.show_index !== $index ? $index : null\"><i class=\"glyphicon glyphicon-question-sign\"></i></button></span></div><div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" class=\"input-group\"><span ng-if=\"form.fieldAddonLeft\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonLeft\"></span> <input ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-model-options=\"form.ngModelOptions\" ng-model=\"$$value$$\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" style=\"border-color: #3c763d;\" ng-if=\"hasSuccess() && form.feedback !== false\" disabled=\"disabled\"><i class=\"glyphicon glyphicon-ok\" style=\"color: #3c763d;\"></i></button> <button ng-if=\"form.description\" class=\"btn btn-default\" ng-click=\"tab.show_index = !tab.show_index ? $index : tab.show_index !== $index ? $index : null\"><i class=\"glyphicon glyphicon-question-sign\"></i></button></span> <span ng-if=\"form.fieldAddonRight\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonRight\"></span></div><span ng-if=\"hasError() || hasSuccess()\" id=\"{{form.key.slice(-1)[0] + \'Status\'}}\" class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span><div ng-show=\"$index === tab.show_index\" class=\"help-block\" ng-if=\"form.description\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{form.htmlClass}}\"><legend ng-class=\"{\'sr-only\': !showTitle() }\">{{ form.title }}</legend><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div><sf-decorator ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator></fieldset>");
$templateCache.put("decorators/bootstrap/help.html","<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-bind-html=\"form.helpvalue\"></div>");
$templateCache.put("decorators/bootstrap/image-url.html","<div ng-if=\"form.readonly && $$value$$ && $$value$$.length > 0\" class=\"panel panel-default schema-form-{{form.type}} {{form.htmlClass}}\"><div class=\"panel-heading\"><label ng-show=\"showTitle()\">{{form.title}}</label></div><div class=\"panel-body\"><img class=\"img-responsive\" ng-src=\"{{$$value$$}}\" alt=\"\"> <button ng-if=\"form.description\" class=\"btn btn-default pull-right\" ng-click=\"tab.show_index = !tab.show_index ? $index : tab.show_index !== $index ? $index : null\"><i class=\"glyphicon glyphicon-question-sign\"></i></button></div><div class=\"panel-footer\" ng-if=\"form.feedback || (form.description && tab.show_index === $index )\"><span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" aria-hidden=\"true\"></span><div ng-show=\"tab.show_index === $index\" class=\"help-block\" sf-message=\"form.description\"></div></div></div><div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-if=\"!form.readonly\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label><div ng-class=\"{\'input-group\': form.description || hasSuccess() }\" ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\"><input ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\" ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-model-options=\"form.ngModelOptions\" ng-model=\"$$value$$\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" ng-if=\"hasSuccess() && form.feedback !== false\" disabled=\"disabled\"><i class=\"glyphicon glyphicon-ok\" style=\"color: #3c763d;\"></i></button> <button ng-if=\"form.description\" class=\"btn btn-default\" ng-click=\"tab.show_index = !tab.show_index ? $index : tab.show_index !== $index ? $index : null\"><i class=\"glyphicon glyphicon-question-sign\"></i></button></span></div><img class=\"img-thumbnail\" ng-show=\"form.key\" ng-src=\"{{$$value$$}}\" alt=\"\" width=\"{{form.preview.width}}\" height=\"{{form.preview.height}}\"> <button class=\"btn btn-default\" ng-click=\"addImage();\" ng-show=\"!readOnly\"><i class=\"glyphicon glyphicon-plus-sign\"></i>&nbsp;<span>Add image</span></button><div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\"><span ng-if=\"form.fieldAddonLeft\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonLeft\"></span> <input ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-model-options=\"form.ngModelOptions\" ng-model=\"$$value$$\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" ng-if=\"hasSuccess() && form.feedback !== false\" disabled=\"disabled\"><i class=\"glyphicon glyphicon-ok\" style=\"color: #3c763d;\"></i></button> <button ng-if=\"form.description\" class=\"btn btn-default\" ng-click=\"tab.show_index = !tab.show_index ? $index : tab.show_index !== $index ? $index : null\"><i class=\"glyphicon glyphicon-question-sign\"></i></button></span> <img class=\"img-thumbnail\" ng-show=\"form.key\" ng-src=\"{{$$value$$}}\" alt=\"\" width=\"{{form.preview.width}}\" height=\"{{form.preview.height}}\"> <span ng-if=\"form.fieldAddonRight\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonRight\"></span></div><span ng-if=\"hasError() || hasSuccess()\" id=\"{{form.key.slice(-1)[0] + \'Status\'}}\" class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span><div ng-show=\"$index === tab.show_index\" class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radio-buttons-allergens.html","<div ng-if=\"form.readonly\" class=\"form-group panel panel-default {{form.htmlClass}}\"><div class=\"panel-heading\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label></div><div ng-repeat=\"item in form.titleMap\"><p class=\"panel-body\" ng-if=\"item.value == $$value$$\"><i ng-if=\"item.value === \'C\'\" class=\"allergencolor fa fa-lg fa-square\"></i> <i ng-if=\"item.value === \'T\'\" class=\"allergencolor fa fa-lg fa-play fa-rotate-270\"></i> <i ng-if=\"item.value === \'F\'\" class=\"allergencolor fa fa-lg fa-circle\"></i> <i ng-if=\"item.value === \'U\'\" class=\"allergencolor fa fa-lg fa-question-circle\"></i> {{item.name}}</p></div><div ng-if=\"form.description\" class=\"panel-footer help-block\" sf-message=\"form.description\"></div></div><div ng-if=\"!form.readonly\" class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><div><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label></div><div class=\"btn-group\"><label class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\" ng-class=\"{ active: item.value === $$value$$ }\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" style=\"display: none;\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radio-buttons.html","<div ng-if=\"form.readonly\" class=\"form-group panel panel-default {{form.htmlClass}}\"><div class=\"panel-heading\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label></div><div ng-repeat=\"item in form.titleMap\"><p class=\"panel-body\" ng-if=\"item.value == $$value$$\">{{item.name}}</p></div><div ng-if=\"form.description\" class=\"panel-footer help-block\" sf-message=\"form.description\"></div></div><div ng-if=\"!form.readonly\" class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><div><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label></div><div class=\"btn-group\"><label class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\" ng-class=\"{ active: item.value === $$value$$ }\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" style=\"display: none;\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radios-inline.html","<div class=\"form-group schema-form-radios-inline {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label><div><label class=\"radio-inline\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radios.html","<div class=\"form-group schema-form-radios {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"radio\" ng-repeat=\"item in form.titleMap\"><label><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/rollup.html","<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{form.htmlClass}}\"><div ng-click=\"form.hide_fieldset = !form.hide_fieldset\"><label class=\"control-label\">{{ form.title }}</label> <i class=\"pull-right glyphicon ng-scope\" ng-class=\"{\'glyphicon-chevron-down\': form.hide_fieldset, \'glyphicon-chevron-right\': !form.hide_fieldset}\"></i></div><div ng-show=\"!form.hide_fieldset\" style=\"border-top: 1px solid #ddd; margin-bottom: 20px;\"></div><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div><ol ng-show=\"form.hide_fieldset\" class=\"list-group\"><li class=\"list-group-item {{form.fieldHtmlClass}}\"><sf-decorator ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator></li></ol></fieldset>");
$templateCache.put("decorators/bootstrap/section.html","<div class=\"schema-form-section {{form.htmlClass}}\"><sf-decorator ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator></div>");
$templateCache.put("decorators/bootstrap/select.html","<div class=\"form-group {{form.htmlClass}} schema-form-select\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label><select ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"form-control {{form.fieldHtmlClass}}\" schema-validate=\"form\" ng-options=\"item.value as item.name group by item.group for item in form.titleMap\" name=\"{{form.key.slice(-1)[0]}}\"></select><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/strapselect.html","<div ng-if=\"!form.readonly\" ng-controller=\"dynamicSelectController\" class=\"form-group {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"form-group {{form.fieldHtmlClass}}\" ng-init=\"populateTitleMap(form)\"><button ng-if=\"(form.options.multiple == \'true\') || (form.options.multiple == true)\" type=\"button\" class=\"btn btn-default\" sf-changed=\"form\" schema-validate=\"form\" ng-model=\"$$value$$\" data-placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\')}}\" data-html=\"1\" data-multiple=\"1\" data-max-length=\"{{form.options.inlineMaxLength}}\" data-max-length-html=\"{{form.options.inlineMaxLengthHtml}}\" bs-options=\"item.value as item.name for item in form.titleMap | selectFilter:this:$$value$$:&quot;$$value$$&quot;\" bs-select=\"\"></button> <button ng-if=\"!((form.options.multiple == \'true\') || (form.options.multiple == true))\" type=\"button\" class=\"btn btn-default\" sf-changed=\"form\" schema-validate=\"form\" ng-model=\"$$value$$\" data-placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\')}}\" data-html=\"1\" bs-options=\"item.value as item.name for item in form.titleMap | selectFilter:this:$$value$$:&quot;$$value$$&quot;\" bs-select=\"\"></button> <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span></div></div><div ng-if=\"form.readonly && (form.titleMap | emptyArray).length > 0 && $$value$$\" ng-controller=\"dynamicSelectController\" class=\"panel panel-default {{form.htmlClass}}\"><div class=\"panel-heading\" ng-show=\"showTitle()\"><label>{{form.title}}</label></div><div class=\"panel panel-body {{form.fieldHtmlClass}}\" ng-init=\"populateTitleMap(form)\"><div ng-if=\"(form.options.multiple === \'true\') || (form.options.multiple === true)\"><div ng-repeat=\"item in form.titleMap | filterMulti:$$value$$\">{{item.name}}</div></div><div ng-if=\"!((form.options.multiple == \'true\') || (form.options.multiple == true))\"><div ng-repeat=\"item in form.titleMap\"><div ng-if=\"item.value == $$value$$\">{{item.name}}</div></div></div></div><div ng-if=\"form.description\" class=\"panel-footer\">{{form.description}}</div></div>");
$templateCache.put("decorators/bootstrap/submit.html","<div class=\"form-group schema-form-submit {{form.htmlClass}}\"><input type=\"submit\" class=\"btn {{ form.style || \'btn-primary\' }} {{form.fieldHtmlClass}}\" value=\"{{form.title}}\" ng-disabled=\"form.readonly\" ng-if=\"form.type === \'submit\'\"> <button class=\"btn {{ form.style || \'btn-default\' }}\" type=\"button\" ng-click=\"buttonClick($event,form)\" ng-disabled=\"form.readonly\" ng-if=\"form.type !== \'submit\'\"><span ng-if=\"form.icon\" class=\"{{form.icon}}\"></span> {{form.title}}</button></div>");
$templateCache.put("decorators/bootstrap/tabarray-inline.html","<div ng-if=\"!form.readonly\" sf-array=\"form\" ng-init=\"selected = { tab: 0 }\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || \'left\'}} {{form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a class=\"link-hide-style\"><span>{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</span><div ng-hide=\"form.readonly\" class=\"pull-right remove-hide-style\" ng-click=\"selected.tab = deleteFromArray($index).length - 1\"><i class=\"glyphicon glyphicon-trash\"></i></div></a></li><li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix\" ng-repeat=\"item in modelArray track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || appendToArray()\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div></div><div ng-if=\"form.readonly\" sf-array=\"form\" ng-init=\"selected = { tab: 0 }\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || \'left\'}} {{form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a class=\"link-hide-style\"><span>{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</span></a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix\" ng-repeat=\"item in modelArray track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li></ul></div></div>");
$templateCache.put("decorators/bootstrap/tabarray.html","<div sf-array=\"form\" ng-init=\"selected = { tab: 0 }\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || \'left\'}} {{form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix\" ng-repeat=\"item in modelArray track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator><button ng-hide=\"form.readonly\" ng-click=\"selected.tab = deleteFromArray($index).length - 1\" type=\"button\" class=\"btn {{ form.style.remove || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-trash\"></i> {{ form.remove || \'Remove\'}}</button></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || appendToArray()\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div></div>");
$templateCache.put("decorators/bootstrap/tabs.html","<div ng-if=\"!form.readonly\" ng-init=\"selected = { tab: 0 }\" class=\"schema-form-tabs {{form.htmlClass}}\"><ul class=\"nav nav-tabs\"><li ng-repeat=\"tab in form.tabs\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{ tab.title }}</a></li></ul><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane\" ng-repeat=\"tab in form.tabs\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><sf-decorator ng-repeat=\"item in tab.items\" form=\"item\"></sf-decorator></div></div></div><div ng-if=\"form.readonly\" class=\"schema-form-tabs {{form.htmlClass}}\"><div ng-repeat=\"tab in form.tabs\"><h1>{{tab.title}}</h1><sf-decorator ng-repeat=\"item in tab.items\" form=\"item\"></sf-decorator></div></div>");
$templateCache.put("decorators/bootstrap/textarea.html","<div class=\"form-group has-feedback {{form.htmlClass}} schema-form-textarea\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"{{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label> <textarea ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\" class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\"></textarea><div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\"><span ng-if=\"form.fieldAddonLeft\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonLeft\"></span> <textarea class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\"></textarea> <span ng-if=\"form.fieldAddonRight\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonRight\"></span></div><span class=\"help-block\" sf-message=\"form.description\"></span></div>");
$templateCache.put("decorators/bootstrap/treeKm.html","<div ng-if=\"!form.readonly\" class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label><km-tree-view km-data=\"form.options.data\" hierarchy-key=\"{{form.options.hierarchyKey}}\" km-url=\"{{form.options.dataUrl}}\" expand-level=\"1\" validation=\"true\" placeholder=\"\" selected-node=\"$$value$$\" readonly=\"form.readonly\" form=\"form\"></km-tree-view><span class=\"help-block\" sf-message=\"form.description\"></span></div><div ng-if=\"form.readonly && $$value$$ && $$value$$.length > 0\" class=\"panel panel-default schema-form-{{form.type}} {{form.htmlClass}}\"><div class=\"panel-heading\"><label ng-show=\"showTitle()\">{{form.title}}</label></div><div class=\"panel-body\"><span ng-bind=\"$$value$$\"></span> <button ng-if=\"form.description\" class=\"btn btn-default pull-right\" ng-click=\"tab.show_index = !tab.show_index ? $index : tab.show_index !== $index ? $index : null\"><i class=\"glyphicon glyphicon-question-sign\"></i></button></div><div class=\"panel-footer\" ng-if=\"form.feedback || (form.description && $index === tab.show_index)\"><span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" aria-hidden=\"true\"></span><div ng-show=\"$index === tab.show_index\" class=\"help-block\" sf-message=\"form.description\"></div></div></div>");}]);
angular.module('schemaForm').config(['schemaFormDecoratorsProvider', function(decoratorsProvider) {
  var base = 'decorators/bootstrap/';

  decoratorsProvider.defineDecorator('bootstrapReportDecorator', {
    textarea: {template: base + 'textarea.html', replace: false},
    fieldset: {template: base + 'fieldset.html', replace: false},
    /*fieldset: {template: base + 'fieldset.html', replace: true, builder: function(args) {
     var children = args.build(args.form.items, args.path + '.items');
     console.log('fieldset children frag', children.childNodes)
     args.fieldFrag.childNode.appendChild(children);
     }},*/
    array: {template: base + 'array.html', replace: false},
    tabarray: {template: base + 'tabarray.html', replace: false},
    tabs: {template: base + 'tabs.html', replace: false},
    section: {template: base + 'section.html', replace: false},
    conditional: {template: base + 'section.html', replace: false},
    actions: {template: base + 'actions.html', replace: false},
    select: {template: base + 'select.html', replace: false},
    checkbox: {template: base + 'checkbox.html', replace: false},
    checkboxes: {template: base + 'checkboxes.html', replace: false},
    number: {template: base + 'default.html', replace: false},
    password: {template: base + 'default.html', replace: false},
    submit: {template: base + 'submit.html', replace: false},
    button: {template: base + 'submit.html', replace: false},
    radios: {template: base + 'radios.html', replace: false},
    'radios-inline': {template: base + 'radios-inline.html', replace: false},
    radiobuttons: {template: base + 'radio-buttons.html', replace: false},
    'radiobuttons-allergens': {template: base + 'radio-buttons-allergens.html', replace: false},
    help: {template: base + 'help.html', replace: false},
    'default': {template: base + 'default.html', replace: false},
    'tabarray-inline': {template: base + 'tabarray-inline.html', replace: false},
    treeKm: {template: base + 'treeKm.html', replace: false},
    strapselect: {template: base + 'strapselect.html', replace: false},
    rollup: {template: base + 'rollup.html', replace: false},
    imageUrl: {template: base + 'image-url.html', replace: false}
  }, []);

  //manual use directives
  decoratorsProvider.createDirectives({
    textarea: base + 'textarea.html',
    select: base + 'select.html',
    checkbox: base + 'checkbox.html',
    checkboxes: base + 'checkboxes.html',
    number: base + 'default.html',
    submit: base + 'submit.html',
    button: base + 'submit.html',
    text: base + 'default.html',
    date: base + 'default.html',
    password: base + 'default.html',
    datepicker: base + 'datepicker.html',
    input: base + 'default.html',
    radios: base + 'radios.html',
    'radios-inline': base + 'radios-inline.html',
    radiobuttons: base + 'radio-buttons.html'
  });

}]).directive('sfFieldset', function() {
  return {
    transclude: true,
    scope: true,
    templateUrl: 'decorators/bootstrap/fieldset-trcl.html',
    link: function(scope, element, attrs) {
      scope.title = scope.$eval(attrs.title);
    }
  };
}).filter('filterMulti', function() {
  return function(input, arr) {
    var filtered = [];

    if (!angular.isArray(arr)) {
      arr = [arr];
    }

    var arrLen = arr.length;
    var inputLen = input.length;
    var j;
    for (var i = 0; i < arrLen; i++) {
      for (j = 0; j < inputLen; j++) {
        if (input[j].value === arr[i]) {
          filtered.push(input[j]);
        }
      }
    }

    return filtered;
  };
}).filter('emptyArray', function() {
  return function(input) {
    if (!input || !angular.isObject(input)) {
      return input;
    }

    function isEmpty(e) {
      if (!e) {
        return false;
      }
      if (angular.isArray(e) || angular.isString(e)) {
        return e.length > 0;
      }
      if (angular.isObject(e)) {
        return Object.keys(e).length > 0;
      }

      return true;

    }

    return input.some(isEmpty) ? input : [];
  };
});

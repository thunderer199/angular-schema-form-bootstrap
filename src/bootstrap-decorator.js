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
    help: {template: base + 'help.html', replace: false},
    'default': {template: base + 'default.html', replace: false},
    'tabarray-inline': {template: base + 'tabarray-inline.html', replace: false},
    treeKm: {template: base + 'treeKm.html', replace: false},
    strapselect: {template: base + 'strapselect.html', replace: false},
    rollup: {template: base + 'rollup.html', replace: false}
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
}).filter('filterMulti', function () {
  return function (input, arr) {
    var filtered = [];

    var arrLen = arr.length;
    var inputLen = input.length;
    var j;
    for (var i = 0; i < arrLen; i++) {
        for (j = 0; j < inputLen; j++) {
            if (input[j].value === arr[i]) {
                filtered.push(input[j]);
                break;
            }
        }
    }

    return filtered;
  }
});

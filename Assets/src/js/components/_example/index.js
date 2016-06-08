export let _ExampleComponent = {
    bindings: {},
    controller: function() {
        let ctrl = this;

        ctrl.test = "Hello world!"

        ctrl.$onInit =()=> console.warn(ctrl.test);
    },
    template: `Example: {{$ctrl.test}}`
};
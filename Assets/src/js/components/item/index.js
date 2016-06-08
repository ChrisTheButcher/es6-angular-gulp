export let ItemComponent = {
    bindings: {
        data: '<',
        onRemove: '&',
        onSave: '&'
    },
    controller: function() {
        let ctrl = this;

        ctrl.remove =()=> ctrl.onRemove();
        ctrl.save =data=> ctrl.onSave({data});
    },
    template: ` 
        <li class="item"> 
            <div ng-if="!$ctrl.edit">
                <span ng-click="$ctrl.edit = true">{{$ctrl.data}}</span>
                <button ng-click="$ctrl.edit = true">Edit</button>
                <button ng-click="$ctrl.remove()">Remove</button>
            </div>
            <div ng-if="$ctrl.edit">
                <input type="text" ng-model="$ctrl.data">
                <button ng-click="$ctrl.edit = false; $ctrl.save($ctrl.data)">Save</button>
            </div>
        </li> 
    `
} 
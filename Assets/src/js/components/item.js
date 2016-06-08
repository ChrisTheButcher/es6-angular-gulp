module.exports = {
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
                <span ng-click="$ctrl.edit = true" class="text">{{$ctrl.data}}</span>

                <span class="controls controls-2">
                    <button ng-click="$ctrl.edit = true">Edit</button>
                    <button ng-click="$ctrl.remove()">Remove</button>
                </span>
            </div>
            <div ng-if="$ctrl.edit">
                <input type="text" ng-model="$ctrl.data">

                <span class="controls">
                    <button ng-click="$ctrl.edit = false; $ctrl.save($ctrl.data)">Save</button>
                </span>
            </div>
        </li> 
    `
} 
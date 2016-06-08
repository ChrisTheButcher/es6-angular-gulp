export let ListComponent = {
    controller: function() {
        let ctrl = this;
        let ixd =item=> ctrl.list.indexOf(item);

        ctrl.list = ["Bananas", "Apples", "Tomatoes", "Avocados", "Rice", "Tea"];

        ctrl.removeItem =item=> ctrl.list.splice(ixd(item), 1);
        ctrl.saveItem =(item, data)=> ctrl.list[ixd(item)] = data;
    },
    template: `
        <span class="caption">List component</span>

        <ul class="list">
            <item ng-repeat="item in $ctrl.list track by $index" 
                data="item" 
                on-remove="$ctrl.removeItem(item)"
                on-save="$ctrl.saveItem(item, data)">
            </item>
        </ul> 

        <code>
            <span class="caption">Component one-way data binding</span>
            {{$ctrl.list | json}}
        </code>
    ` 
}; 
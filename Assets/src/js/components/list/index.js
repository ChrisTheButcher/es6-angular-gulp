export let ListComponent = {
    controller: function() {
        let ctrl = this;
        let ixd =item=> ctrl.list.indexOf(item);

        ctrl.list = [-1,0,1,2,3,4,5];

        ctrl.removeItem =item=> ctrl.list.splice(ixd(item), 1);
        ctrl.saveItem =(item, data)=> ctrl.list[ixd(item)] = data;
    },
    template: `
        <ul class="list">
            <item ng-repeat="item in $ctrl.list track by $index" 
                data="item" 
                on-remove="$ctrl.removeItem(item)"
                on-save="$ctrl.saveItem(item, data)">
            </item>
        </ul> 

        {{$ctrl.list | json}}
    ` 
}; 
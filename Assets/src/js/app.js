import { AppComponent } from "./components/app"; 
import { ListComponent } from "./components/list"; 
import { ItemComponent } from "./components/item"; 
import { _ExampleComponent } from "./components/_example"; 

const app = angular.module("app", []);  

app
    .component("app", AppComponent)
    .component("list", ListComponent)
    .component("item", ItemComponent)
    .component("example", _ExampleComponent);   
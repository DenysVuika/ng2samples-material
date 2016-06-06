import { Component } from '@angular/core';
import { MDL } from './MaterialDesignLiteUpgradeElement';

declare var __moduleName: string;

@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [MDL]
})
export class AppComponent {

}

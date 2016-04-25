import {Component, Inject} from 'angular2/core';
import {FORM_DIRECTIVES } from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {SingleDemo} from './select-demo/simple-select';

interface TestObject {
  name: string;
  value: number;
}

@Component({
  selector: 'app',
  template: `<single-demo></single-demo>`,
  directives: [FORM_DIRECTIVES, SingleDemo],
})
export class AppComponent {

}

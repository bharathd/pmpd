import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <login-page></login-page>`,
})
export class AppComponent  { name = 'Angular'; }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paginator-lib';
  selectedPage ;
  pageSelect(e){
    this.selectedPage =e;
    // console.log(e);
    // alert("page selected : " ,e);
  }
}

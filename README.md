# PaginatorLib

# Instllation : 
```bash
npm i de-paginator
```

## Import Module:

#### In `app.module.ts`:
```typescript
import {DePaginatorModule} from 'de-paginator';

...

imports: [
  ...,
  DePaginatorModule
],
```

## Example Usage : 

### First run

#### in `app.component.html`
```typescript
<lib-de-paginator
  [currentPage]="page"
  [limitPerPage]="limit"
  [total]="total"
  (changePage)="pageSelect($event)"
></lib-de-paginator> 
```

#### in `app.component.ts`
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paginator-lib';
  total : Number = 151;
  limit : Number = 10;
  page : Number = 1;
  selectedPage ;
  pageSelect(e){
    alert('selected page is:' ,e);
    this.selectedPage =e;
  }
}
```

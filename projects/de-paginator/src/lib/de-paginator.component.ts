import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'lib-de-paginator',
  template: `
    <div class="main-container main">
      <div>
        {{
          getMin(limitPerPage * (currentPage - 1) + limitPerPage, total) -
            limitPerPage * (currentPage - 1)
        }}/ {{ total }}
      </div>
      <div class="paginator-container">
        <ul class="paginator-columns">
          <li class="list-items" (click)="getCurrentRow(currentPage - 1)">
            <img src="../../assets/left-arrow.svg" height="12" width="12" />
          </li>

          <li
            *ngFor="let item of visiblePagesArray"
            class="list-items"
            [ngClass]="{ activated: currentPage === item }"
            (click)="getCurrentRow(item)"
          >
            {{ item }}
          </li>

          <li class="list-items" (click)="getCurrentRow(currentPage + 1)">
            <img src="../../assets/right-arrow.svg" height="12" width="12" />
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .main {
        height: 60px;
        overflow: hidden;
        background-color: #646464;
      }
      .pagination {
        float: right;
      }
      .total {
        text-align: start;
        color: white;
        display: flex;
        align-items: center;
      }

      li {
        border: none;
        a {
          color: white;
        }

        .active {
          background-color: red;
        }
      }
      .item {
        background-color: #666666 !important;
        border: none !important;
      }

      .activated {
        background-color: #949495 !important;
      }

      .main-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        padding: 0 16px;
      }
      .paginator-columns {
        list-style: none;
        padding-bottom: 0px;
      }
      .list-items {
        display: inline;
        padding: 10px;
        background-color: #949495;
        cursor: pointer;
        opacity: 0.8;
      }
      ul {
        margin: auto !important;
      }
      .paginator-container {
        background-color: #646464;
      }

      .activated {
        opacity: 1 !important;
      }
    `,
  ],
})
export class DePaginatorComponent implements OnInit {
  @Input('limitPerPage') public limitPerPage;
  @Input('total') public total;
  @Input('numberOfColumns') public numberOfColumns = 3;
  @Input('currentPage') public currentPage = 1;
  @Input('boundryLinks') public boundryLinks = false;
  @Output() changePage = new EventEmitter();

  numberOfPaginators;
  pagesArray = [];
  visiblePagesArray = [];
  constructor() { }

  getMin(first, sec) {
    return Math.min(first, sec);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.paginator();
  }

  paginator() {
    this.pagesArray = [];
    this.numberOfPaginators = Math.ceil(this.total / this.limitPerPage);
    for (let val = 1; val <= this.numberOfPaginators; val++) {
      this.pagesArray.push(val);
    }
    this.getCurrentRow(this.currentPage);
  }

  ngOnInit(): void {
    this.paginator();
    this.visiblePagesArray = this.pagesArray.slice(this.currentPage - 1, (this.currentPage - 1) + this.numberOfColumns);
  }


  getCurrentRow(item) {
    this.currentPage = item;
    this.visiblePagesArray = this.pagesArray.slice(0, this.numberOfColumns);
    if (item && item >= this.numberOfColumns) {
      if (this.numberOfPaginators >= this.numberOfColumns + item) {
        let ope = Math.floor(this.numberOfColumns / 2);
        this.visiblePagesArray = this.pagesArray.slice(item - 1 - ope, item + this.numberOfColumns - 1 - ope);
      }
      else {
        this.visiblePagesArray = this.pagesArray.slice(this.numberOfPaginators - this.numberOfColumns, this.numberOfPaginators)
      }
    }
    this.changePage.emit(this.currentPage);
  }
}

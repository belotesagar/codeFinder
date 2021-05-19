import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  htmlData: any;
  cssData: any;
  innerCss: any;
  updateHtmlData(data) {
    this.htmlData = data;
  }
  getHtmlData() {
    return this.htmlData;
  }

  updateCssData(data) {
    this.cssData = data;
  }
  updateInnerCss(data) {
    this.innerCss = data;
  }
}

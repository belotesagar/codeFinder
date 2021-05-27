import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {

  constructor(private _sharedService: SharedServiceService) { }
  htmlData: any
  cssData: any
  innerCssData: any;
  showInnerCss = false;
  ngOnInit(): void {
    setTimeout(() => { this.ngOnInit() }, 1000 * 1)
    this.htmlData = this._sharedService.htmlData;
    this.cssData = this._sharedService.cssData;
    this.innerCssData = this._sharedService.innerCss;
  }

  loadCard() {
    if (this.showInnerCss) {
      this.showInnerCss = false;
    }
    else {
      this.showInnerCss = true;
    }

  }





}

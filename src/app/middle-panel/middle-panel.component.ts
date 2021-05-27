import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-middle-panel',
  templateUrl: './middle-panel.component.html',
  styleUrls: ['./middle-panel.component.css']
})
export class MiddlePanelComponent implements OnInit {

  constructor(private _sharedService: SharedServiceService) { }

  ngOnInit(): void {

  }

  generateMultipleData(buttonName) {
    let el = document.getElementById(buttonName);
    this._sharedService.updateHtmlData(el.innerHTML);

    if (buttonName == "button1") {
      var div = document.querySelector('.buttonBlue');
    }
    else {
      var div = document.querySelector('.buttonRed');
    }

    console.log("classlist", div.classList);
    this._sharedService.updateCssData(div.classList);

    var cssClassArr = [];
    var innerCssArr = [];
    for (var i = 0; i < div.classList.length; i++) {
      cssClassArr.push(div.classList[i])
      var element = div.classList[i];
      console.log("element", element);
      const element1 = document.querySelector('.' + element);
      console.log("element1", element1);
      var Realcss = getComputedStyle(element1).cssText;
      innerCssArr.push(Realcss);
      console.log("computed style", Realcss);
      console.log("innercssarr", innerCssArr);
    }
    this._sharedService.updateInnerCss(innerCssArr);
  }
}

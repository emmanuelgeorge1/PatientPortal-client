import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// import { Component, Input, OnInit } from '@angular/core';

// type Data = {
//   [key: string]: string;
// };
// @Component({
//   selector: 'app-landing',
//   template: `<div>
//     <ng-container *ngIf="countryList.length > 0">
//       <ng-container *ngFor="let countryObj of countryList; let i = index">
//         <button
//           [ngStyle]="{
//             'background-color':
//               oneMatch == true &&
//               this.twoMatch == false &&
//               this.prevSelected == countryList[i] &&
//               this.currSelected != null
//                 ? 'red'
//                 : oneMatch && this.prevSelected == countryList[i]
//                 ? '#0000ff'
//                 : oneMatch == true &&
//                   this.twoMatch == false &&
//                   this.currSelected == countryList[i]
//                 ? 'red'
//                 : oneMatch == false
//                 ? 'white'
//                 : ''
//           }"
//           mat-flat-button
//           (click)="checkMatch(countryObj)"
//         >
//           {{ countryObj.trim() }}
//         </button>
//       </ng-container></ng-container
//     ><ng-container *ngIf="countryList.length == 0"
//       >Congratulations</ng-container
//     >
//   </div>`,
// })
// // Do not change the way the component is named and exported.
// export class LandingComponent implements OnInit {
//   @Input() data;
//   countryList: Array<any>;
//   //Use console.log() for debugging
//   prevSelected: string;
//   twoMatch = false;
//   oneMatch = false;
//   currSelected: string;
//   ngOnInit() {
//     this.countryList = [];
//     for (var i in this.data) {
//       this.countryList.push(i.trim());
//       this.countryList.push(this.data[i].trim());
//     }
//     console.log(this.countryList);
//   }
//   checkMatch(countryObj: any): boolean {
//     debugger;
//     if (this.twoMatch == true) this.twoMatch = false;
//     if (this.prevSelected == null || this.prevSelected == undefined) {
//       this.prevSelected = countryObj;
//       this.oneMatch = true;
//       let index = this.countryList.indexOf(countryObj);
//     } else {
//       this.currSelected = countryObj;
//       for (var i in this.data) {
//         if (i == this.prevSelected || this.data[i] == this.prevSelected) {
//           this.oneMatch = true;
//         }
//         if (
//           this.oneMatch &&
//           (i == countryObj || this.data[i] == countryObj) &&
//           (this.data[this.prevSelected] == countryObj ||
//             this.data[countryObj] == this.prevSelected)
//         ) {
//           this.twoMatch = true;
//           this.oneMatch = false;
//         }
//       }
//     }
//     if (this.twoMatch) {
//       let index = this.countryList.indexOf(this.prevSelected);
//       this.countryList.splice(index, 1);
//       index = this.countryList.indexOf(countryObj);
//       this.countryList.splice(index, 1);
//       this.prevSelected = null;
//       this.oneMatch = false;
//     }
//     return this.twoMatch;
//   }
// }

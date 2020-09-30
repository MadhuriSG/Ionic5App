import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-checkbox',
  templateUrl: './ion-checkbox.page.html',
  styleUrls: ['./ion-checkbox.page.scss'],
})
export class IonCheckboxPage  {
// form:any
//   constructor() { }

//   ngOnInit() {
//     let fruits: string[] = ['Apple', 'Orange', 'Banana'];
//      this.form = [
//       { val: 'Pepperoni', isChecked: true },
//       { val: 'Sausage', isChecked: false },
//       { val: 'Mushroom', isChecked: false }
//     ];
// console.log("form ",this.form);
//   }

indeterminateState: boolean;
checkParent: boolean;
Checkboxes: any;

constructor() {
  this.Checkboxes = [
    {
      value: "Captain Marvel",
      isItemChecked: false
    }, {
      value: "Thor",
      isItemChecked: false
    }, {
      value: "Iron Man",
      isItemChecked: false
    }, {
      value: "Spider Man",
      isItemChecked: false
    }, {
      value: "Loki",
      isItemChecked: false
    }
  ];
}

checkCheckbox() {
  
  setTimeout(() => {
    this.Checkboxes.forEach(item => {
      item.isItemChecked = this.checkParent;
      console.log("item isitemchecked ",item.isItemChecked);
    });
    
  });
}

verifyEvent() {
  
  const allItems = this.Checkboxes.length;
  let selected = 0;

  this.Checkboxes.map(item => {
    if (item.isItemChecked) selected++;
  });

  if (selected > 0 && selected < allItems) {
    // One item is selected among all checkbox elements
    this.indeterminateState = true;
    this.checkParent = false;
  } else if (selected == allItems) {
    // All item selected
    this.checkParent = true;
    this.indeterminateState = false;
  } else {
    // No item is selected
    this.indeterminateState = false;
    this.checkParent = false;
  }
  
}
 
}

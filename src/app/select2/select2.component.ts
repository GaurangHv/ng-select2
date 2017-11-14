import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { FormsModule, ReactiveFormsModule, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.css']
})
export class Select2Component implements OnInit {
  public exampleData: Array<Select2OptionData>;
  public options: Select2Options;
  public invoiceForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.exampleData = [
      {
        id: 'opt1',
        text: 'Options 1'
      },
      {
        id: 'opt2',
        text: 'Options 2'
      },
      {
        id: 'opt3',
        text: 'Options 3'
      },
      {
        id: 'opt4',
        text: 'Options 4'
      },
      {
        id: 'opt5',
        text: 'Options 5'
      }
    ];

    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false
    };

    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()]) // here
    });
  }

    addNewRow() {
      // control refers to your formarray
      const control = <FormArray>this.invoiceForm.controls['itemRows'];
      // add new formgroup
      control.push(this.initItemRows());
    }

    deleteRow(index: number) {
      // control refers to your formarray
      const control = <FormArray>this.invoiceForm.controls['itemRows'];
      // remove the chosen row
      control.removeAt(index);
    }

    initItemRows() {
      return this._fb.group({
      // list all your form controls here, which belongs to your form array
      itemname: ['']
      });

    }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommService } from '../comm.service';
@Component({
  selector: 'app-to-do-column',
  templateUrl: './to-do-column.component.html',
  styleUrls: ['./to-do-column.component.css']
})
export class ToDoColumnComponent implements OnInit {

  @Input() headerLabel: string = '';
  count: number = 0;
  popUpFlag: boolean = false;
  formA: any;
  IN_PROG: any;
  constructor(private fb: FormBuilder, public commService: CommService) { }

  ngOnInit(): void {

    this.formA = this.fb.array([]);
  }

  openPopUp() {
    this.popUpFlag = true
  }

  closePopUp(ev: any) {
    console.log(ev)
    this.popUpFlag = ev.flag;
  }

  listenSubmitEvent(ev: any) {
    console.log(ev);
    this.popUpFlag = ev.flag;
    if (ev.hasOwnProperty('formValues')) {
      this.formA.push(ev.formValues)
      this.commService.todoForm=this.formA
    }
    console.log('FORM ARRAY', this.formA)
    let formRaw=this.formA.getRawValue()
    this.IN_PROG = formRaw.filter((el: any): any => el.STATUS == 'TO_DO');
    this.IN_PROG = [...this.IN_PROG]
    this.commService.formData = this.IN_PROG
    console.log("IN_PROG", this.IN_PROG)
  }

  changeStatus(ev: any) {

    console.log('change event data',ev);

    let formRaw=this.commService.todoForm.getRawValue();
    console.log(formRaw)
   let ind= formRaw.findIndex((el:any)=>el.TITLE==ev.TITLE)
   console.log(ind);
   this.commService.todoForm.at(ind).get('STATUS').setValue(ev.STATUS)
   console.log(this.commService.todoForm)
   this.popUpFlag=false;
  }

}

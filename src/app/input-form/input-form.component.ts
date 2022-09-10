import { Component, OnInit, Output,EventEmitter, Input,OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommService } from '../comm.service';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit,OnChanges {
inputForm:any;
  constructor(public commService:CommService) { }
@Output() close:EventEmitter<any>=new EventEmitter()
@Output() submitForm:EventEmitter<any>=new EventEmitter()
@Output() changeEvent:EventEmitter<any>=new EventEmitter();
@Input() header:string='';
_toDoStatus:any=[1,3,4,5,6,7];
@Input()  toDoStatus:any;

ngOnChanges(changes:SimpleChanges){
console.log('CHANGE TRIGERRED',changes)
}

  ngOnInit(): void {
    this.inputForm=new FormGroup({
      'TITLE':new FormControl('',Validators.required),
      'DESC':new FormControl('',Validators.required),
      'PRIORITY':new FormControl('',Validators.required),
      'FILE':new FormControl('',null),
      'STATUS':new FormControl('TO_DO',null)
    })

  }


  closePopUp(){
    this.close.emit({
      'flag':false,
      'formValues':this.inputForm,
    })
  }

  formSubmit(){
    this.submitForm.emit({
      'flag':false,
      'formValues':this.inputForm,
    })
  }

  trackByFn(index:any){
    return index
  }

  submit2(task:any,status:any){
    console.log(task,status)
    this.changeEvent.emit({
      'TITLE':task,
      'STATUS':status
    })
    
  }
}

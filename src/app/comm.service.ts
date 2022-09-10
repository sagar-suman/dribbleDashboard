import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  formData:any
  todoForm:any

  constructor() { }

  getCount(arg:string){
    if(this.todoForm){
      console.log(this.todoForm)
    let rawData=this.todoForm.getRawValue();
    let len=0;
    if(arg=='TO_DO'){
      let temp=rawData.filter((el:any)=>el.STATUS=='TO_DO')
      len=temp.length
    }
    if(arg=='PROGRESS'){
      let temp=rawData.filter((el:any)=>el.STATUS=='PROGRESS')
      len=temp.length
    }
    if(arg=='COMPLETE'){
      let temp=rawData.filter((el:any)=>el.STATUS=='COMPLETE')
      len=temp.length
    }
    return len
  }
  return 0
  }
}

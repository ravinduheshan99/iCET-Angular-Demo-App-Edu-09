import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


//javascript interfaces
//object level type safety
interface Student{
  name:String,
  age:number
}

//Service into service injection
@Injectable()
export class AppService{

//follows sigleton design pattern
//since this is providedIn:"root" this userId can use by any component in the application
//if you remove this proviedIn:"root" and add this into header component providers section it wiol only can use by that component
userId:any;

constructor(private http:HttpClient){

}

  loadCustomerList(student:Student){
    fetch("url").then()
  }

}
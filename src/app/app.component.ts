import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD OPERATION';
    employees = [
      {name:"John", position:"Web Developer"},
      {name:"Ram", position:"Graphics Designer"},
      {name:"Hari", position:"Web Designer"}
    ];
    model:any={};
    model2:any={};
    msg:any="";

  addEmployee(){
      this.employees.push(this.model);
      this.model={};
      this.msg = "Data is successfully added...";
}
  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msg = "Data is successfully deleted...";
}
  myValue;
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;
  }
  updateEmployee(){
    let k = this.myValue;
    for(let i=0; i<this.employees.length; i++){
      if(i==k){
          this.employees[i] = this.model2;
          this.model2={};
          this.msg = "Data is successfully updated...";
      }
    } 
  }
  clickMe(){
    this.msg="";
  }
}

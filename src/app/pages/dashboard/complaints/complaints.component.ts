import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith, filter} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss'],
})
export class ComplaintsComponent implements OnInit {
  // symptom dropdown list values
  symptomValue = [
    {
      "symptoms":"pain"
    },
    {
      "symptoms":"Back Pain"
    },
    {
      "symptoms":"Polyuria"
    }
] 


//  form definition
complaintsFormsDefinition = {
      "pain" : {
            "type":"pain",
            "field1":"",
            "field2":"",
            "field3":"",
            "field4":"",
            "rate":"",
            "pain":[],
            "pain_describe":"",
            "history":""
      },
      "POLYURIA":{
            "type":"polyuria",  
            "field1":"",
            "field2":"",
            "field3":"",
            "field4":"",
            "rate":"",
            "pain":[],
            "pain_describe":""
      }

}
complaintForms = [];
// symptomsForm= new FormControl();
symptomsList = [];
  constructor(private menu: MenuController, private route:Router) { }

  ngOnInit() {

    if(localStorage.getItem('complaintForm')){
      this.complaintForms = JSON.parse(localStorage.getItem('complaintForm'))
    }
  //   this.symptomsList = this.symptomsForm.valueChanges.pipe(
  //     startWith(''),
  //     map(option => option ? this.symptomsfilter(option) : this.symptomValue.slice())
  // );
  }

  // symptomsfilter(value : string){
  //   const filteredValue = value.toLowerCase();
  //   return this.symptomValue.filter(option => option.symptoms.toLowerCase().indexOf(filteredValue.toLowerCase()) === 0);
  // }

  filterSymptoms(value){
      console.log(value)
      this.symptomsList = []
     var count = 0
      this.symptomValue.forEach(obj =>{
        if(obj.symptoms.includes(value)){
          this.symptomsList.push(obj);
          count ++;
        }
      })
          if(count === 0){
            this.symptomsList = []
          }
  }

  closeSidenavBar(){
    this.menu.close();
  }

  openSidenavBar(){
    this.menu.open();
  }

  logout(){
    this.route.navigate(['/sign-in'])
  }

  symptomsDefinition(value){
      console.log(value);
    var type = '';
    var match = false
    if(value === 'pain' || value === 'Back Pain'){
       type = 'pain'
       match = true;
    } else if(value === 'Polyuria'){
        type = 'POLYURIA'
        match = true;
    }
    if(match){
    const definitionObj = JSON.parse(JSON.stringify(this.complaintsFormsDefinition[type]));
    this.complaintForms.unshift(definitionObj);
  }
    

}


removeComplaintFrom(i){
  this.complaintForms.splice(i, 1);
  localStorage.setItem('complaintForm', JSON.stringify(this.complaintForms))
  if(this.complaintForms.length === 0){
    localStorage.removeItem('complaintForm');
  }
}

formSubmit(){
  localStorage.setItem('complaintForm', JSON.stringify(this.complaintForms))
  alert('form submitted');
}

}

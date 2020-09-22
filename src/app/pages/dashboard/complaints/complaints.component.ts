import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss'],
})
export class ComplaintsComponent implements OnInit {
  dropdownActive:boolean = false;
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
painBtnType =[
  {
      "type":'BLUNT',
      "value":0
  },
  {
    "type":'SHARP',
    "value":1
  },
  {
    "type":'PIERCING',
    "value":2
  },
  {
    "type":'ACUTE',
    "value":3
  },
  {
    "type":'CHRONIC',
    "value":4
  },
  {
    "type":'SUDDEN',
    "value":5
  },
  {
    "type":'PERSISTENT',
    "value":6
  }
]
complaintForms = [];
symptomsList = [];
searchValue:any = '';
  constructor(private menu: MenuController, private route:Router) { }

  ngOnInit() {

    if(localStorage.getItem('complaintForm')){
      this.complaintForms = JSON.parse(localStorage.getItem('complaintForm'))
    }
  }

  dropdownMethod(value){
    this.dropdownActive = value
  }

  filterSymptoms(value){
      this.dropdownMethod(true);
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

  searchDropdownSetValue(value){
    this.searchValue = value
    this.dropdownMethod(false);
    this.symptomsDefinition(value);
  }

  symptomsDefinition(value){
    this.searchValue = value
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
  this.dropdownMethod(false);
   
       //  to maintain the active state of button
       var that = this
       setTimeout(function(){
         that.maintainActiveStateBtn();
       }, 500)

}


removeComplaintFrom(i){
  this.complaintForms.splice(i, 1);
  var that = this
  setTimeout(function(){
    that.maintainActiveStateBtn();
  }, 500)
  localStorage.setItem('complaintForm', JSON.stringify(this.complaintForms))
      
    if(this.complaintForms.length === 0){
    localStorage.removeItem('complaintForm');
  }
}

formSubmit(){
  localStorage.setItem('complaintForm', JSON.stringify(this.complaintForms))
  alert('form submitted');
}

// button active & in acitve
maintainActiveStateBtn(){
  this.complaintForms.forEach((obj,index) =>{
    if(obj.pain.length != 0 && obj.type === 'pain'){
          obj.pain.forEach(value =>{
              this.painBtnType.forEach(val =>{
                  if(val.type === value){
                      document.getElementsByClassName('pain-'+ index)[val.value].classList.add('active');
                  }
               })
          })

    } else if(obj.pain.length != 0  && obj.type === 'polyuria'){
      obj.pain.forEach(value =>{
          this.painBtnType.forEach(val =>{
            if(val.type === value){
                  document.getElementsByClassName('plyria-'+ index)[val.value].classList.add('active');
            }   
          })
        })
    }

    if(!(obj.rate === "") && obj.type === 'pain'){
      this.painBtnType.forEach(val =>{
           if(val.type === obj.pain){
               this.painRating(index, val.value);
           }
      })
    } else if(!(obj.rate === "") && obj.type === 'polyuria'){
         this.painBtnType.forEach(val =>{
           if(val.type === obj.pain){
               this.polyuriaRating(index, val.value);
          }   
         })
    }
})
}


painType(index, value, no){
        if(this.complaintForms[index].pain.includes(value)){
            var position = this.complaintForms[index].pain.indexOf(value);
            this.complaintForms[index].pain.splice(position, 1);
            document.getElementsByClassName('pain-'+ index)[no].classList.remove('active');
        } else{
          this.complaintForms[index].pain.push(value);
          document.getElementsByClassName('pain-'+ index)[no].classList.add('active');
        }   
}


    plyriaType(index, value, no){
      if(this.complaintForms[index].pain.includes(value)){
          var position = this.complaintForms[index].pain.indexOf(value);
          this.complaintForms[index].pain.splice(position, 1);
          document.getElementsByClassName('plyria-'+ index)[no].classList.remove('active');
      }else{
        this.complaintForms[index].pain.push(value);
        document.getElementsByClassName('plyria-'+ index)[no].classList.add('active');
      }
  } 

  painRating(index, no){
    var value = parseInt(no) + 1
    this.complaintForms[index].rate = value;
    for (let i = 0; i < 10 ; i++) {
      if (i != no) {
        document.getElementsByClassName('painrating-'+ index)[i].classList.remove('active');
      } else{
        document.getElementsByClassName('painrating-'+ index)[i].classList.add('active');
      }
    }
} 

polyuriaRating(index, no){
var value = parseInt(no) + 1
this.complaintForms[index].rate = value;
for (let i = 0; i < 10 ; i++) {
  if (i != no) {
    document.getElementsByClassName('rating-'+ index)[i].classList.remove('active');
  } else{
    document.getElementsByClassName('rating-'+ index)[i].classList.add('active');
  }
}
}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrls: ['./triage.component.scss'],
})
export class TriageComponent implements OnInit {
  height:any;
  heightCms:any;
  heightfeet:any;
  weight:any;
  bmiValue:any;
  bsaValue:any;
  tempatureValue:any;
  tempfahrenhitValue:any;
  tempfahrenhitDegree:any;
  respiratoryRateValue:any;
  pulseRateValue:any;
  pulseOxymetryValue:any;
  pulseOxyPercentageValue:any
  pulseOxyPercentageDegree:any;
  diastolicValue:any;
  systolicValue:any;
  painValue:any;
  stressValue:any;
  exerciseValue:any;
  bloodGroup:any;
  rhesusFactorValue:any;
  pitctValue:any;
  period:any;
  alcoholActivate:boolean = true;
  alcoholQuantity:any;
  referalActivate:boolean = true;
  hivActivate:boolean = true;
  incomeActivate:boolean = true;
  smokerActivate:boolean = true;
  cigaretteCount:any;
  currentMedication:boolean = true;
  addMedicine:any;
  currentMedicationList:any = [];
  sensitiveMedication:boolean = true;
  
  sensitiveFood:boolean = true;
  addSensitiveFoodValue:any;
  addSensitiveMedicineValue:any;
  sensitiveMedicationList:any = [];
  sensitiveFoodList:any = [];
  invasiveContraceptive:boolean =  true;
  invasiveContraceptiveList:any = []
  addInvasiveContraceptiveValue:any;


  bcgValue:any;
  polioValue:any;
  dptValue:any
  measles:any;
  pneumococcal:any;
  yellowFever:any;
  titanus:any;
  checkBoxStatus:boolean = true;
  illnessActivate:boolean = true;
  illnessValues = [];
  activeIllness:any = 0;
  addIllnessOtherConditionValue:any;
  illnessOtherConditionList = []
  illnessOtherConditionValue:any;
  activeIllnessList:any = [0];
  activeChronicIllness:any = 0;
  activeChronicIllnessList:any = [0]
  chronicValues = [];


  surgeriesActivate:boolean = true;
  surgeriesOtherConditionList = []
  addSurgeriesOtherConditionValue:any;
  surgeriesOtherConditionValue:any;
  activeSurgery:any = 0;
  activeSurgerList:any = [0];
  addSurgeriesValue:any;
  surgeriesValues = [];
  chronicOtherConditionList = [];
  chronicOtherConditionValue:any;
  addChronicOtherConditionValue;
  chronicActivate:boolean = true;
  
  constructor(private menu: MenuController, private route:Router) { }

   

  ngOnInit() {   
    console.log(this.height);
    console.log(this.heightCms);
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


  heightMethod(value){
    this.height = value
    this.heightfeet = (this.height/30.48).toFixed(2);
  }

  BmiMethod(){
    var heightInM = (this.height/100)
    var heightPower2 = Math.pow(heightInM, 2);
    this.bmiValue = (this.weight/heightPower2).toFixed(2);
    this.bsaValue = Math.sqrt((this.height * this.weight)/3600).toFixed(2)
  }

  tempatureMethod(value){
    var temp = ((value).toFixed(1)).toString();
      var res = temp.split('.')
      this.tempfahrenhitValue = res[0]
      this.tempfahrenhitDegree = res[1]
}

tempInputMethod(value, part){
  if(part === 'fractional'){
    this.tempfahrenhitDegree = value;
  } else{ 
      this.tempfahrenhitValue = value;
  }
  if(this.tempfahrenhitValue != undefined && this.tempfahrenhitDegree != undefined){
      this.tempatureValue = this.tempfahrenhitValue + "." + this.tempfahrenhitDegree;
  }
  if(this.tempfahrenhitDegree === undefined){
    this.tempatureValue = this.tempfahrenhitValue + "." + 0;
  }
}


pulseOxyMethod(value){
  var temp = ((value).toFixed(1)).toString();
  var res = temp.split('.');
  this.pulseOxyPercentageValue = res[0];
  this.pulseOxyPercentageDegree = res[1];
}

pulseOxyInputMethod(value, part){
if(part === 'fractional'){
  this.pulseOxyPercentageDegree = value;
} else{ 
    this.pulseOxyPercentageValue = value;
}
if(this.pulseOxyPercentageValue != undefined && this.pulseOxyPercentageDegree != undefined){
    this.pulseOxymetryValue = this.pulseOxyPercentageValue + "." + this.pulseOxyPercentageDegree;
}
if(this.pulseOxyPercentageDegree === undefined){
  this.pulseOxymetryValue = this.pulseOxyPercentageValue + "." + 0;
}
}


addCurrentMedication(value){
  this.addMedicine = ''
  if(value != '' && value != undefined && value != null){
    this.currentMedicationList.push(value)
  }
}

removeCurrentMedication(index){
  if(this.currentMedicationList.length > 0 && this.currentMedicationList.length >= (index+1)){
      this.currentMedicationList.splice(index, 1);
  }
}

addSensitiveMedication(value){
  this.addSensitiveMedicineValue =''
  if(value != '' && value != undefined && value != null){
    this.sensitiveMedicationList.push(value)
  }
}

removesensitiveMedication(index){
  if(this.sensitiveMedicationList.length > 0 && this.sensitiveMedicationList.length >= (index+1)){
      this.sensitiveMedicationList.splice(index, 1);
  }
}

addSensitiveFood(value){
  this.addSensitiveFoodValue = ''
  if(value != '' && value != undefined && value != null){
    this.sensitiveFoodList.push(value)
  }
}

removesensitiveFood(index){
  if(this.sensitiveFoodList.length > 0 && this.sensitiveFoodList.length >= (index+1)){
      this.sensitiveFoodList.splice(index, 1);
  }
}

 addInvasiveContraceptive(value){
    this.addInvasiveContraceptiveValue = ''
    if(value != '' && value != undefined && value != null){
      this.invasiveContraceptiveList.push(value)
    }
  }

  removeinvasiveContraceptive(index){
    if(this.invasiveContraceptiveList.length > 0 && this.invasiveContraceptiveList.length >= (index+1)){
        this.invasiveContraceptiveList.splice(index, 1);
    }
  }

  // illness three methods start
      illnessInputs(item, value, condition){
        if(this.illnessValues.length > 0){
              this.illnessValues.forEach((obj,index) =>{
                    if(obj.type[0] === item){
                        this.illnessValues[index]['persistent'][condition] = value;
                    }
              })
        }
    }
    
    
    illnessUploadDoc(item, event){
      var fileData = event.target.files;
      function readAndPreview(file) {
        if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
          let reader = new FileReader();
          reader.readAsDataURL(file);
        }

      }

      if (fileData) {
        [].forEach.call(fileData, readAndPreview);

        if(this.illnessValues.length > 0){
          this.illnessValues.forEach((obj,index) =>{
                if(obj.type[0] === item){
                    this.illnessValues[index]['upload_Doc'].push(fileData);
                }
          })
        }


      }

    }

    addIllnessMethod(value){
      (<HTMLInputElement>document.getElementById('addIllnessValue')).value = ''
      if(value != '' && value != undefined && value != null){
          if(this.activeIllness != this.illnessValues.length || this.activeIllness < this.illnessValues.length){
            this.illnessValues[this.activeIllness].type.push(value);
          } else {
                          var obj = {}
                          obj['type'] = []
                          obj['persistent'] = {}
                          obj['upload_Doc'] = []
                          obj['medication'] = []
                          obj['type'].push(value)
                          this.illnessValues.push(obj);
          }

      }
    }


    addIllnessOtherConditionMethod(value){
      this.addIllnessOtherConditionValue = ''
      if(value != '' && value != undefined && value != null){
        this.illnessOtherConditionList.push(value);
      }

      if(this.illnessOtherConditionList.length <=1){
        this.illnessOtherConditionValue = this.illnessOtherConditionList[0];
      }else if(this.illnessOtherConditionList.length > 1){
        this.illnessOtherConditionValue = this.illnessOtherConditionValue + ', ' + value
      }
    }

    addIllnessMedication(item,value, i){
      (<HTMLInputElement>document.getElementById('addIllnessMedicine'+i)).value = ''
      if(value != '' && value != undefined && value != null){
        this.illnessValues.forEach((obj, index)=>{
          if(obj.type[0] === item){
            this.illnessValues[index]['medication'].push(value);
        }
    })
      }
}

removeIllnessMedication(item, index){
  if(this.illnessValues.length > 0){
    this.illnessValues.forEach((obj, i)=>{
      if(obj.type[0] === item){
        this.illnessValues[i]['medication'].splice(index, 1);
    }
})
}
}

removeIllness(item, index, i){
  if(this.illnessValues.length > 0){
    this.illnessValues[i].type.splice(index, 1)
          if(this.illnessValues[i].type.length === 0){
            this.illnessValues.splice(i, 1);
          }
}
}

 //  chronic form method
addChronicMethod(value){
  (<HTMLInputElement>document.getElementById('addChronicValue')).value = ''
  if(value != '' && value != undefined && value != null){
    if(this.activeChronicIllness != this.chronicValues.length || this.activeChronicIllness < this.chronicValues.length){
      this.chronicValues[this.activeChronicIllness].type.push(value);
    }else {
      var obj = {}
      obj['type'] = []
      obj['persistent'] = {}
      obj['upload_Doc'] = []
      obj['medication'] = [];
      obj['type'].push(value)
      this.chronicValues.push(obj);
    }
  }
}

chronicInputs(item, value, condition){
      if(this.chronicValues.length > 0){
            this.chronicValues.forEach((obj,index) =>{
                  if(obj.type[0] === item){
                      this.chronicValues[index]['persistent'][condition] = value;
                  }
            })
      }
}

addChronicOtherConditionMethod(value){
  this.addChronicOtherConditionValue = ''
  if(value != '' && value != undefined && value != null){
    this.chronicOtherConditionList.push(value);
  }

  if(this.chronicOtherConditionList.length <=1){
    this.chronicOtherConditionValue = this.chronicOtherConditionList[0];
  }else if(this.chronicOtherConditionList.length > 1){
    this.chronicOtherConditionValue = this.chronicOtherConditionValue + ', ' + value
  }
}


      chronicUploadDoc(item, event){
        var fileData = event.target.files;
        function readAndPreview(file) {
          if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
          }

        }

        if (fileData) {
          [].forEach.call(fileData, readAndPreview);

          if(this.chronicValues.length > 0){
            this.chronicValues.forEach((obj,index) =>{
                  if(obj.type[0] === item){
                      this.chronicValues[index]['upload_Doc'].push(fileData);
                  }
            })
          }


        }

      }

chronicIllnessCheckbox(value, index){
  if(value){
    this.activeChronicIllness = index
    this.activeChronicIllnessList.push(index);
  }else{
      var position = this.activeChronicIllnessList.indexOf(index)
      if(position != -1){
        this.activeChronicIllnessList.splice(position, 1);
      }
      if(this.activeChronicIllnessList.length === 0){
        this.activeChronicIllness = this.chronicValues.length;
        this.activeChronicIllnessList.push(this.activeChronicIllness);
      } else{
        this.activeChronicIllness = this.activeChronicIllnessList[this.activeChronicIllnessList.length -1]
      }
    
  }
}

//  illness method for fields
illnessCheckbox(value, index){
  console.log(value);
  console.log(index);
  if(value){
    this.activeIllness = index
    this.activeIllnessList.push(index);
  }else{
      var position = this.activeIllnessList.indexOf(index)
      if(position != -1){
        this.activeIllnessList.splice(position, 1);
      }
      if(this.activeIllnessList.length === 0){
        this.activeIllness = this.illnessValues.length;
        this.activeIllnessList.push(this.activeIllness);
      } else{
        this.activeIllness = this.activeIllnessList[this.activeIllnessList.length -1]
      }
    
  }
}

addSurgeriesMethod(value){
  (<HTMLInputElement>document.getElementById('addSurgeriesValue')).value = ''
  if(value != '' && value != undefined && value != null){
        if(this.activeSurgery != this.surgeriesValues.length || this.activeSurgery < this.surgeriesValues.length){
          this.surgeriesValues[this.activeSurgery].type.push(value);
        } else {
            var obj = {}
            obj['type'] = []
            obj['date'] = '';
            obj['upload_Doc'] = []
            obj['medication'] = []
            obj['type'].push(value);
            this.surgeriesValues.push(obj);
        }
  }
}

addSurgeriesOtherConditionMethod(value){
  this.addSurgeriesOtherConditionValue = ''
  if(value != '' && value != undefined && value != null){
    this.surgeriesOtherConditionList.push(value);
  }

  if(this.surgeriesOtherConditionList.length <=1){
    this.surgeriesOtherConditionValue = this.surgeriesOtherConditionList[0];
  }else if(this.surgeriesOtherConditionList.length > 1){
    this.surgeriesOtherConditionValue = this.surgeriesOtherConditionValue + ', ' + value
  }
}

removeSurgeries(item, index, i){
      if(this.surgeriesValues.length > 0){
        this.surgeriesValues[i].type.splice(index, 1)
              if(this.surgeriesValues[i].type.length === 0){
                this.surgeriesValues.splice(i, 1);
              }
}
}


removeSurgeriesMedication(item, index){
        if(this.surgeriesValues.length > 0){
                this.surgeriesValues.forEach((obj, i)=>{
                  if(obj.type[0] === item){
                    this.surgeriesValues[i]['medication'].splice(index, 1);
                }
            })
        }
}

surgiesUploadDoc(item, event){
  var fileData = event.target.files;
  function readAndPreview(file) {
    if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
    }

  }

  if (fileData) {
    [].forEach.call(fileData, readAndPreview);

    if(this.surgeriesValues.length > 0){
      this.surgeriesValues.forEach((obj,index) =>{
            if(obj.type[0] === item){
                this.surgeriesValues[index]['upload_Doc'].push(fileData);
            }
      })
    }


  }

    console.log(fileData)
    console.log(this.surgeriesValues);

}

addSurgeriesMedication(item, value,i){
  (<HTMLInputElement>document.getElementById('addSurgeriesMedicine'+i)).value = ''
  if(value != '' && value != undefined && value != null){
      this.surgeriesValues.forEach((obj, index)=>{
            if(obj.type[0] === item){
              this.surgeriesValues[index]['medication'].push(value);
          }
      })
  }

}

removeChronic(item, index, i){
  if(this.chronicValues.length > 0){
    this.chronicValues[i].type.splice(index, 1)
          if(this.chronicValues[i].type.length === 0){
            this.chronicValues.splice(i, 1);
          }
    }
    }


    removeChronicMedication(item, index){
      if(this.chronicValues.length > 0){
        this.chronicValues.forEach((obj, i)=>{
          if(obj.type[0] === item){
            this.chronicValues[i]['medication'].splice(index, 1);
        }
    })
}
}

addChronicMedication(item,value, i){
  (<HTMLInputElement>document.getElementById('addChronicMedicine'+i)).value = ''
  if(value != '' && value != undefined && value != null){
    this.chronicValues.forEach((obj, index)=>{
      if(obj.type[0] === item){
        this.chronicValues[index]['medication'].push(value);
    }
})
  }
}


}

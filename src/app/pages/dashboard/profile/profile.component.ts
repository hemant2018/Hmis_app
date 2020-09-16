import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import csc from 'country-state-city'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name:any;
  uhid:any;
  uhidValidation:boolean;
  dob:any;
  mobileNO:any;
  secondaryNo:any;
  genderList = ['Male', 'Female', 'Other'];
  gender:any;
  emailId:any;
  address:any;
  countryList:any;
  countryCode:any;
  country:any;
  stateList:any;
  state:any;
  district:any;
  pinCode:any;
  fatherName:any;
  motherName:any;
  maritalStatus:any;
  spouseName:any;
  spouseUhid:any;
  nextKinName:any;
  relationship:any;
  addressSame:boolean = false;
  kinAddress:any;
  medicoLegal:boolean = false;
  referralActivate:boolean = true;
  hospitalName:any;
  hospitalRegistryId:any;
  treatment:any;
  payingActivate:boolean = true;
  patientType:any;
  beneficiaryType1:any;
  beneficaryType1Item:any;
  beneficiaryType2:any;
  beneficaryType2Item:any;
  beneficiaryType3:any;
  beneficaryType3Item:any;
  govIdActivate:boolean = true;
  govId1:any;
  govId1Item:any;
  govId2:any;
  govId2Item:any;
  govId3:any;
  govId3Item:any;

  // govid type
  aadharNO:any;
  aadharPhoneno:any;
  drivingLicenseNo:any;
  panNo:any;
  stateGovId:any;

  photoActivate:boolean = true;
  photoItem:any;
  profileImageUrl:any;
  constructor(private menu: MenuController, private route:Router) { }

  ngOnInit() {
    this.countryList = csc.getAllCountries();
  }


  closeSidenavBar(){
    this.menu.close();
  }

  openSidenavBar(){
    this.menu.open();
  }

  navigateProfile(){
    this.route.navigate(['/sign-in/dashboard/profile'])
  }

  logout(){
    this.route.navigate(['/sign-in'])
  }


  createUhid(){
    this.uhidValidation = false
   var today = new Date(); 
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    month = month + 1;
    var currentMonth = ''
    var currentDay = ''
    if(month < 10){
      currentMonth = '0'+ month;
    } else{
      currentMonth = month.toString()
    }
    if(day < 10){
      currentDay = '0'+ day;
    }else{
      currentDay = day.toString();
    }
    var sequenceNO = currentDay + currentMonth + year
    if(this.name != undefined){
      this.uhid = 'UNDREV-' + sequenceNO + "-" + this.name.substring(0,3);
    } else{
      this.uhidValidation = true
    }
    
  }

  sameAddressMethod(){
    if(this.addressSame){
        this.kinAddress = this.address + this.country + this.state + this.district + this.pinCode;
    }
    else{
      this.kinAddress = '';
    }
  }

  countryChange(value) {
    this.stateList = csc.getStatesOfCountry(value);
    this.state = '';
    this.countryList.forEach(e => {
      if (e.id === value) {
        this.country = e.name
      }

    })
  }

  beneficaryType1Doc(event){
    this.beneficaryType1Item = event.target.files;
    function readAndPreview(file) {
      if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
      }
  
    }
  
    if (this.beneficaryType1Item) {
      [].forEach.call(this.beneficaryType1Item, readAndPreview);
    }
  }   


  beneficaryType2Doc(event){
    this.beneficaryType2Item = event.target.files;
    function readAndPreview(file) {
      if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
      }
  
    }
  
    if (this.beneficaryType2Item) {
      [].forEach.call(this.beneficaryType2Item, readAndPreview);
    }
  }

  beneficaryType3Doc(event){
    this.beneficaryType3Item = event.target.files;
    function readAndPreview(file) {
      if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
      }
  
    }
  
    if (this.beneficaryType3Item) {
      [].forEach.call(this.beneficaryType3Item, readAndPreview);
    }
  }

  govId1Doc(event){
    this.govId1Item = event.target.files;
    function readAndPreview(file) {
      if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
      }
  
    }
  
    if (this.govId1Item) {
      [].forEach.call(this.govId1Item, readAndPreview);
    }
  }

  govId2Doc(event){
    this.govId2Item = event.target.files;
    function readAndPreview(file) {
      if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
      }
  
    }
  
    if (this.govId2Item) {
      [].forEach.call(this.govId2Item, readAndPreview);
    }
  }

  govId3Doc(event){
    this.govId3Item = event.target.files;
    function readAndPreview(file) {
      if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
      }
  
    }
  
    if (this.govId3Item) {
      [].forEach.call(this.govId3Item, readAndPreview);
    }
  }

  uploadPhoto(event) {
    let preview = document.querySelector('#preview');
    this.photoItem = event.target.files;
    var that = this
    function readAndPreview(file) {
  
      // Make sure `file.name` matches our extensions criteria
      if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
        let reader = new FileReader();
  
        reader.addEventListener("load", function () {
          // var image :any= new Image();
          // 
          // image.title = file.name;
          let image: any = document.getElementById('userImage');
  
          image.height = 100;
          image.src = this.result;
          that.profileImageUrl = this.result
  
          preview.appendChild(image);
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (this.photoItem) {
      [].forEach.call(this.photoItem, readAndPreview);
    }
  
  }

}

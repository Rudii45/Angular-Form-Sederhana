import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  toppings = new FormControl('');
  toppingList: string[] = ['INDONESIA', 'AMERIKA', 'RUSIA', 'INDIA', 'KOREA', 'ARAB'];

 constructor(private formBuilder:FormBuilder){
  this.toppings.valueChanges.subscribe(selectedValue => {
    this.profileForm.patchValue({
      Negara: selectedValue
    });
  });
 }

 profileForm = this.formBuilder.group({
   Nama:[''],
   Email:[''],
   Alamat:[''],
   Negara:[''],
   Nomor:[''],
   Tgl:[''],
   Gender:['']
 });



 saveForm(){
   console.log('Form data is ', this.profileForm.value);

 }

}

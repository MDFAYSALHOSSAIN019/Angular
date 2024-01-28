import { Component } from '@angular/core';
import { 
  Firestore,
  addDoc, 
  collection,
  collectionData,
  deleteDoc,
  doc, 
  updateDoc,
  getDoc
  } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { getFirestore } from 'firebase/firestore/lite'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {

  title = 'resturantapp';


  userData !: Observable<any>;

  selectedUserId: string | null = null; // To store the selected user ID for updating
  updateForm: any = {};

  constructor(private firestore: Firestore){
  this.getData();
  }

  addData(f : any){
   const collectionInstance= collection(this.firestore ,'users');
   addDoc(collectionInstance, f.value).then(()=>{
    console.log('Data Saved');

   })
   .catch((err)=>{
    console.log(err);
   })
  }
  
  getData(){
    const collectionInstance=collection(this.firestore,'users');
    collectionData(collectionInstance,{idField:'id'}).subscribe(val=>{
      console.log(val);
    })
    this.userData=collectionData(collectionInstance,{idField:'id'});
  }

  updateData(id : string){
    const docInstance=doc(this.firestore,'users',id);
    const updateData={
      name:'updateName'
    }
    updateDoc(docInstance,updateData).then(()=>{
      console.log('Data Update');
    })
    .catch((err)=>{
     console.log(err);
    })
  }

deleteData(id:string){
const docInstance=doc(this.firestore,'users',id);
deleteDoc(docInstance).then(()=>{
  console.log('Data delete')
})
.catch((err)=>{
  console.log(err);
})
}






saveUpdatedData() {
    if (this.selectedUserId) {
      const docInstance = doc(this.firestore, 'users', this.selectedUserId);
      updateDoc(docInstance, this.updateForm).then(() => {
        console.log('Data Updated');
        // Reset the form and selected user ID after successful update
        this.updateForm = {};
        this.selectedUserId = null;
        // this.route.navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}

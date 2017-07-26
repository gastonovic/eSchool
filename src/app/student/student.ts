/**
 * Created by gaston on 18/07/17.
 */

export class Student {

  id : number ;
  cin : string ;
  firstName : string ;
  lastName : string ;
  birthDate : string;
  address : string ;
  email : string;
  sex : boolean;
  phone : string;
  constructor(data : any) {
    this.id = data.idetudiant;
    this.cin = data.cin ;
    this.firstName = data.prenom;
    this.lastName = data.nom;
    this.birthDate = data.dateNaissance;
    this.address= data.adresse;
    this.email=data.email;
    this.sex=data.sexe;
    this.phone=data.telephone;
  }
}

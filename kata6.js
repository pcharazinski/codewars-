class Person {
    
    constructor ( firstName='John',lastName='Doe', age=0, gender='Male' ){
      this.firstName=firstName;
      this.lastName=lastName;
      this.age=age;
      this.gender=gender;
      
    }
    sayFullName(){
      return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(race="green"){
      return `Welcome to Planet Earth ${race}`
    }
  }
  const Janek=new Person();
  console.log(Janek);
  console.log (Person.greetExtraTerrestrials())

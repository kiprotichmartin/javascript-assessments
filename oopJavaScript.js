// cashier mixin object
///////////////////////////
let cashierMixin = {
  collectCash() {
    let cash = 1000;
    console.log("Your cash is: " + cash);
    // return this;
  },
};

// pharmasist mixin object
///////////////////////////
let pharmasistMixin = {
  writePrescription() {
    let prescription = "Panadol";
    console.log("Your prescription is: " + prescription);
    // return this;
  }
};

// manager mixin object
///////////////////////////
let managerMixin = {
  deleteUser(userToDelete) {
    console.log(userToDelete.name + " is deleted");
  },
  beCashierAndPharma() {
    console.log("You are both a cashier and pharmasist");
  },
};


// class users
///////////////////////////
// class Users {
  // constructor(name) {
  //   this.name = name;
  // }
//   printName() {
//     console.log(this.name);
//   }
// }

// class cashier extends class users
///////////////////////////
class Cashier {
  constructor(name) {
    this.name = name;
  }
}

// cashier's mixin methods are copied to class cashier
// Object.assign(Cashier.prototype, cashierMixin);

// class pharmasist extends class cashier
///////////////////////////
class Pharmasist {
  constructor(name) {
    this.name = name;
  }
}

// pharmasist's & cashier's mixin methods are copied to class pharmasist
// Object.assign(Pharmasist.prototype, pharmasistMixin, cashierMixin);

// class manager extends class pharmasist
///////////////////////////
class Manager {
  constructor(name) {
    this.name = name;
  }
}

// manager's, cashier's & pharmasist's mixin methods are copied to class manager
// Object.assign(Manager.prototype, managerMixin, cashierMixin, pharmasistMixin);

// create new users
let cashier = new Cashier("Mark Cashier");
Object.assign(cashier, cashierMixin);

let pharmasist = new Pharmasist("Mercy Pharmasist");
Object.assign(pharmasist, pharmasistMixin, cashierMixin);

let manager = new Manager("Martin Manager");
Object.assign(manager, managerMixin, cashierMixin, pharmasistMixin);


console.log("Cashier's response:");

cashier.collectCash();

console.log(" ");
console.log("Pharmasist's response");

pharmasist.collectCash();
pharmasist.writePrescription();

console.log(" ");
console.log("Manager's response");

manager.collectCash();
manager.writePrescription();
manager.deleteUser(cashier);
manager.deleteUser(pharmasist);
manager.deleteUser(manager);
manager.beCashierAndPharma();
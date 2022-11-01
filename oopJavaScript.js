// cashier mixin object
///////////////////////////
let cashierMixin = {
  collectCash() {
    let cash = 1000;
    console.log("Your cash is: " + cash);
  },
};

// pharmasist mixin object
///////////////////////////
let pharmasistMixin = {
  writePrescription() {
    let prescription = "Panadol";
    console.log("Your prescription is: " + prescription);
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
class Users {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(this.name);
  }
}

// class cashier extends class users
///////////////////////////
class Cashier extends Users {
  // 
}

// cashier's mixin methods are copied to class cashier
Object.assign(Cashier.prototype, cashierMixin);

// class pharmasist extends class cashier
///////////////////////////
class Pharmasist extends Cashier {
  // 
}

// pharmasist's & cashier's mixin methods are copied to class pharmasist
Object.assign(Pharmasist.prototype, pharmasistMixin, cashierMixin);

// class manager extends class pharmasist
///////////////////////////
class Manager extends Pharmasist {
  //
}

// manager's, cashier's & pharmasist's mixin methods are copied to class manager
Object.assign(Manager.prototype, managerMixin, cashierMixin, pharmasistMixin);

// create new users
let pharmasist = new Pharmasist("Jane Pharma");
let cashier = new Cashier("Mark Cashier");
let manager = new Manager("Mercy Manager");

manager.collectCash();

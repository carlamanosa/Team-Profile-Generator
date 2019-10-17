class Employee {
    constructor(name,id,title){
        this.name = name;
        this.id = id;
        this.title = title;
    }

getName() {
    console.log(this.name);
}

getId() {
    console.log(id);
}

getEmail() {
    console.log()
}

getRole() {
    return "Employee";
}
}

module.exports = Employee;

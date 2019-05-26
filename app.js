class Person {
    constructor(name, email, time) {
        this.name = name;
        this.email = email;
        this.time = time;
    }
}

// UI class has no construcors
class UI {
    // Define add person
    addPersonToList(person) {
        const personList = document.querySelector('#person-list');
        console.log(personList);

        // Create new row
        const newRow = document.createElement('tr');

        // Add row HTML
        newRow.innerHTML = `
        <td>${person.name}</td>
        <td>${person.email}</td>
        <td>${person.time}</td>
        <td><a href="#" class="delete">X<a></td>
        `
        // Append row to list
        personList.appendChild(newRow);
    }  
    // Define show alert
    showAlert(message, className) {
        const constainer = document.querySelector('.container');
        const newDiv = document.createElement
    }
}

// Event listener add person
document.getElementById('person-form').addEventListener('submit', function(e){
    e.preventDefault();

    // Assign values
    const name = document.querySelector('#name').value,
          email = document.querySelector('#email').value,
          time = document.querySelector('#time').value;
    
    // Instaitate person
    const person = new Person(name, email, time);
    
    // Instatiate UI Instance
    const ui = new UI();

    // Validate 
    if(name === '' || email === '' || time === '') {
        // Show error alert
        console.log("fill in all info");
    } else {
        // show success alert
        console.log("you person has bee added");

        // Add person
        ui.addPersonToList(person);

    }
});



// pop up modal

document.getElementById('button').addEventListener('click',function(){
    event.preventDefault();
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',function(){
    event.preventDefault();
    document.querySelector('.bg-modal').style.display = 'none';

    // clear fields
    UI.clearFields();
});

// contact class: represent a contact
class Contact{
    constructor(first,last,phone,work,home,email,workmail){
        this.first = first;
        this.last = last;
        this.phone = phone;
        this.work = work;
        this.home = home;
        this.email = email;
        this.workmail = workmail;
        CID = 0;
    }
}

// UI class : handle ui
class UI{
    static displayBooks(){

        const contacts = Store.getContacts();

        contacts.forEach((contact)=> UI.addContactToList(contact));
    }

    static addContactToList(contact){
        const list = document.querySelector('#contact-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${contact.first}</td>
            <td>${contact.last}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td><a href="#" class="edit">X</a></td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteContact(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
            // Remove alert
            UI.showAlert('The contact has been removed.','success');
        }
    }

    static showAlert(message, className){
        if(className == 'danger')
        {
            const div = document.createElement('div');
            div.className = `${className}`;
            div.appendChild(document.createTextNode(message));
            const container = document.querySelector('#contact-form');
            const modal = document.querySelector('.msg');
            container.insertBefore(div, modal);
            setTimeout(() => document.querySelector('.danger').remove(),3000);
        } else {
            const div = document.createElement('div');
            div.className = `${className}`;
            div.appendChild(document.createTextNode(message));
            const container = document.querySelector('.container');
            const modal = document.querySelector('.tableBox');
            container.insertBefore(div, modal);
            setTimeout(() => document.querySelector('.success').remove(),4000);
        }    
    }

    static clearFields(){
        document.querySelector('#first').value='';
        document.querySelector('#last').value='';
        document.querySelector('#phone').value='';
        document.querySelector('#work').value='';
        document.querySelector('#home').value='';
        document.querySelector('#email').value='';
        document.querySelector('#workmail').value='';
    }
}

// Store class
class Store {
    static getContacts() {
        let contacts;
        if(localStorage.getItem('contacts') === null){
            contacts =[];
        } else {
            contacts = JSON.parse(localStorage.getItem('contacts'));
        }

        return contacts;
    }

    static addContact(contact){
        const contacts = Store.getContacts();

        contacts.push(contact);

        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    static removeContact(email){
        const contacts = Store.getContacts();

        contacts.forEach((contact, index) => {
            if(contact.email === email) {
                contacts.splice(index, 1);
            }
        });

        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

}


// Event: Display Contacts
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event: Add Contact
document.querySelector('#contact-form').addEventListener('submit',(e)=>
{
    // prevent actual submit
    e.preventDefault;

    // get form values
    const first = document.querySelector('#first').value;
    const last = document.querySelector('#last').value;
    const phone = document.querySelector('#phone').value;
    const work = document.querySelector('#work').value;
    const home = document.querySelector('#home').value;
    const email = document.querySelector('#email').value;
    const workmail = document.querySelector('#workmail').value;

    // Validate
    if(first =='' || last == '' || phone == '' || email ==''){
        UI.showAlert('One or more required field is missing!', 'danger');

        // prevent jumping to the top
        event.preventDefault();
    } else {
        // instantiate contact
        const contact = new Contact(first, last, phone, work, home, email, workmail);
        //console.log(contact); // just checking if it works

        // Add Contact to UI
        UI.addContactToList(contact);
        // Add book to store
        Store.addContact(contact);

        // Clear field
        UI.clearFields();

        // Hide the pop up
        document.querySelector('.bg-modal').style.display = 'none';
        // prevent the jumping
        event.preventDefault();
        // Alert Success
        UI.showAlert('New contact has been added.', 'success');
    }
});

// Event: Remove Contact
document.querySelector('#contact-list').addEventListener('click',(e)=>{
    
    // just to check what got clicked
    //console.log(e.target);

    // Remove contact from UI
    UI.deleteContact(e.target);

    // Remove from Store
    Store.removeContact(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

});

// Event: View Contact

// Event: Edit Contact

// Event: Search

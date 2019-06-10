 
// // contact class: represent a contact
// class Contact{
//     constructor(first,last,phone,work,home,email,workmail){
        
//         this.first = first;
//         this.last = last;
//         this.phone = phone;
//         this.work = work;
//         this.home = home;
//         this.email = email;
//         this.workmail = workmail;
//     }
// }

// // UI class : handle ui
// class UI{

//     // make table
//     static displayBooks(){
//         const contacts = Store.getContacts();
//         contacts.forEach((contact)=> UI.addContactToList(contact));
//     }

//     // add contact to table
//     static addContactToList(contact){
//         const list = document.querySelector('#contact-list');
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${contact.first}</td>
//             <td>${contact.last}</td>
//             <td>${contact.phone}</td>
//             <td>${contact.email}</td>
//             <td><a href="#" class="view">O</a></td>
//             <td><a href="#" class="delete">X</a></td>
//         `;

//         list.appendChild(row);
//     }

//     // delete from table
//     static deleteContact(el){
//         event.preventDefault();
//         el.parentElement.parentElement.remove();
//     }

//     // alert message
//     static showAlert(message, className){
//         if(className == 'danger')
//         {
//             const div = document.createElement('div');
//             div.className = `${className}`;
//             div.appendChild(document.createTextNode(message));
//             const container = document.querySelector('#contact-form');
//             const modal = document.querySelector('.msg');
//             container.insertBefore(div, modal);
//             setTimeout(() => document.querySelector('.danger').remove(),3000);
//         } else {
//             const div = document.createElement('div');
//             div.className = `${className}`;
//             div.appendChild(document.createTextNode(message));
//             const container = document.querySelector('.container');
//             const modal = document.querySelector('.tableBox');
//             container.insertBefore(div, modal);
//             setTimeout(() => document.querySelector('.success').remove(),4000);
//         }    
//     }

//     // clear the input
//     static clearFields(){
//         document.querySelector('#first').value='';
//         document.querySelector('#last').value='';
//         document.querySelector('#phone').value='';
//         document.querySelector('#work').value='';
//         document.querySelector('#home').value='';
//         document.querySelector('#email').value='';
//         document.querySelector('#workmail').value='';
//     }

//     static viewContact(contact){
//         event.preventDefault();
//         document.querySelector('.view-bg').style.display = 'flex';

//         //let info = new Contact(first, last, phone,work,home,email,workmail);
//         //let info = Store.search(el);
//         let info = contact;
//         //console.log(info);
//         document.getElementById("view-first").innerHTML = info.first;
//         document.getElementById("view-last").innerHTML = info.last;
//         document.getElementById("view-phone").innerHTML = info.phone;
//         document.getElementById("view-email").innerHTML = info.email;
        
//         if(info.work == '')
//             document.getElementById("view-work").innerHTML = "-";
//         else
//             document.getElementById("view-work").innerHTML = info.work;

//         if(info.home == '')
//             document.getElementById("view-home").innerHTML = "-";
//         else
//             document.getElementById("view-home").innerHTML = info.home;

//         if(info.workmail == '')
//             document.getElementById("view-workmail").innerHTML = "-";
//         else
//             document.getElementById("view-workmail").innerHTML = info.workmail;


//         // Event: Edit Contact
//         document.querySelector('.edit').addEventListener('click', (e1) => {
//             event.preventDefault();
//             // hide some buttons
//             document.querySelector('.view-close').style.display = 'none';
//             document.querySelector('.view-back').style.display = 'none';
//             document.querySelector('.edit').style.display = 'none';
//             document.querySelector('.view-content').style.backgroundColor = 'grey';
//             document.querySelector('.view-save').style.display = 'flex';
//             document.querySelector('.view-cancel').style.display = 'flex';

//             // make text editable
//            document.querySelector('#view-first').contentEditable = 'true';
//            document.querySelector('#view-last').contentEditable = 'true';
//            document.querySelector('#view-phone').contentEditable = 'true';
//            document.querySelector('#view-work').contentEditable = 'true';
//            document.querySelector('#view-home').contentEditable = 'true';
//            document.querySelector('#view-email').contentEditable = 'true';
//            document.querySelector('#view-workmail').contentEditable = 'true';
           

//             // cancel
//             document.querySelector('.view-cancel').addEventListener('click',(e2) => {
//                 document.querySelector('.view-close').style.display = '';
//                 document.querySelector('.view-back').style.display = '';
//                 document.querySelector('.edit').style.display = '';
//                 document.querySelector('.view-content').style.backgroundColor = 'white';
//                 document.querySelector('.view-save').style.display = 'none';
//                 document.querySelector('.view-cancel').style.display = 'none';
                
//                 console.log(info);
//                 document.querySelector('#view-first').contentEditable = 'false';
//                 document.querySelector('#view-last').contentEditable = 'false';
//                 document.querySelector('#view-phone').contentEditable = 'false';
//                 document.querySelector('#view-work').contentEditable = 'false';
//                 document.querySelector('#view-home').contentEditable = 'false';
//                 document.querySelector('#view-email').contentEditable = 'false';
//                 document.querySelector('#view-workmail').contentEditable = 'false';
//                 //UI.viewContact(info);
//                 document.getElementById("view-first").innerHTML = info.first;
//                 document.getElementById("view-last").innerHTML = info.last;
//                 document.getElementById("view-phone").innerHTML = info.phone;
//                 document.getElementById("view-email").innerHTML = info.email;
                
//                 if(info.work == '')
//                     document.getElementById("view-work").innerHTML = "-";
//                 else
//                     document.getElementById("view-work").innerHTML = info.work;
        
//                 if(info.home == '')
//                     document.getElementById("view-home").innerHTML = "-";
//                 else
//                     document.getElementById("view-home").innerHTML = info.home;
        
//                 if(info.workmail == '')
//                     document.getElementById("view-workmail").innerHTML = "-";
//                 else
//                     document.getElementById("view-workmail").innerHTML = info.workmail;

//             });

//             // save
//             document.querySelector('.view-save').addEventListener('click',(e3) => {

//                 document.querySelector('.view-close').style.display = '';
//                 document.querySelector('.view-back').style.display = '';
//                 document.querySelector('.edit').style.display = '';
//                 document.querySelector('.view-content').style.backgroundColor = 'white';
//                 document.querySelector('.view-save').style.display = 'none';
//                 document.querySelector('.view-cancel').style.display = 'none';

//                 document.querySelector('#view-first').contentEditable = 'false';
//                 document.querySelector('#view-last').contentEditable = 'false';
//                 document.querySelector('#view-phone').contentEditable = 'false';
//                 document.querySelector('#view-work').contentEditable = 'false';
//                 document.querySelector('#view-home').contentEditable = 'false';
//                 document.querySelector('#view-email').contentEditable = 'false';
//                 document.querySelector('#view-workmail').contentEditable = 'false';
                
//                 let first = document.querySelector('#view-first').textContent;
//                 let last = document.querySelector('#view-last').textContent;
//                 let phone = document.querySelector('#view-phone').textContent;
//                 let work = document.querySelector('#view-work').textContent;
//                 let home = document.querySelector('#view-home').textContent;
//                 let email = document.querySelector('#view-email').textContent;
//                 let workmail = document.querySelector('#view-workmail').textContent;
//                 let newcontact = new Contact(first, last, phone, work, home, email, workmail);
//                 //let oldcontact = info;
//                 Store.editContact(info, newcontact);
//                 info.first = first;
//                 info.last = last;
//                 info.phone = phone;
//                 info.work = work;
//                 info.home = home;
//                 info.email = email;
//                 info.workmail = workmail;

//                 console.log(info);
//                 document.getElementById("view-first").innerHTML = info.first;
//                 document.getElementById("view-last").innerHTML = info.last;
//                 document.getElementById("view-phone").innerHTML = info.phone;
//                 document.getElementById("view-email").innerHTML = info.email;
                
//                 if(info.work == '')
//                     document.getElementById("view-work").innerHTML = "-";
//                 else
//                     document.getElementById("view-work").innerHTML = info.work;
        
//                 if(info.home == '')
//                     document.getElementById("view-home").innerHTML = "-";
//                 else
//                     document.getElementById("view-home").innerHTML = info.home;
        
//                 if(info.workmail == '')
//                     document.getElementById("view-workmail").innerHTML = "-";
//                 else
//                     document.getElementById("view-workmail").innerHTML = info.workmail;

//                 // only refresh if save changes cause problem
//                 document.querySelector('.view-close').addEventListener('click',function(){
//                     location.reload();
//                 });
//                 document.querySelector('.view-back').addEventListener('click',function(){
//                     location.reload();
                    
//                 });
//             });
//         });
//     }
// }

// // Store class
// class Store {
//     static getContacts() {
//         // let contacts;
//         // if(localStorage.getItem('contacts') === null){
//         //     contacts =[];
//         // } else {
//         //     contacts = JSON.parse(localStorage.getItem('contacts'));
//         // }

//         // return contacts;

//         var xhr = new XMLHttpRequest();
//         xhr.open('GET',  'ContactsPage.php', true);
//         xhr.onload = function(){
//             if(this.status == 200){
//                 var info = JSON.parse(this.responseText);
//                 console.log(info);
//             }
//             }
        
//             xhr.send();

//     }

//     static addContact(contact){
//         const contacts = Store.getContacts();

//         contacts.push(contact);

//         localStorage.setItem('contacts', JSON.stringify(contacts));
//     }

//     // based on email for now
//     static removeContact(email){
//         const contacts = Store.getContacts();

//         contacts.forEach((contact, index) => {
//             if(contact.email === email) {
//                 contacts.splice(index, 1);
//             }
//         });

//         localStorage.setItem('contacts', JSON.stringify(contacts));
//     }

//     // based on email for now
//     static search(email){
//         const contacts = Store.getContacts();
//         let target;
//         contacts.forEach((contact) => {
//             if(contact.email === email) {
//                 target = contact;
//             }
//         });
//         return target;
//     }

//     static editContact(oldcontact, newcontact){
//         let contacts = Store.getContacts();
//         contacts.forEach((contact) => {
//             if(contact.email === oldcontact.email){
//                 contact.first = newcontact.first;
//                 contact.last = newcontact.last;
//                 contact.phone = newcontact.phone;
//                 contact.work = newcontact.work;
//                 contact.home = newcontact.home;
//                 contact.email = newcontact.email;
//                 contact.workmail = newcontact.workmail;
//             }
//         });
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
// }


// // Event: Display Contacts
// document.addEventListener('DOMContentLoaded', UI.displayBooks);


// // Event: Add Contact
// document.querySelector('#contact-form').addEventListener('submit',(e)=>
// {
//     // prevent actual submit
//     e.preventDefault;

//     // get form values
//     let first = document.querySelector('#first').value;
//     let last = document.querySelector('#last').value;
//     let phone = document.querySelector('#phone').value;
//     let work = document.querySelector('#work').value;
//     let home = document.querySelector('#home').value;
//     let email = document.querySelector('#email').value;
//     let workmail = document.querySelector('#workmail').value;

//     // Validate - only required field if empty
//     if(first =='' || last == '' || phone == '' || email ==''){
//         UI.showAlert('One or more required field is missing!', 'danger');

//         // prevent jumping to the top
//         event.preventDefault();
//     } else {
//         // instantiate contact
//         const contact = new Contact(first, last, phone, work, home, email, workmail);
//         //console.log(contact); // just checking if it works

//         // Add Contact to UI
//         UI.addContactToList(contact);
//         // Add book to store
//         Store.addContact(contact);

//         // Clear field
//         UI.clearFields();

//         // Hide the pop up
//         document.querySelector('.bg-modal').style.display = 'none';
//         // prevent the jumping
//         event.preventDefault();
//         // Alert Success
//         UI.showAlert('New contact has been added.', 'success');
//     }
// });

// document.getElementById('button').addEventListener('click',function(){
//     event.preventDefault();
//     document.querySelector('.bg-modal').style.display = 'flex';
// });

// document.querySelector('.close').addEventListener('click',function(){
//     event.preventDefault();
//     document.querySelector('.bg-modal').style.display = 'none';

//     // clear fields
//     UI.clearFields();
// });

// // Event: Remove Contact
// document.querySelector('#contact-list').addEventListener('click',(e)=>{
    
//     // just to check what got clicked
//     //console.log(e.target);
   
//     if(e.target.classList.contains('delete')){

//         // Remove contact from UI
//         UI.deleteContact(e.target);
//          // UI Remove alert
//          UI.showAlert('The contact has been removed.','success');

//         // Remove from Store - based on email for now
//         Store.removeContact(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
//     }
// });

// // Event: View Contact
// document.querySelector('#contact-list').addEventListener('click',(e)=>{

//     //console.log(e.target);
//     // View contact from UI - based on email for now
//     if(e.target.classList.contains('view'))
//         UI.viewContact(Store.search(e.target.parentElement.previousElementSibling.textContent));

// });

// document.querySelector('.view-close').addEventListener('click',function(){
//     event.preventDefault();
//     document.querySelector('.view-bg').style.display = 'none';
//     //location.reload();
//     //document.location.reload()
// });

// document.querySelector('.view-back').addEventListener('click',function(){
//     event.preventDefault();
//     document.querySelector('.view-bg').style.display = 'none';
//     //location.reload();
//     //document.location.reload()
// });

// // Event: Search
// let filterInput = document.getElementById('searchInput');

// filterInput.addEventListener('keyup',filterNames);

// function filterNames(){
//     let filterValue = document.getElementById('searchInput').value.toUpperCase();
//     console.log(filterValue);

//     let tableBoday = document.getElementById('contact-list');
//     console.log(tableBoday);
// }


//var sessionValue = "<?php echo $_SESSION['userid']; ?>";
var formData = new FormData();
formData.append('userid', '1');

var f = document.createElement("form");
var userid = document.createElement("input");
userid.type ="text";
userid.name = "userid";
userid.value = 1;
console.log(userid);
console.log(userid.value);

f.appendChild(userid);

document.getElementById('button').addEventListener('click', contactsPage);

function contactsPage(e){
    e.preventDefault();

    //document.getElementById('main-header').style.backgroundColor = 'red';
   // console.log(2);

    var param = "userid=1";

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/API/ContactPage.php', true);
    xhr.setRequestHeader("Content-type", "application/application/xhtml+xml");
    
    
    xhr.onload = function(){
    if(this.status == 200){
    }
    
    console.log(userid);
    console.log(f);
    }
    
    xhr.send(f);
}

var job = "<?php echo json_encode($rows) ?>";
console.log(job);

 // sending the input form to the server and receive the added contact json to make a new row
 function   addContact(first,last,phone,work,home,email,workmail){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/API/ContactAdd.php', false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function(){
        if(this.status == 200){

            // get added contact information
            const currow = (JSON.parse(xhr.responseText));

            // create new row with json data
            let list = document.querySelector('#contact-list');
            let row = document.createElement('tr');
            row.id = `${currow[0]['CID']}`;
            row.innerHTML = `
            <td class="tfirst">${currow[0]['First Name']}</td>
            <td class="tlast">${currow[0]['Last Name']}</td>
            <td class="tphone">${currow[0]['Cell Phone']}</td>
            <td class="temail">${currow[0]['Personal Email']}</td>
            <td><a href="#" class="view">O</a></td>
            <td><a href="#" class="edit">=</a></td>
            <td><a href="#" class="delete">X</a></td>
            `; 

            list.appendChild(row);                
        }
        else{
            
        }
    }
    
    //input form
    const inputform= `First=${first.value}&Last=${last.value}&HomePhone=${home.value}
                &CellPhone=${phone.value}&WorkPhone=${work.value}
                &HomeEmail=${email.value}&WorkEmail=${workmail.value}
    `;


    xhr.send(inputform);
}

// delete contact from the server
function   deleteContact(rowid){
var xhr = new XMLHttpRequest();
xhr.open('POST', '/API/ContactDelete.php', false);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onload = function(){
    if(this.status == 200){

    }
}
const inputform= `CID=${rowid.getAttribute('id')}`;
xhr.send(inputform);
}

// view page - get contact needed and fill out the view and edit page
function   viewContact(rowid){
var xhr = new XMLHttpRequest();

xhr.open('POST', '/API/Contact.php', false);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onload = function(){
    if(this.status == 200){
        var contactslist = JSON.parse(xhr.responseText);
        
        if(contactslist[0]['First Name'] == '')
            document.getElementById("view-first").innerHTML = '-';
        else{
            document.getElementById("view-first").innerHTML = contactslist[0]['First Name'];
            document.getElementById("edit-first").value = contactslist[0]['First Name'];
        }
        if(contactslist[0]['Last Name'] == '')
            document.getElementById("view-last").innerHTML = '-';
        else{
            document.getElementById("view-last").innerHTML = contactslist[0]['Last Name'];
            document.getElementById("edit-last").value = contactslist[0]['Last Name'];
        }
        if(contactslist[0]['Cell Phone'] == '')
            document.getElementById("view-phone").innerHTML = '-';
        else{
            document.getElementById("view-phone").innerHTML = contactslist[0]['Cell Phone'];
            document.getElementById("edit-phone").value = contactslist[0]['Cell Phone'];
        }
        if(contactslist[0]['Work Phone'] == 0)
            document.getElementById("view-work").innerHTML = '-';
        else{
            document.getElementById("view-work").innerHTML = contactslist[0]['Work Phone'];
            document.getElementById("edit-work").value = contactslist[0]['Work Phone'];
        }
        if(contactslist[0]['Home Phone'] == 0)
            document.getElementById("view-home").innerHTML = '-';
        else{
            document.getElementById("view-home").innerHTML = contactslist[0]['Home Phone'];
            document.getElementById("edit-home").value = contactslist[0]['Home Phone'];
        }
        if(contactslist[0]['Personal Email'] == 0)
            document.getElementById("view-email").innerHTML = '-';
        else{
            document.getElementById("view-email").innerHTML = contactslist[0]['Personal Email'];
            document.getElementById("edit-email").value = contactslist[0]['Personal Email'];
        }
        if(contactslist[0]['Work Email'] == 0)
            document.getElementById("view-workmail").innerHTML = '-';
        else{
            document.getElementById("view-workmail").innerHTML = contactslist[0]['Work Email'];
            document.getElementById("edit-workmail").value = contactslist[0]['Work Email'];
        }

    }
    
}
const inputform= `CID=${rowid.getAttribute('id')}`;
xhr.send(inputform);
}

// Edit Contact - both server and UI
function editContact(rowid){

    let first = document.getElementById('edit-first').value;
    let last = document.getElementById('edit-last').value;
    let phone = document.getElementById('edit-phone').value;
    let work = document.getElementById('edit-work').value;
    let home = document.getElementById('edit-home').value;
    let email = document.getElementById('edit-email').value;
    let workmail = document.getElementById('edit-workmail').value;
    
    // ajax part --------------------------------------
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/API/ContactEdit.php', false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function(){
        if(this.status == 200){

            // update table in UI
            const row = (JSON.parse(xhr.responseText));
            let cid = row[0]['CID'];
            let fname = row[0]['First Name'];
            let lname = row[0]['Last Name'];
            let cphone = row[0]['Cell Phone'];
            let hemail = row[0]['Personal Email'];

            let trow = document.getElementById(cid);
            trow.querySelector('.tfirst').innerHTML =fname;
            trow.querySelector('.tlast').innerHTML =lname;
            trow.querySelector('.tphone').innerHTML =cphone;
            trow.querySelector('.temail').innerHTML =hemail;

        }
    }
    const editform= `CID=${rowid}&First=${first}&Last=${last}&CellPhone=${phone}&HomePhone=${home}
                        &WorkPhone=${work}&HomeEmail=${email}&WorkEmail=${workmail}`;
    xhr.send(editform);
    // ------------------------------------------------
}


// get contacts + make table
function getContacts(){
var xhr = new XMLHttpRequest();
let lists;
xhr.open('GET', '/API/ContactPage.php', true);
xhr.onload = function(){
    if(this.status == 200){

        // get contact list and make table
        lists = JSON.parse(xhr.responseText);
        if(lists === null || lists === undefined){

        }else{
            lists.forEach((contact) => {
                let list = document.querySelector('#contact-list');
                let row = document.createElement('tr');
                row.id = `${contact['CID']}`
                row.innerHTML = `
                <td class="tfirst">${contact['First Name']}</td>
                <td class="tlast">${contact['Last Name']}</td>
                <td class="tphone">${contact['Cell Phone']}</td>
                <td class="temail">${contact['Personal Email']}</td>
                <td><a href="#" class="view">O</a></td>
                <td><a href="#" class="edit">=</a></td>
                <td><a href="#" class="delete">X</a></td>
                `;
                list.appendChild(row);
        });
        }
    }
}
xhr.send();
}

//Log out
function logout(){

}

// clear the add contact input
function clearFields(){
document.getElementById('First Name').value='';
document.getElementById('Last Name').value='';
document.getElementById('Cell Phone').value='';
document.getElementById('Work Phone').value='';
document.getElementById('Home Phone').value='';
document.getElementById('Personal Email').value='';
document.getElementById('Work Email').value='';
}

// Event: Display Table of Contacts at start
document.addEventListener('DOMContentLoaded', getContacts());


// Event: New Contact
// when press new contact - display pop up
document.getElementById('button').addEventListener('click',function(event){
    event.preventDefault();

    // display the new contact form
    document.querySelector('.bg-modal').style.display = 'flex';
});

// when press x at the top - hide the pop up
document.querySelector('.close').addEventListener('click',function(event){

    //stop page from jumping back to the top
    event.preventDefault();

    // hide new contact form pop up
    document.querySelector('.bg-modal').style.display = 'none';

    // clear input fields
    clearFields();
});

// Send new contact to the server when press create
document.getElementById('addForm').addEventListener('click',function(event){
    event.preventDefault();
    let first = document.getElementById('First Name');
    let last = document.getElementById('Last Name');
    let phone = document.getElementById('Cell Phone');
    let work = document.getElementById('Work Phone');
    let home = document.getElementById('Home Phone');
    let email = document.getElementById('Personal Email');
    let workmail = document.getElementById('Work Email');

    // send the form to the server
    addContact(first,last,phone,work,home,email,workmail);

    // hide new contact form pop up
    document.querySelector('.bg-modal').style.display = 'none';
    
    // clear input fields
    clearFields();

});

// Event: Remove Contact
document.querySelector('#contact-list').addEventListener('click',(e)=>{

    if(e.target.classList.contains('delete')){
        // prevent jumping back to top
        e.preventDefault();
        
        // remove from the server
        deleteContact(e.target.parentElement.parentElement);

        // remove from UI
        e.target.parentElement.parentElement.remove();
        
    }
});

// Event: View Contact
document.querySelector('#contact-list').addEventListener('click',(e)=>{

    // View contact from UI - based on email for now
    if(e.target.classList.contains('view'))
    {
        e.preventDefault();
        let currentrow = e.target.parentElement.parentElement;

        // fill out the view page
        viewContact(currentrow);

        // display view page
        document.querySelector('.view-bg').style.display = 'flex';
    }

});

document.querySelector('.view-close').addEventListener('click',function(event){
    event.preventDefault();

    // hide view page
    document.querySelector('.view-bg').style.display = 'none';
});

document.querySelector('.view-back').addEventListener('click',function(){
    event.preventDefault();

    // hide view page
    document.querySelector('.view-bg').style.display = 'none';

});

// Event : edit contact
document.querySelector('#contact-list').addEventListener('click',editing);
function editing(event){
    if(event.target.classList.contains('edit'))
    {
        event.preventDefault();
        
        // reset edit form values
        let currentrow = event.target.parentElement.parentElement;
        document.getElementById('edit-first').value='';
        document.getElementById('edit-last').value='';
        document.getElementById('edit-phone').value='';
        document.getElementById('edit-work').value='';
        document.getElementById('edit-home').value='';
        document.getElementById('edit-email').value='';
        document.getElementById('edit-workmail').value='';
        document.getElementById('cur').value = currentrow.getAttribute('id');
        
        // fill out edit form with existing values
        viewContact(currentrow);
        
        // display edit form
        document.querySelector('.edit-bg').style.display = 'flex';

        document.querySelector('.edit-cancel').addEventListener('click',editcancel);
        document.querySelector('.edit-save').addEventListener('click',editsave);

        // end event--
        document.removeEventListener('click',editing);
    }
}

// send edit changes to server and hide edit form
function editsave(event){
event.preventDefault();

let currentrow = document.getElementById('cur').value;

// send changes to server
editContact(currentrow);

// hide edit page and end event
document.querySelector('.edit-bg').style.display = 'none';
document.removeEventListener('click',editsave);
}

// hide edit page and end event
function editcancel(event){
event.preventDefault();
event.stopPropagation();
document.querySelector('.edit-bg').style.display = 'none';
document.getElementById('edit-first').value='';
document.getElementById('edit-last').value='';
document.getElementById('edit-phone').value='';
document.getElementById('edit-work').value='';
document.getElementById('edit-home').value='';
document.getElementById('edit-email').value='';
document.getElementById('edit-workmail').value='';
document.removeEventListener('click',editcancel);
}
// Event : search contact based on first name, last name, personal phone number, and email
function search(){
let input, filter, tablebody, list, fname,lname,phone,email, i, len;
input = document.getElementById("searchInput");
filter = input.value.toUpperCase();
tablebody = document.getElementById("contact-list");
list = tablebody.getElementsByTagName("tr");
len = list.length;
for(i=0; i<len; i++){
    let fup, lup,pup,eup;
    fname = list[i].querySelector('.tfirst').textContent;
    lname = list[i].querySelector('.tlast').textContent;
    phone = list[i].querySelector('.tphone').textContent;
    email = list[i].querySelector('.temail').textContent;
    fup = fname.toUpperCase();
    lup = lname.toUpperCase();
    pup = phone.toUpperCase();
    eup = email.toUpperCase();
    if((fup.indexOf(filter)>-1)||(lup.indexOf(filter)>-1)||(pup.indexOf(filter)>-1)||(eup.indexOf(filter)>-1)){
        list[i].style.display = "";
    }else{
        list[i].style.display = "none";
    }
}
}
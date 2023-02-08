// Calling all letiables by there ID

// Anchor tags Classes

const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');

// Horizontal rows

const hr1 = document.getElementById('hr1');
const hr2 = document.getElementById('hr2');
const hr3 = document.getElementById('hr3');

// Span Tags

const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const span4 = document.getElementById('span4');

// For Step 1
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const selectCity = document.getElementById("selectCity");
const phoneNumber = document.getElementById("phoneNumber");
const dateOfBirth = document.getElementById("dateOfBirth");

// For Step2
const proposalTitle = document.getElementById("proposal");
const jobTitle = document.getElementById("job");
const shortDescription = document.getElementById("shortDescription");


// For Step 3
const eventName = document.getElementById("eventName");
const eventType = document.getElementById("eventType");
const eventLocation = document.getElementById("eventLocation");

// For Step 4
const nameOfMeeting = document.getElementById("nameOfMeeting");
const meetingLocation = document.getElementById("meetingLocation");

// For Buttons on all pages
const previous = document.querySelector(".button-prev");
const next = document.querySelector(".button-next");
const submit = document.getElementById("submit");
const update = document.getElementById('update');

// Steps

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');

// Function to assign Array of cities to element having select property

let cityArray = (element) =>
{
    let citiesList = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Ahemdabad","Chennai","Kolkata","Surat","Pune","Jaipur","Lucknow","Kanpur","Indore","Bhopal","Patna","Ludhiana","Chandigarh","Dehradun","Ajmer","Srinagar"];

    for(let i = 0; i < citiesList.length; i++) {
        let city = citiesList[i];
        let option = document.createElement("option");
        option.textContent = city;
        option.value = city;
        element.appendChild(option);
    }
}

// Assigning array of cities to elements

// As both city arrays on different page it's selecting first of each page and assigning values to them

const assignCity = document.querySelectorAll(".assignCity");
for(let i=0; i<assignCity.length; i++)
{
    cityArray(assignCity[i]);
}

// Steps functionality

function Step1()
{
    step1.classList.remove('d-none');
    step4.classList.add('d-none');
    step2.classList.add('d-none');
    step3.classList.add('d-none');
    a1.classList.add('activelink');
    a4.classList.remove('activelink');
    a2.classList.remove('activelink');
    a3.classList.remove('activelink');
    hr1.classList.remove('activehr');
    hr2.classList.remove('activehr');
    hr3.classList.remove('activehr');
    span1.classList.add('activespan');
    span4.classList.remove('activespan');
    span2.classList.remove('activespan');
    span3.classList.remove('activespan');
}

function Step2()  // show step 2
{
    step2.classList.remove('d-none');
    step1.classList.add('d-none');
    step3.classList.add('d-none');
    step4.classList.add('d-none');
    a2.classList.add('activelink');
    a1.classList.remove('activelink');
    a3.classList.remove('activelink');
    a4.classList.remove('activelink');
    hr1.classList.add('activehr');
    hr2.classList.remove('activehr');
    hr3.classList.remove('activehr');
    span2.classList.add('activespan');
    span1.classList.remove('activespan');
    span2.classList.remove('activespan');
    span4.classList.remove('activespan');

}

function Step3()  // Show step 3
{
    step3.classList.remove('d-none');
    step1.classList.add('d-none');
    step2.classList.add('d-none');
    step4.classList.add('d-none');
    a3.classList.add('activelink');
    a1.classList.remove('activelink');
    a2.classList.remove('activelink');
    a4.classList.remove('activelink');
    hr1.classList.add('activehr');
    hr2.classList.add('activehr');
    hr3.classList.remove('activehr');
    span3.classList.add('activespan');
    span1.classList.remove('activespan');
    span2.classList.remove('activespan');
    span4.classList.remove('activespan');
}

function Step4()
{
    step4.classList.remove('d-none');
    step1.classList.add('d-none');
    step2.classList.add('d-none');
    step3.classList.add('d-none');
    a4.classList.add('activelink');
    a1.classList.remove('activelink');
    a2.classList.remove('activelink');
    a3.classList.remove('activelink');
    hr1.classList.add('activehr');
    hr2.classList.add('activehr');
    hr3.classList.add('activehr');
    span4.classList.add('activespan');
    span1.classList.remove('activespan');
    span2.classList.remove('activespan');
    span3.classList.remove('activespan');
}


// Validations Starts here

// Setting Error

const setError = (element, message) => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');
    errorDisplay.innerText = message;

    element.classList.add('is-invalid');
    element.classList.remove('is-valid');   

}

// Setting Success

const setSuccess = element => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText = '';

    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
};


// Name Validation

const isValidName = name => {
    const regexName = /^(\w*)$/;
    return regexName.test(String(name).toLowerCase());
}

const validateFirstName = () => {
    const firstNameValue = firstName.value;
    if(firstNameValue === '') {
        setError(firstName, 'Please Enter your Name !!! This field can\'t be empty');
       return false;
    } else if(firstNameValue.length < 3){
        setError(firstName,"Name should contain atleast 3 characters");
       return false;
    }
    else if(!isValidName(firstNameValue)) {
        setError(firstName,"Name must not contain any digit,special charater or spaces");
       return false;
    }
    else {
        setSuccess(firstName);
        return true;
    }
}

const validateLastName = () => {

    const lastNameValue = lastName.value;
    if(lastNameValue === '') {
        setError(lastName, 'Please Enter your Name !!! This field can\'t be empty');
       return false;
    } else if(lastNameValue.length < 3){
        setError(lastName,"Name should contain atleast 3 characters");
       return false;
    }
    else if(!isValidName(lastNameValue)) {
        setError(lastName,"Name must not contain any digit,special charater or spaces");
       return false;
    }
    else {
        setSuccess(lastName);
        return true;
    }
}

// Email Validation

const isValidEmail = email => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"0-9A-Z]+(\.[^<>()[\]\\.,;:\s@"0-9A-Z]+)*)|(".+"))@(([a-z]+\.)+[a-z]{2,})$/;
    return regexEmail.test(String(email));
}

const validateEmail = () => {

    const emailValue = email.value.trim();
    if(emailValue === '') {
        setError(email, 'Please Enter your Email !!! This field can\'t be empty');
       return false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please enter a valid Email address !!! Email can\'t contain Uppercase and Numeric Values');
       return false;
    } else {
        setSuccess(email);
        return true;
    }
}

// City Validation

const validateCity = () =>{

    const location = selectCity.value;
    if(location === '' || location === 'Select City')
    {
        setError(selectCity, 'Please select a City !!! This field can\'t be empty');
        return false;
    }
    else
    {
        setSuccess(selectCity);
        return true;
    }
}

// Phone Number Validation

const isValidPhone = phone => {
    const regexPhone = /^((91|0)?[6-9]\d{9})$/;
    return regexPhone.test(String(phone));
}

const validatePhoneNumber = () => {
    const phoneNumberValue = phoneNumber.value.trim();
    if(phoneNumberValue === '') {
        setError(phoneNumber, 'Please Enter your Phone Number !!! This field can\'t be empty');
       return false;
    } else if (phoneNumberValue.length < 10 ) {
        setError(phoneNumber, 'Phone Number should not be less than 10 digits');
       return false;
    } else if (!isValidPhone(phoneNumberValue)) {
        setError(phoneNumber,"Please Enter a valid phone number");
       return false;
    } else {
        setSuccess(phoneNumber);
        return true;
    }
}


// Date Validation

const futureDate = (dateOfBirth) =>{
    const TodayDate = new Date();

    dateOfBirth = dateOfBirth.split("-");

    let yearDiff = TodayDate.getFullYear()-dateOfBirth[0];
    let monthDiff = TodayDate.getMonth()-(dateOfBirth[1]-1);
    let dateDiff = TodayDate.getDate()-dateOfBirth[2];

    if(yearDiff<0)
    return false;
    else if(yearDiff>0)
    return true;
    else
    {
        if(monthDiff<0)
        return false;
        else if(monthDiff == 0)
        {
            if(dateDiff>=0)
            return true;
            else
            return false;
        }
        else
        return true;
    }
}

const validateDateOfBirth = () => {
    const dateOfBirthValue = dateOfBirth.value.trim();
    if(dateOfBirthValue === '') {
        setError(dateOfBirth, 'Please Enter your Date of Birth !!! This field can\'t be empty');
        return false;
    } else if(!futureDate(dateOfBirthValue)) {
        setError(dateOfBirth,"Can't Select Future date!!! Please select Past or Present Date.");
        return false;
    } else {
        setSuccess(dateOfBirth);
        return true;
    }
}


// Validate step 1 all at once and checking if user is allowed to move on second page or not

const validateStep1 = () =>{
    validateFirstName();
    validateLastName();
    validateEmail();
    validateCity();
    validatePhoneNumber();
    validateDateOfBirth();

    if(validateFirstName() && validateLastName() && validateEmail() && validateCity() &&validatePhoneNumber() && validateDateOfBirth())
    {
        Step2();
        return true;
    }
    else
    return false;
}


// Proposal Title Validation

const validateProposal = () => {
    const proposalValue = proposalTitle.value.trim();
    if(proposalValue === ''){
        setError(proposalTitle , 'Please Enter your Proposal !!! This field can\'t be empty');
        return false;
    }
    else{
        setSuccess(proposalTitle);
        return true;
    }
}

// Job Title Validation

const validateJob = () =>{
    const jobValue = jobTitle.value.trim();
    if(jobValue === ''){
        setError(jobTitle, "Please enter a Job title!!! This field can't be empty.");
        return false;
    }
    else{
        setSuccess(jobTitle);
        return true;
    }
}

// Short Description Validation

const validateShortDescription = ()=> {
    const shortDescriptionValue = shortDescription.value.trim();
    if(shortDescriptionValue === '') {
        setError(shortDescription, 'Please Enter your shortDescription !!! This field can\'t be empty');
       return false;
    } 
    else if (shortDescriptionValue.length < 200) {
        setError(shortDescription, "shortDescription should contain atleast 200 Words");
       return false;
    } 
    else {
        setSuccess(shortDescription);
        return true;
    }
}

// Validate step 2 all at once and checking if user is allowed to move on next page or not

const validateStep2 = () =>{

    validateProposal();
    validateJob();
    validateShortDescription();


    if(validateProposal() && validateJob() && validateShortDescription())
    {
        Step3();
        return true;
    }
    else
    return false;
}

// Previous of step 2

const previousStep2 = () => {
    Step1();
}


// Event Name Validation

const validateEventName = () =>{

    const name = eventName.value;
    if(name === '')
    {
        setError(eventName, 'Please enter Event Name !!! This field can\'t be empty');
        return false;
    }
    else
    {
        setSuccess(eventName);
        return true;
    }
}

// Event type validation

const validateEventType = () =>{

    const type = eventType.value;
    if(type === '' || type === 'Select Event')
    {
        setError(eventType, 'Please select Event Type !!! This field can\'t be empty');
        return false;
    }
    else
    {
        setSuccess(eventType);
        return true;
    }
}

// Event location validation

const validateEventLocation = () =>{

    const location = eventLocation.value;
    if(location === '' || location === 'Select City')
    {
        setError(eventLocation, 'Please select a City !!! This field can\'t be empty');
        return false;
    }
    else
    {
        setSuccess(eventLocation);
        return true;
    }
}


// Validate step 3 all at once and checking if user is allowed to move on next page or not

const validateStep3 = () =>{

    validateEventName();
    validateEventType();
    validateEventLocation();


    if(validateEventName() && validateEventType() && validateEventLocation())
    {
        Step4();
        return true;
    }
    else
    return false;
}

// Previous of step 3

const previousStep3 = () => {
    Step2();
}

// Meeting Name Validation

const validateMeetingName = () =>{

    const meetingName = nameOfMeeting.value;
    if(meetingName === '')
    {
        setError(nameOfMeeting, 'Please enter Meeting Name !!! This field can\'t be empty');
        return false;
    }
    else
    {
        setSuccess(nameOfMeeting);
        return true;
    }
}

// Meeting Location Validation

const validateLocation = () =>{

    const locationValue = meetingLocation.value;
    if(locationValue === '')
    {
        setError(meetingLocation, 'Please enter Meeting Location !!! This field can\'t be empty');
        return false;
    }
    else
    {
        setSuccess(meetingLocation);
        return true;
    }
}

// Validating step 4

const validateStep4 = () =>{

    validateMeetingName();
    validateLocation();

    if(validateMeetingName() && validateLocation())
    {
        return true;
    }
    else
    return false;
}

// Previous button for Step4
const previousStep4 = () => {
    Step3();
}

// Validating whole form at once

const validateForm = () =>{

    if(!validateStep1())
    {
        Step1();
        return false;
    }
    else if(!validateStep2())
    {
        Step2();
        return false;
    }
    else if(!validateStep3())
    {
        Step3();
        return false
    }
    else if(!validateStep4())
    {
        Step4();
        return false;
    }
    else if(validateStep1() && validateStep2() && validateStep3() && validateStep4())
    return true;
    else
    return false;
}


// Submitting the form

const form = document.querySelector('#form');

let selectedRow = null;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateStep4();   

    if(validateForm())
    {
        readFormData();
        createTable();
        resetform(); 
    }
    
});

//Retrieve the form data

const readFormData = () => {
    let formData = {};
    formData["firstName"] = firstName.value;
    formData["lastName"] = lastName.value;
    formData["email"] = email.value;
    formData["selectedCity"] = selectCity.value;
    formData["phoneNumber"] = phoneNumber.value;
    formData["dateOfBirth"] = dateOfBirth.value;
    formData["proposalTitle"] = proposalTitle.value;
    formData["jobTitle"] = jobTitle.value;
    formData["shortDescription"] = shortDescription.value;
    formData["eventName"] = eventName.value;
    formData["eventType"] = eventType.value;
    formData["eventLocation"] = eventLocation.value;
    formData["nameOfMeeting"] = nameOfMeeting.value;
    formData["meetingLocation"] = meetingLocation.value;

    // Storing data in localstorage

    if(localStorage.formDetails)
    {
        let tempData = [];
        tempData = JSON.parse(localStorage.formDetails);
        tempData.push(formData);
        localStorage.formDetails = JSON.stringify(tempData);
    }
}

// Create Table

const createTable = () => {

    let storedData;
    if(localStorage.formDetails)
    {
        storedData = JSON.parse(localStorage.formDetails);
    }
    else
    {
        storedData = [];
        localStorage.formDetails = JSON.stringify(storedData);
    }

    let html ="";

    storedData.forEach((element,index) => {
        html += `<tr> 
                    <td> ${element.firstName} </td>
                    <td> ${element.email} </td>
                    <td> ${element.phoneNumber} </td>
                    <td> ${element.proposalTitle} </td>
                    <td> ${element.eventName} </td>
                    <td> ${element.eventType} </td>
                    <td> ${element.eventLocation} </td>
                    <td> ${element.meetingLocation} </td>
                    <td> <button class="button-edit" onClick="onEdit(${index})">Edit</button> 
                        <button class="button-delete" onClick="onDelete(${index})">Delete</button>
                    </td>
                </tr>`
    });
    document.querySelector('#storeData tbody').innerHTML = html;
}

// On load of document show data

document.onload = createTable();


//Delete the data
const onDelete = (index) => {

    let storedData;
    if(localStorage.formDetails)
    {
        storedData = JSON.parse(localStorage.formDetails);
    }

    if (confirm('Do you want to delete this record?')) {
        storedData.splice(index,1);
        localStorage.formDetails = JSON.stringify(storedData);
        createTable();
        resetform();
    }
}


// Enable step movement

const enableSteps = () =>{
    a1.setAttribute('onclick','Step1()');
    a2.setAttribute('onclick','Step2()');
    a3.setAttribute('onclick','Step3()');
    a4.setAttribute('onclick','Step4()');
}


// Disable Step Movement

const disableSteps = () =>{
    a1.removeAttribute('onclick');
    a2.removeAttribute('onclick');
    a3.removeAttribute('onclick');
    a4.removeAttribute('onclick');
}

// Edit the Data

const onEdit = (index) => {

    resetform();

    // Parsing Data
    let data = JSON.parse(localStorage.formDetails);
 
    firstName.value = data[index].firstName;
    lastName.value = data[index].lastName;
    selectCity.value = data[index].selectedCity;
    email.value = data[index].email;
    phoneNumber.value = data[index].phoneNumber;
    dateOfBirth.value = data[index].dateOfBirth;
    proposalTitle.value = data[index].proposalTitle;
    jobTitle.value = data[index].jobTitle;
    shortDescription.value = data[index].shortDescription;
    eventName.value = data[index].eventName;
    eventType.value = data[index].eventType;
    eventLocation.value = data[index].eventLocation;
    nameOfMeeting.value = data[index].nameOfMeeting;
    meetingLocation.value = data[index].meetingLocation;

    // Moving to step 1 and enabling steps functionality
    Step1();
    enableSteps();

    // Change Button Type to submit

    submit.classList.add('d-none');
    update.classList.remove('d-none');

    update.onclick = () => {

        if(validateForm())
        {
            data[index].firstName = firstName.value;
            data[index].lastName = lastName.value;
            data[index].email = email.value;
            data[index].selectedCity = selectCity.value;
            data[index].phoneNumber = phoneNumber.value;
            data[index].dateOfBirth = dateOfBirth.value;
            data[index].proposalTitle = proposalTitle.value;
            data[index].jobTitle = jobTitle.value;
            data[index].shortDescription = shortDescription.value;
            data[index].eventName = eventName.value;
            data[index].eventType = eventType.value;
            data[index].eventLocation = eventLocation.value;
            data[index].nameOfMeeting = nameOfMeeting.value;
            data[index].meetingLocation = meetingLocation.value;
    
            localStorage.formDetails = JSON.stringify(data);
    
            createTable();
            resetform();
    
            // Change Button Type to submit
    
            update.classList.add('d-none');
            submit.classList.remove('d-none');
        }
    }
}

// Reset Form

const resetform = () => {
    form.reset();
    let elementsArray = [firstName,lastName,email,phoneNumber,dateOfBirth,selectCity,proposalTitle,jobTitle,shortDescription,eventName,eventType,eventLocation,nameOfMeeting,meetingLocation];
  
    const setDefault = element => {
        const formGroup = element.parentElement;
        const errorDisplay = formGroup.querySelector('.error');
    
        errorDisplay.innerText = '';
        element.classList.remove('is-valid');
        element.classList.remove('is-invalid');
    };

    elementsArray.forEach((element) => {
        setDefault(element);
    })

    selectedRow = null;
   
    // function to make step1 visible and disabling steps functionality
    Step1();
    disableSteps();
}
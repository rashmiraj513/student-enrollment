const form = document.getElementById("form");
const messageContainer = document.querySelector(".message-container");
const messages = document.getElementById("messages");
const containerList = document.getElementById("container-list");
const rows = document.getElementById("list");
const table = document.getElementById("table-data");
let students = [];

let isValid = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();

    if(!isValid) {
        messages.textContent = "Please fill out all the fields";
        messages.style.color = "red";
        messageContainer.style.borderColor = "red";
    } else {
        messages.textContent = "Successfully Enrolled!";
        messages.classList.add("messages-info");
        messageContainer.style.borderColor = "green";
    }
}

// Funtion to get skill
function getSkills() {
    var skills = [];
    if(document.getElementById("student-skills-java").checked) skills.push(document.getElementById("student-skills-java").value);
    if(document.getElementById("student-skills-html").checked) skills.push(document.getElementById("student-skills-html").value);
    if(document.getElementById("student-skills-css").checked) skills.push(document.getElementById("student-skills-css").value);
    return skills;
}

function storeFormData() {
    // Creating Student Object
    const student = {
        name: form.studentName.value,
        email: form.studentEmail.value,
        website: form.studentWebsite.value,
        imageURL: form.studentImage.value,
        gender: form.studentGender.value,
        skills: getSkills()
    }
    // Pushing into students array
    students.push(student);
    containerList.style.display = "block";

    // Creating the div and required elements
    var leftChildDiv = document.createElement("div");
    var rightChildDiv = document.createElement("div");
    // Adding class to divs
    leftChildDiv.classList.add("left-child-div");
    rightChildDiv.classList.add("right-child-div");
    var heading_5 = document.createElement("h3");
    var genderPara = document.createElement("p");
    var emailPara = document.createElement("p");
    var websitePara = document.createElement("a");
    var skillsPara = document.createElement("p");
    var img = document.createElement("img");
    
    // Initialising the Student
    img.src = student.imageURL;
    img.alt = "Student_Image";
    img.classList.add("profile-img");
    heading_5.textContent = student.name;
    genderPara.textContent = student.gender;
    emailPara.textContent = student.email;
    websitePara.href = student.website;
    if(student.website.length > 35) {
        websitePara.text = student.website.slice(0, 35) + '...';
    }
    else websitePara.text = student.website;
    websitePara.target = "_blank";
    skillsPara.textContent = student.skills;

    // Appending the child
    leftChildDiv.appendChild(heading_5);
    leftChildDiv.appendChild(genderPara);
    leftChildDiv.appendChild(emailPara);
    leftChildDiv.appendChild(websitePara);
    leftChildDiv.appendChild(skillsPara);
    rightChildDiv.appendChild(img);

    // Creatin the table rows dynamically
    var newRow = table.insertRow(1);
    newRow.classList.add("fade-in-effect");
    var newColumn_1 = newRow.insertCell(0);
    var newColumn_2 = newRow.insertCell(1);
    newColumn_1.appendChild(leftChildDiv);
    newColumn_2.appendChild(rightChildDiv);
}

function processFormData(event) {
    event.preventDefault();

    // Validate Form
    validateForm();

    // Submit Data If Valid
    if(isValid) storeFormData();
}

// Event Listener
form.addEventListener('submit', processFormData);
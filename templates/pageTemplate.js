const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateTeam = team => {
    //Write template cards for each team member
    //Write Functions for engineer and intern
    const generateManager = manager => {
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">ID: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">ID: ${manager.officeNumber()}</li>
        </ul>
    </div>
</div> }

const
    <div class="card-header">
        <h2 class="card-title">${Engineer.getName()}</h2>
        <h3 class="card-title">${Engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Engineer.getId()}</li>
            <li class="list-group-item">ID: <a href="mailto:${Engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">ID: ${manager.officeNumber()}</li>
        </ul>
    </div>


    `
    }

    const html = [];
    //Repeat for intern and engineer
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    // Start Copy here
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(Engineer => generateManager(Engineer))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(Intern => generateManager(Intern))
    );

    return html.join("");
}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

    <div class="conatiner">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
    
</body>
</html> 
    `
}
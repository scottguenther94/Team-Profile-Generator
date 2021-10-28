const managerInfo = (managers) => {
    return managers.map(manager => (
        `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Title: Manager</h6>
            <p>
                <li>ID #: ${manager.id}</li>
                <li>Office #: ${manager.officeNumber}</li>
                <li><a href="mailto:${manager.email}" class="card-link">${manager.email}</a></li>
            </p>
        </div>
    </div> `
    )).join('');
}

const engineerInfo = (engineers) => {
    return engineers.map(engineer => (
        `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                   <h6 class="card-subtitle mb-2 text-muted">Title: Engineer</h6>
                       <p>
                           <li>ID #: ${engineer.id}</li>
                              <li><a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></li>
                              <li><a href="http://github.com/${engineer.github}" class="card-link">https://github.com/${engineer.github}</a></li>
                        </p>
            </div>
        </div>
        `
    )).join('');
}

const internInfo = (interns) => {
    return interns.map(intern => (
       `
       <div class="card" style="width: 18rem;">
             <div class="card-body">
                 <h5 class="card-title">${intern.name}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">Title: Intern</h6>
                 <p>
                     <li>ID #: ${intern.id}</li>
                     <li>University: ${intern.school}</li>
                     <li><a href="mailto:${intern.email}" class="card-link">${intern.email}</a></li>
                 </p>
             </div>
         </div>
       ` 
    )).join('');
}

module.exports = teamMembers => {
    const managers = teamMembers.filter(member => member.getRole() == "Manager");
    const interns = teamMembers.filter(member => member.getRole() == "Intern");
    const engineers = teamMembers.filter(member => member.getRole() == "Engineer");
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                 <h1 class="display-4">Meet The Team</h1>
            </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="main-section col-12 d-flex justify-content-center">
            ${managerInfo(managers)}
            ${engineerInfo(engineers)}
            ${internInfo(interns)}
            </div>
        </div>
    </div>
</body>
</html>
    `
}
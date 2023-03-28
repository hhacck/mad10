if('serviceWorker' in navigator)
{
    navigator.serviceWorker
    .register('/sw.js')
    .then((reg)=>console.log("Registered",reg))
    .catch((error)=>console.log("Error",error));

}
else
{
    console.log("No service worker support in this browser");
}

fetch("student.json")
.then((res)=>{
    return res.json();
})
.then((listOfStudents)=>{

    var table = "<table>"
    table += '<tr><th>USN</th><th>Name</th><th>Dept</th></tr>'

    for(std of listOfStudents)
    {
        table += '<tr><td>' + std.usn + '</td><td>' + std.name + '</td><td>' + std.dept + '</td></tr>'
    }

    table += '</table>'

    document.getElementById('tbl').innerHTML = table;


})
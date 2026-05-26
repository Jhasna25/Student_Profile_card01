function display() {
    
    const avatar = document.getElementById("avatar");
    const name = document.getElementById("name").value;
    const grade = document.getElementById("grade").value;
    const email = document.getElementById("email").value;
    const school = document.getElementById("school").value;

    document.getElementById("card-avatar").innerHTML = `${name[0]}`;
    document.getElementById("card-name").innerHTML = name;
    document.getElementById("card-grade").innerHTML = grade;
    document.getElementById("card-email").innerHTML = email;
    document.getElementById("card-school").innerHTML = school;

    document.getElementById("form-section").style.display = "none";
    document.getElementById("card-section").style.display = "flex";

}

function editCard() {
    document.getElementById("form-section").style.display = "block";
    document.getElementById("card-section").style.display = "none";

}
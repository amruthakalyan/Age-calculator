function calculateAge() {
    var birthdate = document.getElementById("birthdate").value;
    
    if (birthdate) {
        var today = new Date();
        var birthDate = new Date(birthdate);
        var age = today.getFullYear() - birthDate.getFullYear();
        
        // Adjust age if birthday hasn't occurred yet this year
        if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }

        var months = (today.getMonth() + 12) - birthDate.getMonth();
        if (today.getDate() < birthDate.getDate()) {
            months--;
        }

        var days = today.getDate() - birthDate.getDate();
        if (days < 0) {
            var lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days = lastMonth.getDate() - birthDate.getDate() + today.getDate();
        }

        document.getElementById("result").innerHTML = "Your age is: " + age + " years, " + months + " months, and " + days + " days.";
    } else {
        alert("Please enter your birthdate");
    }
}

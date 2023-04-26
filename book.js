function validateForm() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let movie = document.getElementById("movie").value;
	let date = document.getElementById("date").value;
	let time = document.getElementById("time").value;

	let nameRegex = "Prasang Baria"
	let emailRegex = /\S+@\S+\.\S+/;
	let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
	let timeRegex = /^(0?[1-9]|1[012]):([0-5]\d) (AM|PM)$/i;

	let errors = [];

	if (name!=nameRegex) {
		errors.push("Please enter a valid name");
		document.getElementById("name").style.borderColor = "red";
		return;
	} else {
		document.getElementById("name").style.borderColor = "#ccc";
	}

	if (!emailRegex.test(email)) {
		errors.push("Please enter a valid email address");
		document.getElementById("email").style.borderColor = "red";
		return;
	} else {
		document.getElementById("email").style.borderColor = "#ccc";
	}

	if (movie == "") {
		errors.push("Please select a movie");
		document.getElementById("movie").style.borderColor = "red";
		return;
	} else {
		document.getElementById("movie").style.borderColor = "#ccc";
	}

	const personInput = document.getElementById("person");
	personInput.addEventListener("input", () => {
	if (personInput.value < 1) {
		personInput.value = 1;
	} else if (personInput.value > 6) {
		personInput.value = 6;
	}
	});

	if (!dateRegex.test(date)) {
		errors.push("Please enter a valid date (YYYY-MM-DD)");
		document.getElementById("date").style.borderColor = "red";
		return;
	} else {
        document.getElementById("date").style.borderColor = "#ccc";
    }
    
		let currentDate = new Date();
		let selectedDate = new Date(date);
            if (selectedDate < currentDate) {
                document.getElementById("date").style.borderColor = "red";
                errors.push("Please select a future date");
            } else {
                document.getElementById("date").style.borderColor = "#ccc";
            }

	if (!timeRegex.test(time)) {
		errors.push("Please enter a valid time (HH:MM)");
		document.getElementById("time").style.borderColor = "red";
	} else {
		let currentTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' });
		let selectedTime = new Date(`01/01/2022 ${time}`).toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' });
		if (selectedDate < currentDate) {
        if (selectedTime < currentTime) {
			errors.push("Please select a future time");
			document.getElementById("time").style.borderColor = "red";
		} else {
			document.getElementById("time").style.borderColor = "#ccc";
		}
    }
	}

	// If there are errors, display them in an alert
// If there are errors, display them in an alert and prevent form submission
	if (errors.length > 0) {
		alert(errors.join("\n"));
	}
    
        }



document.getElementById("book-form").addEventListener("submit", validateForm);
function check() {
    let name = document.getElementById('your_name').value;
    let email = document.getElementById('your_email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let check_error;
    //check your name
    if (name.length === 0) {
        document.getElementById('error_name').innerHTML = 'Please fill out your name.'
        check_error = true;
    } else if (name.length > 100) {
        document.getElementById('error_name').innerHTML = 'Your name should not exceed 100 characters.'
        check_error = true;
    } else {
        document.getElementById('error_name').innerHTML = "";
    }
    //check your email
    if (email.length === 0) {
        document.getElementById('error_email').innerHTML = "Please fill out your email.";
        check_error = true;
    } else if (email.length > 100) {
        document.getElementById('error_email').innerHTML = 'Your email should not exceed 100 characters.'
        check_error = true;
    } else {
        document.getElementById('error_email').innerHTML = "";
    }
    //check your subject
    if (subject.length === 0) {
        document.getElementById('error_subject').innerHTML = "Please fill out your subject.";
        check_error = true;
    } else if (subject.length < 50) {
        document.getElementById('error_subject').innerHTML = 'Subject should not shorter than 50 characters.'
        check_error = true;
    } else if (subject.length > 250) {
        document.getElementById('error_subject').innerHTML = "“Subject should not exceed 250 characters.";
        check_error = true;
    } else {
        document.getElementById('error_subject').innerHTML = "";
    }
    //check message
    if (message.length === 0) {
        document.getElementById('error_message').innerHTML = "Please fill out your message.";
        check_error = true;
    } else if (message.length > 500) {
        document.getElementById('error_message').innerHTML = 'Message should not exceed 500 characters.'
        check_error = true;
    } else {
        document.getElementById('error_message').innerHTML = "";
    }

    if (check_error) {
        return false;
    }
}
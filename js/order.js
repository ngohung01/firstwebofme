function check() {
    let check_error;
    let now = new Date();
    let cake = document.getElementById('cake').value;
    let name = document.getElementById('your_name').value;
    let message = document.getElementById('message').value;
    let date = document.getElementById('date').value;
    let deliver = document.getElementById('deliver_to').value;
    //check cake name
    if (cake.length === 0) {
        document.getElementById('error_cake').innerHTML = 'Please select our product.';
        check_error = true;
    } else {
        document.getElementById('error_cake').innerHTML = '';
    }
    //check your name
    if (name.length === 0) {
        document.getElementById('error_name').innerHTML = 'Please fill out your name.';
        check_error = true;
    } else if (name.length > 100) {
        document.getElementById('error_name').innerHTML = 'Your name should not exceed 100 characters.';
        check_error = true;
    } else {
        document.getElementById('error_name').innerHTML = '';
    }
    //check your message
    if (message.length > 30) {
        document.getElementById('error_message').innerHTML = 'Message should not exceed 30 characters.';
        check_error = true;
    } else {
        document.getElementById('error_message').innerHTML = '';
    }

    //check deliver date
    let d = new Date(date);
    if (date.length === 0) {
        document.getElementById('error_date').innerHTML = 'Please fill out the deliver date.';
        check_error = true;
    } else if (d < now) {
        document.getElementById('error_date').innerHTML = 'Deliver date should greater than current date.';
        check_error = true;
    } else {
        document.getElementById('error_date').innerHTML = '';
    }
    //check deliver to
    if (deliver.length === 0) {
        document.getElementById('error_deliver').innerHTML = 'Please fill out the address.';
        check_error = true;
    } else if (name.length > 500) {
        document.getElementById('error_deliver').innerHTML = 'Address should not exceed 500 characters.';
        check_error = true;
    } else {
        document.getElementById('error_deliver').innerHTML = '';
    }

    //change check_error 
    if (check_error) {
        return false;
    }
}
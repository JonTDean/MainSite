// Libraries
import emailjs from 'emailjs-com';

// If the user successfully completes the captcha then
// Have the submit button throw an alert and send the information
export function handleSubmit(e, isVerified){
    e.preventDefault();

    if(isVerified){
        alert("Email Sent! An automated message has been sent.")
    } else {
        alert("Please Complete the Captcha.")
    }
}

// emailjs handling fetch request
// second argument must pass the emailjs method
export function sendEmail(e){
    e.preventDefault();
    console.log("PRE-EMAILJS")

    // SERVICE/TEMPLATE/USER
    emailjs.sendForm(process.env.REACT_APP_EJS_SERVICE_ID, process.env.REACT_APP_EJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EJS_USER_ID)
        .then((resp) => {
            console.log(resp.text);
        }, (err) => {
            console.log(err.text);
        });
}
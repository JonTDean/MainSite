// This handles the verification of the user
// NEED TO ADD ERROR HANDLING EVENTUALLY
export function verifyCallback(resp, setIsVerified) {
    if(resp){
        return setIsVerified(true)
    }
}

// Resets the state of ReCaptcha when onLoad is called
export function onLoadRecaptcha(captcha) {
    if (captcha) {
        captcha.reset();
    }
}  
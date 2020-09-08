import React,{ Component } from 'react';
import emailjs from 'emailjs-com';
// import { init } from 'emailjs-com';
// init("user_OYbpb8SID3NEaf4EcNVik");

class EmailJSForm extends Component{
    state = {
        from_name: '',
        message: '',
        from_email: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendEmail(e){
        e.preventDefault();

        this.setState({
            from_name: '',
            message: '',
            from_email: '',
        });

        emailjs.sendForm('service_4aze6jd', 'template_p21l23c', e.target, 'user_OYbpb8SID3NEaf4EcNVik')
            .then((resp) => {
                console.log(resp.text);
            }, (err) => {
                console.log(err.text);
            });
    }

    render() {
        return (
          <div>
            {/*  Contact Form */}
            <form id="form" onSubmit={this.sendEmail.bind(this)}>
                <div className="field">
                    <label htmlFor="from_name">from_name</label>
                    <input type="text" name="from_name" id="from_name" value={this.state.from_name} onChange={this.handleChange}/>
                </div>

                <div className="field">
                    <label htmlFor="message">message</label>
                    <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
                </div>

                <div className="field">
                    <label htmlFor="from_email">from_email</label>
                    <input type="text" name="from_email" id="from_email" value={this.state.from_email} onChange={this.handleChange} />
                </div>

                <input type="submit" id="button" value="Send Email" />
            </form>
          </div>
        );
      };
};

export default EmailJSForm;
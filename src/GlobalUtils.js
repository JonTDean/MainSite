// Dynamic state setter for the controlled forms
// Second argument must be this
export function handleChange(e, self){
    self.setState({
        [e.target.name]: e.target.value
    })
}

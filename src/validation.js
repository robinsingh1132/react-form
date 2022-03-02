export default function validation(values){
    let errors = {}
    console.log(values)
    if(!values.username.trim()){
        errors.username = "Username is required"
    }

    if(!values.email){
        errors.email = "Email address is required"
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email = "Email address  is invalid"
    }

    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length < 6){
        errors.password = "Password needs to be 6 character long"
    }

    if(!values.confirm_password){
        errors.confirm_password = "Password is required"
    }else if(values.confirm_password != values.password){
        errors.confirm_password = "Password do not match"
    }

    if(!values.cars){
        errors.cars = "Select field is required"
    }

    if(!(values.group1 === 'Male' || values.group1 === 'Female')){
        console.log(values.group1)
        errors.group1 = "Radio field is required"
    }

    if(!values.phone_number){
        errors.phone_number = "Phone number is required"
    }else if(values.phone_number.length > 10){
        errors.phone_number = "Phone number can't be more than 10 digit long"
    }else if(!/^[7-9][0-9]{9}$/.test(values.phone_number)){
        errors.phone_number = "Phone number is invalid"
    }
    return errors;
}
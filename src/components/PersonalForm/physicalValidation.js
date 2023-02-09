
const phyguardianvalidation = (values) => {

    let errors = {};
    // ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$

    // if (!targets.email) errorsValue.email = "Email  is required";
    //     else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";

    if (!values.fullName) {
        errors.fullName = "Name is required"
    }
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    }

    if (!values.mobile) {
        errors.mobile = "Phone number is required"
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(values.mobile)) {
        errors.mobile = "Phone number is not valid"
    }

    if (!values.residentialAddress) {
        errors.residentialAddress = "Contact address is required"
    }
    return errors
}

export default phyguardianvalidation
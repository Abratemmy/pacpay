
const childvalidation = (values) => {

    let errors = {};

    if (!values.title) {
        errors.title = "Title is required"
    }
    if (!values.fullName) {
        errors.fullName = "Full Name is required"
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = "Date of birth is required"
    }

    if (!values.mobile) {
        errors.mobile = "Phone number is required"
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(values.mobile)) {
        errors.mobile = "Phone number is not valid"
    }
    if (!values.contactAddress) {
        errors.contactAddress = "Contact address is required"
    }

    if (!values.isDisabled) {
        errors.isDisabled = "Select an option"
    }

    if (!values.gender) {
        errors.gender = "Child's gender is required"
    }

    return errors
}

export default childvalidation

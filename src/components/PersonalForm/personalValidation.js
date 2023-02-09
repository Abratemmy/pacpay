

const validation = (values) => {

    let errors = {};

    if (!values.title) {
        errors.title = "Title is required"
    }
    if (!values.firstName) {
        errors.firstName = "First name is required"
    }
    if (!values.lastName) {
        errors.lastName = "Last name is required"
    }

    if (!values.middleName) {
        errors.middleName = "Middle name is required"
    }

    if (!values.mobile) {
        errors.mobile = "Phone number is required"
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(values.mobile)) {
        errors.mobile = "Phone number is not valid"
    }

    if (!values.altMobile) {
        errors.altMobile = "Alternative number is required"
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(values.altMobile)) {
        errors.altMobile = "Phone number is not valid"
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = "Date of Birth is required"
    }
    if (!values.gender) {
        errors.gender = "Gender is required"
    }
    if (!values.nationality) {
        errors.nationality = "Nationality is required"
    }
    if (!values.stateOfOrigin) {
        errors.stateOfOrigin = "Gender is required"
    }

    if (!values.maritalStatus) {
        errors.maritalStatus = "Gender is required"
    }

    if (!values.state) {
        errors.state = "State of residence is required"
    }

    if (!values.city) {
        errors.city = "City of residence is required"
    }

    if (!values.contactAddress) {
        errors.contactAddress = "Residential address is required"
    }

    return errors
}

export default validation

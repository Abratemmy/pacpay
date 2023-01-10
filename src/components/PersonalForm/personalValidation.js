

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

    if (!values.stateofRes) {
        errors.stateofRes = "State of residence is required"
    }

    if (!values.cityofRes) {
        errors.cityofRes = "City of residence is required"
    }

    if (!values.resAddress) {
        errors.resAddress = "Residential address is required"
    }

    return errors
}

export default validation

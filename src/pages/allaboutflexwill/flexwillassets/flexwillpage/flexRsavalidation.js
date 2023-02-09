const rsavalidation = (values) => {

    let errors = {};

    if (!values.pfaAdmin) {
        errors.pfaAdmin = "PfaAdmin is required"
    }
    if (!values.penNumber) {
        errors.penNumber = "Pen number is required"
    }
    // if (!values.checked) {
    //     errors.checked = "Please check the box"
    // }

    return errors
}

export default rsavalidation
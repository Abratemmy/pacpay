const burialvalidation = (values) => {

    let errors = {};

    if (!values.burialGround) {
        errors.burialGround = "Description is required"
    }
    if (!values.refreshment) {
        errors.refreshment = "Description is required"
    }

    if (!values.amount) {
        errors.amount = "Amount is required"
    }

    // if (!values.burialcheck) {
    //     errors.burialcheck = "Check the box"
    // }

    return errors
}

export default burialvalidation

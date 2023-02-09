
const cashinBankValidation = (values) => {

    let errors = {};

    if (!values.bankName) {
        errors.bankName = "Bank name is required"
    }
    if (!values.accountNumber) {
        errors.accountNumber = "Account number is required"
    }

    if (!values.accountType) {
        errors.accountType = "Account type is required"
    }

    if (!values.bvn) {
        errors.bvn = "Phone number is required"
    }
    if (!values.branch) {
        errors.branch = "Branch is required"
    }

    if (!values.ownershipStatus) {
        errors.ownershipStatus = "Ownership status is required"
    }


    return errors
}

export default cashinBankValidation

<button
    type='submit' value="submit"
    onClick={() => {
        const formError = validation(formData);
        setErrors(formError);

        if (Object.keys(formError).length > 0) {
            console.log("error")
        } else {
            if (page === FormTitles.length - 1) {
                console.log(formData);
                navigate("/flex_personal_success");
            }
            else {

                setPage((currPage) => currPage + 1);
            }
        }
    }}
    className="general-btn"
></button>
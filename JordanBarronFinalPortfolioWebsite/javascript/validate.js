/**
 * Fade out animation
 */
$(window).scroll(function () {
    $(".jumbotron").css("opacity", 1 - $(window).scrollTop() / 1200);
});


/**
 * Form Validation
 */
window.onload = function () {
    $("#errorFName").hide();
    $("#errorLName").hide();
    $("#errorEmail").hide();
    document.forms[0].onsubmit = validateForm;
}

function validateForm() {
    var returnValue = true;

    if (!validateFirstName()) {
        returnValue = false;
    }
    if (!validateLastName()) {
        returnValue = false;
    }
    if (!validateEmail()) {
        returnValue = false;
    }
    return returnValue;
}

function validateFirstName() {
    if (document.getElementById('myFName').value == "") {
        // if (document.forms[0].elements["myFName"].value == "") {
        $("#errorFName").show();
        return false;
    } else {
        $("#errorFName").hide();
        return true;
    }
}

function validateLastName() {
    if (document.getElementById('myLName').value == "") {
        $("#errorLName").show();
        return false;
    } else {
        $("#errorLName").hide();
        return true;
    }
}

function validateEmail() {
    if (document.getElementById('myEmail').value == "") {
        $("#errorEmail").show();
        return false;
    } else {
        $("#errorEmail").hide();
        return true;
    }
}
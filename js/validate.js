/**
 * Created with JetBrains PhpStorm.
 * User: AdminA
 * Date: 19.01.16
 * Time: 16:02
 * To change this template use File | Settings | File Templates.
 */

function showError(idError,errorMessage) {
    var classForError = document.getElementById(idError);
    classForError.innerHTML = errorMessage;
}

function resetError(idError) {
    var classForError = document.getElementById(idError);
    classForError.innerHTML = '';
}

function validate(form) {

    var elems = form.elements;

//    ищим первый див
//    getElementsbyClassName error

/*Name*/
    var idError = "name-error";
    resetError(idError);

    if (!elems.name.value) {

        var errorMessage = 'Enter your name';
        showError(idError,errorMessage);
    }
/*E-mail*/
    var idError = "email-error";
    resetError(idError);
    if (!elems.email.value) {
        errorMessage = 'Enter your e-mail';
        showError(idError,errorMessage);
    } else {
        var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
        var email = elems.email.value;
        if (!regex.test(email)) {
            errorMessage = 'Enter a valid email';
            showError(idError,errorMessage);
        }
    }
/*Password*/
    var idError = "pass-error";
    resetError(idError);
    if (!elems.password.value) {
        errorMessage = 'Enter your password';
        showError(idError,errorMessage);
    } else {
        var regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        var pass = elems.password.value;
        if (!regexPass.test(pass)) {
            errorMessage = 'at least one number, one lowercase and one uppercase letter, at least six characters';
            showError(idError,errorMessage);
        }
        if (elems.password.value != elems.password2.value) {
            errorMessage = 'Passwords do not match !';
            showError(idError,errorMessage);
        }
    }
/*Message*/
    var idError = "msg-error";
    resetError(idError);
    if (!elems.msg.value) {

        var errorMessage = 'Enter your message';
        showError(idError,errorMessage);
    }
}
    // JQuery validation.js
//    $("document").ready(function () {
    $(function() {
        $("#productform").validate({
            rules: {
                prodid: {
                    required: true,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 10
                },
                address: {
                    required: true,
                    rangelength: [10, 250]
                },
                message: {
                    rangelength: [50, 1050]
                }
            }
        });
    });
    // end JQuery validation


/**
 * Created with JetBrains PhpStorm.
 * User: AdminA
 * Date: 19.01.16
 * Time: 16:02
 * To change this template use File | Settings | File Templates.
 */

function showError2(numberError, errorMessage) {
    var classForError = document.getElementsByClassName('error')[numberError];
    classForError.innerHTML = errorMessage;
}

function showError3(idError,errorMessage) {
    var classForError = document.getElementById(idError);
    classForError.innerHTML = errorMessage;
}


function resetError2(idError) {
    var classForError = document.getElementById(idError);
    classForError.innerHTML = '';
}



function validate(form) {


    var elems = form.elements;
//    var node = elems.getElementsByTagName("p")[0].parentNode;
//    ищим первый див
//    getElementsbyClassName error
//    alert(node);
//    node.style.backgroundColor = '#0033dd';

//    var numberError = 0;
    var idError = "name-error";
    resetError2(idError);
//    var parent = elems.name.nextSibling;
//    alert (parent + "-parent");
//    parent.innerHTML = "TEST";
//    if (parent.nextSibling.nodeName == "p") {
//        alert("Next sibling is p! " /*+ link.innerHTML*/);
//    }

    if (!elems.name.value) {

        var errorMessage = 'Enter your name';
        showError3(idError,errorMessage);
//        showError2(numberError, errorMessage);
    }

//    numberError = 3;
    var idError = "email-error";
    resetError2(idError);
    if (!elems.email.value) {
        errorMessage = 'Enter your e-mail';
        showError3(idError,errorMessage);
//        showError2(numberError, errorMessage);
    } else {
        var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
        var email = elems.email.value;
        if (!regex.test(email)) {
            errorMessage = 'Enter a valid email';
//            showError2(numberError, errorMessage);
            showError3(idError,errorMessage);
        }
    }

//    numberError = 1;
    var idError = "pass-error";
    resetError2(idError);
    if (!elems.password.value) {
        errorMessage = 'Enter your password';
//        showError2(numberError, errorMessage);
        showError3(idError,errorMessage);
    } else {
        var regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        var pass = elems.password.value;
        if (!regexPass.test(pass)) {
            errorMessage = 'at least one number, one lowercase and one uppercase letter, at least six characters';
//            showError2(numberError, errorMessage);
            showError3(idError,errorMessage);
        }
        if (elems.password.value != elems.password2.value) {
            errorMessage = 'Passwords do not match !';
//            showError2(numberError, errorMessage);
            showError3(idError,errorMessage);
        }
    }

//    var numberError = 5;
    var idError = "msg-error";
    resetError2(idError);
    if (!elems.msg.value) {

        var errorMessage = 'Enter your text';
//        showError2(numberError, errorMessage);
        showError3(idError,errorMessage);
    }

    // JQuery
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
//    });
    // end JQuery

    // old version

    //function showError(container, errorMessage) {
//    container.className = 'error-message';
//    var msgElem = document.createElement('p');
//    msgElem.className = "error";
//    msgElem.innerHTML = errorMessage;
//    container.appendChild(msgElem);//after parrent
//}
//function resetError(container) {
//    container.className = '';
//    if (container.lastChild.className == "error") {
//        container.removeChild(container.lastChild);
//    }
//}
//function resetError2(numberError) {
//    var classForError = document.getElementsByClassName('error')[numberError];
//    classForError.innerHTML = '';
//}
}
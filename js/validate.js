/**
 * Created with JetBrains PhpStorm.
 * User: AdminA
 * Date: 19.01.16
 * Time: 16:02
 * To change this template use File | Settings | File Templates.
 */
var validated;
function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
    window.validated = false;
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}

function validate(form) {
    window.validated = true;
    var elems = form.elements;

    resetError(elems.name.parentNode);
    if (!elems.name.value) {
        showError(elems.name.parentNode, ' Enter your name!');
    }

    resetError(elems.password.parentNode);
    if (!elems.password.value) {
        showError(elems.password.parentNode, ' Type your password.');
    } else if (elems.password.value != elems.password2.value) {
        showError(elems.password.parentNode, ' Passwords do not match.');
    }

    resetError(elems.to.parentNode);
    if (!elems.to.value) {
        showError(elems.to.parentNode, ' Select to.');
    }

    resetError(elems.message.parentNode);
    if (!elems.message.value) {
        showError(elems.message.parentNode, ' Missed the text.');
    }

    if(window.validated) {
        document.forms.form.submit();
    }
}

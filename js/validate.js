/**
 * Created with JetBrains PhpStorm.
 * User: AdminA
 * Date: 19.01.16
 * Time: 16:02
 * To change this template use File | Settings | File Templates.
 */
function showError(container, errorMessage) {
    container.className = 'error-message';
    var msgElem = document.createElement('p');
    msgElem.className = "error";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);//after parrent
    // элемент-список UL
    var list = document.getElementById('error-message2')

// новый элемент
    var li = document.createElement('span')
    li.innerHTML = 'Новый элемент списка'

// добавление в конец
    list.appendChild(li)
}

function showError2(numberError, errorMessage) {
    var classForError = document.getElementsByClassName('error')[numberError];
    classForError.innerHTML = errorMessage;
}

function resetError2(numberError) {
    var classForError = document.getElementsByClassName('error')[numberError];
    classForError.innerHTML = '';
}



function resetError(container) {
//    container.className = '';
    if (container.lastChild.className == "error") {
        container.removeChild(container.lastChild);
    }
}

function validate(form) {

    var elems = form.elements;

//    resetError(elems.name.parentNode);

//    var url2 = elems.name.nextSibling;
//    alert(url2);
//    var a = elems.name.nextSibling;
//    alert(a);
//    var b = a.nextSibling;
//    alert(b);
//    var c = a.getElementsByTagName('p').innerHTML;
//    alert(c);
//    var tag2 = document.getElementsByTagName('p')[0].innerHTML;
//    alert(tag2);
    var numberError = 0;
    resetError2(numberError);
    if (!elems.name.value) {

        var errorMessage='Enter your name';
        showError2(numberError,errorMessage);
//        var div = document.getElementsByClassName('error')[0];
//        SummSumm='Enter your name';
//        div.innerHTML = SummSumm;
//        showError(elems.name.parentNode, ' Укажите от кого.');
//        console.log(elems.name.parentNode+'parentNode121');

    }

    numberError = 1;
    resetError2(numberError);
//    resetError(elems.email.parentNode);
    if (!elems.email.value) {
        errorMessage = 'Enter your e-mail';
        showError2(numberError, errorMessage);
    } else {
        var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
        var email = elems.email.value;
        if (!regex.test(email)) {
            errorMessage = 'Enter a valid email';
            showError2(numberError, errorMessage);
        }
    }

    // переделать пароль
    resetError(elems.password.parentNode);
    if (!elems.password.value) {
        showError(elems.password.parentNode, ' Укажите пароль.');
    } else if (elems.password.value != elems.password2.value) {
        showError(elems.password.parentNode, ' Пароли не совпадают.');
    }


//    resetError(elems.msg.parentNode);

    var numberError = 4;
    alert(elems.msg.value);
//    resetError2(numberError);
    if (!elems.msg.value) {

        var errorMessage='Enter your test';
        showError2(numberError,errorMessage);
    }
//    if (!elems.msg.value) {
//        showError(elems.msg.parentNode, ' Отсутствует текст.');
//    }

}
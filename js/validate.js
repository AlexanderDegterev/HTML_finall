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

function resetError(container) {
//    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}

function validate(form) {
    var elems = form.elements;

    resetError(elems.name.parentNode);
    if (!elems.name.value) {
        showError(elems.name.parentNode, ' Укажите от кого.');
        console.log(elems.name.parentNode+'parentNode121');

    }

    resetError(elems.password.parentNode);
    if (!elems.password.value) {
        showError(elems.password.parentNode, ' Укажите пароль.');
    } else if (elems.password.value != elems.password2.value) {
        showError(elems.password.parentNode, ' Пароли не совпадают.');
    }

//    resetError(elems.to.parentNode);
//    if (!elems.to.value) {
//        showError(elems.to.parentNode, ' Укажите, куда.');
//    }

    resetError(elems.msg.parentNode);
    if (!elems.msg.value) {
        showError(elems.msg.parentNode, ' Отсутствует текст.');
    }

}
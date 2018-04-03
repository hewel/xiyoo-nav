function isScrollEnd(el = Document.documentElement, dif = 50, func = Function) {
    if (el.scrollHeight <= el.scrollTop + el.clientHeight <= el.scrollHeight) {
        return func;
    }
}

function elSelect(elName) {
    let element = [];
    switch (typeof(elName)) {
        case 'object':
            element = elName;
            break;
        case 'string':
            if (elName[0] === '#' || elName[0] === '.') {
                element = elName[0] === '#' ? document.getElementById(elName) : document.getElementsByClassName(elName);
            } else {
                element = document.getElementsByTagName(elName);
            }
        default:
            break;
    }
    return element;
}
const workshop = {
    isScrollEnd,
    elSelect,
};
export default workshop;

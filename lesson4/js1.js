const remaster=(str) =>{
    let r = document.querySelector('.text-box__before-text').innerHTML;
    let a = document.querySelector('.text-box__after-text');
    return a.innerHTML = r.replace(/\B'|'\B/g, '"');
}

const remaster2=(str) =>{
    let r = document.querySelector('.text-box').innerHTML;
    let a = document.querySelector('.text-box2');
    return a.innerHTML = r.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
}



// menu-area

let openerHandler = function(event){
    let menuArea = document.querySelector('#menu-area');
    
    if(menuArea.classList.contains('openedMenu')){
        menuArea.classList.replace('openedMenu','closedMenu');
    }else{
        menuArea.classList.replace('closedMenu','openedMenu');
    }
}

document.querySelector('#menu-opener').addEventListener('click', openerHandler);
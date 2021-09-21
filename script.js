(function() {
        
    const stage = document.querySelector('.stage');
    
    const resetBtn = document.querySelector('.reset');


    // js 10. click and remove
    // 🦄classList.contains

    stage.addEventListener('click', clickHandler);

    function clickHandler(e) {
        if (e.target.classList.contains('poke')) {
            stage.removeChild(e.target);           
        }
    }

    //js  20. reset

    resetBtn.addEventListener("click",resetFun);

    function resetFun() {
        location.reload();           
    }            
})();
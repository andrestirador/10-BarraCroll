addEventListener('DOMContentLoaded', ()=>{
    // aplica cuando el documento carga

    const button__up = document.querySelector('#button__up');
    const scroll = document.querySelector('.scroll')

    // saber cuantos pixeles

    const pixeles__up =()=> document.documentElement.scrollTop || document.body.scrollTop

    // funcion para ir para arriba

    const go__up = () =>{
        if(pixeles__up() > 0){
            requestAnimationFrame(go__up);
            scrollTo(0,pixeles__up() - (pixeles__up()/20) )
        }
    }

    
    // animar barra scroll

    const scroll__indicator = () =>{
        if (pixeles__up() > 50) {
            button__up.className = 'show';
        } else {
            button__up.className = 'close';
        }

        let high = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let advance__scroll = ( pixeles__up() / high ) *100;
        scroll.style.width = `${advance__scroll}%`
    }

    button__up.addEventListener('click', go__up )
    window.addEventListener('scroll', scroll__indicator)

})


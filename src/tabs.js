export default class Tabs{
    constructor(idElemento){
        //console.log("inicializando tabs en:"+idElemento);
        this.tabs=document.getElementById(idElemento);
        this.nav=this.tabs.querySelector(".tabs");

        this.nav.addEventListener("click",(e)=>{
            // comprobamos que el elemento que clickeamos tenga la clase de tabs__link
            if([...e.target.classList].includes('tabs__button')){
                // obtenemos la tab que queremos mostrar
                const tab=e.target.dataset.tab;

                // quitamos la clase active de alguna otra tabs que la tenga
                if (this.tabs.querySelector('.tab--active')) {
                    this.tabs.querySelector('.tab--active').classList.remove('tab--active')
                }

                if (this.tabs.querySelector('.tabs__button--active')) {
                    this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active')
                }

                //console.log(tab);
                this.tabs.querySelector(`#${tab}`).classList.add('tab--active')

                e.target.classList.add('tabs__button--active')
            }
            
        })

    }
}
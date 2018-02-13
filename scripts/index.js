class NavigationBar {
    constructor() {
        this.listItems = Array.from(document.querySelectorAll('.primary-nav__item'));    
        this.secondaryListItems = Array.from(document.querySelectorAll('.secondary-nav__item'));
        this.listActiveItems = Array.from(document.querySelectorAll('.primary-nav__item-active'));    
        this.primaryNav = document.querySelector('.primary-nav');
        this.mainContentContainer = document.querySelector('.main-content__container');
        this.mainContainer = document.querySelector('.main-container');
        this.navHamburguerIcon = document.querySelector('input');
        this.addActiveClasses = this.addActiveClasses.bind(this);
        this.removeActiveClasses = this.removeActiveClasses.bind(this);
        this.activeItem = this.activeItem.bind(this);
        this.listItems.forEach(item => item.addEventListener('click', () => {
            this.addActiveClasses(item);
        }));

        this.secondaryListItems.forEach(item => item.addEventListener('click', () => {
            this.navHamburguerIcon.checked = false;
        }));
                
        this.navHamburguerIcon.addEventListener('click', () => { 
            this.mainContainer.classList.toggle('main-container__active-menu')
        });
        this.mainContentContainer.addEventListener('click', () => { 
            this.navHamburguerIcon.checked = false;
            this.removeActiveClasses();
        });
    }

    addActiveClasses(itemClicked) {
        const activeItem = this.activeItem();
        const hasActiveClass = itemClicked.getAttribute('class').includes('active');
        
        if(itemClicked.children.length > 1) {
            if(!hasActiveClass) {
                this.removeActiveClasses(activeItem);
                itemClicked.classList.add('primary-nav__item-active');
                itemClicked.children[0].classList.add('primary-nav__arrow-active');
                itemClicked.children[2].classList.add('secondary-nav-open__active');
                this.mainContentContainer.classList.add('main-content__container-menu-active');
                this.mainContainer.classList.add('main-container__active-menu');
            } else {
                this.removeActiveClasses(activeItem);
            }          
        } else {
            this.removeActiveClasses();
        }  
    }

    removeActiveClasses(item) {        
        if(item) {
            item.classList.remove('primary-nav__item-active');
            item.children[0].classList.remove('primary-nav__arrow-active');
            item.children[2].classList.remove('secondary-nav-open__active');
            this.mainContentContainer.classList.remove('main-content__container-menu-active');
            !this.navHamburguerIcon.checked && this.mainContainer.classList.remove('main-container__active-menu');
        } else {
            this.listItems.forEach(item => {
                if(item.children.length > 1) {
                    item.classList.remove('primary-nav__item-active');
                    item.children[0].classList.remove('primary-nav__arrow-active');
                    item.children[2].classList.remove('secondary-nav-open__active');
                    this.mainContentContainer.classList.remove('main-content__container-menu-active');
                    !this.navHamburguerIcon.checked && this.mainContainer.classList.remove('main-container__active-menu');   
                }
            })
        }
    }

    activeItem() {        
        const activeItem = this.listItems.find(item => {
            return item.classList.contains('primary-nav__item-active');
        });
        return activeItem;
    }
}

module.exports = NavigationBar;
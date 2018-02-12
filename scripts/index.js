class NavigationBar {
    constructor() {
        this.listItems = Array.from(document.querySelectorAll('.primary-nav__item'));    
        this.listActiveItems = Array.from(document.querySelectorAll('.primary-nav__item-active'));    
        this.mainContentContainer = document.querySelector('.main-content__container');
        this.desktopImageContainer = document.querySelector('.desktop-image__container');
        this.addActiveClasses = this.addActiveClasses.bind(this);
        this.removeActiveClasses = this.removeActiveClasses.bind(this);
        this.activeItem = this.activeItem.bind(this);
        this.listItems.forEach(item => item.addEventListener('click', () => {
            this.addActiveClasses(item);
        }));
        this.mainContentContainer.addEventListener('click', () => { this.removeActiveClasses() });
    }

    addActiveClasses(itemClicked) {
        const activeItem = this.activeItem();
        const hasActiveClass = itemClicked.getAttribute('class').includes('active');
        
        if(itemClicked.children.length > 1) {
            if(!hasActiveClass) {
                this.removeActiveClasses(activeItem);
                itemClicked.classList.add('primary-nav__item-active')
                itemClicked.children[1].classList.add('secondary-nav-open__active');
                this.mainContentContainer.classList.add('main-content__container-menu-active');
                this.desktopImageContainer.classList.add('desktop-image__container-menu-active');
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
            item.children[1].classList.remove('secondary-nav-open__active');
            this.mainContentContainer.classList.remove('main-content__container-menu-active');
            this.desktopImageContainer.classList.remove('desktop-image__container-menu-active');
        } else {
            this.listItems.forEach(item => {
                if(item.children.length > 1) {
                    item.classList.remove('primary-nav__item-active');
                    item.children[1].classList.remove('secondary-nav-open__active');
                    this.mainContentContainer.classList.remove('main-content__container-menu-active');
                    this.desktopImageContainer.classList.remove('desktop-image__container-menu-active');
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

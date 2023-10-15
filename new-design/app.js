window.addEventListener('load', ()=>{

    let QueryStackApp = {
        hamburgerMenuStatus: false,
        hamburger: document.querySelector('.hamburger'),
        hamburgerMenu: document.querySelector('.left'),
        getHamburgerMenu(e){
            e.preventDefault();
            if(!QueryStackApp.hamburgerMenuStatus){
                QueryStackApp.hamburgerMenu.style.display = 'flex';
                QueryStackApp.hamburgerMenu.style.animation = 'left-in 200ms ease-in-out forwards';
                QueryStackApp.hamburgerMenuStatus = true;
                document.querySelector('.hamburger').ariaExpanded = true;
            }else{
                QueryStackApp.hamburgerMenu.style.animation = 'left-out 200ms ease-in-out forwards';
                QueryStackApp.hamburgerMenuStatus = false;
                document.querySelector('.hamburger').ariaExpanded = false;
            }
        }
    }
    
    QueryStackApp.hamburger.addEventListener('click',QueryStackApp.getHamburgerMenu)

});




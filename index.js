
    let menu = document.querySelector('.menu');
    let ul = document.querySelector('.ul');
    let nav = document.querySelector('nav');

    let container = document.querySelector('.container');
    let hamMenu = false;
    let body = document.body;

    function clickHandler() {
      hamMenu = !hamMenu
      if (hamMenu && menu) {
        menu.src = "./assets/images/icon-menu-close.svg"
        ul.classList.add("mobile-menu")
        ul.style.transform = "translateX(0)"
        nav.style.backgroundColor = "hsl(233, 8%, 79%)"
        menu.style.zIndex = 999
        body.style.backgroundColor = "hsl(233, 8%, 79%)"


      } else if (!hamMenu) {
        menu.src = "./assets/images/icon-menu.svg"
        ul.classList.remove("mobile-menu")
        body.style.backgroundColor = "white"
        nav.style.backgroundColor = "white"
     
      }

    }
    function handleResize() {
      let windowWidth = window.innerWidth;
      if (windowWidth > 500) {
        body.style.backgroundColor = "white"
        nav.style.backgroundColor = "white"
      } else if (windowWidth < 767 && hamMenu) {
        ul.classList.remove("mobile-menu")
        menu.src = "./assets/images/icon-menu.svg"
      }
    }


    window.addEventListener('resize', handleResize);



    menu.addEventListener('click', clickHandler)


window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logo-img').addEventListener('click', function() {
        location.reload();
    });
    document.getElementById('menu-icon').addEventListener('click', menu);
    menuIt();
});

function menu() {
    const icon = document.getElementById('menu-icon');
    const list = document.getElementById('menu-list');
    const computedStyle = window.getComputedStyle(list);

    if (computedStyle.visibility === 'hidden') {
        icon.style.animation = "rotateLeft 0.1s ease-in-out forwards";
        list.style.visibility = 'visible';
        list.style.animation = "growX 0.1s ease-in-out forwards";
    } else {
        icon.style.animation = "rotateRight 0.1s ease-in-out forwards";
        list.style.animation = "shrinkX 0.1s ease-in-out forwards";
        setTimeout(function() {
            list.style.visibility = 'hidden'; 
        }, 100);
    }
}

function menuIt() {
    const menuItems = document.getElementsByClassName('menu-item');
    
    menuItems[0].addEventListener('click', scrollToTop);
    
    for (let i = 1; i < menuItems.length - 1; i++) {
      menuItems[i].addEventListener('click', scrolling);
      menuItems[i].querySelector('i').addEventListener('click', scrolling);
      menuItems[i].querySelector('p').addEventListener('click', scrolling);
    }

    menuItems[menuItems.length - 1].addEventListener('click', function() {
        location.reload();
    })

    function scrolling(event) {
      const target = event.target.closest('.menu-item');
      document.getElementById(target.getAttribute('data-target')).scrollIntoView({ behavior: 'smooth' });
    }
  
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
window.addEventListener('beforeunload', function() {window.scrollTo(0, 0);});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logo-img').addEventListener('click', function() {location.reload();});
    document.getElementById('menu-icon').addEventListener('click', menu);
    scrollIt();
});

function menu() {
    var icon = document.getElementById('menu-icon');
    var list = document.getElementById('menu');
    var computedStyle = window.getComputedStyle(list);
  
    if (computedStyle.visibility === "hidden") {
        icon.style.animation = "rotateRight 0.2s ease-in-out forwards";
        list.style.visibility = "visible";
        list.style.transformOrigin = "top center";
        list.style.animation = "growDown 0.2s ease-in-out forwards";
        setTimeout(function() {
            list.style.transition = "right 0.2s";
            list.style.right = "-10px"
        }, 250);
    } else {
        icon.style.animation = "rotateLeft 0.2s ease-in-out forwards";
        list.style.transition = "right 0.2s";
        list.style.right = "-195px"
        setTimeout(function() {
            list.style.animation = "shrinkUp 0.2s ease-in-out forwards";
            list.style.transformOrigin = "top center";
            setTimeout(function() {list.style.visibility = "hidden";}, 200)
        }, 250);
    }
}

function scrollIt() {
    const menuItems = document.getElementsByClassName('menu-item');
    
    menuItems[0].addEventListener('click', scrollToTop);
    
    for (let i = 1; i < menuItems.length - 2; i++) {
      menuItems[i].addEventListener('click', scrolling);
      menuItems[i].querySelector('i').addEventListener('click', scrolling);
      menuItems[i].querySelector('p').addEventListener('click', scrolling);
    }
  
    function scrolling(event) {
      const target = event.target.closest('.menu-item');
      document.getElementById(target.getAttribute('data-target')).scrollIntoView({ behavior: 'smooth' });
    }
  
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}  

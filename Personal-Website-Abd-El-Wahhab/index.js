

// =====================services toggle==================



const servicesButtons = document.querySelectorAll('.services__item')
const serviceDetails = document.querySelector('.services__right')

const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    serviceDetails.innerHTML = `<h3>${details.title}</h3>
    ${details.description.map(paragraph => "<p>"+paragraph + "</p>").join('')}`
}

const removeActiveClass = () => {
    servicesButtons.forEach(button => {button.classList.remove('active');}
)
}

servicesButtons.forEach( item => {item.addEventListener('click' , () => {
    removeActiveClass();
    const serviceClass = item.classList[1];
    getService(serviceClass)
    item.classList.add('active')
    
})})

getService('frontend')//to load front as defult when loading the function









// ===================== mix it up ==================



const containerEl = document.querySelector('.projects__container')

var mixer = mixitup(containerEl, {
    animation: {

        enable:false

    }
});

mixer.filter('*');//bydeafult call them all





// ===================== swiper(testimonial) ==================




const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    spaceBetween:30,

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    
    breakpoints: {
        '600': {
            slidesPerView:2
        },
        '1024': {
            slidesPerView:3
        }
    }
}
);



// ===================nav toggle small screens================

const navMenu = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navCloseBtn = document.querySelector('.nav__toggle-close')

const openNavHandler = () => {
    navMenu.style.display = 'flex';//????
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}
const closeNavHandler = () => {
    navMenu.style.display = 'none';//????
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click',openNavHandler)
navCloseBtn.addEventListener('click',closeNavHandler)

//close nav menu on clik on small screens

const navItems = navMenu.querySelectorAll('a');

if(window.innerWidth < 768){
    navItems.forEach(item => item.addEventListener('click', closeNavHandler))
}


//============================darkMode=================================



const themeBtn = document.querySelector('.nav__theme-btn');

themeBtn.addEventListener('click',() => {

    let bodyClass = document.body.className;

    if(!bodyClass){
        bodyClass = 'dark';
        document.body.className = bodyClass;
        //change the icon 
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>"
        //save theme to local storge 
        window.localStorage.setItem('theme',bodyClass)
    } else{
        bodyClass = '';
        document.body.className = bodyClass;
        //change the theme icon
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
        //save theme to local storge 
        window.localStorage.setItem('theme',bodyClass)
    }
})

//load theme on new open for the site
window.addEventListener('load',() => {
    document.body.className = window.localStorage.getItem('theme');
}
)







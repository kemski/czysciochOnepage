function validation() {
    const form = document.querySelector('.form-e-mail');
    const mail = document.querySelector('.emailInput').value;
    const validationText = document.querySelector('.validationText')
    const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    // ^[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{1,4}[^\\S]+$
    //^[^ ]+@[^ ]+\.[a-z]{2,4}$
    if (mail.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        validationText.innerHTML = "Twój adres e-mail jest prawidłowy";
        validationText.style.color = "#00ff00";


    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        validationText.innerHTML = "Twój adres e-mail jest nieprawidłowy";
        validationText.style.color = "#ff0000";
    }

    if (mail == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        validationText.innerHTML = "";
    }
}


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.topNav')
    const moveImage = document.querySelector('.image');
    const moveAboutUs = document.querySelector('.aboutUs');
    const navLinks = document.querySelectorAll('.topNav ul li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('topNav-active');
        moveAboutUs.classList.toggle('moveDownAboutUs');
        moveImage.classList.toggle('moveDownImage');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7+0.5}s`;
                console.log(index / 7);
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();
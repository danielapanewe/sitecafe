header = document.querySelector('header');

window.onscroll = () => {
    this.scrollY > 50
        ? header.classList.add('sticky')
        : header.classList.remove('sticky');
};

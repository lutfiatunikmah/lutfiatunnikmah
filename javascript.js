document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventLidtener('click', function(e) {
        e.preventDefault();

        DocumentFragment.querySelector(this.getAttribute('href')).scrollintoView({
            behavior: 'smmoth'
        });
    });
});
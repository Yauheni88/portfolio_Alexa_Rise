const tabs = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabs.forEach(function(item) {
    item.addEventListener('click', function() {
        tabs.forEach(function(item) {
            item.classList.remove('portfolio-active');
        })
        this.classList.add('portfolio-active');
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBoxes.forEach(function(item) {
            item.classList.add('tab-hidden');
        })
        contentBox.classList.remove('tab-hidden');
    })
})


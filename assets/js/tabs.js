const tabs = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabs.forEach(function(item) {
    item.addEventListener('click', function() {
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBoxes.forEach(function(item) {
            item.classList.add('tab-hidden');
        })
        contentBox.classList.remove('tab-hidden');
    })
})


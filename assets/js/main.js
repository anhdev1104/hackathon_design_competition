document.addEventListener('DOMContentLoaded', () => {
    const tabsMenu = document.querySelectorAll('.menu-title');
    const productItem = document.querySelectorAll('.product-list');

    tabsMenu.forEach((tab, index) => {
        const product = productItem[index];
        tab.addEventListener('click', function () {
            document.querySelector('.menu-title.active').classList.remove('active');
            document.querySelector('.product-list.active').classList.remove('active');

            this.classList.add('active');
            product.classList.add('active');
        });
    });
});

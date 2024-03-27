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

    // navbar overlay
    const barsIcon = document.querySelector('#navbar-icon');
    const barsClose = document.querySelector('.navbar-close');
    const barsModal = document.querySelector('.navbar-mobile');
    const overLay = document.querySelector('#overlay');

    function openModal() {
        overLay.style.display = 'block';
        barsModal.style.display = 'flex';
        barsModal.style.opacity = '1';
        barsModal.style.transform = 'translateX(0%)';
    }

    function closeModal() {
        barsModal.style.transform = 'translateX(100%)';
        barsModal.style.opacity = '0';
        overLay.style.display = 'none';
    }

    function closeOverLine() {
        overLay.style.display = 'none';
        barsModal.style.opacity = '0';
        barsModal.style.transform = 'translateX(100%)';
    }

    barsIcon?.addEventListener('click', openModal);
    overLay?.addEventListener('click', closeOverLine);
    barsClose?.addEventListener('click', closeModal);
});

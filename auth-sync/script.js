checkDeviceSize();
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    checkDeviceSize()
});

function checkDeviceSize () {
    if (window.innerWidth < 768) {
        setTimeout(() => {
            sidebar.classList.add('toggle-sidebar');
        },100)
       
    } else {
        sidebar.classList.remove('toggle-sidebar');
    }
}

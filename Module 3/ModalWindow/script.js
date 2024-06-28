document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    document.getElementById('openModalBtn').onclick = function() {
        modal.style.display = 'block';
    };
    document.getElementById('closeModalBtn').onclick = function() {
        modal.style.display = 'none';
    };
    document.getElementsByClassName('closeBtn')[0].onclick = function() {
        modal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === modal) modal.style.display = 'none';
    }
});
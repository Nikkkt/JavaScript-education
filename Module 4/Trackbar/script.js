document.addEventListener('DOMContentLoaded', function() {
    const trackSlider = document.getElementById('trackRange');

    trackSlider.addEventListener('input', function() {
        console.log(trackSlider.value);
    });
});
function toggleList() {
    var selection = document.querySelector('.tutorial-selection');
    var list = document.getElementById('tutorialsList');
    var btn = document.getElementById('mobile-toggle');
    
    if (window.innerWidth <= 768) { // if mobile view
        if (selection.style.display === 'none' || selection.style.display === '') {
            selection.style.display = 'block';
            list.classList.remove('collapsed');
            btn.style.display = 'none';
        } else {
            selection.style.display = 'none';
            btn.style.display = 'block';
        }
    } else { // if desktop view
        list.classList.toggle('collapsed');
    }
}
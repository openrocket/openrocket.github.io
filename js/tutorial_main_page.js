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

function filterTutorials() {
    const checkedDifficulties = Array.from(document.querySelectorAll('.difficulty-filter input[type="checkbox"]:checked')).map(input => input.value);

    // Update the appearance of the filter buttons based on checkbox state
    document.querySelectorAll('.difficulty-filter input[type="checkbox"]').forEach(checkbox => {
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (checkbox.checked) {
            label.classList.add('checked');
        } else {
            label.classList.remove('checked');
        }
    });

    document.querySelectorAll('.tutorial-tile').forEach(tile => {
        const difficultyElement = tile.querySelector('.tutorial-difficulty');
        if (!difficultyElement) return; // Skip tiles without a valid difficulty

        if (checkedDifficulties.length === 0 || checkedDifficulties.includes(difficultyElement.textContent.trim())) {
            tile.style.display = 'block'; // Consider using 'block' if 'flex' is causing issues
        } else {
            tile.style.display = 'none';
        }
    });
}

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

/**
 * Filters the tutorial tiles based on the selected difficulty checkboxes.
 * It will hide tiles that do not match the checked difficulties.
 */
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
            tile.style.display = 'flex';
        } else {
            tile.style.display = 'none';
        }
    });

    // Re-align the tiles
    alignTitles();
    adjustTileHeights();
}

/**
 * Aligns the titles of tutorial tiles so that all titles in each flex row have the same height.
 * This is necessary because flex items in a row may have titles of different heights,
 * leading to an uneven and possibly less visually pleasing layout.
 */
function alignTitles() {
    // Reset all title heights to default to get the natural height
    document.querySelectorAll('.tutorial-title h3').forEach(title => {
        title.style.height = '';
    });

    // Group tiles into rows based on their top offset
    const rows = new Map();
    document.querySelectorAll('.tutorial-tile').forEach(tile => {
        // Only consider visible tiles
        if (tile.style.display !== 'none') {
            const topOffset = tile.getBoundingClientRect().top;
            if (!rows.has(topOffset)) {
                rows.set(topOffset, []);
            }
            rows.get(topOffset).push(tile);
        }
    });

    // Set all titles in each row to the height of the tallest title
    for (const [topOffset, tiles] of rows.entries()) {
        const maxTitleHeight = Math.max(...tiles.map(tile => {
            const title = tile.querySelector('.tutorial-title h3');
            return title.clientHeight;
        }));
        tiles.forEach(tile => {
            const title = tile.querySelector('.tutorial-title h3');
            title.style.height = `${maxTitleHeight}px`;
        });
    }
}

/**
 * Adjusts the heights of the tutorial tiles so that all tiles in the same row are the same height.
 * This function ensures that all flex items in a row have a consistent height, which improves
 * the visual alignment and coherence of the grid layout, especially when content varies in size.
 * 
 * We need to do this instead of using flexbox's align-items: stretch because otherwise we can't align
 * the titles to each other. It's a really complicated process...
 */
function adjustTileHeights() {
    // Reset all tiles to their natural height first
    document.querySelectorAll('.tutorial-tile').forEach(tile => {
        tile.style.height = '';
    });

    // Group tiles into rows based on their top offset
    const rows = new Map();
    document.querySelectorAll('.tutorial-tile').forEach(tile => {
        const topOffset = tile.getBoundingClientRect().top;
        if (!rows.has(topOffset)) {
            rows.set(topOffset, []);
        }
        rows.get(topOffset).push(tile);
    });

    // Set all tiles in each row to the height of the tallest tile
    for (const [topOffset, tiles] of rows.entries()) {
        const maxHeight = Math.max(...tiles.map(tile => tile.clientHeight));
        tiles.forEach(tile => {
            tile.style.height = `${maxHeight}px`;
        });
    }
}

// Run the function on document ready and on window resize
$(document).ready(function() {
    filterTutorials(); // Make sure initial filter state is set correctly
});

// Attach event handlers without overwriting
$(window).on('resize', function() {
    alignTitles();
    adjustTileHeights(); // Again, ensure this function is defined and works as expected
});
(function () {
  'use strict';

  var STORAGE_KEY   = 'or-theme';
  var DARK_CLASS    = 'dark-mode';
  var ANIM_CLASS    = 'theme-transitioning';
  var ANIM_DURATION = 400; // ms – matches the CSS transition duration

  function getPreference() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme silently (no animation) – used on page load to prevent flash
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }

  // Toggle with animation
  function toggleTheme() {
    var html  = document.documentElement;
    var isDark = html.classList.contains(DARK_CLASS);
    var next   = isDark ? 'light' : 'dark';

    // Enable transitions for the duration of the theme change
    html.classList.add(ANIM_CLASS);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);

    // Remove animation class once transition completes
    setTimeout(function () {
      html.classList.remove(ANIM_CLASS);
    }, ANIM_DURATION);
  }

  // Called inline in <head> – applies saved theme before first paint (no animation)
  window.initTheme = function () {
    applyTheme(getPreference());
  };

  // Wire up the toggle button after DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });
}());

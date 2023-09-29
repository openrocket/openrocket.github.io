---
layout: default
title: Tutorials
permalink: /tutorials/
---

<!-- Introduction -->
<div class="tutorial-introduction">
  <h1>Welcome to Our Tutorials!</h1>
  <p>Here you'll find a curated list of tutorials to help you <b>master OpenRocket</b>. <br>Whether you're just starting our, or looking to refine your knowledge, there's something here for everyone. Dive in and happy learning! 😊🚀</p>
</div>

<hr style="width: 80%">

<div class="tutorial-container">
  <!-- Tutorial content -->
  <div class="tutorials">
    {% assign sorted_tutorials = site.tutorials | sort: "date" | reverse %}
    {% for tutorial in sorted_tutorials %}
      <a href="{{ tutorial.url }}" class="tutorial-tile">
            {% if tutorial.thumbnail %}
                <div class="tutorial-thumbnail">
                    <img src="{{ tutorial.thumbnail }}" alt="{{ tutorial.title }}">
                </div>
            {% endif %}
            <div class="tutorial-title">
                <h3>{{ tutorial.title }}</h3>
            </div>
            <div class="filler" style="flex-grow: 1;"></div>
            <div class="tutorial-date">{{ tutorial.date | date: "%B %d, %Y" }}</div>
      </a>
    {% endfor %}
  </div>

  <!-- Sidebar with expandable/collapsible list -->
  <div class="tutorial-selection">
    <div class="toggle-list">
      <div class="toggle-header" onclick="toggleList()">
        Tutorials List ▼
      </div>
      <ul id="tutorialsList" class="collapsed">
        {% for tutorial in site.tutorials %}
          <li><a href="{{ tutorial.url }}">{{ tutorial.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>

<script>
  function toggleList() {
    var list = document.getElementById('tutorialsList');
    list.classList.toggle('collapsed');
  }
</script>
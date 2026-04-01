(function () {
  'use strict';

  var loadingMessages = Array.isArray(window.aiAnalyzerLoadingMessages) &&
    window.aiAnalyzerLoadingMessages.length
      ? window.aiAnalyzerLoadingMessages
      : ['Parsing fin geometry...'];

  var analysisResults = Array.isArray(window.aiAnalyzerResults) &&
    window.aiAnalyzerResults.length
      ? window.aiAnalyzerResults
      : [{ title: 'Analysis complete:', lines: ['Yes, this is definitely a rocket.'] }];

  var initialLoadingMessage = loadingMessages[0];
  var statusSwapMs = 140;
  var statusDisplayMs = 3000;
  var resultDelayMs = 500;
  var lastResultIndex = -1;
  var activeRunId = 0;
  var pendingFile = null;

  function clearChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function chooseResult() {
    var nextIndex = Math.floor(Math.random() * analysisResults.length);

    if (analysisResults.length > 1 && nextIndex === lastResultIndex) {
      nextIndex = (nextIndex + 1) % analysisResults.length;
    }

    lastResultIndex = nextIndex;
    return analysisResults[nextIndex];
  }

  document.addEventListener('DOMContentLoaded', function () {
    var fileInput = document.getElementById('ork-file-input');

    if (!fileInput) {
      return;
    }

    var uploadZone = document.getElementById('ai-upload-zone');
    var selectedFile = document.getElementById('ai-selected-file');
    var analyzeActions = document.getElementById('ai-analyze-actions');
    var analyzeButton = document.getElementById('ai-analyze-button');
    var analysisPanel = document.getElementById('ai-analysis-panel');
    var progressBar = document.getElementById('ai-progress-bar');
    var loadingText = document.getElementById('ai-loading-text');
    var resultPanel = document.getElementById('ai-result-panel');
    var resultFile = document.getElementById('ai-result-file');
    var resultTitle = document.getElementById('ai-result-title');
    var resultBody = document.getElementById('ai-result-body');
    var resetButton = document.getElementById('ai-reset-button');

    function resetState() {
      activeRunId += 1;
      pendingFile = null;
      fileInput.value = '';
      selectedFile.textContent = 'No file selected yet.';
      analyzeActions.hidden = true;
      analysisPanel.hidden = true;
      resultPanel.hidden = true;
      progressBar.style.width = '0%';
      loadingText.textContent = initialLoadingMessage;
      loadingText.classList.remove('is-swapping');
      clearChildren(resultBody);
      resultTitle.textContent = '';
      resultFile.textContent = '';
    }

    function clearDragState() {
      uploadZone.classList.remove('is-dragging');
    }

    function handleFile(file) {
      activeRunId += 1;

      if (!file) {
        return;
      }

      if (!/\.ork$/i.test(file.name)) {
        pendingFile = null;
        clearDragState();
        analyzeActions.hidden = true;
        analysisPanel.hidden = true;
        resultPanel.hidden = true;
        progressBar.style.width = '0%';
        loadingText.textContent = initialLoadingMessage;
        loadingText.classList.remove('is-swapping');
        selectedFile.textContent = 'That does not look like a .ork file. Even our AI has limits.';
        return;
      }

      pendingFile = file;
      clearDragState();
      selectedFile.textContent = 'Selected file: ' + file.name;
      analyzeActions.hidden = false;
      analysisPanel.hidden = true;
      resultPanel.hidden = true;
      progressBar.style.width = '0%';
      loadingText.textContent = initialLoadingMessage;
      loadingText.classList.remove('is-swapping');
      clearChildren(resultBody);
      resultTitle.textContent = '';
      resultFile.textContent = '';
    }

    function renderResult(fileName) {
      var result = chooseResult();

      resultFile.textContent = 'Analyzed file: ' + fileName;
      resultTitle.textContent = result.title;
      clearChildren(resultBody);

      result.lines.forEach(function (line) {
        var paragraph = document.createElement('p');
        paragraph.textContent = line;
        resultBody.appendChild(paragraph);
      });

      analysisPanel.hidden = true;
      resultPanel.hidden = false;
    }

    function startAnalysis(file) {
      var runId = activeRunId + 1;
      var index = 0;

      activeRunId = runId;
      analyzeActions.hidden = true;
      resultPanel.hidden = true;
      clearChildren(resultBody);
      analysisPanel.hidden = false;
      progressBar.style.width = '0%';
      loadingText.textContent = initialLoadingMessage;
      loadingText.classList.remove('is-swapping');

      function advance() {
        if (runId !== activeRunId) {
          return;
        }

        if (index >= loadingMessages.length) {
          window.setTimeout(function () {
            if (runId !== activeRunId) {
              return;
            }
            renderResult(file.name);
          }, resultDelayMs);

          return;
        }

        loadingText.classList.add('is-swapping');

        window.setTimeout(function () {
          if (runId !== activeRunId) {
            return;
          }

          loadingText.textContent = loadingMessages[index];
          loadingText.classList.remove('is-swapping');
          progressBar.style.width = (((index + 1) / loadingMessages.length) * 100) + '%';
          index += 1;

          window.setTimeout(advance, statusDisplayMs);
        }, statusSwapMs);
      }

      advance();
    }

    fileInput.addEventListener('change', function (event) {
      var file = event.target.files && event.target.files[0];

      handleFile(file);
    });

    uploadZone.addEventListener('dragenter', function (event) {
      event.preventDefault();
      uploadZone.classList.add('is-dragging');
    });

    uploadZone.addEventListener('dragover', function (event) {
      event.preventDefault();
      uploadZone.classList.add('is-dragging');
    });

    uploadZone.addEventListener('dragleave', function (event) {
      if (!uploadZone.contains(event.relatedTarget)) {
        clearDragState();
      }
    });

    uploadZone.addEventListener('drop', function (event) {
      var files;

      event.preventDefault();
      files = event.dataTransfer && event.dataTransfer.files;

      clearDragState();
      handleFile(files && files[0]);
    });

    analyzeButton.addEventListener('click', function () {
      if (!pendingFile) {
        return;
      }

      startAnalysis(pendingFile);
    });

    resetButton.addEventListener('click', resetState);
  });
}());

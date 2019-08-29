<template>
  <div class="reveal" id="app">
    <div class="slides">
      <section data-markdown="slides/index.md" data-separator="^---" data-vertical="^\n\n"></section>
    </div>
  </div>
</template>

<script>
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/white.css';
import 'reveal.js/lib/css/zenburn.css';
import Reveal from 'reveal.js/js/reveal';
import hljs from 'highlight.js/lib/index';

import(/* webpackChunkName: "reveal-marked" */ "reveal.js/plugin/markdown/marked.js")
import(/* webpackChunkName: "reveal-markdown" */ "reveal.js/plugin/markdown/markdown.js")
import(/* webpackChunkName: "highlight" */ "./plugins/highlight")

export default {
  name: 'app',
  mounted() {
    window.Reveal = Reveal;
    window.hljs = hljs;
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      overview: true,
      dependencies: [
        { src: "js/reveal-marked.js", condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: "js/reveal-markdown.js", condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: "js/highlight.js", async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
      ]
    });
  }
}
</script>

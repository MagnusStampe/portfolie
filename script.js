"use strict";
document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init()");

  const articleOverlays = document.querySelectorAll(
    "#examples article .article_overlay"
  );
  const articleArrows = document.querySelectorAll(
    "#examples article .article_bottom"
  );
  console.log(articleOverlays);
  console.log(articleArrows);

  articleOverlays.forEach(article => {
    article.addEventListener("click", articleClicked);
  });

  articleArrows.forEach(article => {
    article.addEventListener("click", articleClose);
  });

  function articleClicked() {
    if (!this.parentNode.classList.value.includes("show")) {
      console.log(this.classList.value);

      articleOverlays.forEach(article => {
        article.parentNode.classList.remove("show");
      });

      this.parentNode.classList.add("show");
    }
  }

  function articleClose() {
    if (this.parentNode.classList.value.includes("show")) {
      console.log("close");
      this.parentNode.classList.remove("show");
    } else if (!this.parentNode.classList.value.includes("show")) {
      console.log(this.classList.value);

      articleOverlays.forEach(article => {
        article.parentNode.classList.remove("show");
      });

      this.parentNode.classList.add("show");
    }
  }
}

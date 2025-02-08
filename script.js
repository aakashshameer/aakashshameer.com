console.clear();

const wordContainerEl = document.querySelector("[data-word]");
const word = wordContainerEl.getAttribute("data-word");
const wordRepeatTimes = wordContainerEl.getAttribute("data-word-repeat");
const textColorsArray = wordContainerEl.getAttribute("data-text-colors").split(",");

for (let i = 0; i < wordRepeatTimes; i++) {
    const wordEl = document.createElement("span");
    wordEl.className = "word";
    wordEl.style.setProperty("--word-index", i);
    wordEl.style.setProperty("--color", textColorsArray[i]);
    for (let j = 0; j < word.length; j++) {
        const charEl = document.createElement("span");
        charEl.className = "char";
        charEl.style.setProperty("--char-index", j);
        charEl.innerHTML = word[j];
        wordEl.appendChild(charEl);
    }
    wordContainerEl.appendChild(wordEl);
}
document.addEventListener('DOMContentLoaded', () => {
    const small = document.querySelector('.small');
    const medium = document.querySelector('.medium');
    
    new CircleType(small);
    new CircleType(medium);
    
    const coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

(function (document) {
    const markers = [...document.querySelectorAll('mark')];
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.8
    });
    
    markers.forEach(mark => {
      observer.observe(mark);
    });
})(document);

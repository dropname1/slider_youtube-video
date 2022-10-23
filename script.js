let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slider = document.querySelector(".showArea");
let pos = 0


next.addEventListener('click',()=> {
  slider.classList.add("animation")
  setTimeout(()=> {
    slider.classList.remove("animation");
  },500)
  pos += 533
  if (pos > (533 * 2)) {
    pos = 0
  }
  slider.style.right = pos + "px";
})
prev.addEventListener('click',()=> {
  slider.classList.add("animation")
  setTimeout(()=> {
    slider.classList.remove("animation");
  },500)
  pos -= 533
  if (pos < -1) {
    pos = 533 * 2
  }
  slider.style.right = pos + "px";
})
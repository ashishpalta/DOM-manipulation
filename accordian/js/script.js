const accordian = document.getElementsByClassName("contentContainer");

for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    console.log(this);
    this.classList.toggle("active");
  });
}

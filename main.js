

 const inputs = document.querySelectorAll(".input")

 function focusFunc() {
   let parent = this.parentNode;
   parent.classList.add("focus");
 }


 function blurFunc() {
   let parent = this.parentNode;
   if(this.value == ""){
   parent.classList.remove("focus");
   }
 }

 inputs.forEach((input) => {
   input.addEventListener("focus", focusFunc);
   input.addEventListener("blur", blurFunc);
 })


 const counters = document.querySelectorAll('.counter');
  const speed = 100;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target + (target >= 1000 ? "+" : "+");
      }
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCount();
        }
      });
       }, { threshold: 0.5 });

    observer.observe(counter);
  });


  
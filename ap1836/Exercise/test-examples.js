const birds = document.querySelectorAll("li");
console.log(birds);

for (const bird of birds) {
  if (bird.matches(".endangered")) {
    console.log(`The ${bird.textContent} is endangered!`);
  }
}

const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;

function changeQuestion(){
  const nextBtns = document.querySelectorAll('.next-question');
  const previousBtns = document.querySelectorAll('.previous-question');
  
  nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      sections[currentSectionIndex].style.display = 'none';
      currentSectionIndex++;
      if (currentSectionIndex >= sections.length) {
        currentSectionIndex = 0;
      }
      sections[currentSectionIndex].style.display = 'block';  
    });
  });

  previousBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      sections[currentSectionIndex].style.display = 'none';
      currentSectionIndex--;
      if (currentSectionIndex < 0) {
        currentSectionIndex = sections.length - 1;
      }
      sections[currentSectionIndex].style.display = 'block';  
    });
  });
}

changeQuestion();

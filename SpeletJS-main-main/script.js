// Get  to DOM elements
const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user_result img');
const cpuResult = document.querySelector('.cpu_result img');
const result = document.querySelector('.result');
const optionImages = document.querySelectorAll('.option_image');
const sweFlag = document.getElementById('swe');
const engFlag = document.getElementById('eng');


sweFlag.addEventListener('click', () =>{


  sweFlag.classList.add('active');
  engFlag.classList.remove('active');
  console.log('SweFlag');
})

engFlag.addEventListener('click', () =>{

  engFlag.classList.add('active');
  sweFlag.classList.remove('active');
  console.log('engFlag');
});

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener('click', (e) => {
    image.classList.add('active');
    if(sweFlag.classList.contains('active')){
      result.textContent = 'Vänta........';
    }else{

      result.textContent = 'Wait........';
    }
    
    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      if (index !== index2) {
        image2.classList.remove('active');
      }
    });

    gameContainer.classList.add('start');

    // Set a timeout to delay the result calculation
    setTimeout(() => {
      gameContainer.classList.remove('start');

      // Get the source of the clicked option image
      const imageSrc = e.target.querySelector('img').src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      const randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      const cpuImages = ['img/rock.png', 'img/paper.png', 'img/scissors.png'];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      const cpuValue = ['R', 'P', 'S'][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      const userValue = ['R', 'P', 'S'][index];

      // Create an object with all possible outcomes
      const outcomes = {
        RR: 'Draw',
        RP: 'Cpu',
        RS: 'User',
        PP: 'Draw',
        PR: 'User',
        PS: 'Cpu',
        SS: 'Draw',
        SR: 'Cpu',
        SP: 'User',
      };
      const utfall = {
        RR: 'Oavgjort',
        RP: 'Datorn',
        RS: 'Du',
        PP: 'Oavgjort',
        PR: 'Du',
        PS: 'Datorn',
        SS: 'Oavgjort',
        SR: 'Datorn',
        SP: 'Du',
      };

      // Look up the outcome value based on user and CPU options
      let outComeValueEng = outcomes[userValue + cpuValue];
      let outComeValueSwe = utfall[userValue + cpuValue];

      // Display the result
      if(sweFlag.classList.contains('active')){
        result.textContent = userValue === cpuValue ? 'Oavgjort' : `${outComeValueSwe} vann!!`;
        utfall[userValue + cpuValue];
      }else{

        result.textContent = userValue === cpuValue ? 'Match Draw' : `${outComeValueEng} won!!`;
        outcomes[userValue + cpuValue];
      }
      }, 2500);
  });
});

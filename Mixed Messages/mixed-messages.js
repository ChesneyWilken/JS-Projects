  // create an object with 3 sections that stay the same
  const horoscope = {
    planet: [
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
    ],
    fortune: [
      "great luck",
      "good luck",
      "average luck",
      "bad luck",
      "terrible luck",
    ],
    advice: [
      "stay in",
      "go out for food",
      "go out for drinks",
      "play games",
      "seek a mechanic",
      "read a book",
    ],
  };

  // generate a random number

const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
  };
  
  
  // array to store horoscope output
  
  let yourFortune = [];
  
  // create a function with a switch statement to output the information based on random number
  
  for (val in horoscope) {
    let randIndex = generateRandomNumber(horoscope[val].length);

    switch (val) {
      case "planet":
        yourFortune.push(`Your Planet is ${horoscope[val][randIndex]}.`);
        break;
      case "fortune":
        yourFortune.push(`Today you will have ${horoscope[val][randIndex]}`);
        break;
      case "advice":
        yourFortune.push(`You should ${horoscope[val][randIndex]}`);
        break;
      default:
        yourFortune.push("The night is dark and full of terrors");
    }
  }
  
  // Function to output fortune
  
  const getFortune = (fortune) => {
    
    const formattedFortune = yourFortune.join('\n')
    console.log(formattedFortune)
  };

  getFortune(yourFortune);
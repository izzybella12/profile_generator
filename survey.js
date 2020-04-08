const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your favorite food? ', (food) => {
  console.log(`Oh, so your favorite food is ${food}`);
  rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
    console.log(`Nice to meet you ${name}`);
    rl.question("What's an activity you like doing? ", (activity) => {
      console.log(`Cool... not sure I feel the same way about ${activity} but to each her own...`);
      rl.question("What do you listen to while doing that? ", (music) => {
        console.log(`Sweet! At least we can agree on ${music}!`);
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
          console.log(`Agreed. In fact I like every meal of the day.`);
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
            console.log(`COOL! My superpower is anonymity ;)`);
            console.log(`My name is ${name} and my favorite food is ${food}. In general, my favorite meal time is ${meal}. I like to do ${activity} and I listen to ${music}. If I were a superpower, I'd have ${superpower}.`);
                rl.close();
          })
        })
      })
    })
  })
});
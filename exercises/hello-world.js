// A simple arrow function example with template string to show a Hello World
HelloWorld = name => {
  return console.log(`
            ------------
            Hello World! And hello, ${name}. Let's code together!
            ------------
          `);
};

HelloWorld("John Snow");
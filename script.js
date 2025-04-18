const questions = [
    {
      category: 'javascript',
      difficulty: 'easy',
      question: 'Which keyword is used to declare a constant in JavaScript?',
      options: ['var', 'let', 'const', 'define'],
      answer: 2
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'What will the following code output? console.log(typeof null);',
      options: ['null', 'object', 'undefined', 'string'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'easy',
      question: 'Which method converts a JSON string into a JavaScript object?',
      options: ['JSON.parse()', 'JSON.stringify()', 'JSON.object()', 'JSON.toJS()'],
      answer: 0
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'Which built-in method returns the string representation of the number?',
      options: ['toString()', 'toValue()', 'getString()', 'String()'],
      answer: 0
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: 'What is the result of 0.1 + 0.2 === 0.3 in JavaScript?',
      options: ['true', 'false', 'undefined', 'NaN'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'easy',
      question: 'What does DOM stand for?',
      options: ['Document Object Model', 'Data Object Method', 'Document Oriented Model', 'Display Object Management'],
      answer: 0
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'Which symbol is used for single-line comments in JavaScript?',
      options: ['//', '/* */', '#', '--'],
      answer: 0
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: 'What is a closure in JavaScript?',
      options: ['An object with private properties', 'A function inside another function that can access its variables', 'A loop condition', 'A data structure'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'easy',
      question: 'Which company developed JavaScript?',
      options: ['Microsoft', 'Sun Microsystems', 'Netscape', 'IBM'],
      answer: 2
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'What does the Array.prototype.map() method do?',
      options: ['Filters the array', 'Reduces the array to a single value', 'Transforms each element and returns a new array', 'Sorts the array'],
      answer: 2
    },
    {
      category: 'technology',
      difficulty: 'easy',
      question: 'What does CPU stand for?',
      options: ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Central Peripheral Unit'],
      answer: 1
    },
    {
      category: 'technology',
      difficulty: 'medium',
      question: 'Which company developed the Linux operating system?',
      options: ['Microsoft', 'IBM', 'Linus Torvalds', 'Apple'],
      answer: 2
    },
    {
      category: 'technology',
      difficulty: 'hard',
      question: 'What protocol is primarily used to send email?',
      options: ['HTTP', 'FTP', 'SMTP', 'SNMP'],
      answer: 2
    },
    {
      category: 'sports',
      difficulty: 'easy',
      question: 'How many players are there in a football (soccer) team?',
      options: ['9', '10', '11', '12'],
      answer: 2
    },
    {
      category: 'sports',
      difficulty: 'medium',
      question: 'In which country were the first Olympic Games held?',
      options: ['Italy', 'Greece', 'France', 'USA'],
      answer: 1
    },
    {
      category: 'sports',
      difficulty: 'hard',
      question: 'Which cricketer has scored the most international runs?',
      options: ['Ricky Ponting', 'Virat Kohli', 'Brian Lara', 'Sachin Tendulkar'],
      answer: 3
    },
    {
      category: 'history',
      difficulty: 'easy',
      question: 'Who was the first President of the United States?',
      options: ['Abraham Lincoln', 'George Washington', 'John Adams', 'Thomas Jefferson'],
      answer: 1
    },
    {
      category: 'history',
      difficulty: 'medium',
      question: 'When did World War II end?',
      options: ['1940', '1943', '1945', '1947'],
      answer: 2
    },
    {
      category: 'history',
      difficulty: 'hard',
      question: 'The Great Wall of China was built to protect against which group?',
      options: ['Japanese', 'Mongols', 'Romans', 'Vikings'],
      answer: 1
    },
    {
      category: 'science',
      difficulty: 'easy',
      question: 'What planet is known as the Red Planet?',
      options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
      answer: 2
    },
    {
      category: 'science',
      difficulty: 'medium',
      question: 'What is the chemical symbol for water?',
      options: ['O2', 'H2O', 'CO2', 'NaCl'],
      answer: 1
    },
    {
      category: 'science',
      difficulty: 'hard',
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Chloroplast'],
      answer: 2
    },
    {
      category: 'general knowledge',
      difficulty: 'easy',
      question: 'How many continents are there in the world?',
      options: ['5', '6', '7', '8'],
      answer: 2
    },
    {
      category: 'general knowledge',
      difficulty: 'medium',
      question: 'What is the capital city of Canada?',
      options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
      answer: 2
    },
    {
      category: 'general knowledge',
      difficulty: 'hard',
      question: 'Which year did the Titanic sink?',
      options: ['1910', '1912', '1914', '1916'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'easy',
      question: 'How do you create a function in JavaScript?',
      options: ['function myFunc()', 'def myFunc()', 'create function myFunc()', 'function:myFunc()'],
      answer: 0
    },
    {
      category: 'javascript',
      difficulty: 'easy',
      question: 'Which method converts JSON data to a JavaScript object?',
      options: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()', 'parse.JSON()'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'easy',
      question: 'Which of the following is not a primitive data type in JavaScript?',
      options: ['String', 'Number', 'Object', 'Boolean'],
      answer: 2
    },
    {
      category: 'javascript',
      difficulty: 'easy',
      question: 'What does NaN stand for?',
      options: ['Not a Node', 'Not a Null', 'Not a Number', 'Negative and Null'],
      answer: 2
    },
    {
      category: 'javascript',
      difficulty: 'easy',
      question: 'Which of the following is the correct syntax for an arrow function?',
      options: ['function => () {}', '() => {}', '-> () {}', '() -> {}'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'easy',
      question: 'What will this return: typeof []?',
      options: ['array', 'object', 'list', 'undefined'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'Which array method returns the first element that satisfies a condition?',
      options: ['find()', 'filter()', 'map()', 'some()'],
      answer: 0
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'Which of the following is used to check strict equality in JavaScript?',
      options: ['==', '=', '===', '!='],
      answer: 2
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'What is the result of 3 + \"3\" in JavaScript?',
      options: ['6', '33', 'NaN', 'TypeError'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'Which statement about `let` is true?',
      options: [
        'It is hoisted and initialized to undefined.',
        'It can be redeclared in the same scope.',
        'It has block scope.',
        'It is globally scoped.'
      ],
      answer: 2
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'What is the purpose of the \"use strict\" directive?',
      options: [
        'Enable newer syntax',
        'Prevent use of undeclared variables',
        'Convert all code to ES6',
        'Enable strict comparison'
      ],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'Which of these will remove the last element from an array?',
      options: ['shift()', 'pop()', 'unshift()', 'slice()'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'How do you copy all properties from one object to another in ES6?',
      options: ['Object.merge()', 'Object.assign()', 'Object.copy()', 'Object.map()'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'What will be the value of `x`? let x = [1,2,3].map(x => x * 2);',
      options: ['[2, 4, 6]', '[1,2,3]', '[1,4,9]', '[1,3,5]'],
      answer: 0
    },
    {
      category: 'javascript',
      difficulty: 'medium',
      question: 'Which event is fired when a form is submitted?',
      options: ['click', 'submit', 'change', 'input'],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: 'What will this return? console.log([] + {});',
      options: ['\"[object Object]\"', '{}', 'NaN', '[object Object]'],
      answer: 3
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: 'What does the \"this\" keyword refer to in a regular function?',
      options: ['Global object', 'Parent function', 'Window object', 'Depends on how the function is called'],
      answer: 3
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: 'Which operator allows you to destructure an object?',
      options: ['&', '*', '{}', '...'],
      answer: 2
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: 'How to deep clone an object in JavaScript?',
      options: [
        'Object.assign({}, obj)',
        'JSON.parse(JSON.stringify(obj))',
        'Object.clone(obj)',
        'obj.copy()'
      ],
      answer: 1
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: 'Which of the following is NOT a falsy value?',
      options: ['0', '\"\"', 'undefined', '\"false\"'],
      answer: 3
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: 'What does the ?? operator do?',
      options: ['Nullish coalescing', 'Logical OR', 'Optional chaining', 'Spread'],
      answer: 0
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: 'What is the purpose of Symbol in JavaScript?',
      options: [
        'To declare unique and immutable identifiers',
        'To create private variables',
        'To compare strings',
        'To wrap primitive types'
      ],
      answer: 0
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: 'Which function is called immediately after it is defined?',
      options: ['IIFE', 'Async', 'Promise', 'Callback'],
      answer: 0
    },
    {
      category: 'javascript',
      difficulty: 'hard',
      question: "Which one is true about JavaScript\'s event loop?",
      options: [
        'It runs tasks sequentially from a stack.',
        'It pauses execution during async operations.',
        'It handles concurrency via a single thread.',
        'It spawns new threads for every callback.'
      ],
      answer: 2
    },
    {
        category: 'sports',
        difficulty: 'easy',
        question: 'Which sport is known as the \"king of sports\"?',
        options: ['Basketball', 'Football', 'Tennis', 'Cricket'],
        answer: 1
      },
      {
        category: 'sports',
        difficulty: 'easy',
        question: 'What is the highest score in a single basketball game?',
        options: ['80', '100', '120', '150'],
        answer: 1
      },
      {
        category: 'sports',
        difficulty: 'easy',
        question: 'What is the name of the tennis tournament held in Wimbledon?',
        options: ['French Open', 'Australian Open', 'US Open', 'Wimbledon'],
        answer: 3
      },
      {
        category: 'sports',
        difficulty: 'medium',
        question: 'Who won the 2020 FIFA World Cup?',
        options: ['Brazil', 'Germany', 'France', 'Argentina'],
        answer: 2
      },
      {
        category: 'sports',
        difficulty: 'medium',
        question: 'Which country is known for the sport of cricket?',
        options: ['USA', 'England', 'Brazil', 'Australia'],
        answer: 1
      },
      {
        category: 'sports',
        difficulty: 'medium',
        question: 'Who holds the record for most home runs in MLB history?',
        options: ['Babe Ruth', 'Barry Bonds', 'Hank Aaron', 'Alex Rodriguez'],
        answer: 1
      },
      {
        category: 'sports',
        difficulty: 'medium',
        question: 'What is the national sport of Japan?',
        options: ['Judo', 'Sumo', 'Karate', 'Baseball'],
        answer: 1
      },
      {
        category: 'sports',
        difficulty: 'medium',
        question: 'Which country won the first Rugby World Cup in 1987?',
        options: ['New Zealand', 'Australia', 'South Africa', 'England'],
        answer: 0
      },
      {
        category: 'sports',
        difficulty: 'hard',
        question: 'Which golfer has won the most major championships?',
        options: ['Tiger Woods', 'Jack Nicklaus', 'Arnold Palmer', 'Phil Mickelson'],
        answer: 1
      },
      {
        category: 'sports',
        difficulty: 'hard',
        question: 'Who was the first woman to win a Nobel Prize in Sports?',
        options: ['Serena Williams', 'Venus Williams', 'Billie Jean King', 'Marie Curie'],
        answer: 2
      },
      {
        category: 'sports',
        difficulty: 'hard',
        question: 'In which year was the first modern Olympic Games held?',
        options: ['1896', '1900', '1912', '1924'],
        answer: 0
      },
      {
        category: 'sports',
        difficulty: 'hard',
        question: 'Which country won the 2011 Cricket World Cup?',
        options: ['Australia', 'India', 'Sri Lanka', 'Pakistan'],
        answer: 1
      },
      {
        category: 'sports',
        difficulty: 'hard',
        question: 'What sport does the term \"hat-trick\" originate from?',
        options: ['Football', 'Hockey', 'Cricket', 'Tennis'],
        answer: 2
      },
      {
        category: 'history',
        difficulty: 'easy',
        question: 'Which war was fought between the North and South regions of the United States?',
        options: ['World War I', 'The Civil War', 'World War II', 'The Revolutionary War'],
        answer: 1
      },
      {
        category: 'history',
        difficulty: 'easy',
        question: 'Who was the first man to walk on the moon?',
        options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Michael Collins'],
        answer: 1
      },
      {
        category: 'history',
        difficulty: 'medium',
        question: 'What ancient civilization built the pyramids?',
        options: ['Romans', 'Greeks', 'Egyptians', 'Maya'],
        answer: 2
      },
      {
        category: 'history',
        difficulty: 'medium',
        question: 'Who was the British monarch during World War II?',
        options: ['Queen Elizabeth I', 'King George VI', 'Queen Victoria', 'King Henry VIII'],
        answer: 1
      },
      {
        category: 'history',
        difficulty: 'medium',
        question: 'Which famous Roman emperor was assassinated on the Ides of March?',
        options: ['Augustus', 'Julius Caesar', 'Nero', 'Caligula'],
        answer: 1
      },
      {
        category: 'history',
        difficulty: 'medium',
        question: 'Who was the leader of the Soviet Union during World War II?',
        options: ['Stalin', 'Lenin', 'Trotsky', 'Khrushchev'],
        answer: 0
      },
      {
        category: 'history',
        difficulty: 'medium',
        question: 'In which year did the Berlin Wall fall?',
        options: ['1987', '1989', '1991', '1995'],
        answer: 1
      },
      {
        category: 'history',
        difficulty: 'hard',
        question: 'Which battle was the turning point of the American Civil War?',
        options: ['Battle of Gettysburg', 'Battle of Antietam', 'Battle of Fort Sumter', 'Battle of Bull Run'],
        answer: 0
      },
      {
        category: 'history',
        difficulty: 'hard',
        question: 'What was the name of the ship that carried the Pilgrims to America in 1620?',
        options: ['Mayflower', 'Santa Maria', 'Beagle', 'Endeavour'],
        answer: 0
      },
      {
        category: 'history',
        difficulty: 'hard',
        question: 'Who discovered the New World in 1492?',
        options: ['Ferdinand Magellan', 'Christopher Columbus', 'Marco Polo', 'John Cabot'],
        answer: 1
      },
      {
        category: 'history',
        difficulty: 'hard',
        question: 'Which ancient civilization invented the wheel?',
        options: ['Mesopotamia', 'Ancient Egypt', 'Ancient Greece', 'Ancient China'],
        answer: 0
      },
      {
        category: 'history',
        difficulty: 'hard',
        question: 'Who was the longest-reigning British monarch before Queen Elizabeth II?',
        options: ['Queen Victoria', 'King George III', 'Queen Elizabeth I', 'King Henry VIII'],
        answer: 0
      },
      {
        category: 'general knowledge',
        difficulty: 'easy',
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        answer: 2
      },
      {
        category: 'general knowledge',
        difficulty: 'easy',
        question: 'Which continent is the Sahara Desert located on?',
        options: ['Asia', 'Africa', 'Europe', 'Australia'],
        answer: 1
      },
      {
        category: 'general knowledge',
        difficulty: 'easy',
        question: 'Who wrote the play \"Romeo and Juliet\"?',
        options: ['Charles Dickens', 'Mark Twain', 'William Shakespeare', 'Jane Austen'],
        answer: 2
      },
      {
        category: 'general knowledge',
        difficulty: 'easy',
        question: 'What is the largest country by area?',
        options: ['Russia', 'China', 'USA', 'Canada'],
        answer: 0
      },
      {
        category: 'general knowledge',
        difficulty: 'easy',
        question: 'What is the currency of Japan?',
        options: ['Yuan', 'Won', 'Yen', 'Ringgit'],
        answer: 2
      },
      {
        category: 'general knowledge',
        difficulty: 'medium',
        question: 'What is the smallest planet in our solar system?',
        options: ['Mercury', 'Mars', 'Venus', 'Earth'],
        answer: 0
      },
      {
        category: 'general knowledge',
        difficulty: 'medium',
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'Japan', 'Thailand', 'South Korea'],
        answer: 1
      },
      {
        category: 'general knowledge',
        difficulty: 'medium',
        question: 'Which of these countries is not in Africa?',
        options: ['Kenya', 'Egypt', 'Argentina', 'Nigeria'],
        answer: 2
      },
      {
        category: 'general knowledge',
        difficulty: 'medium',
        question: 'Which color is the most expensive in the world?',
        options: ['Red', 'Blue', 'Purple', 'Green'],
        answer: 1
      },
      {
        category: 'general knowledge',
        difficulty: 'hard',
        question: 'Which country has the most number of islands?',
        options: ['Canada', 'Sweden', 'Finland', 'Indonesia'],
        answer: 1
      },
      {
        category: 'general knowledge',
        difficulty: 'hard',
        question: 'What is the longest river in the world?',
        options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
        answer: 1
      },
      {
        category: 'general knowledge',
        difficulty: 'hard',
        question: 'What is the chemical element for the atomic number 79?',
        options: ['Silver', 'Gold', 'Copper', 'Lead'],
        answer: 1
      },
      {
        category: 'general knowledge',
        difficulty: 'hard',
        question: 'Which planet has the shortest day?',
        options: ['Mercury', 'Earth', 'Jupiter', 'Mars'],
        answer: 2
      },
      {
        category: 'general knowledge',
        difficulty: 'hard',
        question: 'In which city would you find the famous landmark, the Eiffel Tower?',
        options: ['London', 'Paris', 'Rome', 'New York'],
        answer: 1
      },
      {
        category: 'science',
        difficulty: 'easy',
        question: 'How many legs does an insect have?',
        options: ['6', '4', '8', '10'],
        answer: 0
      },
      {
        category: 'science',
        difficulty: 'easy',
        question: 'What gas do plants breathe in that humans and animals breathe out?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Helium'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'easy',
        question: 'What part of the plant conducts photosynthesis?',
        options: ['Stem', 'Roots', 'Leaves', 'Flowers'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'easy',
        question: 'Which of these is not a state of matter?',
        options: ['Solid', 'Liquid', 'Gas', 'Heat'],
        answer: 3
      },
      {
        category: 'science',
        difficulty: 'easy',
        question: 'What force pulls objects towards Earth?',
        options: ['Magnetism', 'Friction', 'Gravity', 'Electricity'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'easy',
        question: 'What organ pumps blood throughout the human body?',
        options: ['Brain', 'Lungs', 'Heart', 'Liver'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'easy',
        question: 'Which sense organ helps us to see?',
        options: ['Nose', 'Ears', 'Eyes', 'Tongue'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'easy',
        question: 'Which planet is closest to the Sun?',
        options: ['Venus', 'Earth', 'Mercury', 'Mars'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'medium',
        question: 'What is the main gas found in the air we breathe?',
        options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'],
        answer: 3
      },
      {
        category: 'science',
        difficulty: 'medium',
        question: 'Which vitamin is produced when a person is exposed to sunlight?',
        options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        answer: 3
      },
      {
        category: 'science',
        difficulty: 'medium',
        question: 'What is the hardest natural substance on Earth?',
        options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'medium',
        question: 'What type of energy is stored in food?',
        options: ['Kinetic', 'Thermal', 'Chemical', 'Electrical'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'medium',
        question: 'What is the center of an atom called?',
        options: ['Electron', 'Neutron', 'Nucleus', 'Proton'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'medium',
        question: 'What is the name of the process by which plants make their food?',
        options: ['Transpiration', 'Respiration', 'Photosynthesis', 'Fermentation'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'medium',
        question: 'Which part of the brain controls balance and coordination?',
        options: ['Cerebrum', 'Cerebellum', 'Medulla', 'Pons'],
        answer: 1
      },
      {
        category: 'science',
        difficulty: 'medium',
        question: 'How many bones are there in the adult human body?',
        options: ['206', '210', '201', '190'],
        answer: 0
      },
      {
        category: 'science',
        difficulty: 'medium',
        question: 'Which blood cells help our body fight infection?',
        options: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'],
        answer: 1
      },
      {
        category: 'science',
        difficulty: 'hard',
        question: 'What is the second law of thermodynamics about?',
        options: ['Energy conservation', 'Entropy increase', 'Motion', 'Gravitation'],
        answer: 1
      },
      {
        category: 'science',
        difficulty: 'hard',
        question: 'Which element has the atomic number 6?',
        options: ['Nitrogen', 'Carbon', 'Oxygen', 'Helium'],
        answer: 1
      },
      {
        category: 'science',
        difficulty: 'hard',
        question: 'What is the name of the scientist who proposed the laws of motion?',
        options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie'],
        answer: 1
      },
      {
        category: 'science',
        difficulty: 'hard',
        question: 'What does DNA stand for?',
        options: ['Deoxyribonucleic Acid', 'Dinucleic Acid', 'Deoxynucleic Acid', 'Dextroribonucleic Acid'],
        answer: 0
      },
      {
        category: 'science',
        difficulty: 'hard',
        question: 'What is the speed of light in a vacuum?',
        options: ['3 x 10^8 m/s', '1.5 x 10^7 m/s', '3 x 10^6 m/s', '9.8 x 10^5 m/s'],
        answer: 0
      },
      {
        category: 'science',
        difficulty: 'hard',
        question: 'Which planet has the most moons?',
        options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'hard',
        question: "What is Avogadro\'s number?",
        options: ['6.02 x 10^23', '3.14', '9.81', '1.67 x 10^-27'],
        answer: 0
      },
      {
        category: 'science',
        difficulty: 'hard',
        question: 'What is the pH value of a neutral solution?',
        options: ['0', '7', '14', '5'],
        answer: 1
      },
      {
        category: 'science',
        difficulty: 'hard',
        question: 'Which particle has no electric charge?',
        options: ['Electron', 'Proton', 'Neutron', 'Photon'],
        answer: 2
      },
      {
        category: 'science',
        difficulty: 'hard',
        question: 'Which part of the cell contains genetic material?',
        options: ['Ribosome', 'Cytoplasm', 'Nucleus', 'Cell membrane'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'Which company developed the Windows operating system?',
        options: ['Apple', 'Microsoft', 'Google', 'IBM'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'What device is used to input text into a computer?',
        options: ['Mouse', 'Monitor', 'Keyboard', 'Speaker'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'What does \"Wi-Fi\" enable?',
        options: ['Printing', 'Wireless Internet Connection', 'Charging', 'Cooling'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'Which of these is a web browser?',
        options: ['Photoshop', 'Chrome', 'Excel', 'Windows'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'What is the full form of \"USB\"?',
        options: ['Universal System Bus', 'Universal Serial Bus', 'United Service Band', 'Unit Standard Bus'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'Which company makes the iPhone?',
        options: ['Google', 'Samsung', 'Microsoft', 'Apple'],
        answer: 3
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'What is the shortcut for \"copy\" on most computers?',
        options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + Z', 'Ctrl + X'],
        answer: 0
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'Which social media app uses a bird as its logo?',
        options: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'Which of these is a type of computer memory?',
        options: ['RAM', 'CPU', 'Wi-Fi', 'SSD'],
        answer: 0
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'What programming language is mainly used for Android app development?',
        options: ['Swift', 'Java', 'Python', 'Kotlin'],
        answer: 3
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'Which one is NOT a search engine?',
        options: ['Bing', 'DuckDuckGo', 'Safari', 'Google'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'What does \"HTML\" stand for?',
        options: ['Hyper Trainer Marking Language', 'HyperText Markup Language', 'HighText Machine Language', 'Hyperlink and Text Marking Language'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'Which company owns YouTube?',
        options: ['Microsoft', 'Google', 'Amazon', 'Apple'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'Which of these is an email service by Google?',
        options: ['Outlook', 'Gmail', 'Yahoo Mail', 'ProtonMail'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'What is the function of a router?',
        options: ['To print documents', 'To display videos', 'To connect networks', 'To store files'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'What does \"AI\" stand for in tech?',
        options: ['Automatic Input', 'Artificial Intelligence', 'Advanced Internet', 'Applied Interface'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'Which device measures steps and heart rate?',
        options: ['Smart TV', 'Fitness Tracker', 'Wi-Fi Router', 'Scanner'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'What type of file is a .jpg?',
        options: ['Text File', 'Spreadsheet', 'Image File', 'Video File'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'Which port is commonly used for HDMI?',
        options: ['USB', 'Ethernet', 'Audio Jack', 'Video Output'],
        answer: 3
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'Who is known as the father of the computer?',
        options: ['Alan Turing', 'Charles Babbage', 'Steve Jobs', 'Bill Gates'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'What is the purpose of an IP address?',
        options: ['Store files', 'Identify a device on a network', 'Print data', 'Speed up processors'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'Which language is used for web development along with HTML and CSS?',
        options: ['Python', 'Java', 'C++', 'JavaScript'],
        answer: 3
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'Which company created the Android operating system?',
        options: ['Google', 'Apple', 'Samsung', 'Microsoft'],
        answer: 0
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'What does \"URL\" stand for?',
        options: ['Unified Resource Locator', 'Uniform Resource Locator', 'Universal Response Link', 'User Resource Link'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'What is the main function of a compiler?',
        options: ['Run programs', 'Convert code to machine language', 'Send emails', 'Design graphics'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'Which company created the first iPhone?',
        options: ['Samsung', 'Nokia', 'Apple', 'Sony'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'What is Blockchain mainly used for?',
        options: ['Photo editing', 'Cryptocurrency', 'Social Media', 'Email'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'What does SSD stand for in computing?',
        options: ['Super Speed Drive', 'Solid State Drive', 'Standard Storage Device', 'Smart Storage Disk'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'Which protocol is used for secure communication over the internet?',
        options: ['HTTP', 'TCP', 'HTTPS', 'FTP'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'Which tool would you use to make a presentation?',
        options: ['PowerPoint', 'Excel', 'Word', 'Access'],
        answer: 0
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'Which website is known as a popular online encyclopedia?',
        options: ['Google', 'Facebook', 'Wikipedia', 'Amazon'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'What does \"IoT\" stand for?',
        options: ['Internet of Tools', 'Internet of Things', 'Input of Technology', 'Inside Operating Things'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'What does the \".com\" domain mean?',
        options: ['Company', 'Community', 'Commercial', 'Communication'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'Which scientist invented the World Wide Web?',
        options: ['Bill Gates', 'Tim Berners-Lee', 'Steve Jobs', 'Alan Turing'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'Which symbol is used in email addresses?',
        options: ['#', '*', '@', '$'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'medium',
        question: 'What is an example of open-source software?',
        options: ['MS Word', 'Adobe Photoshop', 'Linux', 'AutoCAD'],
        answer: 2
      },
      {
        category: 'technology',
        difficulty: 'hard',
        question: 'What is a \"bit\" short for in computing?',
        options: ['Binary Digit', 'Bitrate', 'Binary Transfer', 'Byte Item'],
        answer: 0
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'Which application is used for video conferencing?',
        options: ['Zoom', 'Paint', 'WordPad', 'VLC'],
        answer: 0
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'Which tech billionaire founded SpaceX?',
        options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Mark Zuckerberg'],
        answer: 1
      },
      {
        category: 'technology',
        difficulty: 'easy',
        question: 'What type of technology is Alexa an example of?',
        options: ['VR', 'AI Assistant', 'Router', 'Cloud Storage'],
        answer: 1
      }
];

const categorySelector = document.getElementById('category');
const difficultySelector = document.getElementById('difficulty')
const startBtn = document.querySelector('.start-btn');
const nextBtn = document.querySelector('.next-btn');
const questionsContainer = document.querySelector('.questions');
const quizBox = document.querySelector('.quiz-container');
const endQuizBtn = document.querySelector('.end-quiz-btn');

let currentIndex = 0;
let filteredQuestions = [];
let score = 0;

let timer; 
let timeLeft = 10; 


startBtn.addEventListener('click', () => {
  const selectCategory = categorySelector.value;
  const selectDifficulty = difficultySelector.value;

  filteredQuestions = questions.filter(q => q.category === selectCategory && q.difficulty === selectDifficulty);

  if (filteredQuestions.length === 0) {
    questionsContainer.innerHTML = `<p>No Questions found of this category.</p>`;
    return;
  }

  document.querySelector('.quiz-settings').style.display = 'none';
  quizBox.style.display = 'block';

  currentIndex = 0;
  score = 0;
  loadQuestion();

  console.log('Start button');
});

function loadQuestion() {
  const currentQuestion = filteredQuestions[currentIndex];

  let html = `<h2>${currentQuestion.question}</h2><ul>`;

  currentQuestion.options.forEach((option, index) => {
    html += `
      <li>
        <label>
          <input type="radio" name="option" value="${index}" />
          ${option}
        </label>
      </li>
    `;
  });

  html += `</ul>`;
  questionsContainer.innerHTML = html;

  nextBtn.style.display = 'inline-block'; 

  startTimer();
}

nextBtn.addEventListener('click', () => {
    clearInterval(timer);
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alert('Please select an answer before proceeding.');
    return;
  }

  const answerIndex = parseInt(selectedOption.value);
  if (answerIndex === filteredQuestions[currentIndex].answer) {
    score++;
  }

  if (currentIndex < filteredQuestions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    questionsContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your final score: ${score} out of ${filteredQuestions.length}</p>`;
    nextBtn.style.display = 'none';
    endQuizBtn.style.display = 'none';
    clearInterval(timer);
  }
});

function startTimer(){
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById('timer').textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if(timeLeft < 0){
            clearInterval(timer);
            autoskipQuestion();
        }
    }, 700);
}

function autoskipQuestion(){
    if(currentIndex < filteredQuestions.length - 1){
        currentIndex++;
        loadQuestion();
    }
    else {
        questionsContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your final score: ${score} out of ${filteredQuestions.length}</p>`;
        nextBtn.style.display = 'none';
        endQuizBtn.style.display = 'none';
        clearInterval(timer);
    }
}

endQuizBtn.addEventListener('click', () => {
  clearInterval(timer);
  questionsContainer.innerHTML = `<h2>Quiz Ended Early!</h2><p>Your final score: ${score} out of ${filteredQuestions.length}</p>`;
  nextBtn.style.display = 'none';
  endQuizBtn.style.display = 'none';
});
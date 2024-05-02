const pyquizQuestions = [
    {
      question: 'What is the output of the following code? print(3 * 2 ** 3 - 1)',
      options: ['47', '20', '63', '46'],
      correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
      question: 'What does the `len()` function return when called on an empty list?',
      options: ['0', '1', 'None', 'Error'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'What is the output of the following code? print("Hello" + 3 * "world")',
      options: ['Hello worldworldworld', 'Hello3world', 'SyntaxError', 'Hello world world world'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'How do you start a single-line comment in Python?',
      options: ['//', '/*', '#', '//'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'Which of the following is the correct way to create a function in Python?',
      options: ['function myFunction()', 'def myFunction()', 'func myFunction()', 'define myFunction()'],
      correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
      question: 'What will the expression `bool("False")` return?',
      options: ['True', 'False', 'Error', 'None'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'What does the `append()` method do in Python?',
      options: ['Adds an element to the end of a list', 'Removes an element from a list', 'Returns the length of a list', 'Reverses the elements of a list'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'How do you access the last element of a list named `myList` in Python?',
      options: ['myList[length(myList)]', 'myList[len(myList) - 1]', 'myList[-1]', 'myList[last]'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'Which keyword is used to define a function in Python?',
      options: ['define', 'function', 'def', 'define_function'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'What is the output of the following code? print(3 == 3.0)',
      options: ['True', 'False', 'Error', 'None'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'How do you remove an item from a set in Python?',
      options: ['Using `delete()`', 'Using `remove()`', 'Using `discard()`', 'Using `pop()`'],
      correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
      question: 'What will be the output of the following code? print("Python"[1:4])',
      options: ['Pyt', 'yth', 'ytho', 'ytho'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'Which of the following data types is immutable in Python?',
      options: ['List', 'Dictionary', 'Tuple', 'Set'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'What does the `range()` function return?',
      options: ['A list of numbers', 'A tuple of numbers', 'An iterator of numbers', 'A dictionary of numbers'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'Which of the following is used to create a dictionary comprehension in Python?',
      options: ['{key: value for (key, value) in iterable}', '[key: value for (key, value) in iterable]', '{key, value for (key, value) in iterable}', '(key: value for (key, value) in iterable)'],
      correctAnswer: 0 // Index of the correct answer in the options array
    }
  ];
const mernquizQuestions = [
    {
      question: 'What does MERN stack stand for?',
      options: ['MongoDB, Express.js, React.js, Node.js', 'MySQL, Express.js, React.js, Node.js', 'MongoDB, Angular, React.js, Node.js', 'MySQL, Angular, React.js, Node.js'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'Which component of the MERN stack is used for building the backend of web applications?',
      options: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
      question: 'Which component of the MERN stack is a JavaScript runtime built on Chrome\'s V8 JavaScript engine?',
      options: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      correctAnswer: 3 // Index of the correct answer in the options array
    },
    {
      question: 'What role does MongoDB play in the MERN stack?',
      options: ['Backend server', 'Frontend framework', 'Database', 'Client-side rendering'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'Which of the following is used for managing state and building user interfaces in the MERN stack?',
      options: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'Which component of the MERN stack is used for creating RESTful APIs?',
      options: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
      question: 'What is the primary purpose of Express.js in the MERN stack?',
      options: ['Database management', 'Client-side rendering', 'Middleware routing and handling HTTP requests', 'State management'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'Which component of the MERN stack is responsible for handling server-side logic and building scalable network applications?',
      options: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      correctAnswer: 3 // Index of the correct answer in the options array
    },
    {
      question: 'What makes React.js suitable for building dynamic and responsive user interfaces in the MERN stack?',
      options: ['Server-side rendering', 'Virtual DOM', 'Client-side routing', 'Database management'],
      correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
      question: 'Which of the following components is responsible for storing data in a NoSQL format in the MERN stack?',
      options: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'What is Node.js\'s role in the MERN stack?',
      options: ['Frontend framework', 'Database management', 'Server-side runtime environment', 'State management'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'Which component of the MERN stack is used for building single-page applications (SPAs)?',
      options: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'What is the primary function of Express.js in the MERN stack?',
      options: ['Database management', 'Client-side routing', 'Middleware routing and handling HTTP requests', 'State management'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'Which component of the MERN stack is responsible for handling requests and responses between the frontend and backend?',
      options: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      correctAnswer: 3 // Index of the correct answer in the options array
    },
    {
      question: 'What is the purpose of React.js in the MERN stack?',
      options: ['Database management', 'Client-side rendering', 'Middleware routing', 'State management'],
      correctAnswer: 1 // Index of the correct answer in the options array
    }
];
const dsaquizQuestions = [
    {
      question: 'What is the time complexity of appending an element to the end of an array in the worst case?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'Which data structure uses LIFO (Last-In, First-Out) ordering of elements?',
      options: ['Queue', 'Stack', 'Heap', 'LinkedList'],
      correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
      question: 'What is the worst-case time complexity of searching for an element in a binary search tree?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
      question: 'Which sorting algorithm has the best worst-case time complexity?',
      options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'What is the time complexity of finding the shortest path between two vertices in an unweighted graph using BFS?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(V + E)'],
      correctAnswer: 3 // Index of the correct answer in the options array
    },
    {
      question: 'Which data structure is used to implement priority queues?',
      options: ['Array', 'Linked List', 'Heap', 'Stack'],
      correctAnswer: 2 // Index of the correct answer in the options array
    },
    {
      question: 'What is the time complexity of deleting an element from the end of an array in the worst case?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'Which searching algorithm is preferred for searching in a sorted array?',
      options: ['Linear Search', 'Binary Search', 'Depth-First Search', 'Breadth-First Search'],
      correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
      question: 'What is the space complexity of the merge sort algorithm?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      correctAnswer: 3 // Index of the correct answer in the options array
    },
    {
      question: 'What is the time complexity of the quicksort algorithm in the worst case?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 3 // Index of the correct answer in the options array
    },
    {
      question: 'Which data structure uses FIFO (First-In, First-Out) ordering of elements?',
      options: ['Queue', 'Stack', 'Heap', 'LinkedList'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'What is the time complexity of finding the shortest path between two vertices in a weighted graph using Dijkstra\'s algorithm?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(V + E log V)'],
      correctAnswer: 3 // Index of the correct answer in the options array
    },
    {
      question: 'Which sorting algorithm is not suitable for large datasets due to its quadratic time complexity?',
      options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort'],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: 'What is the time complexity of inserting an element into a binary search tree?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 1 // Index of the correct answer in the options array
    },
    {
      question: 'Which data structure is used to implement a LIFO ordering of elements?',
      options: ['Queue', 'Stack', 'Heap', 'LinkedList'],
      correctAnswer: 1 // Index of the correct answer in the options array
    }
  ];
  
const courses=[
    {
        name:"course 1",
        title:"Introduction to Python Programming",
        description:"Dive into the world of data science with Python, one of the most versatile and powerful programming languages in the field. This course is designed for aspiring data scientists and analysts who want to harness the power of Python for data manipulation, analysis, and visualization. You'll learn how to work with popular libraries like NumPy and Pandas for data manipulation, Matplotlib and Seaborn for data visualization, and scikit-learn for machine learning tasks. Whether you're looking to kickstart your career in data science or enhance your analytical skills, this course is your gateway to mastering Python for data science..",
        quiz:pyquizQuestions,
        image:"https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        lecture:"https://www.youtube.com/embed/vLqTf2b6GZw?si=4hPW9cSwkDSUMmx3"
        ,question:"https://dscet.ac.in/questionbank/science/first-sem/GE8151-PYTHON.pdf"
    },
    {
        name:"Course 2",
        title:"Full-Stack Web Development with MERN Stack",
        description:"Embark on a journey to become a proficient full-stack web developer with the MERN stack: MongoDB, Express.js, React.js, and Node.js. This comprehensive course covers everything you need to know to build dynamic, modern web applications from scratch. You'll start by mastering the backend with Node.js and Express.js, where you'll build RESTful APIs and handle database operations with MongoDB. Then, you'll dive into frontend development with React.js, creating interactive user interfaces and managing state effectively. By the end of the course, you'll have the skills to develop and deploy full-stack web applications that meet industry standards and impress users.",
        quiz:mernquizQuestions,
        image:"https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        lecture:"https://www.youtube.com/embed/HVjjoMvutj4?si=WZ9iSnODGQ7N2Djx"
        ,question:"https://resources.workable.com/wp-content/uploads/2015/08/front-end-web-developer-interview-questions.pdf"
      },
    {
        name:"Course 3",
        title:"Advanced Data Structures and Algorithms",
        description:"Embark on a journey to master advanced data structures and algorithms, essential skills for any aspiring software engineer or computer scientist. In this comprehensive course, you'll delve deep into the world of data structures and algorithms, exploring complex topics that are crucial for building efficient and scalable software solutions.",
        quiz:dsaquizQuestions,
        image:"https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        lecture:"https://www.youtube.com/embed/hCrO_cR7kno?si=h_T0X2nUFsUxoDhC"
        ,question:"https://jeppiaarcollege.org/wp-content/uploads/2019/02/II-YEAR-III-SEM-CS8351-DATA-STRUCTURES.pdf"
      }
]
module.exports={data:courses};
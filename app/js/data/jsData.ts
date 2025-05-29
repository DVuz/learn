// Dữ liệu cho việc học JavaScript căn bản bằng tiếng Việt

export interface JSConcept {
  concept: string;
  description: string;
  purpose: string;
  examples: string[];
  useCase: string;
}

export interface JSFeature {
  feature: string;
  description: string;
  introduced: string;
  category: string;
  importance: string;
}

export interface BestPractice {
  title: string;
  description: string;
  example: string;
  benefit: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  level: 'junior' | 'mid' | 'senior';
  category: string;
  detailed: boolean;
  example?: string;
}

export interface CodeExample {
  title: string;
  description: string;
  code: string;
  explanation: string;
}

export interface CodeCategory {
  category: string;
  examples: CodeExample[];
}

// Lý thuyết cơ bản về JavaScript
export const jsTheory = {
  introduction: {
    title: 'Giới thiệu về JavaScript',
    content: [
      'JavaScript là ngôn ngữ lập trình thông dịch, linh hoạt và là một trong những ngôn ngữ phổ biến nhất thế giới.',
      'Ban đầu được tạo ra cho web browsers, nhưng giờ đây JavaScript đã mở rộng ra nhiều môi trường khác nhau.',
      'JavaScript hỗ trợ nhiều paradigm lập trình: procedural, object-oriented, và functional programming.',
      'Ngôn ngữ này có tính năng dynamic typing, prototype-based inheritance và first-class functions.',
    ],
    history: [
      '1995: Brendan Eich tạo ra JavaScript tại Netscape chỉ trong 10 ngày',
      '1996: JavaScript được gửi đến ECMA International để standardization',
      '1997: ECMAScript 1 - phiên bản chuẩn đầu tiên được phát hành',
      '2009: ECMAScript 5 (ES5) - thêm strict mode, JSON support',
      '2015: ECMAScript 6 (ES6/ES2015) - cách mạng với arrow functions, classes, modules',
      '2016-nay: Phát hành hàng năm với các tính năng mới liên tục',
    ],
    importance: [
      'Ngôn ngữ duy nhất native trong web browsers cho client-side programming',
      'Full-stack development với Node.js cho backend development',
      'Mobile app development với React Native, Ionic',
      'Desktop applications với Electron',
      'Game development với các engine như Phaser',
      'Machine Learning với TensorFlow.js',
      'IoT và embedded systems với Johnny-Five',
    ],
  },
  fundamentals: [
    {
      concept: 'Variables và Data Types',
      description: 'JavaScript có các kiểu dữ liệu cơ bản và cách khai báo biến',
      purpose: 'Lưu trữ và manipulate dữ liệu trong chương trình',
      examples: [
        'let name = "John"; // String',
        'const age = 25; // Number',
        'var isActive = true; // Boolean',
        'let data = null; // Null',
        'let value; // Undefined',
        'const user = { name: "Alice" }; // Object',
        'const numbers = [1, 2, 3]; // Array',
      ],
      useCase: 'Foundation cho tất cả JavaScript applications, data management',
    },
    {
      concept: 'Functions',
      description: 'Blocks of reusable code được định nghĩa để thực hiện specific tasks',
      purpose: 'Code organization, reusability, và modularity',
      examples: [
        'function greet(name) { return "Hello " + name; }',
        'const add = (a, b) => a + b; // Arrow function',
        'const multiply = function(a, b) { return a * b; }; // Function expression',
        '(function() { console.log("IIFE"); })(); // Immediately Invoked',
      ],
      useCase: 'Code organization, event handling, async operations, algorithms',
    },
    {
      concept: 'Objects và Arrays',
      description: 'Complex data structures để organize và store multiple values',
      purpose: 'Manage complex data, create data models, collections',
      examples: [
        'const person = { name: "John", age: 30 };',
        'const fruits = ["apple", "banana", "orange"];',
        'person.email = "john@example.com"; // Add property',
        'fruits.push("grape"); // Add to array',
        'const { name, age } = person; // Destructuring',
      ],
      useCase: 'Data modeling, API responses, configuration objects, lists management',
    },
    {
      concept: 'Control Flow',
      description: 'Điều khiển thứ tự thực hiện code với conditions và loops',
      purpose: 'Logic branching và repetitive operations',
      examples: [
        'if (age >= 18) { console.log("Adult"); }',
        'for (let i = 0; i < 5; i++) { console.log(i); }',
        'while (condition) { /* code */ }',
        'switch (day) { case "Monday": /* code */ break; }',
        'array.forEach(item => console.log(item));',
      ],
      useCase: 'Decision making, data processing, iteration over collections',
    },
    {
      concept: 'Scope và Closures',
      description: 'Variable accessibility và function closure behavior',
      purpose: 'Memory management, data privacy, advanced patterns',
      examples: [
        'let global = "accessible everywhere";',
        'function outer() { let private = "only in outer"; }',
        'function counter() { let count = 0; return () => ++count; }',
        'const increment = counter(); // Closure example',
      ],
      useCase: 'Module patterns, data encapsulation, advanced JavaScript patterns',
    },
    {
      concept: 'Asynchronous Programming',
      description: 'Handling non-blocking operations với callbacks, promises, async/await',
      purpose: 'API calls, file operations, timers, user interactions',
      examples: [
        'setTimeout(() => console.log("Delayed"), 1000);',
        'fetch("/api/data").then(response => response.json());',
        'async function getData() { const result = await fetch("/api"); }',
        'Promise.all([promise1, promise2]).then(results => {});',
      ],
      useCase: 'API integration, user interface updates, real-time applications',
    },
  ],
  features: [
    {
      feature: 'Dynamic Typing',
      description: 'Variables không cần declare type, type được determine tại runtime',
      introduced: 'ES1 (1997)',
      category: 'Core Language',
      importance: 'Flexibility nhưng cần careful type checking trong production',
    },
    {
      feature: 'Prototype-based Inheritance',
      description: 'Objects có thể inherit directly từ other objects without classes',
      introduced: 'ES1 (1997)',
      category: 'Object-Oriented',
      importance: 'Foundation của JavaScript OOP, khác biệt với class-based languages',
    },
    {
      feature: 'First-class Functions',
      description: 'Functions có thể được treated như values: assigned, passed, returned',
      introduced: 'ES1 (1997)',
      category: 'Functional Programming',
      importance: 'Enables higher-order functions, callbacks, functional programming paradigms',
    },
    {
      feature: 'Hoisting',
      description: 'Variable và function declarations được "hoisted" lên top của scope',
      introduced: 'ES1 (1997)',
      category: 'Execution Context',
      importance: 'Important để hiểu execution behavior và avoid bugs',
    },
    {
      feature: 'Event Loop',
      description: 'Single-threaded concurrency model với event-driven architecture',
      introduced: 'Browser Environment',
      category: 'Runtime',
      importance: 'Critical để hiểu asynchronous JavaScript và performance',
    },
    {
      feature: 'Modules (ES6)',
      description: 'Import/export system cho code organization và reusability',
      introduced: 'ES6 (2015)',
      category: 'Module System',
      importance: 'Modern JavaScript development standard, code organization',
    },
  ],
};

export const bestPractices: Record<string, BestPractice[]> = {
  variables: [
    {
      title: 'Sử dụng const và let thay vì var',
      description: 'const cho values không thay đổi, let cho block-scoped variables',
      example: 'const API_URL = "https://api.example.com";\nlet userCount = 0;',
      benefit: 'Block scoping, tránh hoisting issues, clearer intent',
    },
    {
      title: 'Meaningful variable names',
      description: 'Sử dụng tên descriptive thay vì abbreviations',
      example: 'const userAccountBalance = 1000; // Good\nconst uab = 1000; // Bad',
      benefit: 'Code readability, maintainability, self-documenting code',
    },
    {
      title: 'Avoid global variables',
      description: 'Minimize global scope pollution bằng modules hoặc namespaces',
      example: 'const MyApp = { config: {}, utils: {} }; // Namespace pattern',
      benefit: 'Tránh naming conflicts, better memory management, cleaner code',
    },
  ],
  functions: [
    {
      title: 'Pure functions khi có thể',
      description: 'Functions không có side effects và return consistent results',
      example:
        'const add = (a, b) => a + b; // Pure\nconst addRandom = (a) => a + Math.random(); // Impure',
      benefit: 'Easier testing, predictable behavior, functional programming benefits',
    },
    {
      title: 'Single Responsibility Principle',
      description: 'Mỗi function chỉ làm một việc specific',
      example:
        'const calculateTax = (price, rate) => price * rate;\nconst formatCurrency = (amount) => `$${amount.toFixed(2)}`;',
      benefit: 'Easier debugging, reusability, cleaner code structure',
    },
    {
      title: 'Use arrow functions appropriately',
      description: 'Arrow functions cho short operations, regular functions cho methods',
      example: 'const numbers = [1,2,3].map(n => n * 2); // Good for short operations',
      benefit: 'Concise syntax, lexical this binding, functional style',
    },
  ],
  async: [
    {
      title: 'Prefer async/await over Promises',
      description: 'async/await syntax cleaner và easier để read than .then()',
      example:
        'async function fetchUser(id) {\n  const response = await fetch(`/users/${id}`);\n  return response.json();\n}',
      benefit: 'Better readability, easier error handling, cleaner code flow',
    },
    {
      title: 'Handle errors properly',
      description: 'Always use try/catch with async/await',
      example:
        'try {\n  const data = await fetchData();\n} catch (error) {\n  console.error("Failed:", error);\n}',
      benefit: 'Robust applications, better user experience, debugging easier',
    },
    {
      title: 'Avoid callback hell',
      description: 'Sử dụng Promises hoặc async/await thay vì nested callbacks',
      example:
        'const result = await step1().then(step2).then(step3); // Chained\n// Better: const result = await step3(await step2(await step1()));',
      benefit: 'Code readability, easier maintenance, better error handling',
    },
  ],
};

export const codeExamples: CodeCategory[] = [
  {
    category: 'Variables và Data Types',
    examples: [
      {
        title: 'Variable Declarations',
        description: 'Các cách khai báo biến trong JavaScript',
        code: `// var - function scoped (legacy)
var name = "John";
var age = 25;

// let - block scoped (mutable)
let score = 100;
let isActive = true;

// const - block scoped (immutable)
const PI = 3.14159;
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000
};

// Destructuring assignment
const user = { name: "Alice", age: 30, city: "Hanoi" };
const { name: userName, age: userAge } = user;

const colors = ["red", "green", "blue"];
const [primary, secondary] = colors;`,
        explanation:
          'const cho values không đổi, let cho variables có thể thay đổi, tránh var trong modern JavaScript',
      },
      {
        title: 'Data Types Examples',
        description: 'Tất cả data types cơ bản trong JavaScript',
        code: `// Primitive types
const message = "Hello World"; // String
const count = 42; // Number
const isValid = true; // Boolean
const empty = null; // Null
let notAssigned; // Undefined
const uniqueId = Symbol("id"); // Symbol
const bigNumber = 123456789012345678901234567890n; // BigInt

// Reference types
const person = {
  name: "John",
  age: 30,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}; // Object

const numbers = [1, 2, 3, 4, 5]; // Array

const calculate = (a, b) => a + b; // Function

// Type checking
console.log(typeof message); // "string"
console.log(typeof count); // "number"
console.log(typeof isValid); // "boolean"
console.log(Array.isArray(numbers)); // true`,
        explanation:
          'JavaScript có 7 primitive types và reference types như objects, arrays, functions',
      },
    ],
  },
  {
    category: 'Functions',
    examples: [
      {
        title: 'Function Declarations và Expressions',
        description: 'Các cách định nghĩa functions trong JavaScript',
        code: `// Function Declaration (hoisted)
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function Expression
const sayGoodbye = function(name) {
  return \`Goodbye, \${name}!\`;
};

// Arrow Function (ES6)
const add = (a, b) => a + b;

// Arrow function with block body
const processUser = (user) => {
  const processed = {
    ...user,
    fullName: \`\${user.firstName} \${user.lastName}\`,
    timestamp: new Date()
  };
  return processed;
};

// Higher-order function
const createMultiplier = (factor) => {
  return (number) => number * factor;
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12`,
        explanation:
          'Function declarations được hoisted, arrow functions có lexical this binding, higher-order functions return functions',
      },
      {
        title: 'Advanced Function Patterns',
        description: 'Các patterns nâng cao với functions',
        code: `// IIFE (Immediately Invoked Function Expression)
(function() {
  const privateVariable = "Cannot access from outside";
  console.log("This runs immediately");
})();

// Closure example
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getValue()); // 1

// Function with default parameters
function createUser(name, age = 18, role = "user") {
  return { name, age, role };
}

// Rest parameters và spread operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const nums = [1, 2, 3, 4];
console.log(sum(...nums)); // 10`,
        explanation:
          'IIFE cho privacy, closures cho state management, default parameters cho flexibility',
      },
    ],
  },
  {
    category: 'Objects và Arrays',
    examples: [
      {
        title: 'Object Creation và Manipulation',
        description: 'Cách tạo và manipulate objects',
        code: `// Object literal
const user = {
  name: "John",
  age: 30,
  email: "john@example.com",

  // Method shorthand
  greet() {
    return \`Hello, I'm \${this.name}\`;
  },

  // Computed property
  [\`user_\${Date.now()}\`]: "dynamic property"
};

// Object methods
const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

// Object destructuring with renaming
const { name: userName, age: userAge, ...otherProps } = user;

// Object spread và cloning
const updatedUser = {
  ...user,
  age: 31,
  city: "Hanoi"
};

// Nested object access
const profile = {
  user: {
    personal: {
      name: "Alice",
      contacts: {
        email: "alice@example.com"
      }
    }
  }
};

// Optional chaining (ES2020)
const email = profile.user?.personal?.contacts?.email;`,
        explanation:
          'Object literals với modern syntax, destructuring, spread operator, optional chaining cho safe property access',
      },
      {
        title: 'Array Methods và Operations',
        description: 'Array methods phổ biến và useful patterns',
        code: `const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];

// Transformation methods
const doubled = numbers.map(n => n * 2);
const filtered = numbers.filter(n => n > 2);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Search methods
const found = fruits.find(fruit => fruit.startsWith('a'));
const index = fruits.findIndex(fruit => fruit === 'banana');
const includes = fruits.includes('orange');

// Iteration methods
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});

// Array spread và destructuring
const moreFruits = [...fruits, "grape", "kiwi"];
const [first, second, ...rest] = moreFruits;

// Advanced array operations
const users = [
  { name: "John", age: 30, city: "Hanoi" },
  { name: "Alice", age: 25, city: "HCMC" },
  { name: "Bob", age: 35, city: "Hanoi" }
];

// Group by city
const groupedByCity = users.reduce((acc, user) => {
  acc[user.city] = acc[user.city] || [];
  acc[user.city].push(user);
  return acc;
}, {});

// Chain methods
const adultNames = users
  .filter(user => user.age >= 30)
  .map(user => user.name)
  .sort();`,
        explanation:
          'Array methods cho functional programming, method chaining cho readable code, reduce cho complex transformations',
      },
    ],
  },
  {
    category: 'Asynchronous Programming',
    examples: [
      {
        title: 'Promises và Async/Await',
        description: 'Modern asynchronous programming patterns',
        code: `// Promise creation
const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "John", email: "john@example.com" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 1000);
  });
};

// Promise chaining
fetchUserData(1)
  .then(user => {
    console.log("User:", user);
    return fetch(\`/posts/\${user.id}\`);
  })
  .then(response => response.json())
  .then(posts => console.log("Posts:", posts))
  .catch(error => console.error("Error:", error));

// Async/await syntax
async function getUserWithPosts(userId) {
  try {
    const user = await fetchUserData(userId);
    const response = await fetch(\`/posts/\${user.id}\`);
    const posts = await response.json();

    return {
      user,
      posts
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

// Parallel execution
async function fetchMultipleUsers(userIds) {
  const promises = userIds.map(id => fetchUserData(id));
  const users = await Promise.all(promises);
  return users;
}`,
        explanation:
          'async/await cho cleaner code, Promise.all cho parallel execution, proper error handling với try/catch',
      },
      {
        title: 'Real-world API Integration',
        description: 'Practical examples của API calls',
        code: `// API service class
class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json'
    };
  }

  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const config = {
      headers: { ...this.defaultHeaders, ...options.headers },
      ...options
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }

      return await response.json();
    } catch (error) {
      console.error(\`API request failed: \${error.message}\`);
      throw error;
    }
  }

  // CRUD operations
  async get(endpoint) {
    return this.request(endpoint);
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

// Usage example
const api = new ApiService('https://jsonplaceholder.typicode.com');

async function manageUsers() {
  try {
    // Fetch all users
    const users = await api.get('/users');
    console.log('Users:', users);

    // Create new user
    const newUser = await api.post('/users', {
      name: 'John Doe',
      email: 'john@example.com'
    });
    console.log('Created:', newUser);

  } catch (error) {
    console.error('Operation failed:', error);
  }
}`,
        explanation:
          'API service pattern cho reusable HTTP operations, proper error handling, clean async/await usage',
      },
    ],
  },
];

export const jsFAQs: FAQ[] = [
  {
    id: 1,
    question: 'Sự khác biệt giữa var, let, và const là gì?',
    answer:
      'var có function scope và hoisted, let có block scope và temporal dead zone, const giống let nhưng không thể reassign. Modern JavaScript khuyến khích dùng const/let.',
    level: 'junior',
    category: 'variables',
    detailed: true,
    example: `// VAR - Function scoped, hoisted
var name = "John";
var name = "Jane"; // OK - có thể redeclare
name = "Bob"; // OK - có thể reassign

function testVar() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1 - accessible outside block
}

// LET - Block scoped
let age = 25;
// let age = 30; // Error - không thể redeclare
age = 30; // OK - có thể reassign

function testLet() {
  if (true) {
    let y = 1;
  }
  // console.log(y); // Error - not accessible outside block
}

// CONST - Block scoped, không thể reassign
const PI = 3.14;
// PI = 3.14159; // Error - không thể reassign
// const PI = 3.14159; // Error - không thể redeclare

const user = { name: "Alice" };
user.name = "Bob"; // OK - có thể modify object properties
user.age = 25; // OK - có thể add properties`,
  },
  {
    id: 2,
    question: 'Hoisting trong JavaScript hoạt động như thế nào?',
    answer:
      'Hoisting là việc JavaScript engine "kéo" variable và function declarations lên top của scope. Function declarations được hoisted hoàn toàn, var được hoisted nhưng undefined, let/const có temporal dead zone.',
    level: 'mid',
    category: 'execution',
    detailed: true,
    example: `// Function Hoisting - hoisted hoàn toàn
console.log(sayHello()); // "Hello!" - works!

function sayHello() {
  return "Hello!";
}

// Var Hoisting - hoisted nhưng undefined
console.log(x); // undefined (not error)
var x = 5;
console.log(x); // 5

// Equivalent to:
// var x;
// console.log(x); // undefined
// x = 5;

// Let/Const Hoisting - Temporal Dead Zone
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// Function Expression - not hoisted
// console.log(sayBye()); // TypeError: sayBye is not a function
var sayBye = function() {
  return "Bye!";
};

// Arrow Function - not hoisted
// console.log(greet()); // TypeError: greet is not a function
var greet = () => "Hi!";`,
  },
  {
    id: 3,
    question: 'Closure là gì và tại sao nó quan trọng?',
    answer:
      'Closure cho phép inner function access variables từ outer function scope ngay cả khi outer function đã return. Quan trọng cho privacy, module patterns, và event handlers.',
    level: 'mid',
    category: 'functions',
    detailed: true,
    example: `// Basic Closure Example
function outerFunction(x) {
  // Outer scope variable

  function innerFunction(y) {
    // Inner function has access to outer variables
    console.log(x + y); // x được "remembered"
  }

  return innerFunction;
}

const addFive = outerFunction(5);
addFive(3); // 8 - x (5) vẫn được nhớ

// Practical Example: Counter
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue()); // 2
// console.log(counter.count); // undefined - private!

// Module Pattern với Closure
const Calculator = (function() {
  let result = 0; // Private state

  return {
    add: (x) => { result += x; return Calculator; },
    multiply: (x) => { result *= x; return Calculator; },
    getResult: () => result,
    reset: () => { result = 0; return Calculator; }
  };
})();

Calculator.add(5).multiply(2).getResult(); // 10`,
  },
  {
    id: 4,
    question: 'Event loop trong JavaScript hoạt động ra sao?',
    answer:
      'Event loop cho phép JavaScript single-threaded thực hiện non-blocking operations. Call stack xử lý sync code, Web APIs handle async operations, callback queue chờ execution.',
    level: 'mid',
    category: 'async',
    detailed: true,
    example: `// Event Loop Example
console.log('1'); // Sync - vào call stack ngay

setTimeout(() => {
  console.log('2'); // Async - vào Web APIs, sau đó callback queue
}, 0);

Promise.resolve().then(() => {
  console.log('3'); // Async - vào microtask queue (priority cao hơn)
});

console.log('4'); // Sync - vào call stack ngay

// Output: 1, 4, 3, 2
// Thứ tự execution:
// 1. Call stack: console.log('1')
// 2. setTimeout gửi đến Web APIs
// 3. Promise.resolve() tạo microtask
// 4. Call stack: console.log('4')
// 5. Call stack empty -> check microtask queue -> console.log('3')
// 6. Microtask queue empty -> check callback queue -> console.log('2')

// Detailed Example
function demonstrateEventLoop() {
  console.log('Start');

  // Macro task (callback queue)
  setTimeout(() => console.log('Timeout 1'), 0);
  setTimeout(() => console.log('Timeout 2'), 0);

  // Micro task (priority queue)
  Promise.resolve().then(() => console.log('Promise 1'));
  Promise.resolve().then(() => console.log('Promise 2'));

  console.log('End');
}

demonstrateEventLoop();
// Output: Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2`,
  },
  {
    id: 5,
    question: 'Prototype chain hoạt động như thế nào?',
    answer:
      'Mỗi object có __proto__ link đến prototype object. Khi access property không tồn tại, JavaScript tìm kiếm lên prototype chain cho đến null.',
    level: 'mid',
    category: 'objects',
    detailed: true,
    example: `// Prototype Chain Example
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

Person.prototype.species = 'Homo sapiens';

function Developer(name, language) {
  Person.call(this, name); // Call parent constructor
  this.language = language;
}

// Set up inheritance
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = function() {
  return \`\${this.name} codes in \${this.language}\`;
};

const john = new Developer('John', 'JavaScript');

// Prototype chain lookup:
console.log(john.name); // 'John' - own property
console.log(john.code()); // 'John codes in JavaScript' - Developer.prototype
console.log(john.greet()); // 'Hello, I'm John' - Person.prototype
console.log(john.species); // 'Homo sapiens' - Person.prototype

// Check prototype chain
console.log(john.__proto__ === Developer.prototype); // true
console.log(Developer.prototype.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

// Modern class syntax (same prototype chain)
class ModernPerson {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}

class ModernDeveloper extends ModernPerson {
  constructor(name, language) {
    super(name);
    this.language = language;
  }

  code() {
    return \`\${this.name} codes in \${this.language}\`;
  }
}`,
  },
  {
    id: 6,
    question: 'Arrow functions khác regular functions ở điểm nào?',
    answer:
      'Arrow functions có lexical this binding (không có own this), không có arguments object, không thể dùng như constructor với new, syntax ngắn gọn hơn.',
    level: 'junior',
    category: 'functions',
    detailed: false,
    example: `// Regular Function vs Arrow Function
const obj = {
  name: 'MyObject',

  // Regular function - có own 'this'
  regularMethod: function() {
    console.log('Regular:', this.name); // 'MyObject'

    setTimeout(function() {
      console.log('Nested regular:', this.name); // undefined (this = window/global)
    }, 100);
  },

  // Arrow function - lexical 'this' binding
  arrowMethod: () => {
    console.log('Arrow:', this.name); // undefined (this = global scope)
  },

  // Mixed approach - common pattern
  mixedMethod: function() {
    console.log('Mixed:', this.name); // 'MyObject'

    setTimeout(() => {
      console.log('Nested arrow:', this.name); // 'MyObject' (inherits this)
    }, 100);
  }
};

// Arguments object difference
function regularFunc() {
  console.log(arguments); // Arguments object có sẵn
  console.log(arguments.length);
}

const arrowFunc = () => {
  // console.log(arguments); // ReferenceError: arguments is not defined
  // Sử dụng rest parameters thay thế
};

const arrowWithRest = (...args) => {
  console.log(args); // Array of arguments
  console.log(args.length);
};

// Constructor difference
function RegularConstructor(name) {
  this.name = name;
}

const ArrowConstructor = (name) => {
  this.name = name;
};

const instance1 = new RegularConstructor('John'); // OK
// const instance2 = new ArrowConstructor('Jane'); // TypeError: not a constructor

// Method definitions in classes
class MyClass {
  constructor(name) {
    this.name = name;
  }

  // Regular method - has 'this' context
  regularMethod() {
    return \`Hello \${this.name}\`;
  }

  // Arrow method - lexical 'this'
  arrowMethod = () => {
    return \`Hi \${this.name}\`;
  }
}`,
  },
  {
    id: 7,
    question: 'Promise và async/await khác nhau như thế nào?',
    answer:
      'async/await là syntactic sugar cho Promises, giúp code readable hơn. async functions return Promise, await pause execution cho đến khi Promise resolve.',
    level: 'mid',
    category: 'async',
    detailed: false,
    example: `// Promise Chain vs Async/Await
// Promise chain approach
function fetchUserDataPromise(userId) {
  return fetch(\`/api/users/\${userId}\`)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(user => {
      return fetch(\`/api/posts/\${user.id}\`);
    })
    .then(response => response.json())
    .then(posts => {
      return { user, posts };
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

// Async/await approach - same logic, cleaner syntax
async function fetchUserDataAsync(userId) {
  try {
    const userResponse = await fetch(\`/api/users/\${userId}\`);
    if (!userResponse.ok) {
      throw new Error('User not found');
    }

    const user = await userResponse.json();
    const postsResponse = await fetch(\`/api/posts/\${user.id}\`);
    const posts = await postsResponse.json();

    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Async function always returns Promise
async function simpleAsync() {
  return 'Hello'; // Automatically wrapped in Promise.resolve('Hello')
}

simpleAsync().then(result => console.log(result)); // 'Hello'

// Error handling comparison
// Promise approach
fetchUserDataPromise(1)
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/await approach
async function handleUser() {
  try {
    const data = await fetchUserDataAsync(1);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Parallel execution
// Promise.all approach
Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]).then(responses => {
  return Promise.all(responses.map(r => r.json()));
}).then(data => {
  const [users, posts, comments] = data;
  console.log({ users, posts, comments });
});

// Async/await parallel approach
async function fetchAllData() {
  const [usersRes, postsRes, commentsRes] = await Promise.all([
    fetch('/api/users'),
    fetch('/api/posts'),
    fetch('/api/comments')
  ]);

  const [users, posts, comments] = await Promise.all([
    usersRes.json(),
    postsRes.json(),
    commentsRes.json()
  ]);

  return { users, posts, comments };
}`,
  },
  {
    id: 8,
    question: 'Debouncing và Throttling khác nhau ra sao?',
    answer:
      'Debouncing delay execution cho đến khi không có calls trong specified time. Throttling limit execution frequency. Debouncing cho search, throttling cho scroll events.',
    level: 'mid',
    category: 'performance',
    detailed: true,
    example: `// Debouncing - delay execution until no more calls
function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    // Clear previous timeout
    clearTimeout(timeoutId);

    // Set new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Throttling - limit execution frequency
function throttle(func, limit) {
  let inThrottle;

  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Practical Examples
// Search input - debouncing
const searchInput = document.getElementById('search');
const searchAPI = (query) => {
  console.log(\`Searching for: \${query}\`);
  // API call here
};

const debouncedSearch = debounce((event) => {
  searchAPI(event.target.value);
}, 300);

// searchInput.addEventListener('input', debouncedSearch);

// Scroll event - throttling
const handleScroll = () => {
  console.log('Scroll position:', window.scrollY);
  // Update UI, lazy load images, etc.
};

const throttledScroll = throttle(handleScroll, 100);

// window.addEventListener('scroll', throttledScroll);

// Advanced debouncing with immediate execution option
function advancedDebounce(func, delay, immediate = false) {
  let timeoutId;

  return function(...args) {
    const callNow = immediate && !timeoutId;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) func.apply(this, args);
    }, delay);

    if (callNow) func.apply(this, args);
  };
}

// Button click protection - immediate debounce
const saveButton = document.getElementById('save');
const saveData = () => {
  console.log('Saving data...');
  // Prevent multiple clicks while processing
};

const debouncedSave = advancedDebounce(saveData, 2000, true);
// saveButton.addEventListener('click', debouncedSave);

// Performance comparison
let normalCount = 0;
let debouncedCount = 0;
let throttledCount = 0;

const normalHandler = () => normalCount++;
const debouncedHandler = debounce(() => debouncedCount++, 100);
const throttledHandler = throttle(() => throttledCount++, 100);

// Simulate rapid events
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    normalHandler();     // Will execute 100 times
    debouncedHandler();  // Will execute 1 time (after last call + delay)
    throttledHandler();  // Will execute ~10 times (depending on timing)
  }, i * 10);
}`,
  },
  {
    id: 9,
    question: 'Module system trong JavaScript hoạt động như thế nào?',
    answer:
      'ES6 modules sử dụng import/export syntax. Named exports cho multiple exports, default export cho main export. CommonJS (require/module.exports) dùng trong Node.js.',
    level: 'mid',
    category: 'modules',
    detailed: true,
    example: `// ES6 Modules (Modern JavaScript)

// math.js - Multiple exports
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Default export
export default function subtract(a, b) {
  return a - b;
}

// Alternative syntax
const divide = (a, b) => a / b;
const power = (base, exp) => Math.pow(base, exp);

export { divide, power };

// user.js - Importing
import subtract, { PI, add, multiply } from './math.js'; // Default + named
import * as MathUtils from './math.js'; // All exports as object
import { divide as divideNumbers } from './math.js'; // Rename import

// Usage
console.log(PI); // 3.14159
console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6 (default export)
console.log(MathUtils.E); // 2.71828
console.log(divideNumbers(10, 2)); // 5

// Dynamic imports (ES2020)
async function loadMath() {
  const mathModule = await import('./math.js');
  console.log(mathModule.PI);
}

// Conditional loading
if (needAdvancedMath) {
  import('./advanced-math.js').then(module => {
    // Use advanced math functions
  });
}

// CommonJS (Node.js traditional)

// math-commonjs.js
const PI = 3.14159;
const E = 2.71828;

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// Single export
module.exports = {
  PI,
  E,
  add,
  multiply
};

// Or individual exports
exports.PI = PI;
exports.add = add;

// user-commonjs.js
const { PI, add } = require('./math-commonjs.js'); // Named imports
const math = require('./math-commonjs.js'); // Full module
const subtract = require('./subtract.js'); // Single function

// Module patterns
// IIFE Module Pattern (before ES6)
const MyModule = (function() {
  let privateVar = 0;

  function privateFunction() {
    return privateVar++;
  }

  return {
    publicMethod: function() {
      return privateFunction();
    },
    publicVar: 'I am public'
  };
})();

// Revealing Module Pattern
const Calculator = (function() {
  let result = 0;

  function add(x) { result += x; }
  function multiply(x) { result *= x; }
  function getResult() { return result; }
  function reset() { result = 0; }

  return {
    add,
    multiply,
    getResult,
    reset
  };
})();`,
  },
  {
    id: 10,
    question: 'Memory leaks phổ biến trong JavaScript và cách tránh?',
    answer:
      'Common causes: global variables, forgotten timers, closures holding references, detached DOM nodes. Tránh bằng proper cleanup, weak references, monitoring tools.',
    level: 'senior',
    category: 'performance',
    detailed: true,
    example: `// Common Memory Leak Patterns và Solutions

// 1. Global Variables Leak
// BAD - Creates global variables
function createUser() {
  // Missing var/let/const creates global
  name = "John";
  age = 30;
}

// GOOD - Proper scoping
function createUser() {
  const name = "John";
  const age = 30;
  return { name, age };
}

// 2. Forgotten Timers
// BAD - Timer not cleared
class Component {
  constructor() {
    this.data = new Array(1000000).fill('data');

    // Timer keeps component in memory
    this.timer = setInterval(() => {
      console.log('Still running...');
    }, 1000);
  }
}

// GOOD - Proper cleanup
class Component {
  constructor() {
    this.data = new Array(1000000).fill('data');
    this.timer = setInterval(() => {
      console.log('Still running...');
    }, 1000);
  }

  destroy() {
    clearInterval(this.timer);
    this.data = null;
  }
}

// 3. Closures Holding References
// BAD - Closure keeps large object in memory
function processData(largeObject) {
  const processor = {
    process: function() {
      // Only needs one property but keeps entire object
      return largeObject.id;
    }
  };

  // largeObject can't be garbage collected
  return processor;
}

// GOOD - Extract only needed data
function processData(largeObject) {
  const id = largeObject.id; // Extract only what's needed

  const processor = {
    process: function() {
      return id; // Closure only holds primitive value
    }
  };

  return processor;
}

// 4. Detached DOM Nodes
// BAD - DOM references prevent garbage collection
let detachedNodes = [];

function removeElement() {
  const element = document.getElementById('myElement');
  detachedNodes.push(element); // Keeps reference
  element.parentNode.removeChild(element);
}

// GOOD - Clean up references
function removeElement() {
  const element = document.getElementById('myElement');
  element.parentNode.removeChild(element);
  // Don't store references to removed elements
}

// 5. Event Listeners Not Removed
// BAD - Event listeners keep objects alive
class MyComponent {
  constructor() {
    this.data = new Array(1000000).fill('data');
    this.handler = this.handleClick.bind(this);
    document.addEventListener('click', this.handler);
  }

  handleClick() {
    // Component logic
  }
}

// GOOD - Remove listeners
class MyComponent {
  constructor() {
    this.data = new Array(1000000).fill('data');
    this.handler = this.handleClick.bind(this);
    document.addEventListener('click', this.handler);
  }

  handleClick() {
    // Component logic
  }

  destroy() {
    document.removeEventListener('click', this.handler);
    this.data = null;
    this.handler = null;
  }
}

// Solutions and Best Practices

// Use WeakMap for private data
const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { name, sensitive: 'secret' });
  }

  getName() {
    return privateData.get(this).name;
  }
}

// WeakMap doesn't prevent garbage collection
// When User instance is deleted, private data is automatically cleaned

// Use WeakSet for tracking objects
const processedObjects = new WeakSet();

function processObject(obj) {
  if (processedObjects.has(obj)) {
    return; // Already processed
  }

  // Process object
  processedObjects.add(obj);
}

// Memory monitoring utilities
function measureMemoryUsage() {
  if (performance.memory) {
    console.log('Used:', performance.memory.usedJSHeapSize);
    console.log('Total:', performance.memory.totalJSHeapSize);
    console.log('Limit:', performance.memory.jsHeapSizeLimit);
  }
}

// Force garbage collection (Chrome DevTools only)
function forceGC() {
  if (window.gc) {
    window.gc();
  }
}

// Memory leak detection helper
function detectMemoryLeaks() {
  const before = performance.memory?.usedJSHeapSize || 0;

  return function() {
    const after = performance.memory?.usedJSHeapSize || 0;
    console.log(\`Memory change: \${after - before} bytes\`);
  };
}`,
  },
  {
    id: 11,
    question: 'Map và Set khác Array và Object ở điểm nào?',
    answer:
      'Map có any type keys, maintain insertion order, size property. Set chỉ chứa unique values. Performance tốt hơn cho frequent additions/deletions so với Array/Object.',
    level: 'mid',
    category: 'data-structures',
    detailed: false,
    example: `// Map vs Object
// Object limitations
const obj = {};
obj['1'] = 'string key';
obj[1] = 'number key'; // Overwrites string key!
console.log(obj); // { '1': 'number key' }

// Map advantages
const map = new Map();
map.set('1', 'string key');
map.set(1, 'number key');
map.set(true, 'boolean key');
map.set({}, 'object key');

console.log(map.get('1')); // 'string key'
console.log(map.get(1)); // 'number key'
console.log(map.size); // 4

// Map methods
map.set('name', 'John');
console.log(map.has('name')); // true
map.delete('name');
console.log(map.has('name')); // false

// Iteration maintains insertion order
for (const [key, value] of map) {
  console.log(key, value);
}

// Set vs Array
// Array with duplicates
const arr = [1, 2, 2, 3, 3, 3];
console.log(arr.length); // 6

// Set automatically removes duplicates
const set = new Set([1, 2, 2, 3, 3, 3]);
console.log(set.size); // 3

// Set methods
set.add(4);
set.add(4); // Ignored - already exists
console.log(set.has(3)); // true
set.delete(2);
console.log(set.has(2)); // false

// Convert Set to Array
const uniqueArray = [...set]; // [1, 3, 4]

// Performance comparison examples
// Object property access vs Map
const objTest = {};
const mapTest = new Map();

// Adding properties/entries
console.time('Object set');
for (let i = 0; i < 100000; i++) {
  objTest[i] = i;
}
console.timeEnd('Object set');

console.time('Map set');
for (let i = 0; i < 100000; i++) {
  mapTest.set(i, i);
}
console.timeEnd('Map set');

// Array includes vs Set has
const largeArray = Array.from({length: 10000}, (_, i) => i);
const largeSet = new Set(largeArray);

console.time('Array includes');
largeArray.includes(9999);
console.timeEnd('Array includes');

console.time('Set has');
largeSet.has(9999);
console.timeEnd('Set has');

// Practical use cases
// Remove duplicates from array
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)]; // [1, 2, 3, 4, 5]

// Map for caching
const cache = new Map();
function expensiveOperation(input) {
  if (cache.has(input)) {
    return cache.get(input);
  }

  const result = input * 2; // Expensive calculation
  cache.set(input, result);
  return result;
}

// Set for tracking processed items
const processed = new Set();
function processItems(items) {
  items.forEach(item => {
    if (!processed.has(item.id)) {
      // Process item
      processed.add(item.id);
    }
  });
}`,
  },
  {
    id: 12,
    question: 'WeakMap và WeakSet khác Map/Set như thế nào?',
    answer:
      'Weak collections có weak references, không prevent garbage collection, không enumerable, chỉ object keys. Dùng cho private data và avoiding memory leaks.',
    level: 'senior',
    category: 'memory',
    detailed: true,
    example: `// WeakMap vs Map
// Regular Map keeps strong references
const regularMap = new Map();
let obj1 = { name: 'John' };

regularMap.set(obj1, 'some data');
obj1 = null; // Object still exists in memory due to Map reference

// WeakMap has weak references
const weakMap = new WeakMap();
let obj2 = { name: 'Jane' };

weakMap.set(obj2, 'some data');
obj2 = null; // Object can be garbage collected

// WeakMap limitations
const wm = new WeakMap();

// Only objects as keys (not primitives)
// wm.set('string', 'value'); // TypeError
// wm.set(123, 'value'); // TypeError
wm.set({}, 'value'); // OK

// Not enumerable - no iteration
// console.log(wm.size); // undefined
// for (let entry of wm) {} // TypeError

// WeakMap use cases
// 1. Private data storage
const privateData = new WeakMap();

class User {
  constructor(name, ssn) {
    this.name = name; // Public
    privateData.set(this, { ssn }); // Private
  }

  getSSN() {
    return privateData.get(this).ssn;
  }

  // When User instance is deleted, private data is automatically cleaned
}

const user = new User('John', '123-45-6789');
console.log(user.name); // 'John'
console.log(user.getSSN()); // '123-45-6789'
// console.log(user.ssn); // undefined - private!

// 2. DOM node metadata without memory leaks
const elementMetadata = new WeakMap();

function attachMetadata(element, data) {
  elementMetadata.set(element, data);
}

function getMetadata(element) {
  return elementMetadata.get(element);
}

// When DOM element is removed, metadata is automatically cleaned

// 3. Caching without memory leaks
const cache = new WeakMap();

function processObject(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  const result = {
    processed: true,
    timestamp: Date.now(),
    data: obj.data?.toUpperCase()
  };

  cache.set(obj, result);
  return result;
}

// WeakSet vs Set
// WeakSet for object tracking
const processedObjects = new WeakSet();

class DataProcessor {
  process(obj) {
    if (processedObjects.has(obj)) {
      console.log('Already processed');
      return;
    }

    // Process object
    console.log('Processing:', obj);
    processedObjects.add(obj);
  }
}

const processor = new DataProcessor();
const data1 = { id: 1, value: 'test' };
const data2 = { id: 2, value: 'test2' };

processor.process(data1); // Processing: {id: 1, value: 'test'}
processor.process(data1); // Already processed

// When data1 is deleted, it's automatically removed from WeakSet

// Comparison table example
function demonstrateCollections() {
  // Map - strong references, enumerable
  const map = new Map();
  map.set('key1', 'value1');
  console.log('Map size:', map.size); // 1
  console.log('Map iterable:', [...map]); // [['key1', 'value1']]

  // WeakMap - weak references, not enumerable
  const weakMap = new WeakMap();
  const objKey = {};
  weakMap.set(objKey, 'value1');
  // console.log('WeakMap size:', weakMap.size); // undefined
  // console.log('WeakMap iterable:', [...weakMap]); // TypeError

  // Set - strong references, enumerable
  const set = new Set();
  set.add('value1');
  console.log('Set size:', set.size); // 1
  console.log('Set iterable:', [...set]); // ['value1']

  // WeakSet - weak references, not enumerable
  const weakSet = new WeakSet();
  const objValue = {};
  weakSet.add(objValue);
  // console.log('WeakSet size:', weakSet.size); // undefined
  // console.log('WeakSet iterable:', [...weakSet]); // TypeError
}

// Memory management example
function memoryExample() {
  const regularMap = new Map();
  const weakMap = new WeakMap();

  function createObjects() {
    for (let i = 0; i < 1000; i++) {
      const obj = { id: i, data: new Array(1000).fill(i) };
      regularMap.set(obj, \`regular-\${i}\`);
      weakMap.set(obj, \`weak-\${i}\`);
    }
    // Objects go out of scope here
  }

  createObjects();

  // Force garbage collection (Chrome DevTools)
  if (window.gc) {
    window.gc();
  }

  console.log('Regular Map size:', regularMap.size); // 1000 (objects kept alive)
  // WeakMap objects can be garbage collected
}`,
  },
];

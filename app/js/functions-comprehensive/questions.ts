export interface Question {
  id: string;
  type: 'theory' | 'practice' | 'interview' | 'multiple-choice' | 'true-false';
  level: 'beginner' | 'intermediate' | 'advanced';
  category:
    | 'declaration'
    | 'expression'
    | 'arrow'
    | 'scope'
    | 'closure'
    | 'hoisting'
    | 'higher-order'
    | 'async'
    | 'best-practices'
    | 'syntax';
  question: string;
  options?: string[];
  correctAnswer?: string | number;
  explanation: string;
  code?: string;
  relatedTopics?: string[];
}

export const FUNCTIONS_QUESTIONS: Question[] = [
  // Theory Questions - Beginner
  {
    id: 'theory-1',
    type: 'theory',
    level: 'beginner',
    category: 'declaration',
    question: 'Sự khác biệt chính giữa function declaration và function expression là gì?',
    options: [
      'Function declaration có hoisting, function expression không có',
      'Function expression nhanh hơn function declaration',
      'Function declaration chỉ dùng được trong ES6',
      'Không có sự khác biệt nào',
    ],
    correctAnswer: 0,
    explanation:
      'Function declaration được hoisted nên có thể gọi trước khi khai báo, trong khi function expression không có hoisting.',
    code: `// Function declaration - có hoisting
console.log(sayHello()); // "Hello!" - OK

function sayHello() {
  return "Hello!";
}

// Function expression - không có hoisting
console.log(sayBye()); // ReferenceError
const sayBye = function() {
  return "Bye!";
};`,
    relatedTopics: ['hoisting', 'declaration', 'expression'],
  },

  {
    id: 'theory-2',
    type: 'theory',
    level: 'beginner',
    category: 'arrow',
    question: 'Arrow function khác với regular function ở điểm nào?',
    options: [
      'Arrow function có cú pháp ngắn hơn và lexical this binding',
      'Arrow function chạy nhanh hơn',
      'Arrow function chỉ dùng trong ES5',
      'Arrow function có thể dùng làm constructor',
    ],
    correctAnswer: 0,
    explanation:
      'Arrow function có cú pháp ngắn gọn hơn và không có this binding riêng (lexical this), không thể dùng làm constructor.',
    code: `const obj = {
  name: "Test",
  regularMethod: function() {
    console.log(this.name); // "Test"
  },
  arrowMethod: () => {
    console.log(this.name); // undefined (lexical this)
  }
};`,
    relatedTopics: ['arrow', 'this', 'syntax'],
  },

  // Practice Questions - Intermediate
  {
    id: 'practice-1',
    type: 'practice',
    level: 'intermediate',
    category: 'closure',
    question: 'Output của đoạn code sau là gì?',
    code: `function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // ?
console.log(counter1()); // ?
console.log(counter2()); // ?`,
    options: ['1, 2, 1', '1, 1, 1', '0, 1, 2', '1, 2, 3'],
    correctAnswer: 0,
    explanation:
      'Mỗi lần gọi createCounter() tạo ra một closure mới với biến count riêng biệt. counter1 và counter2 có scope độc lập.',
    relatedTopics: ['closure', 'scope'],
  },

  {
    id: 'practice-2',
    type: 'practice',
    level: 'intermediate',
    category: 'hoisting',
    question: 'Đoạn code nào sẽ throw error?',
    options: [
      'console.log(func1()); function func1() { return "OK"; }',
      'console.log(func2()); const func2 = () => "OK";',
      'function test() { return a; var a = 5; }',
      'var b = 1; function test() { return b; }',
    ],
    correctAnswer: 1,
    explanation:
      'Const/let function expressions không có hoisting, nên không thể gọi trước khi khai báo. Function declarations có hoisting đầy đủ.',
    code: `// Working - function declaration hoisting
console.log(func1()); // "OK"
function func1() { return "OK"; }

// Error - const function expression
console.log(func2()); // ReferenceError
const func2 = () => "OK";`,
    relatedTopics: ['hoisting', 'declaration', 'expression'],
  },

  {
    id: 'practice-3',
    type: 'practice',
    level: 'intermediate',
    category: 'higher-order',
    question: 'Kết quả của function composition này là gì?',
    code: `const add5 = x => x + 5;
const multiply3 = x => x * 3;
const subtract2 = x => x - 2;

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const combined = compose(subtract2, multiply3, add5);
console.log(combined(10)); // ?`,
    options: ['43', '41', '23', '38'],
    correctAnswer: 0,
    explanation:
      'Thực hiện từ phải sang trái: 10 + 5 = 15, 15 * 3 = 45, 45 - 2 = 43. Function composition áp dụng functions theo thứ tự từ phải sang trái.',
    relatedTopics: ['higher-order', 'composition'],
  },

  // Advanced Questions
  {
    id: 'advanced-1',
    type: 'practice',
    level: 'advanced',
    category: 'async',
    question: 'Output của async function này là gì?',
    code: `async function test() {
  console.log('1');

  const promise1 = new Promise(resolve => {
    console.log('2');
    resolve('3');
  });

  console.log('4');

  const result = await promise1;
  console.log(result);

  console.log('5');
}

console.log('start');
test();
console.log('end');`,
    options: [
      'start, 1, 2, 4, end, 3, 5',
      'start, 1, 2, 4, 3, 5, end',
      'start, end, 1, 2, 4, 3, 5',
      '1, 2, 4, 3, 5, start, end',
    ],
    correctAnswer: 1,
    explanation:
      'Promise constructor chạy đồng bộ ngay lập tức. Chỉ có await làm cho code sau nó chờ. Do đó: start, 1, 2, 4, 3, 5, end.',
    relatedTopics: ['async', 'promises', 'event-loop'],
  },

  {
    id: 'advanced-2',
    type: 'theory',
    level: 'advanced',
    category: 'scope',
    question: 'Trong JavaScript, lexical scoping có nghĩa là gì?',
    options: [
      'Scope được xác định bởi nơi function được gọi',
      'Scope được xác định bởi nơi function được khai báo',
      'Scope thay đổi theo thời gian runtime',
      'Scope chỉ áp dụng cho arrow functions',
    ],
    correctAnswer: 1,
    explanation:
      'Lexical scoping (static scoping) có nghĩa là scope của biến được xác định bởi vị trí khai báo trong code, không phải nơi function được gọi.',
    code: `let x = 'global';

function outer() {
  let x = 'outer';

  function inner() {
    console.log(x); // 'outer' - lexical scope
  }

  return inner;
}

const fn = outer();
fn(); // 'outer' - không phải 'global'`,
    relatedTopics: ['scope', 'closure', 'lexical'],
  },

  // Interview Questions
  {
    id: 'interview-1',
    type: 'interview',
    level: 'advanced',
    category: 'closure',
    question: 'Tại sao closure quan trọng trong JavaScript? Hãy giải thích với ví dụ.',
    explanation:
      'Closure cho phép functions truy cập biến từ scope bên ngoài ngay cả sau khi scope đó đã kết thúc. Điều này rất quan trọng cho: 1) Data privacy/encapsulation, 2) Module patterns, 3) Callbacks và event handlers, 4) Function factories và currying.',
    code: `// Data privacy với closure
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return 'Insufficient funds';
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
// Không thể truy cập trực tiếp balance
// balance là private nhờ closure`,
    relatedTopics: ['closure', 'encapsulation', 'module-pattern'],
  },

  {
    id: 'interview-2',
    type: 'interview',
    level: 'intermediate',
    category: 'best-practices',
    question: 'Khi nào nên sử dụng function declaration vs function expression vs arrow function?',
    explanation:
      'Function Declaration: Khi cần hoisting, làm main functions. Function Expression: Khi cần gán function cho biến, conditional functions. Arrow Function: Callbacks, array methods, khi không cần this riêng.',
    code: `// Function Declaration - main functions
function calculateTax(income) {
  return income * 0.1;
}

// Function Expression - conditional
const processor = condition ?
  function(data) { return processA(data); } :
  function(data) { return processB(data); };

// Arrow Function - callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

// Object methods - avoid arrow functions
const obj = {
  name: 'Test',
  greet() { // not arrow function
    return \`Hello, \${this.name}\`;
  }
};`,
    relatedTopics: ['best-practices', 'declaration', 'expression', 'arrow'],
  },

  // True/False Questions
  {
    id: 'tf-1',
    type: 'true-false',
    level: 'beginner',
    category: 'syntax',
    question: 'Arrow functions có thể được sử dụng làm constructors với từ khóa "new".',
    correctAnswer: 'false',
    explanation:
      'Sai. Arrow functions không thể được sử dụng làm constructors. Chúng không có internal [[Construct]] method và sẽ throw TypeError khi dùng với new.',
    code: `const ArrowFunc = () => {};
const RegularFunc = function() {};

new RegularFunc(); // OK
new ArrowFunc(); // TypeError: ArrowFunc is not a constructor`,
    relatedTopics: ['arrow', 'constructor', 'syntax'],
  },

  {
    id: 'tf-2',
    type: 'true-false',
    level: 'intermediate',
    category: 'hoisting',
    question: 'Function expressions được hoisted giống như function declarations.',
    correctAnswer: 'false',
    explanation:
      'Sai. Chỉ có function declarations được hoisted hoàn toàn. Function expressions (bao gồm arrow functions) không được hoisted.',
    code: `// Function declaration - hoisted
sayHello(); // "Hello!" - OK
function sayHello() {
  return "Hello!";
}

// Function expression - not hoisted
sayBye(); // ReferenceError
const sayBye = function() {
  return "Bye!";
};`,
    relatedTopics: ['hoisting', 'declaration', 'expression'],
  },
];

// Helper functions for filtering and searching
export const getQuestionsByCategory = (category: string): Question[] => {
  return FUNCTIONS_QUESTIONS.filter(question => question.category === category);
};

export const getQuestionsByLevel = (level: string): Question[] => {
  return FUNCTIONS_QUESTIONS.filter(question => question.level === level);
};

export const getQuestionsByType = (type: string): Question[] => {
  return FUNCTIONS_QUESTIONS.filter(question => question.type === type);
};

export const searchQuestions = (term: string): Question[] => {
  const lowerTerm = term.toLowerCase();
  return FUNCTIONS_QUESTIONS.filter(
    question =>
      question.question.toLowerCase().includes(lowerTerm) ||
      question.explanation.toLowerCase().includes(lowerTerm) ||
      (question.code && question.code.toLowerCase().includes(lowerTerm))
  );
};

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...FUNCTIONS_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const QUESTION_CATEGORIES = [
  'declaration',
  'expression',
  'arrow',
  'scope',
  'closure',
  'hoisting',
  'higher-order',
  'async',
  'best-practices',
  'syntax',
] as const;
export const QUESTION_LEVELS = ['beginner', 'intermediate', 'advanced'] as const;
export const QUESTION_TYPES = [
  'theory',
  'practice',
  'interview',
  'multiple-choice',
  'true-false',
] as const;

// Legacy exports for compatibility
export const questions = FUNCTIONS_QUESTIONS;
export const questionCategories = QUESTION_CATEGORIES;
export const questionDifficulties = QUESTION_LEVELS;
export const getQuestionsByDifficulty = getQuestionsByLevel;

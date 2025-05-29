export interface Question {
  id: string;
  type: 'theory' | 'practice' | 'interview';
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'hoisting' | 'scope' | 'closures' | 'temporal-dead-zone' | 'best-practices' | 'syntax';
  question: string;
  options?: string[];
  correctAnswer?: string | number;
  explanation: string;
  codeExample?: string;
  relatedTopics?: string[];
}

export const VAR_LET_CONST_QUESTIONS: Question[] = [
  // Theory Questions - Beginner
  {
    id: 'theory-1',
    type: 'theory',
    level: 'beginner',
    category: 'scope',
    question: 'Sự khác biệt chính giữa var, let và const là gì?',
    options: [
      'var có function scope, let và const có block scope',
      'var mới hơn let và const',
      'var nhanh hơn let và const',
      'Không có sự khác biệt',
    ],
    correctAnswer: 0,
    explanation:
      'var có function scope hoặc global scope, trong khi let và const có block scope. Đây là sự khác biệt quan trọng nhất.',
    codeExample: `function example() {
  if (true) {
    var a = 1;    // function scoped
    let b = 2;    // block scoped
    const c = 3;  // block scoped
  }
  console.log(a); // 1 (accessible)
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}`,
    relatedTopics: ['scope', 'hoisting'],
  },

  {
    id: 'theory-2',
    type: 'theory',
    level: 'beginner',
    category: 'temporal-dead-zone',
    question: 'Temporal Dead Zone (TDZ) là gì?',
    options: [
      'Thời gian biến bị xóa khỏi memory',
      'Khoảng thời gian từ khi scope bắt đầu đến khi biến được khai báo',
      'Lỗi syntax trong JavaScript',
      'Một loại scope đặc biệt',
    ],
    correctAnswer: 1,
    explanation:
      'TDZ là khoảng thời gian từ khi scope bắt đầu đến khi biến let/const được khai báo. Trong thời gian này, biến không thể được truy cập.',
    codeExample: `console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5; // x được khai báo ở đây, TDZ kết thúc`,
    relatedTopics: ['hoisting', 'let', 'const'],
  },

  // Practice Questions - Intermediate
  {
    id: 'practice-1',
    type: 'practice',
    level: 'intermediate',
    category: 'closures',
    question: 'Output của đoạn code sau là gì?',
    codeExample: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}`,
    options: ['0, 1, 2', '3, 3, 3', 'undefined, undefined, undefined', 'ReferenceError'],
    correctAnswer: 1,
    explanation:
      'var có function scope nên chỉ có 1 biến i cho cả loop. Khi closure thực thi, i đã có giá trị cuối cùng là 3.',
    relatedTopics: ['closures', 'scope', 'var'],
  },

  {
    id: 'practice-2',
    type: 'practice',
    level: 'intermediate',
    category: 'hoisting',
    question: 'Đoạn code nào sẽ throw error?',
    options: [
      'console.log(a); var a = 5;',
      'console.log(b); let b = 5;',
      'var c = 1; var c = 2;',
      'function test() { return d; var d = 3; }',
    ],
    correctAnswer: 1,
    explanation:
      'let có Temporal Dead Zone, không thể truy cập trước khi khai báo. var được hoisted và initialized với undefined.',
    codeExample: `// Working with var
console.log(a); // undefined (not error)
var a = 5;

// Error with let
console.log(b); // ReferenceError
let b = 5;`,
    relatedTopics: ['hoisting', 'temporal-dead-zone'],
  },

  // Interview Questions - Advanced
  {
    id: 'interview-1',
    type: 'interview',
    level: 'advanced',
    category: 'best-practices',
    question: 'Tại sao nên ưu tiên const > let > var trong modern JavaScript?',
    explanation: `1. **const by default**: Immutable references giúp code predictable hơn và tránh bugs
2. **let when reassignment needed**: Block scope rõ ràng, tránh hoisting confusion
3. **Avoid var**: Function scope có thể gây confusion, hoisting behavior không intuitive
4. **Performance**: Modern engines optimize tốt hơn với const/let
5. **Code clarity**: Intent rõ ràng hơn (const = won't change, let = might change)`,
    codeExample: `// ✅ Good
const users = []; // Won't reassign array reference
let currentIndex = 0; // Will change value
users.push(newUser); // Mutating content is OK with const

// ❌ Avoid
var data = []; // Unclear intent, function scoped`,
    relatedTopics: ['best-practices', 'performance', 'code-quality'],
  },

  {
    id: 'interview-2',
    type: 'interview',
    level: 'advanced',
    category: 'scope',
    question: 'Giải thích sự khác biệt giữa module scope và global scope với let/const vs var',
    explanation: `**Module Scope (ES6 Modules):**
- let/const ở top-level tạo module-scoped variables, không attach vào global object
- var ở top-level vẫn có thể tạo global properties (tùy environment)
- Mỗi module có scope riêng, tránh pollution

**Global Scope (Scripts):**
- var tạo properties trên global object (window/global)
- let/const không tạo global properties
- Có thể gây naming conflicts`,
    codeExample: `// In module
let moduleVar = 'module'; // Module scoped
const MODULE_CONST = 'const'; // Module scoped
var globalVar = 'global'; // May create global property

// moduleVar, MODULE_CONST không accessible từ bên ngoài module
// globalVar có thể accessible as window.globalVar (browser)`,
    relatedTopics: ['modules', 'global-scope', 'es6'],
  },

  // More practice questions
  {
    id: 'practice-3',
    type: 'practice',
    level: 'intermediate',
    category: 'syntax',
    question: 'Đoạn code nào là valid?',
    options: [
      'const obj = {}; obj = { new: true };',
      'const arr = []; arr.push(1);',
      'const x; x = 5;',
      'let y = 1; let y = 2;',
    ],
    correctAnswer: 1,
    explanation:
      'const không thể reassign reference nhưng có thể mutate content. arr.push() mutate array content, không reassign reference.',
    codeExample: `const arr = [];
arr.push(1); // ✅ OK - mutating content
arr = [1];   // ❌ Error - reassigning reference`,
    relatedTopics: ['const', 'mutation', 'reference'],
  },

  {
    id: 'practice-4',
    type: 'practice',
    level: 'advanced',
    category: 'closures',
    question: 'Cách nào fix được vấn đề closure với var?',
    options: [
      'Thay var bằng let',
      'Sử dụng IIFE (Immediately Invoked Function Expression)',
      'Sử dụng bind()',
      'Tất cả các cách trên',
    ],
    correctAnswer: 3,
    explanation:
      'Tất cả đều là solutions hợp lệ. let tạo block scope, IIFE tạo function scope riêng, bind tạo function với context cố định.',
    codeExample: `// Solution 1: let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// Solution 2: IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}

// Solution 3: bind
for (var i = 0; i < 3; i++) {
  setTimeout(console.log.bind(null, i), 100);
}`,
    relatedTopics: ['closures', 'iife', 'bind'],
  },

  // Beginner theory questions
  {
    id: 'theory-3',
    type: 'theory',
    level: 'beginner',
    category: 'hoisting',
    question: 'Hoisting là gì?',
    explanation:
      'Hoisting là behavior của JavaScript engine đưa variable và function declarations lên đầu scope. var được hoisted và initialized với undefined, let/const được hoisted nhưng không initialized (TDZ).',
    codeExample: `// What actually happens:
var x; // hoisted declaration
console.log(x); // undefined
x = 5; // assignment stays in place

// What you write:
console.log(x); // undefined
var x = 5;`,
    relatedTopics: ['execution-context', 'compilation'],
  },

  {
    id: 'theory-4',
    type: 'theory',
    level: 'beginner',
    category: 'best-practices',
    question: 'Khi nào nên sử dụng let thay vì const?',
    explanation:
      'Sử dụng let khi biến cần được reassign (gán lại giá trị). Ví dụ: counters, flags, temporary variables trong loops hoặc conditions.',
    codeExample: `// Use let for reassignment
let count = 0;
count++; // Need to reassign

let currentUser = null;
if (loggedIn) {
  currentUser = getUserData(); // Need to reassign
}

// Use const when no reassignment
const API_URL = "https://api.com"; // Never changes
const users = []; // Reference won't change, but content can
users.push(newUser); // Mutating content is OK`,
    relatedTopics: ['mutability', 'code-style'],
  },
];

// Helper functions để filter questions
export const getQuestionsByType = (type: Question['type']) =>
  VAR_LET_CONST_QUESTIONS.filter(q => q.type === type);

export const getQuestionsByLevel = (level: Question['level']) =>
  VAR_LET_CONST_QUESTIONS.filter(q => q.level === level);

export const getQuestionsByCategory = (category: Question['category']) =>
  VAR_LET_CONST_QUESTIONS.filter(q => q.category === category);

export const getRandomQuestions = (count: number = 5) => {
  const shuffled = [...VAR_LET_CONST_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

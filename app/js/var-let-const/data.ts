export interface CodeExample {
  id: string;
  title: string;
  description: string;
  type: 'var' | 'let' | 'const' | 'comparison' | 'best-practice';
  code: string;
  output?: string;
  explanation?: string;
}

export interface ComparisonItem {
  feature: string;
  var: string;
  let: string;
  const: string;
}

export interface CommonMistake {
  mistake: string;
  solution: string;
  example: string;
}

export const LEARNING_OBJECTIVES = [
  'Hiểu sự khác biệt giữa var, let và const',
  'Nắm vững khái niệm Hoisting và Temporal Dead Zone',
  'Phân biệt Function Scope và Block Scope',
  'Áp dụng best practices trong khai báo biến',
  'Tránh được các lỗi thường gặp với variables',
  'Sử dụng đúng cách trong closures và loops',
];

export const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'var-hoisting',
    title: 'var và Hoisting',
    description: 'var được hoisted và có thể sử dụng trước khi khai báo',
    type: 'var',
    code: `console.log(x); // undefined (không lỗi)
var x = 5;
console.log(x); // 5

// Tương đương với:
// var x; // hoisted lên đầu
// console.log(x); // undefined
// x = 5;

function example() {
  console.log(y); // undefined
  var y = 10;
  console.log(y); // 10
}
example();`,
    output: 'undefined\n5\nundefined\n10',
    explanation: 'var được hoisted (đưa lên đầu scope) và khởi tạo với undefined',
  },

  {
    id: 'let-temporal-dead-zone',
    title: 'let và Temporal Dead Zone',
    description: 'let bị hoisted nhưng không thể truy cập trước khi khai báo',
    type: 'let',
    code: `console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10

function example() {
  console.log(z); // ReferenceError
  let z = 20;
  console.log(z); // 20
}`,
    output: "ReferenceError: Cannot access 'y' before initialization",
    explanation: 'let có Temporal Dead Zone - không thể access trước khi declare',
  },

  {
    id: 'const-immutable',
    title: 'const và Immutability',
    description: 'const không thể gán lại nhưng object/array có thể thay đổi nội dung',
    type: 'const',
    code: `const PI = 3.14159;
PI = 3.14; // TypeError: Assignment to constant variable

// Nhưng object/array const có thể thay đổi nội dung
const user = { name: "John", age: 25 };
user.name = "Jane"; // OK
user.age = 30; // OK
console.log(user); // { name: "Jane", age: 30 }

const numbers = [1, 2, 3];
numbers.push(4); // OK
numbers[0] = 10; // OK
console.log(numbers); // [10, 2, 3, 4]

// numbers = []; // Error: Assignment to constant variable`,
    output: 'TypeError: Assignment to constant variable\n{ name: "Jane", age: 30 }\n[10, 2, 3, 4]',
    explanation: 'const prevents reassignment of reference, not mutation of content',
  },

  {
    id: 'var-function-scope',
    title: 'var - Function Scope',
    description: 'var có function scope, không bị giới hạn bởi block',
    type: 'var',
    code: `function example() {
  if (true) {
    var a = 1;
  }
  console.log(a); // 1 (có thể truy cập được)

  for (var i = 0; i < 3; i++) {
    var b = i;
  }
  console.log(i); // 3
  console.log(b); // 2
}
example();

// Global scope
if (true) {
  var globalVar = "I'm global";
}
console.log(globalVar); // "I'm global"`,
    output: '1\n3\n2\n"I\'m global"',
    explanation: 'var chỉ bị giới hạn bởi function scope, không phải block scope',
  },

  {
    id: 'let-block-scope',
    title: 'let - Block Scope',
    description: 'let có block scope, chỉ tồn tại trong block được khai báo',
    type: 'let',
    code: `function example() {
  if (true) {
    let b = 2;
    console.log(b); // 2
  }
  console.log(b); // ReferenceError: b is not defined
}

// Loop với block scope
for (let j = 0; j < 3; j++) {
  let blockVar = j * 2;
  console.log(blockVar); // 0, 2, 4
}
console.log(j); // ReferenceError: j is not defined
console.log(blockVar); // ReferenceError: blockVar is not defined`,
    output: '2\nReferenceError: b is not defined\n0\n2\n4\nReferenceError: j is not defined',
    explanation: 'let chỉ tồn tại trong block scope (giữa cặp dấu {})',
  },

  {
    id: 'closure-var-let',
    title: 'Closures với var vs let',
    description: 'Sự khác biệt quan trọng khi sử dụng var và let trong closures',
    type: 'comparison',
    code: `// Vấn đề với var
console.log("Với var:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100); // 3, 3, 3
}

// Giải pháp với let
console.log("Với let:");
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 200); // 0, 1, 2
}

// Giải pháp với var sử dụng IIFE
console.log("var với IIFE:");
for (var k = 0; k < 3; k++) {
  (function(index) {
    setTimeout(() => console.log("var IIFE:", index), 300);
  })(k); // 0, 1, 2
}`,
    output:
      'Với var:\nvar: 3\nvar: 3\nvar: 3\nVới let:\nlet: 0\nlet: 1\nlet: 2\nvar với IIFE:\nvar IIFE: 0\nvar IIFE: 1\nvar IIFE: 2',
    explanation:
      'var có function scope nên closure capture cùng một variable, let tạo scope riêng cho mỗi iteration',
  },

  {
    id: 'redeclaration',
    title: 'Redeclaration - Khai báo lại',
    description: 'So sánh khả năng khai báo lại giữa var, let, const',
    type: 'comparison',
    code: `// var cho phép redeclaration
var name = "Alice";
var name = "Bob"; // OK
console.log(name); // "Bob"

// let không cho phép redeclaration
let age = 25;
let age = 30; // SyntaxError: Identifier 'age' has already been declared

// const cũng không cho phép redeclaration
const PI = 3.14;
const PI = 3.14159; // SyntaxError: Identifier 'PI' has already been declared

// Nhưng có thể khai báo lại trong scope khác
function example() {
  let age = 35; // OK - scope khác
  const PI = 3.14159; // OK - scope khác
  console.log(age, PI); // 35, 3.14159
}`,
    output: '"Bob"\nSyntaxError: Identifier \'age\' has already been declared\n35 3.14159',
    explanation: 'Chỉ var cho phép redeclaration trong cùng scope',
  },

  {
    id: 'best-practices-modern',
    title: 'Modern JavaScript Best Practices',
    description: 'Cách sử dụng var, let, const theo chuẩn hiện đại',
    type: 'best-practice',
    code: `// ✅ Good: const by default
const API_URL = "https://api.example.com";
const config = {
  timeout: 5000,
  retries: 3
};

// ✅ Good: let for reassignment
let currentUser = null;
let attempts = 0;

function login(credentials) {
  attempts++;

  if (attempts > 3) {
    throw new Error("Too many attempts");
  }

  // ✅ Good: const for values that won't be reassigned
  const response = fetch(API_URL + "/login", {
    method: "POST",
    body: JSON.stringify(credentials)
  });

  currentUser = response.user;
  return currentUser;
}

// ✅ Good: Block scope variables
function processItems(items) {
  const results = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const processed = processItem(item);
    results.push(processed);
  }

  return results;
}

// ❌ Bad: var in modern JavaScript
function badExample() {
  var x = 1; // Should use const/let
  if (true) {
    var y = 2; // Function scoped, confusing
  }
  console.log(y); // Works but not clear
}`,
    output: '// Best practices demonstration',
    explanation: 'Modern JavaScript prioritizes const > let > avoid var',
  },
];

export const COMPARISON_TABLE: ComparisonItem[] = [
  {
    feature: 'Scope',
    var: 'Function/Global',
    let: 'Block',
    const: 'Block',
  },
  {
    feature: 'Hoisting',
    var: 'Có (khởi tạo undefined)',
    let: 'Có (Temporal Dead Zone)',
    const: 'Có (Temporal Dead Zone)',
  },
  {
    feature: 'Khai báo lại',
    var: 'Được phép',
    let: 'Không được phép',
    const: 'Không được phép',
  },
  {
    feature: 'Gán lại giá trị',
    var: 'Được phép',
    let: 'Được phép',
    const: 'Không được phép',
  },
  {
    feature: 'Khởi tạo bắt buộc',
    var: 'Không',
    let: 'Không',
    const: 'Có',
  },
  {
    feature: 'Temporal Dead Zone',
    var: 'Không',
    let: 'Có',
    const: 'Có',
  },
  {
    feature: 'Global object property',
    var: 'Có (tạo property)',
    let: 'Không',
    const: 'Không',
  },
  {
    feature: 'Best for',
    var: 'Legacy code',
    let: 'Mutable variables',
    const: 'Immutable references',
  },
];

export const COMMON_MISTAKES: CommonMistake[] = [
  {
    mistake: 'Sử dụng var trong loops với closures',
    solution: 'Dùng let để tạo block scope riêng cho mỗi iteration',
    example: `// ❌ Wrong
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints 3, 3, 3
}

// ✅ Correct
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints 0, 1, 2
}`,
  },
  {
    mistake: 'Access biến let/const trước khi khai báo',
    solution: 'Luôn khai báo trước khi sử dụng để tránh TDZ error',
    example: `// ❌ Wrong
console.log(x); // ReferenceError
let x = 5;

// ✅ Correct
let x = 5;
console.log(x); // 5`,
  },
  {
    mistake: 'Reassign const variables',
    solution: 'Dùng let nếu cần reassign, const chỉ cho immutable references',
    example: `// ❌ Wrong
const count = 0;
count = 1; // TypeError

// ✅ Correct
let count = 0;
count = 1; // OK

// ✅ Also correct for objects
const user = { name: "John" };
user.name = "Jane"; // OK - mutating content, not reference`,
  },
  {
    mistake: 'Dùng var trong modern JavaScript',
    solution: 'Ưu tiên const > let > tránh var',
    example: `// ❌ Wrong (legacy style)
var name = "John";
var age = 25;

// ✅ Correct (modern style)
const name = "John";
let age = 25;`,
  },
  {
    mistake: 'Không khai báo const với giá trị',
    solution: 'const phải được khởi tạo ngay khi khai báo',
    example: `// ❌ Wrong
const PI; // SyntaxError: Missing initializer
PI = 3.14;

// ✅ Correct
const PI = 3.14;`,
  },
];

export const PRACTICAL_EXERCISES = [
  {
    id: 'exercise-1',
    title: 'Fix the closure problem',
    problem: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}`,
    solution: `for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}`,
    explanation: 'Thay var bằng let để tạo block scope riêng cho mỗi iteration',
  },
  {
    id: 'exercise-2',
    title: 'Convert to modern variable declarations',
    problem: `var userName = "admin";
var isLoggedIn = false;
var config = { theme: "dark" };`,
    solution: `const userName = "admin";
let isLoggedIn = false;
const config = { theme: "dark" };`,
    explanation:
      'userName và config không thay đổi reference nên dùng const, isLoggedIn có thể thay đổi nên dùng let',
  },
];

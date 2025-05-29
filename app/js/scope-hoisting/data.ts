export interface CodeExample {
  id: string;
  title: string;
  description: string;
  type:
    | 'scope'
    | 'hoisting'
    | 'function-scope'
    | 'block-scope'
    | 'temporal-dead-zone'
    | 'best-practice';
  code: string;
  output?: string;
  explanation?: string;
}

export interface ScopeRule {
  concept: string;
  description: string;
  example: string;
}

export interface HoistingBehavior {
  declaration: string;
  hoisted: string;
  initialization: string;
  tdz: string;
  example: string;
}

export const LEARNING_OBJECTIVES = [
  'Hiểu khái niệm Scope (phạm vi biến) trong JavaScript',
  'Phân biệt Global Scope, Function Scope và Block Scope',
  'Nắm vững cơ chế Hoisting của JavaScript',
  'Hiểu Temporal Dead Zone (TDZ) và cách tránh lỗi',
  'Phân biệt hoisting behavior giữa var, let, const và function',
  'Áp dụng lexical scoping và closure basics',
  'Tránh được các lỗi thường gặp về scope và hoisting',
];

export const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'global-scope',
    title: 'Global Scope',
    description: 'Biến khai báo ở global scope có thể truy cập từ mọi nơi',
    type: 'scope',
    code: `// Global scope
var globalVar = "Tôi là global";
let globalLet = "Tôi cũng là global";
const globalConst = "Tôi cũng vậy";

function testAccess() {
  console.log(globalVar);   // "Tôi là global"
  console.log(globalLet);   // "Tôi cũng là global"
  console.log(globalConst); // "Tôi cũng vậy"
}

testAccess();

// Có thể truy cập từ bất kỳ đâu
console.log("Global:", globalVar, globalLet, globalConst);`,
    output: `Tôi là global
Tôi cũng là global
Tôi cũng vậy
Global: Tôi là global Tôi cũng là global Tôi cũng vậy`,
    explanation: 'Global scope cho phép biến được truy cập từ mọi nơi trong chương trình.',
  },
  {
    id: 'function-scope',
    title: 'Function Scope',
    description: 'Biến khai báo trong function chỉ có thể truy cập trong function đó',
    type: 'function-scope',
    code: `function outerFunction() {
  var functionScoped = "Chỉ trong function";
  let functionLet = "Cũng trong function";

  function innerFunction() {
    console.log(functionScoped); // OK: truy cập được
    console.log(functionLet);    // OK: truy cập được
  }

  innerFunction();
  return functionScoped;
}

console.log(outerFunction()); // "Chỉ trong function"

// Lỗi: không thể truy cập từ bên ngoài
try {
  console.log(functionScoped); // ReferenceError
} catch(e) {
  console.log("Lỗi:", e.message);
}`,
    output: `Chỉ trong function
Cũng trong function
Chỉ trong function
Lỗi: functionScoped is not defined`,
    explanation: 'Function scope giới hạn biến chỉ trong function và các function con bên trong.',
  },
  {
    id: 'block-scope',
    title: 'Block Scope (ES6+)',
    description: 'let và const có block scope, var không có',
    type: 'block-scope',
    code: `function demonstrateBlockScope() {
  if (true) {
    var varVariable = "var: có thể truy cập ngoài block";
    let letVariable = "let: chỉ trong block";
    const constVariable = "const: chỉ trong block";
  }

  // var có thể truy cập ngoài block
  console.log(varVariable); // OK

  // let và const không thể truy cập ngoài block
  try {
    console.log(letVariable); // ReferenceError
  } catch(e) {
    console.log("let error:", e.message);
  }

  try {
    console.log(constVariable); // ReferenceError
  } catch(e) {
    console.log("const error:", e.message);
  }
}

demonstrateBlockScope();`,
    output: `var: có thể truy cập ngoài block
let error: letVariable is not defined
const error: constVariable is not defined`,
    explanation:
      'Block scope (ES6) giới hạn let và const chỉ trong {...}, nhưng var không bị ảnh hưởng.',
  },
  {
    id: 'hoisting-var',
    title: 'Hoisting với var',
    description: 'var được hoisted và khởi tạo với undefined',
    type: 'hoisting',
    code: `// Có thể sử dụng trước khi khai báo
console.log("Giá trị x:", x); // undefined (không lỗi)
console.log("Type of x:", typeof x); // "undefined"

var x = 5;
console.log("Sau khi gán:", x); // 5

// Tương đương với:
/*
var x; // hoisted lên đầu, x = undefined
console.log("Giá trị x:", x);
console.log("Type of x:", typeof x);
x = 5;
console.log("Sau khi gán:", x);
*/

function hoistingExample() {
  console.log("y trước khai báo:", y); // undefined
  var y = 10;
  console.log("y sau khai báo:", y); // 10
}

hoistingExample();`,
    output: `Giá trị x: undefined
Type of x: undefined
Sau khi gán: 5
y trước khai báo: undefined
y sau khai báo: 10`,
    explanation: 'var được hoisted (nâng lên đầu scope) và tự động khởi tạo với undefined.',
  },
  {
    id: 'hoisting-let-const',
    title: 'Hoisting với let/const',
    description: 'let/const được hoisted nhưng không thể truy cập trước khi khai báo (TDZ)',
    type: 'temporal-dead-zone',
    code: `// Temporal Dead Zone (TDZ) với let
try {
  console.log(letVar); // ReferenceError
} catch(e) {
  console.log("let TDZ error:", e.message);
}

let letVar = "Tôi là let";
console.log("let sau khai báo:", letVar);

// TDZ với const
try {
  console.log(constVar); // ReferenceError
} catch(e) {
  console.log("const TDZ error:", e.message);
}

const constVar = "Tôi là const";
console.log("const sau khai báo:", constVar);

// Minh họa TDZ trong function
function tdz_example() {
  // TDZ bắt đầu
  try {
    console.log(z); // ReferenceError: Cannot access 'z' before initialization
  } catch(e) {
    console.log("TDZ in function:", e.message);
  }
  // TDZ kết thúc khi khai báo
  let z = 42;
  console.log("z after declaration:", z);
}

tdz_example();`,
    output: `let TDZ error: Cannot access 'letVar' before initialization
let sau khai báo: Tôi là let
const TDZ error: Cannot access 'constVar' before initialization
const sau khai báo: Tôi là const
TDZ in function: Cannot access 'z' before initialization
z after declaration: 42`,
    explanation:
      'let/const có Temporal Dead Zone - không thể truy cập từ đầu scope đến chỗ khai báo.',
  },
  {
    id: 'function-hoisting',
    title: 'Function Hoisting',
    description: 'Function declarations được hoisted hoàn toàn',
    type: 'hoisting',
    code: `// Function declaration được hoisted hoàn toàn
console.log(sayHello()); // "Hello World!" - hoạt động bình thường

function sayHello() {
  return "Hello World!";
}

// Function expression KHÔNG được hoisted
try {
  console.log(sayGoodbye()); // TypeError
} catch(e) {
  console.log("Function expression error:", e.message);
}

var sayGoodbye = function() {
  return "Goodbye!";
};

console.log(sayGoodbye()); // "Goodbye!" - hoạt động sau khi khai báo

// Arrow function cũng KHÔNG được hoisted
try {
  console.log(sayHi()); // ReferenceError
} catch(e) {
  console.log("Arrow function error:", e.message);
}

const sayHi = () => "Hi there!";
console.log(sayHi()); // "Hi there!" - hoạt động sau khi khai báo`,
    output: `Hello World!
Function expression error: sayGoodbye is not a function
Goodbye!
Arrow function error: Cannot access 'sayHi' before initialization
Hi there!`,
    explanation:
      'Function declarations được hoisted hoàn toàn, nhưng function expressions và arrow functions thì không.',
  },
  {
    id: 'lexical-scope',
    title: 'Lexical Scope',
    description: 'JavaScript sử dụng lexical scope - scope được xác định bởi vị trí khai báo',
    type: 'scope',
    code: `var globalScope = "global";

function outer() {
  var outerScope = "outer";

  function inner() {
    var innerScope = "inner";

    // Có thể truy cập tất cả scope cha
    console.log("Từ inner:", globalScope); // "global"
    console.log("Từ inner:", outerScope);  // "outer"
    console.log("Từ inner:", innerScope);  // "inner"
  }

  // Chỉ có thể truy cập scope hiện tại và cha
  console.log("Từ outer:", globalScope); // "global"
  console.log("Từ outer:", outerScope);  // "outer"

  try {
    console.log("Từ outer:", innerScope); // ReferenceError
  } catch(e) {
    console.log("outer không thể truy cập inner scope:", e.message);
  }

  inner(); // Gọi inner function
}

outer();

// Global chỉ có thể truy cập global scope
console.log("Từ global:", globalScope); // "global"`,
    output: `Từ outer: global
Từ outer: outer
outer không thể truy cập inner scope: innerScope is not defined
Từ inner: global
Từ inner: outer
Từ inner: inner
Từ global: global`,
    explanation:
      'Lexical scope cho phép function con truy cập biến của function cha, nhưng không ngược lại.',
  },
  {
    id: 'scope-chain',
    title: 'Scope Chain',
    description: 'Cách JavaScript tìm kiếm biến qua chuỗi scope',
    type: 'scope',
    code: `var level1 = "Global Level";

function createScopeChain() {
  var level2 = "Function Level";

  return function() {
    var level3 = "Inner Function Level";

    return function() {
      var level4 = "Deepest Level";

      // JavaScript tìm kiếm biến theo thứ tự:
      // 1. Local scope (level4)
      // 2. Enclosing scope (level3)
      // 3. Outer function scope (level2)
      // 4. Global scope (level1)

      console.log("Tìm thấy level4:", level4); // Local scope
      console.log("Tìm thấy level3:", level3); // Enclosing scope
      console.log("Tìm thấy level2:", level2); // Outer function scope
      console.log("Tìm thấy level1:", level1); // Global scope

      // Khi biến trùng tên, scope gần nhất được ưu tiên
      var level1 = "Local override";
      console.log("Override level1:", level1); // "Local override"
    };
  };
}

const deepFunction = createScopeChain()();
deepFunction();`,
    output: `Tìm thấy level4: Deepest Level
Tìm thấy level3: Inner Function Level
Tìm thấy level2: Function Level
Tìm thấy level1: Global Level
Override level1: Local override`,
    explanation: 'Scope chain là cơ chế JavaScript tìm kiếm biến từ scope hiện tại lên scope cha.',
  },
  {
    id: 'closure-scope',
    title: 'Closure và Scope',
    description: 'Closure giữ lại scope của function cha ngay cả khi function cha đã kết thúc',
    type: 'scope',
    code: `function createCounter() {
  let count = 0; // Biến private

  // Return function tạo closure
  return function() {
    count++; // Truy cập biến từ outer scope
    return count;
  };
}

// Mỗi counter có scope riêng biệt
const counter1 = createCounter();
const counter2 = createCounter();

console.log("Counter 1 lần 1:", counter1()); // 1
console.log("Counter 1 lần 2:", counter1()); // 2
console.log("Counter 1 lần 3:", counter1()); // 3

console.log("Counter 2 lần 1:", counter2()); // 1 (scope riêng biệt)
console.log("Counter 2 lần 2:", counter2()); // 2

console.log("Counter 1 tiếp:", counter1()); // 4 (vẫn giữ state)

// count không thể truy cập từ bên ngoài
try {
  console.log(count); // ReferenceError
} catch(e) {
  console.log("count là private:", e.message);
}`,
    output: `Counter 1 lần 1: 1
Counter 1 lần 2: 2
Counter 1 lần 3: 3
Counter 2 lần 1: 1
Counter 2 lần 2: 2
Counter 1 tiếp: 4
count là private: count is not defined`,
    explanation:
      'Closure cho phép function con truy cập scope của function cha ngay cả sau khi function cha đã kết thúc.',
  },
];

export const SCOPE_RULES: ScopeRule[] = [
  {
    concept: 'Global Scope',
    description: 'Biến khai báo ngoài function/block, truy cập được từ mọi nơi',
    example: 'var global = "everywhere"; // có thể dùng ở mọi nơi',
  },
  {
    concept: 'Function Scope',
    description: 'Biến khai báo trong function, chỉ truy cập được trong function đó',
    example: 'function test() { var local = "only here"; }',
  },
  {
    concept: 'Block Scope',
    description: 'let/const trong {...} chỉ truy cập được trong block đó',
    example: 'if (true) { let block = "in block only"; }',
  },
  {
    concept: 'Lexical Scope',
    description: 'Scope được xác định bởi vị trí khai báo trong code',
    example: 'function outer() { function inner() { /* có thể dùng biến outer */ } }',
  },
  {
    concept: 'Scope Chain',
    description: 'JavaScript tìm biến từ scope hiện tại lên scope cha',
    example: 'local scope → function scope → global scope',
  },
];

export const HOISTING_BEHAVIORS: HoistingBehavior[] = [
  {
    declaration: 'var',
    hoisted: 'Có',
    initialization: 'undefined',
    tdz: 'Không',
    example: 'console.log(x); var x = 5; // undefined, không lỗi',
  },
  {
    declaration: 'let',
    hoisted: 'Có',
    initialization: 'Không khởi tạo',
    tdz: 'Có',
    example: 'console.log(x); let x = 5; // ReferenceError',
  },
  {
    declaration: 'const',
    hoisted: 'Có',
    initialization: 'Không khởi tạo',
    tdz: 'Có',
    example: 'console.log(x); const x = 5; // ReferenceError',
  },
  {
    declaration: 'function',
    hoisted: 'Có',
    initialization: 'Toàn bộ function',
    tdz: 'Không',
    example: 'func(); function func() {} // Hoạt động bình thường',
  },
  {
    declaration: 'function expression',
    hoisted: 'Theo biến chứa',
    initialization: 'undefined (var) hoặc TDZ (let/const)',
    tdz: 'Phụ thuộc biến chứa',
    example: 'func(); var func = function() {}; // TypeError',
  },
];

export const COMMON_MISTAKES = [
  {
    mistake: 'Sử dụng var trong loops với closures',
    solution: 'Dùng let thay vì var hoặc tạo IIFE',
    example: `// Sai
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // In ra 3, 3, 3
}

// Đúng
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // In ra 0, 1, 2
}`,
  },
  {
    mistake: 'Truy cập biến trong Temporal Dead Zone',
    solution: 'Khai báo biến trước khi sử dụng',
    example: `// Sai
console.log(x); // ReferenceError
let x = 5;

// Đúng
let x = 5;
console.log(x); // 5`,
  },
  {
    mistake: 'Nhầm lẫn giữa function scope và block scope',
    solution: 'Hiểu rõ scope của từng loại khai báo',
    example: `// Chú ý
if (true) {
  var x = 1; // function scoped
  let y = 2; // block scoped
}
console.log(x); // 1 (OK)
console.log(y); // ReferenceError`,
  },
  {
    mistake: 'Không hiểu closure giữ lại scope',
    solution: 'Nhớ closure "đóng gói" scope của function cha',
    example: `function outer() {
  let count = 0;
  return function() { return ++count; };
}
const counter = outer();
// count vẫn tồn tại trong closure`,
  },
  {
    mistake: 'Global scope pollution',
    solution: 'Sử dụng modules, IIFE hoặc namespaces',
    example: `// Sai
var data = "global";

// Đúng
(function() {
  var data = "encapsulated";
})();`,
  },
];

export const PRACTICAL_EXERCISES = [
  {
    id: 'scope-prediction',
    title: 'Dự đoán Scope',
    description: 'Dự đoán output của đoạn code về scope',
    difficulty: 'medium',
    code: `var a = 1;
function test() {
  console.log(a);
  var a = 2;
  console.log(a);
}
test();
console.log(a);`,
    hint: 'Chú ý hoisting của var trong function',
  },
  {
    id: 'closure-counter',
    title: 'Tạo Counter với Closure',
    description: 'Tạo function tạo ra counter độc lập',
    difficulty: 'medium',
    code: `// Yêu cầu: Tạo createCounter function
// const c1 = createCounter();
// const c2 = createCounter();
// c1() // 1, c1() // 2
// c2() // 1 (độc lập với c1)`,
    hint: 'Sử dụng closure để giữ state riêng biệt',
  },
  {
    id: 'hoisting-debug',
    title: 'Debug Hoisting Issues',
    description: 'Sửa lỗi liên quan đến hoisting',
    difficulty: 'hard',
    code: `function buggyCode() {
  if (false) {
    var x = 1;
    function helper() { return x; }
  }
  console.log(x);
  console.log(helper());
}`,
    hint: 'var và function declarations bị hoisted',
  },
];

export const BEST_PRACTICES = [
  {
    title: 'Khai báo biến ở đầu scope',
    description: 'Luôn khai báo biến ở đầu scope để tránh confusion về hoisting',
    example: `// Tốt
function example() {
  var x, y, z;
  // logic code...
  x = 1;
  y = 2;
  z = x + y;
}`,
  },
  {
    title: 'Ưu tiên let/const thay vì var',
    description: 'Sử dụng let/const để có block scope rõ ràng và tránh hoisting issues',
    example: `// Tốt
const PI = 3.14159;
let radius = 5;
let area = PI * radius * radius;`,
  },
  {
    title: 'Sử dụng strict mode',
    description: 'Strict mode giúp phát hiện lỗi scope sớm hơn',
    example: `'use strict';
// Sẽ báo lỗi nếu dùng biến chưa khai báo`,
  },
  {
    title: 'Tạo scope riêng với IIFE khi cần',
    description: 'Sử dụng IIFE để tạo scope riêng biệt và tránh global pollution',
    example: `(function() {
  // Code trong scope riêng
  var private = "not global";
})();`,
  },
  {
    title: 'Hiểu rõ closure performance',
    description: 'Closure giữ lại toàn bộ scope, có thể gây memory leak nếu không cẩn thận',
    example: `// Cẩn thận với closures trong loops
for (let i = 0; i < 1000; i++) {
  // Tạo closure cẩn thận
}`,
  },
];

// Helper function để lấy examples theo type
export const getExamplesByType = (type: CodeExample['type']) => {
  return CODE_EXAMPLES.filter(example => example.type === type);
};

// Helper function để lấy examples cho quiz
export const getRandomExamples = (count: number = 3) => {
  const shuffled = [...CODE_EXAMPLES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

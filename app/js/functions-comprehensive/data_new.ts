// Functions Comprehensive - Data và Theory
export interface CodeExample {
  id: string;
  title: string;
  description: string;
  type:
    | 'declaration'
    | 'expression'
    | 'arrow'
    | 'parameters'
    | 'scope'
    | 'closure'
    | 'higher-order'
    | 'async'
    | 'methods'
    | 'advanced';
  code: string;
  output?: string;
  explanation?: string;
}

export interface ComparisonItem {
  feature: string;
  declaration: string;
  expression: string;
  arrow: string;
}

export interface CommonMistake {
  mistake: string;
  solution: string;
  example: string;
}

export interface BestPractice {
  title: string;
  description: string;
  example: string;
}

export interface FunctionConcept {
  title: string;
  description: string;
  example?: string;
}

export const LEARNING_OBJECTIVES = [
  'Hiểu các loại khai báo hàm trong JavaScript',
  'Nắm vững khái niệm Hoisting với functions',
  'Phân biệt Function Scope và Block Scope',
  'Hiểu và áp dụng Closures hiệu quả',
  'Sử dụng Higher-Order Functions và Callbacks',
  'Làm việc với Async/Await và Promises',
  'Áp dụng Functional Programming patterns',
];

export const FUNCTION_CONCEPTS: FunctionConcept[] = [
  {
    title: 'Function Declaration (Khai báo hàm)',
    description:
      'Hàm được khai báo với từ khóa function và có thể được gọi trước khi định nghĩa do hoisting.',
    example: 'function chaoHoi(ten) { return `Xin chào, ${ten}!`; }',
  },
  {
    title: 'Function Expression (Biểu thức hàm)',
    description: 'Hàm được gán cho một biến và không có hoisting.',
    example: 'const chaoHoi = function(ten) { return `Xin chào, ${ten}!`; };',
  },
  {
    title: 'Arrow Function (Hàm mũi tên)',
    description: 'Cú pháp ngắn gọn cho hàm, không có this riêng và không có hoisting.',
    example: 'const chaoHoi = (ten) => `Xin chào, ${ten}!`;',
  },
  {
    title: 'Closure (Bao đóng)',
    description:
      'Hàm có thể truy cập biến từ phạm vi bên ngoài ngay cả sau khi phạm vi đó đã kết thúc.',
    example: 'function ngoai(x) { return function(y) { return x + y; }; }',
  },
  {
    title: 'Higher-Order Function (Hàm bậc cao)',
    description: 'Hàm nhận hàm khác làm tham số hoặc trả về một hàm.',
    example: 'function map(mang, hamXuLy) { return mang.map(hamXuLy); }',
  },
  {
    title: 'IIFE (Immediately Invoked Function Expression)',
    description: 'Hàm được thực thi ngay lập tức sau khi được định nghĩa.',
    example: "(function() { console.log('IIFE đã thực thi!'); })();",
  },
];

export const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'function-declaration',
    title: 'Function Declaration',
    description: 'Cách khai báo hàm cơ bản với hoisting',
    type: 'declaration',
    code: `// Có thể gọi hàm trước khi khai báo (hoisting)
console.log(chaoHoi("Nam")); // "Xin chào, Nam!"

function chaoHoi(ten) {
  return \`Xin chào, \${ten}!\`;
}

// Function declaration có hoisting
function tinhTong(a, b) {
  return a + b;
}

console.log(tinhTong(5, 3)); // 8`,
    output: 'Xin chào, Nam!\n8',
    explanation: 'Function declaration được hoisted nên có thể gọi trước khi khai báo',
  },

  {
    id: 'function-expression',
    title: 'Function Expression',
    description: 'Gán hàm cho biến, không có hoisting',
    type: 'expression',
    code: `// Không thể gọi trước khi khai báo
// console.log(chaoHoi("Nam")); // ReferenceError

const chaoHoi = function(ten) {
  return \`Xin chào, \${ten}!\`;
};

console.log(chaoHoi("Nam")); // "Xin chào, Nam!"

// Named function expression
const tinhTong = function cong(a, b) {
  return a + b;
};

console.log(tinhTong(5, 3)); // 8`,
    output: 'Xin chào, Nam!\n8',
    explanation: 'Function expression không có hoisting, chỉ có thể gọi sau khi khai báo',
  },

  {
    id: 'arrow-function',
    title: 'Arrow Function',
    description: 'Cú pháp ngắn gọn với lexical this binding',
    type: 'arrow',
    code: `// Arrow function cơ bản
const chaoHoi = (ten) => \`Xin chào, \${ten}!\`;
console.log(chaoHoi("Nam")); // "Xin chào, Nam!"

// Arrow function với một tham số (có thể bỏ ngoặc)
const binhPhuong = x => x * x;
console.log(binhPhuong(5)); // 25

// Arrow function với nhiều dòng
const tinhTong = (a, b) => {
  const ket_qua = a + b;
  return ket_qua;
};

console.log(tinhTong(10, 20)); // 30

// Arrow function trong array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]`,
    output: 'Xin chào, Nam!\n25\n30\n[2, 4, 6, 8, 10]',
    explanation: 'Arrow function có cú pháp ngắn gọn và không có this binding riêng',
  },

  {
    id: 'function-parameters',
    title: 'Function Parameters',
    description: 'Các cách sử dụng tham số trong hàm',
    type: 'parameters',
    code: `// Default parameters
function chaoHoi(ten = "Bạn") {
  return \`Xin chào, \${ten}!\`;
}

console.log(chaoHoi()); // "Xin chào, Bạn!"
console.log(chaoHoi("Nam")); // "Xin chào, Nam!"

// Rest parameters
function tinhTong(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(tinhTong(1, 2, 3, 4, 5)); // 15

// Destructuring parameters
function taoThongTin({ten, tuoi, email}) {
  return \`\${ten}, \${tuoi} tuổi, email: \${email}\`;
}

const user = {ten: "Nam", tuoi: 25, email: "nam@email.com"};
console.log(taoThongTin(user));`,
    output: 'Xin chào, Bạn!\nXin chào, Nam!\n15\nNam, 25 tuổi, email: nam@email.com',
    explanation: 'JavaScript hỗ trợ default parameters, rest parameters và destructuring',
  },

  {
    id: 'function-scope',
    title: 'Function Scope',
    description: 'Phạm vi của biến trong hàm',
    type: 'scope',
    code: `let globalVar = "global";

function outerFunction() {
  let outerVar = "outer";

  function innerFunction() {
    let innerVar = "inner";

    console.log(globalVar); // "global" - có thể truy cập
    console.log(outerVar);  // "outer" - có thể truy cập
    console.log(innerVar);  // "inner" - có thể truy cập
  }

  innerFunction();

  // console.log(innerVar); // ReferenceError - không thể truy cập
}

outerFunction();

// Ví dụ về block scope với let/const
function blockScopeExample() {
  if (true) {
    let blockVar = "block scoped";
    const blockConst = "block const";
    var functionVar = "function scoped";
  }

  // console.log(blockVar); // ReferenceError
  // console.log(blockConst); // ReferenceError
  console.log(functionVar); // "function scoped" - OK
}

blockScopeExample();`,
    output: 'global\nouter\ninner\nfunction scoped',
    explanation: 'Hàm tạo ra scope riêng, let/const có block scope, var có function scope',
  },

  {
    id: 'closures',
    title: 'Closures',
    description: 'Hàm truy cập biến từ scope bên ngoài',
    type: 'closure',
    code: `// Closure cơ bản
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (independent counter)

// Closure với parameters
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Module pattern với closure
const calculator = (function() {
  let result = 0;

  return {
    add: function(x) {
      result += x;
      return this;
    },
    multiply: function(x) {
      result *= x;
      return this;
    },
    getResult: function() {
      return result;
    }
  };
})();

console.log(calculator.add(5).multiply(2).getResult()); // 10`,
    output: '1\n2\n1\n10\n15\n10',
    explanation:
      'Closure cho phép hàm truy cập biến từ scope bên ngoài ngay cả khi scope đó đã kết thúc',
  },

  {
    id: 'higher-order-functions',
    title: 'Higher-Order Functions',
    description: 'Hàm nhận hoặc trả về hàm khác',
    type: 'higher-order',
    code: `// Hàm nhận hàm khác làm tham số
function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];

const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const withIndex = processArray(numbers, (x, i) => \`\${x} at index \${i}\`);
console.log(withIndex); // ["1 at index 0", "2 at index 1", ...]

// Hàm trả về hàm khác
function createValidator(rule) {
  return function(value) {
    return rule(value);
  };
}

const isPositive = createValidator(x => x > 0);
const isEven = createValidator(x => x % 2 === 0);

console.log(isPositive(5)); // true
console.log(isEven(4)); // true

// Function composition
const compose = (f, g) => x => f(g(x));

const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;

const addOneThenDouble = compose(multiplyByTwo, addOne);
console.log(addOneThenDouble(3)); // 8 (3 + 1 = 4, 4 * 2 = 8)`,
    output:
      '[2, 4, 6, 8, 10]\n["1 at index 0", "2 at index 1", "3 at index 2", "4 at index 3", "5 at index 4"]\ntrue\ntrue\n8',
    explanation: 'Higher-order functions cho phép tạo ra code linh hoạt và có thể tái sử dụng',
  },

  {
    id: 'async-functions',
    title: 'Async Functions',
    description: 'Xử lý bất đồng bộ với async/await',
    type: 'async',
    code: `// Async function cơ bản
async function fetchData() {
  try {
    const response = await new Promise(resolve => {
      setTimeout(() => resolve("Data fetched!"), 1000);
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Sử dụng async function
fetchData().then(data => console.log(data));

// Multiple async operations
async function fetchMultipleData() {
  try {
    const promise1 = new Promise(resolve => setTimeout(() => resolve("Data 1"), 1000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve("Data 2"), 1500));

    // Chờ tất cả promises
    const results = await Promise.all([promise1, promise2]);
    console.log(results); // ["Data 1", "Data 2"]

    return results;
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchMultipleData();

// Async arrow function
const asyncArrow = async (id) => {
  const data = await new Promise(resolve =>
    setTimeout(() => resolve(\`User \${id}\`), 500)
  );
  return data;
};

asyncArrow(123).then(user => console.log(user));`,
    output: 'Data fetched!\n["Data 1", "Data 2"]\nUser 123',
    explanation: 'Async/await làm cho code bất đồng bộ dễ đọc và viết hơn',
  },

  {
    id: 'iife-pattern',
    title: 'IIFE Pattern',
    description: 'Immediately Invoked Function Expression',
    type: 'advanced',
    code: `// IIFE cơ bản
(function() {
  console.log("IIFE đã thực thi!");
})();

// IIFE với parameters
(function(name) {
  console.log(\`Hello, \${name}!\`);
})("World");

// IIFE trả về giá trị
const result = (function(a, b) {
  return a + b;
})(5, 10);

console.log(result); // 15

// Module pattern với IIFE
const myModule = (function() {
  let privateVar = 0;

  function privateFunction() {
    return "This is private";
  }

  return {
    publicMethod: function() {
      privateVar++;
      return privateVar;
    },
    getPrivateVar: function() {
      return privateVar;
    },
    callPrivateFunction: function() {
      return privateFunction();
    }
  };
})();

console.log(myModule.publicMethod()); // 1
console.log(myModule.getPrivateVar()); // 1
console.log(myModule.callPrivateFunction()); // "This is private"

// Arrow IIFE
((name) => {
  console.log(\`Arrow IIFE: \${name}\`);
})("JavaScript");`,
    output: 'IIFE đã thực thi!\nHello, World!\n15\n1\n1\nThis is private\nArrow IIFE: JavaScript',
    explanation:
      'IIFE tạo scope riêng biệt và thực thi ngay lập tức, thường dùng cho module pattern',
  },
];

export const FUNCTION_COMPARISON: ComparisonItem[] = [
  {
    feature: 'Hoisting',
    declaration: 'Có hoisting đầy đủ',
    expression: 'Không có hoisting',
    arrow: 'Không có hoisting',
  },
  {
    feature: 'this binding',
    declaration: 'Dynamic this',
    expression: 'Dynamic this',
    arrow: 'Lexical this',
  },
  {
    feature: 'arguments object',
    declaration: 'Có sẵn',
    expression: 'Có sẵn',
    arrow: 'Không có',
  },
  {
    feature: 'Constructor',
    declaration: 'Có thể dùng new',
    expression: 'Có thể dùng new',
    arrow: 'Không thể dùng new',
  },
  {
    feature: 'Cú pháp',
    declaration: 'function name() {}',
    expression: 'const name = function() {}',
    arrow: 'const name = () => {}',
  },
];

export const BEST_PRACTICES: BestPractice[] = [
  {
    title: 'Đặt tên hàm có ý nghĩa',
    description: 'Sử dụng tên động từ mô tả chức năng của hàm',
    example: `// Tốt
function calculateTotalPrice(items) { ... }
function validateEmail(email) { ... }

// Không tốt
function calc(items) { ... }
function check(email) { ... }`,
  },
  {
    title: 'Hàm chỉ nên làm một việc',
    description: 'Mỗi hàm chỉ nên có một trách nhiệm duy nhất (Single Responsibility)',
    example: `// Tốt
function calculateTax(price) { ... }
function formatCurrency(amount) { ... }

// Không tốt
function calculateAndFormatPrice(price) {
  // Làm nhiều việc cùng lúc
}`,
  },
  {
    title: 'Sử dụng const cho function expressions',
    description: 'Tránh reassignment không mong muốn',
    example: `// Tốt
const calculateTotal = (items) => { ... };

// Không tốt
let calculateTotal = (items) => { ... };`,
  },
  {
    title: 'Trả về sớm để tránh nesting',
    description: 'Sử dụng early return để code dễ đọc hơn',
    example: `// Tốt
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;

  return processActiveUser(user);
}

// Không tốt
function processUser(user) {
  if (user) {
    if (user.isActive) {
      return processActiveUser(user);
    }
  }
  return null;
}`,
  },
];

export const COMMON_MISTAKES: CommonMistake[] = [
  {
    mistake: 'Gọi function expression trước khi khai báo',
    solution: 'Khai báo function expression trước khi sử dụng',
    example: `// Lỗi
sayHello(); // ReferenceError
const sayHello = () => console.log("Hello");

// Đúng
const sayHello = () => console.log("Hello");
sayHello(); // "Hello"`,
  },
  {
    mistake: 'Sử dụng arrow function cho methods cần this',
    solution: 'Sử dụng regular function cho object methods',
    example: `// Lỗi
const obj = {
  name: "Test",
  greet: () => console.log(this.name) // undefined
};

// Đúng
const obj = {
  name: "Test",
  greet() { console.log(this.name) } // "Test"
};`,
  },
  {
    mistake: 'Quên return trong arrow function nhiều dòng',
    solution: 'Luôn có return statement khi cần giá trị trả về',
    example: `// Lỗi
const calculate = (x, y) => {
  const result = x * y;
  // Quên return
};

// Đúng
const calculate = (x, y) => {
  const result = x * y;
  return result;
};`,
  },
];

// Helper functions for filtering and searching
export const getExamplesByType = (type: string): CodeExample[] => {
  return CODE_EXAMPLES.filter(example => example.type === type);
};

export const searchExamples = (term: string): CodeExample[] => {
  const lowerTerm = term.toLowerCase();
  return CODE_EXAMPLES.filter(
    example =>
      example.title.toLowerCase().includes(lowerTerm) ||
      example.description.toLowerCase().includes(lowerTerm) ||
      example.code.toLowerCase().includes(lowerTerm)
  );
};

export const FUNCTION_CATEGORIES = [
  'declaration',
  'expression',
  'arrow',
  'parameters',
  'scope',
  'closure',
  'higher-order',
  'async',
  'methods',
  'advanced',
] as const;

// Legacy exports for compatibility
export const codeExamples = CODE_EXAMPLES;
export const functionConcepts = FUNCTION_CONCEPTS;
export const functionComparison = FUNCTION_COMPARISON;
export const functionBestPractices = BEST_PRACTICES;
export const commonMistakes = COMMON_MISTAKES;
export const functionCategories = FUNCTION_CATEGORIES;
export const getExamplesByCategory = getExamplesByType;

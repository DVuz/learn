export interface LearningObjective {
  title: string;
  description: string;
}

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
  output?: string;
  type: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  keyPoints?: string[];
  explanation?: string;
}

export interface DataTypeConcept {
  name: string;
  description: string;
  example: string;
  output?: string;
  keyPoints: string[];
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  useCases?: string[];
}

export interface ComparisonItem {
  concept: string;
  primitive: string;
  object: string;
  example: string;
  note?: string;
}

export interface BestPractice {
  title: string;
  description: string;
  example?: string;
  benefits?: string[];
}

export interface CommonMistake {
  title: string;
  description: string;
  wrongExample: string;
  correctExample: string;
  explanation?: string;
}

export interface TypeMethod {
  name: string;
  description: string;
  syntax: string;
  example: string;
  output: string;
  notes?: string[];
}

export const LEARNING_OBJECTIVES: LearningObjective[] = [
  {
    title: 'Primitive Types',
    description:
      'Hiểu các kiểu dữ liệu nguyên thủy: number, string, boolean, null, undefined, symbol, bigint',
  },
  {
    title: 'Object Types',
    description: 'Nắm vững object, array, function và reference types',
  },
  {
    title: 'Type Checking',
    description: 'Sử dụng typeof, instanceof và các phương pháp kiểm tra type',
  },
  {
    title: 'Type Coercion',
    description: 'Hiểu implicit/explicit type conversion và truthy/falsy values',
  },
  {
    title: 'Memory Management',
    description: 'Hiểu cách JavaScript quản lý bộ nhớ cho các kiểu dữ liệu khác nhau',
  },
  {
    title: 'Performance Optimization',
    description: 'Tối ưu hiệu suất dựa trên đặc tính của từng kiểu dữ liệu',
  },
];

export const DATA_TYPE_CONCEPTS: DataTypeConcept[] = [
  {
    name: 'Primitive Types',
    description:
      'JavaScript có 7 kiểu dữ liệu nguyên thủy: number, string, boolean, null, undefined, symbol, bigint',
    example: `// Numbers
let integer = 42;
let float = 3.14;
let scientific = 2.5e6;
let infinity = Infinity;
let notANumber = NaN;

// Strings
let singleQuote = 'Hello';
let doubleQuote = "World";
let template = \`Hello \${name}\`;

// Boolean
let isTrue = true;
let isFalse = false;

// Null and Undefined
let empty = null;
let notDefined = undefined;

// Symbol (ES6)
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1 === sym2); // false

// BigInt (ES2020)
let bigNumber = 123456789012345678901234567890n;
let bigFromNumber = BigInt(123);`,
    output: 'false',
    keyPoints: [
      'Primitive types được lưu trữ by value',
      'Immutable - không thể thay đổi giá trị gốc',
      'Được copy khi gán cho biến khác',
      'Symbol luôn unique',
      'BigInt cho số nguyên lớn hơn Number.MAX_SAFE_INTEGER',
    ],
    difficulty: 'Cơ bản',
    useCases: [
      'Number: Tính toán, đếm, measurement',
      'String: Text processing, UI content',
      'Boolean: Logic conditions, flags',
      'Symbol: Object property keys, constants',
      'BigInt: Cryptography, large calculations',
    ],
  },
  {
    name: 'Object Types',
    description: 'Tất cả các kiểu dữ liệu không phải primitive đều là object',
    example: `// Plain Objects
let person = {
  name: "John",
  age: 30,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
};

// Arrays
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Functions
function add(a, b) {
  return a + b;
}
let arrow = (a, b) => a * b;

// Built-in Objects
let date = new Date();
let regex = /pattern/gi;
let map = new Map();
let set = new Set();

// Class Instances
class Car {
  constructor(brand) {
    this.brand = brand;
  }
}
let myCar = new Car("Toyota");`,
    keyPoints: [
      'Object types được lưu trữ by reference',
      'Mutable - có thể thay đổi properties',
      'Được share reference khi gán',
      'Có prototype chain',
      'Có thể chứa methods và properties',
    ],
    difficulty: 'Cơ bản',
    useCases: [
      'Object: Data structure, configuration',
      'Array: Collections, lists',
      'Function: Reusable logic, callbacks',
      'Date: Time manipulation',
      'RegExp: Pattern matching',
    ],
  },
  {
    name: 'Type Coercion',
    description: 'JavaScript tự động chuyển đổi kiểu dữ liệu khi cần thiết',
    example: `// String Coercion
console.log("5" + 3);      // "53"
console.log("5" - 3);      // 2
console.log("5" * 3);      // 15

// Boolean Coercion
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean(null));  // false
console.log(Boolean([]));    // true
console.log(Boolean({}));    // true

// Numeric Coercion
console.log(Number("123"));   // 123
console.log(Number("abc"));   // NaN
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// Comparison Coercion
console.log("2" > 1);        // true
console.log("02" == 2);      // true
console.log("02" === 2);     // false`,
    output: `"53"
2
15
false
false
false
true
true
123
NaN
1
0
true
true
false`,
    keyPoints: [
      'Implicit coercion xảy ra tự động',
      'Explicit coercion được gọi bởi developer',
      '== operator thực hiện coercion',
      '=== operator không thực hiện coercion',
      'String coercion ưu tiên với + operator',
    ],
    difficulty: 'Trung bình',
    useCases: [
      'Form validation và data processing',
      'API response handling',
      'Conditional logic',
      'Mathematical operations',
    ],
  },
  {
    name: 'Truthy và Falsy Values',
    description: 'Các giá trị được coi là true hoặc false trong boolean context',
    example: `// Falsy values
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Truthy values (everything else)
console.log(Boolean(true));      // true
console.log(Boolean(1));         // true
console.log(Boolean(-1));        // true
console.log(Boolean("hello"));   // true
console.log(Boolean(" "));       // true (space)
console.log(Boolean([]));        // true (empty array)
console.log(Boolean({}));        // true (empty object)
console.log(Boolean(function(){})); // true`,
    output: `false
false
false
false
false
false
false
false
true
true
true
true
true
true
true
true`,
    keyPoints: [
      'Chỉ có 8 falsy values trong JavaScript',
      'Tất cả các giá trị khác đều là truthy',
      'Empty array và object là truthy',
      'String với space là truthy',
      'Sử dụng trong if statements và logical operators',
    ],
    difficulty: 'Cơ bản',
  },
  {
    name: 'Type Guards và Type Checking',
    description: 'Các phương pháp kiểm tra kiểu dữ liệu một cách an toàn',
    example: `function checkType(value) {
  // typeof operator
  console.log(typeof value);

  // instanceof operator
  if (value instanceof Array) {
    console.log("Is array");
  }

  // Array.isArray()
  if (Array.isArray(value)) {
    console.log("Confirmed array");
  }

  // Object.prototype.toString
  console.log(Object.prototype.toString.call(value));

  // Custom type guards
  if (isString(value)) {
    console.log("String detected");
  }
}

function isString(value) {
  return typeof value === 'string';
}

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}`,
    keyPoints: [
      'typeof tốt cho primitive types',
      'instanceof kiểm tra prototype chain',
      'Array.isArray() reliable nhất cho arrays',
      'Object.prototype.toString.call() most accurate',
      'Custom type guards cho logic phức tạp',
    ],
    difficulty: 'Trung bình',
  },
];

export const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'primitive-vs-object',
    title: 'Primitive vs Object Assignment',
    description: 'So sánh cách primitive và object được gán và thay đổi',
    type: 'comparison',
    difficulty: 'Trung bình',
    code: `// Primitive assignment
let a = 5;
let b = a;    // b gets copy of a's value
a = 10;       // changing a doesn't affect b
console.log("a:", a, "b:", b);

// Object assignment
let obj1 = { value: 5 };
let obj2 = obj1;    // obj2 gets reference to same object
obj1.value = 10;    // changing obj1 affects obj2
console.log("obj1:", obj1.value, "obj2:", obj2.value);

// Demonstrating immutability
let str = "hello";
str.toUpperCase();  // doesn't change original string
console.log(str);   // still "hello"

let newStr = str.toUpperCase();
console.log(newStr); // "HELLO"`,
    output: `a: 10 b: 5
obj1: 10 obj2: 10
hello
HELLO`,
    keyPoints: [
      'Primitive values are copied by value',
      'Objects are copied by reference',
      'Primitive strings are immutable',
      'Object properties can be modified',
    ],
    explanation:
      'Primitive types tạo bản copy độc lập, trong khi object types chia sẻ cùng reference.',
  },
  {
    id: 'type-checking-methods',
    title: 'Various Type Checking Methods',
    description: 'Các cách khác nhau để kiểm tra kiểu dữ liệu',
    type: 'utilities',
    difficulty: 'Trung bình',
    code: `let values = [
  42,
  "hello",
  true,
  null,
  undefined,
  [],
  {},
  function() {},
  new Date(),
  /regex/
];

values.forEach(val => {
  console.log(\`Value: \${val}\`);
  console.log(\`typeof: \${typeof val}\`);
  console.log(\`toString: \${Object.prototype.toString.call(val)}\`);
  console.log(\`Array.isArray: \${Array.isArray(val)}\`);
  console.log('---');
});`,
    output: `Value: 42
typeof: number
toString: [object Number]
Array.isArray: false
---
Value: hello
typeof: string
toString: [object String]
Array.isArray: false
---`,
    keyPoints: [
      'typeof returns string representation',
      'Object.prototype.toString most accurate',
      'Array.isArray specific for arrays',
      'Different methods for different needs',
    ],
    explanation: 'Mỗi phương pháp có ưu nhược điểm riêng cho việc type checking.',
  },
  {
    id: 'coercion-examples',
    title: 'Type Coercion in Action',
    description: 'Ví dụ về type coercion trong các tình huống thực tế',
    type: 'coercion',
    difficulty: 'Nâng cao',
    code: `// Addition vs Concatenation
console.log(1 + 2);      // 3 (numeric addition)
console.log(1 + "2");    // "12" (string concatenation)
console.log("1" + 2);    // "12" (string concatenation)
console.log("1" + "2");  // "12" (string concatenation)

// Other operators force numeric conversion
console.log("5" - 2);    // 3
console.log("5" * 2);    // 10
console.log("5" / 2);    // 2.5
console.log("5" % 2);    // 1

// Comparison operators
console.log("2" > 1);    // true
console.log("10" > "9"); // false (string comparison)
console.log("10" > 9);   // true (numeric comparison)

// Equality operators
console.log(0 == false);     // true
console.log("" == false);    // true
console.log(null == undefined); // true
console.log(0 === false);    // false
console.log("" === false);   // false

// Logical operators with truthy/falsy
console.log("hello" && 0);     // 0
console.log("" || "default");  // "default"
console.log(null ?? "default"); // "default"`,
    output: `3
"12"
"12"
"12"
3
10
2.5
1
true
false
true
true
true
true
false
false
0
"default"
"default"`,
    keyPoints: [
      '+ operator prefers string concatenation',
      'Other math operators convert to numbers',
      'String comparison is alphabetical',
      '== performs coercion, === does not',
      'Logical operators return actual values',
    ],
    explanation:
      'Type coercion có thể gây confusion nhưng hiểu rõ rules sẽ giúp code predictable hơn.',
  },
  {
    id: 'number-edge-cases',
    title: 'Number Type Edge Cases',
    description: 'Các trường hợp đặc biệt của kiểu Number',
    type: 'numbers',
    difficulty: 'Nâng cao',
    code: `// Special number values
console.log(Number.MAX_VALUE);           // Largest number
console.log(Number.MIN_VALUE);           // Smallest positive number
console.log(Number.MAX_SAFE_INTEGER);    // Largest safe integer
console.log(Number.MIN_SAFE_INTEGER);    // Smallest safe integer

// Infinity and NaN
console.log(1 / 0);                      // Infinity
console.log(-1 / 0);                     // -Infinity
console.log(0 / 0);                      // NaN
console.log(Math.sqrt(-1));              // NaN

// NaN behavior
console.log(NaN === NaN);                // false
console.log(Number.isNaN(NaN));          // true
console.log(Number.isNaN("hello"));      // false
console.log(isNaN("hello"));             // true (coerces first)

// Floating point precision
console.log(0.1 + 0.2);                  // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);          // false

// Safe comparison
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true

// BigInt for large numbers
console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (wrong!)

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n); // 9007199254740993n`,
    output: `1.7976931348623157e+308
5e-324
9007199254740991
-9007199254740991
Infinity
-Infinity
NaN
NaN
false
true
false
true
0.30000000000000004
false
true
9007199254740991
9007199254740992
9007199254740992
9007199254740993n`,
    keyPoints: [
      'JavaScript numbers are 64-bit floating point',
      'NaN is not equal to itself',
      'Use Number.EPSILON for float comparison',
      'BigInt for integers beyond safe range',
      'Infinity is a valid number value',
    ],
  },
  {
    id: 'string-methods-types',
    title: 'String Methods and Type Behavior',
    description: 'String methods và tương tác với type system',
    type: 'strings',
    difficulty: 'Trung bình',
    code: `let str = "Hello World";
let strObj = new String("Hello World");

// Primitive vs Object string
console.log(typeof str);       // "string"
console.log(typeof strObj);    // "object"
console.log(str === strObj);   // false
console.log(str == strObj);    // true (coercion)

// String methods return new strings
let original = "hello";
let upper = original.toUpperCase();
console.log(original);         // "hello" (unchanged)
console.log(upper);           // "HELLO"

// Template literals
let name = "John";
let age = 30;
let message = \`Hello, my name is \${name} and I'm \${age} years old.\`;
console.log(message);

// String coercion
console.log(String(123));      // "123"
console.log(String(true));     // "true"
console.log(String(null));     // "null"
console.log(String(undefined)); // "undefined"

// Implicit string conversion
console.log("Age: " + 25);     // "Age: 25"
console.log(\`Count: \${10}\`);   // "Count: 10"`,
    output: `string
object
false
true
hello
HELLO
Hello, my name is John and I'm 30 years old.
"123"
"true"
"null"
"undefined"
Age: 25
Count: 10`,
    keyPoints: [
      'String primitive vs String object different',
      'String methods create new strings',
      'Template literals use ${} syntax',
      'String() constructor for explicit conversion',
      'Implicit conversion with + and template literals',
    ],
  },
  {
    id: 'array-type-behaviors',
    title: 'Array Type Behaviors',
    description: 'Hành vi đặc biệt của Array type',
    type: 'arrays',
    difficulty: 'Trung bình',
    code: `// Array creation
let arr1 = [1, 2, 3];
let arr2 = new Array(1, 2, 3);
let arr3 = new Array(3);         // Creates array with 3 empty slots

console.log(arr1);               // [1, 2, 3]
console.log(arr2);               // [1, 2, 3]
console.log(arr3);               // [empty × 3]
console.log(arr3.length);        // 3

// Type checking arrays
console.log(typeof arr1);        // "object"
console.log(Array.isArray(arr1)); // true
console.log(arr1 instanceof Array); // true

// Arrays are objects
arr1.customProp = "hello";
console.log(arr1.customProp);    // "hello"
console.log(arr1.length);        // 3 (length not affected)

// Sparse arrays
let sparse = [1, , , 4];
console.log(sparse);             // [1, empty × 2, 4]
console.log(sparse.length);      // 4
console.log(sparse[1]);          // undefined

// Array coercion
console.log([1, 2, 3] + [4, 5, 6]); // "1,2,34,5,6"
console.log(String([1, 2, 3]));   // "1,2,3"`,
    output: `[1, 2, 3]
[1, 2, 3]
[empty × 3]
3
object
true
true
hello
3
[1, empty × 2, 4]
4
undefined
"1,2,34,5,6"
"1,2,3"`,
    keyPoints: [
      'Array constructor with single number creates sparse array',
      'Arrays are special objects with length property',
      'Can add custom properties to arrays',
      'Sparse arrays have empty slots',
      'Array coercion joins elements with commas',
    ],
  },
  {
    id: 'symbol-usage',
    title: 'Symbol Type Usage',
    description: 'Cách sử dụng Symbol type trong thực tế',
    type: 'symbols',
    difficulty: 'Nâng cao',
    code: `// Creating symbols
let sym1 = Symbol();
let sym2 = Symbol('description');
let sym3 = Symbol('description');

console.log(sym2 === sym3);      // false (always unique)
console.log(sym2.toString());    // "Symbol(description)"

// Symbols as object keys
let obj = {
  name: "John",
  [sym2]: "secret value"
};

console.log(obj.name);           // "John"
console.log(obj[sym2]);          // "secret value"
console.log(Object.keys(obj));   // ["name"] (symbol not included)

// Well-known symbols
let arr = [1, 2, 3];
console.log(arr[Symbol.iterator]); // function values() { [native code] }

// Custom iterator using symbol
let iterableObj = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    let data = this.data;
    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};

for (let value of iterableObj) {
  console.log(value);
}

// Global symbol registry
let globalSym1 = Symbol.for('global');
let globalSym2 = Symbol.for('global');
console.log(globalSym1 === globalSym2); // true`,
    output: `false
Symbol(description)
John
secret value
["name"]
function values() { [native code] }
1
2
3
true`,
    keyPoints: [
      'Symbols are always unique except Symbol.for()',
      'Symbols as object keys are not enumerable',
      'Well-known symbols define object behavior',
      'Symbol.iterator for custom iteration',
      'Symbol.for() creates global symbols',
    ],
  },
];

export const TYPE_COMPARISON: ComparisonItem[] = [
  {
    concept: 'Storage',
    primitive: 'By Value',
    object: 'By Reference',
    example: 'let a = 5 vs let a = {}',
    note: 'Primitives copy values, objects copy references',
  },
  {
    concept: 'Mutability',
    primitive: 'Immutable',
    object: 'Mutable',
    example: 'str = "new" vs obj.prop = "new"',
    note: 'Primitives create new values, objects modify existing',
  },
  {
    concept: 'Memory',
    primitive: 'Stack',
    object: 'Heap',
    example: 'Direct storage vs Referenced storage',
    note: 'Stack for simple values, heap for complex structures',
  },
  {
    concept: 'Equality',
    primitive: 'Value comparison',
    object: 'Reference comparison',
    example: '5 === 5 vs {} === {}',
    note: 'Primitives compare values, objects compare references',
  },
  {
    concept: 'Type Checking',
    primitive: 'typeof reliable',
    object: 'typeof shows "object"',
    example: 'typeof "hello" vs typeof []',
    note: 'typeof null also returns "object" (historical bug)',
  },
];

export const TYPE_CHECKING_METHODS: TypeMethod[] = [
  {
    name: 'typeof',
    description: 'Returns string indicating type of operand',
    syntax: 'typeof operand',
    example: `console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (bug!)
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof function(){}); // "function"`,
    output: `"number"
"string"
"boolean"
"undefined"
"object"
"object"
"object"
"function"`,
    notes: [
      'Returns "object" for null (historical bug)',
      'Arrays return "object", not "array"',
      'Functions return "function", not "object"',
      'Best for primitive type checking',
    ],
  },
  {
    name: 'instanceof',
    description: 'Tests if object is instance of constructor',
    syntax: 'object instanceof Constructor',
    example: `let arr = [1, 2, 3];
let date = new Date();
let obj = {};

console.log(arr instanceof Array);    // true
console.log(arr instanceof Object);   // true
console.log(date instanceof Date);    // true
console.log(obj instanceof Object);   // true
console.log("hello" instanceof String); // false`,
    output: `true
true
true
true
false`,
    notes: [
      'Checks prototype chain',
      'Primitives return false',
      'Can be fooled by prototype manipulation',
      'Cross-frame issues possible',
    ],
  },
  {
    name: 'Array.isArray()',
    description: 'Determines if value is an array',
    syntax: 'Array.isArray(value)',
    example: `console.log(Array.isArray([]));          // true
console.log(Array.isArray([1, 2, 3]));   // true
console.log(Array.isArray({}));          // false
console.log(Array.isArray("hello"));     // false
console.log(Array.isArray(null));        // false`,
    output: `true
true
false
false
false`,
    notes: [
      'Most reliable way to check arrays',
      'Works across different frames/contexts',
      'Recommended over instanceof Array',
      'Returns false for array-like objects',
    ],
  },
  {
    name: 'Object.prototype.toString.call()',
    description: 'Most accurate type checking method',
    syntax: 'Object.prototype.toString.call(value)',
    example: `let toString = Object.prototype.toString;

console.log(toString.call(42));        // "[object Number]"
console.log(toString.call("hello"));   // "[object String]"
console.log(toString.call(true));      // "[object Boolean]"
console.log(toString.call(null));      // "[object Null]"
console.log(toString.call(undefined)); // "[object Undefined]"
console.log(toString.call([]));        // "[object Array]"
console.log(toString.call({}));        // "[object Object]"
console.log(toString.call(new Date())); // "[object Date]"`,
    output: `"[object Number]"
"[object String]"
"[object Boolean]"
"[object Null]"
"[object Undefined]"
"[object Array]"
"[object Object]"
"[object Date]"`,
    notes: [
      'Most accurate type detection',
      'Works for all types including null',
      'Cannot be easily fooled',
      'Returns internal [[Class]] property',
    ],
  },
];

export const BEST_PRACTICES: BestPractice[] = [
  {
    title: 'Sử dụng typeof cho primitive types',
    description: 'typeof operator an toàn và reliable cho primitive types',
    example: `function isString(value) {
  return typeof value === 'string';
}

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isBoolean(value) {
  return typeof value === 'boolean';
}`,
    benefits: ['Simple và readable', 'Performance tốt', 'Widely supported', 'Không throw errors'],
  },
  {
    title: 'Sử dụng Array.isArray() cho arrays',
    description: 'Cách chính xác và reliable nhất để kiểm tra array',
    example: `// Good
if (Array.isArray(value)) {
  value.forEach(item => console.log(item));
}

// Avoid
if (value instanceof Array) {
  // có thể fail cross-frame
}

// Avoid
if (typeof value === 'object' && value.length) {
  // string cũng có length!
}`,
    benefits: [
      'Cross-frame compatible',
      'Không confused bởi array-like objects',
      'Standard method',
      'Clear intent',
    ],
  },
  {
    title: 'Kiểm tra null trước khi check object',
    description: 'Tránh bug typeof null === "object"',
    example: `function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}`,
    benefits: ['Tránh null bug', 'Exclude arrays', 'More precise', 'Predictable behavior'],
  },
  {
    title: 'Sử dụng strict equality (===)',
    description: 'Tránh unexpected type coercion với === operator',
    example: `// Good
if (value === null) { /* handle null */ }
if (value === undefined) { /* handle undefined */ }
if (value === "") { /* handle empty string */ }
if (value === 0) { /* handle zero */ }

// Avoid
if (value == null) { /* matches both null and undefined */ }
if (value == "") { /* matches 0, false, [] etc */ }`,
    benefits: [
      'No unexpected coercion',
      'More predictable',
      'Easier debugging',
      'Better performance',
    ],
  },
  {
    title: 'Sử dụng Number.isNaN() thay vì isNaN()',
    description: 'Number.isNaN() không thực hiện type coercion',
    example: `// Good
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN("hello")); // false

// Problematic
console.log(isNaN("hello"));        // true (coerces to number first)
console.log(isNaN(undefined));      // true (coerces to NaN)`,
    benefits: ['No type coercion', 'More accurate', 'Predictable results', 'ES6 standard'],
  },
  {
    title: 'Validate input types early',
    description: 'Check types at function boundaries',
    example: `function calculateArea(width, height) {
  // Validate inputs early
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new TypeError('Width and height must be numbers');
  }

  if (width < 0 || height < 0) {
    throw new RangeError('Width and height must be positive');
  }

  return width * height;
}`,
    benefits: [
      'Fail fast approach',
      'Better error messages',
      'Easier debugging',
      'Self-documenting code',
    ],
  },
];

export const COMMON_MISTAKES: CommonMistake[] = [
  {
    title: 'typeof null trả về "object"',
    description: 'Đây là bug lịch sử của JavaScript từ phiên bản đầu tiên',
    wrongExample: `if (typeof value === 'object') {
  // Bug: null cũng pass qua đây!
  console.log(value.property);
}`,
    correctExample: `if (value !== null && typeof value === 'object') {
  console.log(value.property);
}

// Hoặc sử dụng Object.prototype.toString
if (Object.prototype.toString.call(value) === '[object Object]') {
  console.log(value.property);
}`,
    explanation:
      'typeof null returns "object" due to historical bug. Always check for null explicitly.',
  },
  {
    title: 'Confusing arrays với objects',
    description: 'typeof array trả về "object", không phải "array"',
    wrongExample: `if (typeof data === 'object') {
  // Bug: arrays cũng pass qua đây!
  for (let key in data) {
    console.log(key, data[key]);
  }
}`,
    correctExample: `if (Array.isArray(data)) {
  data.forEach((item, index) => {
    console.log(index, item);
  });
} else if (data !== null && typeof data === 'object') {
  for (let key in data) {
    console.log(key, data[key]);
  }
}`,
    explanation: 'Use Array.isArray() to distinguish arrays from plain objects.',
  },
  {
    title: 'So sánh NaN với chính nó',
    description: 'NaN là giá trị duy nhất không bằng chính nó',
    wrongExample: `if (result === NaN) {
  console.log("Result is NaN");
}`,
    correctExample: `if (Number.isNaN(result)) {
  console.log("Result is NaN");
}

// Hoặc
if (result !== result) {
  console.log("Result is NaN");
}`,
    explanation: 'NaN === NaN is false. Use Number.isNaN() or value !== value to check for NaN.',
  },
  {
    title: 'Floating point precision issues',
    description: 'Phép toán floating point không chính xác tuyệt đối',
    wrongExample: `if (0.1 + 0.2 === 0.3) {
  console.log("Equal!");
} else {
  console.log("Not equal!"); // This will execute
}`,
    correctExample: `function nearlyEqual(a, b, epsilon = Number.EPSILON) {
  return Math.abs(a - b) < epsilon;
}

if (nearlyEqual(0.1 + 0.2, 0.3)) {
  console.log("Nearly equal!");
}`,
    explanation: 'Use epsilon comparison for floating point numbers due to precision limitations.',
  },
  {
    title: 'Nhầm lẫn giữa == và ===',
    description: 'Operator == thực hiện type coercion, === không',
    wrongExample: `if (value == true) {
  // Bug: strings, numbers cũng có thể pass
}

if (value == 0) {
  // Bug: "", false, [] cũng pass
}`,
    correctExample: `if (value === true) {
  // Chỉ boolean true
}

if (value === 0) {
  // Chỉ number 0
}

// Hoặc explicit conversion
if (Boolean(value) === true) {
  // Convert to boolean first
}`,
    explanation:
      'Use === to avoid unexpected type coercion. Use == only when you specifically need coercion.',
  },
  {
    title: 'Không hiểu scope của var vs let/const',
    description: 'var có function scope, let/const có block scope',
    wrongExample: `for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Logs 3, 3, 3
  }, 100);
}`,
    correctExample: `for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Logs 0, 1, 2
  }, 100);
}

// Hoặc với var và IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(j); // Logs 0, 1, 2
    }, 100);
  })(i);
}`,
    explanation:
      'Use let/const for block scope. var has function scope and can cause closure issues.',
  },
  {
    title: 'Quên rằng string là immutable',
    description: 'String methods trả về string mới, không modify original',
    wrongExample: `let str = "hello";
str.toUpperCase();
console.log(str); // Still "hello"`,
    correctExample: `let str = "hello";
str = str.toUpperCase();
console.log(str); // "HELLO"

// Hoặc
let str = "hello";
let upperStr = str.toUpperCase();
console.log(upperStr); // "HELLO"`,
    explanation:
      "Strings are immutable. String methods return new strings, they don't modify the original.",
  },
];

export const getExamplesByType = (type: string): CodeExample[] => {
  return CODE_EXAMPLES.filter(example => example.type === type);
};

export const searchExamples = (searchTerm: string): CodeExample[] => {
  return CODE_EXAMPLES.filter(
    example =>
      example.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      example.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      example.code.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getConceptsByDifficulty = (difficulty: string): DataTypeConcept[] => {
  return DATA_TYPE_CONCEPTS.filter(concept => concept.difficulty === difficulty);
};

export const searchConcepts = (searchTerm: string): DataTypeConcept[] => {
  return DATA_TYPE_CONCEPTS.filter(
    concept =>
      concept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      concept.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Utility functions for type checking
export const createTypeChecker = () => {
  return {
    isString: (value: any): value is string => typeof value === 'string',
    isNumber: (value: any): value is number => typeof value === 'number' && !isNaN(value),
    isBoolean: (value: any): value is boolean => typeof value === 'boolean',
    isArray: (value: any): value is any[] => Array.isArray(value),
    isObject: (value: any): value is object =>
      value !== null && typeof value === 'object' && !Array.isArray(value),
    isFunction: (value: any): value is Function => typeof value === 'function',
    isNull: (value: any): value is null => value === null,
    isUndefined: (value: any): value is undefined => value === undefined,
    isNullish: (value: any): value is null | undefined => value == null,
    isPrimitive: (value: any): boolean =>
      value === null || (typeof value !== 'object' && typeof value !== 'function'),
  };
};

// Constants for type checking
export const TYPE_CATEGORIES = {
  PRIMITIVES: ['number', 'string', 'boolean', 'undefined', 'symbol', 'bigint'],
  OBJECTS: ['object', 'function'],
  SPECIAL: ['null', 'NaN', 'Infinity'],
} as const;

export const FALSY_VALUES = [false, 0, -0, BigInt(0), '', null, undefined, NaN] as const;

export const EXAMPLE_TYPES = [
  'comparison',
  'utilities',
  'coercion',
  'numbers',
  'strings',
  'arrays',
  'symbols',
  'objects',
  'functions',
] as const;

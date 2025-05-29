export interface Question {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'code-output';
  category:
    | 'primitives'
    | 'objects'
    | 'coercion'
    | 'type-checking'
    | 'truthy-falsy'
    | 'memory'
    | 'comparison';
  level: 'beginner' | 'intermediate' | 'advanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  options?: string[];
  correctAnswer: string | number | boolean;
  explanation: string;
  code?: string;
  points?: number;
}

export const DATA_TYPES_QUESTIONS: Question[] = [
  // Primitive Types Questions
  {
    id: 'primitive-1',
    question: 'JavaScript có bao nhiêu kiểu dữ liệu nguyên thủy (primitive types)?',
    type: 'multiple-choice',
    category: 'primitives',
    level: 'beginner',
    difficulty: 'beginner',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation:
      'JavaScript có 7 primitive types: number, string, boolean, null, undefined, symbol, và bigint.',
    points: 2,
  },
  {
    id: 'primitive-2',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'primitives',
    level: 'beginner',
    difficulty: 'beginner',
    code: `let a = 5;
let b = a;
a = 10;
console.log(a, b);`,
    options: ['5, 5', '10, 5', '10, 10', '5, 10'],
    correctAnswer: 1,
    explanation:
      'Primitive types được lưu trữ by value. b nhận copy của a, nên thay đổi a không ảnh hưởng đến b.',
    points: 3,
  },
  {
    id: 'primitive-3',
    question: 'Symbol trong JavaScript có đặc điểm gì?',
    type: 'multiple-choice',
    category: 'primitives',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: [
      'Luôn unique, ngay cả khi có cùng description',
      'Có thể duplicate nếu có cùng description',
      'Chỉ được sử dụng làm string',
      'Tự động convert thành number',
    ],
    correctAnswer: 0,
    explanation:
      'Mỗi Symbol luôn unique, ngay cả Symbol("same") === Symbol("same") sẽ trả về false.',
    points: 3,
  },
  {
    id: 'primitive-4',
    question: 'BigInt được sử dụng khi nào?',
    type: 'multiple-choice',
    category: 'primitives',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: [
      'Khi cần số thực lớn',
      'Khi cần số nguyên lớn hơn Number.MAX_SAFE_INTEGER',
      'Khi cần số âm',
      'Khi cần decimal precision',
    ],
    correctAnswer: 1,
    explanation: 'BigInt dùng cho số nguyên lớn hơn Number.MAX_SAFE_INTEGER (2^53 - 1).',
    points: 3,
  },
  {
    id: 'primitive-5',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'primitives',
    level: 'advanced',
    difficulty: 'advanced',
    code: `console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);`,
    options: [
      '"null", "undefined", "number"',
      '"object", "undefined", "number"',
      '"null", "undefined", "NaN"',
      '"object", "undefined", "NaN"',
    ],
    correctAnswer: 1,
    explanation:
      'typeof null trả về "object" (bug lịch sử), typeof undefined trả về "undefined", typeof NaN trả về "number".',
    points: 4,
  },

  // Object Types Questions
  {
    id: 'object-1',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'objects',
    level: 'beginner',
    difficulty: 'beginner',
    code: `let obj1 = { value: 5 };
let obj2 = obj1;
obj1.value = 10;
console.log(obj1.value, obj2.value);`,
    options: ['5, 5', '10, 5', '10, 10', '5, 10'],
    correctAnswer: 2,
    explanation: 'Objects được lưu trữ by reference. obj2 trỏ đến cùng object với obj1.',
    points: 3,
  },
  {
    id: 'object-2',
    question: 'Cách nào đúng để kiểm tra một giá trị là array?',
    type: 'multiple-choice',
    category: 'objects',
    level: 'beginner',
    difficulty: 'beginner',
    options: [
      'typeof value === "array"',
      'value instanceof Array',
      'Array.isArray(value)',
      'Cả B và C đều đúng',
    ],
    correctAnswer: 3,
    explanation:
      'Array.isArray() là cách reliable nhất, instanceof Array cũng đúng nhưng có thể fail cross-frame.',
    points: 3,
  },
  {
    id: 'object-3',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'objects',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `let arr = [1, 2, 3];
arr.customProp = "hello";
console.log(arr.length);
console.log(arr.customProp);`,
    options: ['3, "hello"', '4, "hello"', '3, undefined', 'Error'],
    correctAnswer: 0,
    explanation:
      'Arrays là objects, có thể add custom properties. Length chỉ đếm indexed elements.',
    points: 4,
  },
  {
    id: 'object-4',
    question: 'Function trong JavaScript là gì?',
    type: 'multiple-choice',
    category: 'objects',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: ['Primitive type', 'Special type of object', 'Built-in method', 'Operator'],
    correctAnswer: 1,
    explanation: 'Functions trong JavaScript là first-class objects với executable code.',
    points: 3,
  },
  {
    id: 'object-5',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'objects',
    level: 'advanced',
    difficulty: 'advanced',
    code: `let sparse = [1, , , 4];
console.log(sparse.length);
console.log(sparse[1]);
console.log(sparse.hasOwnProperty(1));`,
    options: ['4, undefined, false', '4, undefined, true', '2, undefined, false', 'Error'],
    correctAnswer: 0,
    explanation:
      'Sparse array có empty slots. Length = 4, sparse[1] = undefined, hasOwnProperty(1) = false vì slot 1 không tồn tại.',
    points: 5,
  },

  // Type Coercion Questions
  {
    id: 'coercion-1',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'coercion',
    level: 'beginner',
    difficulty: 'beginner',
    code: `console.log("5" + 3);
console.log("5" - 3);`,
    options: ['"53", 2', '8, 2', '"53", "2"', '8, "2"'],
    correctAnswer: 0,
    explanation: 'Operator + ưu tiên string concatenation, các operators khác convert to number.',
    points: 3,
  },
  {
    id: 'coercion-2',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'coercion',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `console.log([] + []);
console.log([] + {});
console.log({} + []);`,
    options: [
      '""", "[object Object]", "[object Object]"',
      '"", "[object Object]", "0"',
      '"", "[object Object]", "[object Object]"',
      'Error',
    ],
    correctAnswer: 2,
    explanation:
      'Arrays và objects được convert to string trước khi concatenation. [] thành "", {} thành "[object Object]".',
    points: 4,
  },
  {
    id: 'coercion-3',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'coercion',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `console.log(0 == false);
console.log("" == false);
console.log(null == undefined);
console.log(0 === false);`,
    options: [
      'true, true, true, false',
      'false, false, false, false',
      'true, false, true, false',
      'true, true, true, true',
    ],
    correctAnswer: 0,
    explanation:
      '== thực hiện type coercion, === không. null == undefined là special case trả về true.',
    points: 4,
  },
  {
    id: 'coercion-4',
    question: 'String comparison nào đúng?',
    type: 'code-output',
    category: 'coercion',
    level: 'advanced',
    difficulty: 'advanced',
    code: `console.log("10" > "9");
console.log("10" > 9);
console.log("abc" > "def");`,
    options: ['false, true, false', 'true, true, false', 'false, true, true', 'true, true, true'],
    correctAnswer: 0,
    explanation:
      '"10" > "9" so sánh lexicographically (false), "10" > 9 convert to number (true), "abc" < "def" alphabetically (false).',
    points: 5,
  },
  {
    id: 'coercion-5',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'coercion',
    level: 'advanced',
    difficulty: 'advanced',
    code: `console.log(Number(""));
console.log(Number(" "));
console.log(Number("123abc"));
console.log(parseInt("123abc"));`,
    options: [
      '0, 0, NaN, 123',
      'NaN, NaN, NaN, 123',
      '0, NaN, NaN, 123',
      'undefined, undefined, NaN, 123',
    ],
    correctAnswer: 0,
    explanation:
      'Number() convert whitespace to 0, invalid strings to NaN. parseInt() parse until invalid character.',
    points: 5,
  },

  // Type Checking Questions
  {
    id: 'check-1',
    question: 'Cách nào KHÔNG phải là type checking method?',
    type: 'multiple-choice',
    category: 'type-checking',
    level: 'beginner',
    difficulty: 'beginner',
    options: ['typeof', 'instanceof', 'Object.prototype.toString.call()', 'Object.getType()'],
    correctAnswer: 3,
    explanation:
      'Object.getType() không tồn tại trong JavaScript. Ba phương thức còn lại đều là cách type checking.',
    points: 2,
  },
  {
    id: 'check-2',
    question: 'Object.prototype.toString.call() trả về gì cho array?',
    type: 'multiple-choice',
    category: 'type-checking',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: ['"[object Object]"', '"[object Array]"', '"array"', '"Array"'],
    correctAnswer: 1,
    explanation: 'Object.prototype.toString.call([]) trả về "[object Array]".',
    points: 3,
  },
  {
    id: 'check-3',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'type-checking',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `console.log(typeof function(){});
console.log(typeof class {});
console.log(typeof new Date());`,
    options: [
      '"function", "function", "object"',
      '"function", "class", "object"',
      '"object", "function", "object"',
      '"function", "object", "date"',
    ],
    correctAnswer: 0,
    explanation:
      'Functions và classes đều trả về "function", objects (including Date instances) trả về "object".',
    points: 4,
  },
  {
    id: 'check-4',
    question: 'Cách nào đúng để check plain object (không phải array, function, null)?',
    type: 'multiple-choice',
    category: 'type-checking',
    level: 'advanced',
    difficulty: 'advanced',
    options: [
      'typeof obj === "object"',
      'obj !== null && typeof obj === "object"',
      'obj !== null && typeof obj === "object" && !Array.isArray(obj)',
      'Object.prototype.toString.call(obj) === "[object Object]"',
    ],
    correctAnswer: 3,
    explanation:
      'Object.prototype.toString.call() là cách chính xác nhất để kiểm tra plain object.',
    points: 5,
  },
  {
    id: 'check-5',
    question: 'instanceof có thể fail trong trường hợp nào?',
    type: 'multiple-choice',
    category: 'type-checking',
    level: 'advanced',
    difficulty: 'advanced',
    options: [
      'Khi object null',
      'Cross-frame/window contexts',
      'Khi prototype bị thay đổi',
      'Tất cả các trường hợp trên',
    ],
    correctAnswer: 3,
    explanation: 'instanceof có thể fail với null, cross-frame issues, và prototype manipulation.',
    points: 4,
  },

  // Truthy/Falsy Questions
  {
    id: 'truthy-1',
    question: 'Có bao nhiêu falsy values trong JavaScript?',
    type: 'multiple-choice',
    category: 'truthy-falsy',
    level: 'beginner',
    difficulty: 'beginner',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: '8 falsy values: false, 0, -0, 0n, "", null, undefined, NaN.',
    points: 2,
  },
  {
    id: 'truthy-2',
    question: 'Giá trị nào là truthy?',
    type: 'multiple-choice',
    category: 'truthy-falsy',
    level: 'beginner',
    difficulty: 'beginner',
    options: ['[]', '""', '0', 'null'],
    correctAnswer: 0,
    explanation: 'Empty array [] là truthy. Empty string "", 0, và null đều là falsy.',
    points: 3,
  },
  {
    id: 'truthy-3',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'truthy-falsy',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(" "));`,
    options: [
      'true, true, false, true',
      'false, false, false, false',
      'true, true, false, false',
      'false, true, false, true',
    ],
    correctAnswer: 0,
    explanation:
      'Empty array và object là truthy, empty string là falsy, string với space là truthy.',
    points: 4,
  },
  {
    id: 'truthy-4',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'truthy-falsy',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `console.log("hello" && 0);
console.log("" || "default");
console.log(null ?? "fallback");`,
    options: [
      '0, "default", "fallback"',
      '"hello", "", null',
      'false, "default", "fallback"',
      '0, "default", null',
    ],
    correctAnswer: 0,
    explanation:
      '&& trả về falsy value hoặc last truthy, || trả về first truthy hoặc last falsy, ?? chỉ check null/undefined.',
    points: 4,
  },
  {
    id: 'truthy-5',
    question: 'Nullish coalescing (??) khác gì với logical OR (||)?',
    type: 'multiple-choice',
    category: 'truthy-falsy',
    level: 'advanced',
    difficulty: 'advanced',
    options: [
      'Không có sự khác biệt',
      '?? chỉ check null/undefined, || check tất cả falsy values',
      '|| nhanh hơn ??',
      '?? chỉ hoạt động với strings',
    ],
    correctAnswer: 1,
    explanation:
      '?? chỉ fallback khi left side là null hoặc undefined, || fallback với tất cả falsy values.',
    points: 4,
  },

  // Memory Management Questions
  {
    id: 'memory-1',
    question: 'Primitive types được lưu trữ ở đâu?',
    type: 'multiple-choice',
    category: 'memory',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: ['Heap', 'Stack', 'Cache', 'Register'],
    correctAnswer: 1,
    explanation: 'Primitive values được lưu trữ trực tiếp trên stack, objects được lưu trên heap.',
    points: 3,
  },
  {
    id: 'memory-2',
    question: 'Reference types được lưu trữ như thế nào?',
    type: 'multiple-choice',
    category: 'memory',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: [
      'Value trên stack',
      'Reference trên stack, value trên heap',
      'Tất cả trên heap',
      'Tất cả trên stack',
    ],
    correctAnswer: 1,
    explanation: 'Reference (address) được lưu trên stack, actual object data được lưu trên heap.',
    points: 4,
  },
  {
    id: 'memory-3',
    question: 'Khi nào garbage collection xảy ra?',
    type: 'multiple-choice',
    category: 'memory',
    level: 'advanced',
    difficulty: 'advanced',
    options: [
      'Khi object null',
      'Khi không còn references đến object',
      'Mỗi 10 seconds',
      'Khi memory đầy',
    ],
    correctAnswer: 1,
    explanation: 'Garbage collection xảy ra khi object không còn reachable references nào.',
    points: 4,
  },
  {
    id: 'memory-4',
    question: 'Memory leak có thể xảy ra do đâu?',
    type: 'multiple-choice',
    category: 'memory',
    level: 'advanced',
    difficulty: 'advanced',
    options: [
      'Circular references',
      'Global variables không cleanup',
      'Event listeners không remove',
      'Tất cả các trường hợp trên',
    ],
    correctAnswer: 3,
    explanation: 'Tất cả đều có thể gây memory leaks nếu không được quản lý đúng cách.',
    points: 5,
  },
  {
    id: 'memory-5',
    question: 'Đoạn code nào có thể gây memory leak?',
    type: 'code-output',
    category: 'memory',
    level: 'advanced',
    difficulty: 'advanced',
    code: `function createHandler() {
  let bigData = new Array(1000000).fill("data");
  return function() {
    console.log("handler called");
  };
}

let handler = createHandler();`,
    options: [
      'Không leak',
      'Leak vì bigData không được free',
      'Leak vì function không được call',
      'Leak vì array quá lớn',
    ],
    correctAnswer: 1,
    explanation: 'Closure giữ reference đến entire scope, including bigData dù không sử dụng.',
    points: 5,
  },

  // Comparison Questions
  {
    id: 'compare-1',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'comparison',
    level: 'beginner',
    difficulty: 'beginner',
    code: `console.log({} === {});
console.log([] === []);
console.log("hello" === "hello");`,
    options: ['false, false, true', 'true, true, true', 'false, false, false', 'true, false, true'],
    correctAnswer: 0,
    explanation:
      'Objects so sánh by reference (khác objects = false), primitives so sánh by value.',
    points: 3,
  },
  {
    id: 'compare-2',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'comparison',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `let a = [1, 2, 3];
let b = a;
let c = [...a];
console.log(a === b);
console.log(a === c);`,
    options: ['true, false', 'false, false', 'true, true', 'false, true'],
    correctAnswer: 0,
    explanation:
      'b shares same reference với a, c là new array (spread operator tạo shallow copy).',
    points: 4,
  },
  {
    id: 'compare-3',
    question: 'Floating point comparison nào đúng?',
    type: 'code-output',
    category: 'comparison',
    level: 'advanced',
    difficulty: 'advanced',
    code: `console.log(0.1 + 0.2 === 0.3);
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);`,
    options: ['true, true', 'false, true', 'true, false', 'false, false'],
    correctAnswer: 1,
    explanation: 'Floating point có precision issues. Dùng epsilon comparison cho accuracy.',
    points: 5,
  },
  {
    id: 'compare-4',
    question: 'NaN comparison nào đúng?',
    type: 'code-output',
    category: 'comparison',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `console.log(NaN === NaN);
console.log(Number.isNaN(NaN));
console.log(isNaN("hello"));
console.log(Number.isNaN("hello"));`,
    options: [
      'false, true, true, false',
      'true, true, false, false',
      'false, false, true, true',
      'true, false, true, false',
    ],
    correctAnswer: 0,
    explanation: 'NaN không bằng chính nó. Number.isNaN() không coerce, isNaN() có coerce.',
    points: 4,
  },
  {
    id: 'compare-5',
    question: 'Object equality check nào đúng cho deep comparison?',
    type: 'multiple-choice',
    category: 'comparison',
    level: 'advanced',
    difficulty: 'advanced',
    options: [
      'obj1 === obj2',
      'JSON.stringify(obj1) === JSON.stringify(obj2)',
      'Object.is(obj1, obj2)',
      'Custom recursive comparison function',
    ],
    correctAnswer: 3,
    explanation: 'Chỉ custom recursive function mới handle được tất cả cases cho deep comparison.',
    points: 5,
  },

  // Advanced Edge Cases
  {
    id: 'edge-1',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'primitives',
    level: 'advanced',
    difficulty: 'advanced',
    code: `console.log(typeof typeof 42);
console.log(typeof (typeof 42));
console.log(typeof null);`,
    options: [
      '"string", "string", "object"',
      '"number", "number", "null"',
      '"string", "number", "object"',
      '"undefined", "string", "object"',
    ],
    correctAnswer: 0,
    explanation:
      'typeof luôn trả về string, nên typeof typeof luôn là "string". typeof null là "object" (bug).',
    points: 5,
  },
  {
    id: 'edge-2',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'coercion',
    level: 'advanced',
    difficulty: 'advanced',
    code: `console.log(+"");
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);`,
    options: [
      '0, 1, 0, 0, NaN',
      'NaN, 1, 0, NaN, NaN',
      '0, true, false, null, undefined',
      'undefined, 1, 0, 0, NaN',
    ],
    correctAnswer: 0,
    explanation:
      'Unary + operator converts to number: "" → 0, true → 1, false → 0, null → 0, undefined → NaN.',
    points: 5,
  },
  {
    id: 'edge-3',
    question: 'String object vs primitive khác nhau như thế nào?',
    type: 'code-output',
    category: 'objects',
    level: 'advanced',
    difficulty: 'advanced',
    code: `let str1 = "hello";
let str2 = new String("hello");
console.log(typeof str1);
console.log(typeof str2);
console.log(str1 == str2);
console.log(str1 === str2);`,
    options: [
      '"string", "object", true, false',
      '"string", "string", true, true',
      '"string", "object", false, false',
      '"object", "object", true, false',
    ],
    correctAnswer: 0,
    explanation: 'String primitive vs String object. == coerces object to primitive, === không.',
    points: 5,
  },
  {
    id: 'edge-4',
    question: 'Array holes hoạt động như thế nào?',
    type: 'code-output',
    category: 'objects',
    level: 'advanced',
    difficulty: 'advanced',
    code: `let arr = [1, , 3];
console.log(arr.length);
console.log(arr[1]);
console.log(1 in arr);
console.log(arr.hasOwnProperty(1));`,
    options: [
      '3, undefined, false, false',
      '2, undefined, true, true',
      '3, undefined, true, false',
      '3, null, false, false',
    ],
    correctAnswer: 0,
    explanation:
      'Array holes: length counts holes, accessing returns undefined, but property không tồn tại.',
    points: 5,
  },
  {
    id: 'edge-5',
    question: 'valueOf vs toString trong coercion?',
    type: 'code-output',
    category: 'coercion',
    level: 'advanced',
    difficulty: 'advanced',
    code: `let obj = {
  valueOf() { return 42; },
  toString() { return "hello"; }
};
console.log(+obj);
console.log("" + obj);`,
    options: ['42, "hello"', '"hello", 42', '42, "42"', 'NaN, "hello"'],
    correctAnswer: 2,
    explanation:
      'Numeric coercion ưu tiên valueOf(), string coercion cũng ưu tiên valueOf() với + operator.',
    points: 5,
  },
];

// Utility functions
export type QuestionCategory = Question['category'];
export type QuestionLevel = Question['level'];

export const getQuestionsByCategory = (category: QuestionCategory): Question[] => {
  return DATA_TYPES_QUESTIONS.filter(q => q.category === category);
};

export const getQuestionsByLevel = (level: QuestionLevel): Question[] => {
  return DATA_TYPES_QUESTIONS.filter(q => q.level === level);
};

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...DATA_TYPES_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const searchQuestions = (searchTerm: string): Question[] => {
  const term = searchTerm.toLowerCase();
  return DATA_TYPES_QUESTIONS.filter(
    q =>
      q.question.toLowerCase().includes(term) ||
      q.explanation.toLowerCase().includes(term) ||
      q.category.includes(term)
  );
};

export interface QuizScoreResult {
  correct: number;
  total: number;
  percentage: number;
  points: number;
  maxPoints: number;
}

export const calculateQuizScore = (
  answers: (string | number | boolean)[],
  questions: Question[]
): QuizScoreResult => {
  let correct = 0;
  let points = 0;
  let maxPoints = 0;

  questions.forEach((question, index) => {
    maxPoints += question.points || 1;
    if (answers[index] === question.correctAnswer) {
      correct++;
      points += question.points || 1;
    }
  });

  return {
    correct,
    total: questions.length,
    percentage: Math.round((correct / questions.length) * 100),
    points,
    maxPoints,
  };
};

export const getQuizRecommendations = (score: number): string[] => {
  if (score >= 90) {
    return [
      'Xuất sắc! Bạn đã master JavaScript data types.',
      'Hãy khám phá TypeScript để type safety tốt hơn.',
      'Thử implement custom type checking utilities.',
    ];
  } else if (score >= 70) {
    return [
      'Tốt lắm! Bạn hiểu rõ hầu hết concepts.',
      'Ôn lại type coercion và edge cases.',
      'Luyện tập với memory management concepts.',
    ];
  } else if (score >= 50) {
    return [
      'Bạn có foundation tốt nhưng cần practice thêm.',
      'Focus vào primitive vs object differences.',
      'Học thêm về type checking methods.',
    ];
  } else {
    return [
      'Hãy tiếp tục học! Data types là nền tảng quan trọng.',
      'Bắt đầu với primitive types cơ bản.',
      'Ôn lại typeof operator và type coercion.',
      'Practice với simple examples trước khi làm complex.',
    ];
  }
};

export const QUESTION_CATEGORIES = [
  'primitives',
  'objects',
  'coercion',
  'type-checking',
  'truthy-falsy',
  'memory',
  'comparison',
] as const;

export const QUESTION_LEVELS = ['beginner', 'intermediate', 'advanced'] as const;

export const getQuestionById = (id: string): Question | undefined => {
  return DATA_TYPES_QUESTIONS.find(q => q.id === id);
};

export const getTotalQuestions = (): number => {
  return DATA_TYPES_QUESTIONS.length;
};

export const getQuestionsByDifficulty = (difficulty: Question['difficulty']): Question[] => {
  return DATA_TYPES_QUESTIONS.filter(q => q.difficulty === difficulty);
};

export const getMaxPointsForQuestions = (questions: Question[]): number => {
  return questions.reduce((total, question) => total + (question.points || 1), 0);
};

// Category statistics
export const getCategoryStats = () => {
  const stats: Record<string, number> = {};
  QUESTION_CATEGORIES.forEach(category => {
    stats[category] = getQuestionsByCategory(category).length;
  });
  return stats;
};

// Level statistics
export const getLevelStats = () => {
  const stats: Record<string, number> = {};
  QUESTION_LEVELS.forEach(level => {
    stats[level] = getQuestionsByLevel(level).length;
  });
  return stats;
};

// Export for external use
export { DATA_TYPES_QUESTIONS as FUNCTIONS_QUESTIONS };

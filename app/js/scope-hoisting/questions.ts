export interface Question {
  id: string;
  category: 'theory' | 'practice' | 'interview';
  level: 'beginner' | 'intermediate' | 'advanced';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  code?: string;
}

export const SCOPE_HOISTING_QUESTIONS: Question[] = [
  // Theory Questions - Beginner
  {
    id: 'scope-basic-1',
    category: 'theory',
    level: 'beginner',
    question: 'Scope trong JavaScript là gì?',
    options: [
      'Phạm vi mà biến có thể được truy cập',
      'Cách khai báo biến',
      'Kiểu dữ liệu của biến',
      'Tốc độ thực thi của biến',
    ],
    correctAnswer: 0,
    explanation: 'Scope là phạm vi mà biến có thể được truy cập và sử dụng trong JavaScript.',
  },
  {
    id: 'scope-basic-2',
    category: 'theory',
    level: 'beginner',
    question: 'JavaScript có bao nhiều loại scope chính?',
    options: [
      '2 loại: Global và Local',
      '3 loại: Global, Function và Block',
      '4 loại: Global, Function, Block và Module',
      '1 loại: Global scope',
    ],
    correctAnswer: 1,
    explanation:
      'JavaScript có 3 loại scope chính: Global scope, Function scope và Block scope (ES6+).',
  },
  {
    id: 'hoisting-basic-1',
    category: 'theory',
    level: 'beginner',
    question: 'Hoisting trong JavaScript có nghĩa là gì?',
    options: [
      'Tăng hiệu suất của code',
      'Khai báo biến và function được "nâng" lên đầu scope',
      'Sắp xếp code theo thứ tự abc',
      'Chuyển đổi kiểu dữ liệu tự động',
    ],
    correctAnswer: 1,
    explanation:
      'Hoisting là cơ chế JavaScript "nâng" các khai báo biến và function lên đầu scope của chúng.',
  },
  {
    id: 'tdz-basic-1',
    category: 'theory',
    level: 'beginner',
    question: 'Temporal Dead Zone (TDZ) áp dụng cho loại khai báo nào?',
    options: ['Chỉ var', 'Chỉ let và const', 'Tất cả var, let, const', 'Chỉ function declarations'],
    correctAnswer: 1,
    explanation:
      'TDZ chỉ áp dụng cho let và const. Từ đầu scope đến chỗ khai báo, biến ở trong TDZ và không thể truy cập.',
  },

  // Theory Questions - Intermediate
  {
    id: 'scope-intermediate-1',
    category: 'theory',
    level: 'intermediate',
    question: 'Lexical scope có đặc điểm gì?',
    options: [
      'Scope được xác định tại runtime',
      'Scope được xác định bởi vị trí khai báo trong code',
      'Scope thay đổi theo context',
      'Scope chỉ áp dụng cho function',
    ],
    correctAnswer: 1,
    explanation:
      'Lexical scope có nghĩa là scope được xác định bởi vị trí mà biến/function được khai báo trong code, không phải runtime.',
  },
  {
    id: 'closure-scope-1',
    category: 'theory',
    level: 'intermediate',
    question: 'Closure có thể truy cập biến từ scope nào?',
    options: [
      'Chỉ scope hiện tại',
      'Chỉ global scope',
      'Scope hiện tại và tất cả scope cha',
      'Chỉ scope của function gần nhất',
    ],
    correctAnswer: 2,
    explanation:
      'Closure có thể truy cập biến từ scope hiện tại và tất cả scope cha (scope chain).',
  },
  {
    id: 'scope-chain-1',
    category: 'theory',
    level: 'intermediate',
    question: 'Scope chain hoạt động theo thứ tự nào khi tìm kiếm biến?',
    options: [
      'Global → Function → Local',
      'Local → Function → Global',
      'Random order',
      'Alphabetical order',
    ],
    correctAnswer: 1,
    explanation:
      'JavaScript tìm kiếm biến từ scope hiện tại (local) lên scope cha (function) rồi đến global scope.',
  },

  // Practice Questions with Code
  {
    id: 'practice-hoisting-1',
    category: 'practice',
    level: 'beginner',
    question: 'Output của đoạn code này là gì?',
    code: `console.log(x);
var x = 5;
console.log(x);`,
    options: ['ReferenceError, 5', 'undefined, 5', '5, 5', 'undefined, undefined'],
    correctAnswer: 1,
    explanation: 'var được hoisted và khởi tạo với undefined, sau đó được gán giá trị 5.',
  },
  {
    id: 'practice-hoisting-2',
    category: 'practice',
    level: 'beginner',
    question: 'Output của đoạn code này là gì?',
    code: `console.log(sayHello());

function sayHello() {
  return "Hello!";
}`,
    options: ['ReferenceError', 'TypeError', 'undefined', 'Hello!'],
    correctAnswer: 3,
    explanation: 'Function declarations được hoisted hoàn toàn, có thể gọi trước khi khai báo.',
  },
  {
    id: 'practice-tdz-1',
    category: 'practice',
    level: 'intermediate',
    question: 'Output của đoạn code này là gì?',
    code: `console.log(a);
let a = 10;`,
    options: ['undefined', '10', "ReferenceError: Cannot access 'a' before initialization", 'null'],
    correctAnswer: 2,
    explanation: 'let có TDZ, không thể truy cập trước khi khai báo.',
  },
  {
    id: 'practice-scope-1',
    category: 'practice',
    level: 'intermediate',
    question: 'Output của đoạn code này là gì?',
    code: `var x = 1;
function test() {
  console.log(x);
  var x = 2;
  console.log(x);
}
test();`,
    options: ['1, 2', 'undefined, 2', 'ReferenceError', '1, 1'],
    correctAnswer: 1,
    explanation:
      'var x trong function bị hoisted, che khuất global x, nên console.log(x) đầu tiên in undefined.',
  },
  {
    id: 'practice-block-scope-1',
    category: 'practice',
    level: 'intermediate',
    question: 'Đoạn code nào sẽ gây lỗi?',
    code: `if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a); // Line 1
console.log(b); // Line 2
console.log(c); // Line 3`,
    options: ['Line 1', 'Line 2 và Line 3', 'Tất cả các line', 'Không có line nào lỗi'],
    correctAnswer: 1,
    explanation:
      'var có function scope nên truy cập được ngoài block, nhưng let/const có block scope nên gây ReferenceError.',
  },
  {
    id: 'practice-closure-1',
    category: 'practice',
    level: 'advanced',
    question: 'Output của đoạn code này là gì?',
    code: `function outer() {
  var x = 10;
  return function inner() {
    console.log(x);
    x++;
  };
}
var func = outer();
func();
func();`,
    options: ['10, 10', '10, 11', 'undefined, undefined', 'ReferenceError'],
    correctAnswer: 1,
    explanation: 'Closure giữ lại scope của outer function, x được increment từ 10 lên 11.',
  },

  // Interview Questions
  {
    id: 'interview-loop-closure',
    category: 'interview',
    level: 'advanced',
    question: 'Tại sao đoạn code này in ra 3, 3, 3 thay vì 0, 1, 2?',
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}`,
    options: [
      'var không hỗ trợ loops',
      'setTimeout có bug',
      'var có function scope, closure chia sẻ cùng biến i',
      'JavaScript không hỗ trợ closure',
    ],
    correctAnswer: 2,
    explanation:
      'var có function scope, tất cả callback functions cùng tham chiếu đến biến i duy nhất. Khi timeout chạy, i đã = 3.',
  },
  {
    id: 'interview-scope-chain',
    category: 'interview',
    level: 'advanced',
    question: 'Cách nào để fix đoạn code trên để in ra 0, 1, 2?',
    options: [
      'Dùng let thay vì var',
      'Tạo IIFE để capture giá trị i',
      'Dùng bind để tạo scope riêng',
      'Tất cả đáp án trên',
    ],
    correctAnswer: 3,
    explanation:
      'Cả 3 cách đều có thể fix: let tạo block scope mới mỗi iteration, IIFE tạo scope riêng, bind tạo context riêng.',
  },
  {
    id: 'interview-hoisting-advanced',
    category: 'interview',
    level: 'advanced',
    question: 'Output của đoạn code phức tạp này là gì?',
    code: `var a = 1;
function test() {
  console.log(a);
  console.log(b);
  var a = 2;
  function b() {
    return "function b";
  }
  console.log(a);
  console.log(b);
}
test();`,
    options: [
      '1, undefined, 2, function b',
      'undefined, function b, 2, function b',
      '1, ReferenceError',
      'undefined, undefined, 2, function b',
    ],
    correctAnswer: 1,
    explanation:
      'var a và function b đều bị hoisted. a được hoisted với undefined, b được hoisted với toàn bộ function.',
  },
  {
    id: 'interview-tdz-advanced',
    category: 'interview',
    level: 'advanced',
    question: 'Đoạn code nào KHÔNG gây TDZ error?',
    options: [
      'console.log(x); let x = 5;',
      'function test() { console.log(y); let y = 10; }',
      'let z = z + 1;',
      'function test() { return x; } let x = 5; test();',
    ],
    correctAnswer: 3,
    explanation:
      'Đáp án D không gây TDZ error vì function chỉ được gọi sau khi x đã được khai báo.',
  },
  {
    id: 'interview-performance',
    category: 'interview',
    level: 'advanced',
    question: 'Vấn đề gì có thể xảy ra với closure trong đoạn code này?',
    code: `function createHandler(element) {
  element.onclick = function() {
    // xử lý click
  };
  return {
    destroy: function() {
      element.onclick = null;
    }
  };
}`,
    options: [
      'Không có vấn đề gì',
      'Memory leak do closure giữ tham chiếu đến element',
      'Performance kém do scope chain dài',
      'TDZ error',
    ],
    correctAnswer: 1,
    explanation:
      'Closure giữ tham chiếu đến element, có thể gây memory leak nếu không cleanup đúng cách.',
  },
];

// Helper functions để filter questions
export const getQuestionsByType = (category: Question['category']) => {
  return SCOPE_HOISTING_QUESTIONS.filter(q => q.category === category);
};

export const getQuestionsByLevel = (level: Question['level']) => {
  return SCOPE_HOISTING_QUESTIONS.filter(q => q.level === level);
};

export const getQuestionsByTypeAndLevel = (
  category: Question['category'],
  level: Question['level']
) => {
  return SCOPE_HOISTING_QUESTIONS.filter(q => q.category === category && q.level === level);
};

export const getRandomQuestions = (count: number = 5) => {
  const shuffled = [...SCOPE_HOISTING_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getQuizQuestions = () => {
  // Lấy mix questions cho quiz
  const beginner = getQuestionsByLevel('beginner').slice(0, 2);
  const intermediate = getQuestionsByLevel('intermediate').slice(0, 2);
  const advanced = getQuestionsByLevel('advanced').slice(0, 1);

  return [...beginner, ...intermediate, ...advanced].sort(() => 0.5 - Math.random());
};

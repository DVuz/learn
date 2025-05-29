// Câu hỏi về Hàm nâng cao & Dữ liệu Quiz

export interface Question {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'code-output';
  category: 'closure' | 'higher-order' | 'composition' | 'recursion' | 'memoization' | 'scope';
  level: 'beginner' | 'intermediate' | 'advanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced'; // Thêm để tương thích ngược
  options?: string[];
  correctAnswer: string | number | boolean;
  explanation: string;
  code?: string;
  points?: number;
}

export const ADVANCED_FUNCTIONS_QUESTIONS: Question[] = [
  // Câu hỏi về Closure
  {
    id: 'closure-1',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'closure',
    level: 'beginner',
    difficulty: 'beginner',
    code: `function outer() {
  var x = 10;
  return function inner() {
    console.log(x);
  };
}

const fn = outer();
fn();`,
    options: ['undefined', '10', 'Error', 'null'],
    correctAnswer: 1,
    explanation: 'Hàm inner có thể truy cập biến x từ phạm vi bên ngoài nhờ vào closure.',
    points: 2,
  },
  {
    id: 'closure-2',
    question: 'Điều gì xảy ra khi bạn tạo nhiều closure?',
    type: 'multiple-choice',
    category: 'closure',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: [
      'Chúng chia sẻ cùng một biến bên ngoài',
      'Mỗi closure có bản sao riêng của biến bên ngoài',
      'Chỉ closure cuối cùng giữ lại biến bên ngoài',
      'Closure không thể truy cập biến bên ngoài',
    ],
    correctAnswer: 1,
    explanation: 'Mỗi closure duy trì bản sao độc lập riêng của các biến trong phạm vi bên ngoài.',
    points: 3,
  },
  {
    id: 'closure-3',
    question: 'Vòng lặp này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'closure',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}`,
    options: ['0, 1, 2', '3, 3, 3', '2, 2, 2', 'undefined, undefined, undefined'],
    correctAnswer: 1,
    explanation:
      'var có phạm vi hàm, nên tất cả callback setTimeout chia sẻ cùng biến i, sau vòng lặp i trở thành 3.',
    points: 4,
  },
  {
    id: 'closure-4',
    question: 'Làm thế nào để khắc phục vấn đề closure trong vòng lặp?',
    type: 'multiple-choice',
    category: 'closure',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: [
      'Sử dụng let thay vì var',
      'Sử dụng IIFE (Immediately Invoked Function Expression)',
      'Sử dụng phương thức bind',
      'Tất cả các phương án trên',
    ],
    correctAnswer: 3,
    explanation:
      'Tất cả các giải pháp đều tạo phạm vi mới cho mỗi lần lặp, giữ lại giá trị đúng của i.',
    points: 3,
  },
  {
    id: 'closure-5',
    question: 'Lợi ích chính của closure là gì?',
    type: 'multiple-choice',
    category: 'closure',
    level: 'beginner',
    difficulty: 'beginner',
    options: [
      'Thực thi nhanh hơn',
      'Đóng gói dữ liệu và tính riêng tư',
      'Giảm sử dụng bộ nhớ',
      'Cú pháp đơn giản hơn',
    ],
    correctAnswer: 1,
    explanation:
      'Closure cung cấp đóng gói dữ liệu bằng cách cho phép hàm bên trong truy cập biến bên ngoài mà vẫn giữ chúng riêng tư.',
    points: 2,
  },

  // Câu hỏi về Higher-Order Function
  {
    id: 'hof-1',
    question: 'Higher-order function là gì?',
    type: 'multiple-choice',
    category: 'higher-order',
    level: 'beginner',
    difficulty: 'beginner',
    options: [
      'Hàm trả về giá trị cao',
      'Hàm nhận hàm khác làm tham số hoặc trả về hàm',
      'Hàm có nhiều tham số',
      'Hàm chạy bất đồng bộ',
    ],
    correctAnswer: 1,
    explanation: 'Higher-order function là hàm nhận hàm khác làm tham số hoặc trả về hàm.',
    points: 2,
  },
  {
    id: 'hof-2',
    question: 'Phương thức mảng nào KHÔNG phải là higher-order function?',
    type: 'multiple-choice',
    category: 'higher-order',
    level: 'beginner',
    difficulty: 'beginner',
    options: ['map', 'filter', 'reduce', 'length'],
    correctAnswer: 3,
    explanation:
      'length là thuộc tính, không phải phương thức. map, filter, và reduce đều nhận callback function làm tham số.',
    points: 2,
  },
  {
    id: 'hof-3',
    question: 'Đoạn code này sẽ trả về gì?',
    type: 'code-output',
    category: 'higher-order',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(x => x % 2 === 0)
  .map(x => x * 2)
  .reduce((sum, x) => sum + x, 0);

console.log(result);`,
    options: ['12', '30', '15', '24'],
    correctAnswer: 0,
    explanation: 'Filter lấy [2, 4], map biến thành [4, 8], reduce tính tổng được 12.',
    points: 4,
  },
  {
    id: 'hof-4',
    question: 'Currying thực hiện điều gì?',
    type: 'multiple-choice',
    category: 'higher-order',
    level: 'advanced',
    difficulty: 'advanced',
    options: [
      'Làm hàm cay',
      'Chuyển đổi hàm nhiều tham số thành chuỗi hàm một tham số',
      'Cải thiện hiệu suất',
      'Giảm kích thước code',
    ],
    correctAnswer: 1,
    explanation: 'Currying biến đổi hàm có nhiều tham số thành chuỗi các hàm có một tham số.',
    points: 4,
  },

  // Câu hỏi về Function Composition
  {
    id: 'composition-1',
    question: 'Function composition là gì?',
    type: 'multiple-choice',
    category: 'composition',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: [
      'Viết hàm có nhiều dòng',
      'Kết hợp các hàm đơn giản để tạo ra phép toán phức tạp',
      'Tạo hàm bên trong hàm khác',
      'Sử dụng arrow function',
    ],
    correctAnswer: 1,
    explanation:
      'Function composition kết hợp các hàm đơn giản để xây dựng các phép toán phức tạp hơn.',
    points: 3,
  },
  {
    id: 'composition-2',
    question: 'Hàm tổng hợp này sẽ trả về gì?',
    type: 'code-output',
    category: 'composition',
    level: 'advanced',
    difficulty: 'advanced',
    code: `const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract1 = x => x - 1;

const compose = (f, g, h) => x => f(g(h(x)));
const result = compose(subtract1, multiply2, add5)(3);

console.log(result);`,
    options: ['15', '16', '17', '11'],
    correctAnswer: 0,
    explanation: 'Thực thi: add5(3) = 8, multiply2(8) = 16, subtract1(16) = 15.',
    points: 5,
  },
  {
    id: 'composition-3',
    question: 'Sự khác biệt giữa compose và pipe là gì?',
    type: 'multiple-choice',
    category: 'composition',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: [
      'Không có sự khác biệt',
      'Compose thực thi từ phải sang trái, pipe thực thi từ trái sang phải',
      'Pipe nhanh hơn compose',
      'Compose chỉ hoạt động với hai hàm',
    ],
    correctAnswer: 1,
    explanation:
      'Compose thực thi hàm từ phải sang trái, trong khi pipe thực thi từ trái sang phải để dễ đọc hơn.',
    points: 3,
  },

  // Câu hỏi về Recursion
  {
    id: 'recursion-1',
    question: 'Tail recursion là gì?',
    type: 'multiple-choice',
    category: 'recursion',
    level: 'advanced',
    difficulty: 'advanced',
    options: [
      'Đệ quy bắt đầu từ cuối',
      'Đệ quy mà lời gọi đệ quy là phép toán cuối cùng',
      'Đệ quy với call stack nhỏ',
      'Đệ quy trả về sớm',
    ],
    correctAnswer: 1,
    explanation: 'Tail recursion xảy ra khi lời gọi đệ quy là phép toán cuối cùng trong hàm.',
    points: 4,
  },
  {
    id: 'recursion-2',
    question: 'Hàm đệ quy này sẽ trả về gì?',
    type: 'code-output',
    category: 'recursion',
    level: 'intermediate',
    difficulty: 'intermediate',
    code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(4));`,
    options: ['24', '10', '4', '1'],
    correctAnswer: 0,
    explanation: 'factorial(4) = 4 * 3 * 2 * 1 = 24.',
    points: 3,
  },
  {
    id: 'recursion-3',
    question: 'Lợi thế chính của tail recursion là gì?',
    type: 'multiple-choice',
    category: 'recursion',
    level: 'advanced',
    difficulty: 'advanced',
    options: [
      'Dễ hiểu hơn',
      'Có thể được tối ưu hóa để tránh stack overflow',
      'Chạy nhanh hơn',
      'Sử dụng ít bộ nhớ ban đầu',
    ],
    correctAnswer: 1,
    explanation:
      'Tail recursion có thể được tối ưu hóa bởi compiler/interpreter để tái sử dụng stack frame, ngăn stack overflow.',
    points: 4,
  },

  // Câu hỏi về Memoization
  {
    id: 'memo-1',
    question: 'Memoization là gì?',
    type: 'multiple-choice',
    category: 'memoization',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: [
      'Kỹ thuật tối ưu hóa bộ nhớ',
      'Lưu trữ kết quả hàm để tránh tính toán lại',
      'Cách ghi nhớ code',
      'Kỹ thuật debug',
    ],
    correctAnswer: 1,
    explanation:
      'Memoization lưu trữ kết quả hàm để các lần gọi lặp lại với cùng tham số trả về giá trị đã lưu.',
    points: 3,
  },
  {
    id: 'memo-2',
    question: 'Khi nào nên sử dụng memoization?',
    type: 'multiple-choice',
    category: 'memoization',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: [
      'Cho tất cả hàm',
      'Cho hàm có side effects',
      'Cho hàm thuần khiết với tính toán tốn kém',
      'Cho phép toán số học đơn giản',
    ],
    correctAnswer: 2,
    explanation:
      'Memoization tốt nhất cho hàm thuần khiết (không có side effects) thực hiện tính toán tốn kém.',
    points: 3,
  },
  {
    id: 'memo-3',
    question: 'Nhược điểm tiềm ẩn của memoization là gì?',
    type: 'multiple-choice',
    category: 'memoization',
    level: 'advanced',
    difficulty: 'advanced',
    options: ['Thực thi chậm hơn', 'Tăng sử dụng bộ nhớ', 'Code phức tạp hơn', 'Cả B và C'],
    correctAnswer: 3,
    explanation:
      'Memoization sử dụng nhiều bộ nhớ hơn để lưu kết quả và có thể làm code phức tạp hơn.',
    points: 4,
  },

  // Câu hỏi về Scope
  {
    id: 'scope-1',
    question: 'Lexical scoping là gì?',
    type: 'multiple-choice',
    category: 'scope',
    level: 'intermediate',
    difficulty: 'intermediate',
    options: [
      'Phạm vi được xác định tại runtime',
      'Phạm vi được xác định bởi nơi biến được khai báo trong code',
      'Chỉ có global scope',
      'Chỉ có function scope',
    ],
    correctAnswer: 1,
    explanation:
      'Lexical scoping có nghĩa là phạm vi được xác định bởi nơi biến được khai báo trong source code.',
    points: 3,
  },
  {
    id: 'scope-2',
    question: 'Đoạn code này sẽ xuất ra gì?',
    type: 'code-output',
    category: 'scope',
    level: 'advanced',
    difficulty: 'advanced',
    code: `var x = 1;
function outer() {
  var x = 2;
  function inner() {
    console.log(x);
  }
  return inner;
}

const fn = outer();
fn();`,
    options: ['1', '2', 'undefined', 'Error'],
    correctAnswer: 1,
    explanation: 'Hàm inner truy cập x từ lexical scope của nó (hàm outer), có giá trị là 2.',
    points: 4,
  },
  {
    id: 'scope-3',
    question: 'Đúng hay Sai: Closure có thể truy cập biến từ bất kỳ phạm vi bên ngoài nào.',
    type: 'true-false',
    category: 'scope',
    level: 'beginner',
    difficulty: 'beginner',
    correctAnswer: true,
    explanation:
      'Đúng. Closure có thể truy cập biến từ tất cả phạm vi bên ngoài trong chuỗi phạm vi.',
    points: 2,
  },

  // Khái niệm nâng cao
  {
    id: 'advanced-1',
    question: 'Thunk trong JavaScript là gì?',
    type: 'multiple-choice',
    category: 'composition',
    level: 'advanced',
    difficulty: 'advanced',
    options: [
      'Một loại closure',
      'Hàm bao bọc biểu thức để trì hoãn việc đánh giá',
      'Hàm đệ quy',
      'Hàm được memoized',
    ],
    correctAnswer: 1,
    explanation: 'Thunk là hàm bao bọc biểu thức để trì hoãn việc đánh giá cho đến khi cần thiết.',
    points: 5,
  },
  {
    id: 'advanced-2',
    question: 'Đoạn code này thể hiện pattern nào?',
    type: 'multiple-choice',
    category: 'higher-order',
    level: 'advanced',
    difficulty: 'advanced',
    code: `const withLogging = (fn) => (...args) => {
  console.log('Đang gọi ' + fn.name + ' với args:', args);
  const result = fn(...args);
  console.log('Kết quả:', result);
  return result;
};`,
    options: ['Factory pattern', 'Decorator pattern', 'Observer pattern', 'Singleton pattern'],
    correctAnswer: 1,
    explanation: 'Đây là decorator pattern - nó bao bọc hàm để thêm hành vi bổ sung (logging).',
    points: 5,
  },
];

// Type definitions for utility functions
export type QuestionCategory = Question['category'];
export type QuestionLevel = Question['level'];

// Hàm trợ giúp để lọc câu hỏi
export const getQuestionsByCategory = (category: QuestionCategory): Question[] => {
  return ADVANCED_FUNCTIONS_QUESTIONS.filter(q => q.category === category);
};

export const getQuestionsByLevel = (level: QuestionLevel): Question[] => {
  return ADVANCED_FUNCTIONS_QUESTIONS.filter(q => q.level === level);
};

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...ADVANCED_FUNCTIONS_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const searchQuestions = (searchTerm: string): Question[] => {
  const term = searchTerm.toLowerCase();
  return ADVANCED_FUNCTIONS_QUESTIONS.filter(
    q =>
      q.question.toLowerCase().includes(term) ||
      q.explanation.toLowerCase().includes(term) ||
      q.category.includes(term)
  );
};

// Interface for quiz score calculation result
export interface QuizScoreResult {
  correct: number;
  total: number;
  percentage: number;
  points: number;
  maxPoints: number;
}

// Thống kê và tính điểm
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
      'Xuất sắc! Bạn đã hiểu rõ về hàm nâng cao.',
      'Hãy khám phá các thư viện lập trình hàm như Ramda hoặc Lodash/FP.',
      'Thử triển khai các tiện ích lập trình hàm của riêng bạn.',
    ];
  } else if (score >= 70) {
    return [
      'Tốt lắm! Bạn hiểu hầu hết các khái niệm nhưng có thể cải thiện một số lĩnh vực.',
      'Ôn lại các pattern closure và higher-order function.',
      'Luyện tập function composition và currying.',
    ];
  } else if (score >= 50) {
    return [
      'Bạn có hiểu biết cơ bản nhưng cần luyện tập thêm.',
      'Tập trung vào các nguyên tắc cơ bản của closure và lexical scoping.',
      'Nghiên cứu các ví dụ thực tế về higher-order function.',
    ];
  } else {
    return [
      'Hãy tiếp tục học! Hàm nâng cao cần sự luyện tập.',
      'Bắt đầu với các ví dụ closure cơ bản.',
      'Ôn lại các khái niệm về scope và context trong JavaScript.',
      'Luyện tập với các higher-order function đơn giản như map và filter.',
    ];
  }
};

// Constants with proper typing
export const QUESTION_CATEGORIES = [
  'closure',
  'higher-order',
  'composition',
  'recursion',
  'memoization',
  'scope',
] as const;

export const QUESTION_LEVELS = ['beginner', 'intermediate', 'advanced'] as const;

// Additional utility functions
export const getQuestionById = (id: string): Question | undefined => {
  return ADVANCED_FUNCTIONS_QUESTIONS.find(q => q.id === id);
};

export const getTotalQuestions = (): number => {
  return ADVANCED_FUNCTIONS_QUESTIONS.length;
};

export const getQuestionsByDifficulty = (difficulty: Question['difficulty']): Question[] => {
  return ADVANCED_FUNCTIONS_QUESTIONS.filter(q => q.difficulty === difficulty);
};

export const getMaxPointsForQuestions = (questions: Question[]): number => {
  return questions.reduce((total, question) => total + (question.points || 1), 0);
};

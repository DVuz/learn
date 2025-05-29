// Advanced Functions & Closures - Data và Theory
export interface CodeExample {
  id: string;
  title: string;
  description: string;
  type:
    | 'closure-basic'
    | 'closure-advanced'
    | 'higher-order'
    | 'currying'
    | 'memoization'
    | 'factory'
    | 'module-pattern'
    | 'function-composition'
    | 'partial-application'
    | 'recursion'
    | 'callback'
    | 'decorator';
  code: string;
  output?: string;
  explanation?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  keyPoints?: string[];
}

export interface ComparisonItem {
  feature: string;
  closure: string;
  regular: string;
  impact: string;
}

export interface CommonMistake {
  title: string;
  description: string;
  wrongExample: string;
  correctExample: string;
}

export interface BestPractice {
  title: string;
  description: string;
  example: string;
}

export interface AdvancedConcept {
  name: string;
  description: string;
  example?: string;
  output?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  keyPoints?: string[];
}

export const LEARNING_OBJECTIVES = [
  'Hiểu sâu về Closures và lexical scoping',
  'Nắm vững Higher-Order Functions và callbacks',
  'Áp dụng Function Composition và Currying',
  'Sử dụng Memoization để tối ưu performance',
  'Hiểu Factory Functions và Module Pattern',
  'Làm việc với Recursion và Tail Call Optimization',
  'Áp dụng Functional Programming Patterns',
  'Xây dựng Custom Decorators và Middleware',
];

export const ADVANCED_CONCEPTS: AdvancedConcept[] = [
  {
    name: 'Closure (Bao đóng)',
    description:
      'Hàm có thể "nhớ" và truy cập biến từ lexical scope bên ngoài ngay cả khi scope đó đã kết thúc thực thi.',
    example: `function outer(x) {
  return function inner(y) {
    return x + y; // "nhớ" x từ outer scope
  };
}`,
    difficulty: 'Intermediate',
    keyPoints: [
      'Closures "nhớ" outer scope variables',
      'Useful cho data encapsulation',
      'Có thể gây memory leaks nếu không cẩn thận',
    ],
  },
  {
    name: 'Lexical Scoping',
    description: 'Scope được xác định bởi vị trí khai báo trong code, không phải runtime context.',
    example: `const global = 'global';
function outer() {
  const local = 'local';
  return () => console.log(global, local);
}`,
    difficulty: 'Beginner',
    keyPoints: [
      'Scope xác định tại compile time',
      'Inner functions truy cập outer scope',
      'Cơ sở cho closures',
    ],
  },
  {
    name: 'Higher-Order Function',
    description: 'Hàm nhận hàm khác làm argument hoặc trả về hàm, cho phép abstraction cao hơn.',
    example: `const withLogging = (fn) => (...args) => {
  console.log('Calling:', fn.name);
  return fn(...args);
};`,
    difficulty: 'Intermediate',
    keyPoints: [
      'Functions as first-class citizens',
      'Enables functional programming patterns',
      'Used in map, filter, reduce',
    ],
  },
  {
    name: 'Currying',
    description: 'Technique chuyển đổi hàm nhiều parameters thành chuỗi hàm một parameter.',
    example: `const add = a => b => c => a + b + c;
const addFive = add(5);
const addFiveTen = addFive(10);`,
    difficulty: 'Advanced',
    keyPoints: [
      'Partial application of functions',
      'Creates reusable specialized functions',
      'Functional programming technique',
    ],
  },
  {
    name: 'Memoization',
    description: 'Caching kết quả của expensive function calls để tối ưu performance.',
    example: `const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    return cache[key] || (cache[key] = fn(...args));
  };
};`,
    difficulty: 'Advanced',
    keyPoints: ['Trade memory for speed', 'Ideal for pure functions', 'Avoid with side effects'],
  },
  {
    name: 'Function Composition',
    description: 'Kết hợp nhiều hàm nhỏ để tạo thành hàm phức tạp hơn.',
    example: `const compose = (f, g) => x => f(g(x));
const addOne = x => x + 1;
const double = x => x * 2;
const addOneThenDouble = compose(double, addOne);`,
    difficulty: 'Advanced',
    keyPoints: [
      'Build complex operations from simple ones',
      'Promotes code reusability',
      'Core of functional programming',
    ],
  },
];

export const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'closure-basic',
    title: 'Basic Closure Examples',
    description: 'Hiểu cơ bản về closure và lexical scoping',
    type: 'closure-basic',
    code: `// Closure cơ bản
function createGreeting(name) {
  return function(greeting) {
    return \`\${greeting}, \${name}!\`;
  };
}

const greetJohn = createGreeting("John");
console.log(greetJohn("Hello")); // "Hello, John!"
console.log(greetJohn("Hi")); // "Hi, John!"

// Counter với closure
function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment: () => ++count,
    decrement: () => --count,
    get: () => count,
    reset: () => count = initialValue
  };
}

const counter = createCounter(10);
console.log(counter.get()); // 10
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
counter.reset();
console.log(counter.get()); // 10

// Private variables với closure
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return \`Deposited \${amount}. New balance: \${balance}\`;
      }
      return "Invalid amount";
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return \`Withdrew \${amount}. New balance: \${balance}\`;
      }
      return "Insufficient funds or invalid amount";
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500)); // "Deposited 500. New balance: 1500"
console.log(account.withdraw(200)); // "Withdrew 200. New balance: 1300"
console.log(account.getBalance()); // 1300`,
    output: `Hello, John!
Hi, John!
10
11
12
11
10
Deposited 500. New balance: 1500
Withdrew 200. New balance: 1300
1300`,
    explanation:
      'Closure cho phép functions "nhớ" variables từ outer scope ngay cả khi outer function đã return',
  },

  {
    id: 'closure-loops',
    title: 'Closures in Loops',
    description: 'Common pitfall và solution khi sử dụng closures trong loops',
    type: 'closure-advanced',
    code: `// Vấn đề phổ biến với closure trong loops
console.log("=== Problem with var in loops ===");
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var loop:", i); // In ra 3, 3, 3
  }, 100);
}

// Solution 1: Sử dụng let (block scoping)
console.log("=== Solution 1: let ===");
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("let loop:", i); // In ra 0, 1, 2
  }, 200);
}

// Solution 2: IIFE (Immediately Invoked Function Expression)
console.log("=== Solution 2: IIFE ===");
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(() => {
      console.log("IIFE loop:", index); // In ra 0, 1, 2
    }, 300);
  })(i);
}

// Solution 3: bind method
console.log("=== Solution 3: bind ===");
for (var i = 0; i < 3; i++) {
  setTimeout(function(index) {
    console.log("bind loop:", index); // In ra 0, 1, 2
  }.bind(null, i), 400);
}

// Practical example: Event listeners
function setupButtons() {
  const buttons = [];

  for (let i = 0; i < 3; i++) {
    buttons[i] = {
      click: function() {
        console.log(\`Button \${i} clicked\`);
      }
    };
  }

  return buttons;
}

const buttons = setupButtons();
buttons[0].click(); // "Button 0 clicked"
buttons[1].click(); // "Button 1 clicked"
buttons[2].click(); // "Button 2 clicked"`,
    output: `=== Problem with var in loops ===
=== Solution 1: let ===
=== Solution 2: IIFE ===
=== Solution 3: bind ===
var loop: 3
var loop: 3
var loop: 3
let loop: 0
let loop: 1
let loop: 2
IIFE loop: 0
IIFE loop: 1
IIFE loop: 2
bind loop: 0
bind loop: 1
bind loop: 2
Button 0 clicked
Button 1 clicked
Button 2 clicked`,
    explanation:
      'var có function scope nên loop variable được shared, let có block scope tạo mới mỗi iteration',
  },

  {
    id: 'higher-order-functions',
    title: 'Higher-Order Functions',
    description: 'Functions nhận hoặc trả về functions khác',
    type: 'higher-order',
    code: `// Function nhận function làm parameter
function withTiming(fn, name) {
  return function(...args) {
    console.time(name);
    const result = fn(...args);
    console.timeEnd(name);
    return result;
  };
}

function expensiveCalculation(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.sqrt(i);
  }
  return sum;
}

const timedCalculation = withTiming(expensiveCalculation, "calculation");
const result = timedCalculation(1000000);

// Function trả về function
function createValidator(rule) {
  return function(value) {
    return rule(value);
  };
}

const isPositive = createValidator(x => x > 0);
const isEmail = createValidator(email => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email));
const isLongEnough = createValidator(str => str.length >= 8);

console.log(isPositive(5)); // true
console.log(isPositive(-1)); // false
console.log(isEmail("test@example.com")); // true
console.log(isEmail("invalid-email")); // false
console.log(isLongEnough("password123")); // true

// Array methods như higher-order functions
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = numbers.map(x => x * 2);
console.log("Doubled:", doubled);

const evens = numbers.filter(x => x % 2 === 0);
console.log("Evens:", evens);

const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log("Sum:", sum);

// Chaining higher-order functions
const result2 = numbers
  .filter(x => x % 2 === 0)  // Get even numbers
  .map(x => x * x)           // Square them
  .reduce((acc, x) => acc + x, 0); // Sum them up

console.log("Even squares sum:", result2);

// Custom higher-order function
function createPipeline(...functions) {
  return function(value) {
    return functions.reduce((acc, fn) => fn(acc), value);
  };
}

const processNumber = createPipeline(
  x => x * 2,        // Double
  x => x + 1,        // Add 1
  x => Math.pow(x, 2) // Square
);

console.log(processNumber(3)); // ((3 * 2) + 1)^2 = 7^2 = 49`,
    output: `calculation: [timing]
true
false
true
false
true
Doubled: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
Evens: [2, 4, 6, 8, 10]
Sum: 55
Even squares sum: 220
49`,
    explanation:
      'Higher-order functions cho phép code abstraction cao hơn và functional programming patterns',
  },

  {
    id: 'currying',
    title: 'Currying & Partial Application',
    description: 'Chuyển đổi functions để có thể partial application',
    type: 'currying',
    code: `// Currying manual
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

const add5 = add(5);
const add5And10 = add5(10);
const result = add5And10(15); // 5 + 10 + 15 = 30
console.log("Curried add result:", result);

// Generic curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Example với curry
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24
console.log(curriedMultiply(2, 3, 4)); // 24

// Practical examples
const curriedAdd = curry((a, b, c) => a + b + c);

const addTen = curriedAdd(10);
const addTenAndFive = addTen(5);

console.log(addTenAndFive(2)); // 17
console.log(addTenAndFive(8)); // 23

// Real-world example: API requests
const makeRequest = curry((method, url, data) => {
  return \`\${method} request to \${url} with data: \${JSON.stringify(data)}\`;
});

const get = makeRequest('GET');
const post = makeRequest('POST');

const getUserById = get('/api/users');
const createUser = post('/api/users');

console.log(getUserById({id: 123}));
console.log(createUser({name: 'John', email: 'john@example.com'}));

// Partial application
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function greet(greeting, name, punctuation) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

const sayHello = partial(greet, 'Hello');
const sayHelloJohn = partial(greet, 'Hello', 'John');

console.log(sayHello('Alice', '!')); // "Hello, Alice!"
console.log(sayHelloJohn('.')); // "Hello, John."

// Function composition với currying
const compose = curry((f, g, x) => f(g(x)));
const addOne = x => x + 1;
const double = x => x * 2;

const addOneThenDouble = compose(double)(addOne);
console.log(addOneThenDouble(5)); // (5 + 1) * 2 = 12`,
    output: `Curried add result: 30
24
24
24
24
17
23
GET request to /api/users with data: {"id":123}
POST request to /api/users with data: {"name":"John","email":"john@example.com"}
Hello, Alice!
Hello, John.
12`,
    explanation:
      'Currying cho phép tạo specialized functions từ general functions và partial application',
  },

  {
    id: 'memoization',
    title: 'Memoization Pattern',
    description: 'Caching function results để optimize performance',
    type: 'memoization',
    code: `// Basic memoization
function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log(\`Cache hit for \${key}\`);
      return cache[key];
    }

    console.log(\`Computing for \${key}\`);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Expensive fibonacci function
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci);

console.log("=== Without memoization ===");
console.time("fib(35)");
console.log(fibonacci(35));
console.timeEnd("fib(35)");

console.log("=== With memoization ===");
console.time("memoized fib(35)");
console.log(memoizedFib(35));
console.timeEnd("memoized fib(35)");

console.log("Second call (should be cached):");
console.log(memoizedFib(35));

// Advanced memoization với WeakMap
function memoizeWithWeakMap(fn) {
  const cache = new WeakMap();

  return function(obj, ...args) {
    if (!cache.has(obj)) {
      cache.set(obj, {});
    }

    const objCache = cache.get(obj);
    const key = JSON.stringify(args);

    if (key in objCache) {
      return objCache[key];
    }

    const result = fn.call(this, obj, ...args);
    objCache[key] = result;
    return result;
  };
}

// Memoization với TTL (Time To Live)
function memoizeWithTTL(fn, ttl = 5000) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);
    const now = Date.now();

    if (cache[key] && (now - cache[key].timestamp) < ttl) {
      console.log(\`Cache hit (TTL valid) for \${key}\`);
      return cache[key].value;
    }

    console.log(\`Computing (TTL expired or new) for \${key}\`);
    const result = fn(...args);
    cache[key] = {
      value: result,
      timestamp: now
    };
    return result;
  };
}

function expensiveAPICall(userId) {
  // Simulate API call
  return \`User data for \${userId}: \${Math.random().toFixed(4)}\`;
}

const cachedAPICall = memoizeWithTTL(expensiveAPICall, 3000);

console.log("=== TTL Memoization ===");
console.log(cachedAPICall(123));
console.log(cachedAPICall(123)); // Cache hit
setTimeout(() => {
  console.log(cachedAPICall(123)); // TTL expired, recalculate
}, 3500);

// Memoization decorator pattern
function memoized(ttl) {
  return function(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = memoizeWithTTL(originalMethod, ttl);
    return descriptor;
  };
}

// Class với memoized methods
class Calculator {
  @memoized(5000)
  factorial(n) {
    console.log(\`Calculating factorial of \${n}\`);
    if (n <= 1) return 1;
    return n * this.factorial(n - 1);
  }

  // Manual memoization trong class
  constructor() {
    this.primeCache = {};
  }

  isPrime(n) {
    if (n in this.primeCache) {
      console.log(\`Prime cache hit for \${n}\`);
      return this.primeCache[n];
    }

    console.log(\`Computing prime for \${n}\`);
    if (n < 2) return this.primeCache[n] = false;
    if (n === 2) return this.primeCache[n] = true;
    if (n % 2 === 0) return this.primeCache[n] = false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return this.primeCache[n] = false;
    }

    return this.primeCache[n] = true;
  }
}

const calc = new Calculator();
console.log("=== Class Memoization ===");
console.log(calc.isPrime(97)); // Compute
console.log(calc.isPrime(97)); // Cache hit
console.log(calc.isPrime(98)); // Compute`,
    output: `=== Without memoization ===
9227465
fib(35): [timing - slow]
=== With memoization ===
Computing for [35]
9227465
memoized fib(35): [timing - fast]
Second call (should be cached):
Cache hit for [35]
9227465
=== TTL Memoization ===
Computing (TTL expired or new) for [123]
User data for 123: 0.7234
Cache hit (TTL valid) for [123]
User data for 123: 0.7234
Computing (TTL expired or new) for [123]
User data for 123: 0.9876
=== Class Memoization ===
Computing prime for 97
true
Prime cache hit for 97
true
Computing prime for 98
false`,
    explanation:
      'Memoization dramatically improves performance cho expensive computations bằng caching results',
  },

  {
    id: 'factory-pattern',
    title: 'Factory Functions & Module Pattern',
    description: 'Tạo objects và modules sử dụng factory functions',
    type: 'factory',
    code: `// Basic Factory Function
function createUser(name, email, role = 'user') {
  return {
    name,
    email,
    role,
    isActive: true,

    login() {
      console.log(\`\${this.name} logged in\`);
    },

    logout() {
      console.log(\`\${this.name} logged out\`);
    },

    updateProfile(updates) {
      Object.assign(this, updates);
      console.log(\`Profile updated for \${this.name}\`);
    }
  };
}

const user1 = createUser('John Doe', 'john@example.com');
const admin = createUser('Admin User', 'admin@example.com', 'admin');

user1.login();
admin.login();

// Factory với private methods
function createBankAccount(accountHolder, initialBalance = 0) {
  let balance = initialBalance;
  let transactions = [];

  // Private method
  function addTransaction(type, amount, description) {
    transactions.push({
      type,
      amount,
      description,
      timestamp: new Date(),
      balance: balance
    });
  }

  return {
    accountHolder,

    deposit(amount, description = 'Deposit') {
      if (amount <= 0) throw new Error('Amount must be positive');
      balance += amount;
      addTransaction('credit', amount, description);
      return \`Deposited \${amount}. New balance: \${balance}\`;
    },

    withdraw(amount, description = 'Withdrawal') {
      if (amount <= 0) throw new Error('Amount must be positive');
      if (amount > balance) throw new Error('Insufficient funds');
      balance -= amount;
      addTransaction('debit', amount, description);
      return \`Withdrawn \${amount}. New balance: \${balance}\`;
    },

    getBalance() {
      return balance;
    },

    getTransactionHistory() {
      return [...transactions]; // Return copy to prevent mutation
    },

    transfer(toAccount, amount, description = 'Transfer') {
      const withdrawn = this.withdraw(amount, \`Transfer to \${toAccount.accountHolder}\`);
      toAccount.deposit(amount, \`Transfer from \${this.accountHolder}\`);
      return \`Transferred \${amount} to \${toAccount.accountHolder}\`;
    }
  };
}

const account1 = createBankAccount('Alice', 1000);
const account2 = createBankAccount('Bob', 500);

console.log(account1.deposit(200));
console.log(account1.withdraw(150));
console.log(account1.transfer(account2, 100));
console.log('Alice balance:', account1.getBalance());
console.log('Bob balance:', account2.getBalance());

// Module Pattern với IIFE
const Calculator = (function() {
  // Private variables
  let memory = 0;
  let history = [];

  // Private methods
  function addToHistory(operation, result) {
    history.push(\`\${operation} = \${result}\`);
    if (history.length > 10) {
      history.shift(); // Keep only last 10 operations
    }
  }

  function validateNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Invalid number');
    }
  }

  // Public API
  return {
    add(a, b) {
      validateNumber(a);
      validateNumber(b);
      const result = a + b;
      addToHistory(\`\${a} + \${b}\`, result);
      return result;
    },

    subtract(a, b) {
      validateNumber(a);
      validateNumber(b);
      const result = a - b;
      addToHistory(\`\${a} - \${b}\`, result);
      return result;
    },

    multiply(a, b) {
      validateNumber(a);
      validateNumber(b);
      const result = a * b;
      addToHistory(\`\${a} × \${b}\`, result);
      return result;
    },

    divide(a, b) {
      validateNumber(a);
      validateNumber(b);
      if (b === 0) throw new Error('Division by zero');
      const result = a / b;
      addToHistory(\`\${a} ÷ \${b}\`, result);
      return result;
    },

    memoryStore(value) {
      validateNumber(value);
      memory = value;
      console.log(\`Stored \${value} in memory\`);
    },

    memoryRecall() {
      return memory;
    },

    memoryClear() {
      memory = 0;
      console.log('Memory cleared');
    },

    getHistory() {
      return [...history];
    },

    clearHistory() {
      history = [];
      console.log('History cleared');
    }
  };
})();

console.log('=== Calculator Module ===');
console.log(Calculator.add(10, 5));
console.log(Calculator.multiply(3, 4));
Calculator.memoryStore(100);
console.log('Memory:', Calculator.memoryRecall());
console.log('History:', Calculator.getHistory());

// Advanced Factory với inheritance
function createVehicle(type, make, model) {
  const vehicle = {
    type,
    make,
    model,
    speed: 0,

    start() {
      console.log(\`\${this.make} \${this.model} started\`);
    },

    stop() {
      this.speed = 0;
      console.log(\`\${this.make} \${this.model} stopped\`);
    },

    accelerate(amount) {
      this.speed += amount;
      console.log(\`\${this.make} \${this.model} accelerated to \${this.speed} mph\`);
    }
  };

  return vehicle;
}

function createCar(make, model, doors = 4) {
  const car = createVehicle('car', make, model);

  car.doors = doors;
  car.honk = function() {
    console.log(\`\${this.make} \${this.model} honks: Beep beep!\`);
  };

  return car;
}

function createMotorcycle(make, model, engineSize) {
  const motorcycle = createVehicle('motorcycle', make, model);

  motorcycle.engineSize = engineSize;
  motorcycle.wheelie = function() {
    console.log(\`\${this.make} \${this.model} does a wheelie!\`);
  };

  return motorcycle;
}

const car = createCar('Toyota', 'Camry');
const bike = createMotorcycle('Harley', 'Davidson', '1200cc');

car.start();
car.honk();
bike.start();
bike.wheelie();`,
    output: `John Doe logged in
Admin User logged in
Deposited 200. New balance: 1200
Withdrawn 150. New balance: 1050
Transferred 100 to Bob
Alice balance: 950
Bob balance: 600
=== Calculator Module ===
15
12
Stored 100 in memory
Memory: 100
History: ["10 + 5 = 15", "3 × 4 = 12"]
Toyota Camry started
Toyota Camry honks: Beep beep!
Harley Davidson started
Harley Davidson does a wheelie!`,
    explanation:
      'Factory functions provide flexible object creation với encapsulation và inheritance patterns',
  },

  {
    id: 'function-composition',
    title: 'Function Composition & Pipes',
    description: 'Kết hợp functions để tạo complex operations',
    type: 'function-composition',
    code: `// Basic Function Composition
const compose = (...functions) => (value) =>
  functions.reduceRight((acc, fn) => fn(acc), value);

const pipe = (...functions) => (value) =>
  functions.reduce((acc, fn) => fn(acc), value);

// Helper functions
const add = (x) => (y) => y + x;
const multiply = (x) => (y) => y * x;
const subtract = (x) => (y) => y - x;
const divide = (x) => (y) => y / x;

// String operations
const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const addExclamation = (str) => str + '!';

// Math operations
const square = (x) => x * x;
const double = (x) => x * 2;
const addOne = (x) => x + 1;

// Compose vs Pipe comparison
console.log('=== Compose vs Pipe ===');

// Compose: right to left
const mathCompose = compose(
  square,      // 4. Square: 9 → 81
  addOne,      // 3. Add 1: 8 → 9
  double,      // 2. Double: 4 → 8
  add(2)       // 1. Add 2: 2 → 4
);

// Pipe: left to right (more intuitive)
const mathPipe = pipe(
  add(2),      // 1. Add 2: 2 → 4
  double,      // 2. Double: 4 → 8
  addOne,      // 3. Add 1: 8 → 9
  square       // 4. Square: 9 → 81
);

console.log('Compose result:', mathCompose(2)); // 81
console.log('Pipe result:', mathPipe(2)); // 81

// String processing pipeline
const processName = pipe(
  trim,
  toLowerCase,
  capitalize,
  addExclamation
);

console.log('=== String Processing ===');
console.log(processName('  JOHN DOE  ')); // "John doe!"

// Complex data transformation
const users = [
  { name: 'Alice', age: 25, active: true, score: 85 },
  { name: 'Bob', age: 30, active: false, score: 92 },
  { name: 'Charlie', age: 35, active: true, score: 78 },
  { name: 'David', age: 28, active: true, score: 95 }
];

// Functional data processing
const filterActiveUsers = (users) => users.filter(user => user.active);
const sortByScore = (users) => [...users].sort((a, b) => b.score - a.score);
const getTopN = (n) => (users) => users.slice(0, n);
const mapToNames = (users) => users.map(user => user.name);
const joinWithComma = (names) => names.join(', ');

const getTopActiveUserNames = pipe(
  filterActiveUsers,
  sortByScore,
  getTopN(2),
  mapToNames,
  joinWithComma
);

console.log('=== Data Processing Pipeline ===');
console.log('Top active users:', getTopActiveUserNames(users));

// Async function composition
const asyncPipe = (...functions) => (value) =>
  functions.reduce(async (acc, fn) => fn(await acc), value);

const asyncCompose = (...functions) => (value) =>
  functions.reduceRight(async (acc, fn) => fn(await acc), value);

// Async operations
const fetchUser = async (id) => {
  console.log(\`Fetching user \${id}...\`);
  return { id, name: \`User\${id}\`, email: \`user\${id}@example.com\` };
};

const addTimestamp = async (user) => {
  console.log('Adding timestamp...');
  return { ...user, timestamp: new Date().toISOString() };
};

const validateUser = async (user) => {
  console.log('Validating user...');
  return { ...user, isValid: !!user.email };
};

const formatUser = async (user) => {
  console.log('Formatting user...');
  return \`Name: \${user.name}, Email: \${user.email}, Valid: \${user.isValid}\`;
};

const processUserAsync = asyncPipe(
  fetchUser,
  addTimestamp,
  validateUser,
  formatUser
);

// Point-free style programming
const isEven = (x) => x % 2 === 0;
const isPositive = (x) => x > 0;
const isLessThan = (max) => (x) => x < max;

const isValidScore = pipe(
  isPositive,
  (positive) => positive && isLessThan(101)
);

// Advanced composition with error handling
const safeCompose = (...functions) => (value) => {
  try {
    return functions.reduceRight((acc, fn) => {
      if (acc instanceof Error) return acc;
      try {
        return fn(acc);
      } catch (error) {
        return new Error(\`Error in function: \${error.message}\`);
      }
    }, value);
  } catch (error) {
    return new Error(\`Composition error: \${error.message}\`);
  }
};

const riskyDivide = (x) => {
  if (x === 0) throw new Error('Division by zero');
  return 10 / x;
};

const safeCalculation = safeCompose(
  square,
  riskyDivide,
  addOne
);

console.log('=== Error Handling ===');
console.log('Safe calc with 2:', safeCalculation(2)); // Success
console.log('Safe calc with -1:', safeCalculation(-1)); // Error

// Run async example
console.log('=== Async Processing ===');
processUserAsync(123).then(result => {
  console.log('Final result:', result);
});`,
    output: `=== Compose vs Pipe ===
Compose result: 81
Pipe result: 81
=== String Processing ===
John doe!
=== Data Processing Pipeline ===
Top active users: David, Alice
=== Error Handling ===
Safe calc with 2: 25
Safe calc with -1: Error in function: Division by zero
=== Async Processing ===
Fetching user 123...
Adding timestamp...
Validating user...
Formatting user...
Final result: Name: User123, Email: user123@example.com, Valid: true`,
    explanation:
      'Function composition enables building complex operations từ simple functions, promoting reusability',
  },

  {
    id: 'recursion-advanced',
    title: 'Advanced Recursion Patterns',
    description: 'Tail recursion, mutual recursion và optimization techniques',
    type: 'recursion',
    code: `// Basic recursion vs tail recursion
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // Not tail recursive
}

function factorialTail(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  return factorialTail(n - 1, n * accumulator); // Tail recursive
}

console.log('=== Factorial Comparison ===');
console.log('Regular factorial(5):', factorial(5));
console.log('Tail factorial(5):', factorialTail(5));

// Trampoline technique for large recursions
function trampoline(fn) {
  return function(...args) {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };
}

function sumToNTrampoline(n, acc = 0) {
  if (n === 0) return acc;
  return () => sumToNTrampoline(n - 1, acc + n); // Return function instead of calling
}

const safeSumToN = trampoline(sumToNTrampoline);
console.log('=== Trampoline ===');
console.log('Sum to 100000:', safeSumToN(100000));

// Mutual recursion
function isEven(n) {
  if (n === 0) return true;
  return isOdd(n - 1);
}

function isOdd(n) {
  if (n === 0) return false;
  return isEven(n - 1);
}

console.log('=== Mutual Recursion ===');
console.log('Is 4 even?', isEven(4)); // true
console.log('Is 7 even?', isEven(7)); // false

// Tree traversal recursion
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] }
      ]
    },
    {
      value: 3,
      children: [
        { value: 6, children: [] },
        { value: 7, children: [] }
      ]
    }
  ]
};

function traverseTree(node, callback, depth = 0) {
  callback(node.value, depth);
  node.children.forEach(child => {
    traverseTree(child, callback, depth + 1);
  });
}

console.log('=== Tree Traversal ===');
traverseTree(tree, (value, depth) => {
  console.log(\`\${'  '.repeat(depth)}Node: \${value}\`);
});

// Memoized recursion
function memoizedRecursion(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const fibonacciMemo = memoizedRecursion(function(n) {
  if (n < 2) return n;
  return fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
});

console.log('=== Memoized Fibonacci ===');
console.time('Memoized fib(40)');
console.log('Fibonacci(40):', fibonacciMemo(40));
console.timeEnd('Memoized fib(40)');

// Recursive data structure operations
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }

  if (typeof obj === 'object') {
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
}

const original = {
  name: 'John',
  hobbies: ['reading', 'coding'],
  address: {
    street: '123 Main St',
    city: 'Boston'
  },
  birthDate: new Date('1990-01-01')
};

const cloned = deepClone(original);
cloned.address.city = 'New York';

console.log('=== Deep Clone ===');
console.log('Original city:', original.address.city); // Boston
console.log('Cloned city:', cloned.address.city); // New York

// Recursive flatten array
function flattenArray(arr, depth = Infinity) {
  if (depth === 0) return arr.slice();

  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flattenArray(val, depth - 1));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}

const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];
console.log('=== Array Flattening ===');
console.log('Nested:', nestedArray);
console.log('Flat (depth 1):', flattenArray(nestedArray, 1));
console.log('Flat (all):', flattenArray(nestedArray));

// Recursive permutations
function getPermutations(arr) {
  if (arr.length <= 1) return [arr];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const permutations = getPermutations(remaining);

    for (let perm of permutations) {
      result.push([current, ...perm]);
    }
  }

  return result;
}

console.log('=== Permutations ===');
console.log('Permutations of [1,2,3]:');
getPermutations([1, 2, 3]).forEach((perm, index) => {
  console.log(\`\${index + 1}: [\${perm.join(', ')}]\`);
});`,
    output: `=== Factorial Comparison ===
Regular factorial(5): 120
Tail factorial(5): 120
=== Trampoline ===
Sum to 100000: 5000050000
=== Mutual Recursion ===
Is 4 even? true
Is 7 even? false
=== Tree Traversal ===
Node: 1
  Node: 2
    Node: 4
    Node: 5
  Node: 3
    Node: 6
    Node: 7
=== Memoized Fibonacci ===
Fibonacci(40): 102334155
Memoized fib(40): [timing - fast]
=== Deep Clone ===
Original city: Boston
Cloned city: New York
=== Array Flattening ===
Nested: [1, [2, [3, [4, 5]], 6], 7, [8, 9]]
Flat (depth 1): [1, 2, [3, [4, 5]], 6, 7, 8, 9]
Flat (all): [1, 2, 3, 4, 5, 6, 7, 8, 9]
=== Permutations ===
Permutations of [1,2,3]:
1: [1, 2, 3]
2: [1, 3, 2]
3: [2, 1, 3]
4: [2, 3, 1]
5: [3, 1, 2]
6: [3, 2, 1]`,
    explanation:
      'Advanced recursion techniques include tail call optimization, trampolining, và memoization for performance',
  },
];

export const CLOSURE_COMPARISON: ComparisonItem[] = [
  {
    feature: 'Memory Usage',
    closure: 'Keeps outer variables in memory',
    regular: 'Variables garbage collected after execution',
    impact: 'Higher memory usage but enables data persistence',
  },
  {
    feature: 'Data Privacy',
    closure: 'Encapsulates variables from global scope',
    regular: 'Variables accessible from outer scopes',
    impact: 'Better encapsulation and data protection',
  },
  {
    feature: 'State Management',
    closure: 'Maintains state between function calls',
    regular: 'Stateless, resets on each call',
    impact: 'Enables stateful operations and counters',
  },
  {
    feature: 'Performance',
    closure: 'Slight overhead from scope chain',
    regular: 'Faster execution, no scope chain lookup',
    impact: 'Trade-off between functionality and speed',
  },
  {
    feature: 'Use Cases',
    closure: 'Module patterns, event handlers, callbacks',
    regular: 'Pure functions, utilities, calculations',
    impact: 'Closures for complex patterns, regular for simple ops',
  },
];

// Concept comparison for advanced functions
export const CONCEPT_COMPARISON = [
  {
    concept: 'Closures',
    purpose: 'Data encapsulation and state persistence',
    useCase: 'Private variables, module patterns',
    performance: 'Medium',
  },
  {
    concept: 'Higher-Order Functions',
    purpose: 'Function composition and abstraction',
    useCase: 'Callbacks, event handling, functional programming',
    performance: 'High',
  },
  {
    concept: 'Currying',
    purpose: 'Partial application and reusability',
    useCase: 'Configuration functions, specialized utilities',
    performance: 'Medium',
  },
  {
    concept: 'Memoization',
    purpose: 'Performance optimization through caching',
    useCase: 'Expensive calculations, recursive functions',
    performance: 'High',
  },
  {
    concept: 'Function Composition',
    purpose: 'Building complex operations from simple ones',
    useCase: 'Data transformation pipelines',
    performance: 'High',
  },
  {
    concept: 'Recursion',
    purpose: 'Solving problems by breaking them down',
    useCase: 'Tree traversal, mathematical sequences',
    performance: 'Low',
  },
];

export const BEST_PRACTICES: BestPractice[] = [
  {
    title: 'Avoid Memory Leaks với Closures',
    description: 'Cleanup references khi không cần để tránh memory leaks',
    example: `// Có thể gây memory leak
function problematicClosure() {
  const largeData = new Array(1000000).fill('data');

  return function smallOperation() {
    return 'done';
  };
}

// Cách tốt hơn
function betterClosure() {
  const largeData = new Array(1000000).fill('data');

  return function smallOperation() {
    // largeData = null; // Cleanup if not needed
    return 'done';
  };
}`,
  },
  {
    title: 'Sử dụng Factory Functions cho Object Creation',
    description: 'Factory functions provide flexibility và encapsulation',
    example: `// Factory function
function createUser(name, email) {
  let isLoggedIn = false;

  return {
    name,
    email,
    login() { isLoggedIn = true; },
    logout() { isLoggedIn = false; },
    isActive() { return isLoggedIn; }
  };
}

const user = createUser('John', 'john@example.com');`,
  },
  {
    title: 'Prefer Function Composition',
    description: 'Tạo complex operations từ simple functions',
    example: `const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

const processData = pipe(
  data => data.trim(),
  data => data.toLowerCase(),
  data => data.split(' ')
);`,
  },
  {
    title: 'Use Memoization cho Expensive Operations',
    description: 'Cache results để improve performance',
    example: `const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    return cache[key] || (cache[key] = fn(...args));
  };
};

const expensiveFn = memoize((n) => {
  // expensive calculation
  return result;
});`,
  },
];

export const COMMON_MISTAKES: CommonMistake[] = [
  {
    title: 'Closure trong loops với var',
    description: 'Sử dụng var trong vòng lặp có thể gây ra kết quả không mong muốn do hoisting',
    wrongExample: `// Lỗi
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints 3, 3, 3
}`,
    correctExample: `// Đúng với let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints 0, 1, 2
}

// Hoặc sử dụng IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100); // Prints 0, 1, 2
  })(i);
}`,
  },
  {
    title: 'Memory leaks từ forgotten closures',
    description: 'Closures có thể giữ references đến DOM elements, gây memory leaks',
    wrongExample: `// Lỗi - memory leak
function createHandler() {
  const hugeDOMElement = document.querySelector('#huge-element');
  return function() {
    console.log('handled');
    // hugeDOMElement is still referenced
  };
}`,
    correctExample: `// Đúng - cleanup references
function createHandler() {
  let hugeDOMElement = document.querySelector('#huge-element');
  return function() {
    console.log('handled');
    hugeDOMElement = null; // Cleanup
  };
}`,
  },
  {
    title: 'Overusing closures khi không cần',
    description: 'Không nên dùng closures cho những operations đơn giản',
    wrongExample: `// Không cần thiết
function createAdder(x) {
  return function(y) {
    return x + y;
  };
}`,
    correctExample: `// Đơn giản hơn
const add = (x, y) => x + y;

// Hoặc sử dụng closure khi thực sự cần
const createSpecializedAdder = (base) => (value) => base + value;`,
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
  'closure-basic',
  'closure-advanced',
  'higher-order',
  'currying',
  'memoization',
  'factory',
  'module-pattern',
  'function-composition',
  'partial-application',
  'recursion',
  'callback',
  'decorator',
] as const;

// Legacy exports for compatibility
export const codeExamples = CODE_EXAMPLES;
export const advancedConcepts = ADVANCED_CONCEPTS;
export const closureComparison = CLOSURE_COMPARISON;
export const functionBestPractices = BEST_PRACTICES;
export const commonMistakes = COMMON_MISTAKES;
export const functionCategories = FUNCTION_CATEGORIES;
export const getExamplesByCategory = getExamplesByType;

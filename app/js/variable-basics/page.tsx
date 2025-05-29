'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ChevronDown,
  ChevronUp,
  Code,
  Play,
  Copy,
  BookOpen,
  Lightbulb,
  Target,
  HelpCircle,
  Settings,
} from 'lucide-react';
import JSLayout from '../components/JSLayout';
import { JS_TABLE_OF_CONTENTS, JS_NAVIGATIONS, getProgressForLesson } from '../constants/jsData';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  level: 'junior' | 'mid' | 'senior';
  category: 'basic' | 'syntax' | 'best-practices' | 'debugging' | 'performance';
}

const navigation = JS_NAVIGATIONS['variable-basics'] || {};
const progress = getProgressForLesson('variable-basics');

const variableFAQs: FAQ[] = [
  {
    id: 1,
    question: 'Biến là gì và tại sao cần sử dụng biến?',
    answer:
      'Biến là "container" có tên để lưu trữ dữ liệu. Chúng ta cần biến để: lưu trữ thông tin tạm thời, tái sử dụng giá trị, thực hiện tính toán, điều khiển luồng chương trình. Biến giúp code dễ đọc, bảo trì và linh hoạt hơn.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 2,
    question: 'Sự khác biệt giữa var, let và const?',
    answer:
      'var: function-scoped, có hoisting, có thể redeclare. let: block-scoped, có hoisting nhưng temporal dead zone, không thể redeclare. const: block-scoped, phải initialize khi declare, không thể reassign (nhưng object/array vẫn mutable).',
    level: 'junior',
    category: 'syntax',
  },
  {
    id: 3,
    question: 'Hoisting là gì và ảnh hưởng như thế nào đến biến?',
    answer:
      'Hoisting là cơ chế JavaScript "kéo" declarations lên đầu scope. var được hoisted và initialized với undefined. let/const được hoisted nhưng không initialized, tạo temporal dead zone. Function declarations được hoisted hoàn toàn.',
    level: 'mid',
    category: 'syntax',
  },
  {
    id: 4,
    question: 'Temporal Dead Zone (TDZ) là gì?',
    answer:
      'TDZ là khoảng thời gian từ khi scope bắt đầu đến khi let/const variable được declared. Trong TDZ, truy cập variable sẽ throw ReferenceError. TDZ giúp phát hiện lỗi sớm và khuyến khích declare before use.',
    level: 'mid',
    category: 'syntax',
  },
  {
    id: 5,
    question: 'Scope trong JavaScript hoạt động như thế nào?',
    answer:
      'JavaScript có function scope (var) và block scope (let/const). Scope chain cho phép inner scope truy cập outer scope. Global scope accessible ở mọi nơi. Module scope trong ES6 modules. Lexical scoping xác định scope tại compile time.',
    level: 'mid',
    category: 'basic',
  },
  {
    id: 6,
    question: 'Best practices khi đặt tên biến?',
    answer:
      'Sử dụng camelCase, tên có ý nghĩa và mô tả, tránh abbreviations không rõ ràng, consistency trong naming convention, sử dụng const cho values không thay đổi, avoid reserved keywords, use English names.',
    level: 'junior',
    category: 'best-practices',
  },
  {
    id: 7,
    question: 'Global variables có những vấn đề gì?',
    answer:
      'Global variables gây pollution namespace, naming conflicts, khó debug, memory leaks, security issues, tight coupling. Best practice: minimize global scope, use modules, namespacing, IIFE pattern.',
    level: 'mid',
    category: 'best-practices',
  },
  {
    id: 8,
    question: 'Variable shadowing là gì?',
    answer:
      'Variable shadowing xảy ra khi inner scope variable có tên trùng với outer scope variable, "che" outer variable. Có thể gây confusion và bugs. Avoid bằng cách sử dụng unique names hoặc lint rules.',
    level: 'mid',
    category: 'debugging',
  },
  {
    id: 9,
    question: 'Memory management với variables như thế nào?',
    answer:
      'JavaScript có garbage collection tự động. Variables out of scope sẽ được GC thu hồi. Closures có thể giữ references và prevent GC. Best practices: nullify references, avoid circular references, careful với event listeners.',
    level: 'senior',
    category: 'performance',
  },
  {
    id: 10,
    question: 'Destructuring assignment và variables?',
    answer:
      'Destructuring cho phép extract values từ arrays/objects vào variables. Hỗ trợ default values, rest patterns, nested destructuring. Giúp code ngắn gọn và readable hơn. Có thể combine với function parameters.',
    level: 'mid',
    category: 'syntax',
  },
];

const codeExamples = {
  basic: `// Khai báo biến cơ bản
let userName = "Nguyễn Văn A";
let userAge = 25;
let isActive = true;

console.log("Tên:", userName);
console.log("Tuổi:", userAge);
console.log("Trạng thái:", isActive);`,

  comparison: `// So sánh var, let, const
var oldVar = "var có thể redeclare";
var oldVar = "var mới"; // OK

let newLet = "let block-scoped";
// let newLet = "lỗi"; // SyntaxError

const constant = "const không thể reassign";
// constant = "lỗi"; // TypeError`,

  scope: `// Demo scope
function demoScope() {
  var functionScoped = "function scope";

  if (true) {
    var functionScoped2 = "vẫn function scope";
    let blockScoped = "block scope";
    const alsoBlockScoped = "cũng block scope";
  }

  console.log(functionScoped2); // OK
  // console.log(blockScoped); // ReferenceError
}`,

  practical: `// Ví dụ thực tế - Quản lý giỏ hàng
const STORE_NAME = "Shop ABC"; // Hằng số
let totalItems = 0;
let totalPrice = 0;

function addToCart(itemName, price, quantity = 1) {
  console.log(\`Thêm \${quantity} \${itemName} vào giỏ\`);
  totalItems += quantity;
  totalPrice += price * quantity;

  console.log(\`Tổng: \${totalItems} sản phẩm - \${totalPrice}đ\`);
}

addToCart("Áo thun", 150000, 2);
addToCart("Quần jean", 300000);`,
};

export default function VariableBasicsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [filterLevel, setFilterLevel] = useState<'all' | 'junior' | 'mid' | 'senior'>('all');
  const [filterCategory, setFilterCategory] = useState<'all' | string>('all');
  const [activeExample, setActiveExample] = useState<string>('basic');

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const copyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
  };

  const runExample = (code: string) => {
    try {
      eval(code);
    } catch (error) {
      console.error('Lỗi khi chạy code:', error);
    }
  };

  const filteredFAQs = variableFAQs.filter(faq => {
    const levelMatch = filterLevel === 'all' || faq.level === filterLevel;
    const categoryMatch = filterCategory === 'all' || faq.category === filterCategory;
    return levelMatch && categoryMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'junior':
        return 'bg-green-100 text-green-800';
      case 'mid':
        return 'bg-yellow-100 text-yellow-800';
      case 'senior':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'basic':
        return 'bg-blue-100 text-blue-800';
      case 'syntax':
        return 'bg-purple-100 text-purple-800';
      case 'best-practices':
        return 'bg-pink-100 text-pink-800';
      case 'debugging':
        return 'bg-orange-100 text-orange-800';
      case 'performance':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const CodeBlock = ({ code, title }: { code: string; title?: string }) => (
    <div className="bg-gray-50 rounded-lg border">
      {title && (
        <div className="px-4 py-2 bg-blue-50 rounded-t-lg border-b">
          <p className="text-sm text-blue-800 font-medium">{title}</p>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="language-javascript">{code}</code>
        </pre>
        <div className="absolute top-2 right-2 flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => copyCode(code)}
            className="h-8 w-8 p-0"
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button size="sm" onClick={() => runExample(code)} className="h-8 w-8 p-0">
            <Play className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <JSLayout
      currentLesson="Giới thiệu về Biến"
      tableOfContents={JS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 text-lg">
            <Code className="w-5 h-5 mr-2" />
            JavaScript Variables
          </Badge>

          <h1 className="text-5xl font-bold text-gray-900" id="variable-introduction">
            🔧 Giới Thiệu về Biến trong JavaScript
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Biến là nền tảng cơ bản nhất trong lập trình JavaScript. Chúng cho phép lưu trữ, quản lý
            và thao tác dữ liệu trong chương trình của bạn.
          </p>
        </div>

        {/* What are Variables */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="what-are-variables"
          >
            <Settings className="w-8 h-8 text-blue-600" />
            Biến là gì?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Định nghĩa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Biến (Variable)</strong> là một "hộp chứa" có tên để lưu trữ dữ liệu trong
                  chương trình.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>Có tên:</strong> Để phân biệt với các biến khác
                  </li>
                  <li>
                    • <strong>Có giá trị:</strong> Dữ liệu được lưu trữ bên trong
                  </li>
                  <li>
                    • <strong>Có thể thay đổi:</strong> Giá trị có thể cập nhật (với let)
                  </li>
                  <li>
                    • <strong>Có kiểu dữ liệu:</strong> Số, chuỗi, boolean, object...
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Ví dụ thực tế</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-blue-800 text-sm">
                    💡 Giống như một chiếc hộp có nhãn "Tuổi của tôi" chứa số 25. Khi sinh nhật, bạn
                    có thể thay số thành 26 mà không đổi nhãn.
                  </p>
                </div>
                <CodeBlock
                  code={`let age = 25;        // Hộp "age" chứa 25
let name = "An";     // Hộp "name" chứa "An"
let isStudent = true; // Hộp "isStudent" chứa true

console.log("Tôi tên", name, "năm nay", age, "tuổi");`}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Use Variables */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="why-variables"
          >
            <Target className="w-8 h-8 text-blue-600" />
            Tại sao cần sử dụng Biến?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💾</span>
                </div>
                <CardTitle className="text-lg">Lưu trữ dữ liệu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  Giữ thông tin để sử dụng sau này như tên user, điểm số, trạng thái
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <CardTitle className="text-lg">Tái sử dụng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  Sử dụng cùng giá trị ở nhiều nơi mà không cần viết lại
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧮</span>
                </div>
                <CardTitle className="text-lg">Tính toán</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  Thực hiện phép toán và lưu kết quả để xử lý tiếp
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎛️</span>
                </div>
                <CardTitle className="text-lg">Điều khiển</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  Thay đổi hành vi chương trình dựa trên giá trị biến
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">So sánh: Không có biến vs Có biến</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-red-600 font-semibold mb-3">
                    ❌ Không có biến (khó bảo trì)
                  </h4>
                  <CodeBlock
                    code={`console.log("Xin chào Nguyễn Văn A");
console.log("Tuổi của Nguyễn Văn A: 25");
console.log("Email: nguyenvana@email.com");
// Muốn đổi tên phải sửa ở nhiều nơi!`}
                  />
                </div>
                <div>
                  <h4 className="text-green-600 font-semibold mb-3">✅ Có biến (dễ bảo trì)</h4>
                  <CodeBlock
                    code={`let userName = "Nguyễn Văn A";
let userAge = 25;
let userEmail = "nguyenvana@email.com";

console.log("Xin chào " + userName);
console.log("Tuổi của " + userName + ": " + userAge);
console.log("Email: " + userEmail);`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Variable Declaration */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="variable-declaration"
          >
            <Lightbulb className="w-8 h-8 text-blue-600" />
            Cách khai báo Biến
          </h2>

          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Các từ khóa khai báo: let, const, var</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">🔹 let</h4>
                    <p className="text-sm text-blue-700 mb-3">Cho biến có thể thay đổi</p>
                    <div className="bg-white p-2 rounded text-xs">
                      <code>let userName = "An";</code>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🔸 const</h4>
                    <p className="text-sm text-green-700 mb-3">Cho hằng số (không đổi)</p>
                    <div className="bg-white p-2 rounded text-xs">
                      <code>const PI = 3.14159;</code>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">🔺 var</h4>
                    <p className="text-sm text-yellow-700 mb-3">Cách cũ (ít khuyến khích)</p>
                    <div className="bg-white p-2 rounded text-xs">
                      <code>var oldStyle = "cũ";</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Code Examples */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Ví dụ thực hành</CardTitle>
                <div className="flex gap-2 mt-4">
                  {Object.keys(codeExamples).map(key => (
                    <Button
                      key={key}
                      size="sm"
                      variant={activeExample === key ? 'default' : 'outline'}
                      onClick={() => setActiveExample(key)}
                    >
                      {key === 'basic' && 'Cơ bản'}
                      {key === 'comparison' && 'So sánh'}
                      {key === 'scope' && 'Scope'}
                      {key === 'practical' && 'Thực tế'}
                    </Button>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CodeBlock code={codeExamples[activeExample as keyof typeof codeExamples]} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="key-concepts"
          >
            <BookOpen className="w-8 h-8 text-blue-600" />
            Khái niệm quan trọng
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">🎯 Scope (Phạm vi)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-sm">
                      <strong>Global:</strong> Truy cập mọi nơi
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-sm">
                      <strong>Function:</strong> Trong hàm (var)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span className="text-sm">
                      <strong>Block:</strong> Trong {`{}`} (let/const)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">⚡ Hoisting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">
                  JavaScript "kéo" khai báo biến lên đầu scope
                </p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <strong>var:</strong> Hoisted + undefined
                  </div>
                  <div className="text-sm">
                    <strong>let/const:</strong> Hoisted + TDZ
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">🚫 Temporal Dead Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Khoảng thời gian let/const được hoisted nhưng chưa thể truy cập, từ đầu scope đến
                  khi declared.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">📝 Naming Convention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  ✅ camelCase: <code>userName</code>
                </div>
                <div className="text-sm">
                  ✅ Có ý nghĩa: <code>totalPrice</code>
                </div>
                <div className="text-sm">
                  ❌ Viết tắt: <code>tp</code>, <code>usr</code>
                </div>
                <div className="text-sm">
                  ❌ Từ khóa: <code>class</code>, <code>function</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interview FAQ Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2
              className="text-3xl font-bold text-gray-900 flex items-center gap-3"
              id="interview-faqs"
            >
              <HelpCircle className="w-8 h-8 text-blue-600" />
              Câu hỏi phỏng vấn về Variables
            </h2>
            <Badge className="bg-blue-100 text-blue-800">{filteredFAQs.length} câu hỏi</Badge>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Level:</span>
              <div className="flex gap-2">
                {['all', 'junior', 'mid', 'senior'].map(level => (
                  <Button
                    key={level}
                    size="sm"
                    variant={filterLevel === level ? 'default' : 'outline'}
                    onClick={() => setFilterLevel(level as any)}
                    className="text-xs"
                  >
                    {level === 'all' ? 'Tất cả' : level.charAt(0).toUpperCase() + level.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Category:</span>
              <div className="flex gap-2">
                {['all', 'basic', 'syntax', 'best-practices', 'debugging', 'performance'].map(
                  category => (
                    <Button
                      key={category}
                      size="sm"
                      variant={filterCategory === category ? 'default' : 'outline'}
                      onClick={() => setFilterCategory(category)}
                      className="text-xs"
                    >
                      {category === 'all' ? 'Tất cả' : category.replace('-', ' ')}
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map(faq => (
              <Card key={faq.id} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={getLevelColor(faq.level)}>
                          {faq.level.toUpperCase()}
                        </Badge>
                        <Badge className={getCategoryColor(faq.category)}>
                          {faq.category.replace('-', ' ').toUpperCase()}
                        </Badge>
                      </div>
                      <CardTitle
                        className="text-lg cursor-pointer hover:text-blue-600 transition-colors"
                        onClick={() => toggleFAQ(faq.id)}
                      >
                        {faq.question}
                      </CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFAQ(faq.id)}
                      className="ml-4"
                    >
                      {openFAQ === faq.id ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </div>
                </CardHeader>

                {openFAQ === faq.id && (
                  <CardContent className="border-t bg-gray-50">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <h3 className="font-bold text-blue-900 text-lg mb-3">📝 Tóm tắt bài học</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Biến là container có tên để lưu trữ dữ liệu</li>
            <li>• Sử dụng let cho biến thay đổi, const cho hằng số</li>
            <li>• Hiểu về scope, hoisting và temporal dead zone</li>
            <li>• Đặt tên biến có ý nghĩa và theo convention</li>
            <li>• Tránh global variables và variable shadowing</li>
            <li>• Biến là nền tảng để học các concept JavaScript khác</li>
          </ul>
        </section>
      </div>
    </JSLayout>
  );
}

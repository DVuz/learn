'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ChevronDown,
  ChevronUp,
  Code,
  Variable,
  BookOpen,
  Lightbulb,
  Target,
  HelpCircle,
  Copy,
  Check,
  Eye,
  Info,
  AlertCircle,
  Zap,
  PlayCircle,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import JSLayout from '../components/JSLayout';
import { JS_TABLE_OF_CONTENTS, JS_NAVIGATIONS, getProgressForLesson } from '../constants/jsData';
import {
  CODE_EXAMPLES,
  COMPARISON_TABLE,
  LEARNING_OBJECTIVES,
  COMMON_MISTAKES,
  PRACTICAL_EXERCISES,
} from './data';
import {
  VAR_LET_CONST_QUESTIONS,
  getQuestionsByType,
  getQuestionsByLevel,
  Question,
} from './questions';

const navigation = JS_NAVIGATIONS['var-let-const'] || {};
const progress = getProgressForLesson('var-let-const');

export default function VarLetConstPage() {
  // States for interactive features
  const [activeExample, setActiveExample] = useState<string>('var-hoisting');
  const [showResults, setShowResults] = useState<{ [key: string]: boolean }>({});
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Quiz states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizType, setQuizType] = useState<'theory' | 'practice' | 'interview'>('theory');
  const [quizLevel, setQuizLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');

  // Interactive functions
  const toggleResult = (exampleId: string) => {
    setShowResults(prev => ({
      ...prev,
      [exampleId]: !prev[exampleId],
    }));
  };

  const copyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Quiz functions
  const currentQuestions = VAR_LET_CONST_QUESTIONS.filter(
    q => q.type === quizType && q.level === quizLevel
  );
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const showAnswerExplanation = () => {
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(prev => (prev + 1) % currentQuestions.length);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'var':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'let':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'const':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'comparison':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'best-practice':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <JSLayout
      currentLesson="JavaScript Variables: var, let, const"
      tableOfContents={JS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 text-lg">
            <Variable className="w-5 h-5 mr-2" />
            JavaScript Variables
          </Badge>

          <h1 className="text-5xl font-bold text-gray-900" id="var-let-const">
            🔄 var, let, const - Khai báo biến trong JavaScript
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tìm hiểu sự khác biệt giữa var, let và const trong JavaScript. Từ hoisting, scope,
            temporal dead zone đến best practices trong modern JavaScript development.
          </p>
        </div>

        {/* Learning Objectives */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3" id="objectives">
            <Target className="w-8 h-8 text-yellow-600" />
            Mục tiêu học tập
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LEARNING_OBJECTIVES.map((objective, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 font-medium">{objective}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Theory Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3" id="theory">
            <BookOpen className="w-8 h-8 text-yellow-600" />
            Lý thuyết cơ bản
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <code className="bg-red-200 px-2 py-1 rounded text-sm">var</code>
                  ES5 Legacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• Function scope hoặc global scope</li>
                  <li>• Hoisted và initialized với undefined</li>
                  <li>• Có thể khai báo lại trong cùng scope</li>
                  <li>• Có thể gán lại giá trị</li>
                  <li>• Tạo property trên global object</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center gap-2">
                  <code className="bg-blue-200 px-2 py-1 rounded text-sm">let</code>
                  ES6 Block Scope
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Block scope</li>
                  <li>• Temporal Dead Zone (TDZ)</li>
                  <li>• Không thể khai báo lại</li>
                  <li>• Có thể gán lại giá trị</li>
                  <li>• Không tạo global property</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <code className="bg-green-200 px-2 py-1 rounded text-sm">const</code>
                  ES6 Immutable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Block scope</li>
                  <li>• Temporal Dead Zone (TDZ)</li>
                  <li>• Không thể khai báo lại</li>
                  <li>• Không thể gán lại reference</li>
                  <li>• Phải khởi tạo giá trị ngay</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Quiz After Theory */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            Kiểm tra hiểu biết
          </h3>

          {currentQuestion && (
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800">
                      {currentQuestion.type.toUpperCase()}
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-800">
                      {currentQuestion.level.toUpperCase()}
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800">
                      {currentQuestion.category.replace('-', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-500">
                    {currentQuestionIndex + 1} / {currentQuestions.length}
                  </span>
                </div>
                <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {currentQuestion.codeExample && (
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono">
                      <code>{currentQuestion.codeExample}</code>
                    </pre>
                  </div>
                )}

                {currentQuestion.options && (
                  <div className="space-y-2">
                    {currentQuestion.options.map((option, index) => (
                      <Button
                        key={index}
                        variant={selectedAnswer === index ? 'default' : 'outline'}
                        className="w-full text-left justify-start h-auto p-4"
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showAnswer}
                      >
                        <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </Button>
                    ))}
                  </div>
                )}

                <div className="flex gap-3">
                  {!showAnswer && selectedAnswer !== null && (
                    <Button onClick={showAnswerExplanation} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Xem đáp án
                    </Button>
                  )}

                  {showAnswer && (
                    <Button onClick={nextQuestion} className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      Câu tiếp theo
                    </Button>
                  )}
                </div>

                {showAnswer && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {selectedAnswer === currentQuestion.correctAnswer ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="font-medium">
                        {selectedAnswer === currentQuestion.correctAnswer
                          ? 'Chính xác!'
                          : 'Sai rồi!'}
                      </span>
                    </div>
                    <p className="text-gray-700">{currentQuestion.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Quiz Controls */}
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Loại:</span>
              {(['theory', 'practice', 'interview'] as const).map(type => (
                <Button
                  key={type}
                  size="sm"
                  variant={quizType === type ? 'default' : 'outline'}
                  onClick={() => {
                    setQuizType(type);
                    setCurrentQuestionIndex(0);
                    setSelectedAnswer(null);
                    setShowAnswer(false);
                  }}
                  className="text-xs"
                >
                  {type === 'theory'
                    ? 'Lý thuyết'
                    : type === 'practice'
                    ? 'Thực hành'
                    : 'Phỏng vấn'}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Level:</span>
              {(['beginner', 'intermediate', 'advanced'] as const).map(level => (
                <Button
                  key={level}
                  size="sm"
                  variant={quizLevel === level ? 'default' : 'outline'}
                  onClick={() => {
                    setQuizLevel(level);
                    setCurrentQuestionIndex(0);
                    setSelectedAnswer(null);
                    setShowAnswer(false);
                  }}
                  className="text-xs"
                >
                  {level === 'beginner'
                    ? 'Cơ bản'
                    : level === 'intermediate'
                    ? 'Trung cấp'
                    : 'Nâng cao'}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3" id="examples">
            <Code className="w-8 h-8 text-yellow-600" />
            Ví dụ thực tế
          </h2>

          {/* Example Navigation */}
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg">
            {CODE_EXAMPLES.map(example => (
              <Button
                key={example.id}
                size="sm"
                variant={activeExample === example.id ? 'default' : 'outline'}
                onClick={() => setActiveExample(example.id)}
                className="text-xs"
              >
                <Badge className={`mr-2 ${getTypeColor(example.type)}`} variant="outline">
                  {example.type}
                </Badge>
                {example.title}
              </Button>
            ))}
          </div>

          {/* Active Example Details */}
          {CODE_EXAMPLES.filter(example => example.id === activeExample).map(example => (
            <Card key={example.id} className="shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Badge className={getTypeColor(example.type)} variant="outline">
                        {example.type}
                      </Badge>
                      {example.title}
                    </CardTitle>
                    <p className="text-gray-600 mt-3 text-lg">{example.description}</p>
                    {example.explanation && (
                      <p className="text-blue-600 mt-2 text-sm font-medium">
                        💡 {example.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                      <Code className="w-5 h-5 text-yellow-600" />
                      JavaScript Code
                    </h4>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleResult(example.id)}
                        className="text-xs"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        {showResults[example.id] ? 'Ẩn' : 'Xem'} Output
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyCode(example.code, example.id)}
                        className="text-xs"
                      >
                        {copiedCode === example.id ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono">
                      <code>{example.code}</code>
                    </pre>
                  </div>

                  {showResults[example.id] && example.output && (
                    <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                      <h5 className="font-medium text-white mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        Console Output:
                      </h5>
                      <div className="bg-black rounded p-3">
                        <pre className="text-green-400 text-sm font-mono">
                          <code>{example.output}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Comparison Table */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3" id="comparison">
            <BookOpen className="w-8 h-8 text-yellow-600" />
            Bảng so sánh chi tiết
          </h2>

          <Card className="shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        Đặc điểm
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-red-600 uppercase tracking-wider">
                        var
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-blue-600 uppercase tracking-wider">
                        let
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-green-600 uppercase tracking-wider">
                        const
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {COMPARISON_TABLE.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700 font-medium">
                          {row.var}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700 font-medium">
                          {row.let}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700 font-medium">
                          {row.const}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Practices */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="best-practices"
          >
            <Lightbulb className="w-8 h-8 text-yellow-600" />
            Best Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                  ✅ Nên làm (Modern JavaScript)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    <strong>const by default</strong> - Ưu tiên const cho giá trị không thay đổi
                    reference
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    <strong>let when reassignment needed</strong> - Chỉ dùng let khi cần gán lại giá
                    trị
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    <strong>Avoid var</strong> - Không dùng var trong code ES6+ mới
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    <strong>Declare near usage</strong> - Khai báo biến gần nơi sử dụng
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    <strong>Meaningful names</strong> - Đặt tên biến có ý nghĩa và rõ ràng
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800 flex items-center gap-2">
                  ❌ Tránh làm (Legacy patterns)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Sử dụng var trong modern JavaScript (ES6+)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Khai báo biến ở đầu function (hoisting abuse)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Access biến trước khi khai báo (rely on hoisting)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Reassign const variables hoặc modify references
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Dùng let trong loops khi không cần block scope riêng
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Golden Rules */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h4 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
              💡 Quy tắc vàng:
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-yellow-700">
              <li>
                <strong>const</strong> cho giá trị không thay đổi reference (objects, arrays,
                functions)
              </li>
              <li>
                <strong>let</strong> cho biến có thể thay đổi (counters, reassignment)
              </li>
              <li>
                <strong>var</strong> chỉ khi cần function scope hoặc maintain legacy code
              </li>
              <li>Khai báo biến gần nơi sử dụng để improve readability</li>
              <li>Đặt tên biến có ý nghĩa, tránh single character names</li>
            </ol>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3" id="mistakes">
            <AlertCircle className="w-8 h-8 text-yellow-600" />
            Lỗi thường gặp
          </h2>

          <div className="space-y-4">
            {COMMON_MISTAKES.map((mistake, index) => (
              <Card key={index} className="border-l-4 border-red-400 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    ❌ Lỗi: {mistake.mistake}
                  </h3>
                  <p className="text-red-700 mb-3">
                    ✅ <strong>Giải pháp:</strong> {mistake.solution}
                  </p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <pre>
                      <code>{mistake.example}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl border-2 border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center" id="summary">
            📝 Tóm tắt var, let, const
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
          <code className="text-red-600 font-bold">var</code>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ES5 Truyền thống</h3>
              <p className="text-sm text-gray-600">Function scope, hoisting, nên tránh dùng trong JS hiện đại</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
          <code className="text-blue-600 font-bold">let</code>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ES6 Có thể thay đổi</h3>
              <p className="text-sm text-gray-600">Block scope, TDZ, có thể gán lại giá trị</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
          <code className="text-green-600 font-bold">const</code>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ES6 Không thay đổi</h3>
              <p className="text-sm text-gray-600">Block scope, TDZ, không thể gán lại giá trị</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 text-lg">
              <strong>Quy tắc cơ bản:</strong> Ưu tiên dùng const → dùng let khi cần gán lại giá trị → tránh dùng var! 🎯
            </p>
          </div>
        </section>
      </div>
    </JSLayout>
  );
}

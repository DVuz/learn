'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AlertTriangle,
  BookOpen,
  Brain,
  CheckCircle,
  Code,
  Filter,
  Lightbulb,
  RefreshCw,
  Search,
  Target,
  Trophy,
  XCircle,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import JSLayout from '../components/JSLayout';
import { JS_TABLE_OF_CONTENTS } from '../constants/jsData';
import { CodeBlock } from './CodeBlock';
import {
  ADVANCED_CONCEPTS,
  BEST_PRACTICES,
  CODE_EXAMPLES,
  COMMON_MISTAKES,
  CONCEPT_COMPARISON,
  LEARNING_OBJECTIVES,
  getExamplesByType,
  searchExamples,
} from './data';
import {
  ADVANCED_FUNCTIONS_QUESTIONS,
  QUESTION_CATEGORIES,
  QUESTION_LEVELS,
  calculateQuizScore,
  getQuestionsByCategory,
  getQuestionsByLevel,
  getQuizRecommendations,
  getRandomQuestions,
  searchQuestions,
  type Question,
  type QuizScoreResult,
} from './questions';

export default function AdvancedFunctionsPage() {
  // Quiz state
  const [currentQuiz, setCurrentQuiz] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | number | boolean)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState<QuizScoreResult | null>(null);
  const [activeTab, setActiveTab] = useState<string>('theory');

  // Filter states
  const [exampleCategory, setExampleCategory] = useState<string>('all');
  const [questionCategory, setQuestionCategory] = useState<string>('all');
  const [questionLevel, setQuestionLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Navigation configuration
  const navigation = {
    prev: {
      title: 'Functions & Scope',
      href: '/js/functions-scope',
    },
    next: {
      title: 'Async Programming',
      href: '/js/async-programming',
    },
  };

  // Progress configuration (mock data - would come from user progress system)
  const progress = {
    completed: 75,
    total: 100,
    percentage: 75,
  };

  // Initialize quiz
  const startQuiz = () => {
    const quiz = getRandomQuestions(15);
    setCurrentQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(quiz.length).fill(null));
    setShowResults(false);
    setQuizCompleted(false);
    setQuizScore(null);
    setActiveTab('quiz');
  };

  // Handle quiz answer selection
  const handleAnswerSelect = (answer: string | number | boolean) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  // Navigate quiz
  const goToNextQuestion = () => {
    if (currentQuestionIndex < currentQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Finish quiz and calculate results
  const finishQuiz = () => {
    const result = calculateQuizScore(selectedAnswers, currentQuiz);
    setQuizScore(result);
    setQuizCompleted(true);
  };

  // Get filtered examples and questions
  const filteredExamples = (() => {
    let examples = exampleCategory === 'all' ? CODE_EXAMPLES : getExamplesByType(exampleCategory);
    if (searchTerm) {
      examples = searchExamples(searchTerm);
    }
    return examples;
  })();

  const filteredQuestions = (() => {
    let questions = ADVANCED_FUNCTIONS_QUESTIONS;
    if (questionCategory !== 'all') {
      questions = getQuestionsByCategory(questionCategory as any);
    }
    if (questionLevel !== 'all') {
      questions = getQuestionsByLevel(questionLevel as any);
    }
    if (searchTerm) {
      questions = searchQuestions(searchTerm);
    }
    return questions;
  })();

  // Clear search when changing tabs
  useEffect(() => {
    if (activeTab !== 'examples' && activeTab !== 'practice') {
      setSearchTerm('');
    }
  }, [activeTab]);

  return (
    <JSLayout
      currentLesson="advanced-functions"
      tableOfContents={JS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="text-center py-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Hàm Nâng Cao & Closures trong JavaScript
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Thành thạo closures, higher-order functions và các khái niệm lập trình hàm nâng cao
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Target className="w-3 h-3 mr-1" />
              Cấp độ Nâng cao
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              <Brain className="w-3 h-3 mr-1" />
              Lý thuyết + Thực hành
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              <Code className="w-3 h-3 mr-1" />
              Ví dụ tương tác
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              <Trophy className="w-3 h-3 mr-1" />
              25+ Câu hỏi
            </Badge>
          </div>
          {progress && (
            <div className="mt-6 max-w-md mx-auto">
              <Progress value={progress.percentage} className="h-3" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Tiến độ học tập: {progress.percentage}% hoàn thành
              </p>
            </div>
          )}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="theory" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Lý thuyết
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Ví dụ
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Luyện tập
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Kiểm tra
            </TabsTrigger>
          </TabsList>

          {/* Theory Tab */}
          <TabsContent value="theory" className="space-y-8">
            {/* Learning Objectives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Mục tiêu học tập
                </CardTitle>
                <CardDescription>
                  Sau khi hoàn thành bài học này, bạn sẽ thành thạo các khái niệm JavaScript nâng
                  cao
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {LEARNING_OBJECTIVES.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">{objective}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Advanced Concepts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Các khái niệm nâng cao
                </CardTitle>
                <CardDescription>
                  Tìm hiểu sâu về các khái niệm hàm JavaScript phức tạp
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {ADVANCED_CONCEPTS.map((concept, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{concept.name}</h3>
                      <Badge
                        variant={
                          concept.difficulty === 'Advanced'
                            ? 'destructive'
                            : concept.difficulty === 'Intermediate'
                            ? 'default'
                            : 'secondary'
                        }
                      >
                        {concept.difficulty}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{concept.description}</p>

                    {concept.example && (
                      <CodeBlock
                        code={concept.example}
                        caption={`Ví dụ về ${concept.name}`}
                        output={concept.output}
                        id={`concept-${index}`}
                      />
                    )}

                      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">
                        Điểm quan trọng:
                      </h4>
                      <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-200 space-y-2">
                        {concept.keyPoints?.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Concept Comparison */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  So sánh các khái niệm
                </CardTitle>
                <CardDescription>
                  Hiểu rõ sự khác biệt giữa các khái niệm hàm nâng cao
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Khái niệm</th>
                        <th className="text-left p-3 font-medium">Mục đích</th>
                        <th className="text-left p-3 font-medium">Trường hợp sử dụng</th>
                        <th className="text-left p-3 font-medium">Hiệu suất</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CONCEPT_COMPARISON.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="p-3 font-medium">{item.concept}</td>
                          <td className="p-3 text-sm text-muted-foreground">{item.purpose}</td>
                          <td className="p-3 text-sm">{item.useCase}</td>
                          <td className="p-3">
                            <Badge
                              variant={
                                item.performance === 'Cao'
                                  ? 'default'
                                  : item.performance === 'Trung bình'
                                  ? 'secondary'
                                  : 'outline'
                              }
                            >
                              {item.performance}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Best Practices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Thực hành tốt nhất
                </CardTitle>
                <CardDescription>Hướng dẫn viết hàm nâng cao sạch và hiệu quả</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {BEST_PRACTICES.map((practice, index) => (
                    <div
                      key={index}
                      className="p-5 border rounded-lg bg-green-50 dark:bg-green-950/20"
                    >
                      <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                        {practice.title}
                      </h4>
                      <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                        {practice.description}
                      </p>
                      {practice.example && (
                        <CodeBlock
                          code={practice.example}
                          caption="Ví dụ thực hành tốt"
                          showLineNumbers={false}
                          id={`practice-${index}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Lỗi thường gặp
                </CardTitle>
                <CardDescription>
                  Tránh những lỗi phổ biến khi làm việc với hàm nâng cao
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {COMMON_MISTAKES.map((mistake, index) => (
                    <div key={index} className="p-5 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <h4 className="font-medium text-red-900 dark:text-red-100 mb-2">
                        {mistake.title}
                      </h4>
                      <p className="text-sm text-red-800 dark:text-red-200 mb-4">
                        {mistake.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-red-900 dark:text-red-100 mb-2 flex items-center gap-1">
                            <XCircle className="w-4 h-4" />
                            Sai:
                          </h5>
                          <CodeBlock
                            code={mistake.wrongExample}
                            showLineNumbers={false}
                            id={`wrong-${index}`}
                          />
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-green-900 dark:text-green-100 mb-2 flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Đúng:
                          </h5>
                          <CodeBlock
                            code={mistake.correctExample}
                            showLineNumbers={false}
                            id={`correct-${index}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-6">
            {/* Filter Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Khám phá ví dụ code
                </CardTitle>
                <CardDescription>Lọc và tìm kiếm các ví dụ thực tế về hàm nâng cao</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[250px]">
                    <Input
                      placeholder="Tìm kiếm ví dụ..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Select value={exampleCategory} onValueChange={setExampleCategory}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Lọc theo loại" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả loại</SelectItem>
                      <SelectItem value="closures">Closures</SelectItem>
                      <SelectItem value="higher-order">Higher-Order</SelectItem>
                      <SelectItem value="functional">Functional</SelectItem>
                      <SelectItem value="async">Async</SelectItem>
                      <SelectItem value="performance">Performance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Code Examples */}
            <div className="grid gap-6">
              {filteredExamples.map((example, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{example.title}</CardTitle>
                        <CardDescription className="mt-2">{example.description}</CardDescription>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Badge
                          variant={
                            example.difficulty === 'Advanced'
                              ? 'destructive'
                              : example.difficulty === 'Intermediate'
                              ? 'default'
                              : 'secondary'
                          }
                        >
                          {example.difficulty}
                        </Badge>
                        <Badge variant="outline">{example.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      code={example.code}
                      caption={example.title}
                      output={example.output}
                      id={`example-${index}`}
                    />

                    {example.explanation && (
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                          Giải thích:
                        </h4>
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          {example.explanation}
                        </p>
                      </div>
                    )}

                    {example.keyPoints && example.keyPoints.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Điểm học tập chính:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {example.keyPoints.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredExamples.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Không tìm thấy ví dụ nào phù hợp với tiêu chí của bạn.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm('');
                      setExampleCategory('all');
                    }}
                  >
                    Xóa bộ lọc
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Câu hỏi luyện tập
                </CardTitle>
                <CardDescription>
                  Kiểm tra hiểu biết của bạn với những câu hỏi luyện tập này
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex-1 min-w-[250px]">
                    <Input
                      placeholder="Tìm kiếm câu hỏi..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Select value={questionCategory} onValueChange={setQuestionCategory}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Lọc theo chủ đề" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả chủ đề</SelectItem>
                      {QUESTION_CATEGORIES.map(category => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={questionLevel} onValueChange={setQuestionLevel}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Lọc theo cấp độ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả cấp độ</SelectItem>
                      {QUESTION_LEVELS.map(level => (
                        <SelectItem key={level} value={level}>
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-6">
                  {filteredQuestions.slice(0, 10).map((question, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-medium flex-1">{question.question}</h3>
                          <div className="flex gap-2 ml-4">
                            <Badge
                              variant={
                                question.difficulty === 'advanced'
                                  ? 'destructive'
                                  : question.difficulty === 'intermediate'
                                  ? 'default'
                                  : 'secondary'
                              }
                            >
                              {question.difficulty}
                            </Badge>
                            <Badge variant="outline">{question.category}</Badge>
                          </div>
                        </div>

                        {question.code && (
                          <div className="mb-4">
                            <CodeBlock
                              code={question.code}
                              showLineNumbers={false}
                              id={`practice-${index}`}
                            />
                          </div>
                        )}

                        <div className="space-y-2 mb-4">
                          {question.options?.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className="flex items-center gap-3 p-3 rounded border hover:bg-muted/30 transition-colors"
                            >
                              <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
                                {String.fromCharCode(65 + optionIndex)}
                              </span>
                              <span className="text-sm">{option}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 p-4 bg-muted rounded-lg">
                          <p className="text-sm">
                            <strong className="text-green-600">Đáp án:</strong>{' '}
                            {typeof question.correctAnswer === 'boolean'
                              ? question.correctAnswer
                                ? 'Đúng'
                                : 'Sai'
                              : typeof question.correctAnswer === 'number'
                              ? String.fromCharCode(65 + question.correctAnswer)
                              : question.correctAnswer}{' '}
                            - {question.explanation}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredQuestions.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      Không tìm thấy câu hỏi nào phù hợp với tiêu chí của bạn.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm('');
                        setQuestionCategory('all');
                        setQuestionLevel('all');
                      }}
                    >
                      Xóa bộ lọc
                    </Button>
                  </div>
                )}

                <div className="text-center mt-8">
                  <Button onClick={startQuiz} size="lg" className="px-8">
                    Bắt đầu bài kiểm tra tương tác
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quiz Tab */}
          <TabsContent value="quiz" className="space-y-6">
            {!currentQuiz.length ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Bài kiểm tra tương tác
                  </CardTitle>
                  <CardDescription>
                    Kiểm tra độ thành thạo của bạn về hàm nâng cao và closures trong JavaScript
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
                      <h3 className="font-medium mb-2 text-blue-900 dark:text-blue-100">
                        15 Câu hỏi
                      </h3>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        Bao gồm tất cả chủ đề nâng cao
                      </p>
                    </div>
                    <div className="p-6 border rounded-lg bg-green-50 dark:bg-green-950/20">
                      <h3 className="font-medium mb-2 text-green-900 dark:text-green-100">
                        Nhiều cấp độ
                      </h3>
                      <p className="text-sm text-green-800 dark:text-green-200">
                        Từ cơ bản đến nâng cao
                      </p>
                    </div>
                    <div className="p-6 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
                      <h3 className="font-medium mb-2 text-purple-900 dark:text-purple-100">
                        Phản hồi tức thì
                      </h3>
                      <p className="text-sm text-purple-800 dark:text-purple-200">
                        Học từ giải thích chi tiết
                      </p>
                    </div>
                  </div>
                  <Button onClick={startQuiz} size="lg" className="px-8 py-3">
                    Bắt đầu bài kiểm tra
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>
                      Câu hỏi {currentQuestionIndex + 1} / {currentQuiz.length}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">{currentQuiz[currentQuestionIndex].category}</Badge>
                      <Badge
                        variant={
                          currentQuiz[currentQuestionIndex].difficulty === 'advanced'
                            ? 'destructive'
                            : currentQuiz[currentQuestionIndex].difficulty === 'intermediate'
                            ? 'default'
                            : 'secondary'
                        }
                      >
                        {currentQuiz[currentQuestionIndex].difficulty}
                      </Badge>
                    </div>
                  </div>
                  <Progress
                    value={((currentQuestionIndex + 1) / currentQuiz.length) * 100}
                    className="h-2"
                  />
                </CardHeader>
                <CardContent>
                  {!quizCompleted ? (
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium">
                        {currentQuiz[currentQuestionIndex].question}
                      </h3>

                      {currentQuiz[currentQuestionIndex].code && (
                        <CodeBlock
                          code={currentQuiz[currentQuestionIndex].code!}
                          showLineNumbers={false}
                          id={`quiz-${currentQuestionIndex}`}
                        />
                      )}

                      <div className="space-y-3">
                        {currentQuiz[currentQuestionIndex].type === 'true-false' ? (
                          <div className="space-y-2">
                            <button
                              onClick={() => handleAnswerSelect(true)}
                              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                                selectedAnswers[currentQuestionIndex] === true
                                  ? 'border-primary bg-primary/10'
                                  : 'border-border hover:bg-muted/50'
                              }`}
                            >
                              <span className="font-mono text-sm mr-3 bg-muted px-2 py-1 rounded">
                                A:
                              </span>
                              Đúng
                            </button>
                            <button
                              onClick={() => handleAnswerSelect(false)}
                              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                                selectedAnswers[currentQuestionIndex] === false
                                  ? 'border-primary bg-primary/10'
                                  : 'border-border hover:bg-muted/50'
                              }`}
                            >
                              <span className="font-mono text-sm mr-3 bg-muted px-2 py-1 rounded">
                                B:
                              </span>
                              Sai
                            </button>
                          </div>
                        ) : (
                          currentQuiz[currentQuestionIndex].options?.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswerSelect(index)}
                              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                                selectedAnswers[currentQuestionIndex] === index
                                  ? 'border-primary bg-primary/10'
                                  : 'border-border hover:bg-muted/50'
                              }`}
                            >
                              <span className="font-mono text-sm mr-3 bg-muted px-2 py-1 rounded">
                                {String.fromCharCode(65 + index)}:
                              </span>
                              {option}
                            </button>
                          ))
                        )}
                      </div>

                      <div className="flex justify-between pt-4">
                        <Button
                          variant="outline"
                          onClick={goToPreviousQuestion}
                          disabled={currentQuestionIndex === 0}
                        >
                          Câu trước
                        </Button>
                        <Button
                          onClick={goToNextQuestion}
                          disabled={selectedAnswers[currentQuestionIndex] === null}
                        >
                          {currentQuestionIndex === currentQuiz.length - 1
                            ? 'Hoàn thành'
                            : 'Câu tiếp'}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-6">
                      <h3 className="text-3xl font-bold">Hoàn thành bài kiểm tra!</h3>

                      {quizScore && (
                        <>
                          <div className="text-4xl font-bold text-primary">
                            {quizScore.correct} / {quizScore.total}
                          </div>
                          <div className="text-xl">Điểm số: {quizScore.percentage}%</div>
                          <div className="text-lg text-muted-foreground">
                            Điểm: {quizScore.points} / {quizScore.maxPoints}
                          </div>

                          <div className="mt-8">
                            {quizScore.percentage >= 80 ? (
                              <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg">
                                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                                <h4 className="font-medium text-green-900 dark:text-green-100 text-lg">
                                  Xuất sắc!
                                </h4>
                                <p className="text-sm text-green-800 dark:text-green-200">
                                  Bạn đã thành thạo hàm nâng cao và closures trong JavaScript.
                                </p>
                              </div>
                            ) : quizScore.percentage >= 60 ? (
                              <div className="p-6 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                                <h4 className="font-medium text-yellow-900 dark:text-yellow-100 text-lg">
                                  Tiến bộ tốt!
                                </h4>
                                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                  Ôn lại lý thuyết và ví dụ để cải thiện hiểu biết của bạn.
                                </p>
                              </div>
                            ) : (
                              <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-lg">
                                <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                                <h4 className="font-medium text-red-900 dark:text-red-100 text-lg">
                                  Tiếp tục học tập!
                                </h4>
                                <p className="text-sm text-red-800 dark:text-red-200">
                                  Nghiên cứu các khái niệm kỹ hơn và luyện tập với các ví dụ.
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Quiz Recommendations */}
                          <div className="mt-6 p-4 bg-muted rounded-lg">
                            <h4 className="font-medium mb-3">Gợi ý học tập:</h4>
                            <ul className="text-sm text-left space-y-2">
                              {getQuizRecommendations(quizScore.percentage).map(
                                (recommendation, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    {recommendation}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </>
                      )}

                      <div className="flex justify-center gap-4 pt-4">
                        <Button onClick={() => setShowResults(!showResults)} variant="outline">
                          {showResults ? 'Ẩn' : 'Hiện'} kết quả chi tiết
                        </Button>
                        <Button onClick={startQuiz} className="flex items-center gap-2">
                          <RefreshCw className="w-4 h-4" />
                          Làm lại bài kiểm tra
                        </Button>
                      </div>
                    </div>
                  )}

                  {showResults && quizCompleted && quizScore && (
                    <div className="mt-8 space-y-4">
                      <Separator />
                      <h4 className="font-medium text-lg">Kết quả chi tiết:</h4>
                      {currentQuiz.map((question, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-start gap-3 mb-3">
                            {selectedAnswers[index] === question.correctAnswer ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                            )}
                            <div className="flex-1">
                              <p className="font-medium text-sm mb-2">{question.question}</p>
                              <div className="text-xs text-muted-foreground space-y-1">
                                <p>
                                  <strong>Câu trả lời của bạn:</strong>{' '}
                                  {typeof selectedAnswers[index] === 'boolean'
                                    ? selectedAnswers[index]
                                      ? 'Đúng'
                                      : 'Sai'
                                    : typeof selectedAnswers[index] === 'number'
                                    ? String.fromCharCode(65 + (selectedAnswers[index] as number))
                                    : selectedAnswers[index]}
                                </p>
                                <p>
                                  <strong>Đáp án đúng:</strong>{' '}
                                  {typeof question.correctAnswer === 'boolean'
                                    ? question.correctAnswer
                                      ? 'Đúng'
                                      : 'Sai'
                                    : typeof question.correctAnswer === 'number'
                                    ? String.fromCharCode(65 + question.correctAnswer)
                                    : question.correctAnswer}
                                </p>
                                <p>
                                  <strong>Giải thích:</strong> {question.explanation}
                                </p>
                                <p>
                                  <strong>Điểm:</strong> {question.points || 1}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </JSLayout>
  );
}

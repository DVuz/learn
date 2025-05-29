'use client';

import { useState } from 'react';
import JSLayout from '../components/JSLayout';
import { JS_NAVIGATIONS, JS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/jsData';
import {
  BEST_PRACTICES,
  CODE_EXAMPLES,
  COMMON_MISTAKES,
  HOISTING_BEHAVIORS,
  LEARNING_OBJECTIVES,
  PRACTICAL_EXERCISES,
  SCOPE_RULES,
  getExamplesByType,
} from './data';
import {
  Question,
  SCOPE_HOISTING_QUESTIONS,
  getQuestionsByType,
  getQuizQuestions,
} from './questions';

const navigation = JS_NAVIGATIONS['scope-hoisting'] || {};
const progress = getProgressForLesson('scope-hoisting');

export default function ScopeHoistingPage() {
  // States for interactive features
  const [activeExample, setActiveExample] = useState<string>('global-scope');
  const [showResults, setShowResults] = useState<{ [key: string]: boolean }>({});
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('theory');

  // Quiz states
  const [currentQuiz, setCurrentQuiz] = useState<'quick' | 'comprehensive' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  // Filter states
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  // Copy code functionality
  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Toggle result visibility
  const toggleResult = (id: string) => {
    setShowResults(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Quiz functions
  const startQuiz = (type: 'quick' | 'comprehensive') => {
    let questions: Question[] = [];
    if (type === 'quick') {
      questions = getQuizQuestions();
    } else {
      questions = SCOPE_HOISTING_QUESTIONS.slice(0, 10);
    }

    setQuizQuestions(questions);
    setCurrentQuiz(type);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowQuizResults(false);
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answerIndex,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowQuizResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowQuizResults(false);
    setQuizQuestions([]);
  };

  const calculateScore = () => {
    const correct = quizQuestions.filter(
      (q, index) => selectedAnswers[index] === q.correctAnswer
    ).length;
    return Math.round((correct / quizQuestions.length) * 100);
  };

  // Get filtered questions for question bank
  const getFilteredQuestions = () => {
    let questions = SCOPE_HOISTING_QUESTIONS;

    if (selectedType !== 'all') {
      questions = getQuestionsByType(selectedType as Question['category']);
    }

    if (selectedLevel !== 'all') {
      questions = questions.filter(q => q.level === selectedLevel);
    }

    return questions;
  };

  return (
    <JSLayout
      currentLesson="scope-hoisting"
      tableOfContents={JS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Scope & Hoisting</h1>
              <p className="text-gray-600 mt-2">
                Hiểu về phạm vi biến và cơ chế hoisting trong JavaScript
              </p>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-gray-300 text-sm">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lesson 2/8
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-gray-300 text-sm">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Chapter 1: Variables
            </span>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white rounded-lg shadow border">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mục tiêu học tập
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {LEARNING_OBJECTIVES.map((objective, index) => (
                <div key={index} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow border">
          <div className="border-b">
            <div className="flex">
              {[
                { id: 'theory', label: 'Lý thuyết', icon: '📚' },
                { id: 'examples', label: 'Ví dụ', icon: '💻' },
                { id: 'quiz', label: 'Quiz', icon: '🧠' },
                { id: 'questions', label: 'Câu hỏi', icon: '❓' },
                { id: 'practice', label: 'Thực hành', icon: '⚡' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{tab.icon}</span>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Theory Tab */}
            {activeTab === 'theory' && (
              <div className="space-y-6">
                {/* Scope Rules */}
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Các loại Scope
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {SCOPE_RULES.map((rule, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-2">{rule.concept}</h4>
                              <p className="text-gray-600 mb-3">{rule.description}</p>
                              <div className="bg-gray-50 rounded p-3">
                                <code className="text-sm text-gray-800">{rule.example}</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hoisting Behaviors Table */}
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                      Hành vi Hoisting
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-left">Khai báo</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Hoisted</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Khởi tạo</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">TDZ</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Ví dụ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {HOISTING_BEHAVIORS.map((behavior, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-2 font-semibold">
                                {behavior.declaration}
                              </td>
                              <td className="border border-gray-300 px-4 py-2">
                                <span className={`inline-block px-2 py-1 rounded text-xs ${
                                  behavior.hoisted === 'Có' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {behavior.hoisted}
                                </span>
                              </td>
                              <td className="border border-gray-300 px-4 py-2">
                                {behavior.initialization}
                              </td>
                              <td className="border border-gray-300 px-4 py-2">
                                <span className={`inline-block px-2 py-1 rounded text-xs ${
                                  behavior.tdz === 'Có' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {behavior.tdz}
                                </span>
                              </td>
                              <td className="border border-gray-300 px-4 py-2">
                                <code className="text-xs text-gray-600">{behavior.example}</code>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Common Mistakes */}
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold flex items-center gap-2 text-red-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Lỗi thường gặp
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {COMMON_MISTAKES.map((mistake, index) => (
                        <div key={index} className="border border-red-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="flex-1">
                              <h4 className="font-semibold text-red-800 mb-2">{mistake.mistake}</h4>
                              <p className="text-gray-600 mb-3">{mistake.solution}</p>
                              <div className="bg-red-50 rounded p-3">
                                <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                                  {mistake.example}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold flex items-center gap-2 text-yellow-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Best Practices
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {BEST_PRACTICES.map((practice, index) => (
                        <div key={index} className="border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-2">{practice.title}</h4>
                              <p className="text-gray-600 mb-3">{practice.description}</p>
                              <div className="bg-green-50 rounded p-3">
                                <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                                  {practice.example}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Examples Tab */}
            {activeTab === 'examples' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Ví dụ thực tế
                    </h3>
                  </div>
                  <div className="p-4">
                    {/* Example filters */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[
                        'all',
                        'scope',
                        'hoisting',
                        'function-scope',
                        'block-scope',
                        'temporal-dead-zone',
                      ].map(type => (
                        <button
                          key={type}
                          onClick={() => {
                            if (type === 'all') {
                              setActiveExample('global-scope');
                            } else {
                              const examples = getExamplesByType(type as any);
                              if (examples.length > 0) {
                                setActiveExample(examples[0].id);
                              }
                            }
                          }}
                          className={`px-3 py-1 rounded text-sm ${
                            activeExample === type ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type === 'all'
                            ? 'Tất cả'
                            : type === 'scope'
                            ? 'Scope'
                            : type === 'hoisting'
                            ? 'Hoisting'
                            : type === 'function-scope'
                            ? 'Function Scope'
                            : type === 'block-scope'
                            ? 'Block Scope'
                            : 'TDZ'}
                        </button>
                      ))}
                    </div>

                    {/* Example List */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-4">
                      {CODE_EXAMPLES.map(example => (
                        <button
                          key={example.id}
                          onClick={() => setActiveExample(example.id)}
                          className={`text-left p-3 rounded border ${
                            activeExample === example.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-semibold">{example.title}</div>
                          <div className="text-xs text-gray-500 mt-1">{example.description}</div>
                        </button>
                      ))}
                    </div>

                    {/* Active Example */}
                    {(() => {
                      const example = CODE_EXAMPLES.find(ex => ex.id === activeExample);
                      if (!example) return null;

                      return (
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-lg">{example.title}</h3>
                              <p className="text-gray-600 text-sm">{example.description}</p>
                            </div>
                            <span className="px-2 py-1 rounded border text-sm">{example.type}</span>
                          </div>

                          {/* Code */}
                          <div className="bg-gray-900 rounded-lg p-4 mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-400 text-sm">JavaScript</span>
                              <button
                                onClick={() => copyToClipboard(example.code, example.id)}
                                className="text-gray-400 hover:text-white p-1"
                              >
                                {copiedCode === example.id ? '✓' : '📋'}
                              </button>
                            </div>
                            <pre className="text-gray-100 text-sm overflow-x-auto whitespace-pre-wrap">
                              {example.code}
                            </pre>
                          </div>

                          {/* Output */}
                          {example.output && (
                            <div className="mb-4">
                              <button
                                onClick={() => toggleResult(example.id)}
                                className="mb-2 px-3 py-1 bg-gray-100 rounded text-sm hover:bg-gray-200"
                              >
                                {showResults[example.id] ? 'Ẩn' : 'Hiện'} kết quả 👁️
                              </button>

                              {showResults[example.id] && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="text-green-800">▶️ Output:</span>
                                  </div>
                                  <pre className="text-green-800 text-sm whitespace-pre-wrap">
                                    {example.output}
                                  </pre>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Explanation */}
                          {example.explanation && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">ℹ️</span>
                                <div>
                                  <span className="font-medium text-blue-800">Giải thích:</span>
                                  <p className="text-blue-700 mt-1">{example.explanation}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            )}

            {/* Quiz Tab */}
            {activeTab === 'quiz' && (
              <div className="space-y-6">
                {!currentQuiz ? (
                  <div className="bg-white rounded-lg border">
                    <div className="px-4 py-3 border-b">
                      <h3 className="font-semibold flex items-center gap-2">
                        <span>🧠</span>
                        Kiểm tra kiến thức
                      </h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                          className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => startQuiz('quick')}
                        >
                          <div className="text-center space-y-2">
                            <div className="text-2xl">⚡</div>
                            <h3 className="font-semibold">Quiz nhanh</h3>
                            <p className="text-sm text-gray-600">5 câu hỏi chọn lọc</p>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                              Bắt đầu
                            </button>
                          </div>
                        </div>

                        <div
                          className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => startQuiz('comprehensive')}
                        >
                          <div className="text-center space-y-2">
                            <div className="text-2xl">🎯</div>
                            <h3 className="font-semibold">Quiz toàn diện</h3>
                            <p className="text-sm text-gray-600">10 câu hỏi chi tiết</p>
                            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                              Bắt đầu
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : !showQuizResults ? (
                  <div className="bg-white rounded-lg border">
                    <div className="px-4 py-3 border-b flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <span>🧠</span>
                        Câu {currentQuestionIndex + 1}/{quizQuestions.length}
                      </h3>
                      <button
                        onClick={resetQuiz}
                        className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
                      >
                        Thoát
                      </button>
                    </div>
                    <div className="p-6">
                      {(() => {
                        const question = quizQuestions[currentQuestionIndex];
                        if (!question) return null;

                        return (
                          <div className="space-y-4">
                            <div className="flex gap-2 mb-3">
                              <span className="px-2 py-1 border rounded text-sm">{question.category}</span>
                              <span className="px-2 py-1 border rounded text-sm">{question.level}</span>
                            </div>

                            <h3 className="text-lg font-semibold">{question.question}</h3>

                            {question.code && (
                              <div className="bg-gray-900 rounded-lg p-4 my-4">
                                <pre className="text-gray-100 text-sm overflow-x-auto whitespace-pre-wrap">
                                  {question.code}
                                </pre>
                              </div>
                            )}

                            <div className="space-y-2">
                              {question.options.map((option, index) => (
                                <button
                                  key={index}
                                  onClick={() => selectAnswer(index)}
                                  className={`w-full text-left p-3 border rounded-lg ${
                                    selectedAnswers[currentQuestionIndex] === index
                                      ? 'border-blue-500 bg-blue-50'
                                      : 'border-gray-300 hover:border-gray-400'
                                  }`}
                                >
                                  <span className="mr-2 font-semibold">
                                    {String.fromCharCode(65 + index)}.
                                  </span>
                                  {option}
                                </button>
                              ))}
                            </div>

                            <div className="flex justify-between pt-4">
                              <div className="text-sm text-gray-500">
                                Đã chọn:{' '}
                                {selectedAnswers[currentQuestionIndex] !== undefined ? 'Có' : 'Chưa'}
                              </div>
                              <button
                                onClick={nextQuestion}
                                disabled={selectedAnswers[currentQuestionIndex] === undefined}
                                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
                              >
                                {currentQuestionIndex === quizQuestions.length - 1
                                  ? 'Hoàn thành'
                                  : 'Câu tiếp theo'}
                              </button>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg border">
                    <div className="px-4 py-3 border-b">
                      <h3 className="font-semibold flex items-center gap-2">
                        <span>✅</span>
                        Kết quả Quiz
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="text-center space-y-4 mb-6">
                        <div className="text-3xl font-bold text-blue-600">{calculateScore()}%</div>
                        <p className="text-gray-600">
                          Bạn đã trả lời đúng{' '}
                          {
                            quizQuestions.filter(
                              (q, index) => selectedAnswers[index] === q.correctAnswer
                            ).length
                          }
                          /{quizQuestions.length} câu
                        </p>
                      </div>

                      {/* Detailed Results */}
                      <div className="space-y-4 mb-6">
                        {quizQuestions.map((question, index) => {
                          const isCorrect = selectedAnswers[index] === question.correctAnswer;
                          const userAnswer = selectedAnswers[index];

                          return (
                            <div key={question.id} className="border rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <span className="text-lg">
                                  {isCorrect ? '✅' : '❌'}
                                </span>
                                <div className="flex-1">
                                  <p className="font-medium mb-2">{question.question}</p>
                                  <div className="text-sm space-y-1">
                                    <p>
                                      <span className="font-medium">Bạn chọn:</span>{' '}
                                      <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                                        {String.fromCharCode(65 + userAnswer)} -{' '}
                                        {question.options[userAnswer]}
                                      </span>
                                    </p>
                                    {!isCorrect && (
                                      <p>
                                        <span className="font-medium">Đáp án đúng:</span>{' '}
                                        <span className="text-green-600">
                                          {String.fromCharCode(65 + question.correctAnswer)} -{' '}
                                          {question.options[question.correctAnswer]}
                                        </span>
                                      </p>
                                    )}
                                    <p className="text-gray-600 mt-2">{question.explanation}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => startQuiz(currentQuiz!)}
                          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                        >
                          Làm lại
                        </button>
                        <button
                          onClick={resetQuiz}
                          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Về trang chính
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Questions Tab */}
            {activeTab === 'questions' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold flex items-center gap-2">
                      <span>❓</span>
                      Ngân hàng câu hỏi
                    </h3>
                  </div>
                  <div className="p-6">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Loại câu hỏi:</label>
                        <select
                          value={selectedType}
                          onChange={e => setSelectedType(e.target.value)}
                          className="border rounded px-3 py-1 text-sm"
                        >
                          <option value="all">Tất cả</option>
                          <option value="theory">Lý thuyết</option>
                          <option value="practice">Thực hành</option>
                          <option value="interview">Phỏng vấn</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Độ khó:</label>
                        <select
                          value={selectedLevel}
                          onChange={e => setSelectedLevel(e.target.value)}
                          className="border rounded px-3 py-1 text-sm"
                        >
                          <option value="all">Tất cả</option>
                          <option value="beginner">Cơ bản</option>
                          <option value="intermediate">Trung bình</option>
                          <option value="advanced">Nâng cao</option>
                        </select>
                      </div>
                    </div>

                    {/* Questions List */}
                    <div className="space-y-4">
                      {getFilteredQuestions().map((question, index) => (
                        <div key={question.id} className="border rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-1 border rounded text-sm">{question.category}</span>
                              <span className="px-2 py-1 bg-gray-100 rounded text-sm">{question.level}</span>
                            </div>
                          </div>

                          <h3 className="font-semibold mt-3 mb-2">{question.question}</h3>

                          {question.code && (
                            <div className="bg-gray-900 rounded-lg p-3 mb-3">
                              <pre className="text-gray-100 text-sm overflow-x-auto whitespace-pre-wrap">
                                {question.code}
                              </pre>
                            </div>
                          )}

                          <div className="space-y-1 mb-3">
                            {question.options.map((option, optionIndex) => (
                              <div key={optionIndex} className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-500 w-6">
                                  {String.fromCharCode(65 + optionIndex)}.
                                </span>
                                <span
                                  className={
                                    optionIndex === question.correctAnswer
                                      ? 'text-green-600 font-medium'
                                      : ''
                                  }
                                >
                                  {option}
                                </span>
                                {optionIndex === question.correctAnswer && (
                                  <span className="text-green-500">✅</span>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded p-3">
                            <div className="flex items-start gap-2">
                              <span className="text-blue-600">ℹ️</span>
                              <div>
                                <span className="text-sm font-medium text-blue-800">Giải thích:</span>
                                <p className="text-sm text-blue-700 mt-1">{question.explanation}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Practice Tab */}
            {activeTab === 'practice' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold flex items-center gap-2">
                      <span>⚡</span>
                      Bài tập thực hành
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {PRACTICAL_EXERCISES.map((exercise, index) => (
                        <div key={exercise.id} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-lg">{exercise.title}</h3>
                              <p className="text-gray-600 text-sm">{exercise.description}</p>
                            </div>
                            <span
                              className={`px-2 py-1 rounded text-xs ${
                                exercise.difficulty === 'easy'
                                  ? 'bg-green-100 text-green-800'
                                  : exercise.difficulty === 'medium'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {exercise.difficulty === 'easy'
                                ? 'Dễ'
                                : exercise.difficulty === 'medium'
                                ? 'Trung bình'
                                : 'Khó'}
                            </span>
                          </div>

                          <div className="bg-gray-900 rounded-lg p-4 mb-4">
                            <pre className="text-gray-100 text-sm overflow-x-auto whitespace-pre-wrap">
                              {exercise.code}
                            </pre>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <span className="text-yellow-600">💡</span>
                              <div>
                                <span className="text-sm font-medium text-yellow-800">Gợi ý:</span>
                                <p className="text-sm text-yellow-700 mt-1">{exercise.hint}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </JSLayout>
  );
}

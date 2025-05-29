'use client';

import { useState } from 'react';
import JSLayout from '../components/JSLayout';
import { CodeBlock } from './CodeBlock';
import { JS_NAVIGATIONS, JS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/jsData';
import {
  BEST_PRACTICES,
  CODE_EXAMPLES,
  COMMON_MISTAKES,
  FUNCTION_CATEGORIES,
  FUNCTION_COMPARISON,
  FUNCTION_CONCEPTS,
  getExamplesByType,
  searchExamples,
  type CodeExample,
} from './data';
import {
  FUNCTIONS_QUESTIONS,
  QUESTION_CATEGORIES,
  QUESTION_LEVELS,
  getQuestionsByCategory,
  getQuestionsByLevel,
  getRandomQuestions,
  searchQuestions,
  type Question,
} from './questions';

export default function FunctionsComprehensivePage() {
  // Quiz state
  const [currentQuiz, setCurrentQuiz] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | number)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('theory');

  // Filter states
  const [exampleCategory, setExampleCategory] = useState<string>('all');
  const [questionCategory, setQuestionCategory] = useState<string>('all');
  const [questionLevel, setQuestionLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // UI states
  const [showOutput, setShowOutput] = useState<{ [key: string]: boolean }>({});

  // Initialize quiz
  const startQuiz = () => {
    const quiz = getRandomQuestions(10);
    setCurrentQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizCompleted(false);
  };

  // Handle quiz answer selection
  const handleAnswerSelect = (answer: string | number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  // Move to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  // Calculate quiz score
  const calculateScore = () => {
    let correct = 0;
    currentQuiz.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: currentQuiz.length,
      percentage: Math.round((correct / currentQuiz.length) * 100),
    };
  };

  // Filter examples
  const getFilteredExamples = (): CodeExample[] => {
    let filtered = exampleCategory === 'all' ? CODE_EXAMPLES : getExamplesByType(exampleCategory);

    if (searchTerm) {
      filtered = searchExamples(searchTerm);
    }

    return filtered;
  };

  // Filter questions
  const getFilteredQuestions = (): Question[] => {
    let filtered = FUNCTIONS_QUESTIONS;

    if (questionCategory !== 'all') {
      filtered = getQuestionsByCategory(questionCategory);
    }

    if (questionLevel !== 'all') {
      filtered = getQuestionsByLevel(questionLevel);
    }

    if (searchTerm) {
      filtered = searchQuestions(searchTerm);
    }

    return filtered;
  };

  const currentLesson = 'functions-comprehensive';
  const navigation = JS_NAVIGATIONS[currentLesson];
  const progress = getProgressForLesson(currentLesson);

  return (
    <JSLayout
      currentLesson={currentLesson}
      tableOfContents={JS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                JavaScript Functions - Comprehensive Guide
              </h1>
              <p className="text-gray-600 mt-2">
                Master JavaScript functions from basics to advanced concepts including closures,
                higher-order functions, async/await, and functional programming patterns.
              </p>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-gray-300 text-sm">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Lesson 3/8
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-gray-300 text-sm">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Chapter 2: Functions
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow border">
          <div className="border-b">
            <div className="flex">
              {[
                { id: 'theory', label: 'Theory', icon: '📚' },
                { id: 'examples', label: 'Examples', icon: '💻' },
                { id: 'quiz', label: 'Quiz', icon: '🧠' },
                { id: 'questions', label: 'Questions', icon: '❓' },
                { id: 'practice', label: 'Practice', icon: '⚡' },
              ].map(tab => (
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
                {/* Core Concepts */}
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold">Core Function Concepts</h3>
                    <p className="text-sm text-gray-600">
                      Essential concepts every JavaScript developer should understand
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      {FUNCTION_CONCEPTS.map((concept, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">{concept.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{concept.description}</p>
                          {concept.example && (
                            <CodeBlock
                              code={concept.example}
                              language="javascript"
                              showLineNumbers={false}
                              id={`concept-${index}`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Function Comparison */}
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold">Function Types Comparison</h3>
                    <p className="text-sm text-gray-600">
                      Key differences between function declarations, expressions, and arrow
                      functions
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 p-3 text-left">Aspect</th>
                            <th className="border border-gray-300 p-3 text-left">
                              Function Declaration
                            </th>
                            <th className="border border-gray-300 p-3 text-left">
                              Function Expression
                            </th>
                            <th className="border border-gray-300 p-3 text-left">Arrow Function</th>
                          </tr>
                        </thead>
                        <tbody>
                          {FUNCTION_COMPARISON.map((row, index) => (
                            <tr key={index}>
                              <td className="border border-gray-300 p-3 font-medium">
                                {row.feature}
                              </td>
                              <td className="border border-gray-300 p-3">{row.declaration}</td>
                              <td className="border border-gray-300 p-3">{row.expression}</td>
                              <td className="border border-gray-300 p-3">{row.arrow}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold text-green-600">Best Practices</h3>
                    <p className="text-sm text-gray-600">
                      Follow these guidelines for clean, maintainable function code
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {BEST_PRACTICES.map((practice, index) => (
                        <div key={index} className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-green-700">{practice.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{practice.description}</p>
                          <CodeBlock
                            code={practice.example}
                            language="javascript"
                            id={`practice-${index}`}
                            showLineNumbers={false}
                            caption="Good Practice Example"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Common Mistakes */}
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold text-red-600">Common Mistakes</h3>
                    <p className="text-sm text-gray-600">
                      Avoid these frequent pitfalls when working with functions
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {COMMON_MISTAKES.map((mistake, index) => (
                        <div key={index} className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-red-700">{mistake.mistake}</h4>
                          <div className="mt-2 space-y-2">
                            <div>
                              <CodeBlock
                                code={mistake.example}
                                language="javascript"
                                id={`mistake-${index}`}
                                showLineNumbers={false}
                                caption="⚠️ Problem"
                              />
                            </div>
                            <div>
                              <CodeBlock
                                code={mistake.solution}
                                language="javascript"
                                id={`solution-${index}`}
                                showLineNumbers={false}
                                caption="✅ Solution"
                              />
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
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      Function Examples
                    </h3>
                  </div>
                  <div className="p-4">
                    {/* Filter Controls */}
                    <div className="flex flex-wrap gap-4 items-center mb-6">
                      <select
                        value={exampleCategory}
                        onChange={e => setExampleCategory(e.target.value)}
                        className="border rounded px-3 py-1 text-sm"
                      >
                        <option value="all">All Categories</option>
                        {FUNCTION_CATEGORIES.map(category => (
                          <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </option>
                        ))}
                      </select>

                      <div className="relative flex-1 max-w-sm">
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder="Search examples..."
                          value={searchTerm}
                          onChange={e => setSearchTerm(e.target.value)}
                          className="pl-10 pr-3 py-1 border rounded text-sm w-full"
                        />
                      </div>

                      <button
                        onClick={() => {
                          setExampleCategory('all');
                          setSearchTerm('');
                        }}
                        className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
                      >
                        <svg
                          className="h-4 w-4 mr-2 inline"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        Reset Filters
                      </button>
                    </div>

                    {/* Examples Grid */}
                    <div className="grid gap-6">
                      {getFilteredExamples().map(example => (
                        <div key={example.id} className="border rounded-lg">
                          <div className="px-4 py-3 border-b">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold">{example.title}</h4>
                              <span className="inline-block px-2 py-1 rounded border text-sm">
                                {example.type.charAt(0).toUpperCase() + example.type.slice(1)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{example.description}</p>
                          </div>
                          <div className="p-4">
                            <div className="space-y-4">
                              <CodeBlock
                                code={example.code}
                                language="javascript"
                                id={example.id}
                                caption={example.title}
                                output={example.output}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quiz Tab */}
            {activeTab === 'quiz' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold flex items-center gap-2">
                      <span>🧠</span>
                      Interactive Functions Quiz
                    </h3>
                    <p className="text-sm text-gray-600">
                      Test your understanding with this interactive quiz
                    </p>
                  </div>
                  <div className="p-6">
                    {currentQuiz.length === 0 ? (
                      <div className="text-center py-8">
                        <h3 className="text-lg font-semibold mb-4">
                          Ready to test your knowledge?
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Take a 10-question quiz covering all aspects of JavaScript functions.
                        </p>
                        <button
                          onClick={startQuiz}
                          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Start Quiz
                        </button>
                      </div>
                    ) : showResults ? (
                      <div className="text-center py-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
                          <div className="text-4xl font-bold text-blue-600 mb-4">
                            {calculateScore().percentage}%
                          </div>
                          <p className="text-lg text-gray-600">
                            You got {calculateScore().correct} out of {calculateScore().total}{' '}
                            questions correct
                          </p>
                        </div>

                        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                          {currentQuiz.map((question, index) => {
                            const isCorrect = selectedAnswers[index] === question.correctAnswer;
                            return (
                              <div
                                key={question.id}
                                className={`p-4 rounded-lg border text-left ${
                                  isCorrect
                                    ? 'border-green-500 bg-green-50'
                                    : 'border-red-500 bg-red-50'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <span
                                    className={`text-lg ${
                                      isCorrect ? 'text-green-600' : 'text-red-600'
                                    }`}
                                  >
                                    {isCorrect ? '✅' : '❌'}
                                  </span>
                                  <span className="font-medium">Question {index + 1}</span>
                                </div>
                                <p className="text-sm mb-2">{question.question}</p>
                                {question.code && (
                                  <CodeBlock
                                    code={question.code}
                                    language="javascript"
                                    id={`quiz-result-${question.id}`}
                                    showLineNumbers={false}
                                  />
                                )}
                                <p className="text-xs text-gray-600">{question.explanation}</p>
                              </div>
                            );
                          })}
                        </div>

                        <button
                          onClick={startQuiz}
                          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 mr-2"
                        >
                          <svg
                            className="h-4 w-4 mr-2 inline"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                          Retake Quiz
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">
                              Question {currentQuestionIndex + 1} of {currentQuiz.length}
                            </h3>
                            <span className="px-2 py-1 border rounded text-sm">
                              {currentQuiz[currentQuestionIndex]?.level}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div
                              className="bg-blue-500 h-2 rounded-full transition-all"
                              style={{
                                width: `${
                                  ((currentQuestionIndex + 1) / currentQuiz.length) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>

                        {currentQuiz[currentQuestionIndex] && (
                          <div className="space-y-4">
                            <h4 className="text-lg font-medium">
                              {currentQuiz[currentQuestionIndex].question}
                            </h4>

                            {currentQuiz[currentQuestionIndex].code && (
                              <CodeBlock
                                code={currentQuiz[currentQuestionIndex].code || ''}
                                language="javascript"
                                id={`quiz-question-${currentQuiz[currentQuestionIndex].id}`}
                              />
                            )}

                            <div className="space-y-2">
                              {currentQuiz[currentQuestionIndex].type === 'true-false' ? (
                                <div className="flex gap-4">
                                  <button
                                    onClick={() => handleAnswerSelect('true')}
                                    className={`flex-1 p-3 border rounded ${
                                      selectedAnswers[currentQuestionIndex] === 'true'
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                  >
                                    True
                                  </button>
                                  <button
                                    onClick={() => handleAnswerSelect('false')}
                                    className={`flex-1 p-3 border rounded ${
                                      selectedAnswers[currentQuestionIndex] === 'false'
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                  >
                                    False
                                  </button>
                                </div>
                              ) : (
                                currentQuiz[currentQuestionIndex].options?.map(
                                  (option, optionIndex) => (
                                    <button
                                      key={optionIndex}
                                      onClick={() => handleAnswerSelect(optionIndex)}
                                      className={`w-full text-left p-4 border rounded ${
                                        selectedAnswers[currentQuestionIndex] === optionIndex
                                          ? 'border-blue-500 bg-blue-50'
                                          : 'border-gray-300 hover:border-gray-400'
                                      }`}
                                    >
                                      <span className="mr-3 font-medium">
                                        {String.fromCharCode(65 + optionIndex)}.
                                      </span>
                                      {option}
                                    </button>
                                  )
                                )
                              )}
                            </div>

                            <div className="flex justify-between pt-4">
                              <button
                                disabled={currentQuestionIndex === 0}
                                onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                                className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                Previous
                              </button>
                              <button
                                onClick={nextQuestion}
                                disabled={selectedAnswers[currentQuestionIndex] === undefined}
                                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
                              >
                                {currentQuestionIndex === currentQuiz.length - 1
                                  ? 'Finish Quiz'
                                  : 'Next Question'}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Questions Tab */}
            {activeTab === 'questions' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border">
                  <div className="px-4 py-3 border-b">
                    <h3 className="font-semibold flex items-center gap-2">
                      <span>❓</span>
                      Question Bank
                    </h3>
                  </div>
                  <div className="p-6">
                    {/* Filter Controls */}
                    <div className="flex flex-wrap gap-4 items-center mb-6">
                      <select
                        value={questionCategory}
                        onChange={e => setQuestionCategory(e.target.value)}
                        className="border rounded px-3 py-1 text-sm"
                      >
                        <option value="all">All Categories</option>
                        {QUESTION_CATEGORIES.map(category => (
                          <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </option>
                        ))}
                      </select>

                      <select
                        value={questionLevel}
                        onChange={e => setQuestionLevel(e.target.value)}
                        className="border rounded px-3 py-1 text-sm"
                      >
                        <option value="all">All Levels</option>
                        {QUESTION_LEVELS.map(level => (
                          <option key={level} value={level}>
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                          </option>
                        ))}
                      </select>

                      <div className="relative flex-1 max-w-sm">
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder="Search questions..."
                          value={searchTerm}
                          onChange={e => setSearchTerm(e.target.value)}
                          className="pl-10 pr-3 py-1 border rounded text-sm w-full"
                        />
                      </div>

                      <button
                        onClick={() => {
                          setQuestionCategory('all');
                          setQuestionLevel('all');
                          setSearchTerm('');
                        }}
                        className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
                      >
                        <svg
                          className="h-4 w-4 mr-2 inline"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        Reset Filters
                      </button>
                    </div>

                    {/* Questions List */}
                    <div className="grid gap-4">
                      {getFilteredQuestions().map(question => (
                        <div key={question.id} className="border rounded-lg">
                          <div className="px-4 py-3 border-b">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold">{question.question}</h4>
                              <div className="flex gap-2">
                                <span className="px-2 py-1 border rounded text-sm">
                                  {question.category}
                                </span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                                  {question.level}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            {question.code && (
                              <CodeBlock
                                code={question.code}
                                language="javascript"
                                id={`question-${question.id}`}
                              />
                            )}

                            {question.options && (
                              <div className="space-y-2 mb-4">
                                {question.options.map((option, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <span className="text-sm font-medium w-6">
                                      {String.fromCharCode(65 + index)}.
                                    </span>
                                    <span className="text-sm">{option}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="border-t pt-4">
                              <p className="text-sm text-gray-600">
                                <span className="font-medium">Answer:</span> {question.explanation}
                              </p>
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
                      Practice Exercises
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hands-on coding challenges to reinforce your learning
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Exercise 1: Function Declarations vs Expressions
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Create both a function declaration and function expression that perform
                          the same operation. Test hoisting behavior by calling them before their
                          definitions.
                        </p>
                        <CodeBlock
                          code={`// Try calling these functions before their definitions
console.log(declaration(5)); // Should work
console.log(expression(5)); // Should throw error

// Your code here:
function declaration(x) {
  return x * 2;
}

const expression = function(x) {
  return x * 2;
};`}
                          language="javascript"
                          id="practice-1"
                          caption="Function Declaration vs Expression Exercise"
                        />
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Exercise 2: Create a Counter with Closure
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Build a counter function that uses closure to maintain private state.
                        </p>
                        <CodeBlock
                          code={`// Create a function that returns an object with increment,
// decrement, and getValue methods
function createCounter(initialValue = 0) {
  // Your code here
}

const counter = createCounter(10);
console.log(counter.getValue()); // 10
console.log(counter.increment()); // 11
console.log(counter.decrement()); // 10`}
                          language="javascript"
                          id="practice-2"
                          caption="Counter with Closure Exercise"
                        />
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Exercise 3: Higher-Order Function Practice
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Create a function that takes an array and a transformation function, then
                          returns a new array.
                        </p>
                        <CodeBlock
                          code={`// Create a custom map function
function customMap(array, transformFn) {
  // Your code here
}

const numbers = [1, 2, 3, 4, 5];
const doubled = customMap(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]`}
                          language="javascript"
                          id="practice-3"
                          caption="Higher-Order Function Exercise"
                        />
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Exercise 4: Async Function Chain</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Create async functions that simulate API calls and chain them together.
                        </p>
                        <CodeBlock
                          code={`// Create functions that simulate async operations
async function fetchUser(id) {
  // Simulate API delay
  // Return user object
}

async function fetchUserPosts(userId) {
  // Simulate API delay
  // Return posts array
}

async function getUserWithPosts(userId) {
  // Chain the above functions
  // Return combined data
}`}
                          language="javascript"
                          id="practice-4"
                          caption="Async Function Chain Exercise"
                        />
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Exercise 5: Function Composition</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Create a compose function that combines multiple functions into one.
                        </p>
                        <CodeBlock
                          code={`// Create a compose function
const compose = (...functions) => {
  // Your code here
};

const add5 = x => x + 5;
const multiply3 = x => x * 3;
const subtract2 = x => x - 2;

const combined = compose(subtract2, multiply3, add5);
console.log(combined(10)); // Should output: ((10 + 5) * 3) - 2 = 43`}
                          language="javascript"
                          id="practice-5"
                          caption="Function Composition Exercise"
                        />
                      </div>
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

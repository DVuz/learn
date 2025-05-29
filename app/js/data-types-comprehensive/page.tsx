'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  BookOpen,
  Brain,
  Code2,
  Target,
  TrendingUp,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Play,
  Clock,
  Trophy,
} from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { DATA_TYPE_CONCEPTS, LEARNING_OBJECTIVES } from './data';
import {
  DATA_TYPES_QUESTIONS,
  getRandomQuestions,
  calculateQuizScore,
  getQuizRecommendations,
  type Question,
  type QuizScoreResult,
} from './question';

export default function DataTypesComprehensivePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<(number | string | boolean)[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizScoreResult | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const startQuiz = (questionCount: number = 10) => {
    const questions = getRandomQuestions(questionCount);
    setQuizQuestions(questions);
    setUserAnswers(new Array(questions.length).fill(null));
    setCurrentQuestionIndex(0);
    setQuizStarted(true);
    setQuizCompleted(false);
    setQuizResult(null);
    setShowExplanation(false);
    setActiveTab('quiz');
  };

  const handleAnswer = (answer: number | string | boolean) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    const result = calculateQuizScore(userAnswers, quizQuestions);
    setQuizResult(result);
    setQuizCompleted(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizResult(null);
    setShowExplanation(false);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isAnswered =
    userAnswers[currentQuestionIndex] !== null && userAnswers[currentQuestionIndex] !== undefined;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            JavaScript Data Types - Comprehensive Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master JavaScript data types từ cơ bản đến nâng cao. Hiểu sâu về primitive types,
            reference types, type coercion, memory management và performance optimization.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="concepts" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Concepts
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Examples
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Quiz
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Practice
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Learning Objectives
                </CardTitle>
                <CardDescription>
                  Những gì bạn sẽ học được sau khi hoàn thành chương này
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {LEARNING_OBJECTIVES.map((objective, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg border bg-muted/50"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{objective.title}</h4>
                        <p className="text-sm text-muted-foreground">{objective.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600">
                    {DATA_TYPES_QUESTIONS.length}
                  </CardTitle>
                  <CardDescription>Interactive Questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive quiz với đầy đủ levels từ beginner đến advanced
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-green-600">
                    {DATA_TYPE_CONCEPTS.length}
                  </CardTitle>
                  <CardDescription>Core Concepts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Các concepts quan trọng với examples và explanations chi tiết
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-600">7</CardTitle>
                  <CardDescription>Data Type Categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Primitives, Objects, Coercion, Type Checking và nhiều hơn nữa
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Concepts Tab */}
          <TabsContent value="concepts" className="space-y-6">
            {DATA_TYPE_CONCEPTS.map((concept, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{concept.name}</CardTitle>
                    <Badge variant={concept.difficulty === 'Cơ bản' ? 'secondary' : 'default'}>
                      {concept.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>{concept.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {concept.example && (
                    <CodeBlock
                      code={concept.example}
                      language="javascript"
                      caption={`${concept.name} - Example`}
                      output={concept.output}
                    />
                  )}

                  {concept.keyPoints && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Points:</h4>
                      <ul className="space-y-1">
                        {concept.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {concept.useCases && (
                    <div>
                      <h4 className="font-semibold mb-2">Use Cases:</h4>
                      <ul className="space-y-1">
                        {concept.useCases.map((useCase, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-6">
            <Alert>
              <Code2 className="h-4 w-4" />
              <AlertDescription>
                Explore interactive code examples. Click the play button to see outputs!
              </AlertDescription>
            </Alert>

            {DATA_TYPE_CONCEPTS.filter(concept => concept.example).map((concept, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    {concept.name} - Interactive Example
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={concept.example!}
                    language="javascript"
                    caption={concept.name}
                    output={concept.output}
                    id={`example-${index}`}
                  />
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Quiz Tab */}
          <TabsContent value="quiz" className="space-y-6">
            {!quizStarted ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    JavaScript Data Types Quiz
                  </CardTitle>
                  <CardDescription>
                    Test your knowledge với comprehensive quiz từ beginner đến advanced level
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <Button onClick={() => startQuiz(5)} variant="outline">
                      Quick Quiz (5 questions)
                    </Button>
                    <Button onClick={() => startQuiz(10)}>Standard Quiz (10 questions)</Button>
                    <Button onClick={() => startQuiz(20)} variant="secondary">
                      Comprehensive (20 questions)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : quizCompleted ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Quiz Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {quizResult && (
                    <>
                      <div className="text-center space-y-2">
                        <div className="text-4xl font-bold text-primary">
                          {quizResult.percentage}%
                        </div>
                        <p className="text-muted-foreground">
                          {quizResult.correct} out of {quizResult.total} questions correct
                        </p>
                        <div className="text-sm">
                          Points: {quizResult.points} / {quizResult.maxPoints}
                        </div>
                      </div>

                      <Progress value={quizResult.percentage} className="w-full" />

                      <div className="space-y-2">
                        <h4 className="font-semibold">Recommendations:</h4>
                        <ul className="space-y-1">
                          {getQuizRecommendations(quizResult.percentage).map((rec, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={resetQuiz} variant="outline">
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Take Another Quiz
                        </Button>
                        <Button onClick={() => setActiveTab('practice')}>
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Continue Practice
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>
                      Question {currentQuestionIndex + 1} of {quizQuestions.length}
                    </CardTitle>
                    <Badge variant="outline">{currentQuestion?.category}</Badge>
                  </div>
                  <Progress
                    value={((currentQuestionIndex + 1) / quizQuestions.length) * 100}
                    className="w-full"
                  />
                </CardHeader>
                <CardContent className="space-y-6">
                  {currentQuestion && (
                    <>
                      <div>
                        <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>

                        {currentQuestion.code && (
                          <CodeBlock
                            code={currentQuestion.code}
                            language="javascript"
                            caption="Code to analyze"
                          />
                        )}
                      </div>

                      <div className="space-y-2">
                        {currentQuestion?.options?.map((option, index) => (
                          <Button
                            key={index}
                            variant={
                              userAnswers[currentQuestionIndex] === index ? 'default' : 'outline'
                            }
                            className="w-full justify-start text-left h-auto p-4"
                            onClick={() => handleAnswer(index)}
                          >
                            <span className="font-mono text-sm bg-muted px-2 py-1 rounded mr-3">
                              {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                          </Button>
                        ))}
                      </div>

                      {isAnswered && (
                        <div className="space-y-4">
                          <Button
                            onClick={() => setShowExplanation(!showExplanation)}
                            variant="outline"
                          >
                            {showExplanation ? 'Hide' : 'Show'} Explanation
                          </Button>

                          {showExplanation && (
                            <Alert>
                              <Brain className="h-4 w-4" />
                              <AlertDescription>
                                <strong>Explanation:</strong> {currentQuestion.explanation}
                              </AlertDescription>
                            </Alert>
                          )}

                          <Button onClick={nextQuestion} className="w-full">
                            {currentQuestionIndex === quizQuestions.length - 1
                              ? 'Complete Quiz'
                              : 'Next Question'}
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-6">
            <Alert>
              <Clock className="h-4 w-4" />
              <AlertDescription>
                Practice makes perfect! Here are some additional exercises and challenges.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Coming Soon - Interactive Practice Exercises</CardTitle>
                <CardDescription>
                  Advanced practice scenarios, coding challenges, và real-world applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This section will include interactive coding exercises, debugging challenges, và
                  real-world scenarios to practice your JavaScript data types knowledge.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

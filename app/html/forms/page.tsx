'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Code,
  Copy,
  FileText,
  Eye,
  HelpCircle,
  Info,
  Layout,
  Lightbulb,
  Send,
  Star,
  Target,
  Users,
  Zap,
  FormInput,
} from 'lucide-react';
import { useState } from 'react';
import HTMLLayout from '../components/HTMLLayout';
import {
  HTML_NAVIGATIONS,
  HTML_TABLE_OF_CONTENTS,
  getProgressForLesson,
} from '../constants/htmlData';
import {
  advancedConcepts,
  bestPractices,
  codeExamples,
  formsFAQs,
  formsTheory,
} from './formsData';

const navigation = HTML_NAVIGATIONS.forms;
const progress = getProgressForLesson('forms');

export default function HTMLFormsPage() {
  const [activeSection, setActiveSection] = useState('theory');
  const [expandedElements, setExpandedElements] = useState<Record<string, boolean>>({});
  const [expandedFAQs, setExpandedFAQs] = useState<Record<string, boolean>>({});
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const sections = [
    { id: 'theory', label: 'Lý thuyết cơ bản', icon: BookOpen },
    { id: 'elements', label: 'Phần tử form', icon: Target },
    { id: 'advanced', label: 'Khái niệm nâng cao', icon: Lightbulb },
    { id: 'best-practices', label: 'Thực hành tốt nhất', icon: Star },
    { id: 'examples', label: 'Ví dụ thực tế', icon: Code },
    { id: 'faq', label: 'Câu hỏi thường gặp', icon: HelpCircle },
  ];

  const toggleElement = (elementName: string) => {
    setExpandedElements(prev => ({
      ...prev,
      [elementName]: !prev[elementName],
    }));
  };

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQs(prev => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <HTMLLayout
      currentLesson="HTML Forms"
      tableOfContents={HTML_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 text-lg">
            <FormInput className="w-5 h-5 mr-2" />
            Form HTML
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900">
            📝 HTML Forms - Thu thập dữ liệu người dùng
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Học cách tạo form HTML hiệu quả để thu thập thông tin từ người dùng một cách chuyên nghiệp và dễ sử dụng
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 p-4 bg-white rounded-lg shadow-sm border">
          {sections.map(section => {
            const Icon = section.icon;
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'outline'}
                onClick={() => setActiveSection(section.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {section.label}
              </Button>
            );
          })}
        </div>

        {/* Theory Section */}
        {activeSection === 'theory' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-purple-600" />
              {formsTheory.introduction.title}
            </h2>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">Tại sao Form HTML quan trọng?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {formsTheory.introduction.content.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                      <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-purple-800 font-bold text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-purple-900">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">
                  Tầm quan trọng của HTML Forms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {formsTheory.introduction.importance.map((importance, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-blue-900">{importance}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Form Types */}
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <FileText className="w-8 h-8 text-purple-600" />
              Các loại Form và ứng dụng thực tế
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {formsTheory.formTypes.map((formType, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-800">{formType.type}</CardTitle>
                    <p className="text-gray-600">{formType.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Độ phức tạp:</span>
                      <Badge
                        className={
                          formType.complexity === 'Thấp'
                            ? 'bg-green-100 text-green-800'
                            : formType.complexity === 'Trung bình'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }
                      >
                        {formType.complexity}
                      </Badge>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Trường hợp sử dụng:</h4>
                      <p className="text-gray-700 text-sm">{formType.useCase}</p>
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Khả năng tiếp cận:</strong> {formType.accessibilityNotes}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Elements Section */}
        {activeSection === 'elements' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Target className="w-8 h-8 text-purple-600" />
              Các phần tử Form HTML
            </h2>

            <div className="space-y-4">
              {formsTheory.elements.map((element, index) => (
                <Card key={index} className="shadow-lg overflow-hidden">
                  <CardHeader
                    className="cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors"
                    onClick={() => toggleElement(element.element)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FormInput className="w-6 h-6 text-purple-600" />
                        <div>
                          <CardTitle className="text-lg">&lt;{element.element}&gt;</CardTitle>
                          <p className="text-gray-600 text-sm">{element.description}</p>
                        </div>
                      </div>
                      {expandedElements[element.element] ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>

                  {expandedElements[element.element] && (
                    <CardContent className="space-y-4 pt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Mục đích:</h4>
                          <p className="text-gray-700 text-sm">{element.purpose}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Phương pháp hiện đại:
                          </h4>
                          <p className="text-gray-700 text-sm">{element.modernApproach}</p>
                        </div>
                      </div>

                      {element.attributes.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Thuộc tính quan trọng:</h4>
                          <ul className="space-y-1">
                            {element.attributes.map((attr, attrIndex) => (
                              <li
                                key={attrIndex}
                                className="text-gray-700 text-sm flex items-start gap-2"
                              >
                                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                {attr}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Advanced Concepts Section */}
        {activeSection === 'advanced' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-purple-600" />
              Khái niệm Form nâng cao
            </h2>

            <div className="space-y-6">
              {advancedConcepts.map((concept, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-800">{concept.title}</CardTitle>
                    <p className="text-gray-600">{concept.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Tabs defaultValue="code" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="code">Mã HTML/JS</TabsTrigger>
                        <TabsTrigger value="usecase">Trường hợp sử dụng</TabsTrigger>
                      </TabsList>

                      <TabsContent value="code" className="mt-4">
                        <div className="relative">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{concept.example}</code>
                          </pre>
                          <Button
                            size="sm"
                            variant="outline"
                            className="absolute top-2 right-2"
                            onClick={() => copyCode(concept.example, `advanced-${index}`)}
                          >
                            {copiedCode === `advanced-${index}` ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </TabsContent>

                      <TabsContent value="usecase" className="mt-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">Ứng dụng thực tế:</h4>
                          <p className="text-blue-800">{concept.useCase}</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Best Practices Section */}
        {activeSection === 'best-practices' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Star className="w-8 h-8 text-purple-600" />
              Thực hành tốt nhất cho Form HTML
            </h2>

            <div className="space-y-8">
              {Object.entries(bestPractices).map(([category, practices], categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 capitalize flex items-center gap-2">
                    {category === 'semantic' && <Layout className="w-6 h-6 text-blue-600" />}
                    {category === 'accessibility' && <Users className="w-6 h-6 text-green-600" />}
                    {category === 'performance' && <Zap className="w-6 h-6 text-orange-600" />}
                    {category === 'semantic'
                      ? 'Ngữ nghĩa'
                      : category === 'accessibility'
                      ? 'Khả năng tiếp cận'
                      : category === 'performance'
                      ? 'Hiệu suất'
                      : category}
                  </h3>

                  <div className="grid gap-4">
                    {practices.map((practice, practiceIndex) => (
                      <Card key={practiceIndex} className="shadow-md">
                        <CardHeader>
                          <CardTitle className="text-lg">{practice.title}</CardTitle>
                          <p className="text-gray-600">{practice.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Ví dụ:</h5>
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm block overflow-x-auto">
                              {practice.example}
                            </code>
                          </div>
                          <Alert>
                            <CheckCircle className="h-4 w-4" />
                            <AlertDescription>
                              <strong>Lợi ích:</strong> {practice.benefit}
                            </AlertDescription>
                          </Alert>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Examples Section */}
        {activeSection === 'examples' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Code className="w-8 h-8 text-purple-600" />
              Ví dụ Form thực tế
            </h2>

            <div className="space-y-8">
              {codeExamples.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>

                  <div className="grid gap-6">
                    {category.examples.map((example, exampleIndex) => (
                      <Card key={exampleIndex} className="shadow-lg">
                        <CardHeader>
                          <CardTitle className="text-xl text-purple-800">{example.title}</CardTitle>
                          <p className="text-gray-600">{example.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <Tabs defaultValue="code" className="w-full">                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="preview">Xem trước</TabsTrigger>
                        <TabsTrigger value="code">Mã HTML</TabsTrigger>
                        <TabsTrigger value="explanation">Giải thích</TabsTrigger>
                      </TabsList>

                      <TabsContent value="preview" className="mt-4">
                        <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            Xem trước Form:
                          </h4>
                          <div
                            className="form-preview"
                            dangerouslySetInnerHTML={{ __html: example.code.replace(/onclick="[^"]*"/g, '') }}
                          />
                          <style jsx>{`
                            .form-preview {
                              font-family: system-ui, -apple-system, sans-serif;
                            }
                            .form-preview .form-group {
                              margin-bottom: 1rem;
                            }
                            .form-preview label {
                              display: block;
                              margin-bottom: 0.5rem;
                              font-weight: 500;
                              color: #374151;
                            }
                            .form-preview input,
                            .form-preview textarea,
                            .form-preview select {
                              width: 100%;
                              padding: 0.5rem;
                              border: 1px solid #d1d5db;
                              border-radius: 0.375rem;
                              font-size: 0.875rem;
                            }
                            .form-preview input:focus,
                            .form-preview textarea:focus,
                            .form-preview select:focus {
                              outline: 2px solid #8b5cf6;
                              outline-offset: 2px;
                              border-color: #8b5cf6;
                            }
                            .form-preview button {
                              background-color: #8b5cf6;
                              color: white;
                              padding: 0.5rem 1rem;
                              border: none;
                              border-radius: 0.375rem;
                              font-weight: 500;
                              cursor: pointer;
                              margin-top: 1rem;
                            }
                            .form-preview button:hover {
                              background-color: #7c3aed;
                            }
                            .form-preview fieldset {
                              border: 1px solid #d1d5db;
                              border-radius: 0.5rem;
                              padding: 1rem;
                              margin-bottom: 1rem;
                            }
                            .form-preview legend {
                              font-weight: 600;
                              padding: 0 0.5rem;
                              color: #6b7280;
                            }
                            .form-preview small {
                              color: #6b7280;
                              font-size: 0.75rem;
                              display: block;
                              margin-top: 0.25rem;
                            }
                            .form-preview input[type="checkbox"],
                            .form-preview input[type="radio"] {
                              width: auto;
                              margin-right: 0.5rem;
                            }
                            .form-preview output {
                              margin-left: 0.5rem;
                              font-weight: 500;
                              color: #8b5cf6;
                            }
                          `}</style>
                          <Alert className="mt-4">
                            <Info className="h-4 w-4" />
                            <AlertDescription>
                              <strong>Lưu ý:</strong> Đây là bản xem trước để minh họa. Form thực tế cần xử lý submission và validation phía server.
                            </AlertDescription>
                          </Alert>
                        </div>
                      </TabsContent>

                      <TabsContent value="code" className="mt-4">
                        <div className="relative">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm max-h-96">
                            <code>{example.code}</code>
                          </pre>
                          <Button
                            size="sm"
                            variant="outline"
                            className="absolute top-2 right-2"
                            onClick={() => copyCode(example.code, `example-${categoryIndex}-${exampleIndex}`)}
                          >
                            {copiedCode === `example-${categoryIndex}-${exampleIndex}` ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </TabsContent>

                      <TabsContent value="explanation" className="mt-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-900 mb-2">Giải thích chi tiết:</h4>
                          <p className="text-purple-800">{example.explanation}</p>
                        </div>
                      </TabsContent>
                          </Tabs>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {activeSection === 'faq' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-purple-600" />
              Câu hỏi thường gặp về Form HTML
            </h2>

            <div className="space-y-4">
              {formsFAQs.map((faq, index) => (
                <Card key={index} className="shadow-lg overflow-hidden">
                  <CardHeader
                    className="cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors"
                    onClick={() => toggleFAQ(faq.id.toString())}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Badge
                          className={
                            faq.level === 'junior'
                              ? 'bg-green-100 text-green-800'
                              : faq.level === 'mid'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }
                        >
                          {faq.level === 'junior' ? 'Cơ bản' : faq.level === 'mid' ? 'Trung bình' : 'Nâng cao'}
                        </Badge>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                        </div>
                      </div>
                      {expandedFAQs[faq.id] ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>

                  {expandedFAQs[faq.id] && (
                    <CardContent className="pt-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-800">{faq.answer}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {faq.category}
                          </Badge>
                          {faq.detailed && (
                            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                              Chi tiết
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Interactive Demo */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Send className="w-6 h-6 text-purple-600" />
            Demo Form tương tác
          </h3>
          <p className="text-gray-700 mb-6">
            Thử nghiệm với form demo thực tế để hiểu rõ hơn về các concepts đã học:
          </p>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-purple-800">Form Liên hệ Demo</CardTitle>
              <p className="text-gray-600">Hãy thử nhập thông tin và xem validation hoạt động như thế nào</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Form đã được gửi thành công! (Đây chỉ là demo)');
              }}>
                <fieldset className="border border-gray-300 rounded-lg p-4">
                  <legend className="px-2 font-semibold text-gray-700">Thông tin cá nhân</legend>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="demo-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Họ tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="demo-name"
                        name="name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Nhập họ tên của bạn"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="demo-email"
                        name="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="demo-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="demo-phone"
                      name="phone"
                      pattern="[0-9]{10,11}"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="0123456789"
                    />
                    <small className="text-gray-500">Nhập 10-11 chữ số</small>
                  </div>
                </fieldset>

                <fieldset className="border border-gray-300 rounded-lg p-4">
                  <legend className="px-2 font-semibold text-gray-700">Nội dung liên hệ</legend>

                  <div className="mb-4">
                    <label htmlFor="demo-subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Chủ đề
                    </label>
                    <select
                      id="demo-subject"
                      name="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="general">Thông tin chung</option>
                      <option value="support">Hỗ trợ kỹ thuật</option>
                      <option value="feedback">Góp ý</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="demo-priority" className="block text-sm font-medium text-gray-700 mb-2">
                      Mức độ ưu tiên: <span id="priority-value" className="text-purple-600 font-semibold">Trung bình</span>
                    </label>
                    <input
                      type="range"
                      id="demo-priority"
                      name="priority"
                      min="1"
                      max="5"
                      defaultValue="3"
                      className="w-full"
                      onChange={(e) => {
                        const value = e.target.value;
                        const labels = ['Rất thấp', 'Thấp', 'Trung bình', 'Cao', 'Rất cao'];
                        document.getElementById('priority-value')!.textContent = labels[parseInt(value) - 1];
                      }}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Thấp</span>
                      <span>Cao</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="demo-message" className="block text-sm font-medium text-gray-700 mb-1">
                      Tin nhắn <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="demo-message"
                      name="message"
                      rows={4}
                      required
                      maxLength={500}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                      onChange={(e) => {
                        const remaining = 500 - e.target.value.length;
                        document.getElementById('char-count')!.textContent = `${remaining} ký tự còn lại`;
                      }}
                    />
                    <div className="flex justify-between items-center mt-1">
                      <small className="text-gray-500">Tối đa 500 ký tự</small>
                      <small id="char-count" className="text-gray-500">500 ký tự còn lại</small>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="border border-gray-300 rounded-lg p-4">
                  <legend className="px-2 font-semibold text-gray-700">Tùy chọn thêm</legend>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="demo-newsletter"
                        name="newsletter"
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="demo-newsletter" className="ml-2 text-sm text-gray-700">
                        Đăng ký nhận bản tin
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="demo-updates"
                        name="updates"
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="demo-updates" className="ml-2 text-sm text-gray-700">
                        Nhận thông báo cập nhật sản phẩm
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="demo-terms"
                        name="terms"
                        required
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="demo-terms" className="ml-2 text-sm text-gray-700">
                        Tôi đồng ý với <a href="#" className="text-purple-600 hover:text-purple-800">điều khoản sử dụng</a> <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Gửi tin nhắn
                  </button>
                  <button
                    type="reset"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Xóa form
                  </button>
                </div>
              </form>

              <Alert className="mt-6">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Hướng dẫn:</strong> Hãy thử nhập thông tin không hợp lệ để xem validation hoạt động.
                  Ví dụ: bỏ trống các field bắt buộc, nhập email sai format, hoặc nhập số điện thoại không đúng pattern.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </HTMLLayout>
  );
}

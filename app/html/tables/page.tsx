'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart3,
  BookOpen,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Code,
  Copy,
  Database,
  Eye,
  Grid,
  HelpCircle,
  Info,
  Layout,
  Lightbulb,
  Star,
  Table,
  Target,
  Users,
  Zap,
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
  tablesFAQs,
  tablesTheory,
} from './data/tablesData';

const navigation = HTML_NAVIGATIONS.tables;
const progress = getProgressForLesson('tables');

export default function HTMLTablesPage() {
  const [activeSection, setActiveSection] = useState('theory');
  const [expandedElements, setExpandedElements] = useState<Record<string, boolean>>({});
  const [expandedFAQs, setExpandedFAQs] = useState<Record<string, boolean>>({});
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const sections = [
    { id: 'theory', label: 'Lý thuyết cơ bản', icon: BookOpen },
    { id: 'elements', label: 'Phần tử bảng', icon: Target },
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
      currentLesson="HTML Tables"
      tableOfContents={HTML_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 text-lg">
            <Table className="w-5 h-5 mr-2" />
            Bảng HTML
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900">
            📊 Bảng HTML - Trình bày dữ liệu có cấu trúc
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Làm chủ Bảng HTML để hiển thị dữ liệu một cách có tổ chức, dễ tiếp cận và có ý nghĩa ngữ
            nghĩa
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
              <BookOpen className="w-8 h-8 text-green-600" />
              {tablesTheory.introduction.title}
            </h2>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-green-800">Tại sao Bảng quan trọng?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {tablesTheory.introduction.content.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                      <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-green-900">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">
                  Tầm quan trọng của Bảng HTML
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {tablesTheory.introduction.importance.map((importance, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-blue-900">{importance}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Table Types */}
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Grid className="w-8 h-8 text-green-600" />
              Các loại Bảng và trường hợp sử dụng
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {tablesTheory.tableTypes.map((tableType, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">{tableType.type}</CardTitle>
                    <p className="text-gray-600">{tableType.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Độ phức tạp:</span>
                      <Badge
                        className={
                          tableType.complexity === 'Thấp'
                            ? 'bg-green-100 text-green-800'
                            : tableType.complexity === 'Trung bình'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }
                      >
                        {tableType.complexity}
                      </Badge>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Trường hợp sử dụng:</h4>
                      <p className="text-gray-700 text-sm">{tableType.useCase}</p>
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Khả năng tiếp cận:</strong> {tableType.accessibilityNotes}
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
              <Target className="w-8 h-8 text-green-600" />
              Các phần tử Bảng HTML
            </h2>

            <div className="space-y-4">
              {tablesTheory.elements.map((element, index) => (
                <Card key={index} className="shadow-lg overflow-hidden">
                  <CardHeader
                    className="cursor-pointer bg-gradient-to-r from-blue-50 to-green-50 hover:from-blue-100 hover:to-green-100 transition-colors"
                    onClick={() => toggleElement(element.element)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Database className="w-6 h-6 text-blue-600" />
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
                          <h4 className="font-semibold text-gray-900 mb-2">Thuộc tính:</h4>
                          <ul className="space-y-1">
                            {element.attributes.map((attr, attrIndex) => (
                              <li
                                key={attrIndex}
                                className="text-gray-700 text-sm flex items-start gap-2"
                              >
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
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
              <Lightbulb className="w-8 h-8 text-green-600" />
              Khái niệm Bảng nâng cao
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
                        <TabsTrigger value="code">Mã HTML</TabsTrigger>
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
              <Star className="w-8 h-8 text-green-600" />
              Thực hành tốt nhất cho Bảng HTML
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
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
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
              <Code className="w-8 h-8 text-green-600" />
              Ví dụ thực tế với giải thích chi tiết
            </h2>

            <div className="space-y-8">
              {codeExamples.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
                  {category.examples.map((example, exampleIndex) => (
                    <Card key={exampleIndex} className="shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-lg">{example.title}</CardTitle>
                        <p className="text-gray-600">{example.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Tabs defaultValue="code" className="w-full">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="code" className="flex items-center gap-2">
                              <Code className="w-4 h-4" />
                              Mã HTML
                            </TabsTrigger>
                            <TabsTrigger value="preview" className="flex items-center gap-2">
                              <Eye className="w-4 h-4" />
                              Xem trước
                            </TabsTrigger>
                            <TabsTrigger value="explanation" className="flex items-center gap-2">
                              <Info className="w-4 h-4" />
                              Giải thích
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent value="code" className="mt-4">
                            <div className="relative">
                              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                <code>{example.code}</code>
                              </pre>
                              <Button
                                size="sm"
                                variant="outline"
                                className="absolute top-2 right-2"
                                onClick={() =>
                                  copyCode(example.code, `example-${categoryIndex}-${exampleIndex}`)
                                }
                              >
                                {copiedCode === `example-${categoryIndex}-${exampleIndex}` ? (
                                  <Check className="w-4 h-4" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </TabsContent>

                          <TabsContent value="preview" className="mt-4">
                            <div className="border rounded-lg p-4 bg-white">
                              <div
                                dangerouslySetInnerHTML={{ __html: example.code }}
                                className="[&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-gray-300 [&_th]:bg-gray-100 [&_th]:p-2 [&_th]:text-left [&_td]:border [&_td]:border-gray-300 [&_td]:p-2 [&_caption]:text-lg [&_caption]:font-semibold [&_caption]:mb-2"
                              />
                            </div>
                          </TabsContent>

                          <TabsContent value="explanation" className="mt-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-blue-900 mb-2">Giải thích mã:</h4>
                              <p className="text-blue-800">{example.explanation}</p>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {activeSection === 'faq' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-green-600" />
              Câu hỏi thường gặp
            </h2>

            <div className="space-y-4">
              {tablesFAQs.map(faq => (
                <Card key={faq.id} className="shadow-md">
                  <CardHeader
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFAQ(faq.id.toString())}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-1">
                          {faq.level}
                        </Badge>
                        <div>
                          <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                          <p className="text-sm text-gray-500 mt-1">Danh mục: {faq.category}</p>
                        </div>
                      </div>
                      {expandedFAQs[faq.id.toString()] ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>

                  {expandedFAQs[faq.id.toString()] && (
                    <CardContent className="pt-0">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-900">{faq.answer}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* FAQ Categories Summary */}
            <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
              <CardHeader>
                <CardTitle className="text-xl">Tổng quan danh mục FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {['junior', 'mid', 'senior'].map(level => (
                    <div key={level} className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {tablesFAQs.filter(faq => faq.level === level).length}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {level === 'junior' ? 'Cơ bản' : level === 'mid' ? 'Trung cấp' : 'Nâng cao'}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📊 Tóm tắt Bảng HTML
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Table className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cấu trúc ngữ nghĩa</h3>
              <p className="text-sm text-gray-600">Đánh dấu phù hợp cho mối quan hệ dữ liệu</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Khả năng tiếp cận</h3>
              <p className="text-sm text-gray-600">
                Thân thiện với trình đọc màn hình với ARIA phù hợp
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hiệu suất</h3>
              <p className="text-sm text-gray-600">Được tối ưu hóa cho bộ dữ liệu lớn</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-3">Điểm chính:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Sử dụng đánh dấu ngữ nghĩa',
                'Triển khai khả năng tiếp cận phù hợp',
                'Thiết kế bảng responsive',
                'Tối ưu hóa hiệu suất',
                'Tuân theo tiêu chuẩn hiện đại',
              ].map((takeaway, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {takeaway}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HTMLLayout>
  );
}

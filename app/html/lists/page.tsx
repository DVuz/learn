'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  List,
  BookOpen,
  Target,
  Lightbulb,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Code,
  Eye,
  Copy,
  Check,
  Info,
  Zap,
  Star,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import {
  HTML_TABLE_OF_CONTENTS,
  HTML_NAVIGATIONS,
  getProgressForLesson,
} from '../constants/htmlData';
import HTMLLayout from '../components/HTMLLayout';

const navigation = HTML_NAVIGATIONS.lists;
const progress = getProgressForLesson('lists');

// Lý thuyết cơ bản về Lists
const listTheory = {
  introduction: {
    title: 'Giới thiệu về HTML Lists',
    content: [
      'HTML Lists là một trong những elements quan trọng nhất để organize và structure nội dung.',
      'Lists giúp tạo ra semantic meaning rõ ràng cho browser, screen readers và search engines.',
      'Có 3 loại lists chính trong HTML, mỗi loại có purpose và use cases riêng biệt.',
      'Lists không chỉ là styling tool mà còn là semantic elements quan trọng cho accessibility.',
    ],
    importance: [
      'Semantic Structure: Cung cấp meaning cho content, không chỉ visual presentation',
      'Accessibility: Screen readers có thể navigate và announce list information',
      'SEO Benefits: Search engines hiểu structure và context của content tốt hơn',
      'Maintainability: Code dễ đọc, dễ maintain và modify',
      'Standards Compliance: Tuân thủ HTML standards và best practices',
    ],
  },
  types: [
    {
      type: 'Unordered Lists (ul)',
      description: 'Danh sách không có thứ tự quan trọng',
      whenToUse: [
        'Menu navigation items',
        'Danh sách features hoặc benefits',
        'Tags hoặc categories',
        'Social media links',
        'Khi thứ tự items không quan trọng',
      ],
      characteristics: [
        'Sử dụng bullet points (markers) để indicate items',
        'Thứ tự items có thể thay đổi mà không ảnh hưởng meaning',
        'Default styling là disc bullets',
        'Có thể customize markers bằng CSS',
      ],
      semantics:
        'Biểu thị một group of related items mà không có hierarchy hoặc sequence quan trọng',
    },
    {
      type: 'Ordered Lists (ol)',
      description: 'Danh sách có thứ tự và sequence quan trọng',
      whenToUse: [
        'Step-by-step instructions',
        'Rankings hoặc top lists',
        'Chronological events',
        'Procedures và processes',
        'Khi thứ tự items có ý nghĩa quan trọng',
      ],
      characteristics: [
        'Sử dụng numbers, letters hoặc roman numerals',
        'Thứ tự items có meaning và importance',
        'Có thể start từ số khác ngoài 1',
        'Có thể reverse order với reversed attribute',
      ],
      semantics: 'Biểu thị một sequence of items mà order có significance',
    },
    {
      type: 'Description Lists (dl)',
      description: 'Danh sách mô tả với cặp term-definition',
      whenToUse: [
        'Glossaries và dictionaries',
        'Metadata information',
        'FAQ sections',
        'Key-value pairs',
        'Product specifications',
      ],
      characteristics: [
        'Bao gồm dt (term) và dd (description) elements',
        'Một dt có thể có multiple dd elements',
        'Useful cho structured data presentation',
        'Semantic relationship giữa terms và definitions',
      ],
      semantics: 'Biểu thị associations giữa terms và their descriptions/definitions',
    },
  ],
};

// Dữ liệu chi tiết về attributes và properties
const listAttributes = {
  ul: [
    {
      attribute: 'type',
      description: 'Chỉ định kiểu bullet marker',
      values: ['disc', 'circle', 'square'],
      deprecated: true,
      alternative: 'Sử dụng CSS list-style-type thay thế',
    },
  ],
  ol: [
    {
      attribute: 'type',
      description: 'Chỉ định kiểu numbering',
      values: ['1', 'A', 'a', 'I', 'i'],
      deprecated: false,
      example: 'type="A" cho uppercase letters',
    },
    {
      attribute: 'start',
      description: 'Số bắt đầu của list',
      values: ['number'],
      deprecated: false,
      example: 'start="5" bắt đầu từ số 5',
    },
    {
      attribute: 'reversed',
      description: 'Đếm ngược từ start value',
      values: ['boolean'],
      deprecated: false,
      example: 'reversed sẽ đếm ngược',
    },
  ],
  li: [
    {
      attribute: 'value',
      description: 'Override number value cho specific item (chỉ trong ol)',
      values: ['number'],
      deprecated: false,
      example: 'value="10" set item này là 10',
    },
  ],
};

// Best practices chi tiết
const bestPractices = {
  semantic: [
    {
      title: 'Chọn đúng list type',
      description:
        'Sử dụng ul khi order không quan trọng, ol khi có sequence, dl cho term-definition pairs',
      example: 'Menu items → ul, Recipe steps → ol, Glossary → dl',
    },
    {
      title: 'Meaningful content',
      description: 'List items phải có content có ý nghĩa, không để empty hoặc placeholder',
      example: 'Tránh <li></li> hoặc <li>Lorem ipsum</li>',
    },
    {
      title: 'Proper nesting',
      description: 'Nest lists đúng cách, maintain hierarchy và structure logic',
      example: 'Categories → Subcategories → Items',
    },
  ],
  accessibility: [
    {
      title: 'Screen reader support',
      description: 'Lists cung cấp navigation aids cho screen readers',
      benefit: 'Users có thể jump between lists và count items',
    },
    {
      title: 'Logical structure',
      description: 'Maintain logical hierarchy và avoid deep nesting',
      benefit: 'Easier navigation và comprehension',
    },
    {
      title: 'Descriptive content',
      description: 'List items có content descriptive và clear',
      benefit: 'Better understanding của context',
    },
  ],
  performance: [
    {
      title: 'CSS styling',
      description: 'Sử dụng CSS cho styling thay vì HTML attributes',
      reason: 'Separation of concerns và better maintainability',
    },
    {
      title: 'Avoid excessive nesting',
      description: 'Limit nesting depth để avoid complexity',
      reason: 'Better performance và readability',
    },
  ],
};

// Advanced concepts
const advancedConcepts = [
  {
    title: 'CSS Counters với Lists',
    description: 'Sử dụng CSS counters để create custom numbering systems',
    example: `/* Custom counter cho nested lists */
ol {
  counter-reset: section;
}
ol li {
  counter-increment: section;
}
ol li::before {
  content: counter(section, upper-roman) ". ";
}`,
    useCase: 'Legal documents, academic papers với complex numbering',
  },
  {
    title: 'Flexbox/Grid với Lists',
    description: 'Combining lists với modern CSS layout techniques',
    example: `/* Horizontal navigation list */
ul.nav {
  display: flex;
  list-style: none;
  gap: 1rem;
}

/* Grid-based list layout */
ul.grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}`,
    useCase: 'Modern navigation menus, card layouts, responsive grids',
  },
  {
    title: 'ARIA và Lists',
    description: 'Enhancing lists với ARIA attributes cho better accessibility',
    example: `<!-- List với ARIA labels -->
<ul role="list" aria-label="Navigation menu">
  <li role="listitem">
    <a href="/" aria-current="page">Home</a>
  </li>
  <li role="listitem">
    <a href="/about">About</a>
  </li>
</ul>`,
    useCase: 'Complex navigation, interactive lists, custom list behaviors',
  },
];

// FAQ data với detailed explanations
const listFAQs = [
  {
    id: 1,
    question: 'Tại sao nên sử dụng semantic lists thay vì div với CSS?',
    answer:
      'Semantic lists cung cấp meaning cho content, supporting accessibility tools, SEO, và maintainability. Screen readers có thể announce list information và users có thể navigate efficiently. Search engines hiểu structure tốt hơn. Code cũng cleaner và easier to maintain.',
    level: 'junior',
    category: 'semantic',
    detailed: true,
  },
  {
    id: 2,
    question: 'Khi nào nên sử dụng description lists (dl)?',
    answer:
      'Description lists perfect cho key-value relationships như glossaries, metadata, specifications, FAQ sections. Khi bạn có terms cần được defined hoặc described, dl cung cấp semantic relationship rõ ràng giữa term (dt) và definition (dd).',
    level: 'junior',
    category: 'semantic',
    detailed: true,
  },
  {
    id: 3,
    question: 'Làm thế nào để handle nested lists properly?',
    answer:
      'Nest lists bằng cách place child list inside parent li element. Maintain logical hierarchy và avoid quá deep nesting (thường không quá 3-4 levels). Ensure proper closing tags và semantic meaning cho each level.',
    level: 'mid',
    category: 'structure',
    detailed: true,
  },
  {
    id: 4,
    question: 'CSS list-style properties vs HTML attributes?',
    answer:
      'CSS list-style properties (list-style-type, list-style-image, list-style-position) preferred over HTML attributes như type. CSS provides better separation of concerns, more flexibility, và không deprecated như một số HTML attributes.',
    level: 'mid',
    category: 'styling',
    detailed: true,
  },
  {
    id: 5,
    question: 'Impact của lists trên SEO và accessibility?',
    answer:
      'Lists improve content structure cho search engines, making content easier to parse và understand. Screen readers announce list information, provide navigation shortcuts, và help users understand content organization. Proper list usage signals content quality.',
    level: 'senior',
    category: 'seo',
    detailed: true,
  },
  {
    id: 6,
    question: 'Custom list styling và browser compatibility?',
    answer:
      'Modern CSS provides extensive list styling options. CSS counters, ::marker pseudo-element, custom bullet images đều widely supported. Fallbacks important cho older browsers. Consider progressive enhancement approach.',
    level: 'senior',
    category: 'advanced',
    detailed: true,
  },
];

// Code examples với detailed explanations
const codeExamples = [
  {
    category: 'Basic Usage',
    examples: [
      {
        title: 'Simple Unordered List',
        description: 'Basic ul với list items. Thứ tự không quan trọng.',
        code: `<ul>
  <li>HTML - Structure</li>
  <li>CSS - Styling</li>
  <li>JavaScript - Behavior</li>
</ul>`,
        render: (
          <ul className="list-disc list-inside space-y-1">
            <li>HTML - Structure</li>
            <li>CSS - Styling</li>
            <li>JavaScript - Behavior</li>
          </ul>
        ),
        explanation:
          'Unordered list phù hợp khi các items có equal importance và order không significant.',
      },
      {
        title: 'Ordered List với Steps',
        description: 'Ordered list cho step-by-step instructions.',
        code: `<ol>
  <li>Create HTML file</li>
  <li>Add CSS styling</li>
  <li>Include JavaScript</li>
  <li>Test in browser</li>
</ol>`,
        render: (
          <ol className="list-decimal list-inside space-y-1">
            <li>Create HTML file</li>
            <li>Add CSS styling</li>
            <li>Include JavaScript</li>
            <li>Test in browser</li>
          </ol>
        ),
        explanation: 'Ordered list ideal cho procedures mà order matters và có sequence logic.',
      },
    ],
  },
  {
    category: 'Advanced Features',
    examples: [
      {
        title: 'Nested Lists Structure',
        description: 'Complex hierarchy với multiple nesting levels.',
        code: `<ul>
  <li>Frontend Development
    <ul>
      <li>HTML/CSS
        <ul>
          <li>Semantic HTML</li>
          <li>Responsive Design</li>
        </ul>
      </li>
      <li>JavaScript
        <ul>
          <li>ES6+ Features</li>
          <li>DOM Manipulation</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Backend Development
    <ul>
      <li>Node.js</li>
      <li>Databases</li>
    </ul>
  </li>
</ul>`,
        render: (
          <ul className="list-disc list-inside space-y-1">
            <li>
              Frontend Development
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>
                  HTML/CSS
                  <ul className="list-square list-inside ml-6 mt-1 space-y-1">
                    <li>Semantic HTML</li>
                    <li>Responsive Design</li>
                  </ul>
                </li>
                <li>
                  JavaScript
                  <ul className="list-square list-inside ml-6 mt-1 space-y-1">
                    <li>ES6+ Features</li>
                    <li>DOM Manipulation</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Backend Development
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>Node.js</li>
                <li>Databases</li>
              </ul>
            </li>
          </ul>
        ),
        explanation:
          'Nested lists tạo hierarchy structure. Browser automatically changes bullet styles cho each level.',
      },
      {
        title: 'Description List với Multiple DD',
        description: 'Description list với multiple definitions per term.',
        code: `<dl>
  <dt>HTTP Methods</dt>
  <dd>GET - Retrieve data</dd>
  <dd>POST - Submit data</dd>
  <dd>PUT - Update data</dd>
  <dd>DELETE - Remove data</dd>

  <dt>Status Codes</dt>
  <dd>200 - Success</dd>
  <dd>404 - Not Found</dd>
  <dd>500 - Server Error</dd>
</dl>`,
        render: (
          <dl className="space-y-3">
            <div>
              <dt className="font-semibold text-gray-900">HTTP Methods</dt>
              <dd className="ml-4 text-gray-600">GET - Retrieve data</dd>
              <dd className="ml-4 text-gray-600">POST - Submit data</dd>
              <dd className="ml-4 text-gray-600">PUT - Update data</dd>
              <dd className="ml-4 text-gray-600">DELETE - Remove data</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Status Codes</dt>
              <dd className="ml-4 text-gray-600">200 - Success</dd>
              <dd className="ml-4 text-gray-600">404 - Not Found</dd>
              <dd className="ml-4 text-gray-600">500 - Server Error</dd>
            </div>
          </dl>
        ),
        explanation:
          'Description lists powerful cho glossaries và technical documentation. Một term có thể có multiple related definitions.',
      },
    ],
  },
];

export default function HTMLListsPage() {
  const [activeSection, setActiveSection] = useState('theory');
  const [activeExample, setActiveExample] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [filterLevel, setFilterLevel] = useState<'all' | 'junior' | 'mid' | 'senior'>('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredFAQs = listFAQs.filter(faq => {
    const levelMatch = filterLevel === 'all' || faq.level === filterLevel;
    const categoryMatch = filterCategory === 'all' || faq.category === filterCategory;
    return levelMatch && categoryMatch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const copyCode = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
      case 'semantic':
        return 'bg-blue-100 text-blue-800';
      case 'structure':
        return 'bg-purple-100 text-purple-800';
      case 'styling':
        return 'bg-pink-100 text-pink-800';
      case 'seo':
        return 'bg-indigo-100 text-indigo-800';
      case 'advanced':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <HTMLLayout
      currentLesson="Danh sách HTML"
      tableOfContents={HTML_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 text-lg">
            <List className="w-5 h-5 mr-2" />
            HTML Lists Theory & Practice
          </Badge>

          <h1 className="text-5xl font-bold text-gray-900" id="lists">
            📋 HTML Lists - Lý Thuyết Chuyên Sâu
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Khám phá sâu về HTML Lists: từ semantic meaning, accessibility, SEO benefits đến
            advanced techniques và best practices trong web development.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { id: 'theory', label: 'Lý thuyết cơ bản', icon: BookOpen },
            { id: 'types', label: 'Các loại Lists', icon: Target },
            { id: 'attributes', label: 'Attributes & Properties', icon: Info },
            { id: 'examples', label: 'Ví dụ thực tế', icon: Code },
            { id: 'practices', label: 'Best Practices', icon: Lightbulb },
            { id: 'advanced', label: 'Advanced Concepts', icon: Zap },
            { id: 'faqs', label: 'Q&A', icon: HelpCircle },
          ].map(section => {
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
              Lý thuyết cơ bản về HTML Lists
            </h2>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">
                  {listTheory.introduction.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {listTheory.introduction.content.map((item, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>

                <Alert>
                  <Star className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Tại sao Lists quan trọng:</strong> Lists không chỉ là presentation tool
                    mà còn là semantic elements fundamental cho web accessibility và SEO.
                  </AlertDescription>
                </Alert>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-4">Tầm quan trọng của HTML Lists:</h4>
                  <ul className="space-y-2">
                    {listTheory.introduction.importance.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Types Section */}
        {activeSection === 'types' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Target className="w-8 h-8 text-green-600" />
              Chi tiết các loại HTML Lists
            </h2>

            <div className="space-y-8">
              {listTheory.types.map((listType, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-800">{listType.type}</CardTitle>
                    <p className="text-gray-600">{listType.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Khi nào sử dụng:</h4>
                        <ul className="space-y-2">
                          {listType.whenToUse.map((use, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                              <span className="text-gray-700">{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Đặc điểm:</h4>
                        <ul className="space-y-2">
                          {listType.characteristics.map((char, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <span className="text-gray-700">{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Semantic meaning:</strong> {listType.semantics}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Attributes Section */}
        {activeSection === 'attributes' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Info className="w-8 h-8 text-green-600" />
              Attributes và Properties chi tiết
            </h2>

            <div className="space-y-6">
              {Object.entries(listAttributes).map(([element, attrs]) => (
                <Card key={element} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-800">
                      {element.toUpperCase()} Element Attributes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b bg-gray-50">
                            <th className="text-left p-3 font-semibold">Attribute</th>
                            <th className="text-left p-3 font-semibold">Description</th>
                            <th className="text-left p-3 font-semibold">Values</th>
                            <th className="text-left p-3 font-semibold">Status</th>
                            <th className="text-left p-3 font-semibold">Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {attrs.map((attr, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="p-3 font-mono text-sm bg-gray-100">
                                {attr.attribute}
                              </td>
                              <td className="p-3">{attr.description}</td>
                              <td className="p-3 font-mono text-sm">{attr.values.join(', ')}</td>
                              <td className="p-3">
                                {attr.deprecated ? (
                                  <Badge className="bg-red-100 text-red-800">Deprecated</Badge>
                                ) : (
                                  <Badge className="bg-green-100 text-green-800">Valid</Badge>
                                )}
                              </td>
                              <td className="p-3 text-sm">
                                {'alternative' in attr ? attr.alternative :
                                 'example' in attr ? attr.example : ''}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
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
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="code" className="flex items-center gap-2">
                              <Code className="w-4 h-4" />
                              HTML Code
                            </TabsTrigger>
                            <TabsTrigger value="preview" className="flex items-center gap-2">
                              <Eye className="w-4 h-4" />
                              Live Preview
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
                            <div className="border border-gray-200 p-6 rounded-lg bg-white">
                              {example.render}
                            </div>
                          </TabsContent>
                        </Tabs>

                        <Alert>
                          <Lightbulb className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Giải thích:</strong> {example.explanation}
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Best Practices Section */}
        {activeSection === 'practices' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-green-600" />
              Best Practices chi tiết
            </h2>

            <div className="space-y-8">
              {Object.entries(bestPractices).map(([category, practices]) => (
                <Card key={category} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-800 capitalize">
                      {category} Best Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {practices.map((practice, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-4 space-y-2">
                        <h4 className="font-semibold text-gray-900">{practice.title}</h4>
                        <p className="text-gray-700">{practice.description}</p>
                        {'example' in practice && practice.example && (
                          <p className="text-sm bg-gray-100 p-2 rounded font-mono">
                            {practice.example}
                          </p>
                        )}
                        {'benefit' in practice && practice.benefit && (
                          <p className="text-sm text-green-700">✓ {practice.benefit}</p>
                        )}
                        {'reason' in practice && practice.reason && (
                          <p className="text-sm text-blue-700">→ {practice.reason}</p>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Advanced Concepts */}
        {activeSection === 'advanced' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Zap className="w-8 h-8 text-green-600" />
              Advanced Concepts & Techniques
            </h2>

            <div className="space-y-6">
              {advancedConcepts.map((concept, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-800">{concept.title}</CardTitle>
                    <p className="text-gray-600">{concept.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{concept.example}</code>
                    </pre>
                    <Alert>
                      <Star className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Use case:</strong> {concept.useCase}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {activeSection === 'faqs' && (
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-green-600" />
                Câu hỏi phỏng vấn chuyên sâu
              </h2>
              <Badge className="bg-green-100 text-green-800">{filteredFAQs.length} câu hỏi</Badge>
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
                  {['all', 'semantic', 'structure', 'styling', 'seo', 'advanced'].map(category => (
                    <Button
                      key={category}
                      size="sm"
                      variant={filterCategory === category ? 'default' : 'outline'}
                      onClick={() => setFilterCategory(category)}
                      className="text-xs"
                    >
                      {category === 'all' ? 'Tất cả' : category}
                    </Button>
                  ))}
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
                            {faq.category.toUpperCase()}
                          </Badge>
                          {faq.detailed && (
                            <Badge className="bg-orange-100 text-orange-800">Chi tiết</Badge>
                          )}
                        </div>
                        <CardTitle
                          className="text-lg cursor-pointer hover:text-green-600 transition-colors"
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
        )}

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-green-400 p-8 rounded-r-lg">
          <h3 className="font-bold text-green-900 text-xl mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            Tóm tắt kiến thức chuyên sâu
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-green-800">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>
                  HTML Lists là semantic elements fundamental với impact lớn đến accessibility và
                  SEO
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>
                  3 loại lists (ul, ol, dl) mỗi loại có semantic meaning và use cases riêng biệt
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>
                  Proper nesting và structure critical cho accessibility và maintainability
                </span>
              </li>
            </ul>
            <ul className="space-y-3 text-green-800">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>CSS styling preferred over HTML attributes cho separation of concerns</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>
                  Advanced techniques như CSS counters, ARIA attributes enhance functionality
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Modern CSS (flexbox, grid) opens new possibilities cho list layouts</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </HTMLLayout>
  );
}

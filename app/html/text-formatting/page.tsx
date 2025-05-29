'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ChevronDown,
  ChevronUp,
  Code,
  Type,
  BookOpen,
  Lightbulb,
  Target,
  HelpCircle,
  Copy,
  Check,
  Eye,
  Info,
  Palette,
} from 'lucide-react';
import HTMLLayout from '../components/HTMLLayout';
import {
  HTML_TABLE_OF_CONTENTS,
  HTML_NAVIGATIONS,
  getProgressForLesson,
} from '../constants/htmlData';

interface TextTag {
  tag: string;
  name: string;
  description: string;
  purpose: string;
  semantic: boolean;
  attributes: string[];
  examples: {
    code: string;
    result: string;
    explanation: string;
  }[];
  category: 'emphasis' | 'inline' | 'quotation' | 'code' | 'edit' | 'special';
  level: 'basic' | 'intermediate' | 'advanced';
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  level: 'junior' | 'mid' | 'senior';
  category: 'semantic' | 'styling' | 'accessibility' | 'best-practices';
}

const navigation = HTML_NAVIGATIONS['text-formatting'] || {};
const progress = getProgressForLesson('text-formatting');

const textTags: TextTag[] = [
  {
    tag: 'strong',
    name: 'Strong Importance',
    description: 'Thể hiện nội dung có tầm quan trọng cao, mang ý nghĩa semantic mạnh',
    purpose: 'Nhấn mạnh tầm quan trọng của nội dung',
    semantic: true,
    attributes: ['id', 'class', 'style', 'title'],
    category: 'emphasis',
    level: 'basic',
    examples: [
      {
        code: `<p>Lưu ý: <strong>Việc backup dữ liệu là rất quan trọng</strong>
trước khi thực hiện update hệ thống.</p>

<p><strong>Cảnh báo bảo mật:</strong> Không bao giờ chia sẻ
password với người khác.</p>

<p>Trong lập trình, <strong>debugging</strong> là kỹ năng
cần thiết mà mọi developer phải có.</p>`,
        result: 'Text được hiển thị đậm (bold) với semantic meaning quan trọng',
        explanation: 'Strong khác với <b> vì có ý nghĩa semantic, giúp screen readers nhận biết nội dung quan trọng'
      },
      {
        code: `<article>
  <h2>Hướng dẫn bảo mật</h2>
  <p>Có <strong>3 quy tắc vàng</strong> trong bảo mật:</p>
  <ol>
    <li><strong>Mật khẩu mạnh:</strong> Ít nhất 12 ký tự</li>
    <li><strong>Xác thực 2 bước:</strong> Luôn bật khi có thể</li>
    <li><strong>Cập nhật thường xuyên:</strong> Phần mềm và hệ điều hành</li>
  </ol>
</article>`,
        result: 'Structured content với các điểm quan trọng được highlight rõ ràng',
        explanation: 'Strong trong lists giúp tạo emphasis cho key terms và concepts'
      }
    ]
  },
  {
    tag: 'em',
    name: 'Emphasis',
    description: 'Thể hiện sự nhấn mạnh về ngữ điệu, stress trong văn nói',
    purpose: 'Nhấn mạnh ngữ điệu và cảm xúc',
    semantic: true,
    attributes: ['id', 'class', 'style', 'title'],
    category: 'emphasis',
    level: 'basic',
    examples: [
      {
        code: `<p>Tôi <em>thực sự</em> thích học HTML và CSS.</p>

<p>Bạn có <em>chắc chắn</em> muốn xóa file này không?</p>

<p>Đây <em>không phải</em> là cách tốt nhất để giải quyết vấn đề.</p>

<p>Hãy <em>cẩn thận</em> khi sử dụng lệnh này!</p>`,
        result: 'Text hiển thị nghiêng (italic) với semantic emphasis về ngữ điệu',
        explanation: 'Em khác với <i> vì có ý nghĩa nhấn mạnh ngữ điệu, screen readers sẽ đọc với intonation khác'
      },
      {
        code: `<blockquote>
  <p>"Việc học lập trình <em>không phải</em> chỉ là học syntax,
  mà quan trọng hơn là học <em>cách tư duy</em> giải quyết vấn đề."</p>
  <cite>— Lời khuyên từ senior developer</cite>
</blockquote>`,
        result: 'Quote với emphasis tạo ra emotional impact và clarity trong message',
        explanation: 'Em trong quotes giúp truyền tải tone và emotion của người nói'
      }
    ]
  },
  {
    tag: 'mark',
    name: 'Mark/Highlight',
    description: 'Đánh dấu text để reference hoặc highlight trong context cụ thể',
    purpose: 'Highlight text relevant đến user query hoặc current context',
    semantic: true,
    attributes: ['id', 'class', 'style'],
    category: 'emphasis',
    level: 'basic',
    examples: [
      {
        code: `<p>Trong search results, từ khóa <mark>HTML</mark> và
<mark>CSS</mark> được highlight để dễ tìm thấy.</p>

<article>
  <h3>Kết quả tìm kiếm: "JavaScript"</h3>
  <p><mark>JavaScript</mark> là ngôn ngữ lập trình được sử dụng
  rộng rãi trong web development. <mark>JavaScript</mark> có thể
  chạy trên browser và server.</p>
</article>`,
        result: 'Text được highlight với background màu vàng (mặc định)',
        explanation: 'Mark thường dùng cho search results, relevant terms, hoặc content cần attention'
      },
      {
        code: `<p>Code review checklist:</p>
<ul>
  <li>✅ Code style consistent</li>
  <li>✅ Unit tests passed</li>
  <li><mark>❌ Performance optimization cần cải thiện</mark></li>
  <li>✅ Security check completed</li>
</ul>`,
        result: 'Highlight items cần attention trong lists hoặc status updates',
        explanation: 'Mark giúp draw attention đến specific items cần action hoặc có significance'
      }
    ]
  },
  {
    tag: 'small',
    name: 'Small Text',
    description: 'Text nhỏ hơn cho fine print, disclaimers, legal text',
    purpose: 'Side comments, disclaimers, copyright, fine print',
    semantic: true,
    attributes: ['id', 'class', 'style'],
    category: 'special',
    level: 'basic',
    examples: [
      {
        code: `<article>
  <h2>Khóa học HTML miễn phí</h2>
  <p>Học HTML từ cơ bản đến nâng cao trong 30 ngày.</p>
  <small>* Khóa học miễn phí, không bao gồm certificate</small>
</article>

<footer>
  <p>&copy; 2024 WebDev Academy</p>
  <small>All rights reserved. Terms of service apply.</small>
</footer>`,
        result: 'Text hiển thị nhỏ hơn, thường dùng cho thông tin phụ',
        explanation: 'Small có semantic meaning cho fine print, không chỉ là styling nhỏ'
      },
      {
        code: `<form>
  <label for="email">Email:</label>
  <input type="email" id="email" required>
  <small>Chúng tôi không bao giờ share email của bạn với bên thứ 3</small>

  <button type="submit">Đăng ký</button>
  <small>Bằng cách đăng ký, bạn đồng ý với
  <a href="/terms">điều khoản sử dụng</a></small>
</form>`,
        result: 'Helper text và disclaimers được hiển thị smaller và subtle',
        explanation: 'Small thường đi kèm forms cho helper text, validation hints, legal disclaimers'
      }
    ]
  },
  {
    tag: 'sub',
    name: 'Subscript',
    description: 'Text hiển thị dưới baseline, dùng cho công thức hóa học, toán học',
    purpose: 'Subscript notation cho science, math, footnotes',
    semantic: true,
    attributes: ['id', 'class', 'style'],
    category: 'special',
    level: 'intermediate',
    examples: [
      {
        code: `<p>Công thức hóa học của nước là H<sub>2</sub>O</p>

<p>Công thức glucose: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p>

<p>Trong toán học: log<sub>2</sub>(8) = 3</p>

<p>Footnote reference<sub>1</sub></p>`,
        result: 'Số và chữ hiển thị nhỏ hơn và ở dưới baseline',
        explanation: 'Sub có semantic meaning cho subscript notation, không chỉ là visual effect'
      }
    ]
  },
  {
    tag: 'sup',
    name: 'Superscript',
    description: 'Text hiển thị trên baseline, dùng cho exponents, ordinal numbers',
    purpose: 'Superscript notation cho math, dates, footnotes',
    semantic: true,
    attributes: ['id', 'class', 'style'],
    category: 'special',
    level: 'intermediate',
    examples: [
      {
        code: `<p>Công thức Einstein: E = mc<sup>2</sup></p>

<p>Diện tích hình vuông: A = a<sup>2</sup></p>

<p>Ngày 4<sup>th</sup> tháng 7 năm 2024</p>

<p>x<sup>n</sup> + y<sup>n</sup> = z<sup>n</sup></p>`,
        result: 'Số và chữ hiển thị nhỏ hơn và ở trên baseline',
        explanation: 'Sup cho mathematical expressions, ordinal numbers, exponents'
      }
    ]
  },
  {
    tag: 'del',
    name: 'Deleted Text',
    description: 'Text đã bị xóa hoặc không còn accurate, với strikethrough',
    purpose: 'Show removed content, price changes, corrections',
    semantic: true,
    attributes: ['id', 'class', 'style', 'cite', 'datetime'],
    category: 'edit',
    level: 'intermediate',
    examples: [
      {
        code: `<p>Giá sản phẩm: <del>$199</del> $149 (Giảm giá 25%)</p>

<p>Deadline project: <del datetime="2024-01-15">15 tháng 1</del>
<ins datetime="2024-01-20">20 tháng 1</ins></p>

<article>
  <p>Python là ngôn ngữ <del>khó học</del> dễ học cho beginners.</p>
</article>`,
        result: 'Text có strikethrough line, indicating removed/outdated content',
        explanation: 'Del có semantic meaning cho deleted content, với optional datetime và cite attributes'
      }
    ]
  },
  {
    tag: 'ins',
    name: 'Inserted Text',
    description: 'Text mới được thêm vào document, thường đi kèm với del',
    purpose: 'Show added content, updates, corrections',
    semantic: true,
    attributes: ['id', 'class', 'style', 'cite', 'datetime'],
    category: 'edit',
    level: 'intermediate',
    examples: [
      {
        code: `<p>Meeting time: <del>2:00 PM</del> <ins>3:00 PM</ins></p>

<p>Tính năng mới: <ins datetime="2024-01-15">Dark mode</ins>
đã được thêm vào ứng dụng.</p>

<article>
  <h3>Release Notes v2.1</h3>
  <ul>
    <li><ins>Added: User authentication</ins></li>
    <li><ins>Fixed: Memory leak issue</ins></li>
    <li>Improved: Performance optimization</li>
  </ul>
</article>`,
        result: 'Text có underline, indicating newly added content',
        explanation: 'Ins cho added content, thường pair với del để show changes over time'
      }
    ]
  },
  {
    tag: 'code',
    name: 'Inline Code',
    description: 'Inline code snippets, variables, function names trong text',
    purpose: 'Inline code, technical terms, programming elements',
    semantic: true,
    attributes: ['id', 'class', 'style'],
    category: 'code',
    level: 'basic',
    examples: [
      {
        code: `<p>Để tạo heading, sử dụng thẻ <code>&lt;h1&gt;</code>
đến <code>&lt;h6&gt;</code>.</p>

<p>Function <code>getElementById()</code> return một element
hoặc <code>null</code> nếu không tìm thấy.</p>

<p>Set biến environment: <code>NODE_ENV=production</code></p>

<p>CSS property <code>display: flex</code> tạo flex container.</p>`,
        result: 'Code snippets với monospace font và background highlighting',
        explanation: 'Code element cho inline code, khác với <pre> cho code blocks'
      }
    ]
  },
  {
    tag: 'kbd',
    name: 'Keyboard Input',
    description: 'Text representing keyboard input, keyboard shortcuts',
    purpose: 'Keyboard shortcuts, user input examples',
    semantic: true,
    attributes: ['id', 'class', 'style'],
    category: 'code',
    level: 'intermediate',
    examples: [
      {
        code: `<p>Để save file, nhấn <kbd>Ctrl</kbd> + <kbd>S</kbd></p>

<p>Copy text: <kbd>Ctrl</kbd> + <kbd>C</kbd>,
Paste: <kbd>Ctrl</kbd> + <kbd>V</kbd></p>

<p>Mở Developer Tools: <kbd>F12</kbd> hoặc
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd></p>

<p>Nhập command: <kbd>npm install</kbd></p>`,
        result: 'Keyboard keys styled như physical keys trên keyboard',
        explanation: 'Kbd specifically cho keyboard input, có styling khác với code'
      }
    ]
  },
  {
    tag: 'samp',
    name: 'Sample Output',
    description: 'Sample output từ programs, scripts, hoặc computer systems',
    purpose: 'Program output, error messages, system responses',
    semantic: true,
    attributes: ['id', 'class', 'style'],
    category: 'code',
    level: 'intermediate',
    examples: [
      {
        code: `<p>Khi chạy command thành công, terminal sẽ hiển thị:</p>
<samp>✓ Build completed successfully in 2.3s</samp>

<p>Error message:</p>
<samp>Error: Cannot find module 'express'
    at Function.Module._resolveFilename</samp>

<p>Server response:</p>
<samp>HTTP/1.1 200 OK
Content-Type: application/json</samp>`,
        result: 'Sample output với monospace font, thường có styling khác với code',
        explanation: 'Samp cho computer output, khác semantic với code (input) và kbd (user input)'
      }
    ]
  },
  {
    tag: 'var',
    name: 'Variable',
    description: 'Mathematical variables, programming variables hoặc placeholder text',
    purpose: 'Variables, placeholders, mathematical notation',
    semantic: true,
    attributes: ['id', 'class', 'style'],
    category: 'code',
    level: 'intermediate',
    examples: [
      {
        code: `<p>Trong phương trình <var>y</var> = <var>mx</var> + <var>b</var>,
<var>m</var> là slope và <var>b</var> là y-intercept.</p>

<p>Replace <var>username</var> với tên user thực tế:</p>
<code>ssh <var>username</var>@server.com</code>

<p>Function signature: <code>calculateArea(<var>width</var>, <var>height</var>)</code></p>`,
        result: 'Variables thường hiển thị italic để distinguish từ regular text',
        explanation: 'Var cho variables và placeholders, có semantic meaning trong math và programming context'
      }
    ]
  },
  {
    tag: 'q',
    name: 'Inline Quotation',
    description: 'Short inline quotations, tự động thêm quotation marks',
    purpose: 'Short quotes, inline citations',
    semantic: true,
    attributes: ['id', 'class', 'style', 'cite'],
    category: 'quotation',
    level: 'basic',
    examples: [
      {
        code: `<p>Steve Jobs từng nói: <q>Innovation distinguishes between
a leader and a follower.</q></p>

<p>Theo John Doe: <q cite="https://example.com/article">
HTML is the foundation of the web.</q></p>

<p>Manager của chúng tôi luôn nhắc: <q>Code quality matters
more than delivery speed.</q></p>`,
        result: 'Quotes tự động có quotation marks, styled appropriately',
        explanation: 'Q cho short inline quotes, browser tự động add quotation marks theo language'
      }
    ]
  },
  {
    tag: 'abbr',
    name: 'Abbreviation',
    description: 'Abbreviations và acronyms với full form trong title attribute',
    purpose: 'Abbreviations, acronyms với explanations',
    semantic: true,
    attributes: ['id', 'class', 'style', 'title'],
    category: 'special',
    level: 'intermediate',
    examples: [
      {
        code: `<p><abbr title="HyperText Markup Language">HTML</abbr>
là ngôn ngữ markup chuẩn cho web pages.</p>

<p><abbr title="Cascading Style Sheets">CSS</abbr>
điều khiển presentation của HTML elements.</p>

<p>Công ty chúng tôi follow <abbr title="Search Engine Optimization">SEO</abbr>
best practices.</p>

<p>Meeting lúc 2PM <abbr title="Eastern Standard Time">EST</abbr>.</p>`,
        result: 'Abbreviations với dotted underline, tooltip hiển thị full form khi hover',
        explanation: 'Abbr với title attribute cung cấp accessibility cho screen readers và tooltips'
      }
    ]
  },
  {
    tag: 'dfn',
    name: 'Definition',
    description: 'Defining instance của term được define trong context hiện tại',
    purpose: 'Term definitions, first usage of technical terms',
    semantic: true,
    attributes: ['id', 'class', 'style', 'title'],
    category: 'special',
    level: 'advanced',
    examples: [
      {
        code: `<p><dfn>Responsive Web Design</dfn> là approach thiết kế
web site adapt với different screen sizes.</p>

<p><dfn title="Application Programming Interface">API</dfn>
là set of protocols cho building software applications.</p>

<article>
  <h3>Web Development Terms</h3>
  <p><dfn>Frontend</dfn> refers to the client-side of applications
  that users interact with directly.</p>
</article>`,
        result: 'Defined terms thường italic, marking first definition trong document',
        explanation: 'Dfn cho defining instance của terms, important cho glossaries và technical docs'
      }
    ]
  }
];

const interviewFAQs: FAQ[] = [
  {
    id: 1,
    question: 'Sự khác biệt semantic giữa <strong> vs <b> và <em> vs <i>?',
    answer: '<strong>/<em> có semantic meaning: <strong> for importance, <em> for stress/emphasis. <b>/<i> chỉ là visual styling không có meaning. Search engines, screen readers hiểu <strong>/<em> nhưng ignore <b>/<i>. Best practice: luôn dùng semantic versions.',
    level: 'junior',
    category: 'semantic'
  },
  {
    id: 2,
    question: 'Khi nào dùng <mark> vs <strong> vs <em>?',
    answer: '<mark> cho highlight relevance (search results, current context). <strong> cho importance/significance. <em> cho stress/emphasis trong speech. Mỗi element có purpose riêng: mark=relevance, strong=importance, em=emphasis.',
    level: 'junior',
    category: 'semantic'
  },
  {
    id: 3,
    question: '<code> vs <pre> vs <kbd> vs <samp> - khi nào dùng gì?',
    answer: '<code> cho inline code snippets. <pre> cho preformatted text blocks. <kbd> cho keyboard input/shortcuts. <samp> cho computer output. Mỗi element có semantic meaning riêng trong programming context.',
    level: 'mid',
    category: 'semantic'
  },
  {
    id: 4,
    question: 'Best practices cho <abbr> và accessibility?',
    answer: 'Luôn có title attribute với full expansion. Screen readers đọc title khi gặp abbr. Không overuse - chỉ abbr khi cần thiết. Consider context - abbr "HTML" trong tech blog có thể không cần expand.',
    level: 'mid',
    category: 'accessibility'
  },
  {
    id: 5,
    question: '<del> và <ins> với datetime attribute và version control?',
    answer: 'datetime attribute ISO 8601 format cho tracking changes. cite attribute cho reference URL. Useful cho legal documents, collaborative editing, changelogs. Semantic superior so với strikethrough CSS.',
    level: 'mid',
    category: 'semantic'
  },
  {
    id: 6,
    question: '<q> vs <blockquote> và automatic quote marks?',
    answer: '<q> cho inline quotes với automatic quote marks dựa theo lang attribute. <blockquote> cho longer quotes, block-level. Browser handle quote marks theo language conventions. cite attribute cho both.',
    level: 'mid',
    category: 'semantic'
  },
  {
    id: 7,
    question: '<small> semantic meaning vs just smaller text?',
    answer: '<small> có semantic meaning cho fine print, disclaimers, legal text - không chỉ smaller font. Represent "less important" content như copyright, terms. Screen readers có thể treat differently than regular text.',
    level: 'mid',
    category: 'semantic'
  },
  {
    id: 8,
    question: '<dfn> và <abbr> trong technical documentation?',
    answer: '<dfn> cho defining instance của term trong document. <abbr> cho abbreviations với expansions. Best practice: <dfn><abbr title="...">API</abbr></dfn> cho first usage, sau đó chỉ <abbr>. Important cho glossaries, technical specs.',
    level: 'senior',
    category: 'best-practices'
  },
  {
    id: 9,
    question: 'Text formatting performance và semantic HTML impact?',
    answer: 'Semantic elements tốt cho SEO ranking, accessibility compliance. Screen readers process semantic elements khác visual styling. Search engines weight <strong>/<em> content higher. Avoid nested emphasis elements.',
    level: 'senior',
    category: 'best-practices'
  },
  {
    id: 10,
    question: 'Custom styling vs semantic elements trade-offs?',
    answer: 'Semantic-first approach: dùng semantic elements, override styling với CSS. Maintain meaning cho assistive tech. CSS ::before/::after cho decorative elements. Consider aria-label khi semantic elements không đủ.',
    level: 'senior',
    category: 'best-practices'
  },
  {
    id: 11,
    question: 'Internationalization (i18n) với text formatting elements?',
    answer: 'Quote marks (<q>) automatic dựa theo lang attribute. Emphasis patterns khác nhau theo languages. RTL languages affect visual styling. Screen readers behavior vary theo language settings.',
    level: 'senior',
    category: 'accessibility'
  },
  {
    id: 12,
    question: 'ARIA attributes với text formatting cho complex documents?',
    answer: 'aria-label override default semantics khi cần. role="presentation" disable semantics. aria-describedby link descriptions. Consider aria-live cho dynamic content changes. Balance semantic HTML vs ARIA complexity.',
    level: 'senior',
    category: 'accessibility'
  }
];

export default function HTMLTextFormattingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [filterLevel, setFilterLevel] = useState<'all' | 'junior' | 'mid' | 'senior'>('all');
  const [filterCategory, setFilterCategory] = useState<'all' | string>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string>('strong');
  const [showResults, setShowResults] = useState<{ [key: string]: boolean }>({});

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const toggleResult = (tagId: string, exampleIndex: number) => {
    const key = `${tagId}-${exampleIndex}`;
    setShowResults(prev => ({
      ...prev,
      [key]: !prev[key],
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

  const filteredFAQs = interviewFAQs.filter(faq => {
    const levelMatch = filterLevel === 'all' || faq.level === filterLevel;
    const categoryMatch = filterCategory === 'all' || faq.category === filterCategory;
    return levelMatch && categoryMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'junior': return 'bg-green-100 text-green-800';
      case 'mid': return 'bg-yellow-100 text-yellow-800';
      case 'senior': return 'bg-red-100 text-red-800';
      case 'basic': return 'bg-blue-100 text-blue-800';
      case 'intermediate': return 'bg-purple-100 text-purple-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'emphasis': return 'bg-red-100 text-red-800';
      case 'inline': return 'bg-blue-100 text-blue-800';
      case 'quotation': return 'bg-green-100 text-green-800';
      case 'code': return 'bg-gray-100 text-gray-800';
      case 'edit': return 'bg-yellow-100 text-yellow-800';
      case 'special': return 'bg-purple-100 text-purple-800';
      case 'semantic': return 'bg-pink-100 text-pink-800';
      case 'styling': return 'bg-orange-100 text-orange-800';
      case 'accessibility': return 'bg-teal-100 text-teal-800';
      case 'best-practices': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <HTMLLayout
      currentLesson="Text Formatting"
      tableOfContents={HTML_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-lg">
            <Type className="w-5 h-5 mr-2" />
            HTML Text Formatting
          </Badge>

          <h1 className="text-5xl font-bold text-gray-900" id="text-formatting">
            📝 HTML Text Formatting
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tìm hiểu các thẻ HTML để định dạng văn bản với semantic meaning. Từ emphasis và importance
            đến code snippets và quotations.
          </p>
        </div>

        {/* Category Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3" id="categories">
            <Palette className="w-8 h-8 text-purple-600" />
            Phân loại Text Formatting
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <CardTitle className="text-lg text-red-800">Emphasis Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-center text-sm mb-3">
                  Nhấn mạnh tầm quan trọng và ngữ điệu
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <code className="text-xs bg-red-100 px-2 py-1 rounded">strong</code>
                  <code className="text-xs bg-red-100 px-2 py-1 rounded">em</code>
                  <code className="text-xs bg-red-100 px-2 py-1 rounded">mark</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <CardTitle className="text-lg text-gray-800">Code Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center text-sm mb-3">
                  Code snippets và technical content
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">code</code>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">kbd</code>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">samp</code>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">var</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✏️</span>
                </div>
                <CardTitle className="text-lg text-yellow-800">Edit Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 text-center text-sm mb-3">
                  Thể hiện thay đổi và cập nhật
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <code className="text-xs bg-yellow-100 px-2 py-1 rounded">del</code>
                  <code className="text-xs bg-yellow-100 px-2 py-1 rounded">ins</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <CardTitle className="text-lg text-green-800">Quotation Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-center text-sm mb-3">
                  Trích dẫn và quotations
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <code className="text-xs bg-green-100 px-2 py-1 rounded">q</code>
                  <code className="text-xs bg-green-100 px-2 py-1 rounded">cite</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔤</span>
                </div>
                <CardTitle className="text-lg text-purple-800">Special Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-center text-sm mb-3">
                  Abbreviations và special formatting
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <code className="text-xs bg-purple-100 px-2 py-1 rounded">abbr</code>
                  <code className="text-xs bg-purple-100 px-2 py-1 rounded">dfn</code>
                  <code className="text-xs bg-purple-100 px-2 py-1 rounded">small</code>
                  <code className="text-xs bg-purple-100 px-2 py-1 rounded">sub</code>
                  <code className="text-xs bg-purple-100 px-2 py-1 rounded">sup</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <CardTitle className="text-lg text-blue-800">Semantic Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center text-sm mb-3">
                  Ý nghĩa quan trọng hơn styling
                </p>
                <div className="text-center">
                  <Badge className="bg-blue-100 text-blue-800 text-xs">
                    Semantic {'>'} Visual
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tag Reference */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3" id="tag-reference">
            <BookOpen className="w-8 h-8 text-purple-600" />
            Tham khảo thẻ Text Formatting
          </h2>

          {/* Tag Navigation */}
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg">
            {textTags.map((tag) => (
              <Button
                key={tag.tag}
                size="sm"
                variant={activeTag === tag.tag ? "default" : "outline"}
                onClick={() => setActiveTag(tag.tag)}
                className="text-xs"
              >
                &lt;{tag.tag}&gt;
              </Button>
            ))}
          </div>

          {/* Active Tag Details */}
          {textTags
            .filter(tag => tag.tag === activeTag)
            .map((tag) => (
              <Card key={tag.tag} className="shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <code className="bg-gray-100 px-3 py-1 rounded text-purple-600">
                          &lt;{tag.tag}&gt;
                        </code>
                        {tag.name}
                        {tag.semantic && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            SEMANTIC
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="text-gray-600 mt-3 text-lg">{tag.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getCategoryColor(tag.category)}>
                        {tag.category.toUpperCase()}
                      </Badge>
                      <Badge className={getLevelColor(tag.level)}>
                        {tag.level.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Purpose & Attributes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-600" />
                        Mục đích sử dụng
                      </h4>
                      <p className="text-gray-700 text-sm bg-purple-50 p-3 rounded-lg">
                        {tag.purpose}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4 text-purple-600" />
                        Attributes chính
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {tag.attributes.map((attr) => (
                          <code key={attr} className="text-xs bg-gray-100 px-2 py-1 rounded border">
                            {attr}
                          </code>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="space-y-6">
                    <h4 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-600" />
                      Ví dụ thực tế
                    </h4>

                    {tag.examples.map((example, index) => (
                      <div key={index} className="border rounded-lg p-6 bg-white">
                        <div className="space-y-4">
                          {/* Code Block */}
                          <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium text-gray-800">HTML Code:</h5>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => toggleResult(tag.tag, index)}
                                  className="text-xs"
                                >
                                  <Eye className="w-3 h-3 mr-1" />
                                  {showResults[`${tag.tag}-${index}`] ? 'Ẩn' : 'Xem'} kết quả
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => copyCode(example.code, `${tag.tag}-${index}`)}
                                  className="text-xs"
                                >
                                  {copiedCode === `${tag.tag}-${index}` ? (
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
                          </div>

                          {/* Result */}
                          {showResults[`${tag.tag}-${index}`] && (
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                              <h5 className="font-medium text-purple-800 mb-2">Kết quả hiển thị:</h5>
                              <p className="text-purple-700 text-sm italic">
                                {example.result}
                              </p>
                            </div>
                          )}

                          {/* Explanation */}
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                            <h5 className="font-medium text-blue-800 mb-2">💡 Giải thích:</h5>
                            <p className="text-blue-700 text-sm">
                              {example.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </section>

        {/* Quick Reference Table */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3" id="quick-reference">
            <Target className="w-8 h-8 text-purple-600" />
            Bảng tham khảo nhanh
          </h2>

          <Card className="shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thẻ
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tên
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mục đích
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Semantic
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {textTags.map((tag) => (
                      <tr
                        key={tag.tag}
                        className={`hover:bg-gray-50 cursor-pointer ${activeTag === tag.tag ? 'bg-purple-50' : ''}`}
                        onClick={() => setActiveTag(tag.tag)}
                      >
                        <td className="px-4 py-3 whitespace-nowrap">
                          <code className="text-purple-600 font-medium">&lt;{tag.tag}&gt;</code>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                          {tag.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 max-w-xs">
                          {tag.purpose}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {tag.semantic ? (
                            <Badge className="bg-green-100 text-green-800 text-xs">✓</Badge>
                          ) : (
                            <Badge className="bg-gray-100 text-gray-800 text-xs">-</Badge>
                          )}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge className={getCategoryColor(tag.category)} variant="secondary">
                            {tag.category}
                          </Badge>
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
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3" id="best-practices">
            <Lightbulb className="w-8 h-8 text-purple-600" />
            Best Practices cho Text Formatting
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                  ✅ Semantic Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">Ưu tiên semantic elements: <code>&lt;strong&gt;</code> thay vì <code>&lt;b&gt;</code></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">Dùng <code>&lt;abbr title="..."&gt;</code> cho abbreviations với full expansion</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">Sử dụng <code>&lt;code&gt;</code> cho inline code, <code>&lt;kbd&gt;</code> cho keyboard input</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">Combine elements semantically: <code>&lt;dfn&gt;&lt;abbr&gt;</code> cho first usage</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">Dùng <code>&lt;del&gt;</code>/<code>&lt;ins&gt;</code> với datetime cho tracking changes</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800 flex items-center gap-2">
                  ❌ Common Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">Dùng <code>&lt;b&gt;</code>/<code>&lt;i&gt;</code> thay vì semantic alternatives</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">Overuse <code>&lt;strong&gt;</code>/<code>&lt;em&gt;</code> - mất ý nghĩa emphasis</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">Nested emphasis elements: <code>&lt;strong&gt;&lt;em&gt;...&lt;/em&gt;&lt;/strong&gt;</code></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">Dùng <code>&lt;small&gt;</code> chỉ để make text smaller (không semantic)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">Missing title attribute trong <code>&lt;abbr&gt;</code> elements</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interview FAQ Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3" id="interview-faqs">
              <HelpCircle className="w-8 h-8 text-purple-600" />
              Câu hỏi phỏng vấn về Text Formatting
            </h2>

            <Badge className="bg-purple-100 text-purple-800">
              {filteredFAQs.length} câu hỏi
            </Badge>
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
                    variant={filterLevel === level ? "default" : "outline"}
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
                {['all', 'semantic', 'styling', 'accessibility', 'best-practices'].map(category => (
                  <Button
                    key={category}
                    size="sm"
                    variant={filterCategory === category ? "default" : "outline"}
                    onClick={() => setFilterCategory(category)}
                    className="text-xs"
                  >
                    {category === 'all' ? 'Tất cả' : category.replace('-', ' ')}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
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
                      </div>
                      <CardTitle
                        className="text-lg cursor-pointer hover:text-purple-600 transition-colors"
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
                    <p className="text-gray-700 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
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
            <li>• Text formatting elements có semantic meaning, không chỉ là visual styling</li>
            <li>• Ưu tiên semantic elements: strong/em thay vì b/i cho better SEO và accessibility</li>
            <li>• Mỗi element có purpose cụ thể: mark=relevance, strong=importance, em=emphasis</li>
            <li>• Code-related elements: code (inline), kbd (keyboard), samp (output), var (variables)</li>
            <li>• Edit elements del/ins với datetime attribute cho tracking changes</li>
            <li>• Abbreviations với title attribute quan trọng cho accessibility</li>
          </ul>
        </section>
      </div>
    </HTMLLayout>
  );
}

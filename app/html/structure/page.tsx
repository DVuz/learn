'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ChevronDown,
  ChevronUp,
  Code,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  HelpCircle,
} from 'lucide-react';
import HTMLLayout from '../components/HTMLLayout';
import {
  HTML_TABLE_OF_CONTENTS,
  HTML_NAVIGATIONS,
  getProgressForLesson,
} from '../constants/htmlData';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  level: 'junior' | 'mid' | 'senior';
  category: 'basic' | 'semantic' | 'performance' | 'accessibility' | 'best-practices';
}

const navigation = HTML_NAVIGATIONS['introduction'] || {};
const progress = getProgressForLesson('introduction');

const interviewFAQs: FAQ[] = [
  // Existing questions
  {
    id: 1,
    question: 'HTML là gì và tại sao nó quan trọng?',
    answer:
      'HTML (HyperText Markup Language) là ngôn ngữ đánh dấu chuẩn để tạo trang web. Nó sử dụng các thẻ để định nghĩa cấu trúc và nội dung của trang web. HTML quan trọng vì nó là nền tảng của mọi trang web, cung cấp cấu trúc semantic và khả năng truy cập cho người dùng và search engines.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 2,
    question: 'Sự khác biệt giữa HTML elements và HTML attributes?',
    answer:
      "HTML elements là các thành phần cấu trúc được định nghĩa bởi thẻ mở và đóng (ví dụ: <div></div>). HTML attributes cung cấp thông tin bổ sung cho elements (ví dụ: <div class='container' id='main'>). Elements định nghĩa 'cái gì', attributes định nghĩa 'như thế nào'.",
    level: 'junior',
    category: 'basic',
  },
  {
    id: 3,
    question: 'DOCTYPE declaration có tác dụng gì?',
    answer:
      'DOCTYPE declaration thông báo cho browser loại document nào đang được xử lý. Trong HTML5, ta dùng <!DOCTYPE html>. Nó giúp browser render trang ở standards mode thay vì quirks mode, đảm bảo hiển thị nhất quán.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 4,
    question: 'Sự khác biệt giữa block và inline elements?',
    answer:
      'Block elements (div, p, h1-h6) chiếm toàn bộ chiều rộng available, bắt đầu dòng mới và có thể chứa block/inline elements. Inline elements (span, a, strong) chỉ chiếm không gian cần thiết, không bắt đầu dòng mới và chỉ chứa inline elements.',
    level: 'junior',
    category: 'basic',
  },

  // New junior level questions
  {
    id: 21,
    question: 'Cấu trúc cơ bản của một trang HTML?',
    answer:
      'Cấu trúc HTML cơ bản gồm: <!DOCTYPE html> (khai báo loại document), <html> (root element), <head> (metadata không hiển thị), <title> (tiêu đề trang), <body> (nội dung hiển thị). Ví dụ: <!DOCTYPE html><html><head><title>Trang web</title></head><body><h1>Xin chào</h1></body></html>',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 22,
    question: 'Thẻ <head> chứa những gì?',
    answer:
      'Thẻ <head> chứa metadata không hiển thị: <title> (tiêu đề trang), <meta> (charset, viewport, description), <link> (CSS, favicon), <script> (JavaScript), <style> (CSS internal). Thông tin này dành cho browser và search engines, không hiển thị trên trang.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 23,
    question: 'Sự khác biệt giữa <h1>, <h2>, <h3>...?',
    answer:
      'Các thẻ heading (h1-h6) tạo tiêu đề với tầm quan trọng giảm dần. <h1> là tiêu đề chính (chỉ nên có 1 trên trang), <h2> là tiêu đề phụ, <h3> là tiêu đề con của <h2>. Chúng tạo cấu trúc phân cấp cho nội dung và quan trọng cho SEO.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 24,
    question: 'Làm thế nào để tạo danh sách trong HTML?',
    answer:
      'HTML có 3 loại danh sách: <ul> (unordered list - dấu chấm), <ol> (ordered list - số thứ tự), <dl> (definition list - định nghĩa). Các item trong <ul> và <ol> dùng thẻ <li>. Ví dụ: <ul><li>Item 1</li><li>Item 2</li></ul>',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 25,
    question: 'Cách tạo link trong HTML?',
    answer:
      'Dùng thẻ <a> với attribute href. Ví dụ: <a href="https://example.com">Link text</a> (link external), <a href="page.html">Trang khác</a> (link internal), <a href="#section">Jump to section</a> (link anchor), <a href="mailto:email@domain.com">Gửi email</a>',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 26,
    question: 'Cách chèn hình ảnh trong HTML?',
    answer:
      'Dùng thẻ <img> (self-closing). Cú pháp: <img src="path/to/image.jpg" alt="Mô tả hình ảnh">. Attribute src chỉ đường dẫn ảnh, alt cung cấp text thay thế khi ảnh không load được (quan trọng cho accessibility). Có thể thêm width, height để điều chỉnh kích thước.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 27,
    question: 'Sự khác biệt giữa <strong> và <b>, <em> và <i>?',
    answer:
      '<strong> và <em> có ý nghĩa semantic (nhấn mạnh quan trọng), <b> và <i> chỉ là formatting. <strong> thể hiện tầm quan trọng cao, <em> thể hiện nhấn mạnh. Screen readers sẽ đọc <strong>/<em> khác biệt nhưng không phân biệt <b>/<i>.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 28,
    question: 'Cách tạo bảng cơ bản trong HTML?',
    answer:
      'Cấu trúc bảng: <table> (container), <tr> (table row), <td> (cell), <th> (header cell). Ví dụ: <table><tr><th>Tên</th><th>Tuổi</th></tr><tr><td>An</td><td>25</td></tr></table>. Có thể thêm <thead>, <tbody>, <tfoot> để phân nhóm.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 29,
    question: 'Form HTML cơ bản gồm những gì?',
    answer:
      'Form cơ bản: <form> (container), <input> (nhập liệu), <label> (nhãn), <button> (nút submit). Ví dụ: <form><label for="name">Tên:</label><input type="text" id="name" name="name"><button type="submit">Gửi</button></form>. Attribute action chỉ nơi xử lý data.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 30,
    question: 'Các loại input phổ biến trong HTML?',
    answer:
      'Input types phổ biến: text (text thường), password (ẩn text), email (email validation), number (chỉ số), checkbox (tick box), radio (chọn 1 trong nhiều), submit (nút gửi), button (nút thường), file (upload file), hidden (ẩn data).',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 31,
    question: 'Attribute id và class khác nhau như thế nào?',
    answer:
      'id là unique identifier (duy nhất trên trang), dùng để target element cụ thể với CSS/JavaScript. class có thể dùng cho nhiều elements, dùng để nhóm styling. Ví dụ: <div id="header" class="container blue">. CSS: #header (id), .container (class).',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 32,
    question: 'Cách tạo comment trong HTML?',
    answer:
      'Comment HTML dùng syntax <!-- nội dung comment -->. Ví dụ: <!-- Đây là comment không hiển thị -->. Comments giúp ghi chú code, tạm ẩn code, hoặc để lại ghi chú cho developers khác. Browser sẽ ignore comments khi render.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 33,
    question: 'Thẻ <div> và <span> dùng để làm gì?',
    answer:
      '<div> là block-level generic container, dùng để nhóm elements và tạo layout. <span> là inline generic container, dùng để style một phần text hoặc nhóm inline elements. Cả hai đều không có semantic meaning, chỉ dùng cho styling/scripting.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 34,
    question: 'Cách tạo line break và paragraph trong HTML?',
    answer:
      '<br> tạo line break (xuống dòng) - là self-closing tag. <p> tạo paragraph (đoạn văn) với margin tự động. Ví dụ: <p>Đoạn 1</p><p>Đoạn 2</p> tạo 2 đoạn riêng biệt. Không nên dùng nhiều <br> liên tiếp để tạo khoảng cách.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 35,
    question: 'Attribute title có tác dụng gì?',
    answer:
      'Attribute title cung cấp thông tin bổ sung, hiển thị tooltip khi hover. Ví dụ: <a href="#" title="Đây là link">Link</a>, <img src="image.jpg" title="Mô tả ảnh" alt="Alt text">. Title giúp improve user experience và accessibility.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 36,
    question: 'Cách embed video và audio trong HTML?',
    answer:
      'HTML5 cung cấp <video> và <audio> tags. Ví dụ: <video controls><source src="video.mp4" type="video/mp4">Browser không support</video>. Attribute controls hiển thị player controls. Có thể thêm multiple <source> cho cross-browser compatibility.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 37,
    question: 'Sự khác biệt giữa absolute và relative URL?',
    answer:
      'Absolute URL chứa full path: https://example.com/page.html. Relative URL là path tương đối: page.html (cùng folder), ../page.html (folder cha), /page.html (root domain). Relative URLs linh hoạt hơn khi move website.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 38,
    question: 'Target attribute trong thẻ <a> làm gì?',
    answer:
      'Target attribute chỉ định nơi mở link: _blank (tab/window mới), _self (cùng tab - default), _parent (parent frame), _top (full window). Ví dụ: <a href="https://example.com" target="_blank">Mở tab mới</a>. Nên thêm rel="noopener" cho security.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 39,
    question: 'Cách tạo dropdown list trong HTML?',
    answer:
      'Dùng <select> và <option>. Ví dụ: <select name="city"><option value="hn">Hà Nội</option><option value="hcm">TP.HCM</option></select>. Attribute multiple cho phép chọn nhiều. <optgroup> để nhóm options.',
    level: 'junior',
    category: 'basic',
  },
  {
    id: 40,
    question: 'Textarea khác input type="text" như thế nào?',
    answer:
      '<textarea> cho phép nhập text nhiều dòng, có thể resize. <input type="text"> chỉ một dòng, fixed height. Ví dụ: <textarea rows="4" cols="50" name="message">Nội dung mặc định</textarea>. Textarea thích hợp cho comments, messages dài.',
    level: 'junior',
    category: 'basic',
  },

  // Keep existing mid and senior level questions
  {
    id: 5,
    question: 'Semantic HTML là gì và tại sao quan trọng?',
    answer:
      'Semantic HTML sử dụng các thẻ có ý nghĩa rõ ràng (header, nav, main, article, section, footer) thay vì div generic. Nó quan trọng cho SEO, accessibility, maintainability và giúp screen readers hiểu cấu trúc trang.',
    level: 'mid',
    category: 'semantic',
  },
  {
    id: 6,
    question: 'Sự khác biệt giữa <section>, <article>, và <div>?',
    answer:
      '<article> cho nội dung độc lập có thể đứng riêng (blog post, news article). <section> cho nhóm nội dung có chủ đề liên quan. <div> là generic container không có semantic meaning. Chọn dựa trên ý nghĩa nội dung, không phải styling.',
    level: 'mid',
    category: 'semantic',
  },
  {
    id: 7,
    question: 'Accessibility trong HTML và ARIA attributes?',
    answer:
      'Accessibility đảm bảo web có thể sử dụng bởi người khuyết tật. ARIA (Accessible Rich Internet Applications) attributes như aria-label, aria-describedby, role cung cấp thông tin semantic bổ sung cho assistive technologies khi HTML semantic không đủ.',
    level: 'mid',
    category: 'accessibility',
  },
  {
    id: 8,
    question: 'HTML5 đã thêm những tính năng gì?',
    answer:
      'HTML5 thêm semantic elements (header, nav, section), new input types (email, date, range), multimedia elements (video, audio), Canvas API, Web Storage, Geolocation API, drag-and-drop, và loại bỏ cần plugin cho multimedia.',
    level: 'mid',
    category: 'basic',
  },
  {
    id: 9,
    question: 'Form validation trong HTML5?',
    answer:
      'HTML5 cung cấp built-in validation với attributes như required, pattern, min/max, minlength/maxlength. Input types như email, url tự động validate format. JavaScript có thể access validation state qua Constraint Validation API.',
    level: 'mid',
    category: 'basic',
  },
  {
    id: 10,
    question: 'Meta tags quan trọng cho SEO?',
    answer:
      'Meta tags quan trọng: title (hiển thị trên search results), description (snippet mô tả), viewport (responsive), charset (encoding), Open Graph (social sharing), canonical (duplicate content), robots (crawling instructions).',
    level: 'mid',
    category: 'best-practices',
  },
  {
    id: 11,
    question: 'Critical rendering path và HTML optimization?',
    answer:
      'Critical rendering path là quá trình browser render trang. Optimize bằng cách: minimize HTML, inline critical CSS, preload key resources, use resource hints (dns-prefetch, preconnect), avoid render-blocking scripts, lazy load non-critical content.',
    level: 'senior',
    category: 'performance',
  },
  {
    id: 12,
    question: 'Custom elements và Web Components?',
    answer:
      'Custom elements cho phép tạo HTML tags tùy chỉnh với JavaScript. Web Components bao gồm Custom Elements, Shadow DOM, HTML Templates. Chúng cho phép tạo reusable, encapsulated components mà không cần framework.',
    level: 'senior',
    category: 'basic',
  },
  {
    id: 13,
    question: 'Progressive Enhancement vs Graceful Degradation?',
    answer:
      'Progressive Enhancement bắt đầu với basic functionality, sau đó enhance cho browsers hiện đại. Graceful Degradation bắt đầu với full experience, sau đó fallback cho browsers cũ. Progressive Enhancement được prefer vì đảm bảo accessibility tốt hơn.',
    level: 'senior',
    category: 'best-practices',
  },
  {
    id: 14,
    question: 'Content Security Policy (CSP) trong HTML?',
    answer:
      'CSP là security feature ngăn XSS attacks bằng cách kiểm soát resources nào page có thể load. Implement qua HTTP header hoặc meta tag. Nó định nghĩa trusted sources cho scripts, styles, images, fonts, etc.',
    level: 'senior',
    category: 'best-practices',
  },
  {
    id: 15,
    question: 'Shadow DOM và encapsulation?',
    answer:
      'Shadow DOM tạo isolated DOM tree attached vào element. Nó cung cấp style và markup encapsulation, ngăn CSS bleeding và naming conflicts. Được sử dụng trong Web Components và browser built-ins như <video>.',
    level: 'senior',
    category: 'basic',
  },
  {
    id: 16,
    question: 'HTML parsing và DOM construction?',
    answer:
      'Browser parse HTML theo steps: tokenization (chia thành tokens), tree construction (xây dựng DOM tree), handling errors. Parser có thể recover từ malformed HTML. Understanding này giúp optimize HTML structure và debug rendering issues.',
    level: 'senior',
    category: 'performance',
  },
  {
    id: 17,
    question: 'Microdata và Structured Data?',
    answer:
      'Microdata và JSON-LD cho phép embed structured data trong HTML để search engines hiểu content context. Schema.org cung cấp vocabulary cho products, events, organizations, etc. Giúp rich snippets trong search results.',
    level: 'senior',
    category: 'best-practices',
  },
  {
    id: 18,
    question: 'HTML templating và slot-based architecture?',
    answer:
      'HTML <template> element chứa markup không render. <slot> trong Web Components cho phép content projection. Template cloning hiệu quả hơn innerHTML. Slot cho phép flexible, reusable component design.',
    level: 'senior',
    category: 'basic',
  },
  {
    id: 19,
    question: 'Performance budget và HTML optimization?',
    answer:
      'Performance budget đặt limits cho resource sizes/counts. HTML optimization: minimize markup, avoid deep nesting, use semantic elements (better parsing), compress với gzip/brotli, critical path optimization, resource prioritization.',
    level: 'senior',
    category: 'performance',
  },
  {
    id: 20,
    question: 'Cross-origin policies và HTML security?',
    answer:
      "Same-origin policy, CORS headers, iframe sandbox attribute, rel='noopener noreferrer' cho external links, X-Frame-Options header ngăn clickjacking. Understanding security implications của HTML attributes và browser policies.",
    level: 'senior',
    category: 'best-practices',
  },
];
export default function HTMLIntroductionPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [filterLevel, setFilterLevel] = useState<'all' | 'junior' | 'mid' | 'senior'>('all');
  const [filterCategory, setFilterCategory] = useState<'all' | string>('all');

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const filteredFAQs = interviewFAQs.filter(faq => {
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
      case 'semantic':
        return 'bg-purple-100 text-purple-800';
      case 'performance':
        return 'bg-orange-100 text-orange-800';
      case 'accessibility':
        return 'bg-teal-100 text-teal-800';
      case 'best-practices':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <HTMLLayout
      currentLesson="Giới thiệu HTML"
      tableOfContents={HTML_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 text-lg">
            <Code className="w-5 h-5 mr-2" />
            HTML Fundamentals
          </Badge>

          <h1 className="text-5xl font-bold text-gray-900" id="html-introduction">
            🌐 Giới Thiệu HTML
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HTML (HyperText Markup Language) là ngôn ngữ đánh dấu chuẩn để tạo và cấu trúc nội dung
            trên web. Đây là nền tảng cơ bản mà mọi web developer cần nắm vững.
          </p>
        </div>

        {/* What is HTML */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="what-is-html"
          >
            <Globe className="w-8 h-8 text-orange-600" />
            HTML là gì?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl text-orange-800">Định nghĩa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>HTML</strong> là viết tắt của <em>HyperText Markup Language</em> - ngôn
                  ngữ đánh dấu siêu văn bản.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>HyperText:</strong> Văn bản có thể liên kết với nhau
                  </li>
                  <li>
                    • <strong>Markup:</strong> Đánh dấu cấu trúc nội dung
                  </li>
                  <li>
                    • <strong>Language:</strong> Có syntax và quy tắc riêng
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Đặc điểm chính</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Không phải ngôn ngữ lập trình</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Sử dụng thẻ (tags) để đánh dấu</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Platform-independent</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Có thể đọc được bởi con người</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Purpose and Usage */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="html-purpose"
          >
            <Target className="w-8 h-8 text-orange-600" />
            HTML được dùng để làm gì?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <CardTitle className="text-lg">Cấu trúc nội dung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Tạo cấu trúc logic cho trang web với headings, paragraphs, lists, tables
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <CardTitle className="text-lg">Liên kết trang web</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Tạo hyperlinks kết nối các trang, tài liệu và tạo navigation
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <CardTitle className="text-lg">Multimedia & Forms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Nhúng hình ảnh, video, audio và tạo forms tương tác với người dùng
                </p>
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
            <Lightbulb className="w-8 h-8 text-orange-600" />
            Khái niệm quan trọng
          </h2>

          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">1. HTML Elements & Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm">
                    &lt;tagname attribute="value"&gt;Content&lt;/tagname&gt;
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Opening Tag</h4>
                    <p className="text-gray-600 text-sm">Bắt đầu element, có thể chứa attributes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Closing Tag</h4>
                    <p className="text-gray-600 text-sm">Kết thúc element, có dấu slash (/)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">2. Document Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                  <div>&lt;!DOCTYPE html&gt;</div>
                  <div>&lt;html lang="vi"&gt;</div>
                  <div className="ml-4">&lt;head&gt;</div>
                  <div className="ml-8">&lt;meta charset="UTF-8"&gt;</div>
                  <div className="ml-8">&lt;title&gt;Page Title&lt;/title&gt;</div>
                  <div className="ml-4">&lt;/head&gt;</div>
                  <div className="ml-4">&lt;body&gt;</div>
                  <div className="ml-8">&lt;!-- Nội dung trang web --&gt;</div>
                  <div className="ml-4">&lt;/body&gt;</div>
                  <div>&lt;/html&gt;</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">3. Semantic HTML</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Sử dụng các thẻ có ý nghĩa rõ ràng thay vì các thẻ generic như div:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded">
                    <code>&lt;header&gt;</code>
                    <p className="text-xs text-gray-600 mt-1">Phần đầu trang</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <code>&lt;nav&gt;</code>
                    <p className="text-xs text-gray-600 mt-1">Menu điều hướng</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded">
                    <code>&lt;main&gt;</code>
                    <p className="text-xs text-gray-600 mt-1">Nội dung chính</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <code>&lt;footer&gt;</code>
                    <p className="text-xs text-gray-600 mt-1">Phần cuối trang</p>
                  </div>
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
              <HelpCircle className="w-8 h-8 text-orange-600" />
              Câu hỏi phỏng vấn về HTML
            </h2>

            <Badge className="bg-orange-100 text-orange-800">{filteredFAQs.length} câu hỏi</Badge>
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
                {['all', 'basic', 'semantic', 'performance', 'accessibility', 'best-practices'].map(
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
                        className="text-lg cursor-pointer hover:text-orange-600 transition-colors"
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

        {/* Getting Started */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="getting-started"
          >
            <BookOpen className="w-8 h-8 text-orange-600" />
            Bắt đầu với HTML
          </h2>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-orange-900">🚀 Sẵn sàng học HTML?</h3>

                <p className="text-orange-800 text-lg max-w-2xl mx-auto">
                  HTML là nền tảng của web development. Hãy bắt đầu với cấu trúc cơ bản và từng bước
                  nâng cao kỹ năng của bạn!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📚</div>
                    <h4 className="font-semibold text-orange-900">Học lý thuyết</h4>
                    <p className="text-sm text-orange-700">Nắm vững concepts cơ bản</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">💻</div>
                    <h4 className="font-semibold text-orange-900">Thực hành code</h4>
                    <p className="text-sm text-orange-700">Viết HTML thực tế</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <h4 className="font-semibold text-orange-900">Làm project</h4>
                    <p className="text-sm text-orange-700">Xây dựng trang web hoàn chỉnh</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Summary */}
        <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <h3 className="font-bold text-blue-900 text-lg mb-3">📝 Tóm tắt bài học</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• HTML là ngôn ngữ đánh dấu chuẩn để tạo trang web</li>
            <li>• Sử dụng tags và attributes để định nghĩa cấu trúc và nội dung</li>
            <li>• Semantic HTML giúp tốt cho SEO và accessibility</li>
            <li>• Nền tảng cần thiết cho mọi web developer</li>
            <li>• Cần hiểu rõ để chuẩn bị cho phỏng vấn technical</li>
          </ul>
        </section>
      </div>
    </HTMLLayout>
  );
}

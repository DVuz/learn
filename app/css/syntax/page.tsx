'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  FileText,
  Layers,
  Eye,
  Play,
  ChevronDown,
  ChevronRight,
  Target,
  Hash,
  Zap,
} from 'lucide-react';
import CSSLayout from '../components/CSSLayout';
import { CSS_NAVIGATIONS, CSS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/cssData';

const navigation = CSS_NAVIGATIONS['syntax'];
const progress = getProgressForLesson('syntax');

export default function CSSSyntaxSelectorsPage() {
  const [expandedSections, setExpandedSections] = useState({
    syntax: true,
    elementSelector: false,
    classSelector: false,
    idSelector: false,
    attributeSelector: false,
    pseudoClasses: false,
    pseudoElements: false,
    combinators: false,
  });

  type SectionKey = keyof typeof expandedSections;

  const toggleSection = (section: SectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const examples = {
    basicSyntax: {
      css: `h1 {
  color: blue;
  font-size: 28px;
  margin: 20px 0;
}`,
      html: `<h1>Tiêu đề chính</h1>`,
      result: (
        <div style={{ color: 'blue', fontSize: '28px', margin: '20px 0' }}>Tiêu đề chính</div>
      ),
    },
    elementSelector: {
      css: `p {
  color: #333;
  line-height: 1.6;
}

h2 {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}`,
      html: `<h2>Tiêu đề phụ</h2>
<p>Đây là một đoạn văn bản mẫu.</p>`,
      result: (
        <div>
          <h2 style={{ color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: '5px' }}>
            Tiêu đề phụ
          </h2>
          <p style={{ color: '#333', lineHeight: '1.6' }}>Đây là một đoạn văn bản mẫu.</p>
        </div>
      ),
    },
    classSelector: {
      css: `.highlight {
  background-color: yellow;
  padding: 5px;
  border-radius: 3px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}`,
      html: `<p class="highlight">Văn bản được highlight</p>
<button class="btn-primary">Button Primary</button>`,
      result: (
        <div className="space-y-3">
          <p
            style={{
              backgroundColor: 'yellow',
              padding: '5px',
              borderRadius: '3px',
              display: 'inline-block',
            }}
          >
            Văn bản được highlight
          </p>
          <div>
            <button
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Button Primary
            </button>
          </div>
        </div>
      ),
    },
    idSelector: {
      css: `#header {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  border: 1px solid #dee2e6;
}

#main-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}`,
      html: `<div id="header">Header của trang</div>
<div id="main-content">Nội dung chính</div>`,
      result: (
        <div>
          <div
            style={{
              backgroundColor: '#f8f9fa',
              padding: '20px',
              textAlign: 'center',
              border: '1px solid #dee2e6',
              marginBottom: '10px',
            }}
          >
            Header của trang
          </div>
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '20px',
              backgroundColor: '#fff',
              border: '1px solid #eee',
            }}
          >
            Nội dung chính
          </div>
        </div>
      ),
    },
    attributeSelector: {
      css: `input[type="text"] {
  border: 2px solid #007bff;
  padding: 8px;
  border-radius: 4px;
}

a[href^="https"] {
  color: green;
  font-weight: bold;
}

img[alt*="logo"] {
  border: 3px solid gold;
}`,
      html: `<input type="text" placeholder="Text input">
<a href="https://example.com">Link HTTPS</a>
<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjY2NjIi8+Cjx0ZXh0IHg9IjI1IiB5PSIyOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzMzMyI+TG9nbzwvdGV4dD4KICA8L3N2Zz4=" alt="company logo">`,
      result: (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Text input"
            style={{
              border: '2px solid #007bff',
              padding: '8px',
              borderRadius: '4px',
              width: '200px',
            }}
          />
          <div>
            <a href="https://example.com" style={{ color: 'green', fontWeight: 'bold' }}>
              Link HTTPS
            </a>
          </div>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjY2NjIi8+Cjx0ZXh0IHg9IjI1IiB5PSIyOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzMzMyI+TG9nbzwvdGV4dD4KICA8L3N2Zz4="
            alt="company logo"
            style={{ border: '3px solid gold' }}
          />
        </div>
      ),
    },
    pseudoClasses: {
      css: `button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

li:nth-child(odd) {
  background-color: #f8f9fa;
}

li:nth-child(even) {
  background-color: #e9ecef;
}

input:focus {
  outline: 2px solid #007bff;
  box-shadow: 0 0 5px rgba(0,123,255,0.5);
}`,
      html: `<button>Hover me!</button>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
<input type="text" placeholder="Click to focus">`,
      result: (
        <div className="space-y-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 transition-all cursor-pointer">
            Hover me!
          </button>
          <ul className="list-none p-0 m-0">
            <li style={{ backgroundColor: '#f8f9fa', padding: '8px', margin: '2px 0' }}>Item 1</li>
            <li style={{ backgroundColor: '#e9ecef', padding: '8px', margin: '2px 0' }}>Item 2</li>
            <li style={{ backgroundColor: '#f8f9fa', padding: '8px', margin: '2px 0' }}>Item 3</li>
            <li style={{ backgroundColor: '#e9ecef', padding: '8px', margin: '2px 0' }}>Item 4</li>
          </ul>
          <input
            type="text"
            placeholder="Click to focus"
            className="border-2 border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      ),
    },
    pseudoElements: {
      css: `p::before {
  content: "🔥 ";
  color: red;
}

p::after {
  content: " ✨";
  color: gold;
}

h3::first-letter {
  font-size: 2em;
  color: #007bff;
  font-weight: bold;
}`,
      html: `<h3>Chữ cái đầu to</h3>
<p>Nội dung với before và after</p>`,
      result: (
        <div className="space-y-3">
          <h3 style={{ margin: 0 }}>
            <span style={{ fontSize: '2em', color: '#007bff', fontWeight: 'bold' }}>C</span>hữ cái
            đầu to
          </h3>
          <p style={{ margin: 0 }}>
            <span style={{ color: 'red' }}>🔥 </span>
            Nội dung với before và after
            <span style={{ color: 'gold' }}> ✨</span>
          </p>
        </div>
      ),
    },
    combinators: {
      css: `/* Descendant selector */
.container p {
  color: blue;
}

/* Child selector (>) */
.parent > .child {
  background-color: yellow;
  padding: 5px;
}

/* Adjacent sibling */
h4 + p {
  margin-top: 0;
  font-weight: bold;
}

/* General sibling */
h4 ~ p {
  margin-left: 20px;
}`,
      html: `<div class="container">
  <p>Paragraph trong container</p>
  <div class="parent">
    <div class="child">Direct child</div>
    <div>
      <div class="child">Nested child</div>
    </div>
  </div>
</div>
<h4>Heading</h4>
<p>First paragraph after heading</p>
<p>Second paragraph after heading</p>`,
      result: (
        <div className="space-y-3">
          <div>
            <p style={{ color: 'blue', margin: '5px 0' }}>Paragraph trong container</p>
            <div style={{ border: '1px solid #ccc', padding: '10px' }}>
              <div style={{ backgroundColor: 'yellow', padding: '5px', margin: '5px 0' }}>
                Direct child
              </div>
              <div style={{ border: '1px dashed #999', padding: '5px', margin: '5px 0' }}>
                <div style={{ backgroundColor: '#f0f0f0', padding: '5px' }}>
                  Nested child (không có yellow background)
                </div>
              </div>
            </div>
          </div>
          <h4 style={{ margin: '10px 0 0 0' }}>Heading</h4>
          <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>First paragraph after heading</p>
          <p style={{ margin: '5px 0 0 20px' }}>Second paragraph after heading</p>
        </div>
      ),
    },
  };

  interface Example {
    css: string;
    html: string;
    result: React.ReactNode;
  }

  const ExampleViewer = ({ example, title }: { example: Example; title: string }) => {
    const [activeTab, setActiveTab] = useState('css');

    return (
      <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="bg-gray-50 border-b p-3">
          <h4 className="font-semibold text-gray-800">{title}</h4>
        </div>

        <div className="flex border-b">
          {['css', 'html', 'result'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-r ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab === 'css' && 'CSS'}
              {tab === 'html' && 'HTML'}
              {tab === 'result' && 'Kết quả'}
            </button>
          ))}
        </div>

        <div className="p-4">
          {activeTab === 'css' && (
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
              <code>{example.css}</code>
            </pre>
          )}

          {activeTab === 'html' && (
            <pre className="bg-gray-900 text-blue-400 p-4 rounded text-sm overflow-x-auto">
              <code>{example.html}</code>
            </pre>
          )}

          {activeTab === 'result' && (
            <div className="border rounded p-4 bg-gray-50 min-h-24">{example.result}</div>
          )}
        </div>
      </div>
    );
  };

  interface SectionHeaderProps {
    id: string;
    title: string;
    icon: React.ElementType;
    isExpanded: boolean;
    onToggle: () => void;
  }

  const SectionHeader = ({ id, title, icon: Icon, isExpanded, onToggle }: SectionHeaderProps) => (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
    </button>
  );

  return (
    <CSSLayout
      currentLesson="Cú pháp CSS và Selectors"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 text-lg">
            <Code className="w-5 h-5 mr-2" />
            CSS Syntax & Selectors
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900" id="css-syntax-selectors">
            Cú pháp CSS và Selectors
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Học chi tiết về cú pháp CSS và các loại selectors với ví dụ minh họa trực quan
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* CSS Syntax Section */}
          <div className="space-y-4">
            <SectionHeader
              id="syntax"
              title="Cú pháp CSS cơ bản"
              icon={FileText}
              isExpanded={expandedSections.syntax}
              onToggle={() => toggleSection('syntax')}
            />

            {expandedSections.syntax && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="cu-phap-css"
                >
                  <FileText className="w-6 h-6 text-blue-600" />
                  Cú pháp CSS cơ bản
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    CSS rule bao gồm <strong>selector</strong> và <strong>declaration block</strong>
                    . Declaration block chứa các cặp property-value được phân tách bởi dấu chấm
                    phẩy.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`selector {
  property: value;
  property: value;
  /* comment */
}`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-3">📝 Các thành phần:</h3>
                      <ul className="text-blue-800 space-y-2">
                        <li>
                          <strong>Selector:</strong> Chọn phần tử HTML
                        </li>
                        <li>
                          <strong>Property:</strong> Thuộc tính muốn thay đổi
                        </li>
                        <li>
                          <strong>Value:</strong> Giá trị của thuộc tính
                        </li>
                        <li>
                          <strong>Declaration:</strong> Cặp property: value
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-3">✅ Quy tắc:</h3>
                      <ul className="text-green-800 space-y-2">
                        <li>
                          Kết thúc mỗi declaration bằng <code>;</code>
                        </li>
                        <li>
                          Bao declaration block bằng <code>{'{}'}</code>
                        </li>
                        <li>
                          Comments: <code>/* nội dung */</code>
                        </li>
                        <li>Phân biệt hoa thường với values</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.basicSyntax} title="Ví dụ cú pháp cơ bản" />
              </div>
            )}
          </div>

          {/* Element Selectors */}
          <div className="space-y-4">
            <SectionHeader
              id="elementSelector"
              title="Element Selectors"
              icon={Layers}
              isExpanded={expandedSections.elementSelector}
              onToggle={() => toggleSection('elementSelector')}
            />

            {expandedSections.elementSelector && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="element-selectors"
                >
                  <Layers className="w-6 h-6 text-green-600" />
                  Element Selectors
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Element selector chọn tất cả phần tử HTML có cùng tên tag.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <pre className="text-green-400 text-base overflow-x-auto">
                      {`h1 { color: blue; }
p { font-size: 16px; }
div { margin: 10px; }`}
                    </pre>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Lưu ý:</h4>
                    <p className="text-yellow-700">
                      Element selector áp dụng cho <strong>tất cả</strong> phần tử cùng loại trên
                      trang. Hãy cẩn thận khi sử dụng để tránh ảnh hưởng không mong muốn.
                    </p>
                  </div>
                </div>

                <ExampleViewer example={examples.elementSelector} title="Element Selectors" />
              </div>
            )}
          </div>

          {/* Class Selectors */}
          <div className="space-y-4">
            <SectionHeader
              id="classSelector"
              title="Class Selectors"
              icon={Target}
              isExpanded={expandedSections.classSelector}
              onToggle={() => toggleSection('classSelector')}
            />

            {expandedSections.classSelector && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="class-selectors"
                >
                  <Target className="w-6 h-6 text-purple-600" />
                  Class Selectors
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Class selector sử dụng dấu chấm (.) để chọn phần tử có attribute class tương
                    ứng.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <pre className="text-green-400 text-base overflow-x-auto">
                      {`.class-name { property: value; }
.btn { padding: 10px; }
.highlight { background: yellow; }`}
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">🎯 Ưu điểm:</h4>
                      <ul className="text-blue-800 space-y-2">
                        <li>Tái sử dụng được</li>
                        <li>Có thể áp dụng cho nhiều phần tử</li>
                        <li>Dễ bảo trì và cập nhật</li>
                        <li>Tách biệt structure và style</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">💡 Best Practices:</h4>
                      <ul className="text-purple-800 space-y-2">
                        <li>Đặt tên class có ý nghĩa</li>
                        <li>Sử dụng kebab-case</li>
                        <li>Tránh tên quá chung chung</li>
                        <li>Theo nguyên tắc BEM nếu có thể</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.classSelector} title="Class Selectors" />
              </div>
            )}
          </div>

          {/* ID Selectors */}
          <div className="space-y-4">
            <SectionHeader
              id="idSelector"
              title="ID Selectors"
              icon={Hash}
              isExpanded={expandedSections.idSelector}
              onToggle={() => toggleSection('idSelector')}
            />

            {expandedSections.idSelector && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="id-selectors"
                >
                  <Hash className="w-6 h-6 text-red-600" />
                  ID Selectors
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    ID selector sử dụng dấu thăng (#) để chọn phần tử có attribute id tương ứng.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <pre className="text-green-400 text-base overflow-x-auto">
                      {`#unique-id { property: value; }
#header { background: #f0f0f0; }
#main-content { max-width: 1200px; }`}
                    </pre>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-red-800 mb-2">⚠️ Quan trọng:</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>
                        • Mỗi ID chỉ được sử dụng <strong>một lần</strong> trên trang
                      </li>
                      <li>• ID selector có độ ưu tiên cao nhất</li>
                      <li>• Nên dùng cho các phần tử duy nhất (header, footer, main)</li>
                      <li>• Tránh lạm dụng ID selector trong CSS</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.idSelector} title="ID Selectors" />
              </div>
            )}
          </div>

          {/* Attribute Selectors */}
          <div className="space-y-4">
            <SectionHeader
              id="attributeSelector"
              title="Attribute Selectors"
              icon={Code}
              isExpanded={expandedSections.attributeSelector}
              onToggle={() => toggleSection('attributeSelector')}
            />

            {expandedSections.attributeSelector && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="attribute-selectors"
                >
                  <Code className="w-6 h-6 text-indigo-600" />
                  Attribute Selectors
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Attribute selector chọn phần tử dựa trên attributes và giá trị của chúng.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <pre className="text-green-400 text-base overflow-x-auto">
                      {`[attribute] { }           /* Có attribute */
[attribute="value"] { }   /* Exact match */
[attribute^="value"] { }  /* Bắt đầu với */
[attribute$="value"] { }  /* Kết thúc với */
[attribute*="value"] { }  /* Chứa trong */
[attribute~="value"] { }  /* Chứa từ */`}
                    </pre>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-3">
                      🔍 Các loại Attribute Selectors:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-indigo-800">
                      <div>
                        <strong>[type="text"]</strong> - Input text
                      </div>
                      <div>
                        <strong>[href^="https"]</strong> - Link HTTPS
                      </div>
                      <div>
                        <strong>[src$=".jpg"]</strong> - Ảnh JPG
                      </div>
                      <div>
                        <strong>[class*="btn"]</strong> - Class chứa "btn"
                      </div>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.attributeSelector} title="Attribute Selectors" />
              </div>
            )}
          </div>

          {/* Pseudo-classes */}
          <div className="space-y-4">
            <SectionHeader
              id="pseudoClasses"
              title="Pseudo-classes"
              icon={Eye}
              isExpanded={expandedSections.pseudoClasses}
              onToggle={() => toggleSection('pseudoClasses')}
            />

            {expandedSections.pseudoClasses && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="pseudo-classes"
                >
                  <Eye className="w-6 h-6 text-green-600" />
                  Pseudo-classes
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Pseudo-classes chọn phần tử dựa trên trạng thái hoặc vị trí của chúng.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <pre className="text-green-400 text-base overflow-x-auto">
                      {`:hover { }           /* Khi hover */
:focus { }            /* Khi focus */
:active { }           /* Khi click */
:visited { }          /* Link đã thăm */
:nth-child(odd) { }   /* Con lẻ */
:nth-child(even) { }  /* Con chẵn */
:first-child { }      /* Con đầu */
:last-child { }       /* Con cuối */`}
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">🎯 User Actions</h4>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>:hover</li>
                        <li>:focus</li>
                        <li>:active</li>
                        <li>:visited</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">📍 Structural</h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>:first-child</li>
                        <li>:last-child</li>
                        <li>:nth-child(n)</li>
                        <li>:nth-of-type(n)</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">🔍 Form States</h4>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>:checked</li>
                        <li>:disabled</li>
                        <li>:required</li>
                        <li>:valid/:invalid</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.pseudoClasses} title="Pseudo-classes" />
              </div>
            )}
          </div>

          {/* Pseudo-elements */}
          <div className="space-y-4">
            <SectionHeader
              id="pseudoElements"
              title="Pseudo-elements"
              icon={Play}
              isExpanded={expandedSections.pseudoElements}
              onToggle={() => toggleSection('pseudoElements')}
            />

            {expandedSections.pseudoElements && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="pseudo-elements"
                >
                  <Play className="w-6 h-6 text-purple-600" />
                  Pseudo-elements
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Pseudo-elements tạo ra và style các phần tử ảo không tồn tại trong HTML.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <pre className="text-green-400 text-base overflow-x-auto">
                      {`::before { }          /* Trước nội dung */
::after { }           /* Sau nội dung */
::first-letter { }    /* Chữ cái đầu */
::first-line { }      /* Dòng đầu tiên */
::selection { }       /* Text được chọn */
::placeholder { }     /* Placeholder text */`}
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-3">🎨 Content Generation</h4>
                      <ul className="text-orange-800 space-y-2">
                        <li>
                          <strong>::before</strong> - Thêm nội dung trước
                        </li>
                        <li>
                          <strong>::after</strong> - Thêm nội dung sau
                        </li>
                        <li>
                          Cần thuộc tính <code>content</code>
                        </li>
                        <li>Có thể chứa text, icon, hình ảnh</li>
                      </ul>
                    </div>

                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-teal-900 mb-3">📝 Text Styling</h4>
                      <ul className="text-teal-800 space-y-2">
                        <li>
                          <strong>::first-letter</strong> - Drop caps
                        </li>
                        <li>
                          <strong>::first-line</strong> - Dòng đầu
                        </li>
                        <li>
                          <strong>::selection</strong> - Text highlight
                        </li>
                        <li>
                          <strong>::placeholder</strong> - Input placeholder
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">💡 Lưu ý quan trọng:</h4>
                    <ul className="text-amber-700 space-y-1">
                      <li>
                        • Sử dụng <code>::</code> (double colon) cho pseudo-elements
                      </li>
                      <li>
                        • <code>::before</code> và <code>::after</code> cần thuộc tính{' '}
                        <code>content</code>
                      </li>
                      <li>• Pseudo-elements tạo ra phần tử inline theo mặc định</li>
                      <li>• Có thể thay đổi display property như phần tử thường</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.pseudoElements} title="Pseudo-elements" />
              </div>
            )}
          </div>

          {/* Combinators */}
          <div className="space-y-4">
            <SectionHeader
              id="combinators"
              title="CSS Combinators"
              icon={Layers}
              isExpanded={expandedSections.combinators}
              onToggle={() => toggleSection('combinators')}
            />

            {expandedSections.combinators && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="combinators"
                >
                  <Layers className="w-6 h-6 text-orange-600" />
                  CSS Combinators
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Combinators kết hợp các selector để chọn phần tử dựa trên mối quan hệ của chúng.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <pre className="text-green-400 text-base overflow-x-auto">
                      {`/* Descendant selector (space) */
.parent .child { }

/* Child selector (>) */
.parent > .child { }

/* Adjacent sibling (+) */
h1 + p { }

/* General sibling (~) */
h1 ~ p { }`}
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-cyan-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 mb-3">👨‍👩‍👧‍👦 Parent-Child</h4>
                      <ul className="text-cyan-800 space-y-2">
                        <li>
                          <strong>Descendant (space):</strong> Tất cả con cháu
                        </li>
                        <li>
                          <strong>Child ({'>'}): </strong> Chỉ con trực tiếp
                        </li>
                        <li>Descendant bao gồm tất cả cấp</li>
                        <li>Child chỉ cấp đầu tiên</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-pink-900 mb-3">👫 Siblings</h4>
                      <ul className="text-pink-800 space-y-2">
                        <li>
                          <strong>Adjacent (+):</strong> Anh em liền kề
                        </li>
                        <li>
                          <strong>General (~):</strong> Tất cả anh em sau
                        </li>
                        <li>Adjacent: chỉ phần tử ngay sau</li>
                        <li>General: tất cả phần tử cùng cấp sau</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-3">🎯 Ví dụ thực tế:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-indigo-800">
                      <div>
                        <code className="bg-white px-2 py-1 rounded">.nav a</code> - Tất cả link
                        trong nav
                      </div>
                      <div>
                        <code className="bg-white px-2 py-1 rounded">.menu {'>'} li</code> - Li con
                        trực tiếp
                      </div>
                      <div>
                        <code className="bg-white px-2 py-1 rounded">h2 + p</code> - Paragraph sau
                        h2
                      </div>
                      <div>
                        <code className="bg-white px-2 py-1 rounded">h2 ~ p</code> - Tất cả p sau h2
                      </div>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.combinators} title="CSS Combinators" />
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center" id="tom-tat">
              🎯 Tóm tắt CSS Selectors
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Basic Selectors</h3>
                <p className="text-sm text-gray-600">Element, Class, ID, Attribute</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pseudo-classes</h3>
                <p className="text-sm text-gray-600">:hover, :focus, :nth-child</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Play className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pseudo-elements</h3>
                <p className="text-sm text-gray-600">::before, ::after, ::first-letter</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Layers className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Combinators</h3>
                <p className="text-sm text-gray-600">Space, {'>'}, +, ~</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 text-lg">
                Hiểu rõ các selector giúp bạn viết CSS hiệu quả và dễ bảo trì hơn! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Box,
  ArrowRight,
  ArrowDown,
  AlignCenter,
  Maximize2,
  RotateCcw,
  Grid,
  Layers,
  Zap,
  ChevronDown,
  ChevronRight,
  Target,
  Move,
} from 'lucide-react';
import CSSLayout from '../components/CSSLayout';
import { CSS_NAVIGATIONS, CSS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/cssData';

const navigation = CSS_NAVIGATIONS['flexbox'];
const progress = getProgressForLesson('flexbox');

export default function CSSFlexboxPage() {
  const [expandedSections, setExpandedSections] = useState({
    flexBasics: true,
    mainCrossAxis: false,
    flexDirection: false,
    justifyContent: false,
    alignItems: false,
    flexItems: false,
    practicalExamples: false,
  });

  type SectionKey = keyof typeof expandedSections;

  const toggleSection = (section: SectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const examples = {
    flexBasics: {
      css: `/* Tạo flex container */
.flex-container {
  display: flex;
  border: 2px solid #007bff;
  padding: 10px;
  gap: 10px;
}

/* Flex items */
.flex-item {
  background-color: #e7f3ff;
  padding: 20px;
  text-align: center;
  border: 1px solid #007bff;
  border-radius: 4px;
}`,
      html: `<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`,
      result: (
        <div className="flex border-2 border-blue-500 p-2 gap-2 rounded">
          <div className="bg-blue-100 p-4 text-center border border-blue-300 rounded flex-1">
            Item 1
          </div>
          <div className="bg-blue-100 p-4 text-center border border-blue-300 rounded flex-1">
            Item 2
          </div>
          <div className="bg-blue-100 p-4 text-center border border-blue-300 rounded flex-1">
            Item 3
          </div>
        </div>
      ),
    },
    mainCrossAxis: {
      css: `/* flex-direction: row (mặc định) */
.flex-row {
  display: flex;
  flex-direction: row;
  /* Main axis: →  Cross axis: ↓ */
}

/* flex-direction: column */
.flex-column {
  display: flex;
  flex-direction: column;
  /* Main axis: ↓  Cross axis: → */
  height: 200px;
}`,
      html: `<div class="flex-row">
  <div>Row Item 1</div>
  <div>Row Item 2</div>
</div>

<div class="flex-column">
  <div>Column Item 1</div>
  <div>Column Item 2</div>
</div>`,
      result: (
        <div className="space-y-4">
          <div className="flex gap-2 p-2 border border-orange-300 rounded">
            <div className="bg-orange-100 p-3 rounded text-center">Row Item 1</div>
            <div className="bg-orange-100 p-3 rounded text-center">Row Item 2</div>
          </div>
          <div className="flex flex-col gap-2 p-2 border border-green-300 rounded h-32">
            <div className="bg-green-100 p-3 rounded text-center">Column Item 1</div>
            <div className="bg-green-100 p-3 rounded text-center">Column Item 2</div>
          </div>
        </div>
      ),
    },
    flexDirection: {
      css: `/* Các giá trị flex-direction */
.flex-row { flex-direction: row; }           /* → */
.flex-row-reverse { flex-direction: row-reverse; } /* ← */
.flex-column { flex-direction: column; }     /* ↓ */
.flex-column-reverse { flex-direction: column-reverse; } /* ↑ */

/* flex-wrap */
.flex-wrap {
  flex-wrap: wrap;
  width: 200px; /* Buộc wrap */
}

/* flex-flow (shorthand) */
.flex-flow {
  flex-flow: row wrap; /* direction + wrap */
}`,
      html: `<div class="flex-row-reverse">
  <div>3</div><div>2</div><div>1</div>
</div>

<div class="flex-wrap">
  <div>Item A</div><div>Item B</div><div>Item C</div>
</div>`,
      result: (
        <div className="space-y-4">
          <div className="flex flex-row-reverse gap-2 p-2 border border-purple-300 rounded">
            <div className="bg-purple-100 p-3 rounded">3</div>
            <div className="bg-purple-100 p-3 rounded">2</div>
            <div className="bg-purple-100 p-3 rounded">1</div>
          </div>
          <div className="flex flex-wrap gap-2 p-2 border border-pink-300 rounded w-48">
            <div className="bg-pink-100 p-3 rounded min-w-16">Item A</div>
            <div className="bg-pink-100 p-3 rounded min-w-16">Item B</div>
            <div className="bg-pink-100 p-3 rounded min-w-16">Item C</div>
          </div>
        </div>
      ),
    },
    justifyContent: {
      css: `/* justify-content - căn chỉnh main axis */
.justify-start { justify-content: flex-start; }    /* ⬅️ */
.justify-center { justify-content: center; }       /* ⬌ */
.justify-end { justify-content: flex-end; }        /* ➡️ */
.justify-between { justify-content: space-between; } /* ⬅️ ➡️ */
.justify-around { justify-content: space-around; }   /* ↔️ */
.justify-evenly { justify-content: space-evenly; }   /* ⟷ */`,
      html: `<div class="justify-center">
  <div>A</div><div>B</div><div>C</div>
</div>

<div class="justify-between">
  <div>Start</div><div>End</div>
</div>`,
      result: (
        <div className="space-y-4">
          <div className="flex justify-center gap-2 p-4 border border-teal-300 rounded bg-teal-50">
            <div className="bg-teal-200 p-3 rounded">A</div>
            <div className="bg-teal-200 p-3 rounded">B</div>
            <div className="bg-teal-200 p-3 rounded">C</div>
          </div>
          <div className="flex justify-between p-4 border border-indigo-300 rounded bg-indigo-50">
            <div className="bg-indigo-200 p-3 rounded">Start</div>
            <div className="bg-indigo-200 p-3 rounded">End</div>
          </div>
        </div>
      ),
    },
    alignItems: {
      css: `/* align-items - căn chỉnh cross axis */
.align-start { align-items: flex-start; }    /* ⬆️ */
.align-center { align-items: center; }       /* ⬍ */
.align-end { align-items: flex-end; }        /* ⬇️ */
.align-stretch { align-items: stretch; }     /* ⬍ (full height) */
.align-baseline { align-items: baseline; }   /* baseline */

.container {
  height: 120px;
  border: 2px dashed #999;
}`,
      html: `<div class="container align-center">
  <div>Short</div>
  <div>Medium height item</div>
  <div>Tall</div>
</div>`,
      result: (
        <div className="flex items-center h-32 p-4 border-2 border-dashed border-gray-400 rounded bg-gray-50">
          <div className="bg-yellow-200 p-2 rounded mr-2">Short</div>
          <div className="bg-yellow-200 p-4 rounded mr-2">Medium height item</div>
          <div className="bg-yellow-200 p-6 rounded">Tall</div>
        </div>
      ),
    },
    flexItems: {
      css: `/* flex-grow: khả năng phát triển */
.grow-1 { flex-grow: 1; }  /* Phát triển 1 phần */
.grow-2 { flex-grow: 2; }  /* Phát triển 2 phần */

/* flex-shrink: khả năng co lại */
.no-shrink { flex-shrink: 0; }  /* Không co */

/* flex-basis: kích thước ban đầu */
.basis-100 { flex-basis: 100px; }

/* flex shorthand */
.flex-auto { flex: auto; }      /* 1 1 auto */
.flex-1 { flex: 1; }            /* 1 1 0% */
.flex-none { flex: none; }      /* 0 0 auto */

/* align-self: tự căn chỉnh */
.self-start { align-self: flex-start; }
.self-end { align-self: flex-end; }

/* order: thay đổi thứ tự */
.order-first { order: -1; }
.order-last { order: 1; }`,
      html: `<div class="flex-container">
  <div class="flex-1">Flex: 1</div>
  <div class="flex-2">Flex: 2</div>
  <div class="flex-none">No flex</div>
</div>

<div class="flex-container">
  <div class="order-last">First in HTML</div>
  <div>Second</div>
  <div class="order-first">Third in HTML</div>
</div>`,
      result: (
        <div className="space-y-4">
          <div className="flex gap-2 p-2 border border-emerald-300 rounded">
            <div className="bg-emerald-100 p-3 rounded flex-1">Flex: 1</div>
            <div className="bg-emerald-200 p-3 rounded" style={{ flex: '2' }}>
              Flex: 2
            </div>
            <div className="bg-emerald-100 p-3 rounded flex-none">No flex</div>
          </div>
          <div className="flex gap-2 p-2 border border-rose-300 rounded">
            <div className="bg-rose-100 p-3 rounded order-last">First in HTML</div>
            <div className="bg-rose-100 p-3 rounded">Second</div>
            <div className="bg-rose-200 p-3 rounded order-first">Third in HTML</div>
          </div>
        </div>
      ),
    },
    practicalExamples: {
      css: `/* 1. Perfect Centering */
.center-everything {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

/* 2. Navbar Layout */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
}

.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
}

/* 3. Card Layout */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* grow shrink basis */
  min-width: 0;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

/* 4. Holy Grail Layout */
.holy-grail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content-area {
  display: flex;
  flex: 1;
}

.sidebar { flex: 0 0 200px; }
.main-content { flex: 1; }`,
      html: `<!-- Perfect Centering -->
<div class="center-everything">
  <div>🎯 Perfectly Centered!</div>
</div>

<!-- Navbar -->
<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<!-- Card Layout -->
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>`,
      result: (
        <div className="space-y-6">
          {/* Perfect Centering */}
          <div className="flex justify-center items-center h-32 bg-blue-50 border-2 border-dashed border-blue-300 rounded">
            <div className="text-2xl">🎯 Perfectly Centered!</div>
          </div>

          {/* Navbar */}
          <nav className="flex justify-between items-center p-4 bg-gray-100 rounded">
            <div className="font-bold text-blue-600">Logo</div>
            <ul className="flex gap-4 list-none m-0">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Card Layout */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-48 p-4 border border-gray-300 rounded-lg bg-white">
              Card 1
            </div>
            <div className="flex-1 min-w-48 p-4 border border-gray-300 rounded-lg bg-white">
              Card 2
            </div>
            <div className="flex-1 min-w-48 p-4 border border-gray-300 rounded-lg bg-white">
              Card 3
            </div>
          </div>
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
      currentLesson="CSS Flexbox"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 text-lg">
            <Box className="w-5 h-5 mr-2" />
            CSS Flexbox
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900" id="css-flexbox">
            🧩 CSS Flexbox Layout
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Học cách tạo layout linh hoạt và responsive với CSS Flexbox - công cụ mạnh mẽ nhất để
            sắp xếp elements
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg max-w-4xl mx-auto">
            <p className="text-blue-800">
              <strong>💡 Flexbox là gì?</strong> CSS Flexbox (Flexible Box Layout) là một phương
              pháp layout một chiều giúp phân phối không gian và căn chỉnh items trong container một
              cách hiệu quả.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Flex Basics */}
          <div className="space-y-4">
            <SectionHeader
              id="flexBasics"
              title="Flex Container & Items - Khái niệm cơ bản"
              icon={Box}
              isExpanded={expandedSections.flexBasics}
              onToggle={() => toggleSection('flexBasics')}
            />

            {expandedSections.flexBasics && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="flex-basics"
                >
                  <Box className="w-6 h-6 text-blue-600" />
                  Flex Container & Items
                </h2>

                <div className="prose prose-lg max-w-none">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">
                        📦 Flex Container (Parent)
                      </h4>
                      <ul className="text-blue-800 space-y-2">
                        <li>
                          • Element với <code>display: flex</code>
                        </li>
                        <li>• Định nghĩa main axis và cross axis</li>
                        <li>• Kiểm soát cách items được sắp xếp</li>
                        <li>• Chứa các flex items</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">
                        🧩 Flex Items (Children)
                      </h4>
                      <ul className="text-green-800 space-y-2">
                        <li>• Direct children của flex container</li>
                        <li>• Có thể grow, shrink, và có basis size</li>
                        <li>• Có thể tự align riêng biệt</li>
                        <li>• Có thể thay đổi thứ tự hiển thị</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-amber-900 mb-2">⚡ Tại sao dùng Flexbox?</h4>
                    <ul className="text-amber-800 space-y-1">
                      <li>
                        • <strong>Perfect centering:</strong> Dễ dàng center theo cả 2 chiều
                      </li>
                      <li>
                        • <strong>Equal heights:</strong> Tự động chiều cao bằng nhau
                      </li>
                      <li>
                        • <strong>Space distribution:</strong> Phân phối không gian linh hoạt
                      </li>
                      <li>
                        • <strong>Responsive:</strong> Tự động adapt với screen size
                      </li>
                      <li>
                        • <strong>Order control:</strong> Thay đổi thứ tự không cần sửa HTML
                      </li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer
                  example={examples.flexBasics}
                  title="Flex Container & Items cơ bản"
                />
              </div>
            )}
          </div>

          {/* Main Axis & Cross Axis */}
          <div className="space-y-4">
            <SectionHeader
              id="mainCrossAxis"
              title="Main Axis & Cross Axis - Hiểu về 2 trục"
              icon={Target}
              isExpanded={expandedSections.mainCrossAxis}
              onToggle={() => toggleSection('mainCrossAxis')}
            />

            {expandedSections.mainCrossAxis && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="main-cross-axis"
                >
                  <Target className="w-6 h-6 text-orange-600" />
                  Main Axis & Cross Axis
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Flexbox hoạt động trên 2 trục: <strong>Main Axis</strong> (trục chính) và{' '}
                    <strong>Cross Axis</strong> (trục phụ). Hiểu 2 trục này là chìa khóa để master
                    Flexbox!
                  </p>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg mb-6">
                    <h4 className="font-semibold text-orange-900 mb-2">🧭 Trục trong Flexbox:</h4>
                    <ul className="text-orange-800 space-y-1">
                      <li>
                        • <strong>Main Axis:</strong> Trục chính - theo hướng của flex-direction
                      </li>
                      <li>
                        • <strong>Cross Axis:</strong> Trục vuông góc với main axis
                      </li>
                      <li>
                        • <strong>flex-direction: row</strong> → Main: ngang (→), Cross: dọc (↓)
                      </li>
                      <li>
                        • <strong>flex-direction: column</strong> → Main: dọc (↓), Cross: ngang (→)
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-orange-100 p-6 rounded-lg text-center">
                      <ArrowRight className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-orange-900 mb-2">flex-direction: row</h4>
                      <p className="text-orange-700 text-sm">Main Axis: Ngang (→)</p>
                      <p className="text-orange-700 text-sm">Cross Axis: Dọc (↓)</p>
                    </div>

                    <div className="bg-green-100 p-6 rounded-lg text-center">
                      <ArrowDown className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-green-900 mb-2">flex-direction: column</h4>
                      <p className="text-green-700 text-sm">Main Axis: Dọc (↓)</p>
                      <p className="text-green-700 text-sm">Cross Axis: Ngang (→)</p>
                    </div>
                  </div>
                </div>

                <ExampleViewer
                  example={examples.mainCrossAxis}
                  title="Main Axis & Cross Axis Demo"
                />
              </div>
            )}
          </div>

          {/* Flex Direction */}
          <div className="space-y-4">
            <SectionHeader
              id="flexDirection"
              title="Flex-direction, Flex-wrap, Flex-flow"
              icon={RotateCcw}
              isExpanded={expandedSections.flexDirection}
              onToggle={() => toggleSection('flexDirection')}
            />

            {expandedSections.flexDirection && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="flex-direction"
                >
                  <RotateCcw className="w-6 h-6 text-purple-600" />
                  Direction, Wrap & Flow
                </h2>

                <div className="prose prose-lg max-w-none">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">🧭 flex-direction</h4>
                      <ul className="text-purple-800 space-y-2 text-sm">
                        <li>
                          • <strong>row:</strong> Ngang (→) - mặc định
                        </li>
                        <li>
                          • <strong>row-reverse:</strong> Ngang ngược (←)
                        </li>
                        <li>
                          • <strong>column:</strong> Dọc (↓)
                        </li>
                        <li>
                          • <strong>column-reverse:</strong> Dọc ngược (↑)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-pink-900 mb-3">🔄 flex-wrap</h4>
                      <ul className="text-pink-800 space-y-2 text-sm">
                        <li>
                          • <strong>nowrap:</strong> Không xuống dòng - mặc định
                        </li>
                        <li>
                          • <strong>wrap:</strong> Xuống dòng khi cần
                        </li>
                        <li>
                          • <strong>wrap-reverse:</strong> Xuống dòng ngược
                        </li>
                      </ul>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-3">⚡ flex-flow</h4>
                      <ul className="text-indigo-800 space-y-2 text-sm">
                        <li>• Shorthand cho direction + wrap</li>
                        <li>
                          • <code>flex-flow: row wrap;</code>
                        </li>
                        <li>
                          • <code>flex-flow: column nowrap;</code>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6 mb-6">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {`/* Direction examples */
.flex-row { flex-direction: row; }           /* → */
.flex-column { flex-direction: column; }     /* ↓ */
.flex-row-reverse { flex-direction: row-reverse; } /* ← */

/* Wrap examples */
.flex-wrap { flex-wrap: wrap; }             /* Multi-line */
.flex-nowrap { flex-wrap: nowrap; }         /* Single line */

/* Shorthand */
.flex-flow { flex-flow: row wrap; }         /* direction + wrap */`}
                    </pre>
                  </div>
                </div>

                <ExampleViewer
                  example={examples.flexDirection}
                  title="Direction, Wrap & Flow Examples"
                />
              </div>
            )}
          </div>

          {/* Justify Content */}
          <div className="space-y-4">
            <SectionHeader
              id="justifyContent"
              title="Justify-content - Căn chỉnh Main Axis"
              icon={AlignCenter}
              isExpanded={expandedSections.justifyContent}
              onToggle={() => toggleSection('justifyContent')}
            />

            {expandedSections.justifyContent && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="justify-content"
                >
                  <AlignCenter className="w-6 h-6 text-teal-600" />
                  Justify-content
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    <code>justify-content</code> kiểm soát cách items được căn chỉnh dọc theo{' '}
                    <strong>main axis</strong>.
                  </p>

                  <div className="bg-teal-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-teal-900 mb-4">
                      🎯 Các giá trị justify-content:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-teal-800">
                      <div>
                        <strong>flex-start:</strong> Bắt đầu main axis ⬅️
                      </div>
                      <div>
                        <strong>flex-end:</strong> Cuối main axis ➡️
                      </div>
                      <div>
                        <strong>center:</strong> Giữa main axis ⬌
                      </div>
                      <div>
                        <strong>space-between:</strong> Khoảng cách đều giữa items ⬅️ ➡️
                      </div>
                      <div>
                        <strong>space-around:</strong> Khoảng cách đều xung quanh items ↔️
                      </div>
                      <div>
                        <strong>space-evenly:</strong> Khoảng cách đều toàn bộ ⟷
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6 mb-6">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {`/* Main axis alignment */
.justify-start { justify-content: flex-start; }   /* ⬅️ Default */
.justify-center { justify-content: center; }      /* ⬌ Perfect for centering */
.justify-end { justify-content: flex-end; }       /* ➡️ */
.justify-between { justify-content: space-between; } /* ⬅️ ➡️ Great for navbar */
.justify-around { justify-content: space-around; }   /* ↔️ Equal space around */
.justify-evenly { justify-content: space-evenly; }   /* ⟷ Equal space everywhere */`}
                    </pre>
                  </div>
                </div>

                <ExampleViewer example={examples.justifyContent} title="Justify-content Examples" />

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">💡 Practical Tips:</h4>
                  <ul className="text-yellow-800 space-y-1">
                    <li>
                      • <strong>center:</strong> Perfect cho buttons, logos
                    </li>
                    <li>
                      • <strong>space-between:</strong> Excellent cho navbar (logo trái, menu phải)
                    </li>
                    <li>
                      • <strong>space-around:</strong> Tốt cho galleries, card layouts
                    </li>
                    <li>
                      • <strong>flex-end:</strong> Hữu ích cho right-aligned content
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Align Items */}
          <div className="space-y-4">
            <SectionHeader
              id="alignItems"
              title="Align-items & Align-content - Căn chỉnh Cross Axis"
              icon={Move}
              isExpanded={expandedSections.alignItems}
              onToggle={() => toggleSection('alignItems')}
            />

            {expandedSections.alignItems && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="align-items"
                >
                  <Move className="w-6 h-6 text-indigo-600" />
                  Align-items & Align-content
                </h2>

                <div className="prose prose-lg max-w-none">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-3">📏 align-items</h4>
                      <p className="text-indigo-800 text-sm mb-3">
                        Căn chỉnh items trên cross axis (single line)
                      </p>
                      <ul className="text-indigo-700 space-y-1 text-sm">
                        <li>
                          • <strong>stretch:</strong> Giãn full height (mặc định)
                        </li>
                        <li>
                          • <strong>flex-start:</strong> Đầu cross axis ⬆️
                        </li>
                        <li>
                          • <strong>flex-end:</strong> Cuối cross axis ⬇️
                        </li>
                        <li>
                          • <strong>center:</strong> Giữa cross axis ⬍
                        </li>
                        <li>
                          • <strong>baseline:</strong> Căn theo baseline text
                        </li>
                      </ul>
                    </div>

                    <div className="bg-violet-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-violet-900 mb-3">📐 align-content</h4>
                      <p className="text-violet-800 text-sm mb-3">
                        Căn chỉnh multiple lines (khi có wrap)
                      </p>
                      <ul className="text-violet-700 space-y-1 text-sm">
                        <li>
                          • <strong>stretch:</strong> Giãn lines (mặc định)
                        </li>
                        <li>
                          • <strong>flex-start:</strong> Lines ở đầu
                        </li>
                        <li>
                          • <strong>flex-end:</strong> Lines ở cuối
                        </li>
                        <li>
                          • <strong>center:</strong> Lines ở giữa
                        </li>
                        <li>
                          • <strong>space-between/around/evenly</strong>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6 mb-6">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {`/* Cross axis alignment for single line */
.align-start { align-items: flex-start; }   /* ⬆️ */
.align-center { align-items: center; }      /* ⬍ Perfect vertical centering */
.align-end { align-items: flex-end; }       /* ⬇️ */
.align-stretch { align-items: stretch; }    /* ⬍ Full height - default */
.align-baseline { align-items: baseline; }  /* Text baseline alignment */

/* Cross axis alignment for multiple lines */
.content-center { align-content: center; }      /* Center all lines */
.content-between { align-content: space-between; } /* Distribute lines */`}
                    </pre>
                  </div>
                </div>

                <ExampleViewer example={examples.alignItems} title="Align-items Examples" />

                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-green-900 mb-2">🎯 Perfect Centering Combo:</h4>
                  <pre className="bg-green-100 p-3 rounded text-sm text-green-800 mt-2">
                    {`.perfect-center {
  display: flex;
  justify-content: center;  /* Center on main axis */
  align-items: center;      /* Center on cross axis */
  height: 100vh;           /* Full viewport height */
}`}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Flex Items Properties */}
          <div className="space-y-4">
            <SectionHeader
              id="flexItems"
              title="Flex Items Properties - Grow, Shrink, Basis, Align-self, Order"
              icon={Maximize2}
              isExpanded={expandedSections.flexItems}
              onToggle={() => toggleSection('flexItems')}
            />

            {expandedSections.flexItems && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="flex-items"
                >
                  <Maximize2 className="w-6 h-6 text-emerald-600" />
                  Flex Items Properties
                </h2>

                <div className="prose prose-lg max-w-none">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-emerald-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 mb-3">📏 Flex Sizing</h4>
                      <ul className="text-emerald-800 space-y-2 text-sm">
                        <li>
                          • <strong>flex-grow:</strong> Khả năng phát triển (mặc định: 0)
                        </li>
                        <li>
                          • <strong>flex-shrink:</strong> Khả năng co lại (mặc định: 1)
                        </li>
                        <li>
                          • <strong>flex-basis:</strong> Kích thước ban đầu (mặc định: auto)
                        </li>
                        <li>
                          • <strong>flex:</strong> Shorthand cho grow shrink basis
                        </li>
                      </ul>
                    </div>

                    <div className="bg-cyan-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 mb-3">🎪 Individual Control</h4>
                      <ul className="text-cyan-800 space-y-2 text-sm">
                        <li>
                          • <strong>align-self:</strong> Ghi đè align-items cho item
                        </li>
                        <li>
                          • <strong>order:</strong> Thay đổi thứ tự hiển thị
                        </li>
                        <li>• Không ảnh hưởng đến HTML structure</li>
                        <li>• Responsive reordering rất hữu ích</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-amber-900 mb-3">📋 Flex Shorthand Values:</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded border">
                        <code className="text-amber-700 font-semibold">flex: 1</code>
                        <p className="text-sm text-amber-600 mt-1">flex: 1 1 0% - Phân chia đều</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <code className="text-amber-700 font-semibold">flex: auto</code>
                        <p className="text-sm text-amber-600 mt-1">
                          flex: 1 1 auto - Dựa trên content
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <code className="text-amber-700 font-semibold">flex: none</code>
                        <p className="text-sm text-amber-600 mt-1">flex: 0 0 auto - Không co dãn</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6 mb-6">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {`/* Flex sizing */
.grow-1 { flex-grow: 1; }      /* Phát triển 1 phần */
.grow-2 { flex-grow: 2; }      /* Phát triển 2 phần (gấp đôi) */
.no-shrink { flex-shrink: 0; } /* Không co lại */
.basis-200 { flex-basis: 200px; } /* Kích thước ban đầu */

/* Flex shorthand - recommended */
.flex-1 { flex: 1; }          /* 1 1 0% - Equal distribution */
.flex-auto { flex: auto; }    /* 1 1 auto - Content-based */
.flex-none { flex: none; }    /* 0 0 auto - No flexibility */

/* Individual alignment */
.self-start { align-self: flex-start; }
.self-center { align-self: center; }
.self-end { align-self: flex-end; }

/* Visual order (không ảnh hưởng HTML) */
.order-first { order: -1; }   /* Hiển thị đầu tiên */
.order-last { order: 1; }     /* Hiển thị cuối cùng */`}
                    </pre>
                  </div>
                </div>

                <ExampleViewer example={examples.flexItems} title="Flex Items Properties" />

                <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-rose-900 mb-2">⚡ Pro Tips:</h4>
                  <ul className="text-rose-800 space-y-1">
                    <li>
                      • <strong>flex: 1</strong> - Phổ biến nhất, chia đều không gian
                    </li>
                    <li>
                      • <strong>flex: auto</strong> - Tốt khi muốn dựa trên content size
                    </li>
                    <li>
                      • <strong>flex: none</strong> - Khi không muốn item thay đổi size
                    </li>
                    <li>
                      • <strong>order</strong> - Excellent cho responsive design
                    </li>
                    <li>
                      • <strong>align-self</strong> - Override alignment cho specific items
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Practical Examples */}
          <div className="space-y-4">
            <SectionHeader
              id="practicalExamples"
              title="Thực hành: Navbar, Card Layout, Centering"
              icon={Zap}
              isExpanded={expandedSections.practicalExamples}
              onToggle={() => toggleSection('practicalExamples')}
            />

            {expandedSections.practicalExamples && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="practical-examples"
                >
                  <Zap className="w-6 h-6 text-yellow-600" />
                  Thực hành Flexbox
                </h2>

                <div className="prose prose-lg max-w-none">
                  <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-yellow-900 mb-3">
                      🚀 Real-world Flexbox Patterns:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-yellow-800 space-y-2">
                        <li>
                          • 🧭 <strong>Navigation bars:</strong> Logo trái, menu phải
                        </li>
                        <li>
                          • 🃏 <strong>Card layouts:</strong> Equal height cards
                        </li>
                        <li>
                          • 🎯 <strong>Perfect centering:</strong> Modal, hero sections
                        </li>
                        <li>
                          • 🏛️ <strong>Holy Grail layout:</strong> Header, footer, sidebar
                        </li>
                      </ul>
                      <ul className="text-yellow-800 space-y-2">
                        <li>
                          • 📱 <strong>Mobile-first design:</strong> Stack to row
                        </li>
                        <li>
                          • 📊 <strong>Equal height columns:</strong> Tự động
                        </li>
                        <li>
                          • 🔄 <strong>Responsive reordering:</strong> Order property
                        </li>
                        <li>
                          • 📋 <strong>Form layouts:</strong> Labels, inputs alignment
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6 mb-6">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {`/* 1. Perfect Centering - Modal, Hero Section */
.center-everything {
  display: flex;
  justify-content: center;  /* Horizontal center */
  align-items: center;      /* Vertical center */
  height: 100vh;           /* Full viewport */
}

/* 2. Navbar Layout - Logo left, Menu right */
.navbar {
  display: flex;
  justify-content: space-between; /* Space between logo & menu */
  align-items: center;            /* Vertical center */
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 1rem;              /* Space between links */
  list-style: none;
}

/* 3. Card Layout - Equal height, responsive */
.card-container {
  display: flex;
  flex-wrap: wrap;        /* Multi-row */
  gap: 1rem;
}

.card {
  flex: 1 1 300px;        /* grow shrink basis */
  min-width: 0;           /* Prevent overflow */
  padding: 1rem;
  border: 1px solid #ddd;
}

/* 4. Holy Grail Layout */
.holy-grail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.header, .footer {
  flex: 0 0 auto;         /* Fixed height */
}

.content-area {
  display: flex;
  flex: 1;                /* Take remaining space */
}

.sidebar {
  flex: 0 0 200px;        /* Fixed width */
}

.main-content {
  flex: 1;                /* Flexible content area */
  padding: 1rem;
}`}
                    </pre>
                  </div>
                </div>

                <ExampleViewer
                  example={examples.practicalExamples}
                  title="Real-world Flexbox Examples"
                />

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">🧭 Navbar Pattern</h4>
                    <pre className="text-xs text-blue-700 bg-blue-50 p-2 rounded">
                      {`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}
                    </pre>
                    <p className="text-xs text-blue-600 mt-2">
                      Perfect cho header với logo và menu
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">🃏 Card Grid</h4>
                    <pre className="text-xs text-green-700 bg-green-50 p-2 rounded">
                      {`.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.card { flex: 1 1 300px; }`}
                    </pre>
                    <p className="text-xs text-green-600 mt-2">Responsive cards với equal height</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Perfect Center</h4>
                    <pre className="text-xs text-purple-700 bg-purple-50 p-2 rounded">
                      {`.center {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
                    </pre>
                    <p className="text-xs text-purple-600 mt-2">Modal, hero section centering</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Best Practices & Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" id="best-practices">
              🎯 Flexbox Best Practices & Summary
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                  ✅ Do's - Nên làm
                </h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Dùng flexbox cho 1D layouts (một chiều)</li>
                  <li>• Kết hợp với CSS Grid cho layouts phức tạp</li>
                  <li>
                    • Dùng <code>gap</code> thay vì margin khi có thể
                  </li>
                  <li>• Test trên nhiều kích thước màn hình</li>
                  <li>
                    • Dùng flex shorthand (<code>flex: 1</code>) thay vì các properties riêng
                  </li>
                  <li>• Sử dụng flexbox cho navigation, cards, centering</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-red-900 mb-4 flex items-center gap-2">
                  ❌ Don'ts - Tránh làm
                </h3>
                <ul className="text-red-800 space-y-2">
                  <li>• Không dùng flexbox cho 2D layouts phức tạp</li>
                  <li>• Tránh nested flex containers không cần thiết</li>
                  <li>
                    • Không quên thiết lập <code>flex-basis</code> khi cần
                  </li>
                  <li>• Tránh dùng float với flexbox</li>
                  <li>• Không ignore accessibility với order</li>
                  <li>• Tránh hardcode width/height khi có flex</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-center">
                🎊 Flexbox vs CSS Grid
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-blue-500 text-white p-3 rounded-lg mb-2">
                    <Box className="w-8 h-8 mx-auto mb-1" />
                    <strong>Flexbox - 1D Layout</strong>
                  </div>
                  <ul className="text-sm text-blue-800 text-left">
                    <li>• Navigation bars</li>
                    <li>• Card rows/columns</li>
                    <li>• Perfect centering</li>
                    <li>• Component layouts</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 text-white p-3 rounded-lg mb-2">
                    <Grid className="w-8 h-8 mx-auto mb-1" />
                    <strong>CSS Grid - 2D Layout</strong>
                  </div>
                  <ul className="text-sm text-purple-800 text-left">
                    <li>• Page layouts</li>
                    <li>• Complex grids</li>
                    <li>• Magazine layouts</li>
                    <li>• Dashboard designs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-4 text-center">
                📋 Flexbox Cheat Sheet
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Container Properties</h4>
                  <div className="space-y-1">
                    <div>
                      <code className="text-yellow-300">display: flex</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">flex-direction: row|column</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">flex-wrap: wrap|nowrap</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">justify-content: center</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">align-items: center</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">gap: 1rem</code>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Item Properties</h4>
                  <div className="space-y-1">
                    <div>
                      <code className="text-yellow-300">flex: 1</code> - Equal distribution
                    </div>
                    <div>
                      <code className="text-yellow-300">flex: auto</code> - Content-based
                    </div>
                    <div>
                      <code className="text-yellow-300">flex: none</code> - No flexibility
                    </div>
                    <div>
                      <code className="text-yellow-300">align-self: center</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">order: 1</code>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Common Patterns</h4>
                  <div className="space-y-1">
                    <div>
                      <strong>Perfect center:</strong> justify-content + align-items: center
                    </div>
                    <div>
                      <strong>Navbar:</strong> justify-content: space-between
                    </div>
                    <div>
                      <strong>Equal cards:</strong> flex: 1
                    </div>
                    <div>
                      <strong>Responsive:</strong> flex-wrap: wrap
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-lg text-gray-700">
                Flexbox là công cụ mạnh mẽ cho layout 1 chiều! Kết hợp với Grid để tạo ra những
                layout tuyệt vời! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Grid,
  Columns,
  Square,
  Layout,
  Maximize2,
  LayoutGrid,
  Zap,
  ChevronDown,
  ChevronRight,
  Box,
} from 'lucide-react';
import CSSLayout from '../components/CSSLayout';
import { CSS_NAVIGATIONS, CSS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/cssData';

const navigation = CSS_NAVIGATIONS['grid'];
const progress = getProgressForLesson('grid');

export default function CSSGridPage() {
  const [expandedSections, setExpandedSections] = useState({
    gridBasics: true,
    gridTemplate: false,
    gridGap: false,
    gridAreas: false,
    gridSizing: false,
    gridTemplateAreas: false,
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
    gridBasics: {
      css: `/* Tạo grid container */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.grid-item {
  background-color: #ecfdf5;
  padding: 20px;
  text-align: center;
  border: 1px solid #10b981;
  border-radius: 4px;
}`,
      result: (
        <div className="grid grid-cols-3 gap-2 border-2 border-green-500 p-2 rounded">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-green-100 p-4 text-center border border-green-300 rounded">
              Item {i}
            </div>
          ))}
        </div>
      ),
    },
    gridTemplate: {
      css: `/* Định nghĩa columns và rows */
.grid-template {
  display: grid;
  grid-template-columns: 200px 1fr 100px;
  grid-template-rows: 60px 120px;
  gap: 10px;
}

/* Repeat function */
.grid-repeat {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
}`,
      result: (
        <div
          className="grid gap-2 border-2 border-blue-500 p-2 rounded"
          style={{
            gridTemplateColumns: '150px 1fr 80px',
            gridTemplateRows: '50px 100px',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div
              key={i}
              className="bg-blue-100 p-2 text-center border border-blue-300 rounded text-sm"
            >
              Item {i}
            </div>
          ))}
        </div>
      ),
    },
    gridGap: {
      css: `/* Grid gaps */
.grid-gap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* Cả row và column */
}

.grid-different-gaps {
  row-gap: 30px;    /* Gap giữa rows */
  column-gap: 15px; /* Gap giữa columns */
}`,
      result: (
        <div className="grid grid-cols-3 gap-4 border-2 border-purple-500 p-4 rounded">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-purple-100 p-4 text-center border border-purple-300 rounded">
              Item {i}
            </div>
          ))}
        </div>
      ),
    },
    gridAreas: {
      css: `/* Grid positioning */
.grid-positioned {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.item-span-cols {
  grid-column: 1 / 3;  /* Span 2 columns */
}

.item-span-rows {
  grid-row: 1 / 3;     /* Span 2 rows */
}

.item-span-both {
  grid-column: 3 / 5;
  grid-row: 2 / 4;
}`,
      result: (
        <div
          className="grid gap-2 border-2 border-orange-500 p-2 rounded h-64"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
          }}
        >
          <div
            className="bg-yellow-300 p-2 text-center border border-yellow-500 rounded text-sm flex items-center justify-center"
            style={{ gridColumn: '1 / 3' }}
          >
            Span Cols
          </div>
          <div
            className="bg-green-300 p-2 text-center border border-green-500 rounded text-sm flex items-center justify-center"
            style={{ gridRow: '1 / 3' }}
          >
            Span Rows
          </div>
          <div
            className="bg-red-300 p-2 text-center border border-red-500 rounded text-sm flex items-center justify-center"
            style={{ gridColumn: '3 / 5', gridRow: '2 / 4' }}
          >
            Span Both
          </div>
          <div className="bg-orange-100 p-2 text-center border border-orange-300 rounded text-sm flex items-center justify-center">
            Normal
          </div>
        </div>
      ),
    },
    gridSizing: {
      css: `/* Auto-fit và auto-fill */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

/* minmax() function */
.grid-minmax {
  grid-template-columns:
    minmax(200px, 300px)  /* Min 200px, Max 300px */
    1fr                   /* Flexible */
    minmax(100px, 1fr);   /* Min 100px, Max flexible */
}`,
      result: (
        <div className="space-y-4">
          <div
            className="grid gap-4 border-2 border-teal-500 p-4 rounded"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}
          >
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-teal-100 p-4 text-center border border-teal-300 rounded">
                Auto-fit {i}
              </div>
            ))}
          </div>
          <div
            className="grid gap-4 border-2 border-cyan-500 p-4 rounded"
            style={{ gridTemplateColumns: '2fr 1fr 1fr' }}
          >
            <div className="bg-cyan-100 p-4 text-center border border-cyan-300 rounded">2fr</div>
            <div className="bg-cyan-100 p-4 text-center border border-cyan-300 rounded">1fr</div>
            <div className="bg-cyan-100 p-4 text-center border border-cyan-300 rounded">1fr</div>
          </div>
        </div>
      ),
    },
    gridTemplateAreas: {
      css: `/* Grid Template Areas */
.grid-layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header  header  header"
    "sidebar content ads"
    "footer  footer  footer";
  gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }`,
      result: (
        <div
          className="grid gap-2 border-2 border-indigo-500 p-2 rounded h-64"
          style={{
            gridTemplateColumns: '120px 1fr 80px',
            gridTemplateRows: '50px 1fr 40px',
            gridTemplateAreas: `
              "header header header"
              "sidebar content ads"
              "footer footer footer"
            `,
          }}
        >
          <div
            className="bg-indigo-200 p-2 text-center border border-indigo-400 rounded flex items-center justify-center font-semibold"
            style={{ gridArea: 'header' }}
          >
            Header
          </div>
          <div
            className="bg-indigo-100 p-2 text-center border border-indigo-300 rounded flex items-center justify-center text-sm"
            style={{ gridArea: 'sidebar' }}
          >
            Sidebar
          </div>
          <div
            className="bg-indigo-50 p-2 text-center border border-indigo-200 rounded flex items-center justify-center"
            style={{ gridArea: 'content' }}
          >
            Content
          </div>
          <div
            className="bg-indigo-100 p-2 text-center border border-indigo-300 rounded flex items-center justify-center text-sm"
            style={{ gridArea: 'ads' }}
          >
            Ads
          </div>
          <div
            className="bg-indigo-200 p-2 text-center border border-indigo-400 rounded flex items-center justify-center font-semibold"
            style={{ gridArea: 'footer' }}
          >
            Footer
          </div>
        </div>
      ),
    },
    practicalExamples: {
      css: `/* Dashboard Layout */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}

/* Blog Layout */
.blog-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-areas:
    "header header"
    "content sidebar"
    "footer footer";
}`,
      result: (
        <div className="space-y-4">
          {/* Dashboard */}
          <div
            className="grid border-2 border-slate-500 rounded overflow-hidden h-48"
            style={{
              gridTemplateColumns: '150px 1fr',
              gridTemplateRows: '40px 1fr',
              gridTemplateAreas: '"sidebar header" "sidebar main"',
            }}
          >
            <div
              className="bg-slate-800 text-white p-3 flex items-center justify-center text-sm"
              style={{ gridArea: 'header' }}
            >
              Dashboard Header
            </div>
            <div
              className="bg-slate-700 text-white p-3 flex items-center justify-center text-sm"
              style={{ gridArea: 'sidebar' }}
            >
              Sidebar
            </div>
            <div
              className="bg-slate-50 p-3 flex items-center justify-center"
              style={{ gridArea: 'main' }}
            >
              Main Content
            </div>
          </div>

          {/* Blog */}
          <div
            className="grid gap-2 border-2 border-blue-500 p-2 rounded h-40"
            style={{
              gridTemplateColumns: '1fr 100px',
              gridTemplateRows: 'auto 1fr auto',
              gridTemplateAreas: '"header header" "content sidebar" "footer footer"',
            }}
          >
            <div
              className="bg-blue-200 p-2 text-center rounded text-sm"
              style={{ gridArea: 'header' }}
            >
              Blog Header
            </div>
            <div
              className="bg-blue-50 p-2 rounded text-sm flex items-center justify-center"
              style={{ gridArea: 'content' }}
            >
              Posts
            </div>
            <div
              className="bg-blue-100 p-2 rounded text-sm flex items-center justify-center"
              style={{ gridArea: 'sidebar' }}
            >
              Sidebar
            </div>
            <div
              className="bg-blue-200 p-2 text-center rounded text-sm"
              style={{ gridArea: 'footer' }}
            >
              Footer
            </div>
          </div>
        </div>
      ),
    },
  };

  interface Example {
    css: string;
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
          {['css', 'result'].map(tab => (
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

          {activeTab === 'result' && (
            <div className="border rounded p-4 bg-gray-50">{example.result}</div>
          )}
        </div>
      </div>
    );
  };

  const SectionHeader = ({
    id,
    title,
    icon: Icon,
    isExpanded,
    onToggle,
  }: {
    id: string;
    title: string;
    icon: React.ElementType;
    isExpanded: boolean;
    onToggle: () => void;
  }) => (
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
      currentLesson="CSS Grid"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 text-lg">
            <Grid className="w-5 h-5 mr-2" />
            CSS Grid
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900">🎯 CSS Grid Layout</h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Học cách tạo layout 2 chiều mạnh mẽ với CSS Grid - công cụ hoàn hảo cho complex layouts
            và responsive design
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg max-w-4xl mx-auto">
            <p className="text-green-800">
              <strong>💡 CSS Grid</strong> là hệ thống layout 2D mạnh mẽ, kiểm soát cả rows và
              columns để tạo layouts phức tạp dễ dàng.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Grid Basics */}
          <div className="space-y-4">
            <SectionHeader
              id="gridBasics"
              title="Grid Container & Items - Khái niệm cơ bản"
              icon={Grid}
              isExpanded={expandedSections.gridBasics}
              onToggle={() => toggleSection('gridBasics')}
            />

            {expandedSections.gridBasics && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">🏗️ Grid Container</h4>
                    <ul className="text-green-800 space-y-2">
                      <li>
                        • Element với <code>display: grid</code>
                      </li>
                      <li>• Định nghĩa columns và rows</li>
                      <li>• Kiểm soát gap, alignment</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">📦 Grid Items</h4>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Direct children của grid container</li>
                      <li>• Có thể span multiple cells</li>
                      <li>• Có thể explicit positioning</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.gridBasics} title="Grid cơ bản" />
              </div>
            )}
          </div>

          {/* Grid Template */}
          <div className="space-y-4">
            <SectionHeader
              id="gridTemplate"
              title="Grid-template-columns & Grid-template-rows"
              icon={Columns}
              isExpanded={expandedSections.gridTemplate}
              onToggle={() => toggleSection('gridTemplate')}
            />

            {expandedSections.gridTemplate && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">📏 Grid Units:</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-blue-800 text-sm">
                    <div>
                      <strong>fr:</strong> Flexible space
                    </div>
                    <div>
                      <strong>px, em:</strong> Fixed sizes
                    </div>
                    <div>
                      <strong>%:</strong> Relative sizes
                    </div>
                    <div>
                      <strong>auto:</strong> Content size
                    </div>
                    <div>
                      <strong>minmax():</strong> Min/max size
                    </div>
                    <div>
                      <strong>repeat():</strong> Repeat pattern
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.gridTemplate} title="Grid Template" />
              </div>
            )}
          </div>

          {/* Grid Gap */}
          <div className="space-y-4">
            <SectionHeader
              id="gridGap"
              title="Grid Gap - Row-gap, Column-gap"
              icon={Square}
              isExpanded={expandedSections.gridGap}
              onToggle={() => toggleSection('gridGap')}
            />

            {expandedSections.gridGap && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-purple-900">gap</h4>
                    <p className="text-purple-700 text-sm">Cả row và column</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-pink-900">row-gap</h4>
                    <p className="text-pink-700 text-sm">Giữa các rows</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-indigo-900">column-gap</h4>
                    <p className="text-indigo-700 text-sm">Giữa các columns</p>
                  </div>
                </div>

                <ExampleViewer example={examples.gridGap} title="Grid Gap" />
              </div>
            )}
          </div>

          {/* Grid Areas */}
          <div className="space-y-4">
            <SectionHeader
              id="gridAreas"
              title="Grid-area, Grid-column, Grid-row"
              icon={Layout}
              isExpanded={expandedSections.gridAreas}
              onToggle={() => toggleSection('gridAreas')}
            />

            {expandedSections.gridAreas && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-3">📍 Grid Positioning:</h4>
                  <ul className="text-orange-800 space-y-1">
                    <li>
                      • <code>grid-column: 1 / 3;</code> - Span columns
                    </li>
                    <li>
                      • <code>grid-row: 1 / 3;</code> - Span rows
                    </li>
                    <li>
                      • <code>grid-area: 1/2/3/4;</code> - Shorthand
                    </li>
                  </ul>
                </div>

                <ExampleViewer example={examples.gridAreas} title="Grid Positioning" />
              </div>
            )}
          </div>

          {/* Grid Sizing */}
          <div className="space-y-4">
            <SectionHeader
              id="gridSizing"
              title="Auto-fit, Auto-fill, minmax()"
              icon={Maximize2}
              isExpanded={expandedSections.gridSizing}
              onToggle={() => toggleSection('gridSizing')}
            />

            {expandedSections.gridSizing && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-teal-900 mb-3">🔄 auto-fit vs auto-fill</h4>
                    <ul className="text-teal-800 space-y-2 text-sm">
                      <li>
                        • <strong>auto-fit:</strong> Collapse empty tracks
                      </li>
                      <li>
                        • <strong>auto-fill:</strong> Keep empty tracks
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 mb-3">📏 minmax()</h4>
                    <ul className="text-cyan-800 space-y-2 text-sm">
                      <li>
                        • <code>minmax(200px, 1fr)</code>
                      </li>
                      <li>• Min: 200px, Max: flexible</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.gridSizing} title="Responsive Grid" />
              </div>
            )}
          </div>

          {/* Grid Template Areas */}
          <div className="space-y-4">
            <SectionHeader
              id="gridTemplateAreas"
              title="Grid-template-areas - Named Areas"
              icon={LayoutGrid}
              isExpanded={expandedSections.gridTemplateAreas}
              onToggle={() => toggleSection('gridTemplateAreas')}
            />

            {expandedSections.gridTemplateAreas && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-3">🎨 Template Areas:</h4>
                  <p className="text-indigo-800 text-sm">
                    Tạo layout bằng cách "vẽ" với text - trực quan và dễ maintain!
                  </p>
                </div>

                <ExampleViewer example={examples.gridTemplateAreas} title="Grid Template Areas" />
              </div>
            )}
          </div>

          {/* Practical Examples */}
          <div className="space-y-4">
            <SectionHeader
              id="practicalExamples"
              title="Thực hành: Dashboard Layout, Blog Layout"
              icon={Zap}
              isExpanded={expandedSections.practicalExamples}
              onToggle={() => toggleSection('practicalExamples')}
            />

            {expandedSections.practicalExamples && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-3">
                    🚀 Real-world Applications:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-yellow-800">
                    <ul className="space-y-1">
                      <li>• 📊 Dashboard layouts</li>
                      <li>• 📰 Blog layouts</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• 📸 Photo galleries</li>
                      <li>• 📖 Magazine layouts</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.practicalExamples} title="Real-world Examples" />
              </div>
            )}
          </div>

          {/* Best Practices & Cheat Sheet */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🎯 Grid Best Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">✅ Do's</h3>
                <ul className="text-green-800 space-y-1 text-sm">
                  <li>• Dùng Grid cho 2D layouts</li>
                  <li>• Kết hợp với Flexbox</li>
                  <li>• Sử dụng template-areas cho complex layouts</li>
                  <li>• Dùng auto-fit/auto-fill cho responsive</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-3">❌ Don'ts</h3>
                <ul className="text-red-800 space-y-1 text-sm">
                  <li>• Không dùng Grid cho 1D layouts</li>
                  <li>• Tránh over-complicated definitions</li>
                  <li>• Không quên browser fallbacks</li>
                  <li>• Tránh nested grids không cần thiết</li>
                </ul>
              </div>
            </div>

            {/* Grid vs Flexbox */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-center">🎊 Grid vs Flexbox</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-green-500 text-white p-3 rounded-lg mb-2">
                    <Grid className="w-8 h-8 mx-auto mb-1" />
                    <strong>CSS Grid - 2D</strong>
                  </div>
                  <p className="text-green-800 text-sm">Page layouts, dashboards, galleries</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 text-white p-3 rounded-lg mb-2">
                    <Box className="w-8 h-8 mx-auto mb-1" />
                    <strong>Flexbox - 1D</strong>
                  </div>
                  <p className="text-blue-800 text-sm">Navigation, components, centering</p>
                </div>
              </div>
            </div>

            {/* Cheat Sheet */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-4 text-center">
                📋 CSS Grid Cheat Sheet
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Container</h4>
                  <div className="space-y-1">
                    <div>
                      <code className="text-yellow-300">display: grid</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">grid-template-columns: 1fr 1fr</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">gap: 20px</code>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Items</h4>
                  <div className="space-y-1">
                    <div>
                      <code className="text-yellow-300">grid-column: 1 / 3</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">grid-area: header</code>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Functions</h4>
                  <div className="space-y-1">
                    <div>
                      <code className="text-yellow-300">repeat(3, 1fr)</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">minmax(200px, 1fr)</code>
                    </div>
                    <div>
                      <code className="text-yellow-300">auto-fit / auto-fill</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-lg text-gray-700">
                CSS Grid là công cụ mạnh mẽ nhất cho 2D layouts! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

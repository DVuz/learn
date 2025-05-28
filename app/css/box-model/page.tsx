'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Box, Layers, Ruler, ChevronDown, ChevronRight, Maximize, Minimize } from 'lucide-react';
import CSSLayout from '../components/CSSLayout';
import { CSS_NAVIGATIONS, CSS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/cssData';

const navigation = CSS_NAVIGATIONS['box-model'];
const progress = getProgressForLesson('box-model');

export default function CSSBoxModelPage() {
  const [expandedSections, setExpandedSections] = useState({
    boxModelBasics: true,
    contentPaddingBorderMargin: false,
    boxSizing: false,
    widthHeight: false,
    minMaxDimensions: false,
  });

  type SectionKey = keyof typeof expandedSections;

  const toggleSection = (section: SectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const examples = {
    boxModelBasics: {
      css: `/* Box Model Visualization */
.box-model-demo {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #3498db;
  margin: 15px;
  background-color: #ecf0f1;
  color: #2c3e50;
  text-align: center;
  line-height: 100px;
}`,
      html: `<div class="box-model-demo">
  Box Model Demo
</div>`,
      result: (
        <div className="space-y-6">
          <div
            style={{
              width: '200px',
              height: '100px',
              padding: '20px',
              border: '5px solid #3498db',
              margin: '15px auto',
              backgroundColor: '#ecf0f1',
              color: '#2c3e50',
              textAlign: 'center',
              lineHeight: '100px',
              fontWeight: 'bold',
            }}
          >
            Box Model Demo
          </div>

          <div className="text-center">
            <div
              style={{
                background: '#f8d7da',
                padding: '15px',
                border: '2px dashed #dc3545',
                display: 'inline-block',
              }}
            >
              <strong className="text-red-700">Margin (15px)</strong>
              <div
                style={{
                  background: '#fff3cd',
                  padding: '20px',
                  border: '2px dashed #ffc107',
                  margin: '15px',
                }}
              >
                <strong className="text-yellow-700">Padding (20px)</strong>
                <div style={{ background: '#e8f5e8', padding: '5px', border: '5px solid #3498db' }}>
                  <strong className="text-blue-700">Border (5px)</strong>
                  <div
                    style={{
                      background: '#ecf0f1',
                      width: '200px',
                      height: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <strong className="text-green-700">Content (200x100)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">📏 Tổng kích thước thực tế:</h4>
            <div className="text-blue-800 font-mono text-sm">
              <p>
                <strong>Width:</strong> 200px (content) + 40px (padding) + 10px (border) + 30px
                (margin) = <strong>280px</strong>
              </p>
              <p>
                <strong>Height:</strong> 100px (content) + 40px (padding) + 10px (border) + 30px
                (margin) = <strong>180px</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    contentPaddingBorderMargin: {
      css: `/* Padding Examples */
.padding-uniform {
  padding: 20px;
  background-color: #fff3cd;
  border: 1px solid #ffc107;
}

.padding-different {
  padding: 10px 20px 15px 25px; /* top right bottom left */
  background-color: #fff3cd;
  border: 1px solid #ffc107;
}

/* Border Examples */
.border-solid {
  border: 3px solid #3498db;
  padding: 15px;
  margin: 10px 0;
}

.border-different-sides {
  border-top: 5px solid #e74c3c;
  border-right: 3px dashed #f39c12;
  border-bottom: 2px dotted #27ae60;
  border-left: 4px double #9b59b6;
  padding: 15px;
}

/* Margin Examples */
.margin-auto {
  width: 200px;
  margin: 20px auto;
  background-color: #ecf0f1;
  padding: 15px;
  text-align: center;
}`,
      html: `<!-- Padding Examples -->
<div class="padding-uniform">Uniform Padding (20px)</div>
<div class="padding-different">Different Padding (10px 20px 15px 25px)</div>

<!-- Border Examples -->
<div class="border-solid">Solid Border (3px)</div>
<div class="border-different-sides">Different Border Sides</div>

<!-- Margin Examples -->
<div class="margin-auto">Centered with Auto Margin</div>`,
      result: (
        <div className="space-y-6">
          {/* Padding Examples */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-700">📏 Padding Examples</h4>
            <div className="space-y-3">
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#fff3cd',
                  border: '1px solid #ffc107',
                  borderRadius: '4px',
                }}
              >
                <strong>Uniform Padding (20px)</strong> - Cùng khoảng cách 4 phía
              </div>
              <div
                style={{
                  padding: '10px 20px 15px 25px',
                  backgroundColor: '#fff3cd',
                  border: '1px solid #ffc107',
                  borderRadius: '4px',
                }}
              >
                <strong>Different Padding (10px 20px 15px 25px)</strong> - Top, Right, Bottom, Left
              </div>
            </div>
          </div>

          {/* Border Examples */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-700">🔲 Border Examples</h4>
            <div className="space-y-3">
              <div
                style={{
                  border: '3px solid #3498db',
                  padding: '15px',
                  borderRadius: '4px',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <strong>Solid Border (3px)</strong> - Border đồng nhất
              </div>
              <div
                style={{
                  borderTop: '5px solid #e74c3c',
                  borderRight: '3px dashed #f39c12',
                  borderBottom: '2px dotted #27ae60',
                  borderLeft: '4px double #9b59b6',
                  padding: '15px',
                  borderRadius: '4px',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <strong>Different Border Sides</strong> - Mỗi cạnh khác style
              </div>
            </div>
          </div>

          {/* Margin Examples */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-700">📐 Margin Examples</h4>
            <div
              style={{
                width: '200px',
                margin: '20px auto',
                backgroundColor: '#ecf0f1',
                padding: '15px',
                textAlign: 'center',
                borderRadius: '4px',
                border: '1px solid #bdc3c7',
              }}
            >
              <strong>Centered with Auto Margin</strong>
            </div>
          </div>
        </div>
      ),
    },
    boxSizing: {
      css: `/* Content Box (Default) */
.content-box {
  box-sizing: content-box;
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #3498db;
  background-color: #ecf0f1;
}

/* Border Box */
.border-box {
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #e74c3c;
  background-color: #fadbd8;
}

/* Universal Border Box */
*, *::before, *::after {
  box-sizing: border-box;
}`,
      html: `<div class="content-box">Content Box</div>
<div class="border-box">Border Box</div>`,
      result: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-3 text-blue-700">📦 Content Box (Default)</h4>
              <div
                style={{
                  boxSizing: 'content-box',
                  width: '200px',
                  height: '100px',
                  padding: '20px',
                  border: '5px solid #3498db',
                  backgroundColor: '#ecf0f1',
                  margin: '10px auto',
                  textAlign: 'center',
                  lineHeight: '100px',
                  fontWeight: 'bold',
                }}
              >
                Content Box
              </div>
              <div className="bg-blue-50 p-3 rounded text-sm">
                <p>
                  <strong>Total width:</strong> 250px
                </p>
                <p>(200px + 40px padding + 10px border)</p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-semibold mb-3 text-red-700">📐 Border Box</h4>
              <div
                style={{
                  boxSizing: 'border-box',
                  width: '200px',
                  height: '100px',
                  padding: '20px',
                  border: '5px solid #e74c3c',
                  backgroundColor: '#fadbd8',
                  margin: '10px auto',
                  textAlign: 'center',
                  lineHeight: '60px',
                  fontWeight: 'bold',
                }}
              >
                Border Box
              </div>
              <div className="bg-red-50 p-3 rounded text-sm">
                <p>
                  <strong>Total width:</strong> 200px
                </p>
                <p>(includes padding + border)</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 Best Practice:</h4>
            <pre className="text-yellow-700 text-sm bg-yellow-100 p-2 rounded">
              {`/* Universal box-sizing */
*, *::before, *::after {
  box-sizing: border-box;
}`}
            </pre>
          </div>
        </div>
      ),
    },
    widthHeight: {
      css: `/* Width Properties */
.width-pixels {
  width: 300px;
  background-color: #e3f2fd;
  padding: 15px;
  border: 1px solid #2196f3;
}

.width-percentage {
  width: 75%;
  background-color: #f3e5f5;
  padding: 15px;
  border: 1px solid #9c27b0;
}

.width-viewport {
  width: 50vw;
  background-color: #e8f5e8;
  padding: 15px;
  border: 1px solid #4caf50;
}

/* Height Properties */
.height-pixels {
  height: 100px;
  width: 200px;
  background-color: #fce4ec;
  border: 1px solid #e91e63;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
      html: `<!-- Width Examples -->
<div class="width-pixels">Width: 300px (Fixed pixels)</div>
<div class="width-percentage">Width: 75% (Percentage of parent)</div>
<div class="width-viewport">Width: 50vw (50% of viewport width)</div>

<!-- Height Examples -->
<div class="height-pixels">Height: 100px</div>`,
      result: (
        <div className="space-y-6">
          {/* Width Examples */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-700">📏 Width Properties</h4>
            <div className="space-y-3">
              <div
                style={{
                  width: '300px',
                  backgroundColor: '#e3f2fd',
                  padding: '15px',
                  border: '1px solid #2196f3',
                  borderRadius: '4px',
                }}
              >
                <strong>Width: 300px</strong> (Fixed pixels)
              </div>
              <div
                style={{
                  width: '75%',
                  backgroundColor: '#f3e5f5',
                  padding: '15px',
                  border: '1px solid #9c27b0',
                  borderRadius: '4px',
                }}
              >
                <strong>Width: 75%</strong> (Percentage of parent)
              </div>
              <div
                style={{
                  width: '50vw',
                  backgroundColor: '#e8f5e8',
                  padding: '15px',
                  border: '1px solid #4caf50',
                  borderRadius: '4px',
                }}
              >
                <strong>Width: 50vw</strong> (50% of viewport width)
              </div>
            </div>
          </div>

          {/* Height Examples */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-700">📐 Height Properties</h4>
            <div
              style={{
                height: '100px',
                width: '200px',
                backgroundColor: '#fce4ec',
                border: '1px solid #e91e63',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              Height: 100px
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">📊 Width/Height Units:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-blue-800">Absolute Units:</h5>
                <ul className="text-blue-700 space-y-1">
                  <li>
                    <strong>px:</strong> Pixels - Fixed size
                  </li>
                  <li>
                    <strong>pt:</strong> Points - Print media
                  </li>
                  <li>
                    <strong>cm, mm:</strong> Physical units
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-blue-800">Relative Units:</h5>
                <ul className="text-blue-700 space-y-1">
                  <li>
                    <strong>%:</strong> Percentage of parent
                  </li>
                  <li>
                    <strong>vw/vh:</strong> Viewport width/height
                  </li>
                  <li>
                    <strong>em/rem:</strong> Font-based units
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    minMaxDimensions: {
      css: `/* Min/Max Width Examples */
.min-width-demo {
  min-width: 200px;
  width: 50%;
  background-color: #e1f5fe;
  padding: 15px;
  border: 2px solid #0288d1;
  text-align: center;
}

.max-width-demo {
  max-width: 300px;
  width: 100%;
  background-color: #f3e5f5;
  padding: 15px;
  border: 2px solid #7b1fa2;
  text-align: center;
}

/* Responsive Card Example */
.responsive-card {
  min-width: 250px;
  max-width: 400px;
  width: 100%;
  min-height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}`,
      html: `<div class="min-width-demo">Min-width: 200px</div>
<div class="max-width-demo">Max-width: 300px</div>

<div class="responsive-card">
  <h3>Responsive Card</h3>
  <p>Min: 250x200px, Max: 400px</p>
</div>`,
      result: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3 text-gray-700">📏 Min/Max Width Examples</h4>
            <div className="space-y-3">
              <div
                style={{
                  minWidth: '200px',
                  width: '50%',
                  backgroundColor: '#e1f5fe',
                  padding: '15px',
                  border: '2px solid #0288d1',
                  textAlign: 'center',
                  borderRadius: '4px',
                }}
              >
                Min-width: 200px
              </div>
              <div
                style={{
                  maxWidth: '300px',
                  width: '100%',
                  backgroundColor: '#f3e5f5',
                  padding: '15px',
                  border: '2px solid #7b1fa2',
                  textAlign: 'center',
                  borderRadius: '4px',
                }}
              >
                Max-width: 300px
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-gray-700">📱 Responsive Card Example</h4>
            <div
              style={{
                minWidth: '250px',
                maxWidth: '400px',
                width: '100%',
                minHeight: '200px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '20px',
                borderRadius: '12px',
                margin: '20px auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>Responsive Card</h3>
              <p style={{ margin: '5px 0' }}>Min: 250x200px</p>
              <p style={{ margin: '5px 0' }}>Max: 400px width</p>
              <p style={{ margin: '5px 0' }}>Adapts to container size</p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">🎯 Min/Max Use Cases:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-purple-800">Min Dimensions:</h5>
                <ul className="text-purple-700 space-y-1">
                  <li>• Đảm bảo buttons đủ lớn để click</li>
                  <li>• Cards không quá nhỏ trên mobile</li>
                  <li>• Text areas có chiều cao tối thiểu</li>
                  <li>• Images không bị quá nhỏ</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-purple-800">Max Dimensions:</h5>
                <ul className="text-purple-700 space-y-1">
                  <li>• Giới hạn width cho readability</li>
                  <li>• Prevent images quá lớn</li>
                  <li>• Control modal/popup sizes</li>
                  <li>• Responsive design breakpoints</li>
                </ul>
              </div>
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
      currentLesson="Box Model"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 text-lg">
            <Box className="w-5 h-5 mr-2" />
            CSS Box Model
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900" id="css-box-model">
            CSS Box Model
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Hiểu rõ về CSS Box Model - nền tảng quan trọng nhất để layout và spacing trong CSS
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Box Model Basics */}
          <div className="space-y-4">
            <SectionHeader
              id="boxModelBasics"
              title="Box Model Basics - Khái niệm cơ bản"
              icon={Box}
              isExpanded={expandedSections.boxModelBasics}
              onToggle={() => toggleSection('boxModelBasics')}
            />

            {expandedSections.boxModelBasics && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="box-model-basics"
                >
                  <Box className="w-6 h-6 text-blue-600" />
                  Box Model Basics - Khái niệm cơ bản
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    CSS Box Model là cách trình duyệt tính toán kích thước và vị trí của mỗi
                    element. Mỗi element được coi như một "hộp" với 4 phần:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-3">
                        📦 4 thành phần của Box Model:
                      </h3>
                      <ul className="text-blue-800 space-y-2">
                        <li>
                          <strong>Content:</strong> Nội dung thực tế (text, images)
                        </li>
                        <li>
                          <strong>Padding:</strong> Khoảng cách từ content đến border
                        </li>
                        <li>
                          <strong>Border:</strong> Đường viền bao quanh padding
                        </li>
                        <li>
                          <strong>Margin:</strong> Khoảng cách từ border ra ngoài
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-3">
                        🧮 Cách tính kích thước:
                      </h3>
                      <ul className="text-green-800 space-y-2">
                        <li>
                          <strong>Total Width:</strong> width + padding + border + margin
                        </li>
                        <li>
                          <strong>Total Height:</strong> height + padding + border + margin
                        </li>
                        <li>
                          <strong>Visible Width:</strong> width + padding + border
                        </li>
                        <li>
                          <strong>Visible Height:</strong> height + padding + border
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">⚠️ Lưu ý quan trọng:</h4>
                    <ul className="text-amber-700 space-y-1">
                      <li>• Margin không ảnh hưởng đến kích thước visible của element</li>
                      <li>• Margin có thể có giá trị âm (negative margin)</li>
                      <li>• Vertical margins có thể collapse (gộp lại)</li>
                      <li>• Box-sizing property thay đổi cách tính toán này</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.boxModelBasics} title="Box Model Visualization" />
              </div>
            )}
          </div>

          {/* Content, Padding, Border, Margin */}
          <div className="space-y-4">
            <SectionHeader
              id="contentPaddingBorderMargin"
              title="Content, Padding, Border, Margin"
              icon={Layers}
              isExpanded={expandedSections.contentPaddingBorderMargin}
              onToggle={() => toggleSection('contentPaddingBorderMargin')}
            />

            {expandedSections.contentPaddingBorderMargin && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="content-padding-border-margin"
                >
                  <Layers className="w-6 h-6 text-green-600" />
                  Content, Padding, Border, Margin
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Chi tiết về từng thành phần của Box Model và cách sử dụng chúng hiệu quả.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Padding - Khoảng cách bên trong */
padding: 20px;                    /* Tất cả 4 phía */
padding: 10px 20px;              /* Vertical Horizontal */
padding: 10px 15px 20px 25px;    /* Top Right Bottom Left */
padding-top: 10px;               /* Từng phía riêng */

/* Border - Đường viền */
border: 2px solid #333;          /* Width Style Color */
border-width: 1px 2px 3px 4px;   /* Từng phía khác nhau */
border-style: solid dashed;      /* Style từng phía */
border-color: red blue;          /* Color từng phía */

/* Margin - Khoảng cách bên ngoài */
margin: 20px;                    /* Tất cả 4 phía */
margin: 10px auto;               /* Vertical Auto (center) */
margin: -10px;                   /* Negative margin */
margin-left: auto;               /* Căn phải */`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-3">📏 Padding</h4>
                      <ul className="text-yellow-800 space-y-2">
                        <li>Khoảng cách từ content đến border</li>
                        <li>Luôn có giá trị dương</li>
                        <li>Kế thừa background color</li>
                        <li>Ảnh hưởng đến clickable area</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">🔲 Border</h4>
                      <ul className="text-blue-800 space-y-2">
                        <li>Đường viền bao quanh element</li>
                        <li>Có width, style, color</li>
                        <li>Có thể bo góc với border-radius</li>
                        <li>Ảnh hưởng đến layout</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-3">📐 Margin</h4>
                      <ul className="text-red-800 space-y-2">
                        <li>Khoảng cách từ border ra ngoài</li>
                        <li>Có thể có giá trị âm</li>
                        <li>Margin collapse giữa elements</li>
                        <li>Auto để center element</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer
                  example={examples.contentPaddingBorderMargin}
                  title="Content, Padding, Border, Margin Examples"
                />
              </div>
            )}
          </div>

          {/* Box Sizing */}
          <div className="space-y-4">
            <SectionHeader
              id="boxSizing"
              title="Box-sizing: content-box vs border-box"
              icon={Ruler}
              isExpanded={expandedSections.boxSizing}
              onToggle={() => toggleSection('boxSizing')}
            />

            {expandedSections.boxSizing && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="box-sizing"
                >
                  <Ruler className="w-6 h-6 text-purple-600" />
                  Box-sizing: content-box vs border-box
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Box-sizing property thay đổi cách CSS tính toán kích thước của element, giúp
                    layout dễ dàng và dự đoán được hơn.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Content Box (Default) */
.element {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
  /* Total width = 200 + 40 + 10 = 250px */
}

/* Border Box */
.element {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
  /* Total width = 200px (includes padding + border) */
}

/* Universal Border Box (Recommended) */
*, *::before, *::after {
  box-sizing: border-box;
}`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">📦 Content Box (Default)</h4>
                      <ul className="text-blue-800 space-y-2">
                        <li>Width/height chỉ áp dụng cho content</li>
                        <li>Padding và border được cộng thêm</li>
                        <li>Khó tính toán kích thước thực tế</li>
                        <li>Có thể gây overflow không mong muốn</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">📐 Border Box</h4>
                      <ul className="text-green-800 space-y-2">
                        <li>Width/height bao gồm padding + border</li>
                        <li>Dễ tính toán và dự đoán</li>
                        <li>Tốt cho responsive design</li>
                        <li>Được khuyến khích sử dụng</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.boxSizing} title="Box-sizing Comparison" />
              </div>
            )}
          </div>

          {/* Width and Height */}
          <div className="space-y-4">
            <SectionHeader
              id="widthHeight"
              title="Width và Height Properties"
              icon={Maximize}
              isExpanded={expandedSections.widthHeight}
              onToggle={() => toggleSection('widthHeight')}
            />

            {expandedSections.widthHeight && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="width-height"
                >
                  <Maximize className="w-6 h-6 text-orange-600" />
                  Width và Height Properties
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Width và height properties kiểm soát kích thước của elements với nhiều đơn vị đo
                    khác nhau.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Width Properties */
width: 300px;          /* Fixed pixels */
width: 50%;            /* Percentage of parent */
width: 50vw;           /* 50% of viewport width */
width: auto;           /* Content-based (default) */
width: fit-content;    /* Fit to content */

/* Height Properties */
height: 200px;         /* Fixed pixels */
height: 50vh;          /* 50% of viewport height */
height: 100%;          /* 100% of parent height */
height: auto;          /* Content-based (default) */

/* Responsive Units */
width: clamp(200px, 50%, 400px);  /* Min, preferred, max */
height: calc(100vh - 60px);       /* Calculated value */`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-cyan-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 mb-3">📏 Absolute Units</h4>
                      <ul className="text-cyan-800 space-y-2">
                        <li>
                          <strong>px:</strong> Pixels - Fixed size
                        </li>
                        <li>
                          <strong>pt:</strong> Points (1pt = 1.33px)
                        </li>
                        <li>
                          <strong>cm, mm, in:</strong> Physical units
                        </li>
                        <li>Best for: Fixed layouts, borders</li>
                      </ul>
                    </div>

                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-teal-900 mb-3">📐 Relative Units</h4>
                      <ul className="text-teal-800 space-y-2">
                        <li>
                          <strong>%:</strong> Percentage of parent
                        </li>
                        <li>
                          <strong>em:</strong> Relative to font-size
                        </li>
                        <li>
                          <strong>rem:</strong> Relative to root font-size
                        </li>
                        <li>Best for: Responsive design</li>
                      </ul>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-3">🖥️ Viewport Units</h4>
                      <ul className="text-indigo-800 space-y-2">
                        <li>
                          <strong>vw:</strong> Viewport width (1vw = 1%)
                        </li>
                        <li>
                          <strong>vh:</strong> Viewport height (1vh = 1%)
                        </li>
                        <li>
                          <strong>vmin/vmax:</strong> Smaller/larger dimension
                        </li>
                        <li>Best for: Full-screen layouts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.widthHeight} title="Width and Height Properties" />
              </div>
            )}
          </div>

          {/* Min/Max Dimensions */}
          <div className="space-y-4">
            <SectionHeader
              id="minMaxDimensions"
              title="Min/Max Width/Height"
              icon={Minimize}
              isExpanded={expandedSections.minMaxDimensions}
              onToggle={() => toggleSection('minMaxDimensions')}
            />

            {expandedSections.minMaxDimensions && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="min-max-dimensions"
                >
                  <Minimize className="w-6 h-6 text-red-600" />
                  Min/Max Width/Height
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Min/max properties giúp kiểm soát kích thước elements trong các tình huống khác
                    nhau, đặc biệt hữu ích cho responsive design.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Min/Max Width */
min-width: 200px;      /* Minimum width */
max-width: 800px;      /* Maximum width */
width: 100%;           /* Preferred width */

/* Min/Max Height */
min-height: 100px;     /* Minimum height */
max-height: 500px;     /* Maximum height */
height: auto;          /* Content-based height */

/* Responsive Container */
.container {
  width: 100%;
  max-width: 1200px;   /* Don't exceed 1200px */
  min-width: 320px;    /* Don't go below 320px */
  margin: 0 auto;      /* Center the container */
}

/* Responsive Images */
img {
  max-width: 100%;     /* Never exceed parent width */
  height: auto;        /* Maintain aspect ratio */
}`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 mb-3">📏 Min Dimensions</h4>
                      <ul className="text-emerald-800 space-y-2">
                        <li>Đảm bảo element không quá nhỏ</li>
                        <li>Tốt cho buttons, inputs</li>
                        <li>Maintain usability trên mobile</li>
                        <li>Prevent content từ bị crush</li>
                      </ul>
                    </div>

                    <div className="bg-rose-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-rose-900 mb-3">📐 Max Dimensions</h4>
                      <ul className="text-rose-800 space-y-2">
                        <li>Giới hạn kích thước tối đa</li>
                        <li>Tốt cho readability (max-width)</li>
                        <li>Prevent images quá lớn</li>
                        <li>Control layout trên large screens</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">🎯 Common Use Cases:</h4>
                    <ul className="text-orange-700 space-y-1">
                      <li>
                        • <strong>max-width: 100%</strong> cho responsive images
                      </li>
                      <li>
                        • <strong>min-height: 100vh</strong> cho full-screen sections
                      </li>
                      <li>
                        • <strong>max-width: 65ch</strong> cho optimal reading width
                      </li>
                      <li>
                        • <strong>min-width: 320px</strong> cho mobile compatibility
                      </li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer
                  example={examples.minMaxDimensions}
                  title="Min/Max Dimensions Examples"
                />
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center" id="tom-tat">
              📦 Tóm tắt CSS Box Model
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Box className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Box Model</h3>
                <p className="text-sm text-gray-600">Content, Padding, Border, Margin</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Ruler className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Box Sizing</h3>
                <p className="text-sm text-gray-600">Content-box vs Border-box</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Maximize className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Dimensions</h3>
                <p className="text-sm text-gray-600">Width, Height properties</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Minimize className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Min/Max</h3>
                <p className="text-sm text-gray-600">Responsive constraints</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 text-lg">
                Box Model là nền tảng của CSS layout - hiểu rõ nó sẽ giúp bạn tạo ra những layout
                chính xác và responsive! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

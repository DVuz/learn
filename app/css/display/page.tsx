'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Monitor,
  Move,
  Layers,
  ChevronDown,
  ChevronRight,
  Zap,
} from 'lucide-react';
import CSSLayout from '../components/CSSLayout';
import { CSS_NAVIGATIONS, CSS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/cssData';

const navigation = CSS_NAVIGATIONS['display'];
const progress = getProgressForLesson('display');

export default function CSSDisplayPositioningPage() {
  const [expandedSections, setExpandedSections] = useState({
    displayProperties: true,
    positionProperties: false,
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
    displayProperties: {
      css: `/* Block Elements */
.block-demo {
  display: block;
  background-color: #e3f2fd;
  padding: 15px;
  margin: 10px 0;
  border: 2px solid #2196f3;
  width: 200px;
}

/* Inline Elements */
.inline-demo {
  display: inline;
  background-color: #f3e5f5;
  padding: 8px 12px;
  border: 2px solid #9c27b0;
}

/* Inline-Block Elements */
.inline-block-demo {
  display: inline-block;
  background-color: #e8f5e8;
  padding: 15px;
  margin: 10px;
  border: 2px solid #4caf50;
  width: 120px;
  height: 60px;
  text-align: center;
}

/* Flex Container */
.flex-demo {
  display: flex;
  gap: 10px;
  background-color: #fff3e0;
  padding: 15px;
  border: 2px dashed #ff9800;
}

.flex-item {
  background-color: #ffcc80;
  padding: 10px;
  flex: 1;
  text-align: center;
}`,
      html: `<!-- Block Elements -->
<div class="block-demo">Block Element 1</div>
<div class="block-demo">Block Element 2</div>

<!-- Inline Elements -->
<span class="inline-demo">Inline 1</span>
<span class="inline-demo">Inline 2</span>

<!-- Inline-Block Elements -->
<div class="inline-block-demo">IB 1</div>
<div class="inline-block-demo">IB 2</div>

<!-- Flex Container -->
<div class="flex-demo">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`,
      result: (
        <div className="space-y-4">
          {/* Block */}
          <div>
            <h4 className="font-semibold mb-2 text-blue-700">📦 Block Elements</h4>
            <div style={{
              backgroundColor: '#e3f2fd',
              padding: '15px',
              margin: '5px 0',
              border: '2px solid #2196f3',
              width: '200px',
              borderRadius: '4px',
            }}>
              Block Element - Full width
            </div>
          </div>

          {/* Inline */}
          <div>
            <h4 className="font-semibold mb-2 text-purple-700">🔗 Inline Elements</h4>
            <span style={{
              display: 'inline',
              backgroundColor: '#f3e5f5',
              padding: '8px 12px',
              margin: '5px',
              border: '2px solid #9c27b0',
              borderRadius: '4px',
            }}>
              Inline 1
            </span>
            <span style={{
              display: 'inline',
              backgroundColor: '#f3e5f5',
              padding: '8px 12px',
              margin: '5px',
              border: '2px solid #9c27b0',
              borderRadius: '4px',
            }}>
              Inline 2
            </span>
          </div>

          {/* Inline-Block */}
          <div>
            <h4 className="font-semibold mb-2 text-green-700">🔲 Inline-Block Elements</h4>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#e8f5e8',
              padding: '15px',
              margin: '5px',
              border: '2px solid #4caf50',
              width: '100px',
              height: '50px',
              textAlign: 'center',
              borderRadius: '4px',
              fontSize: '14px',
            }}>
              IB 1
            </div>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#e8f5e8',
              padding: '15px',
              margin: '5px',
              border: '2px solid #4caf50',
              width: '100px',
              height: '50px',
              textAlign: 'center',
              borderRadius: '4px',
              fontSize: '14px',
            }}>
              IB 2
            </div>
          </div>

          {/* Flex */}
          <div>
            <h4 className="font-semibold mb-2 text-orange-700">🔄 Flex Container</h4>
            <div style={{
              display: 'flex',
              gap: '10px',
              backgroundColor: '#fff3e0',
              padding: '15px',
              border: '2px dashed #ff9800',
              borderRadius: '4px',
            }}>
              <div style={{
                backgroundColor: '#ffcc80',
                padding: '10px',
                flex: 1,
                textAlign: 'center',
                borderRadius: '4px',
              }}>
                Item 1
              </div>
              <div style={{
                backgroundColor: '#ffcc80',
                padding: '10px',
                flex: 1,
                textAlign: 'center',
                borderRadius: '4px',
              }}>
                Item 2
              </div>
              <div style={{
                backgroundColor: '#ffcc80',
                padding: '10px',
                flex: 1,
                textAlign: 'center',
                borderRadius: '4px',
              }}>
                Item 3
              </div>
            </div>
          </div>
        </div>
      ),
    },
    positionProperties: {
      css: `/* Container */
.position-container {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f5f5f5;
  border: 2px dashed #999;
}

/* Position Types */
.pos-static {
  position: static; /* Default */
  background-color: #e3f2fd;
  padding: 10px;
}

.pos-relative {
  position: relative;
  top: 10px;
  left: 20px;
  background-color: #f3e5f5;
  padding: 8px;
  width: 100px;
}

.pos-absolute {
  position: absolute;
  top: 30px;
  right: 20px;
  background-color: #e8f5e8;
  padding: 8px;
  width: 80px;
}

.pos-fixed {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #fff3e0;
  padding: 10px;
  z-index: 1000;
}

/* Z-index Example */
.layer-1 { z-index: 1; background: #ffcdd2; }
.layer-2 { z-index: 2; background: #c8e6c9; }
.layer-3 { z-index: 3; background: #bbdefb; }`,
      html: `<!-- Static -->
<div class="pos-static">Static (Default)</div>

<!-- Container with Relative/Absolute -->
<div class="position-container">
  <div class="pos-relative">Relative</div>
  <div class="pos-absolute">Absolute</div>
</div>

<!-- Z-index Layers -->
<div style="position: relative;">
  <div class="layer-1">Z-index: 1</div>
  <div class="layer-2">Z-index: 2</div>
  <div class="layer-3">Z-index: 3</div>
</div>`,
      result: (
        <div className="space-y-4">
          {/* Static */}
          <div>
            <h4 className="font-semibold mb-2 text-blue-700">📍 Static Position</h4>
            <div style={{
              backgroundColor: '#e3f2fd',
              padding: '10px',
              border: '2px solid #2196f3',
              borderRadius: '4px',
              width: 'fit-content',
            }}>
              Static - Normal flow
            </div>
          </div>

          {/* Relative/Absolute Container */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-700">📦 Relative & Absolute</h4>
            <div style={{
              position: 'relative',
              width: '250px',
              height: '120px',
              backgroundColor: '#f5f5f5',
              border: '2px dashed #999',
              borderRadius: '4px',
            }}>
              <div style={{ padding: '5px', fontSize: '12px', color: '#666' }}>
                Container (relative)
              </div>
              <div style={{
                position: 'relative',
                top: '5px',
                left: '15px',
                backgroundColor: '#f3e5f5',
                padding: '6px',
                border: '1px solid #9c27b0',
                width: '80px',
                borderRadius: '3px',
                fontSize: '12px',
              }}>
                Relative
              </div>
              <div style={{
                position: 'absolute',
                top: '40px',
                right: '15px',
                backgroundColor: '#e8f5e8',
                padding: '6px',
                border: '1px solid #4caf50',
                width: '70px',
                borderRadius: '3px',
                fontSize: '12px',
              }}>
                Absolute
              </div>
            </div>
          </div>

          {/* Z-index */}
          <div>
            <h4 className="font-semibold mb-2 text-purple-700">📚 Z-index Layers</h4>
            <div style={{ position: 'relative', height: '80px' }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                zIndex: 1,
                backgroundColor: '#ffcdd2',
                padding: '8px',
                border: '1px solid #f44336',
                borderRadius: '4px',
                fontSize: '12px',
              }}>
                Z-index: 1
              </div>
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '40px',
                zIndex: 2,
                backgroundColor: '#c8e6c9',
                padding: '8px',
                border: '1px solid #4caf50',
                borderRadius: '4px',
                fontSize: '12px',
              }}>
                Z-index: 2
              </div>
              <div style={{
                position: 'absolute',
                top: '30px',
                left: '70px',
                zIndex: 3,
                backgroundColor: '#bbdefb',
                padding: '8px',
                border: '1px solid #2196f3',
                borderRadius: '4px',
                fontSize: '12px',
              }}>
                Z-index: 3
              </div>
            </div>
          </div>
        </div>
      ),
    },
    practicalExamples: {
      css: `/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Card with Badge */
.card {
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4081;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
}

/* Tooltip */
.tooltip-trigger {
  position: relative;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
}`,
      html: `<!-- Card with Badge -->
<div class="card">
  <div class="badge">New</div>
  <h3>Product Card</h3>
  <p>Card with absolute positioned badge</p>
</div>

<!-- Modal -->
<div class="modal-overlay">
  <div class="modal-content">
    <h3>Modal Title</h3>
    <p>Fixed positioned modal</p>
  </div>
</div>

<!-- Tooltip -->
<div class="tooltip-trigger">
  Hover me
  <div class="tooltip">Tooltip text</div>
</div>`,
      result: (
        <div className="space-y-6">
          {/* Card with Badge */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-700">🃏 Card with Badge</h4>
            <div style={{
              position: 'relative',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              border: '1px solid #e0e0e0',
              maxWidth: '250px',
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#ff4081',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
              }}>
                New
              </div>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Product Card</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                Card với absolute positioned badge
              </p>
            </div>
          </div>

          {/* Modal */}
          <div>
            <h4 className="font-semibold mb-3 text-blue-700">🪟 Modal Example</h4>
            <div style={{
              position: 'relative',
              height: '150px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  textAlign: 'center',
                }}>
                  <h3 style={{ margin: '0 0 10px 0' }}>Modal Title</h3>
                  <p style={{ margin: '0 0 15px 0', fontSize: '14px' }}>
                    Fixed positioned modal
                  </p>
                  <button style={{
                    background: '#2196f3',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tooltip */}
          <div>
            <h4 className="font-semibold mb-3 text-purple-700">💬 Tooltip</h4>
            <div style={{
              textAlign: 'center',
              padding: '20px',
            }}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
              }}>
                <button style={{
                  padding: '10px 20px',
                  background: '#9c27b0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}>
                  Hover for tooltip
                </button>
                <div style={{
                  position: 'absolute',
                  bottom: '125%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#333',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  pointerEvents: 'none',
                }}>
                  Tooltip text here!
                </div>
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
      currentLesson="Display & Positioning"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 text-lg">
            <Monitor className="w-5 h-5 mr-2" />
            CSS Display & Positioning
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900" id="css-display-positioning">
            CSS Display & Positioning
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Học cách kiểm soát layout và vị trí elements với Display properties và Positioning system
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Display Properties */}
          <div className="space-y-4">
            <SectionHeader
              id="displayProperties"
              title="Display Properties"
              icon={Monitor}
              isExpanded={expandedSections.displayProperties}
              onToggle={() => toggleSection('displayProperties')}
            />

            {expandedSections.displayProperties && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6" id="display-properties">
                  <Monitor className="w-6 h-6 text-purple-600" />
                  Display Properties
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Display property quyết định cách element được hiển thị và tương tác với các elements khác trong layout.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Display Values */
display: block;        /* Full width, new line */
display: inline;       /* Content width, same line */
display: inline-block; /* Best of both worlds */
display: none;         /* Hidden, no space taken */
display: flex;         /* Flexible box layout */
display: grid;         /* Grid layout */

/* Visibility vs Display */
visibility: hidden;    /* Hidden but space reserved */
display: none;         /* Hidden and no space taken */`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">📦 Block vs Inline</h4>
                      <ul className="text-blue-800 space-y-2">
                        <li><strong>Block:</strong> Full width, new line, can set dimensions</li>
                        <li><strong>Inline:</strong> Content width, same line, no dimensions</li>
                        <li><strong>Inline-block:</strong> Same line + can set dimensions</li>
                        <li><strong>None:</strong> Completely hidden</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-3">🔄 Modern Layouts</h4>
                      <ul className="text-orange-800 space-y-2">
                        <li><strong>Flex:</strong> 1D flexible layouts</li>
                        <li><strong>Grid:</strong> 2D grid layouts</li>
                        <li><strong>Table:</strong> Table-like behavior</li>
                        <li>Powerful alternatives to floats</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.displayProperties} title="Display Properties Examples" />
              </div>
            )}
          </div>

          {/* Position Properties */}
          <div className="space-y-4">
            <SectionHeader
              id="positionProperties"
              title="Position Properties & Z-index"
              icon={Move}
              isExpanded={expandedSections.positionProperties}
              onToggle={() => toggleSection('positionProperties')}
            />

            {expandedSections.positionProperties && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6" id="position-properties">
                  <Move className="w-6 h-6 text-blue-600" />
                  Position Properties & Z-index
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Position property kiểm soát cách element được positioned, cùng với z-index để quản lý stacking order.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Position Types */
position: static;      /* Default, normal flow */
position: relative;    /* Offset from normal position */
position: absolute;    /* Relative to positioned ancestor */
position: fixed;       /* Relative to viewport */
position: sticky;      /* Sticky positioning */

/* Offsets + Z-index */
top: 20px;            /* Distance from top */
right: 10px;          /* Distance from right */
z-index: 999;         /* Stacking order */

/* Centering */
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">📍 Static & Relative</h4>
                      <ul className="text-blue-800 space-y-2">
                        <li><strong>Static:</strong> Normal flow</li>
                        <li><strong>Relative:</strong> Offset from normal</li>
                        <li>Keeps space in layout</li>
                        <li>Creates positioning context</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">🎯 Absolute & Fixed</h4>
                      <ul className="text-green-800 space-y-2">
                        <li><strong>Absolute:</strong> Relative to parent</li>
                        <li><strong>Fixed:</strong> Relative to viewport</li>
                        <li>Removed from flow</li>
                        <li>No space taken</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">📚 Z-index & Sticky</h4>
                      <ul className="text-purple-800 space-y-2">
                        <li><strong>Z-index:</strong> Higher = on top</li>
                        <li><strong>Sticky:</strong> Relative + Fixed hybrid</li>
                        <li>Only works with positioned elements</li>
                        <li>Stacking context matters</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.positionProperties} title="Position & Z-index Examples" />
              </div>
            )}
          </div>

          {/* Practical Examples */}
          <div className="space-y-4">
            <SectionHeader
              id="practicalExamples"
              title="Practical UI Components"
              icon={Zap}
              isExpanded={expandedSections.practicalExamples}
              onToggle={() => toggleSection('practicalExamples')}
            />

            {expandedSections.practicalExamples && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6" id="practical-examples">
                  <Zap className="w-6 h-6 text-orange-600" />
                  Practical UI Components
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Các ví dụ thực tế về cách sử dụng display và positioning để tạo ra UI components phổ biến.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">🪟 Modals</h4>
                      <ul className="text-blue-800 space-y-2">
                        <li>Fixed position overlay</li>
                        <li>High z-index</li>
                        <li>Flexbox centering</li>
                        <li>RGBA background</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">🃏 Cards & Badges</h4>
                      <ul className="text-purple-800 space-y-2">
                        <li>Relative containers</li>
                        <li>Absolute badges</li>
                        <li>Corner positioning</li>
                        <li>Hover effects</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">💬 Tooltips</h4>
                      <ul className="text-green-800 space-y-2">
                        <li>Absolute positioning</li>
                        <li>Transform centering</li>
                        <li>Pseudo-element arrows</li>
                        <li>Hover states</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.practicalExamples} title="UI Components Examples" />
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center" id="tom-tat">
              🎯 Tóm tắt Display & Positioning
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Monitor className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Display</h3>
                <p className="text-sm text-gray-600">Block, Inline, Flex, Grid</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Move className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Position</h3>
                <p className="text-sm text-gray-600">Static, Relative, Absolute, Fixed</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Layers className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Z-index</h3>
                <p className="text-sm text-gray-600">Stacking order & context</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Components</h3>
                <p className="text-sm text-gray-600">Modals, cards, tooltips</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 text-lg">
                Display và Positioning là nền tảng để tạo ra mọi layout phức tạp trong CSS! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

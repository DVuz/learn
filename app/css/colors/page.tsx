'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Palette, Type, ChevronDown, ChevronRight, Paintbrush, AlignLeft, Zap } from 'lucide-react';
import CSSLayout from '../components/CSSLayout';
import { CSS_NAVIGATIONS, CSS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/cssData';

const navigation = CSS_NAVIGATIONS['colors'];
const progress = getProgressForLesson('colors');

export default function CSSColorsTypographyPage() {
  const [expandedSections, setExpandedSections] = useState({
    colorValues: true,
    backgroundProperties: false,
    fontProperties: false,
    textProperties: false,
    textSpacing: false,
  });

  type SectionKey = keyof typeof expandedSections;

  const toggleSection = (section: SectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const examples = {
    colorValues: {
      css: `/* Hex Colors */
.hex-red { color: #ff6b6b; }
.hex-short { color: #f00; }

/* RGB Colors */
.rgb-blue { color: rgb(52, 152, 219); }
.rgba-blue { color: rgba(52, 152, 219, 0.7); }

/* HSL Colors */
.hsl-green { color: hsl(120, 60%, 50%); }
.hsla-green { color: hsla(120, 60%, 50%, 0.8); }

/* Named Colors */
.named-purple { color: purple; }
.named-crimson { color: crimson; }`,
      html: `<p class="hex-red">Hex Color: #ff6b6b</p>
<p class="hex-short">Hex Short: #f00</p>
<p class="rgb-blue">RGB: rgb(52, 152, 219)</p>
<p class="rgba-blue">RGBA với transparency</p>
<p class="hsl-green">HSL: hsl(120, 60%, 50%)</p>
<p class="hsla-green">HSLA với transparency</p>
<p class="named-purple">Named: purple</p>
<p class="named-crimson">Named: crimson</p>`,
      result: (
        <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
          <p style={{ color: '#ff6b6b', fontSize: '18px', margin: '8px 0', fontWeight: '500' }}>
            Hex Color: #ff6b6b
          </p>
          <p style={{ color: '#f00', fontSize: '18px', margin: '8px 0', fontWeight: '500' }}>
            Hex Short: #f00
          </p>
          <p
            style={{
              color: 'rgb(52, 152, 219)',
              fontSize: '18px',
              margin: '8px 0',
              fontWeight: '500',
            }}
          >
            RGB: rgb(52, 152, 219)
          </p>
          <p
            style={{
              color: 'rgba(52, 152, 219, 0.7)',
              fontSize: '18px',
              margin: '8px 0',
              fontWeight: '500',
            }}
          >
            RGBA với transparency
          </p>
          <p
            style={{
              color: 'hsl(120, 60%, 50%)',
              fontSize: '18px',
              margin: '8px 0',
              fontWeight: '500',
            }}
          >
            HSL: hsl(120, 60%, 50%)
          </p>
          <p
            style={{
              color: 'hsla(120, 60%, 50%, 0.8)',
              fontSize: '18px',
              margin: '8px 0',
              fontWeight: '500',
            }}
          >
            HSLA với transparency
          </p>
          <p style={{ color: 'purple', fontSize: '18px', margin: '8px 0', fontWeight: '500' }}>
            Named: purple
          </p>
          <p style={{ color: 'crimson', fontSize: '18px', margin: '8px 0', fontWeight: '500' }}>
            Named: crimson
          </p>
        </div>
      ),
    },
    backgroundProperties: {
      css: `/* Background Colors */
.bg-solid {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.bg-transparent {
  background-color: rgba(231, 76, 60, 0.3);
  padding: 20px;
  border-radius: 8px;
}

/* Background Gradients */
.bg-linear {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.bg-radial {
  background: radial-gradient(circle, #667eea, #764ba2);
  color: white;
  padding: 20px;
  border-radius: 8px;
}`,
      html: `<div class="bg-solid">Solid Background Color</div>
<div class="bg-transparent">Transparent Background</div>
<div class="bg-linear">Linear Gradient Background</div>
<div class="bg-radial">Radial Gradient Background</div>`,
      result: (
        <div className="space-y-4">
          <div
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: '500',
            }}
          >
            Solid Background Color
          </div>
          <div
            style={{
              backgroundColor: 'rgba(231, 76, 60, 0.3)',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: '500',
              border: '1px solid rgba(231, 76, 60, 0.5)',
            }}
          >
            Transparent Background
          </div>
          <div
            style={{
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: '500',
            }}
          >
            Linear Gradient Background
          </div>
          <div
            style={{
              background: 'radial-gradient(circle, #667eea, #764ba2)',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: '500',
            }}
          >
            Radial Gradient Background
          </div>
        </div>
      ),
    },
    fontProperties: {
      css: `/* Font Family */
.font-serif {
  font-family: 'Times New Roman', serif;
  font-size: 18px;
}

.font-sans {
  font-family: 'Arial', sans-serif;
  font-size: 18px;
}

.font-mono {
  font-family: 'Courier New', monospace;
  font-size: 18px;
}

/* Font Weight */
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-bold { font-weight: 700; }

/* Font Style */
.font-italic { font-style: italic; }`,
      html: `<p class="font-serif">Font Serif - Times New Roman</p>
<p class="font-sans">Font Sans-serif - Arial</p>
<p class="font-mono">Font Monospace - Courier New</p>

<p class="font-light">Light Weight (300)</p>
<p class="font-normal">Normal Weight (400)</p>
<p class="font-bold">Bold Weight (700)</p>

<p class="font-italic">Italic Style</p>`,
      result: (
        <div className="space-y-3">
          <div className="border-b pb-3">
            <h4 className="font-semibold mb-2 text-gray-700">Font Families</h4>
            <p
              style={{ fontFamily: "'Times New Roman', serif", fontSize: '18px', margin: '8px 0' }}
            >
              Font Serif - Times New Roman
            </p>
            <p style={{ fontFamily: "'Arial', sans-serif", fontSize: '18px', margin: '8px 0' }}>
              Font Sans-serif - Arial
            </p>
            <p
              style={{ fontFamily: "'Courier New', monospace", fontSize: '18px', margin: '8px 0' }}
            >
              Font Monospace - Courier New
            </p>
          </div>

          <div className="border-b pb-3">
            <h4 className="font-semibold mb-2 text-gray-700">Font Weights</h4>
            <p style={{ fontWeight: 300, margin: '8px 0' }}>Light Weight (300)</p>
            <p style={{ fontWeight: 400, margin: '8px 0' }}>Normal Weight (400)</p>
            <p style={{ fontWeight: 700, margin: '8px 0' }}>Bold Weight (700)</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-700">Font Styles</h4>
            <p style={{ fontStyle: 'italic', margin: '8px 0' }}>Italic Style</p>
          </div>
        </div>
      ),
    },
    textProperties: {
      css: `/* Text Alignment */
.text-left {
  text-align: left;
  background: #f8f9fa;
  padding: 10px;
}

.text-center {
  text-align: center;
  background: #f8f9fa;
  padding: 10px;
}

.text-right {
  text-align: right;
  background: #f8f9fa;
  padding: 10px;
}

/* Text Decoration */
.text-underline { text-decoration: underline; }
.text-line-through { text-decoration: line-through; }

/* Text Transform */
.text-uppercase { text-transform: uppercase; }
.text-lowercase { text-transform: lowercase; }
.text-capitalize { text-transform: capitalize; }`,
      html: `<div class="text-left">Text align left</div>
<div class="text-center">Text align center</div>
<div class="text-right">Text align right</div>

<p class="text-underline">Text với underline</p>
<p class="text-line-through">Text với line-through</p>

<p class="text-uppercase">text transform uppercase</p>
<p class="text-lowercase">TEXT TRANSFORM LOWERCASE</p>
<p class="text-capitalize">text transform capitalize</p>`,
      result: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3 text-gray-700">Text Alignment</h4>
            <div
              style={{
                textAlign: 'left',
                background: '#f8f9fa',
                padding: '10px',
                margin: '5px 0',
                borderRadius: '4px',
              }}
            >
              Text align left
            </div>
            <div
              style={{
                textAlign: 'center',
                background: '#f8f9fa',
                padding: '10px',
                margin: '5px 0',
                borderRadius: '4px',
              }}
            >
              Text align center
            </div>
            <div
              style={{
                textAlign: 'right',
                background: '#f8f9fa',
                padding: '10px',
                margin: '5px 0',
                borderRadius: '4px',
              }}
            >
              Text align right
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-gray-700">Text Decoration</h4>
            <p style={{ textDecoration: 'underline', margin: '8px 0' }}>Text với underline</p>
            <p style={{ textDecoration: 'line-through', margin: '8px 0' }}>Text với line-through</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-gray-700">Text Transform</h4>
            <p style={{ textTransform: 'uppercase', margin: '8px 0' }}>text transform uppercase</p>
            <p style={{ textTransform: 'lowercase', margin: '8px 0' }}>TEXT TRANSFORM LOWERCASE</p>
            <p style={{ textTransform: 'capitalize', margin: '8px 0' }}>
              text transform capitalize
            </p>
          </div>
        </div>
      ),
    },
    textSpacing: {
      css: `/* Line Height */
.line-height-tight {
  line-height: 1.2;
  background: #f0f8ff;
  padding: 15px;
  border-radius: 5px;
}

.line-height-normal {
  line-height: 1.6;
  background: #f0f8ff;
  padding: 15px;
  border-radius: 5px;
}

.line-height-loose {
  line-height: 2.0;
  background: #f0f8ff;
  padding: 15px;
  border-radius: 5px;
}

/* Letter Spacing */
.letter-tight { letter-spacing: -1px; }
.letter-normal { letter-spacing: normal; }
.letter-wide { letter-spacing: 3px; }

/* Word Spacing */
.word-wide { word-spacing: 10px; }`,
      html: `<div class="line-height-tight">
  Line height 1.2 (tight): Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

<div class="line-height-normal">
  Line height 1.6 (normal): Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

<div class="line-height-loose">
  Line height 2.0 (loose): Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

<p class="letter-tight">Letter spacing tight (-1px)</p>
<p class="letter-normal">Letter spacing normal</p>
<p class="letter-wide">Letter spacing wide (3px)</p>

<p class="word-wide">Word spacing wide (10px)</p>`,
      result: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3 text-gray-700">Line Height</h4>
            <div
              style={{
                lineHeight: 1.2,
                background: '#f0f8ff',
                padding: '15px',
                borderRadius: '5px',
                margin: '10px 0',
              }}
            >
              <strong>Line height 1.2 (tight):</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div
              style={{
                lineHeight: 1.6,
                background: '#f0f8ff',
                padding: '15px',
                borderRadius: '5px',
                margin: '10px 0',
              }}
            >
              <strong>Line height 1.6 (normal):</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div
              style={{
                lineHeight: 2.0,
                background: '#f0f8ff',
                padding: '15px',
                borderRadius: '5px',
                margin: '10px 0',
              }}
            >
              <strong>Line height 2.0 (loose):</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-gray-700">Letter & Word Spacing</h4>
            <p style={{ letterSpacing: '-1px', fontSize: '18px', margin: '8px 0' }}>
              Letter spacing tight (-1px)
            </p>
            <p style={{ letterSpacing: 'normal', fontSize: '18px', margin: '8px 0' }}>
              Letter spacing normal
            </p>
            <p style={{ letterSpacing: '3px', fontSize: '18px', margin: '8px 0' }}>
              Letter spacing wide (3px)
            </p>
            <p style={{ wordSpacing: '10px', fontSize: '18px', margin: '8px 0' }}>
              Word spacing wide (10px)
            </p>
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

  const ColorPalette = ({
    colors,
    title,
  }: {
    colors: Array<{ name: string; value: string }>;
    title: string;
  }) => (
    <div className="bg-white p-4 rounded-lg border">
      <h4 className="font-semibold text-gray-800 mb-3">{title}</h4>
      <div className="grid grid-cols-5 gap-2">
        {colors.map((color, index) => (
          <div key={index} className="text-center">
            <div
              className="w-full h-12 rounded border border-gray-200 mb-1"
              style={{ backgroundColor: color.value }}
            />
            <div className="text-xs text-gray-600">{color.name}</div>
            <div className="text-xs font-mono text-gray-500">{color.value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <CSSLayout
      currentLesson="Colors & Typography"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 text-lg">
            <Palette className="w-5 h-5 mr-2" />
            CSS Colors & Typography
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900" id="css-colors-typography">
            CSS Colors & Typography
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Học cách sử dụng màu sắc và typography trong CSS để tạo ra giao diện đẹp mắt và chuyên
            nghiệp
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Color Values Section */}
          <div className="space-y-4">
            <SectionHeader
              id="colorValues"
              title="Color Values - Giá trị màu sắc"
              icon={Palette}
              isExpanded={expandedSections.colorValues}
              onToggle={() => toggleSection('colorValues')}
            />

            {expandedSections.colorValues && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="color-values"
                >
                  <Palette className="w-6 h-6 text-pink-600" />
                  Color Values - Giá trị màu sắc
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    CSS hỗ trợ nhiều cách khác nhau để định nghĩa màu sắc. Mỗi định dạng có ưu điểm
                    riêng và phù hợp với các tình huống khác nhau.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-3">🎨 Các định dạng màu:</h3>
                      <ul className="text-blue-800 space-y-2">
                        <li>
                          <strong>Hex:</strong> #ff6b6b, #f00 (3 hoặc 6 ký tự)
                        </li>
                        <li>
                          <strong>RGB:</strong> rgb(255, 107, 107)
                        </li>
                        <li>
                          <strong>RGBA:</strong> rgba(255, 107, 107, 0.8)
                        </li>
                        <li>
                          <strong>HSL:</strong> hsl(0, 100%, 71%)
                        </li>
                        <li>
                          <strong>HSLA:</strong> hsla(0, 100%, 71%, 0.8)
                        </li>
                        <li>
                          <strong>Named:</strong> red, blue, crimson
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-3">💡 Khi nào dùng gì:</h3>
                      <ul className="text-green-800 space-y-2">
                        <li>
                          <strong>Hex:</strong> Phổ biến nhất, design tools
                        </li>
                        <li>
                          <strong>RGB:</strong> Khi cần tính toán màu
                        </li>
                        <li>
                          <strong>RGBA:</strong> Khi cần độ trong suốt
                        </li>
                        <li>
                          <strong>HSL:</strong> Dễ điều chỉnh sáng/tối
                        </li>
                        <li>
                          <strong>HSLA:</strong> HSL + độ trong suốt
                        </li>
                        <li>
                          <strong>Named:</strong> Prototyping nhanh
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <ColorPalette
                      title="Primary Colors"
                      colors={[
                        { name: 'Red', value: '#ff6b6b' },
                        { name: 'Blue', value: '#339af0' },
                        { name: 'Green', value: '#51cf66' },
                        { name: 'Yellow', value: '#ffd43b' },
                        { name: 'Purple', value: '#9775fa' },
                      ]}
                    />
                    <ColorPalette
                      title="Neutral Colors"
                      colors={[
                        { name: 'Black', value: '#000000' },
                        { name: 'Dark', value: '#495057' },
                        { name: 'Gray', value: '#868e96' },
                        { name: 'Light', value: '#dee2e6' },
                        { name: 'White', value: '#ffffff' },
                      ]}
                    />
                    <ColorPalette
                      title="Semantic Colors"
                      colors={[
                        { name: 'Success', value: '#51cf66' },
                        { name: 'Warning', value: '#ffd43b' },
                        { name: 'Error', value: '#ff6b6b' },
                        { name: 'Info', value: '#339af0' },
                        { name: 'Muted', value: '#868e96' },
                      ]}
                    />
                  </div>
                </div>

                <ExampleViewer example={examples.colorValues} title="Các định dạng màu sắc" />
              </div>
            )}
          </div>

          {/* Background Properties */}
          <div className="space-y-4">
            <SectionHeader
              id="backgroundProperties"
              title="Background Properties"
              icon={Paintbrush}
              isExpanded={expandedSections.backgroundProperties}
              onToggle={() => toggleSection('backgroundProperties')}
            />

            {expandedSections.backgroundProperties && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="background-properties"
                >
                  <Paintbrush className="w-6 h-6 text-orange-600" />
                  Background Properties
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Background properties cho phép tạo nền đa dạng từ màu đơn sắc đến gradient và
                    hình ảnh phức tạp.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Background Colors */
background-color: #3498db;
background-color: rgba(52, 152, 219, 0.8);

/* Background Gradients */
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
background: radial-gradient(circle, #667eea, #764ba2);

/* Background Images */
background-image: url('image.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">🎨 Background Types</h4>
                      <ul className="text-purple-800 space-y-2">
                        <li>
                          <strong>Solid Color:</strong> background-color
                        </li>
                        <li>
                          <strong>Linear Gradient:</strong> linear-gradient()
                        </li>
                        <li>
                          <strong>Radial Gradient:</strong> radial-gradient()
                        </li>
                        <li>
                          <strong>Image:</strong> background-image
                        </li>
                        <li>
                          <strong>Pattern:</strong> repeating backgrounds
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-3">⚙️ Background Control</h4>
                      <ul className="text-orange-800 space-y-2">
                        <li>
                          <strong>Size:</strong> cover, contain, 100px
                        </li>
                        <li>
                          <strong>Position:</strong> center, top left
                        </li>
                        <li>
                          <strong>Repeat:</strong> no-repeat, repeat-x
                        </li>
                        <li>
                          <strong>Attachment:</strong> fixed, scroll
                        </li>
                        <li>
                          <strong>Blend:</strong> background-blend-mode
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer
                  example={examples.backgroundProperties}
                  title="Background Properties"
                />
              </div>
            )}
          </div>

          {/* Font Properties */}
          <div className="space-y-4">
            <SectionHeader
              id="fontProperties"
              title="Font Properties"
              icon={Type}
              isExpanded={expandedSections.fontProperties}
              onToggle={() => toggleSection('fontProperties')}
            />

            {expandedSections.fontProperties && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="font-properties"
                >
                  <Type className="w-6 h-6 text-blue-600" />
                  Font Properties
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Font properties kiểm soát cách hiển thị văn bản, từ font family đến kích thước
                    và độ đậm.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Font Family */
font-family: 'Arial', sans-serif;
font-family: 'Times New Roman', serif;
font-family: 'Courier New', monospace;

/* Font Size */
font-size: 16px;        /* Absolute */
font-size: 1.2em;       /* Relative to parent */
font-size: 1.2rem;      /* Relative to root */

/* Font Weight */
font-weight: normal;    /* 400 */
font-weight: bold;      /* 700 */
font-weight: 300;       /* Light */

/* Font Style */
font-style: normal;
font-style: italic;`}
                    </code>
                  </div>

                  <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-cyan-800 mb-2">💡 Best Practices:</h4>
                    <ul className="text-cyan-700 space-y-1">
                      <li>• Sử dụng web-safe fonts hoặc Google Fonts</li>
                      <li>• Luôn có fallback fonts trong font stack</li>
                      <li>• Font size tối thiểu 16px cho body text</li>
                      <li>• Sử dụng rem units cho consistency</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.fontProperties} title="Font Properties" />
              </div>
            )}
          </div>

          {/* Text Properties */}
          <div className="space-y-4">
            <SectionHeader
              id="textProperties"
              title="Text Properties"
              icon={AlignLeft}
              isExpanded={expandedSections.textProperties}
              onToggle={() => toggleSection('textProperties')}
            />

            {expandedSections.textProperties && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="text-properties"
                >
                  <AlignLeft className="w-6 h-6 text-purple-600" />
                  Text Properties
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Text properties kiểm soát cách căn chỉnh, trang trí và biến đổi văn bản.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Text Alignment */
text-align: left;       /* Căn trái */
text-align: center;     /* Căn giữa */
text-align: right;      /* Căn phải */
text-align: justify;    /* Căn đều */

/* Text Decoration */
text-decoration: none;           /* Không trang trí */
text-decoration: underline;      /* Gạch dưới */
text-decoration: line-through;   /* Gạch ngang */

/* Text Transform */
text-transform: uppercase;       /* CHỮ HOA */
text-transform: lowercase;       /* chữ thường */
text-transform: capitalize;      /* Chữ Hoa Đầu Từ */`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-rose-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-rose-900 mb-3">📐 Text Alignment</h4>
                      <ul className="text-rose-800 space-y-2">
                        <li>
                          <strong>left:</strong> Căn trái (mặc định)
                        </li>
                        <li>
                          <strong>center:</strong> Căn giữa
                        </li>
                        <li>
                          <strong>right:</strong> Căn phải
                        </li>
                        <li>
                          <strong>justify:</strong> Căn đều hai bên
                        </li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-amber-900 mb-3">✨ Text Effects</h4>
                      <ul className="text-amber-800 space-y-2">
                        <li>
                          <strong>text-shadow:</strong> Đổ bóng chữ
                        </li>
                        <li>
                          <strong>text-overflow:</strong> Xử lý text dài
                        </li>
                        <li>
                          <strong>white-space:</strong> Xử lý khoảng trắng
                        </li>
                        <li>
                          <strong>word-wrap:</strong> Xuống dòng từ
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.textProperties} title="Text Properties" />
              </div>
            )}
          </div>

          {/* Text Spacing */}
          <div className="space-y-4">
            <SectionHeader
              id="textSpacing"
              title="Text Spacing"
              icon={Zap}
              isExpanded={expandedSections.textSpacing}
              onToggle={() => toggleSection('textSpacing')}
            />

            {expandedSections.textSpacing && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="text-spacing"
                >
                  <Zap className="w-6 h-6 text-green-600" />
                  Text Spacing
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Text spacing properties kiểm soát khoảng cách giữa các dòng, chữ cái và từ để
                    tối ưu khả năng đọc.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Line Height - Khoảng cách dòng */
line-height: 1.5;       /* 1.5 lần font-size */
line-height: 24px;      /* Giá trị tuyệt đối */
line-height: 150%;      /* Phần trăm */

/* Letter Spacing - Khoảng cách chữ cái */
letter-spacing: normal;  /* Mặc định */
letter-spacing: 2px;     /* Tăng khoảng cách */
letter-spacing: -0.5px;  /* Giảm khoảng cách */

/* Word Spacing - Khoảng cách từ */
word-spacing: normal;    /* Mặc định */
word-spacing: 5px;       /* Tăng khoảng cách */`}
                    </code>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      💡 Best Practices cho Typography:
                    </h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Line-height: 1.4-1.6 cho body text, 1.1-1.3 cho headings</li>
                      <li>• Letter-spacing: Âm cho headings lớn, dương cho text nhỏ</li>
                      <li>• Word-spacing: Ít khi thay đổi, chỉ dùng khi cần thiết</li>
                      <li>• Contrast: Đảm bảo đủ độ tương phản cho accessibility</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.textSpacing} title="Text Spacing Properties" />
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center" id="tom-tat">
              🎨 Tóm tắt CSS Colors & Typography
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Color Values</h3>
                <p className="text-sm text-gray-600">Hex, RGB, HSL, Named</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Paintbrush className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Backgrounds</h3>
                <p className="text-sm text-gray-600">Colors, gradients, images</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Type className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fonts</h3>
                <p className="text-sm text-gray-600">Family, size, weight, style</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlignLeft className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Text Properties</h3>
                <p className="text-sm text-gray-600">Align, decoration, transform</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Text Spacing</h3>
                <p className="text-sm text-gray-600">Line, letter, word spacing</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 text-lg">
                Colors và Typography là nền tảng để tạo ra giao diện đẹp mắt và dễ sử dụng! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Ruler,
  Monitor,
  Type,
  ChevronDown,
  ChevronRight,
  Calculator,
  Smartphone,
} from 'lucide-react';
import CSSLayout from '../components/CSSLayout';
import { CSS_NAVIGATIONS, CSS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/cssData';

const navigation = CSS_NAVIGATIONS['units'];
const progress = getProgressForLesson('units');

export default function CSSUnitsPage() {
  const [expandedSections, setExpandedSections] = useState({
    absoluteRelativeUnits: true,
    viewportUnits: false,
    modernUnits: false,
  });

  type SectionKey = keyof typeof expandedSections;

  const toggleSection = (section: SectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const examples = {
    absoluteRelativeUnits: {
      css: `/* Absolute Units */
.pixels {
  width: 200px;
  height: 100px;
  font-size: 16px;
  padding: 20px;
  border: 2px solid #2196f3;
  background-color: #e3f2fd;
}

.points {
  width: 150pt;
  height: 75pt;
  font-size: 12pt;
  padding: 15pt;
  border: 1pt solid #9c27b0;
  background-color: #f3e5f5;
}

/* Relative Units */
.percentage {
  width: 75%;
  height: 50px;
  background-color: #e8f5e8;
  border: 2px solid #4caf50;
  padding: 10px;
}

.em-units {
  font-size: 20px;
  padding: 1em;
  border: 0.1em solid #ff9800;
  background-color: #fff3e0;
}

.em-child {
  font-size: 1.5em;
  padding: 0.5em;
  background-color: #ffe0b2;
  border: 0.05em solid #f57c00;
}

.rem-units {
  font-size: 1.2rem;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 0.1rem solid #e91e63;
  background-color: #fce4ec;
}`,
      html: `<!-- Absolute Units -->
<div class="pixels">Pixels (200px × 100px)</div>
<div class="points">Points (150pt × 75pt)</div>

<!-- Relative Units -->
<div style="width: 400px; background: #f5f5f5; padding: 20px;">
  Parent Container
  <div class="percentage">Percentage (75% of parent)</div>
</div>

<!-- Em Units -->
<div class="em-units">
  Parent (20px font-size, 1em padding)
  <div class="em-child">
    Child (1.5em = 30px, 0.5em padding)
  </div>
</div>

<!-- Rem Units -->
<div class="rem-units">Rem units (1.2rem font-size)</div>`,
      result: (
        <div className="space-y-4">
          {/* Absolute Units */}
          <div>
            <h4 className="font-semibold mb-3 text-blue-700">📏 Absolute Units</h4>
            <div className="space-y-3">
              <div
                style={{
                  width: '200px',
                  height: '100px',
                  fontSize: '16px',
                  padding: '20px',
                  border: '2px solid #2196f3',
                  backgroundColor: '#e3f2fd',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <strong>Pixels (200px × 100px)</strong>
              </div>
              <div
                style={{
                  width: '150pt',
                  height: '75pt',
                  fontSize: '12pt',
                  padding: '15pt',
                  border: '1pt solid #9c27b0',
                  backgroundColor: '#f3e5f5',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <strong>Points (150pt × 75pt)</strong>
              </div>
            </div>
          </div>

          {/* Relative Units */}
          <div>
            <h4 className="font-semibold mb-3 text-green-700">📊 Relative Units</h4>
            <div
              style={{
                width: '400px',
                background: '#f5f5f5',
                padding: '20px',
                borderRadius: '4px',
              }}
            >
              <div style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                Parent Container (400px)
              </div>
              <div
                style={{
                  width: '75%',
                  height: '50px',
                  backgroundColor: '#e8f5e8',
                  border: '2px solid #4caf50',
                  padding: '10px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <strong>Percentage (75% of parent)</strong>
              </div>
            </div>
          </div>

          {/* Em/Rem Units */}
          <div>
            <h4 className="font-semibold mb-3 text-orange-700">📝 Em vs Rem</h4>
            <div
              style={{
                fontSize: '20px',
                padding: '20px',
                border: '2px solid #ff9800',
                backgroundColor: '#fff3e0',
                borderRadius: '4px',
                marginBottom: '10px',
              }}
            >
              <div style={{ marginBottom: '10px' }}>
                <strong>Parent (20px font, 1em padding = 20px)</strong>
              </div>
              <div
                style={{
                  fontSize: '30px', // 1.5em
                  padding: '15px', // 0.5em of 30px
                  backgroundColor: '#ffe0b2',
                  border: '1.5px solid #f57c00',
                  borderRadius: '4px',
                }}
              >
                Child (1.5em = 30px, 0.5em padding)
              </div>
            </div>
            <div
              style={{
                fontSize: '1.2rem', // 19.2px
                padding: '1rem', // 16px
                border: '1.6px solid #e91e63', // 0.1rem
                backgroundColor: '#fce4ec',
                borderRadius: '4px',
              }}
            >
              <strong>Rem units (1.2rem font-size, consistent)</strong>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">📋 Units Comparison:</h4>
            <div className="text-blue-800 text-sm grid grid-cols-2 gap-2">
              <div>
                <strong>px:</strong> Fixed, predictable
              </div>
              <div>
                <strong>%:</strong> Relative to parent
              </div>
              <div>
                <strong>em:</strong> Relative to parent font (compounds)
              </div>
              <div>
                <strong>rem:</strong> Relative to root font (consistent)
              </div>
            </div>
          </div>
        </div>
      ),
    },
    viewportUnits: {
      css: `/* Viewport Units */
.viewport-width {
  width: 50vw;
  height: 80px;
  background-color: #e3f2fd;
  border: 2px solid #2196f3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.viewport-height {
  width: 200px;
  height: 25vh;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.viewport-min {
  width: 30vmin;
  height: 30vmin;
  background-color: #e8f5e8;
  border: 2px solid #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
}

.responsive-text {
  font-size: clamp(1rem, 4vw, 2rem);
  padding: 2vh 2vw;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  text-align: center;
}

.fullscreen {
  width: 100vw;
  height: 40vh;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}`,
      html: `<!-- Viewport Units -->
<div class="viewport-width">50vw (50% viewport width)</div>
<div class="viewport-height">25vh (25% viewport height)</div>
<div class="viewport-min">30vmin (square)</div>

<!-- Responsive Text -->
<div class="responsive-text">
  Responsive text (clamp(1rem, 4vw, 2rem))
</div>

<!-- Full Width -->
<div class="fullscreen">
  100vw × 40vh (Full width, 40% height)
</div>`,
      result: (
        <div className="space-y-4">
          {/* Viewport Width */}
          <div
            style={{
              width: '50vw',
              height: '80px',
              backgroundColor: '#e3f2fd',
              border: '2px solid #2196f3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
          >
            50vw (50% viewport width)
          </div>

          {/* Viewport Height */}
          <div
            style={{
              width: '200px',
              height: '20vh',
              backgroundColor: '#f3e5f5',
              border: '2px solid #9c27b0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            20vh (20% viewport height)
          </div>

          {/* Viewport Min */}
          <div
            style={{
              width: '25vmin',
              height: '25vmin',
              backgroundColor: '#e8f5e8',
              border: '2px solid #4caf50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            25vmin (25% smaller dimension)
          </div>

          {/* Responsive Text */}
          <div
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.8rem)',
              padding: '2vh 2vw',
              backgroundColor: '#fff3e0',
              border: '2px solid #ff9800',
              textAlign: 'center',
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
          >
            Responsive text (clamp(1rem, 3vw, 1.8rem))
          </div>

          {/* Full Width */}
          <div
            style={{
              width: '100%',
              height: '25vh',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: '4px',
            }}
          >
            100% × 25vh (Full width, 25% height)
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">📱 Viewport Units:</h4>
            <div className="text-purple-800 text-sm space-y-1">
              <div>
                <strong>vw:</strong> 1% of viewport width
              </div>
              <div>
                <strong>vh:</strong> 1% of viewport height
              </div>
              <div>
                <strong>vmin:</strong> 1% of smaller dimension
              </div>
              <div>
                <strong>vmax:</strong> 1% of larger dimension
              </div>
            </div>
          </div>
        </div>
      ),
    },
    modernUnits: {
      css: `/* Modern CSS Functions */
.calc-demo {
  width: calc(100% - 40px);
  height: calc(100px + 2vh);
  background-color: #e3f2fd;
  border: 2px solid #2196f3;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.min-max-demo {
  width: min(90%, 500px);
  height: max(100px, 15vh);
  background-color: #e8f5e8;
  border: 2px solid #4caf50;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clamp-demo {
  font-size: clamp(1rem, 4vw, 2rem);
  width: clamp(200px, 80%, 600px);
  padding: clamp(10px, 2vw, 30px);
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  text-align: center;
}

/* CSS Variables */
:root {
  --primary-color: #2196f3;
  --spacing: 1rem;
  --max-width: 600px;
}

.css-variables {
  background-color: var(--primary-color);
  color: white;
  padding: calc(var(--spacing) * 2);
  margin: var(--spacing) 0;
  max-width: var(--max-width);
  border-radius: var(--spacing);
  text-align: center;
}

/* Font-relative units */
.ch-demo {
  font-family: 'Courier New', monospace;
  width: 30ch;
  background-color: #f3e5f5;
  padding: 1ch;
  border: 0.5ch solid #9c27b0;
  font-size: 16px;
}

.ex-demo {
  font-size: 24px;
  padding: 1ex;
  background-color: #fce4ec;
  border: 0.5ex solid #e91e63;
}`,
      html: `<!-- CSS Functions -->
<div class="calc-demo">
  calc(100% - 40px) × calc(100px + 2vh)
</div>

<div class="min-max-demo">
  min(90%, 500px) × max(100px, 15vh)
</div>

<div class="clamp-demo">
  Clamp: font-size(1rem, 4vw, 2rem)
</div>

<!-- CSS Variables -->
<div class="css-variables">
  CSS Variables: var(--primary-color)
</div>

<!-- Font-relative -->
<div class="ch-demo">30 characters width (30ch)</div>
<div class="ex-demo">X-height padding (1ex)</div>`,
      result: (
        <div className="space-y-4">
          {/* Calc */}
          <div>
            <h4 className="font-semibold mb-3 text-blue-700">🧮 CSS Functions</h4>
            <div
              style={{
                width: 'calc(100% - 40px)',
                height: 'calc(80px + 1vh)',
                backgroundColor: '#e3f2fd',
                border: '2px solid #2196f3',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                marginBottom: '10px',
              }}
            >
              <strong>calc(100% - 40px) × calc(80px + 1vh)</strong>
            </div>

            <div
              style={{
                width: 'min(90%, 500px)',
                height: 'max(80px, 10vh)',
                backgroundColor: '#e8f5e8',
                border: '2px solid #4caf50',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                textAlign: 'center',
              }}
            >
              <strong>min(90%, 500px) × max(80px, 10vh)</strong>
            </div>
          </div>

          {/* Clamp */}
          <div>
            <h4 className="font-semibold mb-3 text-orange-700">🗜️ Clamp Function</h4>
            <div
              style={{
                fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                width: 'clamp(200px, 80%, 500px)',
                padding: 'clamp(10px, 2vw, 25px)',
                backgroundColor: '#fff3e0',
                border: '2px solid #ff9800',
                textAlign: 'center',
                borderRadius: '4px',
              }}
            >
              <strong>Clamp: font-size(1rem, 3vw, 1.5rem)</strong>
            </div>
          </div>

          {/* CSS Variables */}
          <div>
            <h4 className="font-semibold mb-3 text-purple-700">🎨 CSS Variables</h4>
            <div
              style={{
                backgroundColor: '#2196f3',
                color: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                textAlign: 'center',
              }}
            >
              <strong>CSS Variables: var(--primary-color)</strong>
            </div>
          </div>

          {/* Font-relative */}
          <div>
            <h4 className="font-semibold mb-3 text-pink-700">🔤 Font-relative Units</h4>
            <div
              style={{
                fontFamily: "'Courier New', monospace",
                width: '25ch',
                backgroundColor: '#f3e5f5',
                padding: '1ch',
                border: '0.5ch solid #9c27b0',
                fontSize: '14px',
                borderRadius: '4px',
                marginBottom: '10px',
              }}
            >
              <strong>25 characters width (25ch)</strong>
            </div>
            <div
              style={{
                fontSize: '20px',
                padding: '1ex',
                backgroundColor: '#fce4ec',
                border: '0.5ex solid #e91e63',
                borderRadius: '4px',
              }}
            >
              <strong>X-height padding (1ex)</strong>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">🚀 Modern CSS Features:</h4>
            <div className="text-gray-800 text-sm space-y-1">
              <div>
                <strong>calc():</strong> Mix different units in calculations
              </div>
              <div>
                <strong>clamp():</strong> Responsive values with min/max constraints
              </div>
              <div>
                <strong>CSS Variables:</strong> Reusable custom properties
              </div>
              <div>
                <strong>ch, ex:</strong> Typography-based sizing
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
      currentLesson="CSS Units"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 text-lg">
            <Ruler className="w-5 h-5 mr-2" />
            CSS Units
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900" id="css-units">
            CSS Units - Đơn vị đo trong CSS
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Tìm hiểu về các đơn vị đo trong CSS và cách sử dụng chúng hiệu quả cho responsive design
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Absolute & Relative Units */}
          <div className="space-y-4">
            <SectionHeader
              id="absoluteRelativeUnits"
              title="Absolute & Relative Units"
              icon={Ruler}
              isExpanded={expandedSections.absoluteRelativeUnits}
              onToggle={() => toggleSection('absoluteRelativeUnits')}
            />

            {expandedSections.absoluteRelativeUnits && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="absolute-relative-units"
                >
                  <Ruler className="w-6 h-6 text-indigo-600" />
                  Absolute & Relative Units
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    CSS units được chia thành hai loại chính: Absolute units (cố định) và Relative
                    units (tương đối).
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Absolute Units - Fixed sizes */
px    /* Pixels - most common */
pt    /* Points - 1pt = 1/72 inch */
cm    /* Centimeters */
mm    /* Millimeters */

/* Relative Units - Based on other values */
%     /* Percentage of parent */
em    /* Relative to parent font-size */
rem   /* Relative to root font-size */

/* Examples */
width: 300px;        /* Fixed 300 pixels */
width: 75%;          /* 75% of parent width */
font-size: 1.2em;    /* 1.2x parent font-size */
padding: 2rem;       /* 2x root font-size */`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">📏 Absolute Units</h4>
                      <ul className="text-blue-800 space-y-2">
                        <li>
                          <strong>px:</strong> Pixels - most common for screens
                        </li>
                        <li>
                          <strong>pt:</strong> Points - typography, print media
                        </li>
                        <li>
                          <strong>cm/mm:</strong> Physical measurements
                        </li>
                        <li>Fixed size, không scale với user settings</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">📊 Relative Units</h4>
                      <ul className="text-green-800 space-y-2">
                        <li>
                          <strong>%:</strong> Percentage of parent element
                        </li>
                        <li>
                          <strong>em:</strong> Relative to parent font-size
                        </li>
                        <li>
                          <strong>rem:</strong> Relative to root font-size
                        </li>
                        <li>Responsive, scales with context</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer
                  example={examples.absoluteRelativeUnits}
                  title="Absolute & Relative Units"
                />
              </div>
            )}
          </div>

          {/* Viewport Units */}
          <div className="space-y-4">
            <SectionHeader
              id="viewportUnits"
              title="Viewport Units"
              icon={Monitor}
              isExpanded={expandedSections.viewportUnits}
              onToggle={() => toggleSection('viewportUnits')}
            />

            {expandedSections.viewportUnits && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="viewport-units"
                >
                  <Monitor className="w-6 h-6 text-blue-600" />
                  Viewport Units
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Viewport units dựa trên kích thước viewport (visible area của browser), rất hữu
                    ích cho responsive design.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* Viewport Units */
vw    /* Viewport Width - 1vw = 1% viewport width */
vh    /* Viewport Height - 1vh = 1% viewport height */
vmin  /* Viewport Minimum - 1% of smaller dimension */
vmax  /* Viewport Maximum - 1% of larger dimension */

/* Examples */
width: 100vw;        /* Full viewport width */
height: 100vh;       /* Full viewport height */
font-size: 4vw;      /* Responsive font size */
width: 50vmin;       /* Square element */

/* Hero section */
.hero {
  width: 100vw;
  height: 100vh;
  background: url('hero.jpg') center/cover;
}`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-cyan-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 mb-3">📱 Basic Viewport</h4>
                      <ul className="text-cyan-800 space-y-2">
                        <li>
                          <strong>vw:</strong> 1% of viewport width
                        </li>
                        <li>
                          <strong>vh:</strong> 1% of viewport height
                        </li>
                        <li>Perfect for full-screen elements</li>
                        <li>Responsive to window resizing</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">📐 Min/Max Viewport</h4>
                      <ul className="text-purple-800 space-y-2">
                        <li>
                          <strong>vmin:</strong> 1% of smaller dimension
                        </li>
                        <li>
                          <strong>vmax:</strong> 1% of larger dimension
                        </li>
                        <li>Useful for maintaining aspect ratios</li>
                        <li>Great for square elements</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">
                      ⚠️ Viewport Units Gotchas:
                    </h4>
                    <ul className="text-amber-700 space-y-1">
                      <li>• Mobile: vh thay đổi khi address bar ẩn/hiện</li>
                      <li>• 100vw có thể gây horizontal scroll nếu có scrollbar</li>
                      <li>• Cẩn thận với vw cho font-size (có thể quá nhỏ/lớn)</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.viewportUnits} title="Viewport Units Examples" />
              </div>
            )}
          </div>

          {/* Modern Units */}
          <div className="space-y-4">
            <SectionHeader
              id="modernUnits"
              title="Modern CSS Units & Functions"
              icon={Smartphone}
              isExpanded={expandedSections.modernUnits}
              onToggle={() => toggleSection('modernUnits')}
            />

            {expandedSections.modernUnits && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2
                  className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
                  id="modern-units"
                >
                  <Smartphone className="w-6 h-6 text-purple-600" />
                  Modern CSS Units & Functions
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Modern CSS cung cấp các functions và units mới giúp tạo responsive designs phức
                    tạp và linh hoạt hơn.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 my-6">
                    <code className="text-green-400 text-base">
                      {`/* CSS Functions */
calc()    /* Mathematical calculations */
min()     /* Minimum value */
max()     /* Maximum value */
clamp()   /* Constrained between min and max */

/* Examples */
width: calc(100% - 40px);
font-size: clamp(1rem, 4vw, 2rem);
height: max(200px, 50vh);
padding: min(5%, 2rem);

/* CSS Custom Properties */
:root {
  --spacing: 1rem;
  --max-width: 1200px;
}
.container {
  width: min(100%, var(--max-width));
  padding: var(--spacing);
}

/* Font-relative units */
ch    /* Width of character '0' */
ex    /* Height of lowercase 'x' */`}
                    </code>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-emerald-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 mb-3">🧮 CSS Functions</h4>
                      <ul className="text-emerald-800 space-y-2">
                        <li>
                          <strong>calc():</strong> Mix different units
                        </li>
                        <li>
                          <strong>clamp():</strong> Responsive constraints
                        </li>
                        <li>
                          <strong>min()/max():</strong> Choose optimal value
                        </li>
                      </ul>
                    </div>

                    <div className="bg-violet-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-violet-900 mb-3">🎨 CSS Variables</h4>
                      <ul className="text-violet-800 space-y-2">
                        <li>Custom properties với --syntax</li>
                        <li>Reusable values</li>
                        <li>JavaScript integration</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-pink-900 mb-3">🔤 Font-relative</h4>
                      <ul className="text-pink-800 space-y-2">
                        <li>
                          <strong>ch:</strong> Character width
                        </li>
                        <li>
                          <strong>ex:</strong> X-height
                        </li>
                        <li>Typography-based sizing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer
                  example={examples.modernUnits}
                  title="Modern CSS Units & Functions"
                />
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center" id="tom-tat">
              📏 Tóm tắt CSS Units
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Ruler className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Absolute</h3>
                <p className="text-sm text-gray-600">px, pt, cm, mm</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calculator className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Relative</h3>
                <p className="text-sm text-gray-600">%, em, rem</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Viewport</h3>
                <p className="text-sm text-gray-600">vw, vh, vmin, vmax</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Type className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Modern</h3>
                <p className="text-sm text-gray-600">calc(), clamp(), ch, ex</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 text-lg">
                Hiểu rõ CSS Units giúp bạn tạo ra responsive designs linh hoạt và maintainable! 🎯
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

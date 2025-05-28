'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Smartphone,
  Tablet,
  Monitor,
  Code,
  Image,
  Settings,
  Zap,
  ChevronDown,
  ChevronRight,
  Eye,
} from 'lucide-react';
import CSSLayout from '../components/CSSLayout';
import { CSS_NAVIGATIONS, CSS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/cssData';

const navigation = CSS_NAVIGATIONS['responsive'];
const progress = getProgressForLesson('responsive');

export default function CSSResponsivePage() {
  const [expandedSections, setExpandedSections] = useState({
    breakpoints: true,
    mediaQuerySyntax: false,
    viewportMeta: false,
    responsiveImages: false,
    mobileFirst: false,
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
    breakpoints: {
      css: `/* Mobile First Breakpoints */
/* Base styles - Mobile (0px+) */
.container {
  padding: 16px;
  font-size: 14px;
}

/* Small tablets (576px+) */
@media (min-width: 576px) {
  .container {
    padding: 20px;
    font-size: 16px;
  }
}

/* Tablets (768px+) */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    max-width: 750px;
    margin: 0 auto;
  }
}

/* Desktop (992px+) */
@media (min-width: 992px) {
  .container {
    max-width: 970px;
    padding: 32px;
  }
}

/* Large Desktop (1200px+) */
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}`,
      result: (
        <div className="space-y-4">
          <div className="bg-green-100 p-4 rounded border border-green-300">
            <div className="flex items-center gap-2 mb-2">
              <Smartphone className="w-4 h-4 text-green-700" />
              <span className="font-semibold text-green-700">Mobile (0px+)</span>
            </div>
            <div className="text-xs bg-green-50 p-2 rounded">padding: 16px; font-size: 14px;</div>
          </div>

          <div className="bg-blue-100 p-4 rounded border border-blue-300">
            <div className="flex items-center gap-2 mb-2">
              <Tablet className="w-4 h-4 text-blue-700" />
              <span className="font-semibold text-blue-700">Tablet (768px+)</span>
            </div>
            <div className="text-xs bg-blue-50 p-2 rounded">max-width: 750px; padding: 24px;</div>
          </div>

          <div className="bg-purple-100 p-4 rounded border border-purple-300">
            <div className="flex items-center gap-2 mb-2">
              <Monitor className="w-4 h-4 text-purple-700" />
              <span className="font-semibold text-purple-700">Desktop (992px+)</span>
            </div>
            <div className="text-xs bg-purple-50 p-2 rounded">max-width: 970px; padding: 32px;</div>
          </div>
        </div>
      ),
    },
    mediaQuerySyntax: {
      css: `/* Basic syntax */
@media (min-width: 768px) {
  .element { font-size: 18px; }
}

/* Logic operators */
@media (min-width: 768px) and (max-width: 1024px) {
  .tablet-only { display: block; }
}

@media (orientation: landscape) {
  .landscape { width: 100%; }
}

/* Multiple conditions */
@media screen and (min-width: 768px) and (orientation: portrait) {
  .complex { padding: 20px; }
}

/* Not operator */
@media not screen and (max-width: 767px) {
  .not-mobile { display: flex; }
}`,
      result: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded border">
            <h4 className="font-semibold text-blue-900 mb-2">Media Features:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-blue-800">
              <div>• min-width / max-width</div>
              <div>• min-height / max-height</div>
              <div>• orientation: portrait/landscape</div>
              <div>• aspect-ratio: 16/9</div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded border">
            <h4 className="font-semibold text-green-900 mb-2">Logic Operators:</h4>
            <div className="text-sm text-green-800 space-y-1">
              <div>• <strong>and</strong> - Tất cả điều kiện phải đúng</div>
              <div>• <strong>or (,)</strong> - Một trong các điều kiện đúng</div>
              <div>• <strong>not</strong> - Phủ định điều kiện</div>
            </div>
          </div>
        </div>
      ),
    },
    viewportMeta: {
      css: `/* Viewport Meta Tag - Bắt buộc! */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* CSS Units for Responsive */
.responsive-text {
  font-size: 4vw;        /* 4% viewport width */
  line-height: 1.5;
}

.responsive-container {
  width: 100vw;          /* 100% viewport width */
  min-height: 100vh;     /* 100% viewport height */
  padding: 2rem;
}

/* Clamp for fluid typography */
.fluid-text {
  font-size: clamp(1rem, 2.5vw, 2rem);
  /* Min: 1rem, Preferred: 2.5vw, Max: 2rem */
}`,
      result: (
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
            <h4 className="font-semibold text-red-900 mb-2">⚠️ Viewport Meta Tag</h4>
            <p className="text-red-800 text-sm">Không có tag này, mobile sẽ hiển thị như desktop thu nhỏ!</p>
            <code className="text-xs bg-red-100 p-2 rounded block mt-2">
              &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            </code>
          </div>

          <div className="bg-blue-50 p-4 rounded border">
            <h4 className="font-semibold text-blue-900 mb-2">Viewport Units:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-blue-800">
              <div>• <strong>vw:</strong> Viewport width (1vw = 1%)</div>
              <div>• <strong>vh:</strong> Viewport height</div>
              <div>• <strong>vmin:</strong> Nhỏ hơn trong vw/vh</div>
              <div>• <strong>vmax:</strong> Lớn hơn trong vw/vh</div>
            </div>
          </div>
        </div>
      ),
    },
    responsiveImages: {
      css: `/* Basic responsive image */
.responsive-img {
  max-width: 100%;
  height: auto;
}

/* Art direction with picture */
<picture>
  <source media="(min-width: 768px)" srcset="large.jpg">
  <source media="(min-width: 480px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive image">
</picture>

/* Responsive background images */
.hero {
  background-image: url('mobile.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero {
    background-image: url('desktop.jpg');
  }
}`,
      result: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded border">
            <h4 className="font-semibold text-green-900 mb-2">📱 Mobile Image</h4>
            <div className="w-full h-24 bg-gradient-to-r from-green-300 to-green-400 rounded flex items-center justify-center text-white font-semibold">
              Small Image (&lt; 480px)
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded border hidden md:block">
            <h4 className="font-semibold text-blue-900 mb-2">💻 Desktop Image</h4>
            <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded flex items-center justify-center text-white font-semibold">
              Large Image (≥ 768px)
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border">
            <h4 className="font-semibold text-yellow-900 mb-2">💡 Best Practices:</h4>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• Luôn dùng max-width: 100%</li>
              <li>• Tối ưu images cho từng device</li>
              <li>• Dùng picture element cho art direction</li>
            </ul>
          </div>
        </div>
      ),
    },
    mobileFirst: {
      css: `/* ❌ Desktop First (Không khuyến khích) */
.desktop-first {
  width: 100%;
  padding: 2rem;
  font-size: 18px;
}

@media (max-width: 768px) {
  .desktop-first {
    padding: 1rem;
    font-size: 16px;
  }
}

/* ✅ Mobile First (Khuyến khích) */
.mobile-first {
  width: 100%;
  padding: 1rem;
  font-size: 16px;
}

@media (min-width: 768px) {
  .mobile-first {
    padding: 2rem;
    font-size: 18px;
  }
}`,
      result: (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded p-4">
            <h4 className="font-semibold text-red-900 mb-2">❌ Desktop First</h4>
            <ul className="text-red-800 text-sm space-y-1">
              <li>• Bắt đầu từ desktop, override cho mobile</li>
              <li>• Nhiều code hơn, performance kém</li>
              <li>• Khó maintain và debug</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4">
            <h4 className="font-semibold text-green-900 mb-2">✅ Mobile First</h4>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Bắt đầu từ mobile, enhance cho desktop</li>
              <li>• Ít code hơn, performance tốt</li>
              <li>• Dễ maintain và scale up</li>
              <li>• Progressive enhancement</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <h4 className="font-semibold text-blue-900 mb-2">📊 Tại sao Mobile First?</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• 60%+ traffic từ mobile</li>
              <li>• Google mobile-first indexing</li>
              <li>• Performance trên mobile quan trọng hơn</li>
            </ul>
          </div>
        </div>
      ),
    },
    practicalExamples: {
      css: `/* 1. Responsive Navigation */
.navbar {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.nav-menu {
  display: none;
}

.menu-toggle {
  display: block;
}

@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav-menu {
    display: flex;
    gap: 2rem;
  }

  .menu-toggle {
    display: none;
  }
}

/* 2. Responsive Grid */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 576px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 992px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}`,
      result: (
        <div className="space-y-6">
          {/* Mobile Navigation */}
          <div className="bg-gray-100 p-4 rounded border">
            <h4 className="font-semibold mb-3">📱 Mobile Navigation</h4>
            <div className="flex flex-col space-y-2 md:hidden">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Logo</span>
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">☰</button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between items-center">
              <span className="font-semibold">Logo</span>
              <nav className="flex gap-4">
                <a href="#" className="text-blue-600 hover:underline">Home</a>
                <a href="#" className="text-blue-600 hover:underline">About</a>
                <a href="#" className="text-blue-600 hover:underline">Contact</a>
              </nav>
            </div>
          </div>

          {/* Responsive Grid */}
          <div className="bg-gray-100 p-4 rounded border">
            <h4 className="font-semibold mb-3">📊 Responsive Grid</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-200 p-4 rounded text-center">Card 1</div>
              <div className="bg-green-200 p-4 rounded text-center">Card 2</div>
              <div className="bg-purple-200 p-4 rounded text-center">Card 3</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
            </p>
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
              {tab === 'result' && 'Demo'}
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

  const SectionHeader = ({ id, title, icon: Icon, isExpanded, onToggle }: {
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
      currentLesson="CSS Responsive Design"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 text-lg">
            <Smartphone className="w-5 h-5 mr-2" />
            Responsive Design
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900">📱 CSS Media Queries & Responsive Design</h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Học cách tạo website responsive với Media Queries - từ mobile đến desktop, tất cả đều hoàn hảo!
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg max-w-4xl mx-auto">
            <p className="text-blue-800">
              <strong>💡 Responsive Design</strong> giúp website hiển thị đẹp trên mọi thiết bị, từ điện thoại đến máy tính.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Breakpoints */}
          <div className="space-y-4">
            <SectionHeader
              id="breakpoints"
              title="Breakpoints & Mobile-first Approach"
              icon={Monitor}
              isExpanded={expandedSections.breakpoints}
              onToggle={() => toggleSection('breakpoints')}
            />

            {expandedSections.breakpoints && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">📏 Standard Breakpoints:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-green-800 text-sm">
                    <div>• <strong>Mobile:</strong> 0px - 575px</div>
                    <div>• <strong>Small tablet:</strong> 576px+</div>
                    <div>• <strong>Tablet:</strong> 768px+</div>
                    <div>• <strong>Desktop:</strong> 992px+</div>
                    <div>• <strong>Large desktop:</strong> 1200px+</div>
                    <div>• <strong>Extra large:</strong> 1400px+</div>
                  </div>
                </div>

                <ExampleViewer example={examples.breakpoints} title="Mobile-first Breakpoints" />
              </div>
            )}
          </div>

          {/* Media Query Syntax */}
          <div className="space-y-4">
            <SectionHeader
              id="mediaQuerySyntax"
              title="Media Query Syntax & Logic Operators"
              icon={Code}
              isExpanded={expandedSections.mediaQuerySyntax}
              onToggle={() => toggleSection('mediaQuerySyntax')}
            />

            {expandedSections.mediaQuerySyntax && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">🔧 Media Query Syntax:</h4>
                  <code className="text-blue-800">@media [media-type] and ([media-feature]) { /* styles */ }</code>
                </div>

                <ExampleViewer example={examples.mediaQuerySyntax} title="Media Query Syntax" />
              </div>
            )}
          </div>

          {/* Viewport Meta */}
          <div className="space-y-4">
            <SectionHeader
              id="viewportMeta"
              title="Viewport Meta Tag"
              icon={Settings}
              isExpanded={expandedSections.viewportMeta}
              onToggle={() => toggleSection('viewportMeta')}
            />

            {expandedSections.viewportMeta && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <ExampleViewer example={examples.viewportMeta} title="Viewport Meta Tag" />
              </div>
            )}
          </div>

          {/* Responsive Images */}
          <div className="space-y-4">
            <SectionHeader
              id="responsiveImages"
              title="Responsive Images (max-width: 100%)"
              icon={Image}
              isExpanded={expandedSections.responsiveImages}
              onToggle={() => toggleSection('responsiveImages')}
            />

            {expandedSections.responsiveImages && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <ExampleViewer example={examples.responsiveImages} title="Responsive Images" />
              </div>
            )}
          </div>

          {/* Mobile First */}
          <div className="space-y-4">
            <SectionHeader
              id="mobileFirst"
              title="Mobile-first vs Desktop-first"
              icon={Smartphone}
              isExpanded={expandedSections.mobileFirst}
              onToggle={() => toggleSection('mobileFirst')}
            />

            {expandedSections.mobileFirst && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <ExampleViewer example={examples.mobileFirst} title="Mobile-first Approach" />
              </div>
            )}
          </div>

          {/* Practical Examples */}
          <div className="space-y-4">
            <SectionHeader
              id="practicalExamples"
              title="Thực hành: Chuyển đổi Layout Desktop sang Mobile"
              icon={Zap}
              isExpanded={expandedSections.practicalExamples}
              onToggle={() => toggleSection('practicalExamples')}
            />

            {expandedSections.practicalExamples && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <ExampleViewer example={examples.practicalExamples} title="Responsive Examples" />
              </div>
            )}
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎯 Responsive Best Practices</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">✅ Do's</h3>
                <ul className="text-green-800 space-y-1 text-sm">
                  <li>• Luôn dùng mobile-first approach</li>
                  <li>• Test trên thiết bị thật</li>
                  <li>• Tối ưu images cho từng breakpoint</li>
                  <li>• Dùng relative units (rem, em, %)</li>
                  <li>• Progressive enhancement</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-3">❌ Don'ts</h3>
                <ul className="text-red-800 space-y-1 text-sm">
                  <li>• Không quên viewport meta tag</li>
                  <li>• Tránh quá nhiều breakpoints</li>
                  <li>• Không hardcode pixel values</li>
                  <li>• Tránh desktop-first mindset</li>
                  <li>• Không test chỉ trên browser</li>
                </ul>
              </div>
            </div>

            {/* Cheat Sheet */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-4 text-center">📋 Media Queries Cheat Sheet</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Common Breakpoints</h4>
                  <div className="space-y-1">
                    <div><code className="text-yellow-300">@media (min-width: 576px)</code> - Small</div>
                    <div><code className="text-yellow-300">@media (min-width: 768px)</code> - Medium</div>
                    <div><code className="text-yellow-300">@media (min-width: 992px)</code> - Large</div>
                    <div><code className="text-yellow-300">@media (min-width: 1200px)</code> - XL</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Essential Patterns</h4>
                  <div className="space-y-1">
                    <div><code className="text-yellow-300">max-width: 100%</code> - Responsive images</div>
                    <div><code className="text-yellow-300">clamp(1rem, 4vw, 2rem)</code> - Fluid typography</div>
                    <div><code className="text-yellow-300">grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))</code></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-lg text-gray-700">
                Media Queries là chìa khóa cho responsive design hoàn hảo! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

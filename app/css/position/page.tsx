'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Move, Layers, Pin, ChevronDown, ChevronRight, Target, MousePointer } from 'lucide-react';
import CSSLayout from '../components/CSSLayout';
import { CSS_NAVIGATIONS, CSS_TABLE_OF_CONTENTS, getProgressForLesson } from '../constants/cssData';

const navigation = CSS_NAVIGATIONS['position'];
const progress = getProgressForLesson('position');

export default function CSSPositionPage() {
  const [expandedSections, setExpandedSections] = useState({
    staticPosition: true,
    relativePosition: false,
    absolutePosition: false,
    fixedPosition: false,
    stickyPosition: false,
    zIndexStacking: false,
  });

  type SectionKey = keyof typeof expandedSections;

  const toggleSection = (section: SectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const examples = {
    staticPosition: {
      css: `/* Static - Vị trí mặc định */
.static-box {
  position: static; /* Mặc định */
  width: 120px;
  height: 50px;
  background: #14b8a6;
  margin: 10px 0;

  /* Các thuộc tính này KHÔNG hoạt động với static */
  /* top: 20px;     ❌ Không có tác dụng */
  /* left: 30px;    ❌ Không có tác dụng */
  /* z-index: 999;  ❌ Không có tác dụng */
}`,
      html: `<div class="container">
  <div class="static-box">Box 1</div>
  <div class="static-box">Box 2</div>
  <div class="static-box">Box 3</div>
</div>`,
      result: (
        <div className="p-6 rounded-lg bg-teal-100 border-2 border-dashed border-teal-300">
          <div className="w-28 h-12 bg-teal-500 text-white flex items-center justify-center rounded mb-2 font-semibold">
            Box 1
          </div>
          <div className="w-28 h-12 bg-teal-500 text-white flex items-center justify-center rounded mb-2 font-semibold">
            Box 2
          </div>
          <div className="w-28 h-12 bg-teal-500 text-white flex items-center justify-center rounded font-semibold">
            Box 3
          </div>
        </div>
      ),
    },
    relativePosition: {
      css: `.relative-box {
  position: relative;
  width: 120px;
  height: 50px;
  background: #f97316;
  margin: 10px 0;
}

.moved {
  top: 20px;    /* Di chuyển xuống 20px */
  left: 30px;   /* Di chuyển phải 30px */

  /* Lưu ý: Vị trí ban đầu vẫn được "giữ chỗ" */
  /* Các element khác không lấp vào chỗ trống */
}`,
      html: `<div class="container">
  <div class="relative-box">Box bình thường</div>
  <div class="relative-box moved">Box đã di chuyển</div>
</div>`,
      result: (
        <div className="p-6 rounded-lg bg-orange-100 border-2 border-dashed border-orange-300">
          <div className="w-28 h-12 bg-orange-500 text-white flex items-center justify-center rounded mb-2 font-semibold">
            Box bình thường
          </div>
          <div
            className="w-28 h-12 bg-orange-500 text-white flex items-center justify-center rounded mb-2 font-semibold relative"
            style={{ top: '20px', left: '30px' }}
          >
            Box đã di chuyển
          </div>
          <div className="w-28 h-12 bg-gray-400 text-white flex items-center justify-center rounded font-semibold text-xs">
            Static (không bị ảnh hưởng)
          </div>
        </div>
      ),
    },
    absolutePosition: {
      css: `.parent {
  position: relative; /* Tạo positioning context */
  height: 250px;
}

.absolute-box {
  position: absolute;
  width: 100px;
  height: 40px;
  background: #22c55e;
}

.top-left     { top: 10px; left: 10px; }
.top-right    { top: 10px; right: 10px; }
.bottom-center {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}`,
      html: `<div class="parent">
  <div class="absolute-box top-left">Top Left</div>
  <div class="absolute-box top-right">Top Right</div>
  <div class="absolute-box bottom-center">Bottom Center</div>
  <p>Text này không bị đẩy bởi absolute boxes</p>
</div>`,
      result: (
        <div className="relative p-6 rounded-lg bg-green-100 border-2 border-dashed border-green-300 h-60">
          <div
            className="absolute w-20 h-8 bg-green-500 text-white flex items-center justify-center rounded font-semibold text-xs"
            style={{ top: '10px', left: '10px' }}
          >
            Top Left
          </div>
          <div
            className="absolute w-20 h-8 bg-green-500 text-white flex items-center justify-center rounded font-semibold text-xs"
            style={{ top: '10px', right: '10px' }}
          >
            Top Right
          </div>
          <div
            className="absolute w-20 h-8 bg-green-500 text-white flex items-center justify-center rounded font-semibold text-xs"
            style={{ bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}
          >
            Bottom Center
          </div>
          <p className="mt-20 text-gray-700">Text này không bị đẩy bởi absolute boxes</p>
        </div>
      ),
    },
    fixedPosition: {
      css: `.fixed-box {
  position: fixed;
  top: 100px;      /* Cách top viewport 100px */
  right: 50px;     /* Cách right viewport 50px */
  width: 80px;
  height: 60px;
  background: #3b82f6;
  z-index: 1000;   /* Ở trên cùng */

  /* Thường thêm shadow cho đẹp */
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}`,
      html: `<div class="fixed-box">Fixed</div>

<!-- Box này sẽ luôn hiển thị ở góc màn hình -->`,
      result: (
        <div className="p-6 rounded-lg bg-blue-100 border-2 border-dashed border-blue-300 h-36 flex items-center justify-center text-lg text-gray-700">
          <div>
            <p>Nhìn góc phải màn hình! →</p>
            <p className="text-sm mt-2">Box màu xanh sẽ luôn ở đó khi cuộn trang</p>
          </div>
        </div>
      ),
    },
    stickyPosition: {
      css: `.scrollable-container {
  height: 300px;
  overflow-y: auto;
}

.sticky-header {
  position: sticky;
  top: 0;
  background: #10b981;
  color: white;
  padding: 15px;
  z-index: 10;
}

/* Sticky hoạt động như thế nào:
   1. Ban đầu: Hoạt động như relative
   2. Khi scroll đến ngưỡng: Chuyển thành fixed
   3. Khi scroll khỏi container: Trở lại relative
*/`,
      html: `<div class="scrollable-container">
  <div class="sticky-header">📌 Sticky Header</div>
  <div class="content">
    <!-- Nội dung dài để cuộn -->
  </div>
</div>`,
      result: (
        <div className="rounded-lg bg-emerald-100 border-2 border-dashed border-emerald-300 h-60 overflow-y-auto">
          <div className="sticky top-0 bg-emerald-500 text-white p-4 text-center font-semibold z-10">
            📌 Sticky Header - Cuộn để thấy hiệu ứng!
          </div>
          <div
            className="p-4 bg-gradient-to-b from-emerald-100 to-emerald-200 text-gray-800"
            style={{ height: '400px' }}
          >
            <h3 className="font-semibold mb-2">Nội dung dài để có thể cuộn</h3>
            <p className="mb-4">Header ở trên sẽ "dính" khi bạn cuộn xuống.</p>
            <p className="font-semibold mb-2">Sticky hoạt động như thế nào:</p>
            <p className="mb-1">1. Ban đầu: Hoạt động như relative</p>
            <p className="mb-1">2. Khi scroll đến ngưỡng: Chuyển thành fixed</p>
            <p className="mb-4">3. Khi scroll khỏi container: Trở lại relative</p>
            <p className="mb-2">Rất hữu ích cho:</p>
            <p className="mb-1">• Navigation headers</p>
            <p className="mb-1">• Table headers</p>
            <p className="mb-1">• Sidebars</p>
            <p>• Call-to-action buttons</p>
          </div>
        </div>
      ),
    },
    zIndexStacking: {
      css: `.z-box {
  position: absolute; /* Bắt buộc có position */
  width: 80px;
  height: 80px;
}

.box-1 {
  background: #f472b6;
  top: 20px; left: 20px;
  z-index: 1; /* Thấp nhất */
}

.box-2 {
  background: #ec4899;
  top: 40px; left: 60px;
  z-index: 2; /* Ở giữa */
}

.box-3 {
  background: #db2777;
  top: 60px; left: 100px;
  z-index: 3; /* Cao nhất = ở trên cùng */
}`,
      html: `<div class="container">
  <div class="z-box box-1">Z=1</div>
  <div class="z-box box-2">Z=2</div>
  <div class="z-box box-3">Z=3</div>
</div>`,
      result: (
        <div className="relative p-6 rounded-lg bg-pink-100 border-2 border-dashed border-pink-300 h-48">
          <div
            className="absolute w-16 h-16 bg-pink-300 flex items-center justify-center rounded-lg font-semibold text-white cursor-pointer"
            style={{ top: '20px', left: '20px', zIndex: 1 }}
          >
            Z=1
          </div>
          <div
            className="absolute w-16 h-16 bg-pink-500 flex items-center justify-center rounded-lg font-semibold text-white cursor-pointer"
            style={{ top: '40px', left: '60px', zIndex: 2 }}
          >
            Z=2
          </div>
          <div
            className="absolute w-16 h-16 bg-pink-700 flex items-center justify-center rounded-lg font-semibold text-white cursor-pointer"
            style={{ top: '60px', left: '100px', zIndex: 3 }}
          >
            Z=3
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
      currentLesson="CSS Positioning"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      {/* Fixed Demo Box */}
      <div className="fixed top-24 right-12 w-20 h-16 bg-blue-500 text-white flex items-center justify-center rounded-lg font-semibold z-50 shadow-lg animate-pulse">
        Fixed
      </div>

      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 text-lg">
            <Target className="w-5 h-5 mr-2" />
            CSS Positioning
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900" id="css-positioning">
            🎯 CSS Positioning
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Học cách kiểm soát vị trí các element trên trang web với CSS positioning properties
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Static Position */}
          <div className="space-y-4">
            <SectionHeader
              id="staticPosition"
              title="Static Position - Vị trí mặc định"
              icon={Move}
              isExpanded={expandedSections.staticPosition}
              onToggle={() => toggleSection('staticPosition')}
            />

            {expandedSections.staticPosition && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6" id="static-position">
                  <Move className="w-6 h-6 text-teal-600" />
                  Static Position - Vị trí mặc định
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Static là giá trị mặc định của thuộc tính position. Elements với position static sẽ theo luồng bình thường của tài liệu.
                  </p>

                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-teal-900 mb-3">📋 Đặc điểm Static Position:</h4>
                    <ul className="text-teal-800 space-y-2">
                      <li>• Vị trí mặc định của tất cả elements</li>
                      <li>• Theo luồng bình thường của trang</li>
                      <li>• Không thể dùng top, left, right, bottom</li>
                      <li>• Không thể đặt z-index</li>
                      <li>• Không tạo positioning context</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.staticPosition} title="Static Position Example" />
              </div>
            )}
          </div>

          {/* Relative Position */}
          <div className="space-y-4">
            <SectionHeader
              id="relativePosition"
              title="Relative Position - Vị trí tương đối"
              icon={MousePointer}
              isExpanded={expandedSections.relativePosition}
              onToggle={() => toggleSection('relativePosition')}
            />

            {expandedSections.relativePosition && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6" id="relative-position">
                  <MousePointer className="w-6 h-6 text-orange-600" />
                  Relative Position - Vị trí tương đối
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Relative position cho phép di chuyển element từ vị trí ban đầu của nó, nhưng vẫn giữ chỗ trong layout.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-3">✅ Ưu điểm:</h4>
                      <ul className="text-orange-800 space-y-2">
                        <li>• Di chuyển từ vị trí ban đầu</li>
                        <li>• Vẫn giữ chỗ trong layout</li>
                        <li>• Có thể dùng top, left, right, bottom</li>
                        <li>• Tạo positioning context cho children</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-amber-900 mb-3">⚠️ Lưu ý:</h4>
                      <ul className="text-amber-800 space-y-2">
                        <li>• Vị trí ban đầu vẫn được "giữ chỗ"</li>
                        <li>• Có thể chồng lên các element khác</li>
                        <li>• Không ảnh hưởng đến layout của siblings</li>
                        <li>• Thường dùng làm container cho absolute</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.relativePosition} title="Relative Position Example" />
              </div>
            )}
          </div>

          {/* Absolute Position */}
          <div className="space-y-4">
            <SectionHeader
              id="absolutePosition"
              title="Absolute Position - Vị trí tuyệt đối"
              icon={Target}
              isExpanded={expandedSections.absolutePosition}
              onToggle={() => toggleSection('absolutePosition')}
            />

            {expandedSections.absolutePosition && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6" id="absolute-position">
                  <Target className="w-6 h-6 text-green-600" />
                  Absolute Position - Vị trí tuyệt đối
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Absolute position loại bỏ element khỏi luồng tài liệu và định vị nó so với positioned parent gần nhất.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-green-800 mb-2">💡 Positioning Context:</h4>
                    <p className="text-green-700">
                      Element absolute sẽ tìm parent có position khác static (relative, absolute, fixed, sticky).
                      Nếu không tìm thấy, nó sẽ định vị so với viewport.
                    </p>
                  </div>
                </div>

                <ExampleViewer example={examples.absolutePosition} title="Absolute Position Example" />
              </div>
            )}
          </div>

          {/* Fixed Position */}
          <div className="space-y-4">
            <SectionHeader
              id="fixedPosition"
              title="Fixed Position - Vị trí cố định"
              icon={Pin}
              isExpanded={expandedSections.fixedPosition}
              onToggle={() => toggleSection('fixedPosition')}
            />

            {expandedSections.fixedPosition && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6" id="fixed-position">
                  <Pin className="w-6 h-6 text-blue-600" />
                  Fixed Position - Vị trí cố định
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Fixed position cố định element so với viewport, không di chuyển khi scroll trang.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">🎯 Ứng dụng thực tế:</h4>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Header/Navigation cố định</li>
                      <li>• Modal/Popup overlays</li>
                      <li>• Floating action buttons</li>
                      <li>• Cookie notices</li>
                      <li>• Back to top buttons</li>
                    </ul>
                  </div>
                </div>

                <ExampleViewer example={examples.fixedPosition} title="Fixed Position Example" />
              </div>
            )}
          </div>

          {/* Sticky Position */}
          <div className="space-y-4">
            <SectionHeader
              id="stickyPosition"
              title="Sticky Position - Vị trí dính"
              icon={Layers}
              isExpanded={expandedSections.stickyPosition}
              onToggle={() => toggleSection('stickyPosition')}
            />

            {expandedSections.stickyPosition && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6" id="sticky-position">
                  <Layers className="w-6 h-6 text-emerald-600" />
                  Sticky Position - Vị trí dính
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Sticky position kết hợp relative và fixed - element "dính" khi đạt ngưỡng chỉ định.
                  </p>

                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-3">🔄 Cách hoạt động:</h4>
                    <ol className="text-emerald-800 space-y-2">
                      <li>1. <strong>Ban đầu:</strong> Hoạt động như relative position</li>
                      <li>2. <strong>Khi scroll đến ngưỡng:</strong> Chuyển thành fixed position</li>
                      <li>3. <strong>Khi scroll khỏi container:</strong> Trở lại relative position</li>
                    </ol>
                  </div>
                </div>

                <ExampleViewer example={examples.stickyPosition} title="Sticky Position Example" />
              </div>
            )}
          </div>

          {/* Z-Index */}
          <div className="space-y-4">
            <SectionHeader
              id="zIndexStacking"
              title="Z-Index & Stacking Context"
              icon={Layers}
              isExpanded={expandedSections.zIndexStacking}
              onToggle={() => toggleSection('zIndexStacking')}
            />

            {expandedSections.zIndexStacking && (
              <div className="space-y-6 p-6 bg-white rounded-lg border">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6" id="z-index">
                  <Layers className="w-6 h-6 text-pink-600" />
                  Z-Index & Stacking Context
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Z-index kiểm soát thứ tự chồng lớp của các positioned elements trên trục Z.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-pink-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-pink-900 mb-3">📊 Z-Index Rules:</h4>
                      <ul className="text-pink-800 space-y-2">
                        <li>• Số càng cao càng ở trên</li>
                        <li>• Chỉ hoạt động với positioned elements</li>
                        <li>• Mặc định: auto (thường = 0)</li>
                        <li>• Có thể là số âm</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">🏗️ Stacking Context:</h4>
                      <ul className="text-purple-800 space-y-2">
                        <li>• Tạo bởi position + z-index</li>
                        <li>• Opacity  1</li>
                        <li>• Transform, filter</li>
                        <li>• Isolation: isolate</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExampleViewer example={examples.zIndexStacking} title="Z-Index Example" />
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center" id="tom-tat">
              🎯 Tóm tắt CSS Positioning
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Move className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Trong luồng</h3>
                <p className="text-sm text-gray-600">static, relative, sticky</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ngoài luồng</h3>
                <p className="text-sm text-gray-600">absolute, fixed</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Layers className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Z-Index</h3>
                <p className="text-sm text-gray-600">Thứ tự chồng lớp</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-sm text-yellow-800">
                <strong>💡 Mẹo:</strong> Chỉ các element có position khác static mới có thể sử dụng
                top, right, bottom, left và z-index.
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-700 text-lg">
                Positioning là nền tảng để tạo layout phức tạp và interactive! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

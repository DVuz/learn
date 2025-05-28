import { Badge } from '@/components/ui/badge';
import {
  AlertCircle,
  Box,
  CheckCircle,
  Code,
  FileText,
  Layers,
  Monitor,
  Palette,
  Settings,
  Smartphone,
  Target,
  Zap,
} from 'lucide-react';
import CSSLayout from './components/CSSLayout';
import { CSS_NAVIGATIONS, CSS_TABLE_OF_CONTENTS, getProgressForLesson } from './constants/cssData';

const navigation = CSS_NAVIGATIONS['introduction'];
const progress = getProgressForLesson('introduction');

export default function CSSBasicPage() {
  return (
    <CSSLayout
      currentLesson="CSS Cơ Bản - Hướng Dẫn Toàn Diện"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2">
            <Palette className="w-4 h-4 mr-2" />
            CSS - Cascading Style Sheets
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900" id="css-co-ban">
            CSS Cơ Bản - Hướng Dẫn Toàn Diện
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Khám phá CSS từ cơ bản đến nâng cao: cú pháp, selectors đa dạng, pseudo-classes,
            pseudo-elements, combinators, specificity và inheritance. Tất cả những gì bạn cần để
            thành thạo CSS!
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* 1. CSS là gì và tại sao quan trọng */}
          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
            id="css-la-gi"
          >
            <Palette className="w-6 h-6 text-blue-600" />
            1. CSS Là Gì Và Tại Sao Quan Trọng?
          </h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <h4 className="font-semibold text-blue-900 mb-3">CSS (Cascading Style Sheets)</h4>
            <p className="text-blue-800 mb-4">
              CSS là ngôn ngữ tạo kiểu dùng để mô tả cách hiển thị của tài liệu HTML. CSS là cầu nối
              giữa nội dung (HTML) và giao diện người dùng.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">HTML</h5>
                <p className="text-sm text-blue-700">Cấu trúc và nội dung</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">CSS</h5>
                <p className="text-sm text-blue-700">Giao diện và cách trình bày</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">JavaScript</h5>
                <p className="text-sm text-blue-700">Tương tác và hành vi</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-green-200 rounded-lg p-5 bg-green-50">
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Lợi ích chính
              </h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>
                  • <strong>Tái sử dụng:</strong> Một file CSS cho nhiều trang web
                </li>
                <li>
                  • <strong>Dễ bảo trì:</strong> Thay đổi thiết kế một cách tập trung
                </li>
                <li>
                  • <strong>Hiệu suất tốt:</strong> Giảm kích thước file HTML
                </li>
                <li>
                  • <strong>Khả năng tiếp cận:</strong> Tách biệt nội dung và cách trình bày
                </li>
              </ul>
            </div>

            <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
              <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Cấu trúc cơ bản
              </h4>
              <div className="bg-gray-900 rounded p-3 text-sm">
                <pre className="text-green-400 overflow-x-auto">
                  {`bộ-chọn {
    thuộc-tính: giá-trị;
    thuộc-tính: giá-trị;
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* 2. Ba cách áp dụng CSS */}
          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
            id="cach-ap-dung-css"
          >
            <Code className="w-6 h-6 text-green-600" />
            2. Ba Cách Áp Dụng CSS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Inline CSS */}
            <div className="border-2 border-red-200 rounded-lg p-5 bg-red-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h4 className="font-semibold text-red-700">Inline CSS</h4>
                <Badge variant="destructive" className="text-xs">
                  Cao nhất
                </Badge>
              </div>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`<p style="color: red; font-size: 16px;">
  Text với inline style
</p>`}
                </pre>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Ưu tiên tuyệt đối</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Ghi đè nhanh</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>Khó bảo trì</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>Không tái sử dụng</span>
                </div>
              </div>
            </div>

            {/* Internal CSS */}
            <div className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <h4 className="font-semibold text-blue-700">Internal CSS</h4>
                <Badge variant="secondary" className="text-xs">
                  Trung bình
                </Badge>
              </div>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`<style>
  p { color: blue; }
  .highlight { background: yellow; }
</style>`}
                </pre>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Áp dụng cho toàn trang</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Không cần file riêng</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>Không tái sử dụng cho trang khác</span>
                </div>
              </div>
            </div>

            {/* External CSS */}
            <div className="border-2 border-green-200 rounded-lg p-5 bg-green-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h4 className="font-semibold text-green-700">External CSS</h4>
                <Badge className="bg-green-600 text-xs">Khuyến nghị</Badge>
              </div>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`<link rel="stylesheet" href="style.css">

/* style.css */
p { color: blue; }`}
                </pre>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Tái sử dụng nhiều trang</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Lưu cache tốt</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Tách biệt content & style</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Hệ thống Selector */}
          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
            id="selector-system"
          >
            <Target className="w-6 h-6 text-purple-600" />
            3. Hệ Thống Bộ Chọn (Selector)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Cấp độ 1 - Cơ bản */}
            <div className="border rounded-lg p-5 bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-3">Cấp độ 1 - Bộ chọn cơ bản</h4>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`/* Phần tử */
p { color: black; }
div { margin: 10px; }

/* Lớp (Class) */
.highlight { background: yellow; }
.container { width: 100%; }

/* ID */
#header { background: navy; }
#footer { text-align: center; }

/* Toàn bộ */
* { box-sizing: border-box; }`}
                </pre>
              </div>
            </div>

            {/* Cấp độ 2 - Thuộc tính */}
            <div className="border rounded-lg p-5 bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-3">Cấp độ 2 - Bộ chọn thuộc tính</h4>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`/* Khớp chính xác */
[type="text"] { border: 1px solid blue; }

/* Bắt đầu bằng */
[href^="https"] { color: green; }

/* Kết thúc bằng */
[href$=".pdf"] { color: red; }

/* Chứa */
[href*="google"] { font-weight: bold; }

/* Chứa từ */
[class~="active"] { background: yellow; }`}
                </pre>
              </div>
            </div>
          </div>

          {/* Pseudo-classes và Pseudo-elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border rounded-lg p-5 bg-yellow-50">
              <h4 className="font-semibold text-yellow-700 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Cấp độ 3 - Lớp giả (Pseudo-classes)
              </h4>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`/* Trạng thái tương tác */
a:hover { color: red; }
button:focus { outline: 2px solid blue; }
input:disabled { opacity: 0.5; }

/* Cấu trúc */
li:first-child { font-weight: bold; }
p:nth-child(2n) { background: #f0f0f0; }
div:empty { display: none; }`}
                </pre>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-purple-50">
              <h4 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Phần tử giả (Pseudo-elements)
              </h4>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`/* Tạo nội dung */
.quote::before { content: """; }
.quote::after { content: """; }

/* Chữ đầu tiên */
p::first-letter { font-size: 3em; }
p::first-line { font-weight: bold; }

/* Selection */
::selection { background: yellow; }`}
                </pre>
              </div>
            </div>
          </div>

          {/* 4. Combinators */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4" id="combinators">
            Cấp độ 4 - Bộ Kết Hợp (Combinators)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
              <h4 className="font-semibold text-blue-700 mb-3">Descendant & Child</h4>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`/* Con cháu (dấu cách) */
.parent p { color: red; }
/* TẤT CẢ p ở BẤT KỲ cấp độ nào */

/* Con trực tiếp (>) */
.parent > p { color: blue; }
/* CHỈ p con TRỰC TIẾP */`}
                </pre>
              </div>
            </div>

            <div className="border-2 border-orange-200 rounded-lg p-5 bg-orange-50">
              <h4 className="font-semibold text-orange-700 mb-3">Siblings</h4>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`/* Anh em liền kề (+) */
h2 + p { margin-top: 0; }
/* p NGAY SAU h2 */

/* Anh em chung (~) */
h2 ~ p { color: gray; }
/* TẤT CẢ p sau h2 cùng cấp */`}
                </pre>
              </div>
            </div>
          </div>

          {/* 5. Specificity */}
          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
            id="specificity"
          >
            <Settings className="w-6 h-6 text-red-600" />
            4. Độ Cụ Thể (Specificity)
          </h2>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
            <h4 className="font-semibold text-red-900 mb-3">
              Cách tính Specificity (định dạng: a-b-c-d):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border border-red-200">
                <div className="text-2xl font-bold text-red-700">1000</div>
                <div className="text-sm text-red-600">Inline styles</div>
                <code className="text-xs text-gray-600">style="..."</code>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-700">100</div>
                <div className="text-sm text-orange-600">IDs</div>
                <code className="text-xs text-gray-600">#header</code>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">10</div>
                <div className="text-sm text-blue-600">Classes, attributes</div>
                <code className="text-xs text-gray-600">.nav, [type]</code>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-700">1</div>
                <div className="text-sm text-green-600">Elements</div>
                <code className="text-xs text-gray-600">div, p</code>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Ví dụ tính Specificity</h3>

          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <pre className="text-green-400 text-sm overflow-x-auto">
              {`/* 0-0-0-1 = 1 điểm */
p { color: black; }

/* 0-0-1-0 = 10 điểm */
.highlight { color: yellow; }

/* 0-1-0-0 = 100 điểm */
#header { color: blue; }

/* 0-0-1-1 = 11 điểm */
p.highlight { color: red; }

/* 0-1-1-1 = 111 điểm */
#main .sidebar p { color: green; }

/* 0-1-2-1 = 121 điểm - THẮNG */
#main .sidebar p.highlight { color: purple; }

/* !important ghi đè MỌI THỨ */
p { color: orange !important; }`}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-red-200 rounded-lg p-4 bg-red-50">
              <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />❌ Tránh
              </h4>
              <div className="bg-gray-900 rounded p-3 text-sm mb-2">
                <pre className="text-red-400 overflow-x-auto">
                  {`/* Specificity quá cao */
#header .nav ul.menu li.item a.link { }

/* Lạm dụng !important */
.text { color: red !important; }`}
                </pre>
              </div>
            </div>

            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />✅ Khuyến nghị
              </h4>
              <div className="bg-gray-900 rounded p-3 text-sm mb-2">
                <pre className="text-green-400 overflow-x-auto">
                  {`/* Giữ specificity thấp */
.nav-link { }
.nav-link--active { }

/* Tăng tự nhiên */
.header .nav-link { }`}
                </pre>
              </div>
            </div>
          </div>

          {/* 6. Inheritance & Cascade */}
          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
            id="inheritance-cascade"
          >
            <Layers className="w-6 h-6 text-green-600" />
            5. Kế Thừa & CSS Cascade
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">CSS Cascade - Thứ tự ưu tiên</h3>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <h4 className="font-semibold text-blue-900 mb-3">
              Thứ tự ưu tiên Cascade (từ thấp đến cao):
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>
                <strong>Browser default styles</strong> - Kiểu mặc định trình duyệt
              </li>
              <li>
                <strong>User styles</strong> - CSS tùy chỉnh của người dùng
              </li>
              <li>
                <strong>Author styles</strong> - CSS của developer
              </li>
              <li>
                <strong>Inline styles</strong> - Thuộc tính style=""
              </li>
              <li>
                <strong>!important declarations</strong> - Khai báo !important
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-green-200 rounded-lg p-5 bg-green-50">
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Thuộc tính được kế thừa
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• font-family, font-size, font-weight</li>
                <li>• color, line-height</li>
                <li>• text-align, text-decoration</li>
                <li>• list-style-type, list-style-image</li>
                <li>• cursor, visibility</li>
                <li>• letter-spacing, word-spacing</li>
              </ul>
            </div>

            <div className="border-2 border-red-200 rounded-lg p-5 bg-red-50">
              <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Không được kế thừa
              </h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• margin, padding, border</li>
                <li>• background, background-color</li>
                <li>• width, height, min-width, max-width</li>
                <li>• position, top, left, right, bottom</li>
                <li>• display, float, clear</li>
                <li>• z-index, overflow</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Kiểm soát Inheritance</h3>

          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <pre className="text-green-400 text-sm overflow-x-auto">
              {`/* Kiểm soát inheritance */
.child {
    color: inherit;    /* Kế thừa từ parent */
    margin: initial;   /* Giá trị mặc định của browser */
    padding: unset;    /* Kế thừa nếu có, không thì initial */
    border: revert;    /* Quay về browser default stylesheet */
}

/* Ví dụ thực tế */
body {
    font-family: 'Helvetica', Arial, sans-serif;  /* Tất cả con sẽ kế thừa */
    color: #333;                                   /* Tất cả con sẽ kế thừa */
    line-height: 1.6;                             /* Tất cả con sẽ kế thừa */
}

.special-text {
    font-family: inherit;  /* Giữ font từ body */
    color: red;           /* Override color */
}`}
            </pre>
          </div>

          {/* 7. Box Model */}
          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
            id="box-model"
          >
            <Box className="w-6 h-6 text-orange-600" />
            6. Mô Hình Hộp (Box Model)
          </h2>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
            <h4 className="font-semibold text-orange-900 mb-3">Cấu trúc Box Model:</h4>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://www.w3schools.com/css/box-model.gif"
                  alt="CSS Box Model Diagram"
                  className="max-w-full h-auto"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                  Mô hình hộp CSS với Content, Padding, Border và Margin
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border rounded-lg p-5 bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-3">Content-box (mặc định)</h4>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`.content-box {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid;
    /* Tổng = 200 + 40 + 10 = 250px */
}`}
                </pre>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-green-50">
              <h4 className="font-semibold text-green-700 mb-3">Border-box (khuyến nghị)</h4>
              <div className="bg-gray-900 rounded p-3 text-sm mb-3">
                <pre className="text-green-400 overflow-x-auto">
                  {`.border-box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid;
    /* Tổng = 200px (đã bao gồm all) */
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* 8. Layout Systems */}
          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
            id="layout-systems"
          >
            <Monitor className="w-6 h-6 text-indigo-600" />
            7. Hệ Thống Bố Cục (Layout)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-indigo-700 mb-3">Sự phát triển của CSS Layout:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-100 rounded">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-semibold">Table Layout (1990s)</div>
                    <div className="text-sm text-gray-600">Hack để tạo bố cục</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-100 rounded">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-semibold">Float Layout (2000s)</div>
                    <div className="text-sm text-gray-600">Tạo cột và wrapper</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-100 rounded">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-semibold">Flexbox (2010s)</div>
                    <div className="text-sm text-gray-600">Bố cục 1 chiều (hàng hoặc cột)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-100 rounded">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    4
                  </div>
                  <div>
                    <div className="font-semibold">Grid (2017+)</div>
                    <div className="text-sm text-gray-600">Bố cục 2 chiều (hàng và cột)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-indigo-200 rounded-lg p-5 bg-indigo-50">
              <h4 className="font-semibold text-indigo-700 mb-3">Khi nào dùng gì?</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-indigo-800">Flexbox</div>
                  <div className="text-indigo-700">Thanh điều hướng, bố cục thẻ, căn giữa</div>
                  <div className="text-xs text-indigo-600">
                    1 chiều, căn chỉnh, kích thước linh hoạt
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-indigo-800">Grid</div>
                  <div className="text-indigo-700">Bố cục trang, bố cục phức tạp</div>
                  <div className="text-xs text-indigo-600">
                    2 chiều, kiểm soát chính xác, chồng lấp
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-indigo-800">Position</div>
                  <div className="text-indigo-700">Overlay, tooltip, header cố định</div>
                  <div className="text-xs text-indigo-600">Định vị chính xác</div>
                </div>
              </div>
            </div>
          </div>

          {/* 9. Responsive Design */}
          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
            id="responsive-design"
          >
            <Smartphone className="w-6 h-6 text-teal-600" />
            8. Thiết Kế Responsive
          </h2>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-6">
            <h4 className="font-semibold text-teal-900 mb-3">Phương pháp Mobile-First:</h4>
            <div className="bg-gray-900 rounded p-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                {`/* Cơ sở: Mobile */
.container { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
    .container { width: 750px; }
}

/* Desktop */
@media (min-width: 1024px) {
    .container { width: 1000px; }
}`}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-teal-200 rounded-lg p-5 bg-teal-50">
              <h4 className="font-semibold text-teal-700 mb-3">Đơn vị linh hoạt</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-mono font-bold">%</span>
                  <span className="text-teal-700">Chiều rộng bố cục</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-bold">em</span>
                  <span className="text-teal-700">Khoảng cách component</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-bold">rem</span>
                  <span className="text-teal-700">Typography, khoảng cách nhất quán</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-bold">vw/vh</span>
                  <span className="text-teal-700">Phần tử toàn viewport</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-bold">fr</span>
                  <span className="text-teal-700">Cột Grid</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-3">Best Practices</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Thiết kế Mobile-First</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Sử dụng đơn vị tương đối</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Test trên nhiều thiết bị</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Tối ưu hình ảnh</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 10. CSS Architecture */}
          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6"
            id="css-architecture"
          >
            <FileText className="w-6 h-6 text-violet-600" />
            9. Kiến Trúc CSS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-violet-200 rounded-lg p-5 bg-violet-50">
              <h4 className="font-semibold text-violet-700 mb-3">Quy tắc CSS có thể bảo trì:</h4>
              <ul className="space-y-2 text-sm text-violet-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    <strong>Dự đoán được:</strong> Tên class và hành vi nhất quán
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    <strong>Tái sử dụng:</strong> Component có thể dùng lại
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    <strong>Dễ bảo trì:</strong> Dễ sửa đổi và mở rộng
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    <strong>Có thể mở rộng:</strong> Hoạt động tốt khi dự án lớn
                  </span>
                </li>
              </ul>
            </div>

            <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
              <h4 className="font-semibold text-blue-700 mb-3">Quy ước đặt tên:</h4>
              <div className="bg-gray-900 rounded p-3 text-sm">
                <pre className="text-green-400 overflow-x-auto">
                  {`/* BEM (Block Element Modifier) */
.card { }                    /* Block */
.card__title { }             /* Element */
.card__title--large { }      /* Modifier */

/* SMACSS */
.layout-header { }           /* Layout */
.module-card { }             /* Module */
.state-is-active { }         /* State */
.theme-dark { }              /* Theme */`}
                </pre>
              </div>
            </div>
          </div>

          {/* Performance */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Cân nhắc về Hiệu suất</h3>

          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <pre className="text-green-400 text-sm overflow-x-auto">
              {`/* ❌ Chậm - lồng sâu */
.nav ul li a:hover { }

/* ✅ Nhanh - nhắm trực tiếp */
.nav-link:hover { }

/* ❌ Chậm - bộ chọn toàn bộ */
* { box-sizing: border-box; }

/* ✅ Tốt hơn - reset có mục tiêu */
html, body, div, span, h1, h2, h3, p {
    box-sizing: border-box;
}`}
            </pre>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-4 text-xl flex items-center gap-2">
              <Target className="w-6 h-6" />
              🎯 Tóm Tắt CSS Cơ Bản
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Kiến thức Core:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>✅ Hiểu CSS Cascade và Specificity</li>
                  <li>✅ Thành thạo hệ thống Selector</li>
                  <li>✅ Nắm vững Box Model và Layout</li>
                  <li>✅ Áp dụng Inheritance hiệu quả</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Concepts Nâng cao:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>✅ Thiết kế Responsive</li>
                  <li>✅ Kiến trúc CSS bền vững</li>
                  <li>✅ Performance optimization</li>
                  <li>✅ Debugging và troubleshooting</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-100 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                💡 Best Practices Tổng Hợp:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-blue-800 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                    <span>
                      Sử dụng <strong>external CSS</strong> để dễ bảo trì
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                    <span>
                      Giữ <strong>specificity thấp</strong>, tránh !important
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                    <span>
                      Thiết kế <strong>Mobile-First</strong>
                    </span>
                  </li>
                </ul>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                    <span>
                      Tận dụng <strong>inheritance</strong> để giảm code
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                    <span>
                      Đặt tên class <strong>có ý nghĩa</strong> và nhất quán
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                    <span>
                      Sử dụng <strong>comments</strong> để document code
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-blue-800 font-medium">
                🚀 Tiếp theo: Học về Flexbox và Grid để xây dựng layout chuyên nghiệp!
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

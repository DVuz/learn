import { Badge } from '@/components/ui/badge';
import { Code, FileText, Layers } from 'lucide-react';
import CSSLayout from '../components/CSSLayout';
import {
  CSS_LESSON_OUTLINES,
  CSS_NAVIGATIONS,
  CSS_TABLE_OF_CONTENTS,
  getProgressForLesson,
} from '../constants/cssData';

const outline = CSS_LESSON_OUTLINES['syntax'];
const navigation = CSS_NAVIGATIONS['syntax'];
const progress = getProgressForLesson('syntax');

export default function CSSSyntaxPage() {
  return (
    <CSSLayout
      currentLesson="Cú pháp CSS"
      tableOfContents={CSS_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
      // Không cần truyền outline prop nữa
    >
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
            <Code className="w-4 h-4 mr-2" />
            CSS Syntax
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900 ">
            Cú pháp CSS
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Học cách viết CSS đúng cú pháp và hiểu cấu trúc của một CSS rule.
          </p>
        </div>

        <div className="prose prose-lg">
          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-4"
            id="css-rule"
          >
            <FileText className="w-6 h-6 text-green-600" />
            CSS Rule
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Một CSS rule bao gồm selector và declaration block. Đây là cấu trúc cơ bản của CSS.
          </p>

          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <code className="text-green-400 text-sm">
              {`selector {
  property: value;
  property: value;
}`}
            </code>
          </div>

          <h2
            className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-4"
            id="selectors"
          >
            <Layers className="w-6 h-6 text-blue-600" />
            Selectors
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Selector xác định phần tử HTML nào sẽ được áp dụng style.
          </p>

          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <code className="text-green-400 text-sm">
              {`/* Element Selector */
h1 { color: blue; }

/* Class Selector */
.my-class { color: red; }

/* ID Selector */
#my-id { color: green; }`}
            </code>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4" id="properties">
            Properties và Values
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Properties định nghĩa thuộc tính cần thay đổi, values là giá trị được áp dụng.
          </p>

          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <code className="text-green-400 text-sm">
              {`h1 {
  color: blue;        /* property: value; */
  font-size: 24px;    /* property: value; */
  margin: 10px 0;     /* property: value; */
}`}
            </code>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4" id="values">
            Các loại Values
          </h2>

          <ul className="space-y-2 text-gray-700 mb-8">
            <li>
              • <strong>Keywords:</strong> red, blue, bold, italic
            </li>
            <li>
              • <strong>Numbers:</strong> 24px, 1.5em, 100%
            </li>
            <li>
              • <strong>Colors:</strong> #ff0000, rgb(255,0,0), hsl(0,100%,50%)
            </li>
            <li>
              • <strong>URLs:</strong> url("image.jpg")
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4" id="comments">
            CSS Comments
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Comments giúp giải thích code và không ảnh hưởng đến styling.
          </p>

          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <code className="text-green-400 text-sm">
              {`/* Đây là comment một dòng */

/*
  Đây là comment
  nhiều dòng
*/

h1 {
  color: blue; /* Inline comment */
}`}
            </code>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="font-semibold text-green-900 mb-2">✅ Best Practices</h3>
            <ul className="text-green-800 space-y-1">
              <li>• Luôn kết thúc mỗi declaration bằng dấu ;</li>
              <li>• Sử dụng indentation để code dễ đọc</li>
              <li>• Đặt tên class/id có ý nghĩa</li>
              <li>• Sử dụng comments để giải thích code phức tạp</li>
            </ul>
          </div>
        </div>
      </div>
    </CSSLayout>
  );
}

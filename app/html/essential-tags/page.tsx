'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ChevronDown,
  ChevronUp,
  Code,
  Tags,
  BookOpen,
  Lightbulb,
  Target,
  HelpCircle,
  Copy,
  Check,
  Eye,
  Info,
} from 'lucide-react';
import HTMLLayout from '../components/HTMLLayout';
import {
  HTML_TABLE_OF_CONTENTS,
  HTML_NAVIGATIONS,
  getProgressForLesson,
} from '../constants/htmlData';

interface TagInfo {
  tag: string;
  name: string;
  description: string;
  usage: string;
  attributes: string[];
  examples: {
    code: string;
    result: string;
    explanation: string;
  }[];
  category: 'text' | 'structure' | 'media' | 'form' | 'semantic' | 'meta';
  level: 'basic' | 'intermediate' | 'advanced';
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  level: 'junior' | 'mid' | 'senior';
  category: 'text' | 'structure' | 'media' | 'forms' | 'semantic';
}

const navigation = HTML_NAVIGATIONS['essential-tags'] || {};
const progress = getProgressForLesson('essential-tags');

const htmlTags: TagInfo[] = [
  {
    tag: 'h1-h6',
    name: 'Heading Tags',
    description:
      'Thẻ tiêu đề tạo hierarchy cho nội dung, từ quan trọng nhất (h1) đến ít quan trọng nhất (h6)',
    usage: 'Cấu trúc nội dung, SEO, accessibility',
    attributes: ['id', 'class', 'style', 'title'],
    category: 'text',
    level: 'basic',
    examples: [
      {
        code: `<h1>Tiêu đề chính - Level 1</h1>
<h2>Tiêu đề phụ - Level 2</h2>
<h3>Tiêu đề cấp 3 - Level 3</h3>
<h4>Tiêu đề cấp 4 - Level 4</h4>
<h5>Tiêu đề cấp 5 - Level 5</h5>
<h6>Tiêu đề cấp 6 - Level 6</h6>`,
        result: `<h1 style="font-size: 2em; font-weight: bold; margin: 0.67em 0;">Tiêu đề chính - Level 1</h1>
<h2 style="font-size: 1.5em; font-weight: bold; margin: 0.75em 0;">Tiêu đề phụ - Level 2</h2>
<h3 style="font-size: 1.17em; font-weight: bold; margin: 0.83em 0;">Tiêu đề cấp 3 - Level 3</h3>
<h4 style="font-size: 1em; font-weight: bold; margin: 1.12em 0;">Tiêu đề cấp 4 - Level 4</h4>
<h5 style="font-size: 0.83em; font-weight: bold; margin: 1.5em 0;">Tiêu đề cấp 5 - Level 5</h5>
<h6 style="font-size: 0.75em; font-weight: bold; margin: 1.67em 0;">Tiêu đề cấp 6 - Level 6</h6>`,
        explanation: 'Mỗi trang chỉ nên có 1 h1, các heading khác theo thứ tự logic không bỏ cấp',
      },
      {
        code: `<article>
  <h1>Bài viết chính</h1>
  <section>
    <h2>Phần giới thiệu</h2>
    <h3>Lịch sử</h3>
    <h3>Tầm quan trọng</h3>
  </section>
  <section>
    <h2>Nội dung chi tiết</h2>
    <h3>Phương pháp 1</h3>
    <h3>Phương pháp 2</h3>
  </section>
</article>`,
        result: `<article style="margin: 1em 0;">
  <h1 style="font-size: 2em; font-weight: bold; margin: 0.67em 0;">Bài viết chính</h1>
  <section style="margin: 1em 0;">
    <h2 style="font-size: 1.5em; font-weight: bold; margin: 0.75em 0;">Phần giới thiệu</h2>
    <h3 style="font-size: 1.17em; font-weight: bold; margin: 0.83em 0; margin-left: 1em;">Lịch sử</h3>
    <h3 style="font-size: 1.17em; font-weight: bold; margin: 0.83em 0; margin-left: 1em;">Tầm quan trọng</h3>
  </section>
  <section style="margin: 1em 0;">
    <h2 style="font-size: 1.5em; font-weight: bold; margin: 0.75em 0;">Nội dung chi tiết</h2>
    <h3 style="font-size: 1.17em; font-weight: bold; margin: 0.83em 0; margin-left: 1em;">Phương pháp 1</h3>
    <h3 style="font-size: 1.17em; font-weight: bold; margin: 0.83em 0; margin-left: 1em;">Phương pháp 2</h3>
  </section>
</article>`,
        explanation: 'Heading hierarchy giúp tạo table of contents tự động và cải thiện SEO',
      },
    ],
  },
  {
    tag: 'p',
    name: 'Paragraph',
    description: 'Thẻ đoạn văn để nhóm các câu có liên quan thành một đơn vị ý nghĩa',
    usage: 'Hiển thị văn bản, nội dung chính',
    attributes: ['id', 'class', 'style', 'lang'],
    category: 'text',
    level: 'basic',
    examples: [
      {
        code: `<p>Đây là một đoạn văn bình thường với nội dung thông tin.</p>

<p>Đoạn văn này có <strong>text đậm</strong>,
<em>text nghiêng</em>, và <mark>text được highlight</mark>.</p>

<p>Bạn có thể <a href="#link">tạo liên kết</a> trong đoạn văn.</p>`,
        result: `<p style="margin: 1em 0; line-height: 1.6;">Đây là một đoạn văn bình thường với nội dung thông tin.</p>

<p style="margin: 1em 0; line-height: 1.6;">Đoạn văn này có <strong style="font-weight: bold;">text đậm</strong>,
<em style="font-style: italic;">text nghiêng</em>, và <mark style="background-color: yellow; padding: 0 2px;">text được highlight</mark>.</p>

<p style="margin: 1em 0; line-height: 1.6;">Bạn có thể <a href="#link" style="color: blue; text-decoration: underline;">tạo liên kết</a> trong đoạn văn.</p>`,
        explanation: 'Browser tự động thêm margin-top và margin-bottom cho thẻ p',
      },
      {
        code: `<p class="intro">
  Đoạn văn giới thiệu với class CSS để styling đặc biệt.
</p>

<p lang="en">
  This paragraph is in English language.
</p>`,
        result: `<p class="intro" style="margin: 1em 0; line-height: 1.6; font-size: 1.2em; color: #333;">
  Đoạn văn giới thiệu với class CSS để styling đặc biệt.
</p>

<p lang="en" style="margin: 1em 0; line-height: 1.6; font-family: 'Times New Roman', serif;">
  This paragraph is in English language.
</p>`,
        explanation: 'Class cho phép apply CSS, lang attribute giúp screen readers phát âm đúng',
      },
    ],
  },
  {
    tag: 'strong',
    name: 'Strong Importance',
    description: 'Thể hiện nội dung có tầm quan trọng cao, mang ý nghĩa semantic',
    usage: 'Nhấn mạnh nội dung quan trọng',
    attributes: ['id', 'class', 'style'],
    category: 'text',
    level: 'basic',
    examples: [
      {
        code: `<p>Lưu ý: <strong>Việc backup dữ liệu là rất quan trọng</strong>
trước khi thực hiện update hệ thống.</p>

<p><strong>Cảnh báo:</strong> Không chia sẻ password với người khác.</p>`,
        result: `<p style="margin: 1em 0; line-height: 1.6;">Lưu ý: <strong style="font-weight: bold;">Việc backup dữ liệu là rất quan trọng</strong>
trước khi thực hiện update hệ thống.</p>

<p style="margin: 1em 0; line-height: 1.6;"><strong style="font-weight: bold;">Cảnh báo:</strong> Không chia sẻ password với người khác.</p>`,
        explanation: 'Strong khác với <b> vì có ý nghĩa quan trọng, tốt cho SEO và screen readers',
      },
    ],
  },
  {
    tag: 'em',
    name: 'Emphasis',
    description: 'Thể hiện sự nhấn mạnh, stress về ngữ điệu trong văn nói',
    usage: 'Nhấn mạnh ngữ điệu, ý nghĩa',
    attributes: ['id', 'class', 'style'],
    category: 'text',
    level: 'basic',
    examples: [
      {
        code: `<p>Tôi <em>thực sự</em> thích học HTML.</p>

<p>Bạn có <em>chắc chắn</em> muốn xóa file này không?</p>`,
        result: `<p style="margin: 1em 0; line-height: 1.6;">Tôi <em style="font-style: italic;">thực sự</em> thích học HTML.</p>

<p style="margin: 1em 0; line-height: 1.6;">Bạn có <em style="font-style: italic;">chắc chắn</em> muốn xóa file này không?</p>`,
        explanation: 'Em khác với <i> vì có ý nghĩa nhấn mạnh ngữ điệu',
      },
    ],
  },
  {
    tag: 'ul',
    name: 'Unordered List',
    description: 'Danh sách không có thứ tự, các item có tầm quan trọng tương đương',
    usage: 'Liệt kê items không có thứ tự',
    attributes: ['id', 'class', 'style', 'type'],
    category: 'structure',
    level: 'basic',
    examples: [
      {
        code: `<ul>
  <li>HTML - HyperText Markup Language</li>
  <li>CSS - Cascading Style Sheets</li>
  <li>JavaScript - Programming Language</li>
</ul>`,
        result: `<ul style="margin: 1em 0; padding-left: 2em; list-style-type: disc;">
  <li style="margin: 0.5em 0;">HTML - HyperText Markup Language</li>
  <li style="margin: 0.5em 0;">CSS - Cascading Style Sheets</li>
  <li style="margin: 0.5em 0;">JavaScript - Programming Language</li>
</ul>`,
        explanation: 'Browser tự động thêm bullet points và indentation',
      },
      {
        code: `<ul>
  <li>Frontend Technologies
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript ES6+</li>
    </ul>
  </li>
  <li>Backend Technologies
    <ul>
      <li>Node.js</li>
      <li>Python</li>
      <li>Java</li>
    </ul>
  </li>
</ul>`,
        result: `<ul style="margin: 1em 0; padding-left: 2em; list-style-type: disc;">
  <li style="margin: 0.5em 0;">Frontend Technologies
    <ul style="margin: 0.5em 0; padding-left: 2em; list-style-type: circle;">
      <li style="margin: 0.25em 0;">HTML5</li>
      <li style="margin: 0.25em 0;">CSS3</li>
      <li style="margin: 0.25em 0;">JavaScript ES6+</li>
    </ul>
  </li>
  <li style="margin: 0.5em 0;">Backend Technologies
    <ul style="margin: 0.5em 0; padding-left: 2em; list-style-type: circle;">
      <li style="margin: 0.25em 0;">Node.js</li>
      <li style="margin: 0.25em 0;">Python</li>
      <li style="margin: 0.25em 0;">Java</li>
    </ul>
  </li>
</ul>`,
        explanation: 'Nested lists tự động thay đổi bullet style (•, ○, ■)',
      },
    ],
  },
  {
    tag: 'ol',
    name: 'Ordered List',
    description: 'Danh sách có thứ tự, các item theo sequence logic',
    usage: 'Liệt kê items theo thứ tự, hướng dẫn từng bước',
    attributes: ['id', 'class', 'style', 'type', 'start', 'reversed'],
    category: 'structure',
    level: 'basic',
    examples: [
      {
        code: `<ol>
  <li>Mở text editor</li>
  <li>Tạo file HTML mới</li>
  <li>Viết DOCTYPE và HTML structure</li>
  <li>Thêm nội dung vào body</li>
  <li>Save file với extension .html</li>
</ol>`,
        result: `<ol style="margin: 1em 0; padding-left: 2em; list-style-type: decimal;">
  <li style="margin: 0.5em 0;">Mở text editor</li>
  <li style="margin: 0.5em 0;">Tạo file HTML mới</li>
  <li style="margin: 0.5em 0;">Viết DOCTYPE và HTML structure</li>
  <li style="margin: 0.5em 0;">Thêm nội dung vào body</li>
  <li style="margin: 0.5em 0;">Save file với extension .html</li>
</ol>`,
        explanation: 'Browser tự động đánh số thứ tự cho mỗi list item',
      },
      {
        code: `<ol type="A" start="5">
  <li>Option E</li>
  <li>Option F</li>
  <li>Option G</li>
</ol>

<ol reversed>
  <li>Third step</li>
  <li>Second step</li>
  <li>First step</li>
</ol>`,
        result: `<ol type="A" start="5" style="margin: 1em 0; padding-left: 2em; list-style-type: upper-alpha;">
  <li style="margin: 0.5em 0;">Option E</li>
  <li style="margin: 0.5em 0;">Option F</li>
  <li style="margin: 0.5em 0;">Option G</li>
</ol>

<ol reversed style="margin: 1em 0; padding-left: 2em; list-style-type: decimal;">
  <li style="margin: 0.5em 0;" value="3">Third step</li>
  <li style="margin: 0.5em 0;" value="2">Second step</li>
  <li style="margin: 0.5em 0;" value="1">First step</li>
</ol>`,
        explanation: 'type="A" tạo chữ cái, start="5" bắt đầu từ số 5, reversed đảo ngược',
      },
    ],
  },
  {
    tag: 'a',
    name: 'Anchor/Link',
    description: 'Tạo hyperlinks kết nối đến trang khác, section, email, phone',
    usage: 'Navigation, liên kết external/internal',
    attributes: ['href', 'target', 'rel', 'download', 'title'],
    category: 'structure',
    level: 'basic',
    examples: [
      {
        code: `<!-- Link cơ bản -->
<a href="https://developer.mozilla.org">MDN Web Docs</a>

<!-- Link external mở tab mới -->
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  GitHub (mở tab mới)
</a>

<!-- Link internal trong trang -->
<a href="#section1">Đi đến Section 1</a>`,
        result: `<!-- Link cơ bản -->
<a href="https://developer.mozilla.org" style="color: #0066cc; text-decoration: underline; cursor: pointer;">MDN Web Docs</a>

<!-- Link external mở tab mới -->
<a href="https://github.com" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline; cursor: pointer;">
  GitHub (mở tab mới)
</a>

<!-- Link internal trong trang -->
<a href="#section1" style="color: #0066cc; text-decoration: underline; cursor: pointer;">Đi đến Section 1</a>`,
        explanation: 'rel="noopener noreferrer" quan trọng cho security với target="_blank"',
      },
      {
        code: `<!-- Link email -->
<a href="mailto:contact@example.com?subject=Hello&body=Message">
  Gửi email
</a>

<!-- Link phone -->
<a href="tel:+84123456789">Gọi điện: 0123 456 789</a>

<!-- Download link -->
<a href="/files/document.pdf" download="my-document.pdf">
  Tải xuống PDF
</a>`,
        result: `<!-- Link email -->
<a href="mailto:contact@example.com?subject=Hello&body=Message" style="color: #0066cc; text-decoration: underline; cursor: pointer;">
  Gửi email
</a>

<!-- Link phone -->
<a href="tel:+84123456789" style="color: #0066cc; text-decoration: underline; cursor: pointer;">Gọi điện: 0123 456 789</a>

<!-- Download link -->
<a href="/files/document.pdf" download="my-document.pdf" style="color: #0066cc; text-decoration: underline; cursor: pointer;">
  Tải xuống PDF
</a>`,
        explanation: 'Các protocol khác nhau kích hoạt ứng dụng tương ứng',
      },
    ],
  },
  {
    tag: 'img',
    name: 'Image',
    description: 'Nhúng hình ảnh vào trang web với nhiều options tối ưu',
    usage: 'Hiển thị hình ảnh, graphics, icons',
    attributes: ['src', 'alt', 'width', 'height', 'loading', 'srcset', 'sizes'],
    category: 'media',
    level: 'basic',
    examples: [
      {
        code: `<!-- Image cơ bản -->
<img src="/images/logo.png" alt="Logo công ty ABC" width="200" height="100">

<!-- Responsive image -->
<img src="/images/hero.jpg"
     alt="Hero banner"
     style="max-width: 100%; height: auto;">`,
        result: `<!-- Image cơ bản -->
<img src="/images/logo.png" alt="Logo công ty ABC" width="200" height="100" style="display: inline-block; border: 0;">

<!-- Responsive image -->
<img src="/images/hero.jpg"
     alt="Hero banner"
     style="max-width: 100%; height: auto; display: block;">`,
        explanation: 'Alt text bắt buộc cho accessibility, width/height tránh layout shift',
      },
      {
        code: `<!-- Lazy loading -->
<img src="/images/large-photo.jpg"
     alt="Large photo"
     loading="lazy">

<!-- Responsive images với srcset -->
<img src="/images/photo-800.jpg"
     srcset="/images/photo-400.jpg 400w,
             /images/photo-800.jpg 800w,
             /images/photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 900px) 800px,
            1200px"
     alt="Responsive photo">`,
        result: `<!-- Lazy loading -->
<img src="/images/large-photo.jpg"
     alt="Large photo"
     loading="lazy"
     style="display: block; border: 0;">

<!-- Responsive images với srcset -->
<img src="/images/photo-800.jpg"
     srcset="/images/photo-400.jpg 400w,
             /images/photo-800.jpg 800w,
             /images/photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 900px) 800px,
            1200px"
     alt="Responsive photo"
     style="display: block; max-width: 100%; height: auto; border: 0;">`,
        explanation: 'loading="lazy" defer load until near viewport, srcset optimize performance',
      },
    ],
  },
  {
    tag: 'table',
    name: 'Table',
    description: 'Hiển thị dữ liệu tabular có cấu trúc rows và columns',
    usage: 'Hiển thị data có cấu trúc, so sánh thông tin',
    attributes: ['border', 'cellpadding', 'cellspacing', 'summary'],
    category: 'structure',
    level: 'intermediate',
    examples: [
      {
        code: `<table border="1" cellpadding="8" cellspacing="0">
  <caption>Danh sách nhân viên IT</caption>
  <thead>
    <tr>
      <th scope="col">Họ tên</th>
      <th scope="col">Vị trí</th>
      <th scope="col">Kinh nghiệm</th>
      <th scope="col">Lương</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nguyễn Văn A</td>
      <td>Frontend Dev</td>
      <td>3 năm</td>
      <td>15M</td>
    </tr>
    <tr>
      <td>Trần Thị B</td>
      <td>Backend Dev</td>
      <td>5 năm</td>
      <td>20M</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3"><strong>Tổng cộng</strong></td>
      <td><strong>35M</strong></td>
    </tr>
  </tfoot>
</table>`,
        result: `<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; margin: 1em 0;">
  <caption style="font-weight: bold; margin-bottom: 0.5em; text-align: center;">Danh sách nhân viên IT</caption>
  <thead style="background-color: #f5f5f5;">
    <tr>
      <th scope="col" style="border: 1px solid #ccc; padding: 8px; text-align: left; font-weight: bold;">Họ tên</th>
      <th scope="col" style="border: 1px solid #ccc; padding: 8px; text-align: left; font-weight: bold;">Vị trí</th>
      <th scope="col" style="border: 1px solid #ccc; padding: 8px; text-align: left; font-weight: bold;">Kinh nghiệm</th>
      <th scope="col" style="border: 1px solid #ccc; padding: 8px; text-align: left; font-weight: bold;">Lương</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #fff;">
      <td style="border: 1px solid #ccc; padding: 8px;">Nguyễn Văn A</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Frontend Dev</td>
      <td style="border: 1px solid #ccc; padding: 8px;">3 năm</td>
      <td style="border: 1px solid #ccc; padding: 8px;">15M</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="border: 1px solid #ccc; padding: 8px;">Trần Thị B</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Backend Dev</td>
      <td style="border: 1px solid #ccc; padding: 8px;">5 năm</td>
      <td style="border: 1px solid #ccc; padding: 8px;">20M</td>
    </tr>
  </tbody>
  <tfoot style="background-color: #e9e9e9;">
    <tr>
      <td colspan="3" style="border: 1px solid #ccc; padding: 8px;"><strong>Tổng cộng</strong></td>
      <td style="border: 1px solid #ccc; padding: 8px;"><strong>35M</strong></td>
    </tr>
  </tfoot>
</table>`,
        explanation: 'Caption mô tả bảng, scope giúp screen readers, tfoot cho summary data',
      },
    ],
  },
  {
    tag: 'form',
    name: 'Form',
    description: 'Container cho interactive controls để thu thập user input',
    usage: 'Login, registration, surveys, contact forms',
    attributes: ['action', 'method', 'enctype', 'target', 'novalidate'],
    category: 'form',
    level: 'intermediate',
    examples: [
      {
        code: `<form action="/submit" method="POST" enctype="multipart/form-data">
  <fieldset>
    <legend>Thông tin cá nhân</legend>

    <label for="fullname">Họ tên:</label>
    <input type="text" id="fullname" name="fullname" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="age">Tuổi:</label>
    <input type="number" id="age" name="age" min="18" max="100">
  </fieldset>

  <fieldset>
    <legend>Sở thích</legend>
    <input type="checkbox" id="coding" name="hobbies" value="coding">
    <label for="coding">Lập trình</label>

    <input type="checkbox" id="reading" name="hobbies" value="reading">
    <label for="reading">Đọc sách</label>
  </fieldset>

  <button type="submit">Gửi thông tin</button>
</form>`,
        result: `<form action="/submit" method="POST" enctype="multipart/form-data" style="margin: 1em 0; padding: 1em; border: 1px solid #ddd; border-radius: 4px;">
  <fieldset style="border: 1px solid #ccc; padding: 1em; margin: 1em 0; border-radius: 4px;">
    <legend style="font-weight: bold; padding: 0 0.5em;">Thông tin cá nhân</legend>

    <label for="fullname" style="display: block; margin: 0.5em 0; font-weight: bold;">Họ tên:</label>
    <input type="text" id="fullname" name="fullname" required style="width: 100%; padding: 0.5em; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 1em;">

    <label for="email" style="display: block; margin: 0.5em 0; font-weight: bold;">Email:</label>
    <input type="email" id="email" name="email" required style="width: 100%; padding: 0.5em; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 1em;">

    <label for="age" style="display: block; margin: 0.5em 0; font-weight: bold;">Tuổi:</label>
    <input type="number" id="age" name="age" min="18" max="100" style="width: 100%; padding: 0.5em; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 1em;">
  </fieldset>

  <fieldset style="border: 1px solid #ccc; padding: 1em; margin: 1em 0; border-radius: 4px;">
    <legend style="font-weight: bold; padding: 0 0.5em;">Sở thích</legend>
    <input type="checkbox" id="coding" name="hobbies" value="coding" style="margin-right: 0.5em;">
    <label for="coding" style="margin-right: 1em;">Lập trình</label>

    <input type="checkbox" id="reading" name="hobbies" value="reading" style="margin-right: 0.5em;">
    <label for="reading">Đọc sách</label>
  </fieldset>

  <button type="submit" style="background-color: #007bff; color: white; padding: 0.75em 1.5em; border: none; border-radius: 4px; cursor: pointer; font-size: 1em;">Gửi thông tin</button>
</form>`,
        explanation:
          'method="POST" cho sensitive data, enctype cho file upload, fieldset nhóm related inputs',
      },
    ],
  },
  {
    tag: 'input',
    name: 'Input',
    description: 'Interactive control để nhận user input với nhiều types khác nhau',
    usage: 'Thu thập data từ user',
    attributes: ['type', 'name', 'value', 'required', 'placeholder', 'pattern', 'min', 'max'],
    category: 'form',
    level: 'intermediate',
    examples: [
      {
        code: `<!-- Text inputs -->
<input type="text" placeholder="Nhập họ tên" required>
<input type="email" placeholder="email@example.com" required>
<input type="password" placeholder="Mật khẩu" minlength="8">
<input type="tel" placeholder="0123456789" pattern="[0-9]{10}">

<!-- Number & Date inputs -->
<input type="number" min="1" max="100" step="0.5">
<input type="date" min="2024-01-01" max="2024-12-31">
<input type="time">
<input type="range" min="0" max="100" value="50">

<!-- Selection inputs -->
<input type="radio" name="gender" value="male" id="male">
<input type="radio" name="gender" value="female" id="female">
<input type="checkbox" id="newsletter" name="newsletter">

<!-- File & Others -->
<input type="file" accept=".jpg,.png,.gif" multiple>
<input type="color" value="#ff0000">
<input type="search" placeholder="Tìm kiếm...">`,
        result: `<!-- Text inputs -->
<input type="text" placeholder="Nhập họ tên" required style="padding: 0.5em; border: 1px solid #ccc; border-radius: 4px; margin: 0.25em; width: 200px;">
<input type="email" placeholder="email@example.com" required style="padding: 0.5em; border: 1px solid #ccc; border-radius: 4px; margin: 0.25em; width: 200px;">
<input type="password" placeholder="Mật khẩu" minlength="8" style="padding: 0.5em; border: 1px solid #ccc; border-radius: 4px; margin: 0.25em; width: 200px;">
<input type="tel" placeholder="0123456789" pattern="[0-9]{10}" style="padding: 0.5em; border: 1px solid #ccc; border-radius: 4px; margin: 0.25em; width: 200px;">

<!-- Number & Date inputs -->
<input type="number" min="1" max="100" step="0.5" style="padding: 0.5em; border: 1px solid #ccc; border-radius: 4px; margin: 0.25em; width: 100px;">
<input type="date" min="2024-01-01" max="2024-12-31" style="padding: 0.5em; border: 1px solid #ccc; border-radius: 4px; margin: 0.25em;">
<input type="time" style="padding: 0.5em; border: 1px solid #ccc; border-radius: 4px; margin: 0.25em;">
<input type="range" min="0" max="100" value="50" style="margin: 0.25em; width: 200px;">

<!-- Selection inputs -->
<input type="radio" name="gender" value="male" id="male" style="margin: 0.25em;">
<input type="radio" name="gender" value="female" id="female" style="margin: 0.25em;">
<input type="checkbox" id="newsletter" name="newsletter" style="margin: 0.25em;">

<!-- File & Others -->
<input type="file" accept=".jpg,.png,.gif" multiple style="margin: 0.25em; padding: 0.25em;">
<input type="color" value="#ff0000" style="margin: 0.25em; width: 50px; height: 40px; border: 1px solid #ccc;">
<input type="search" placeholder="Tìm kiếm..." style="padding: 0.5em; border: 1px solid #ccc; border-radius: 20px; margin: 0.25em; width: 200px;">`,
        explanation:
          'HTML5 input types cung cấp validation tự động và mobile keyboard optimization',
      },
    ],
  },
  {
    tag: 'header',
    name: 'Header',
    description: 'Thể hiện phần đầu của document hoặc section',
    usage: 'Site header, article header, section header',
    attributes: ['id', 'class', 'role'],
    category: 'semantic',
    level: 'intermediate',
    examples: [
      {
        code: `<!-- Page header -->
<header>
  <nav>
    <img src="/logo.png" alt="Company Logo">
    <ul>
      <li><a href="/">Trang chủ</a></li>
      <li><a href="/about">Giới thiệu</a></li>
      <li><a href="/contact">Liên hệ</a></li>
    </ul>
  </nav>
</header>

<!-- Article header -->
<article>
  <header>
    <h1>Tiêu đề bài viết</h1>
    <p>Tác giả: <strong>Nguyễn Văn A</strong></p>
    <time datetime="2024-01-15">15 tháng 1, 2024</time>
  </header>
  <p>Nội dung bài viết...</p>
</article>`,
        result: `<!-- Page header -->
<header style="background-color: #f8f9fa; padding: 1em; border-bottom: 1px solid #dee2e6;">
  <nav style="display: flex; align-items: center; justify-content: space-between;">
    <img src="/logo.png" alt="Company Logo" style="height: 40px;">
    <ul style="display: flex; list-style: none; margin: 0; padding: 0; gap: 1em;">
      <li><a href="/" style="color: #007bff; text-decoration: none; padding: 0.5em;">Trang chủ</a></li>
      <li><a href="/about" style="color: #007bff; text-decoration: none; padding: 0.5em;">Giới thiệu</a></li>
      <li><a href="/contact" style="color: #007bff; text-decoration: none; padding: 0.5em;">Liên hệ</a></li>
    </ul>
  </nav>
</header>

<!-- Article header -->
<article style="margin: 2em 0; padding: 1em; border: 1px solid #dee2e6; border-radius: 8px;">
  <header style="border-bottom: 1px solid #eee; padding-bottom: 1em; margin-bottom: 1em;">
    <h1 style="margin: 0 0 0.5em 0; font-size: 2em; color: #333;">Tiêu đề bài viết</h1>
    <p style="margin: 0.25em 0; color: #666;">Tác giả: <strong style="color: #333;">Nguyễn Văn A</strong></p>
    <time datetime="2024-01-15" style="color: #888; font-size: 0.9em;">15 tháng 1, 2024</time>
  </header>
  <p style="line-height: 1.6; color: #333;">Nội dung bài viết...</p>
</article>`,
        explanation: 'Header có thể chứa navigation, logo, title, metadata của section',
      },
    ],
  },
  {
    tag: 'nav',
    name: 'Navigation',
    description: 'Thể hiện section chứa navigation links',
    usage: 'Main navigation, breadcrumb, pagination',
    attributes: ['id', 'class', 'aria-label'],
    category: 'semantic',
    level: 'intermediate',
    examples: [
      {
        code: `<!-- Main navigation -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Trang chủ</a></li>
    <li><a href="/products">Sản phẩm</a></li>
    <li><a href="/about">Giới thiệu</a></li>
    <li><a href="/contact">Liên hệ</a></li>
  </ul>
</nav>

<!-- Breadcrumb navigation -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Trang chủ</a></li>
    <li><a href="/category">Danh mục</a></li>
    <li aria-current="page">Sản phẩm hiện tại</li>
  </ol>
</nav>`,
        result: `<!-- Main navigation -->
<nav aria-label="Main navigation" style="background-color: #343a40; padding: 1em;">
  <ul style="display: flex; list-style: none; margin: 0; padding: 0; gap: 2em;">
    <li><a href="/" aria-current="page" style="color: #fff; text-decoration: none; padding: 0.5em 1em; background-color: #007bff; border-radius: 4px;">Trang chủ</a></li>
    <li><a href="/products" style="color: #fff; text-decoration: none; padding: 0.5em 1em; border-radius: 4px; transition: background-color 0.3s;">Sản phẩm</a></li>
    <li><a href="/about" style="color: #fff; text-decoration: none; padding: 0.5em 1em; border-radius: 4px; transition: background-color 0.3s;">Giới thiệu</a></li>
    <li><a href="/contact" style="color: #fff; text-decoration: none; padding: 0.5em 1em; border-radius: 4px; transition: background-color 0.3s;">Liên hệ</a></li>
  </ul>
</nav>

<!-- Breadcrumb navigation -->
<nav aria-label="Breadcrumb" style="padding: 1em; background-color: #f8f9fa; border-bottom: 1px solid #dee2e6;">
  <ol style="display: flex; list-style: none; margin: 0; padding: 0; align-items: center;">
    <li><a href="/" style="color: #007bff; text-decoration: none;">Trang chủ</a><span style="margin: 0 0.5em; color: #6c757d;"> / </span></li>
    <li><a href="/category" style="color: #007bff; text-decoration: none;">Danh mục</a><span style="margin: 0 0.5em; color: #6c757d;"> / </span></li>
    <li aria-current="page" style="color: #6c757d;">Sản phẩm hiện tại</li>
  </ol>
</nav>`,
        explanation: 'aria-label giúp screen readers, aria-current="page" chỉ trang hiện tại',
      },
    ],
  },
  {
    tag: 'main',
    name: 'Main Content',
    description: 'Thể hiện nội dung chính của document, chỉ có một main per page',
    usage: 'Wrap nội dung chính, skip link target',
    attributes: ['id', 'class'],
    category: 'semantic',
    level: 'intermediate',
    examples: [
      {
        code: `<body>
  <header>
    <nav>...</nav>
  </header>

  <main id="main-content">
    <h1>Trang chủ</h1>
    <section>
      <h2>Tin tức mới nhất</h2>
      <article>...</article>
      <article>...</article>
    </section>

    <section>
      <h2>Sản phẩm nổi bật</h2>
      <div class="products">...</div>
    </section>
  </main>

  <footer>...</footer>
</body>`,
        result: `<body style="margin: 0; font-family: Arial, sans-serif; line-height: 1.6;">
  <header style="background-color: #f8f9fa; padding: 1em; border-bottom: 1px solid #dee2e6;">
    <nav style="color: #333;">...</nav>
  </header>

  <main id="main-content" style="max-width: 1200px; margin: 0 auto; padding: 2em 1em; min-height: 60vh;">
    <h1 style="font-size: 2.5em; color: #333; margin-bottom: 1em; text-align: center;">Trang chủ</h1>
    <section style="margin: 2em 0; padding: 1.5em; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h2 style="font-size: 1.8em; color: #333; margin-bottom: 1em; border-bottom: 2px solid #007bff; padding-bottom: 0.5em;">Tin tức mới nhất</h2>
      <article style="margin: 1em 0; padding: 1em; border-left: 4px solid #007bff; background-color: #f8f9fa;">...</article>
      <article style="margin: 1em 0; padding: 1em; border-left: 4px solid #007bff; background-color: #f8f9fa;">...</article>
    </section>

    <section style="margin: 2em 0; padding: 1.5em; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h2 style="font-size: 1.8em; color: #333; margin-bottom: 1em; border-bottom: 2px solid #007bff; padding-bottom: 0.5em;">Sản phẩm nổi bật</h2>
      <div class="products" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1em;">...</div>
    </section>
  </main>

  <footer style="background-color: #343a40; color: #fff; padding: 2em 1em; text-align: center;">...</footer>
</body>`,
        explanation: 'Chỉ có một <main> per page, giúp assistive technology jump to main content',
      },
    ],
  },
  {
    tag: 'section',
    name: 'Section',
    description: 'Thematic grouping of content, thường có heading',
    usage: 'Chia content thành các phần có chủ đề',
    attributes: ['id', 'class', 'aria-labelledby'],
    category: 'semantic',
    level: 'intermediate',
    examples: [
      {
        code: `<article>
  <h1>Hướng dẫn học HTML</h1>

  <section>
    <h2>Giới thiệu</h2>
    <p>HTML là ngôn ngữ markup...</p>
  </section>

  <section>
    <h2>Cài đặt môi trường</h2>
    <p>Bạn cần text editor...</p>
  </section>

  <section>
    <h2>Bài tập thực hành</h2>
    <p>Thực hiện các bài tập...</p>
  </section>
</article>`,
        result: `<article style="max-width: 800px; margin: 2em auto; padding: 2em; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <h1 style="font-size: 2.5em; color: #333; margin-bottom: 1.5em; text-align: center; border-bottom: 3px solid #007bff; padding-bottom: 0.5em;">Hướng dẫn học HTML</h1>

  <section style="margin: 2em 0; padding: 1.5em; border-left: 4px solid #28a745; background-color: #f8fff9;">
    <h2 style="font-size: 1.8em; color: #28a745; margin-bottom: 1em;">Giới thiệu</h2>
    <p style="line-height: 1.6; color: #333; margin: 0;">HTML là ngôn ngữ markup...</p>
  </section>

  <section style="margin: 2em 0; padding: 1.5em; border-left: 4px solid #ffc107; background-color: #fffef8;">
    <h2 style="font-size: 1.8em; color: #ffc107; margin-bottom: 1em;">Cài đặt môi trường</h2>
    <p style="line-height: 1.6; color: #333; margin: 0;">Bạn cần text editor...</p>
  </section>

  <section style="margin: 2em 0; padding: 1.5em; border-left: 4px solid #dc3545; background-color: #fff8f8;">
    <h2 style="font-size: 1.8em; color: #dc3545; margin-bottom: 1em;">Bài tập thực hành</h2>
    <p style="line-height: 1.6; color: #333; margin: 0;">Thực hiện các bài tập...</p>
  </section>
</article>`,
        explanation: 'Mỗi section có heading riêng, tạo outline structure cho document',
      },
    ],
  },
  {
    tag: 'article',
    name: 'Article',
    description: 'Standalone content có thể redistribute independent',
    usage: 'Blog posts, news articles, comments, widgets',
    attributes: ['id', 'class'],
    category: 'semantic',
    level: 'intermediate',
    examples: [
      {
        code: `<article>
  <header>
    <h2>Học HTML từ cơ bản đến nâng cao</h2>
    <p>Bởi <strong>Nguyễn Văn A</strong></p>
    <time datetime="2024-01-15">15 tháng 1, 2024</time>
  </header>

  <p>HTML là nền tảng của web development...</p>

  <section>
    <h3>Cấu trúc cơ bản</h3>
    <p>Mọi trang HTML đều có cấu trúc...</p>
  </section>

  <footer>
    <p>Tags: <a href="#html">HTML</a>, <a href="#web">Web Dev</a></p>
  </footer>
</article>`,
        result: `<article style="max-width: 700px; margin: 2em auto; padding: 2em; background-color: #fff; border: 1px solid #e9ecef; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <header style="border-bottom: 2px solid #f8f9fa; padding-bottom: 1.5em; margin-bottom: 1.5em;">
    <h2 style="font-size: 2em; color: #333; margin: 0 0 0.5em 0; line-height: 1.3;">Học HTML từ cơ bản đến nâng cao</h2>
    <p style="margin: 0.5em 0; color: #666; font-size: 0.95em;">Bởi <strong style="color: #333;">Nguyễn Văn A</strong></p>
    <time datetime="2024-01-15" style="color: #888; font-size: 0.9em; font-style: italic;">15 tháng 1, 2024</time>
  </header>

  <p style="line-height: 1.7; color: #333; margin: 1.5em 0; font-size: 1.1em;">HTML là nền tảng của web development...</p>

  <section style="margin: 2em 0; padding: 1.5em; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #007bff;">
    <h3 style="font-size: 1.4em; color: #007bff; margin: 0 0 1em 0;">Cấu trúc cơ bản</h3>
    <p style="line-height: 1.6; color: #333; margin: 0;">Mọi trang HTML đều có cấu trúc...</p>
  </section>

  <footer style="border-top: 1px solid #e9ecef; padding-top: 1.5em; margin-top: 2em;">
    <p style="margin: 0; color: #666; font-size: 0.9em;">Tags: <a href="#html" style="color: #007bff; text-decoration: none; background-color: #e7f3ff; padding: 0.2em 0.5em; border-radius: 3px; margin-right: 0.5em;">HTML</a>, <a href="#web" style="color: #007bff; text-decoration: none; background-color: #e7f3ff; padding: 0.2em 0.5em; border-radius: 3px;">Web Dev</a></p>
  </footer>
</article>`,
        explanation: 'Article có thể đứng riêng, syndicate, hoặc reuse ở context khác',
      },
    ],
  },
  {
    tag: 'footer',
    name: 'Footer',
    description: 'Thể hiện phần cuối của document hoặc section',
    usage: 'Site footer, article footer, section footer',
    attributes: ['id', 'class'],
    category: 'semantic',
    level: 'intermediate',
    examples: [
      {
        code: `<!-- Page footer -->
<footer>
  <section>
    <h3>Liên hệ</h3>
    <p>Email: contact@example.com</p>
    <p>Phone: 0123 456 789</p>
  </section>

  <section>
    <h3>Follow us</h3>
    <a href="#facebook">Facebook</a>
    <a href="#twitter">Twitter</a>
  </section>

  <p>&copy; 2024 Company Name. All rights reserved.</p>
</footer>

<!-- Article footer -->
<article>
  <h2>Bài viết</h2>
  <p>Nội dung...</p>
  <footer>
    <p>Xuất bản: <time datetime="2024-01-15">15/01/2024</time></p>
    <p>Tác giả: <a href="/author">Nguyễn Văn A</a></p>
  </footer>
</article>`,
        result: `<!-- Page footer -->
<footer style="background-color: #343a40; color: #fff; padding: 3em 2em 1em; margin-top: 3em;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2em; max-width: 1200px; margin: 0 auto;">
    <section style="margin-bottom: 2em;">
      <h3 style="color: #fff; font-size: 1.3em; margin-bottom: 1em; border-bottom: 2px solid #007bff; padding-bottom: 0.5em;">Liên hệ</h3>
      <p style="margin: 0.5em 0; color: #adb5bd;">Email: contact@example.com</p>
      <p style="margin: 0.5em 0; color: #adb5bd;">Phone: 0123 456 789</p>
    </section>

    <section style="margin-bottom: 2em;">
      <h3 style="color: #fff; font-size: 1.3em; margin-bottom: 1em; border-bottom: 2px solid #007bff; padding-bottom: 0.5em;">Follow us</h3>
      <a href="#facebook" style="color: #007bff; text-decoration: none; margin-right: 1em; padding: 0.5em; border: 1px solid #007bff; border-radius: 4px; display: inline-block; transition: all 0.3s;">Facebook</a>
      <a href="#twitter" style="color: #007bff; text-decoration: none; padding: 0.5em; border: 1px solid #007bff; border-radius: 4px; display: inline-block; transition: all 0.3s;">Twitter</a>
    </section>
  </div>

  <p style="text-align: center; margin-top: 2em; padding-top: 2em; border-top: 1px solid #495057; color: #adb5bd; font-size: 0.9em;">&copy; 2024 Company Name. All rights reserved.</p>
</footer>

<!-- Article footer -->
<article style="max-width: 600px; margin: 2em auto; padding: 2em; background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px;">
  <h2 style="font-size: 1.8em; color: #333; margin-bottom: 1em;">Bài viết</h2>
  <p style="line-height: 1.6; color: #333; margin: 1em 0;">Nội dung...</p>
  <footer style="border-top: 1px solid #e9ecef; padding-top: 1em; margin-top: 2em; background-color: #f8f9fa; padding: 1em; border-radius: 4px;">
    <p style="margin: 0.5em 0; color: #666; font-size: 0.9em;">Xuất bản: <time datetime="2024-01-15" style="color: #333; font-weight: 500;">15/01/2024</time></p>
    <p style="margin: 0.5em 0; color: #666; font-size: 0.9em;">Tác giả: <a href="/author" style="color: #007bff; text-decoration: none; font-weight: 500;">Nguyễn Văn A</a></p>
  </footer>
</article>`,
        explanation: 'Footer có thể chứa copyright, contact, metadata, related links',
      },
    ],
  },
];

const interviewFAQs: FAQ[] = [
  {
    id: 1,
    question: 'Sự khác biệt giữa <strong> và <b>, <em> và <i>?',
    answer:
      '<strong> và <em> có semantic meaning (ý nghĩa quan trọng/nhấn mạnh), tốt cho SEO và screen readers. <b> và <i> chỉ là visual styling không có semantic meaning. Search engines và assistive technology hiểu được <strong>/<em> nhưng không hiểu <b>/<i>.',
    level: 'junior',
    category: 'text',
  },
  {
    id: 2,
    question: 'Khi nào dùng <div> và khi nào dùng semantic elements?',
    answer:
      'Dùng semantic elements (header, nav, main, section, article, aside, footer) khi có ý nghĩa cụ thể. <div> chỉ dùng khi cần generic container cho styling hoặc JavaScript mà không có semantic meaning phù hợp. Quy tắc: semantic first, div cuối cùng.',
    level: 'junior',
    category: 'semantic',
  },
  {
    id: 3,
    question: 'Tại sao alt attribute bắt buộc cho images?',
    answer:
      'Alt attribute cung cấp text thay thế khi image không load được, quan trọng cho accessibility (screen readers đọc alt text), SEO (search engines index alt text), và tuân thủ web standards. HTML validator sẽ error nếu thiếu alt.',
    level: 'junior',
    category: 'media',
  },
  {
    id: 4,
    question: 'HTML5 form validation hoạt động như thế nào?',
    answer:
      'HTML5 cung cấp built-in validation: required (bắt buộc), pattern (regex), min/max (giới hạn), email/url types tự validate. Browser hiển thị error messages tự động. Có thể customize với CSS :valid/:invalid pseudo-classes và JavaScript Constraint Validation API để handle programmatically.',
    level: 'mid',
    category: 'forms',
  },
  {
    id: 5,
    question: 'Sự khác biệt giữa <section> và <article>?',
    answer:
      '<article> cho standalone content có thể đứng riêng (blog post, news article, product card). <section> cho thematic grouping of content trong document. <article> có thể chứa <section>, ngược lại cũng được tùy context. Test: content có thể syndicate riêng không?',
    level: 'mid',
    category: 'semantic',
  },
  {
    id: 6,
    question: 'Responsive images với <picture> và srcset?',
    answer:
      '<picture> cho art direction (different crops), <img srcset> cho resolution switching (same image, different sizes). Sử dụng <source> với media queries trong <picture>. srcset với sizes attribute optimize bandwidth. WebP format với fallback JPEG trong <picture>.',
    level: 'mid',
    category: 'media',
  },
  {
    id: 7,
    question: 'Table accessibility best practices?',
    answer:
      'Dùng <th> cho headers với scope="col/row", <caption> cho table description, <thead>/<tbody>/<tfoot> cho structure. Complex tables cần headers attribute linking cells. summary attribute (deprecated) → use <caption>. Role="table" cho CSS tables không dùng table elements.',
    level: 'mid',
    category: 'structure',
  },
  {
    id: 8,
    question: 'HTML5 input types và progressive enhancement?',
    answer:
      'HTML5 thêm email, url, tel, search, number, range, date, color, etc. Browsers không support sẽ fallback về text type. Progressive enhancement - functionality vẫn work, chỉ mất enhanced UX. Feature detection với Modernizr hoặc JavaScript để add polyfills.',
    level: 'mid',
    category: 'forms',
  },
  {
    id: 9,
    question: 'Lazy loading images và performance impact?',
    answer:
      'loading="lazy" defer image loading until intersection với viewport. Giảm initial page load time, save bandwidth. Browser quyết định khi nào load (implementation-specific). Không dùng cho above-the-fold images. Fallback với Intersection Observer API cho older browsers.',
    level: 'senior',
    category: 'media',
  },
  {
    id: 10,
    question: 'Form security considerations trong HTML?',
    answer:
      'CSRF tokens trong hidden inputs, client-side validation chỉ là UX (luôn validate server-side), sanitize/escape data output, proper encoding. novalidate attribute disable HTML5 validation. autocomplete="off" cho sensitive fields. HTTPS mandatory cho form submission.',
    level: 'senior',
    category: 'forms',
  },
  {
    id: 11,
    question: 'Custom form controls và accessibility compliance?',
    answer:
      'Dùng ARIA roles (button, textbox, listbox), states (aria-expanded, aria-selected), properties (aria-label, aria-describedby). Keyboard navigation support (Tab, Enter, Arrow keys), focus management, screen reader announcements. Progressive enhancement từ native controls. Follow WAI-ARIA authoring practices.',
    level: 'senior',
    category: 'forms',
  },
  {
    id: 12,
    question: 'Microdata vs JSON-LD cho structured data?',
    answer:
      'Microdata sử dụng itemscope, itemtype, itemprop attributes inline với HTML. JSON-LD trong <script type="application/ld+json"> preferred bởi Google. Schema.org vocabulary cho products, events, organizations. Rich snippets improvement cho search results. Test với Google Search Console.',
    level: 'senior',
    category: 'semantic',
  },
];

export default function HTMLEssentialTagsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [filterLevel, setFilterLevel] = useState<'all' | 'junior' | 'mid' | 'senior'>('all');
  const [filterCategory, setFilterCategory] = useState<'all' | string>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string>('h1-h6');
  const [showResults, setShowResults] = useState<{ [key: string]: boolean }>({});

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const toggleResult = (tagId: string, exampleIndex: number) => {
    const key = `${tagId}-${exampleIndex}`;
    setShowResults(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const copyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const filteredFAQs = interviewFAQs.filter(faq => {
    const levelMatch = filterLevel === 'all' || faq.level === filterLevel;
    const categoryMatch = filterCategory === 'all' || faq.category === filterCategory;
    return levelMatch && categoryMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'junior':
        return 'bg-green-100 text-green-800';
      case 'mid':
        return 'bg-yellow-100 text-yellow-800';
      case 'senior':
        return 'bg-red-100 text-red-800';
      case 'basic':
        return 'bg-blue-100 text-blue-800';
      case 'intermediate':
        return 'bg-purple-100 text-purple-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'text':
        return 'bg-blue-100 text-blue-800';
      case 'structure':
        return 'bg-purple-100 text-purple-800';
      case 'media':
        return 'bg-orange-100 text-orange-800';
      case 'form':
      case 'forms':
        return 'bg-teal-100 text-teal-800';
      case 'semantic':
        return 'bg-pink-100 text-pink-800';
      case 'meta':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <HTMLLayout
      currentLesson="Các thẻ HTML quan trọng"
      tableOfContents={HTML_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 text-lg">
            <Tags className="w-5 h-5 mr-2" />
            Essential HTML Tags
          </Badge>

          <h1 className="text-5xl font-bold text-gray-900" id="essential-tags">
            🏷️ Các Thẻ HTML Quan Trọng
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tham khảo chi tiết các thẻ HTML cơ bản với cách sử dụng, attributes, ví dụ thực tế và
            kết quả hiển thị. Từ text formatting đến semantic elements.
          </p>
        </div>

        {/* Tag Navigation */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="tag-reference"
          >
            <BookOpen className="w-8 h-8 text-orange-600" />
            Tham khảo thẻ HTML
          </h2>

          {/* Tag Navigation */}
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg">
            {htmlTags.map(tag => (
              <Button
                key={tag.tag}
                size="sm"
                variant={activeTag === tag.tag ? 'default' : 'outline'}
                onClick={() => setActiveTag(tag.tag)}
                className="text-xs"
              >
                &lt;{tag.tag}&gt;
              </Button>
            ))}
          </div>

          {/* Active Tag Details */}
          {htmlTags
            .filter(tag => tag.tag === activeTag)
            .map(tag => (
              <Card key={tag.tag} className="shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <code className="bg-gray-100 px-3 py-1 rounded text-orange-600">
                          &lt;{tag.tag}&gt;
                        </code>
                        {tag.name}
                      </CardTitle>
                      <p className="text-gray-600 mt-3 text-lg">{tag.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getCategoryColor(tag.category)}>
                        {tag.category.toUpperCase()}
                      </Badge>
                      <Badge className={getLevelColor(tag.level)}>{tag.level.toUpperCase()}</Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Usage & Attributes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-orange-600" />
                        Mục đích sử dụng
                      </h4>
                      <p className="text-gray-700 text-sm bg-blue-50 p-3 rounded-lg">{tag.usage}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4 text-orange-600" />
                        Attributes chính
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {tag.attributes.map(attr => (
                          <code key={attr} className="text-xs bg-gray-100 px-2 py-1 rounded border">
                            {attr}
                          </code>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="space-y-6">
                    <h4 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                      <Code className="w-5 h-5 text-orange-600" />
                      Ví dụ thực tế
                    </h4>

                    {tag.examples.map((example, index) => (
                      <div key={index} className="border rounded-lg p-6 bg-white">
                        <div className="space-y-4">
                          {/* Code Block */}
                          <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium text-gray-800">HTML Code:</h5>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => toggleResult(tag.tag, index)}
                                  className="text-xs"
                                >
                                  <Eye className="w-3 h-3 mr-1" />
                                  {showResults[`${tag.tag}-${index}`] ? 'Ẩn' : 'Xem'} kết quả
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => copyCode(example.code, `${tag.tag}-${index}`)}
                                  className="text-xs"
                                >
                                  {copiedCode === `${tag.tag}-${index}` ? (
                                    <Check className="w-3 h-3" />
                                  ) : (
                                    <Copy className="w-3 h-3" />
                                  )}
                                </Button>
                              </div>
                            </div>
                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                              <pre className="text-green-400 text-sm font-mono">
                                <code>{example.code}</code>
                              </pre>
                            </div>
                          </div>

                          {/* Result */}
                          {showResults[`${tag.tag}-${index}`] && (
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                              <h5 className="font-medium text-orange-800 mb-2">
                                Kết quả HTML thực tế:
                              </h5>
                              <div className="bg-white border rounded p-3 overflow-x-auto">
                                <pre className="text-sm font-mono text-gray-700">
                                  <code>{example.result}</code>
                                </pre>
                              </div>
                            </div>
                          )}

                          {/* Explanation */}
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                            <h5 className="font-medium text-blue-800 mb-2">💡 Giải thích:</h5>
                            <p className="text-blue-700 text-sm">{example.explanation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </section>

        {/* Quick Reference Table */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="quick-reference"
          >
            <Target className="w-8 h-8 text-orange-600" />
            Bảng tham khảo nhanh
          </h2>

          <Card className="shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thẻ
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tên
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mục đích
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Level
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {htmlTags.map((tag, index) => (
                      <tr
                        key={tag.tag}
                        className={`hover:bg-gray-50 cursor-pointer ${
                          activeTag === tag.tag ? 'bg-orange-50' : ''
                        }`}
                        onClick={() => setActiveTag(tag.tag)}
                      >
                        <td className="px-4 py-3 whitespace-nowrap">
                          <code className="text-orange-600 font-medium">&lt;{tag.tag}&gt;</code>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                          {tag.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 max-w-xs">{tag.usage}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge className={getCategoryColor(tag.category)} variant="secondary">
                            {tag.category}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge className={getLevelColor(tag.level)} variant="secondary">
                            {tag.level}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Practices */}
        <section className="space-y-6">
          <h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-3"
            id="best-practices"
          >
            <Lightbulb className="w-8 h-8 text-orange-600" />
            Best Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                  ✅ Nên làm
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    Sử dụng semantic HTML elements có ý nghĩa thay vì div generic
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    Luôn có alt attribute cho images, aria-label cho interactive elements
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    Dùng labels với form inputs, fieldset để group related inputs
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    Chỉ có một h1 trên mỗi trang, heading hierarchy tuần tự
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    Dùng strong/em thay vì b/i cho semantic meaning
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-green-700 text-sm">
                    Validate HTML với W3C validator, test với screen readers
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800 flex items-center gap-2">
                  ❌ Không nên làm
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Dùng tables cho layout (chỉ dùng cho tabular data)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Bỏ qua alt attribute cho images hoặc dùng alt="" cho decorative images
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Sử dụng inline styles thay vì external CSS
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Nested headings không đúng thứ tự (h1 → h3, skip h2)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Quên đóng thẻ HTML hoặc nest incorrectly
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-red-700 text-sm">
                    Dùng deprecated attributes như bgcolor, align, center
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interview FAQ Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2
              className="text-3xl font-bold text-gray-900 flex items-center gap-3"
              id="interview-faqs"
            >
              <HelpCircle className="w-8 h-8 text-orange-600" />
              Câu hỏi phỏng vấn về HTML Tags
            </h2>

            <Badge className="bg-orange-100 text-orange-800">{filteredFAQs.length} câu hỏi</Badge>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Level:</span>
              <div className="flex gap-2">
                {['all', 'junior', 'mid', 'senior'].map(level => (
                  <Button
                    key={level}
                    size="sm"
                    variant={filterLevel === level ? 'default' : 'outline'}
                    onClick={() => setFilterLevel(level as any)}
                    className="text-xs"
                  >
                    {level === 'all' ? 'Tất cả' : level.charAt(0).toUpperCase() + level.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Category:</span>
              <div className="flex gap-2">
                {['all', 'text', 'structure', 'media', 'forms', 'semantic'].map(category => (
                  <Button
                    key={category}
                    size="sm"
                    variant={filterCategory === category ? 'default' : 'outline'}
                    onClick={() => setFilterCategory(category)}
                    className="text-xs"
                  >
                    {category === 'all' ? 'Tất cả' : category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map(faq => (
              <Card key={faq.id} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={getLevelColor(faq.level)}>
                          {faq.level.toUpperCase()}
                        </Badge>
                        <Badge className={getCategoryColor(faq.category)}>
                          {faq.category.toUpperCase()}
                        </Badge>
                      </div>
                      <CardTitle
                        className="text-lg cursor-pointer hover:text-orange-600 transition-colors"
                        onClick={() => toggleFAQ(faq.id)}
                      >
                        {faq.question}
                      </CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFAQ(faq.id)}
                      className="ml-4"
                    >
                      {openFAQ === faq.id ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </div>
                </CardHeader>

                {openFAQ === faq.id && (
                  <CardContent className="border-t bg-gray-50">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <h3 className="font-bold text-blue-900 text-lg mb-3">📝 Tóm tắt bài học</h3>
          <ul className="space-y-2 text-blue-800">
            <li>
              • HTML tags được phân loại theo chức năng: text, structure, media, forms, semantic,
              meta
            </li>
            <li>• Mỗi thẻ có purpose riêng, attributes specific và cách sử dụng best practices</li>
            <li>
              • Semantic HTML elements tốt hơn div generic cho SEO, accessibility và maintainability
            </li>
            <li>
              • Alt attribute bắt buộc cho images, labels cần thiết cho form inputs accessibility
            </li>
            <li>• HTML5 cung cấp nhiều input types, validation attributes và semantic elements</li>
            <li>• Luôn validate HTML, test accessibility và follow semantic structure</li>
          </ul>
        </section>
      </div>
    </HTMLLayout>
  );
}

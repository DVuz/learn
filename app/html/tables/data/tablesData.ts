// Dữ liệu cho việc học HTML Tables bằng tiếng Việt
export interface TableElement {
  element: string;
  description: string;
  purpose: string;
  attributes: string[];
  modernApproach: string;
}

export interface TableType {
  type: string;
  description: string;
  useCase: string;
  complexity: string;
  accessibilityNotes: string;
}

export interface AdvancedConcept {
  title: string;
  description: string;
  example: string;
  useCase: string;
}

export interface BestPractice {
  title: string;
  description: string;
  example: string;
  benefit: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  level: 'junior' | 'mid' | 'senior';
  category: string;
  detailed: boolean;
}

export interface CodeExample {
  title: string;
  description: string;
  code: string;
  render?: React.ReactNode;
  explanation: string;
}

export interface CodeCategory {
  category: string;
  examples: CodeExample[];
}

// Lý thuyết cơ bản về HTML Tables
export const tablesTheory = {
  introduction: {
    title: 'Giới thiệu về Bảng HTML',
    content: [
      'Bảng HTML là công cụ mạnh mẽ để hiển thị dữ liệu dạng bảng một cách có tổ chức và ngữ nghĩa.',
      'Bảng cung cấp cấu trúc rõ ràng cho mối quan hệ dữ liệu với hàng, cột, tiêu đề và chú thích.',
      'Phát triển web hiện đại sử dụng bảng để trình bày dữ liệu, không phải cho mục đích bố cục.',
      'Việc triển khai bảng đúng cách rất quan trọng cho khả năng tiếp cận, SEO và thiết kế responsive.',
    ],
    importance: [
      'Tổ chức dữ liệu: Bảng cung cấp cấu trúc tự nhiên cho việc trình bày dữ liệu dạng bảng',
      'Khả năng tiếp cận: Trình đọc màn hình điều hướng bảng hiệu quả với đánh dấu ngữ nghĩa phù hợp',
      'Lợi ích SEO: Công cụ tìm kiếm hiểu mối quan hệ dữ liệu và nội dung có cấu trúc',
      'Thiết kế responsive: Kỹ thuật CSS hiện đại làm cho bảng thân thiện với thiết bị di động',
      'Trải nghiệm người dùng: Bảng có cấu trúc tốt cải thiện khả năng hiểu dữ liệu và khả năng sử dụng',
      'Tuân thủ tiêu chuẩn: Bảng ngữ nghĩa tuân theo tiêu chuẩn HTML và thực hành tốt nhất',
    ],
  },
  elements: [
    {
      element: 'table',
      description: 'Phần tử chứa cho toàn bộ cấu trúc bảng',
      purpose: 'Định nghĩa ranh giới bảng và cung cấp ngữ cảnh ngữ nghĩa',
      attributes: [
        'border - Độ rộng viền bảng (không khuyến khích, sử dụng CSS)',
        'cellpadding - Khoảng cách trong ô (không khuyến khích, sử dụng CSS)',
        'cellspacing - Khoảng cách giữa các ô (không khuyến khích, sử dụng CSS)',
        'summary - Mô tả bảng cho khả năng tiếp cận (không khuyến khích)',
      ],
      modernApproach: 'Sử dụng CSS cho styling và thuộc tính ARIA cho khả năng tiếp cận',
    },
    {
      element: 'caption',
      description: 'Tiêu đề hoặc mô tả bảng',
      purpose: 'Cung cấp tiêu đề có thể tiếp cận cho nội dung bảng',
      attributes: [],
      modernApproach: 'Thiết yếu cho khả năng tiếp cận, luôn mô tả mục đích của bảng',
    },
    {
      element: 'thead',
      description: 'Nhóm phần tiêu đề bảng',
      purpose: 'Nhóm các hàng tiêu đề một cách ngữ nghĩa',
      attributes: [],
      modernApproach: 'Giúp trình đọc màn hình xác định thông tin tiêu đề',
    },
    {
      element: 'tbody',
      description: 'Nhóm nội dung thân bảng',
      purpose: 'Nhóm các hàng dữ liệu chính',
      attributes: [],
      modernApproach: 'Tách biệt dữ liệu khỏi tiêu đề và chân trang một cách ngữ nghĩa',
    },
    {
      element: 'tfoot',
      description: 'Nhóm phần chân bảng',
      purpose: 'Nhóm các hàng chân trang như tổng hoặc tóm tắt',
      attributes: [],
      modernApproach: 'Hữu ích cho dữ liệu tóm tắt và tính toán',
    },
    {
      element: 'tr',
      description: 'Vùng chứa hàng bảng',
      purpose: 'Định nghĩa hàng ngang của các ô',
      attributes: [],
      modernApproach: 'Khối xây dựng cơ bản cho cấu trúc bảng',
    },
    {
      element: 'th',
      description: 'Ô tiêu đề bảng',
      purpose: 'Định nghĩa các ô tiêu đề với ý nghĩa ngữ nghĩa',
      attributes: [
        'scope - Định nghĩa mối quan hệ tiêu đề (row, col, rowgroup, colgroup)',
        'colspan - Kéo dài nhiều cột',
        'rowspan - Kéo dài nhiều hàng',
        'headers - Tham chiếu đến các ô tiêu đề khác',
      ],
      modernApproach: 'Quan trọng cho khả năng tiếp cận với thuộc tính scope phù hợp',
    },
    {
      element: 'td',
      description: 'Ô dữ liệu bảng',
      purpose: 'Chứa dữ liệu bảng thực tế',
      attributes: [
        'colspan - Kéo dài nhiều cột',
        'rowspan - Kéo dài nhiều hàng',
        'headers - Tham chiếu đến các ô tiêu đề',
      ],
      modernApproach: 'Sử dụng thuộc tính headers cho mối quan hệ bảng phức tạp',
    },
  ] as TableElement[],
  tableTypes: [
    {
      type: 'Bảng dữ liệu đơn giản',
      description: 'Bảng cơ bản với một hàng tiêu đề đơn',
      useCase: 'Danh sách sản phẩm, thông tin liên hệ, bộ dữ liệu đơn giản',
      complexity: 'Thấp',
      accessibilityNotes: 'Yêu cầu tiêu đề cột với scope phù hợp',
    },
    {
      type: 'Bảng dữ liệu phức tạp',
      description: 'Bảng với nhiều cấp tiêu đề hoặc ô được hợp nhất',
      useCase: 'Báo cáo tài chính, dữ liệu đa chiều, dữ liệu khoa học',
      complexity: 'Cao',
      accessibilityNotes: 'Cần mối quan hệ tiêu đề toàn diện và hỗ trợ ARIA',
    },
    {
      type: 'Bảng responsive',
      description: 'Bảng được điều chỉnh cho các kích thước màn hình khác nhau',
      useCase: 'Thiết kế mobile-first, hiển thị dashboard',
      complexity: 'Trung bình',
      accessibilityNotes: 'Duy trì cấu trúc ngữ nghĩa trên các viewport',
    },
    {
      type: 'Bảng tương tác',
      description: 'Bảng với sắp xếp, lọc, phân trang',
      useCase: 'Dashboard quản trị, giao diện quản lý dữ liệu',
      complexity: 'Cao',
      accessibilityNotes: 'Yêu cầu vùng live ARIA và điều hướng bàn phím',
    },
  ] as TableType[],
};

// Khái niệm nâng cao
export const advancedConcepts: AdvancedConcept[] = [
  {
    title: 'Khả năng tiếp cận bảng phức tạp',
    description: 'Làm cho bảng phức tạp có thể tiếp cận được với ARIA và đánh dấu phù hợp',
    example: `<!-- Bảng phức tạp với nhiều tiêu đề -->
<table role="table" aria-labelledby="table-title">
  <caption id="table-title">
    Báo cáo doanh thu theo quý và khu vực theo danh mục sản phẩm
  </caption>

  <thead>
    <tr>
      <th rowspan="2" scope="col" id="region">Khu vực</th>
      <th colspan="3" scope="colgroup" id="products">Danh mục sản phẩm</th>
      <th rowspan="2" scope="col" id="total">Tổng</th>
    </tr>
    <tr>
      <th scope="col" id="electronics" headers="products">Điện tử</th>
      <th scope="col" id="clothing" headers="products">Thời trang</th>
      <th scope="col" id="books" headers="products">Sách</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row" id="north" headers="region">Miền Bắc</th>
      <td headers="north electronics products">3.250.000.000 ₫</td>
      <td headers="north clothing products">2.275.000.000 ₫</td>
      <td headers="north books products">1.170.000.000 ₫</td>
      <th scope="row" headers="north total">6.695.000.000 ₫</th>
    </tr>
    <tr>
      <th scope="row" id="central" headers="region">Miền Trung</th>
      <td headers="central electronics products">2.100.000.000 ₫</td>
      <td headers="central clothing products">1.800.000.000 ₫</td>
      <td headers="central books products">900.000.000 ₫</td>
      <th scope="row" headers="central total">4.800.000.000 ₫</th>
    </tr>
    <tr>
      <th scope="row" id="south" headers="region">Miền Nam</th>
      <td headers="south electronics products">4.200.000.000 ₫</td>
      <td headers="south clothing products">3.150.000.000 ₫</td>
      <td headers="south books products">1.575.000.000 ₫</td>
      <th scope="row" headers="south total">8.925.000.000 ₫</th>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th scope="row">Tổng cộng</th>
      <td>9.550.000.000 ₫</td>
      <td>7.225.000.000 ₫</td>
      <td>3.645.000.000 ₫</td>
      <th>20.420.000.000 ₫</th>
    </tr>
  </tfoot>
</table>`,
    useCase: 'Báo cáo tài chính, dữ liệu khoa học, bộ dữ liệu đa chiều',
  },
  {
    title: 'Chiến lược bảng responsive',
    description: 'Phương pháp tiếp cận hiện đại cho bảng thân thiện với thiết bị di động',
    example: `<!-- Bảng responsive dựa trên CSS -->
<div class="table-container">
  <table class="responsive-table">
    <thead>
      <tr>
        <th data-label="Tên">Tên</th>
        <th data-label="Email">Email</th>
        <th data-label="Điện thoại">Điện thoại</th>
        <th data-label="Trạng thái">Trạng thái</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Tên">Nguyễn Văn An</td>
        <td data-label="Email">an.nguyen@example.com</td>
        <td data-label="Điện thoại">0912 345 678</td>
        <td data-label="Trạng thái">Hoạt động</td>
      </tr>
      <tr>
        <td data-label="Tên">Trần Thị Bình</td>
        <td data-label="Email">binh.tran@example.com</td>
        <td data-label="Điện thoại">0987 654 321</td>
        <td data-label="Trạng thái">Tạm khóa</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
/* Phương pháp responsive mobile-first */
@media (max-width: 768px) {
  .responsive-table thead {
    display: none;
  }

  .responsive-table tr {
    display: block;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
  }

  .responsive-table td {
    display: block;
    text-align: right;
    border: none;
    padding: 0.5rem;
  }

  .responsive-table td:before {
    content: attr(data-label) ": ";
    font-weight: bold;
    float: left;
  }
}
</style>`,
    useCase: 'Bảng dữ liệu responsive cho thiết bị di động, thành phần dashboard',
  },
  {
    title: 'Tối ưu hóa hiệu suất bảng',
    description: 'Tối ưu hóa bảng lớn cho hiệu suất và trải nghiệm người dùng',
    example: `<!-- Khái niệm bảng cuộn ảo -->
<div class="table-wrapper" data-total-rows="10000">
  <table class="virtual-table">
    <thead class="sticky-header">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Tên</th>
        <th scope="col">Email</th>
        <th scope="col">Ngày tạo</th>
      </tr>
    </thead>
    <tbody class="virtual-tbody" style="height: 400px; overflow-y: auto;">
      <!-- Các hàng được render động -->
      <tr data-row-index="0">
        <td>1</td>
        <td>Nguyễn Văn An</td>
        <td>an@example.com</td>
        <td>15/01/2024</td>
      </tr>
      <tr data-row-index="1">
        <td>2</td>
        <td>Trần Thị Bình</td>
        <td>binh@example.com</td>
        <td>16/01/2024</td>
      </tr>
      <!-- Thêm các hàng được tải khi cuộn -->
    </tbody>
  </table>
</div>

<!-- Điều khiển phân trang -->
<nav aria-label="Phân trang bảng">
  <button type="button" aria-label="Trang trước">Trước</button>
  <span aria-current="page">Trang 1 trong 100</span>
  <button type="button" aria-label="Trang sau">Sau</button>
</nav>`,
    useCase: 'Bộ dữ liệu lớn, dashboard quản trị, hệ thống quản lý dữ liệu',
  },
];

// Thực hành tốt nhất với giải thích chi tiết
export const bestPractices = {
  semantic: [
    {
      title: 'Luôn sử dụng phần tử table cho dữ liệu dạng bảng',
      description: 'Sử dụng đánh dấu bảng phù hợp thay vì div với CSS table display',
      example: 'Đúng: <table><tr><td> vs Sai: <div class="table">',
      benefit: 'Trình đọc màn hình hiểu cấu trúc bảng và cung cấp trợ giúp điều hướng',
    },
    {
      title: 'Cung cấp caption có ý nghĩa',
      description: 'Mọi bảng cần caption mô tả mục đích và nội dung của nó',
      example: '<caption>Báo cáo doanh thu hàng tháng cho Q1 2024</caption>',
      benefit: 'Người dùng hiểu ngữ cảnh bảng trước khi đọc dữ liệu',
    },
    {
      title: 'Sử dụng đánh dấu tiêu đề phù hợp',
      description: 'Phân biệt ô tiêu đề (th) với ô dữ liệu (td) một cách nhất quán',
      example: 'Tiêu đề với scope="col" hoặc scope="row"',
      benefit: 'Mối quan hệ dữ liệu rõ ràng cho công nghệ hỗ trợ',
    },
  ] as BestPractice[],
  accessibility: [
    {
      title: 'Triển khai thuộc tính scope phù hợp',
      description: 'Sử dụng scope để định nghĩa mối quan hệ tiêu đề cho bảng phức tạp',
      example: '<th scope="col"> cho tiêu đề cột, <th scope="row"> cho tiêu đề hàng',
      benefit: 'Trình đọc màn hình thông báo tiêu đề liên quan với mỗi ô',
    },
    {
      title: 'Thêm thông tin tóm tắt',
      description: 'Cung cấp tóm tắt bảng cho cấu trúc dữ liệu phức tạp',
      example: 'Sử dụng aria-describedby để tham chiếu mô tả chi tiết',
      benefit: 'Người dùng hiểu độ phức tạp của bảng trước khi điều hướng',
    },
    {
      title: 'Đảm bảo điều hướng bàn phím',
      description: 'Bảng phải có thể điều hướng chỉ bằng bàn phím',
      example: 'Quản lý focus phù hợp và thứ tự tab',
      benefit: 'Có thể tiếp cận cho người dùng không thể sử dụng chuột',
    },
  ] as BestPractice[],
  performance: [
    {
      title: 'Tối ưu hóa bảng lớn',
      description: 'Triển khai phân trang hoặc cuộn ảo cho bộ dữ liệu lớn',
      example: 'Tải 50-100 hàng mỗi lần, triển khai lazy loading',
      benefit: 'Hiệu suất tốt hơn và trải nghiệm người dùng',
    },
    {
      title: 'Sử dụng CSS cho styling',
      description: 'Tránh thuộc tính HTML không được khuyến khích, sử dụng CSS cho giao diện',
      example: 'CSS border, padding, background thay vì thuộc tính HTML',
      benefit: 'Tách biệt mối quan tâm và mã có thể bảo trì',
    },
    {
      title: 'Triển khai chiến lược responsive',
      description: 'Thiết kế bảng hoạt động trên tất cả kích thước thiết bị',
      example: 'Cuộn ngang, bố cục thẻ, hoặc phương pháp xếp chồng',
      benefit: 'Trải nghiệm người dùng nhất quán trên các thiết bị',
    },
  ] as BestPractice[],
};

// Dữ liệu FAQ với câu trả lời toàn diện
export const tablesFAQs: FAQ[] = [
  {
    id: 1,
    question: 'Khi nào nên sử dụng bảng thay vì CSS Grid hoặc Flexbox?',
    answer:
      'Sử dụng bảng khi dữ liệu có tính chất dạng bảng với mối quan hệ hàng và cột rõ ràng. CSS Grid/Flexbox tốt hơn cho mục đích bố cục. Bảng cung cấp ý nghĩa ngữ nghĩa cho mối quan hệ dữ liệu mà các công cụ bố cục không có.',
    level: 'junior',
    category: 'ngữ nghĩa',
    detailed: true,
  },
  {
    id: 2,
    question: 'Làm thế nào để làm cho bảng responsive mà không mất ngữ nghĩa?',
    answer:
      'Sử dụng kỹ thuật CSS như vùng chứa cuộn ngang, chuyển đổi bảng thành bố cục thẻ trên thiết bị di động, hoặc triển khai cột ưu tiên. Luôn duy trì đánh dấu bảng cho khả năng tiếp cận trong khi điều chỉnh trình bày trực quan.',
    level: 'mid',
    category: 'responsive',
    detailed: true,
  },
  {
    id: 3,
    question: 'Thực hành tốt nhất cho khả năng tiếp cận bảng phức tạp?',
    answer:
      'Sử dụng thuộc tính scope phù hợp, triển khai mối quan hệ tiêu đề với thuộc tính headers, cung cấp caption toàn diện, thêm aria-describedby cho mô tả chi tiết, đảm bảo điều hướng bàn phím hoạt động đúng cách.',
    level: 'mid',
    category: 'khả năng tiếp cận',
    detailed: true,
  },
  {
    id: 4,
    question: 'Chiến lược tối ưu hóa hiệu suất cho bảng lớn?',
    answer:
      'Triển khai cuộn ảo, phân trang, lazy loading, sử dụng thuộc tính contain CSS, giảm thiểu thao tác DOM, xem xét lọc và sắp xếp phía máy chủ cho bộ dữ liệu rất lớn.',
    level: 'senior',
    category: 'hiệu suất',
    detailed: true,
  },
  {
    id: 5,
    question: 'Tác động SEO của cấu trúc và nội dung bảng?',
    answer:
      'Đánh dấu bảng phù hợp giúp công cụ tìm kiếm hiểu mối quan hệ dữ liệu. Sử dụng caption mô tả, văn bản tiêu đề có ý nghĩa, đánh dấu dữ liệu có cấu trúc cho rich snippets nâng cao, hệ thống tiêu đề phù hợp xung quanh bảng.',
    level: 'senior',
    category: 'seo',
    detailed: true,
  },
  {
    id: 6,
    question: 'Triển khai bảng hiện đại với JavaScript frameworks?',
    answer:
      'Duy trì cấu trúc HTML ngữ nghĩa, triển khai thuộc tính ARIA phù hợp, xử lý cập nhật nội dung động với vùng live, đảm bảo server-side rendering cho SEO, tối ưu hóa cho hiệu suất hydration.',
    level: 'senior',
    category: 'nâng cao',
    detailed: true,
  },
];

// Ví dụ mã với thành phần render
export const codeExamples: CodeCategory[] = [
  {
    category: 'Bảng cơ bản',
    examples: [
      {
        title: 'Bảng dữ liệu đơn giản',
        description: 'Cấu trúc bảng cơ bản với tiêu đề và dữ liệu',
        code: `<table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;">
  <caption style="font-size: 1.2em; font-weight: bold; margin-bottom: 10px; color: #333;">
    Thông tin liên hệ nhân viên
  </caption>
  <thead>
    <tr style="background-color: #f8f9fa;">
      <th scope="col" style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Tên</th>
      <th scope="col" style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Phòng ban</th>
      <th scope="col" style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Email</th>
      <th scope="col" style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Điện thoại</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #fff;">
      <th scope="row" style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">Nguyễn Văn An</th>
      <td style="border: 1px solid #ddd; padding: 12px;">Kỹ thuật</td>
      <td style="border: 1px solid #ddd; padding: 12px;">an@congty.com</td>
      <td style="border: 1px solid #ddd; padding: 12px;">0912 345 678</td>
    </tr>
    <tr style="background-color: #f8f9fa;">
      <th scope="row" style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">Trần Thị Bình</th>
      <td style="border: 1px solid #ddd; padding: 12px;">Marketing</td>
      <td style="border: 1px solid #ddd; padding: 12px;">binh@congty.com</td>
      <td style="border: 1px solid #ddd; padding: 12px;">0987 654 321</td>
    </tr>
    <tr style="background-color: #fff;">
      <th scope="row" style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">Lê Minh Cường</th>
      <td style="border: 1px solid #ddd; padding: 12px;">Bán hàng</td>
      <td style="border: 1px solid #ddd; padding: 12px;">cuong@congty.com</td>
      <td style="border: 1px solid #ddd; padding: 12px;">0909 123 456</td>
    </tr>
  </tbody>
</table>`,
        explanation:
          'Bảng cơ bản với cấu trúc ngữ nghĩa phù hợp: caption, thead, tbody, và thuộc tính scope thích hợp.',
      },
      {
        title: 'Bảng có phần chân trang',
        description: 'Bảng bao gồm thông tin tóm tắt trong phần chân trang',
        code: `<table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;">
  <caption style="font-size: 1.2em; font-weight: bold; margin-bottom: 10px; color: #333;">
    Tóm tắt doanh thu theo quý
  </caption>
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th scope="col" style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Quý</th>
      <th scope="col" style="border: 1px solid #ddd; padding: 12px; text-align: right; font-weight: bold;">Doanh thu</th>
      <th scope="col" style="border: 1px solid #ddd; padding: 12px; text-align: right; font-weight: bold;">Chi phí</th>
      <th scope="col" style="border: 1px solid #ddd; padding: 12px; text-align: right; font-weight: bold;">Lợi nhuận</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #fff;">
      <th scope="row" style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">Q1 2024</th>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">3.250.000.000 ₫</td>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">1.950.000.000 ₫</td>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right; color: #2e7d32;">1.300.000.000 ₫</td>
    </tr>
    <tr style="background-color: #f5f5f5;">
      <th scope="row" style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">Q2 2024</th>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">3.900.000.000 ₫</td>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">2.210.000.000 ₫</td>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right; color: #2e7d32;">1.690.000.000 ₫</td>
    </tr>
    <tr style="background-color: #fff;">
      <th scope="row" style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">Q3 2024</th>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">4.550.000.000 ₫</td>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">2.470.000.000 ₫</td>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right; color: #2e7d32;">2.080.000.000 ₫</td>
    </tr>
  </tbody>
  <tfoot>
    <tr style="background-color: #1976d2; color: white;">
      <th scope="row" style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">Tổng cộng</th>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right; font-weight: bold;">11.700.000.000 ₫</td>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right; font-weight: bold;">6.630.000.000 ₫</td>
      <td style="border: 1px solid #ddd; padding: 12px; text-align: right; font-weight: bold;">5.070.000.000 ₫</td>
    </tr>
  </tfoot>
</table>`,
        explanation:
          'Bảng với phần tử tfoot cho dữ liệu tóm tắt. Các hàng chân trang thường chứa tổng số hoặc giá trị tính toán.',
      },
    ],
  },
  {
    category: 'Bảng phức tạp',
    examples: [
      {
        title: 'Bảng với Colspan và Rowspan',
        description: 'Bảng phức tạp với các ô được hợp nhất cho dữ liệu phân cấp',
        code: `<table style="border-collapse: collapse; width: 100%; border: 2px solid #333;">
  <caption style="font-size: 1.3em; font-weight: bold; margin-bottom: 15px; color: #333;">
    Ma trận so sánh sản phẩm
  </caption>
  <thead>
    <tr style="background-color: #4CAF50; color: white;">
      <th rowspan="2" scope="col" style="border: 2px solid #333; padding: 15px; text-align: center; font-weight: bold;">Sản phẩm</th>
      <th colspan="3" scope="colgroup" style="border: 2px solid #333; padding: 15px; text-align: center; font-weight: bold;">Thông số kỹ thuật</th>
      <th rowspan="2" scope="col" style="border: 2px solid #333; padding: 15px; text-align: center; font-weight: bold;">Giá</th>
    </tr>
    <tr style="background-color: #66BB6A; color: white;">
      <th scope="col" style="border: 2px solid #333; padding: 12px; text-align: center; font-weight: bold;">CPU</th>
      <th scope="col" style="border: 2px solid #333; padding: 12px; text-align: center; font-weight: bold;">RAM</th>
      <th scope="col" style="border: 2px solid #333; padding: 12px; text-align: center; font-weight: bold;">Lưu trữ</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #f8f9fa;">
      <th scope="row" style="border: 2px solid #333; padding: 12px; font-weight: bold; background-color: #e3f2fd;">Laptop A</th>
      <td style="border: 2px solid #333; padding: 12px; text-align: center;">Intel i5</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: center;">8GB</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: center;">256GB SSD</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: center; font-weight: bold; color: #d32f2f;">20.790.000 ₫</td>
    </tr>
    <tr style="background-color: #fff;">
      <th scope="row" style="border: 2px solid #333; padding: 12px; font-weight: bold; background-color: #e3f2fd;">Laptop B</th>
      <td style="border: 2px solid #333; padding: 12px; text-align: center;">Intel i7</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: center;">16GB</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: center;">512GB SSD</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: center; font-weight: bold; color: #d32f2f;">33.737.000 ₫</td>
    </tr>
    <tr style="background-color: #f8f9fa;">
      <th scope="row" style="border: 2px solid #333; padding: 12px; font-weight: bold; background-color: #e3f2fd;">Desktop A</th>
      <td style="border: 2px solid #333; padding: 12px; text-align: center;">AMD Ryzen 7</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: center;">32GB</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: center;">1TB NVMe</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: center; font-weight: bold; color: #d32f2f;">41.581.000 ₫</td>
    </tr>
  </tbody>
</table>`,
        explanation:
          'Bảng phức tạp sử dụng colspan và rowspan để tạo tiêu đề phân cấp và nhóm các cột liên quan.',
      },
    ],
  },
  {
    category: 'Bảng responsive',
    examples: [
      {
        title: 'Bảng thân thiện với thiết bị di động',
        description: 'Bảng với thiết kế responsive cho thiết bị di động',
        code: `<!-- Cấu trúc HTML -->
<div style="overflow-x: auto; margin: 1rem 0;">
  <table class="mobile-table" style="border-collapse: collapse; width: 100%; min-width: 600px; border: 1px solid #ddd;">
    <thead>
      <tr style="background-color: #2196F3; color: white;">
        <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Sản phẩm</th>
        <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Danh mục</th>
        <th style="border: 1px solid #ddd; padding: 12px; text-align: right; font-weight: bold;">Giá</th>
        <th style="border: 1px solid #ddd; padding: 12px; text-align: center; font-weight: bold;">Tồn kho</th>
        <th style="border: 1px solid #ddd; padding: 12px; text-align: center; font-weight: bold;">Trạng thái</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #fff;">
        <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">iPhone 15 Pro</td>
        <td style="border: 1px solid #ddd; padding: 12px;">Điện thoại thông minh</td>
        <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">25.990.000 ₫</td>
        <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">25</td>
        <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">
          <span style="background-color: #4CAF50; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8em;">Hoạt động</span>
        </td>
      </tr>
      <tr style="background-color: #f5f5f5;">
        <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">MacBook Pro M3</td>
        <td style="border: 1px solid #ddd; padding: 12px;">Laptop</td>
        <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">51.990.000 ₫</td>
        <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">8</td>
        <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">
          <span style="background-color: #FF9800; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8em;">Ít hàng</span>
        </td>
      </tr>
      <tr style="background-color: #fff;">
        <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">iPad Air</td>
        <td style="border: 1px solid #ddd; padding: 12px;">Máy tính bảng</td>
        <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">15.990.000 ₫</td>
        <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">0</td>
        <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">
          <span style="background-color: #f44336; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8em;">Hết hàng</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Ghi chú cho mobile -->
<div style="background-color: #e3f2fd; padding: 12px; border-radius: 4px; margin-top: 10px; font-size: 0.9em;">
  <strong>Lưu ý:</strong> Trên thiết bị di động, bảng có thể cuộn ngang để xem đầy đủ thông tin.
</div>`,
        explanation:
          'Bảng responsive với overflow-x auto cho phép cuộn ngang trên thiết bị di động, giữ nguyên cấu trúc dữ liệu.',
      },
    ],
  },
  {
    category: 'Bảng với dữ liệu thực tế',
    examples: [
      {
        title: 'Bảng bảng lương nhân viên',
        description: 'Bảng hiển thị thông tin lương và phụ cấp của nhân viên',
        code: `<table style="border-collapse: collapse; width: 100%; border: 2px solid #333; font-family: Arial, sans-serif;">
  <caption style="font-size: 1.4em; font-weight: bold; margin-bottom: 15px; color: #333; padding: 10px;">
    🏢 Bảng lương nhân viên tháng 12/2024
  </caption>
  <thead>
    <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <th scope="col" style="border: 2px solid #333; padding: 15px; text-align: left; font-weight: bold;">Mã NV</th>
      <th scope="col" style="border: 2px solid #333; padding: 15px; text-align: left; font-weight: bold;">Họ và tên</th>
      <th scope="col" style="border: 2px solid #333; padding: 15px; text-align: left; font-weight: bold;">Chức vụ</th>
      <th scope="col" style="border: 2px solid #333; padding: 15px; text-align: right; font-weight: bold;">Lương cơ bản</th>
      <th scope="col" style="border: 2px solid #333; padding: 15px; text-align: right; font-weight: bold;">Phụ cấp</th>
      <th scope="col" style="border: 2px solid #333; padding: 15px; text-align: right; font-weight: bold;">Thưởng</th>
      <th scope="col" style="border: 2px solid #333; padding: 15px; text-align: right; font-weight: bold;">Tổng thu nhập</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #fff;">
      <th scope="row" style="border: 2px solid #333; padding: 12px; font-weight: bold; background-color: #f0f8ff;">NV001</th>
      <td style="border: 2px solid #333; padding: 12px;">Nguyễn Văn An</td>
      <td style="border: 2px solid #333; padding: 12px;">Trưởng phòng IT</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; font-weight: bold;">25.000.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right;">3.000.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; color: #2e7d32;">5.000.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; font-weight: bold; background-color: #e8f5e8; color: #2e7d32;">33.000.000 ₫</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <th scope="row" style="border: 2px solid #333; padding: 12px; font-weight: bold; background-color: #f0f8ff;">NV002</th>
      <td style="border: 2px solid #333; padding: 12px;">Trần Thị Bình</td>
      <td style="border: 2px solid #333; padding: 12px;">Senior Developer</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; font-weight: bold;">20.000.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right;">2.000.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; color: #2e7d32;">3.500.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; font-weight: bold; background-color: #e8f5e8; color: #2e7d32;">25.500.000 ₫</td>
    </tr>
    <tr style="background-color: #fff;">
      <th scope="row" style="border: 2px solid #333; padding: 12px; font-weight: bold; background-color: #f0f8ff;">NV003</th>
      <td style="border: 2px solid #333; padding: 12px;">Lê Minh Cường</td>
      <td style="border: 2px solid #333; padding: 12px;">Business Analyst</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; font-weight: bold;">18.000.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right;">1.500.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; color: #2e7d32;">2.000.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; font-weight: bold; background-color: #e8f5e8; color: #2e7d32;">21.500.000 ₫</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <th scope="row" style="border: 2px solid #333; padding: 12px; font-weight: bold; background-color: #f0f8ff;">NV004</th>
      <td style="border: 2px solid #333; padding: 12px;">Phạm Thị Dung</td>
      <td style="border: 2px solid #333; padding: 12px;">UX/UI Designer</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; font-weight: bold;">16.000.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right;">1.200.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; color: #2e7d32;">1.800.000 ₫</td>
      <td style="border: 2px solid #333; padding: 12px; text-align: right; font-weight: bold; background-color: #e8f5e8; color: #2e7d32;">19.000.000 ₫</td>
    </tr>
  </tbody>
  <tfoot>
    <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <th colspan="3" scope="row" style="border: 2px solid #333; padding: 15px; font-weight: bold; text-align: center;">TỔNG CỘNG</th>
      <td style="border: 2px solid #333; padding: 15px; text-align: right; font-weight: bold;">79.000.000 ₫</td>
      <td style="border: 2px solid #333; padding: 15px; text-align: right; font-weight: bold;">7.700.000 ₫</td>
      <td style="border: 2px solid #333; padding: 15px; text-align: right; font-weight: bold;">12.300.000 ₫</td>
      <td style="border: 2px solid #333; padding: 15px; text-align: right; font-weight: bold; font-size: 1.1em;">99.000.000 ₫</td>
    </tr>
  </tfoot>
</table>`,
        explanation:
          'Bảng lương với dữ liệu thực tế, sử dụng gradient, màu sắc phân biệt và định dạng số tiền theo chuẩn Việt Nam.',
      },
    ],
  },
];

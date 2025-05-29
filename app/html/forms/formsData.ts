// Dữ liệu cho việc học HTML Forms bằng tiếng Việt

export interface FormElement {
  element: string;
  description: string;
  purpose: string;
  attributes: string[];
  modernApproach: string;
}

export interface FormType {
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
  explanation: string;
}

export interface CodeCategory {
  category: string;
  examples: CodeExample[];
}

// Lý thuyết cơ bản về HTML Forms
export const formsTheory = {
  introduction: {
    title: 'Giới thiệu về Form HTML',
    content: [
      'Form HTML là công cụ thiết yếu để thu thập dữ liệu từ người dùng một cách tương tác và có cấu trúc.',
      'Form cung cấp interface để người dùng nhập liệu, lựa chọn và gửi thông tin đến server.',
      'Phát triển web hiện đại yêu cầu form phải có khả năng tiếp cận, bảo mật và responsive.',
      'Việc triển khai form đúng cách quan trọng cho UX, bảo mật dữ liệu và tích hợp backend.',
    ],
    importance: [
      'Tương tác người dùng: Form là cầu nối chính giữa người dùng và ứng dụng web',
      'Thu thập dữ liệu: Cho phép thu thập thông tin quan trọng từ khách hàng và người dùng',
      'Khả năng tiếp cận: Form được thiết kế tốt hỗ trợ người khuyết tật sử dụng web',
      'Bảo mật: Validation và encoding phù hợp bảo vệ khỏi các cuộc tấn công',
      'SEO: Form có cấu trúc tốt cải thiện khả năng tìm kiếm và indexing',
      'Chuyển đổi: Form tối ưu tăng tỷ lệ chuyển đổi và hoàn thành mục tiêu',
    ],
  },
  elements: [
    {
      element: 'form',
      description: 'Phần tử chứa cho toàn bộ cấu trúc form',
      purpose: 'Định nghĩa ranh giới form và thiết lập cách thức gửi dữ liệu',
      attributes: [
        'action - URL đích để gửi dữ liệu form',
        'method - Phương thức HTTP (GET, POST)',
        'enctype - Kiểu mã hóa dữ liệu (application/x-www-form-urlencoded, multipart/form-data)',
        'target - Nơi hiển thị kết quả form (_self, _blank, _parent, _top)',
        'autocomplete - Bật/tắt tự động hoàn thành (on, off)',
        'novalidate - Vô hiệu hóa validation HTML5',
      ],
      modernApproach: 'Sử dụng POST cho dữ liệu nhạy cảm, GET cho tìm kiếm, luôn validate cả client và server',
    },
    {
      element: 'input',
      description: 'Phần tử input đa năng cho nhiều loại dữ liệu',
      purpose: 'Thu thập các loại dữ liệu khác nhau từ người dùng',
      attributes: [
        'type - Loại input (text, email, password, number, date, file, checkbox, radio, submit, etc.)',
        'name - Tên trường để gửi dữ liệu',
        'value - Giá trị mặc định',
        'placeholder - Văn bản gợi ý',
        'required - Bắt buộc nhập',
        'disabled - Vô hiệu hóa input',
        'readonly - Chỉ đọc',
        'maxlength - Độ dài tối đa',
        'pattern - Regex validation',
        'autocomplete - Gợi ý tự động',
      ],
      modernApproach: 'Sử dụng type phù hợp cho validation tự động và UX tốt hơn trên mobile',
    },
    {
      element: 'label',
      description: 'Nhãn mô tả cho các control form',
      purpose: 'Cung cấp mô tả có thể tiếp cận cho form controls',
      attributes: [
        'for - ID của control mà label mô tả',
        'form - ID của form mà label thuộc về',
      ],
      modernApproach: 'Luôn sử dụng label cho mọi input, cải thiện khả năng tiếp cận và UX',
    },
    {
      element: 'textarea',
      description: 'Vùng văn bản nhiều dòng',
      purpose: 'Thu thập văn bản dài như bình luận, mô tả',
      attributes: [
        'rows - Số dòng hiển thị',
        'cols - Số cột ký tự',
        'placeholder - Văn bản gợi ý',
        'maxlength - Độ dài tối đa',
        'required - Bắt buộc nhập',
        'readonly - Chỉ đọc',
        'disabled - Vô hiệu hóa',
        'wrap - Cách xuống dòng (soft, hard)',
      ],
      modernApproach: 'Sử dụng CSS để kiểm soát kích thước, thêm resize properties',
    },
    {
      element: 'select',
      description: 'Dropdown menu lựa chọn',
      purpose: 'Cho phép người dùng chọn từ danh sách tùy chọn có sẵn',
      attributes: [
        'multiple - Cho phép chọn nhiều options',
        'size - Số options hiển thị cùng lúc',
        'required - Bắt buộc chọn',
        'disabled - Vô hiệu hóa',
        'autofocus - Tự động focus',
      ],
      modernApproach: 'Nhóm options bằng optgroup, sử dụng value attributes rõ ràng',
    },
    {
      element: 'button',
      description: 'Nút tương tác trong form',
      purpose: 'Kích hoạt hành động form hoặc JavaScript',
      attributes: [
        'type - Loại button (submit, reset, button)',
        'form - ID của form liên kết',
        'formaction - Override action của form',
        'formmethod - Override method của form',
        'disabled - Vô hiệu hóa button',
        'autofocus - Tự động focus',
      ],
      modernApproach: 'Sử dụng type rõ ràng, tránh dùng reset, ưu tiên button over input[type="submit"]',
    },
    {
      element: 'fieldset',
      description: 'Nhóm các form controls liên quan',
      purpose: 'Tạo nhóm logic và cải thiện khả năng tiếp cận',
      attributes: [
        'disabled - Vô hiệu hóa toàn bộ nhóm',
        'form - ID của form liên kết',
        'name - Tên của fieldset',
      ],
      modernApproach: 'Sử dụng với legend để tạo tiêu đề nhóm, cải thiện navigation với screen reader',
    },
    {
      element: 'legend',
      description: 'Tiêu đề cho fieldset',
      purpose: 'Cung cấp mô tả cho nhóm form controls',
      attributes: [],
      modernApproach: 'Luôn sử dụng với fieldset để cải thiện khả năng tiếp cận',
    },
  ],
  formTypes: [
    {
      type: 'Contact Form',
      description: 'Form liên hệ cơ bản với thông tin người dùng',
      useCase: 'Thu thập thông tin liên hệ từ khách hàng potencial, yêu cầu hỗ trợ',
      complexity: 'Thấp',
      accessibilityNotes: 'Cần label rõ ràng, validation messages, focus management',
    },
    {
      type: 'Registration Form',
      description: 'Form đăng ký tài khoản với validation phức tạp',
      useCase: 'Tạo tài khoản người dùng, thu thập thông tin cá nhân',
      complexity: 'Trung bình',
      accessibilityNotes: 'Password strength indicator, error messages chi tiết, progressive enhancement',
    },
    {
      type: 'Survey Form',
      description: 'Form khảo sát với nhiều loại input và logic điều kiện',
      useCase: 'Thu thập feedback, nghiên cứu thị trường, đánh giá sản phẩm',
      complexity: 'Cao',
      accessibilityNotes: 'Navigation giữa sections, progress indicator, skip logic accessibility',
    },
    {
      type: 'Payment Form',
      description: 'Form thanh toán với bảo mật cao',
      useCase: 'Xử lý giao dịch tài chính, mua hàng online',
      complexity: 'Cao',
      accessibilityNotes: 'Secure input handling, PCI compliance, clear error states',
    },
    {
      type: 'File Upload Form',
      description: 'Form upload file với drag & drop',
      useCase: 'Upload tài liệu, hình ảnh, media files',
      complexity: 'Trung bình',
      accessibilityNotes: 'Alternative upload methods, progress feedback, file type announcements',
    },
    {
      type: 'Multi-step Form',
      description: 'Form nhiều bước với wizard navigation',
      useCase: 'Onboarding phức tạp, checkout process, application forms',
      complexity: 'Cao',
      accessibilityNotes: 'Step navigation, progress tracking, data persistence between steps',
    },
  ],
};

export const advancedConcepts: AdvancedConcept[] = [
  {
    title: 'Form Validation HTML5',
    description: 'Sử dụng validation tích hợp của HTML5 để kiểm tra dữ liệu phía client',
    example: `<form>
  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    required
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
    title="Vui lòng nhập email hợp lệ"
  >

  <label for="phone">Số điện thoại:</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    pattern="[0-9]{10,11}"
    title="Số điện thoại phải có 10-11 chữ số"
  >

  <button type="submit">Gửi</button>
</form>`,
    useCase: 'Giảm tải server, cải thiện UX với feedback tức thì, tích hợp với browser APIs',
  },
  {
    title: 'Custom Form Controls',
    description: 'Tạo form controls tùy chỉnh với ARIA và JavaScript',
    example: `<div class="custom-select" role="combobox" aria-expanded="false" aria-haspopup="listbox">
  <input type="text" readonly aria-label="Chọn thành phố" aria-describedby="city-help">
  <ul role="listbox" aria-label="Danh sách thành phố">
    <li role="option" aria-selected="false">Hà Nội</li>
    <li role="option" aria-selected="false">TP. Hồ Chí Minh</li>
    <li role="option" aria-selected="true">Đà Nẵng</li>
  </ul>
</div>
<div id="city-help">Sử dụng mũi tên để điều hướng và Enter để chọn</div>`,
    useCase: 'Tạo UX độc đáo, tích hợp với design system, kiểm soát hoàn toàn behavior',
  },
  {
    title: 'Form Data API',
    description: 'Sử dụng FormData API để xử lý dữ liệu form với JavaScript',
    example: `const form = document.getElementById('myForm');
const formData = new FormData(form);

// Thêm dữ liệu động
formData.append('timestamp', Date.now());

// Gửi với fetch API
fetch('/submit', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data));

// Xử lý file upload
const fileInput = document.getElementById('fileInput');
formData.append('files', fileInput.files[0]);`,
    useCase: 'AJAX form submission, file upload với progress, dynamic form data manipulation',
  },
  {
    title: 'Progressive Enhancement',
    description: 'Xây dựng form hoạt động tốt cả khi JavaScript bị tắt',
    example: `<form action="/submit" method="POST" class="progressive-form">
  <fieldset>
    <legend>Thông tin cá nhân</legend>

    <label for="name">Họ tên:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <!-- Fallback submit button -->
    <button type="submit">Gửi thông tin</button>
  </fieldset>

  <!-- Enhanced submit với JavaScript -->
  <div class="js-enhanced" style="display: none;">
    <button type="button" onclick="submitWithAjax()">Gửi (AJAX)</button>
  </div>
</form>`,
    useCase: 'Đảm bảo accessibility, hoạt động trên mọi thiết bị, SEO friendly',
  },
];

export const bestPractices: Record<string, BestPractice[]> = {
  semantic: [
    {
      title: 'Sử dụng Label chính xác',
      description: 'Luôn liên kết label với form control bằng for attribute hoặc nesting',
      example: '<label for="username">Tên đăng nhập:</label><input type="text" id="username" name="username">',
      benefit: 'Cải thiện khả năng tiếp cận, UX tốt hơn, click vào label sẽ focus input',
    },
    {
      title: 'Nhóm form controls liên quan',
      description: 'Sử dụng fieldset và legend để nhóm các input có liên quan',
      example: '<fieldset><legend>Thông tin liên hệ</legend><!-- inputs --></fieldset>',
      benefit: 'Screen readers hiểu mối quan hệ giữa các fields, dễ navigation',
    },
    {
      title: 'Input types phù hợp',
      description: 'Sử dụng input type chính xác cho từng loại dữ liệu',
      example: '<input type="email" name="email"><input type="tel" name="phone"><input type="date" name="birthday">',
      benefit: 'Validation tự động, keyboard phù hợp trên mobile, autocomplete tốt hơn',
    },
  ],
  accessibility: [
    {
      title: 'Error messages rõ ràng',
      description: 'Cung cấp error messages cụ thể và liên kết với input',
      example: '<input aria-describedby="email-error"><div id="email-error">Email phải có định dạng hợp lệ</div>',
      benefit: 'Người dùng hiểu chính xác lỗi gì và cách khắc phục',
    },
    {
      title: 'Focus management',
      description: 'Quản lý focus flow logic và cung cấp focus indicators rõ ràng',
      example: 'input:focus { outline: 2px solid #007cba; outline-offset: 2px; }',
      benefit: 'Người dùng keyboard navigation dễ dàng, tuân thủ WCAG guidelines',
    },
    {
      title: 'Required field indicators',
      description: 'Đánh dấu rõ ràng các field bắt buộc và tùy chọn',
      example: '<label>Email <span aria-label="bắt buộc">*</span></label>',
      benefit: 'Người dùng biết field nào cần thiết, giảm lỗi submission',
    },
  ],
  performance: [
    {
      title: 'Lazy loading validation',
      description: 'Chỉ load validation scripts khi cần thiết',
      example: 'const validator = await import("./form-validator.js");',
      benefit: 'Giảm bundle size, cải thiện performance trang',
    },
    {
      title: 'Debounced validation',
      description: 'Sử dụng debounce cho real-time validation để tránh spam requests',
      example: 'const debouncedValidate = debounce(validateField, 300);',
      benefit: 'Giảm tải server, UX mượt mà hơn, tiết kiệm bandwidth',
    },
    {
      title: 'Optimized file uploads',
      description: 'Implement chunked upload và progress feedback cho file lớn',
      example: 'const chunk = file.slice(start, end); await uploadChunk(chunk, index);',
      benefit: 'Upload file lớn ổn định, khôi phục được khi lỗi, UX tốt hơn',
    },
  ],
};

export const codeExamples: CodeCategory[] = [
  {
    category: 'Form cơ bản',
    examples: [
      {
        title: 'Contact Form đơn giản',
        description: 'Form liên hệ với validation cơ bản',
        code: `<form action="/contact" method="POST">
  <fieldset>
    <legend>Thông tin liên hệ</legend>

    <div class="form-group">
      <label for="name">Họ tên *</label>
      <input type="text" id="name" name="name" required>
    </div>

    <div class="form-group">
      <label for="email">Email *</label>
      <input type="email" id="email" name="email" required>
    </div>

    <div class="form-group">
      <label for="phone">Số điện thoại</label>
      <input type="tel" id="phone" name="phone">
    </div>

    <div class="form-group">
      <label for="message">Tin nhắn *</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>

    <button type="submit">Gửi tin nhắn</button>
  </fieldset>
</form>`,
        explanation: 'Form cơ bản với các input types phù hợp, required validation và semantic markup',
      },
      {
        title: 'Registration Form',
        description: 'Form đăng ký với password confirmation',
        code: `<form action="/register" method="POST" autocomplete="on">
  <fieldset>
    <legend>Tạo tài khoản mới</legend>

    <div class="form-group">
      <label for="username">Tên đăng nhập *</label>
      <input
        type="text"
        id="username"
        name="username"
        required
        minlength="3"
        pattern="[a-zA-Z0-9_]+"
        autocomplete="username"
      >
    </div>

    <div class="form-group">
      <label for="email">Email *</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        autocomplete="email"
      >
    </div>

    <div class="form-group">
      <label for="password">Mật khẩu *</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minlength="8"
        autocomplete="new-password"
      >
    </div>

    <div class="form-group">
      <label for="confirm-password">Xác nhận mật khẩu *</label>
      <input
        type="password"
        id="confirm-password"
        name="confirm-password"
        required
        autocomplete="new-password"
      >
    </div>

    <div class="form-group">
      <input type="checkbox" id="terms" name="terms" required>
      <label for="terms">Tôi đồng ý với điều khoản sử dụng *</label>
    </div>

    <button type="submit">Đăng ký</button>
  </fieldset>
</form>`,
        explanation: 'Form đăng ký với validation patterns, autocomplete attributes và checkbox agreement',
      },
    ],
  },
  {
    category: 'Input types nâng cao',
    examples: [
      {
        title: 'Date và Time inputs',
        description: 'Các input types cho ngày tháng và thời gian',
        code: `<form>
  <div class="form-group">
    <label for="birth-date">Ngày sinh:</label>
    <input type="date" id="birth-date" name="birth-date" min="1900-01-01" max="2023-12-31">
  </div>

  <div class="form-group">
    <label for="appointment-time">Thời gian hẹn:</label>
    <input type="datetime-local" id="appointment-time" name="appointment-time">
  </div>

  <div class="form-group">
    <label for="meeting-time">Giờ họp:</label>
    <input type="time" id="meeting-time" name="meeting-time" min="09:00" max="18:00">
  </div>

  <div class="form-group">
    <label for="event-month">Tháng sự kiện:</label>
    <input type="month" id="event-month" name="event-month">
  </div>

  <div class="form-group">
    <label for="project-week">Tuần dự án:</label>
    <input type="week" id="project-week" name="project-week">
  </div>
</form>`,
        explanation: 'Các input types cho ngày tháng cung cấp date picker native và validation tự động',
      },
      {
        title: 'Number và Range inputs',
        description: 'Input cho số và slider',
        code: `<form>
  <div class="form-group">
    <label for="quantity">Số lượng:</label>
    <input
      type="number"
      id="quantity"
      name="quantity"
      min="1"
      max="100"
      step="1"
      value="1"
    >
  </div>

  <div class="form-group">
    <label for="price">Giá (VND):</label>
    <input
      type="number"
      id="price"
      name="price"
      min="0"
      step="1000"
      placeholder="0"
    >
  </div>

  <div class="form-group">
    <label for="rating">Đánh giá (1-10):</label>
    <input
      type="range"
      id="rating"
      name="rating"
      min="1"
      max="10"
      value="5"
      oninput="document.getElementById('rating-value').textContent = this.value"
    >
    <output id="rating-value">5</output>
  </div>

  <div class="form-group">
    <label for="volume">Âm lượng:</label>
    <input
      type="range"
      id="volume"
      name="volume"
      min="0"
      max="100"
      value="50"
      step="10"
    >
  </div>
</form>`,
        explanation: 'Number inputs cung cấp validation số tự động, range inputs tạo slider intuitive',
      },
    ],
  },
  {
    category: 'File upload',
    examples: [
      {
        title: 'File upload cơ bản',
        description: 'Upload file với giới hạn type và size',
        code: `<form action="/upload" method="POST" enctype="multipart/form-data">
  <div class="form-group">
    <label for="profile-photo">Ảnh đại diện:</label>
    <input
      type="file"
      id="profile-photo"
      name="profile-photo"
      accept="image/jpeg,image/png,image/gif"
      required
    >
    <small>Chỉ chấp nhận JPG, PNG, GIF. Tối đa 5MB.</small>
  </div>

  <div class="form-group">
    <label for="documents">Tài liệu:</label>
    <input
      type="file"
      id="documents"
      name="documents"
      accept=".pdf,.doc,.docx"
      multiple
    >
    <small>Có thể chọn nhiều file PDF hoặc Word.</small>
  </div>

  <div class="form-group">
    <label for="cv">CV:</label>
    <input
      type="file"
      id="cv"
      name="cv"
      accept=".pdf"
      required
    >
  </div>

  <button type="submit">Upload files</button>
</form>`,
        explanation: 'File inputs với accept attribute để giới hạn file types và multiple cho nhiều files',
      },
    ],
  },
  {
    category: 'Advanced forms',
    examples: [
      {
        title: 'Multi-step form',
        description: 'Form nhiều bước với JavaScript navigation',
        code: `<form id="multi-step-form">
  <!-- Step 1: Personal Info -->
  <fieldset class="form-step active" data-step="1">
    <legend>Bước 1: Thông tin cá nhân</legend>

    <div class="form-group">
      <label for="first-name">Tên:</label>
      <input type="text" id="first-name" name="first-name" required>
    </div>

    <div class="form-group">
      <label for="last-name">Họ:</label>
      <input type="text" id="last-name" name="last-name" required>
    </div>

    <button type="button" onclick="nextStep()">Tiếp theo</button>
  </fieldset>

  <!-- Step 2: Contact Info -->
  <fieldset class="form-step" data-step="2">
    <legend>Bước 2: Thông tin liên hệ</legend>

    <div class="form-group">
      <label for="email-step2">Email:</label>
      <input type="email" id="email-step2" name="email" required>
    </div>

    <div class="form-group">
      <label for="phone-step2">Số điện thoại:</label>
      <input type="tel" id="phone-step2" name="phone">
    </div>

    <button type="button" onclick="prevStep()">Quay lại</button>
    <button type="button" onclick="nextStep()">Tiếp theo</button>
  </fieldset>

  <!-- Step 3: Preferences -->
  <fieldset class="form-step" data-step="3">
    <legend>Bước 3: Tùy chọn</legend>

    <div class="form-group">
      <label for="interests">Sở thích:</label>
      <select id="interests" name="interests" multiple>
        <option value="tech">Công nghệ</option>
        <option value="sports">Thể thao</option>
        <option value="music">Âm nhạc</option>
        <option value="travel">Du lịch</option>
      </select>
    </div>

    <button type="button" onclick="prevStep()">Quay lại</button>
    <button type="submit">Hoàn thành</button>
  </fieldset>
</form>`,
        explanation: 'Form nhiều bước sử dụng fieldset để tổ chức và JavaScript để navigation',
      },
    ],
  },
];

export const formsFAQs: FAQ[] = [
  {
    id: 1,
    question: 'Khi nào nên sử dụng GET vs POST method?',
    answer: 'Sử dụng GET cho search forms và khi dữ liệu không nhạy cảm, có thể cache được. Sử dụng POST cho forms có dữ liệu nhạy cảm, file uploads, hoặc khi form thay đổi state server.',
    level: 'junior',
    category: 'methods',
    detailed: true,
  },
  {
    id: 2,
    question: 'Label và input phải liên kết như thế nào?',
    answer: 'Có 2 cách: 1) Sử dụng for attribute trên label với id tương ứng trên input. 2) Nest input bên trong label. Cách 1 được khuyến khích vì linh hoạt hơn.',
    level: 'junior',
    category: 'accessibility',
    detailed: false,
  },
  {
    id: 3,
    question: 'Làm thế nào để validate form phía client an toàn?',
    answer: 'Client validation chỉ là UX enhancement, không thể thay thế server validation. Luôn validate lại phía server vì client code có thể bị bypass.',
    level: 'mid',
    category: 'security',
    detailed: true,
  },
  {
    id: 4,
    question: 'Input type="email" có đủ để validate email không?',
    answer: 'HTML5 email validation chỉ kiểm tra format cơ bản. Để validation chính xác, cần regex phức tạp hơn hoặc verification email.',
    level: 'mid',
    category: 'validation',
    detailed: false,
  },
  {
    id: 5,
    question: 'Khi nào nên sử dụng fieldset và legend?',
    answer: 'Sử dụng khi có nhóm form controls liên quan logic (như địa chỉ, thông tin thanh toán). Giúp screen readers hiểu mối quan hệ và cải thiện navigation.',
    level: 'junior',
    category: 'semantic',
    detailed: true,
  },
  {
    id: 6,
    question: 'Autocomplete attribute hoạt động như thế nào?',
    answer: 'Autocomplete giúp browser gợi ý dữ liệu đã lưu. Sử dụng values chuẩn như "name", "email", "current-password", "new-password" để tối ưu UX.',
    level: 'mid',
    category: 'ux',
    detailed: false,
  },
  {
    id: 7,
    question: 'Form validation có ảnh hướng đến SEO không?',
    answer: 'Validation tốt cải thiện UX, giảm bounce rate, tăng conversion - các yếu tố gián tiếp ảnh hưởng SEO. Form hoạt động tốt cả khi JS disabled cũng quan trọng.',
    level: 'senior',
    category: 'seo',
    detailed: true,
  },
  {
    id: 8,
    question: 'Làm thế nào để handle file upload lớn?',
    answer: 'Sử dụng chunked upload, progress indicators, drag & drop interface. Phía server cần config max file size và timeout phù hợp.',
    level: 'senior',
    category: 'performance',
    detailed: true,
  },
];

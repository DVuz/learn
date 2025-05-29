export const HTML_TABLE_OF_CONTENTS = [
  {
    title: 'HTML Fundamentals',
    lessons: [
      { id: 'introduction', title: 'Giới thiệu HTML' },
      { id: 'structure', title: 'Cấu trúc HTML cơ bản' },
      { id: 'essential-tags', title: 'Các thẻ HTML quan trọng' },
    ],
  },
  {
    title: 'Content Elements',
    lessons: [
      { id: 'text-formatting', title: 'Định dạng văn bản' },
      { id: 'lists', title: 'Danh sách' },
      { id: 'links-media', title: 'Liên kết và Media' },
      { id: 'tables', title: 'Bảng HTML' },
    ],
  },
  {
    title: 'Interactive Elements',
    lessons: [{ id: 'forms', title: 'Forms và Input' }],
  },
  // {
  //   title: 'Modern HTML',
  //   lessons: [
  //     { id: 'semantic-html', title: 'HTML5 Semantic' },
  //     { id: 'meta-tags', title: 'Meta Tags & SEO' },
  //   ],
  // },
  // {
  //   title: 'Advanced Concepts',
  //   lessons: [
  //     { id: 'advanced', title: 'Kiến thức nâng cao' },
  //     { id: 'best-practices', title: 'Best Practices' },
  //   ],
  // },
];

// Navigation data cho các bài học HTML
export const HTML_NAVIGATIONS = {
  introduction: {
    next: { title: 'Cấu trúc HTML cơ bản', href: '/html/structure' },
  },
  structure: {
    prev: { title: 'Giới thiệu HTML', href: '/html' },
    next: { title: 'Các thẻ HTML quan trọng', href: '/html/essential-tags' },
  },
  'essential-tags': {
    prev: { title: 'Cấu trúc HTML cơ bản', href: '/html/structure' },
    next: { title: 'Định dạng văn bản', href: '/html/text-formatting' },
  },
  'text-formatting': {
    prev: { title: 'Các thẻ HTML quan trọng', href: '/html/essential-tags' },
    next: { title: 'Danh sách', href: '/html/lists' },
  },
  lists: {
    prev: { title: 'Định dạng văn bản', href: '/html/text-formatting' },
    next: { title: 'Liên kết và Media', href: '/html/links-media' },
  },
  'links-media': {
    prev: { title: 'Danh sách', href: '/html/lists' },
    next: { title: 'Bảng HTML', href: '/html/tables' },
  },
  tables: {
    prev: { title: 'Liên kết và Media', href: '/html/links-media' },
    next: { title: 'Forms và Input', href: '/html/forms' },
  },
  forms: {
    prev: { title: 'Bảng HTML', href: '/html/tables' },
    next: { title: 'HTML5 Semantic', href: '/html/semantic-html' },
  },
  'semantic-html': {
    prev: { title: 'Forms và Input', href: '/html/forms' },
    next: { title: 'Meta Tags & SEO', href: '/html/meta-tags' },
  },
  'meta-tags': {
    prev: { title: 'HTML5 Semantic', href: '/html/semantic-html' },
    next: { title: 'Kiến thức nâng cao', href: '/html/advanced' },
  },
  advanced: {
    prev: { title: 'Meta Tags & SEO', href: '/html/meta-tags' },
    next: { title: 'Best Practices', href: '/html/best-practices' },
  },
  'best-practices': {
    prev: { title: 'Kiến thức nâng cao', href: '/html/advanced' },
  },
};

// Helper function để lấy progress cho lesson
export const getProgressForLesson = (lessonId: string) => {
  const allLessons = HTML_TABLE_OF_CONTENTS.flatMap(section => section.lessons);
  const currentIndex = allLessons.findIndex(lesson => lesson.id === lessonId);

  return {
    completed: currentIndex + 1,
    total: allLessons.length,
    percentage: Math.round(((currentIndex + 1) / allLessons.length) * 100),
  };
};

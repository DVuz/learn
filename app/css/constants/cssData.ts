// CSS Course Table of Contents
export const CSS_TABLE_OF_CONTENTS = [
  {
    title: 'Tuần 1-2: CSS Fundamentals',
    lessons: [
      // Ngày 1-3: Cú pháp và Selectors
      { id: 'introduction', title: 'Giới thiệu CSS', completed: true },
      { id: 'syntax', title: 'Cú pháp CSS cơ bản', completed: true },
      { id: 'selectors', title: 'CSS Selectors', completed: false },
      { id: 'pseudo-classes', title: 'Pseudo-classes', completed: false },
      { id: 'pseudo-elements', title: 'Pseudo-elements', completed: false },
      { id: 'combinators', title: 'Selector Combinators', completed: false },

      // Ngày 4-7: Colors và Typography
      { id: 'colors', title: 'Colors & Values', completed: false },
      { id: 'background', title: 'Background Properties', completed: false },
      { id: 'fonts', title: 'Font Properties', completed: false },
      { id: 'text', title: 'Text Properties', completed: false },

      // Ngày 8-10: Box Model
      { id: 'box-model', title: 'Box Model', completed: false },
      { id: 'box-sizing', title: 'Box-sizing', completed: false },
      { id: 'dimensions', title: 'Width & Height', completed: false },

      // Ngày 11-14: Display và Positioning
      { id: 'display', title: 'Display Properties', completed: false },
      { id: 'position', title: 'Position Properties', completed: false },
      { id: 'z-index', title: 'Z-index & Stacking', completed: false },
    ],
  },
  {
    title: 'Tuần 3-4: Layout Cơ Bản',
    lessons: [
      // Ngày 15-21: Flexbox
      { id: 'flexbox-intro', title: 'Flexbox Introduction', completed: false },
      { id: 'flex-container', title: 'Flex Container', completed: false },
      { id: 'flex-items', title: 'Flex Items', completed: false },
      { id: 'flex-alignment', title: 'Flex Alignment', completed: false },
      { id: 'flex-practice', title: 'Flexbox Practice', completed: false },

      // Ngày 22-28: CSS Grid
      { id: 'grid-intro', title: 'CSS Grid Introduction', completed: false },
      { id: 'grid-template', title: 'Grid Template', completed: false },
      { id: 'grid-areas', title: 'Grid Areas', completed: false },
      { id: 'grid-functions', title: 'Grid Functions', completed: false },
      { id: 'grid-practice', title: 'Grid Practice', completed: false },
    ],
  },
  {
    title: 'Tuần 5-6: Responsive Design',
    lessons: [
      // Ngày 29-35: Media Queries
      { id: 'media-queries', title: 'Media Queries', completed: false },
      { id: 'breakpoints', title: 'Breakpoints', completed: false },
      { id: 'mobile-first', title: 'Mobile-first Approach', completed: false },
      { id: 'responsive-images', title: 'Responsive Images', completed: false },

      // Ngày 36-42: Advanced Responsive
      { id: 'container-queries', title: 'Container Queries', completed: false },
      { id: 'css-functions', title: 'CSS Functions', completed: false },
      { id: 'viewport-units', title: 'Viewport Units', completed: false },
      { id: 'css-variables', title: 'CSS Variables', completed: false },
      { id: 'final-project', title: 'Final Project', completed: false },
    ],
  },
];

// Navigation data cho các bài học
export const CSS_NAVIGATIONS = {
  introduction: {
    next: { title: 'Cú pháp CSS cơ bản', href: '/css/syntax' },
  },
  syntax: {
    prev: { title: 'Giới thiệu CSS', href: '/css' },
    next: { title: 'CSS Selectors', href: '/css/selectors' },
  },
  selectors: {
    prev: { title: 'Cú pháp CSS cơ bản', href: '/css/syntax' },
    next: { title: 'Pseudo-classes', href: '/css/pseudo-classes' },
  },
  'pseudo-classes': {
    prev: { title: 'CSS Selectors', href: '/css/selectors' },
    next: { title: 'Pseudo-elements', href: '/css/pseudo-elements' },
  },
  'pseudo-elements': {
    prev: { title: 'Pseudo-classes', href: '/css/pseudo-classes' },
    next: { title: 'Selector Combinators', href: '/css/combinators' },
  },
  combinators: {
    prev: { title: 'Pseudo-elements', href: '/css/pseudo-elements' },
    next: { title: 'Colors & Values', href: '/css/colors' },
  },
  colors: {
    prev: { title: 'Selector Combinators', href: '/css/combinators' },
    next: { title: 'Background Properties', href: '/css/background' },
  },
  background: {
    prev: { title: 'Colors & Values', href: '/css/colors' },
    next: { title: 'Font Properties', href: '/css/fonts' },
  },
  fonts: {
    prev: { title: 'Background Properties', href: '/css/background' },
    next: { title: 'Text Properties', href: '/css/text' },
  },
  text: {
    prev: { title: 'Font Properties', href: '/css/fonts' },
    next: { title: 'Box Model', href: '/css/box-model' },
  },
  'box-model': {
    prev: { title: 'Text Properties', href: '/css/text' },
    next: { title: 'Box-sizing', href: '/css/box-sizing' },
  },
  'box-sizing': {
    prev: { title: 'Box Model', href: '/css/box-model' },
    next: { title: 'Width & Height', href: '/css/dimensions' },
  },
  dimensions: {
    prev: { title: 'Box-sizing', href: '/css/box-sizing' },
    next: { title: 'Display Properties', href: '/css/display' },
  },
  display: {
    prev: { title: 'Width & Height', href: '/css/dimensions' },
    next: { title: 'Position Properties', href: '/css/position' },
  },
  position: {
    prev: { title: 'Display Properties', href: '/css/display' },
    next: { title: 'Z-index & Stacking', href: '/css/z-index' },
  },
  'z-index': {
    prev: { title: 'Position Properties', href: '/css/position' },
    next: { title: 'Flexbox Introduction', href: '/css/flexbox-intro' },
  },
  'flexbox-intro': {
    prev: { title: 'Z-index & Stacking', href: '/css/z-index' },
    next: { title: 'Flex Container', href: '/css/flex-container' },
  },
  'flex-container': {
    prev: { title: 'Flexbox Introduction', href: '/css/flexbox-intro' },
    next: { title: 'Flex Items', href: '/css/flex-items' },
  },
  'flex-items': {
    prev: { title: 'Flex Container', href: '/css/flex-container' },
    next: { title: 'Flex Alignment', href: '/css/flex-alignment' },
  },
  'flex-alignment': {
    prev: { title: 'Flex Items', href: '/css/flex-items' },
    next: { title: 'Flexbox Practice', href: '/css/flex-practice' },
  },
  'flex-practice': {
    prev: { title: 'Flex Alignment', href: '/css/flex-alignment' },
    next: { title: 'CSS Grid Introduction', href: '/css/grid-intro' },
  },
  'grid-intro': {
    prev: { title: 'Flexbox Practice', href: '/css/flex-practice' },
    next: { title: 'Grid Template', href: '/css/grid-template' },
  },
  'grid-template': {
    prev: { title: 'CSS Grid Introduction', href: '/css/grid-intro' },
    next: { title: 'Grid Areas', href: '/css/grid-areas' },
  },
  'grid-areas': {
    prev: { title: 'Grid Template', href: '/css/grid-template' },
    next: { title: 'Grid Functions', href: '/css/grid-functions' },
  },
  'grid-functions': {
    prev: { title: 'Grid Areas', href: '/css/grid-areas' },
    next: { title: 'Grid Practice', href: '/css/grid-practice' },
  },
  'grid-practice': {
    prev: { title: 'Grid Functions', href: '/css/grid-functions' },
    next: { title: 'Media Queries', href: '/css/media-queries' },
  },
  'media-queries': {
    prev: { title: 'Grid Practice', href: '/css/grid-practice' },
    next: { title: 'Breakpoints', href: '/css/breakpoints' },
  },
  breakpoints: {
    prev: { title: 'Media Queries', href: '/css/media-queries' },
    next: { title: 'Mobile-first Approach', href: '/css/mobile-first' },
  },
  'mobile-first': {
    prev: { title: 'Breakpoints', href: '/css/breakpoints' },
    next: { title: 'Responsive Images', href: '/css/responsive-images' },
  },
  'responsive-images': {
    prev: { title: 'Mobile-first Approach', href: '/css/mobile-first' },
    next: { title: 'Container Queries', href: '/css/container-queries' },
  },
  'container-queries': {
    prev: { title: 'Responsive Images', href: '/css/responsive-images' },
    next: { title: 'CSS Functions', href: '/css/css-functions' },
  },
  'css-functions': {
    prev: { title: 'Container Queries', href: '/css/container-queries' },
    next: { title: 'Viewport Units', href: '/css/viewport-units' },
  },
  'viewport-units': {
    prev: { title: 'CSS Functions', href: '/css/css-functions' },
    next: { title: 'CSS Variables', href: '/css/css-variables' },
  },
  'css-variables': {
    prev: { title: 'Viewport Units', href: '/css/viewport-units' },
    next: { title: 'Final Project', href: '/css/final-project' },
  },
  'final-project': {
    prev: { title: 'CSS Variables', href: '/css/css-variables' },
  },
};

// Lesson outlines cho các bài học
export const CSS_LESSON_OUTLINES = {
  introduction: [
    { id: 'what-is-css', title: 'CSS là gì?' },
    { id: 'why-use-css', title: 'Tại sao sử dụng CSS?' },
    { id: 'basic-example', title: 'Ví dụ cơ bản' },
    { id: 'how-css-works', title: 'CSS hoạt động như thế nào?' },
    { id: 'next-steps', title: 'Bước tiếp theo' },
  ],
  syntax: [
    { id: 'css-rule', title: 'CSS Rule' },
    { id: 'selectors', title: 'Selectors' },
    { id: 'properties', title: 'Properties' },
    { id: 'values', title: 'Values' },
    { id: 'comments', title: 'Comments' },
  ],
  selectors: [
    { id: 'element-selectors', title: 'Element Selectors' },
    { id: 'class-selectors', title: 'Class Selectors' },
    { id: 'id-selectors', title: 'ID Selectors' },
    { id: 'attribute-selectors', title: 'Attribute Selectors' },
    { id: 'universal-selector', title: 'Universal Selector' },
  ],
  'pseudo-classes': [
    { id: 'hover-focus', title: ':hover và :focus' },
    { id: 'active-visited', title: ':active và :visited' },
    { id: 'nth-child', title: ':nth-child' },
    { id: 'first-last', title: ':first-child và :last-child' },
    { id: 'not-selector', title: ':not() selector' },
  ],
  'pseudo-elements': [
    { id: 'before-after', title: '::before và ::after' },
    { id: 'first-letter', title: '::first-letter' },
    { id: 'first-line', title: '::first-line' },
    { id: 'selection', title: '::selection' },
    { id: 'practical-examples', title: 'Ví dụ thực tế' },
  ],
};

// Progress tracking
export const getProgressForLesson = (lessonId: string) => {
  const allLessons = CSS_TABLE_OF_CONTENTS.flatMap(section => section.lessons);
  const currentIndex = allLessons.findIndex(lesson => lesson.id === lessonId);
  return {
    current: currentIndex + 1,
    total: allLessons.length,
  };
};

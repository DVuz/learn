// CSS Course Table of Contents
export const CSS_TABLE_OF_CONTENTS = [
  {
    title: 'CSS Fundamentals',
    lessons: [
      { id: 'introduction', title: 'Giới thiệu CSS', completed: true },
      { id: 'syntax', title: 'Cú pháp CSS & Selectors', completed: true },
      { id: 'colors', title: 'Colors & Typography', completed: false },
      { id: 'box-model', title: 'Box Model', completed: false },
      { id: 'units', title: 'CSS Units', completed: false },
      { id: 'display', title: 'Display & Position', completed: false },
      { id: 'position', title: 'CSS Positioning', completed: false },
    ],
  },
  {
    title: 'Layout Cơ Bản',
    lessons: [
      { id: 'flexbox', title: 'Flexbox', completed: false },
      { id: 'grid', title: 'CSS Grid', completed: false },
      { id: 'responsive', title: 'Responsive Design', completed: false },
    ],
  },
];

// Navigation data cho các bài học
export const CSS_NAVIGATIONS = {
  introduction: {
    next: { title: 'Cú pháp CSS & Selectors', href: '/css/syntax' },
  },
  syntax: {
    prev: { title: 'Giới thiệu CSS', href: '/css' },
    next: { title: 'Colors & Typography', href: '/css/colors' },
  },
  colors: {
    prev: { title: 'Cú pháp CSS & Selectors', href: '/css/syntax' },
    next: { title: 'Box Model', href: '/css/box-model' },
  },
  'box-model': {
    prev: { title: 'Colors & Typography', href: '/css/colors' },
    next: { title: 'CSS Units', href: '/css/units' },
  },
  units: {
    prev: { title: 'Box Model', href: '/css/box-model' },
    next: { title: 'Display & Position', href: '/css/display' },
  },
  display: {
    prev: { title: 'CSS Units', href: '/css/units' },
    next: { title: 'CSS Positioning', href: '/css/position' },
  },
  position: {
    prev: { title: 'Display & Position', href: '/css/display' },
    next: { title: 'Flexbox', href: '/css/flexbox' },
  },
  flexbox: {
    prev: { title: 'CSS Positioning', href: '/css/position' },
    next: { title: 'CSS Grid', href: '/css/grid' },
  },
  grid: {
    prev: { title: 'Flexbox', href: '/css/flexbox' },
    next: { title: 'Responsive Design', href: '/css/responsive' },
  },
  responsive: {
    prev: { title: 'CSS Grid', href: '/css/grid' },
    next: { title: 'Animations & Transitions', href: '/css/animations' },
  },
  animations: {
    prev: { title: 'Responsive Design', href: '/css/responsive' },
    next: { title: 'Modern CSS Features', href: '/css/modern-css' },
  },
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

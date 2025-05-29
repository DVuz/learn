// JavaScript course navigation and content structure - Optimized

export interface Lesson {
  id: string;
  title: string;
  href?: string;
  duration?: string;
  difficulty?: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
}

export interface Section {
  title: string;
  lessons: Lesson[];
}

export interface Progress {
  completed: number;
  total: number;
  percentage: number;
}

export interface NavigationItem {
  title: string;
  href: string;
}

export interface Navigation {
  prev?: NavigationItem;
  next?: NavigationItem;
}

// Table of Contents - Optimized structure
export const JS_TABLE_OF_CONTENTS: Section[] = [
  {
    title: 'Chương 1: Biến và Scope',
    lessons: [
      {
        id: 'variable-basics',
        title: 'Variable Basics',
        href: '/js/variable-basics',
        duration: '90 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'scope-hoisting',
        title: 'Scope & Hoisting',
        href: '/js/scope-hoisting',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'var-let-const',
        title: 'var, let, const',
        href: '/js/var-let-const',
        duration: '100 phút',
        difficulty: 'Cơ bản',
      },
    ],
  },
  {
    title: 'Chương 2: Functions',
    lessons: [
      {
        id: 'functions-comprehensive',
        title: 'Functions Complete',
        href: '/js/functions-comprehensive',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'advanced-functions',
        title: 'Closures & Advanced',
        href: '/js/advanced-functions',
        duration: '140 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    title: 'Chương 3: Data Types',
    lessons: [
      {
        id: 'data-types-comprehensive',
        title: 'Data Types Complete',
        href: '/js/data-types-comprehensive',
        duration: '130 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'objects-arrays',
        title: 'Objects & Arrays',
        href: '/js/objects-arrays',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'modern-syntax',
        title: 'Modern Syntax',
        href: '/js/modern-syntax',
        duration: '110 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
];

// Navigation structure
export const JS_NAVIGATIONS: Record<string, Navigation> = {
  // Chương 1
  'variable-basics': {
    next: { title: 'Scope & Hoisting', href: '/js/scope-hoisting' },
  },
  'scope-hoisting': {
    prev: { title: 'Variable Basics', href: '/js/variable-basics' },
    next: { title: 'var, let, const', href: '/js/var-let-const' },
  },
  'var-let-const': {
    prev: { title: 'Scope & Hoisting', href: '/js/scope-hoisting' },
    next: { title: 'Functions Complete', href: '/js/functions-comprehensive' },
  },

  // Chương 2
  'functions-comprehensive': {
    prev: { title: 'var, let, const', href: '/js/var-let-const' },
    next: { title: 'Closures & Advanced', href: '/js/advanced-functions' },
  },
  'advanced-functions': {
    prev: { title: 'Functions Complete', href: '/js/functions-comprehensive' },
    next: { title: 'Data Types Complete', href: '/js/data-types-comprehensive' },
  },

  // Chương 3
  'data-types-comprehensive': {
    prev: { title: 'Closures & Advanced', href: '/js/advanced-functions' },
    next: { title: 'Objects & Arrays', href: '/js/objects-arrays' },
  },
  'objects-arrays': {
    prev: { title: 'Data Types Complete', href: '/js/data-types-comprehensive' },
    next: { title: 'Modern Syntax', href: '/js/modern-syntax' },
  },
  'modern-syntax': {
    prev: { title: 'Objects & Arrays', href: '/js/objects-arrays' },
  },
};

// Progress calculation helper
export function getProgressForLesson(lessonId: string): Progress {
  const allLessons = JS_TABLE_OF_CONTENTS.flatMap(section => section.lessons);
  const currentIndex = allLessons.findIndex(lesson => lesson.id === lessonId);
  const completed = currentIndex >= 0 ? currentIndex + 1 : 0;
  const total = allLessons.length;
  const percentage = Math.round((completed / total) * 100);

  return {
    completed,
    total,
    percentage,
  };
}

// Helper functions
export function getLessonById(lessonId: string) {
  const allLessons = JS_TABLE_OF_CONTENTS.flatMap(section => section.lessons);
  return allLessons.find(lesson => lesson.id === lessonId);
}

export function getSectionByLessonId(lessonId: string) {
  return JS_TABLE_OF_CONTENTS.find(section =>
    section.lessons.some(lesson => lesson.id === lessonId)
  );
}

export function getTotalCourseDuration(): string {
  const totalMinutes = JS_TABLE_OF_CONTENTS.flatMap(section => section.lessons).reduce(
    (total, lesson) => {
      const minutes = parseInt(lesson.duration?.match(/\d+/)?.[0] || '0');
      return total + minutes;
    },
    0
  );

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

export function getNextLesson(currentLessonId: string): Lesson | null {
  const navigation = JS_NAVIGATIONS[currentLessonId];
  if (!navigation?.next) return null;

  const nextId = navigation.next.href.split('/').pop();
  return getLessonById(nextId || '') || null;
}

export function getPrevLesson(currentLessonId: string): Lesson | null {
  const navigation = JS_NAVIGATIONS[currentLessonId];
  if (!navigation?.prev) return null;

  const prevId = navigation.prev.href.split('/').pop();
  return getLessonById(prevId || '') || null;
}

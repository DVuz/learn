'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Link,
  BookOpen,
  Target,
  Lightbulb,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Code,
  Eye,
  Copy,
  Check,
  Info,
  Zap,
  Star,
  CheckCircle,
  XCircle,
  ExternalLink,
  Image,
  Video,
  Music,
  Download,
  Globe,
} from 'lucide-react';
import {
  HTML_TABLE_OF_CONTENTS,
  HTML_NAVIGATIONS,
  getProgressForLesson,
} from './constants/htmlData';
import HTMLLayout from './components/HTMLLayout';

const navigation = HTML_NAVIGATIONS['links-media'];
const progress = getProgressForLesson('links-media');

// Lý thuyết cơ bản về Links và Media
const linksMediaTheory = {
  introduction: {
    title: 'Giới thiệu về HTML Links và Media Elements',
    content: [
      'HTML Links và Media elements là foundation của modern web, tạo ra interactive và rich content experiences.',
      'Links cung cấp navigation và connection giữa các resources, trong khi media elements embed multimedia content.',
      'Proper implementation của links và media critical cho user experience, accessibility, và SEO performance.',
      'Modern web standards cung cấp powerful features cho responsive media và accessible link behaviors.',
    ],
    importance: [
      'User Navigation: Links tạo ra intuitive navigation pathways cho users',
      'Content Richness: Media elements enhance user engagement với visual và audio content',
      'SEO Value: Proper link structure và media optimization improve search engine rankings',
      'Accessibility: Semantic links và media với proper attributes support assistive technologies',
      'Performance: Optimized media delivery và efficient link structures improve page load times',
      'Cross-platform: Responsive media và adaptive links work across all devices',
    ],
  },
  linkTypes: [
    {
      type: 'Anchor Links (a)',
      description: 'Primary element cho creating hyperlinks và navigation',
      purposes: [
        'External website links',
        'Internal page navigation',
        'Section anchors within page',
        'Email và telephone links',
        'Download triggers',
        'JavaScript event handlers',
      ],
      attributes: [
        'href - Destination URL hoặc anchor',
        'target - Window/tab behavior',
        'rel - Relationship với linked resource',
        'download - Force download behavior',
        'title - Additional information tooltip',
        'aria-label - Accessibility description',
      ],
      semantics: 'Represents hyperlink relationship giữa current document và linked resource',
    },
    {
      type: 'Link Element (link)',
      description: 'Head element cho external resource relationships',
      purposes: [
        'CSS stylesheet linking',
        'Favicon declarations',
        'Preloading resources',
        'DNS prefetching',
        'Alternate versions',
        'Canonical URLs',
      ],
      attributes: [
        'rel - Relationship type',
        'href - Resource URL',
        'type - MIME type',
        'media - Media query conditions',
        'sizes - Icon sizes',
        'crossorigin - CORS settings',
      ],
      semantics: 'Defines relationships giữa current document và external resources',
    },
  ],
  mediaTypes: [
    {
      type: 'Images (img)',
      description: 'Embedding static visual content',
      formats: ['JPEG', 'PNG', 'WebP', 'SVG', 'GIF', 'AVIF'],
      attributes: [
        'src - Image source URL',
        'alt - Alternative text description',
        'width/height - Dimensions',
        'loading - Lazy loading behavior',
        'srcset - Responsive image sources',
        'sizes - Responsive sizing hints',
      ],
      considerations: [
        'File size optimization',
        'Format selection based on content',
        'Responsive image delivery',
        'Alt text cho accessibility',
        'Performance với lazy loading',
      ],
    },
    {
      type: 'Video (video)',
      description: 'Embedding video content với native controls',
      formats: ['MP4', 'WebM', 'OGV'],
      attributes: [
        'src - Video source URL',
        'controls - Show native controls',
        'autoplay - Auto-start playback',
        'loop - Repeat playback',
        'muted - Default audio state',
        'poster - Preview image',
      ],
      considerations: [
        'Multiple format support',
        'Bandwidth optimization',
        'Accessibility với captions',
        'Mobile playback policies',
        'Progressive loading',
      ],
    },
    {
      type: 'Audio (audio)',
      description: 'Embedding audio content',
      formats: ['MP3', 'WAV', 'OGG', 'AAC'],
      attributes: [
        'src - Audio source URL',
        'controls - Show audio controls',
        'autoplay - Auto-start playback',
        'loop - Repeat playback',
        'muted - Default muted state',
        'preload - Loading strategy',
      ],
      considerations: [
        'Format compatibility',
        'File size vs quality',
        'Autoplay restrictions',
        'Accessibility considerations',
        'Bandwidth efficiency',
      ],
    },
  ],
};

// Advanced concepts
const advancedConcepts = [
  {
    title: 'Responsive Images với srcset và sizes',
    description: 'Delivering optimal images based on device capabilities',
    example: `<!-- Responsive image với multiple sources -->
<img
  src="image-800w.jpg"
  srcset="
    image-400w.jpg 400w,
    image-800w.jpg 800w,
    image-1200w.jpg 1200w
  "
  sizes="
    (max-width: 600px) 100vw,
    (max-width: 1000px) 50vw,
    33vw
  "
  alt="Responsive image example"
  loading="lazy"
/>

<!-- Art direction với picture element -->
<picture>
  <source media="(max-width: 600px)" srcset="mobile-image.jpg">
  <source media="(max-width: 1000px)" srcset="tablet-image.jpg">
  <img src="desktop-image.jpg" alt="Art-directed image">
</picture>`,
    useCase: 'Optimal image delivery cho different screen sizes và resolutions',
  },
  {
    title: 'Progressive Web App Links',
    description: 'Advanced link behaviors cho modern web applications',
    example: `<!-- Preloading critical resources -->
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="hero-image.jpg" as="image">
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

<!-- DNS prefetching -->
<link rel="dns-prefetch" href="//external-api.com">
<link rel="preconnect" href="//fonts.googleapis.com" crossorigin>

<!-- Module preloading -->
<link rel="modulepreload" href="./modules/app.js">`,
    useCase: 'Performance optimization và resource management cho SPAs',
  },
  {
    title: 'Media Accessibility & Internationalization',
    description: 'Making media content accessible và multilingual',
    example: `<!-- Video với comprehensive accessibility -->
<video controls poster="video-poster.jpg">
  <source src="video-en.mp4" type="video/mp4">
  <source src="video-en.webm" type="video/webm">

  <!-- Multiple language subtitles -->
  <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English" default>
  <track kind="subtitles" src="subtitles-vi.vtt" srclang="vi" label="Tiếng Việt">
  <track kind="descriptions" src="descriptions-en.vtt" srclang="en" label="Audio descriptions">

  <!-- Fallback content -->
  <p>Your browser doesn't support HTML5 video.
     <a href="video-en.mp4">Download the video</a>
  </p>
</video>`,
    useCase: 'Inclusive media experiences cho diverse audiences',
  },
];

// Best practices với detailed explanations
const bestPractices = {
  links: [
    {
      title: 'Semantic link text',
      description: 'Use descriptive link text thay vì generic phrases như "click here"',
      example: 'Good: "Download user manual PDF" vs Bad: "Click here"',
      benefit: 'Screen readers và users understand link purpose without context',
    },
    {
      title: 'External link indicators',
      description: 'Clearly indicate external links với visual cues và rel attributes',
      example: 'rel="noopener noreferrer" cho external links',
      benefit: 'Security protection và user awareness of navigation behavior',
    },
    {
      title: 'Keyboard accessibility',
      description: 'Ensure all links focusable và navigable với keyboard',
      example: 'Proper focus indicators và logical tab order',
      benefit: 'Accessible navigation cho users relying on keyboard input',
    },
  ],
  media: [
    {
      title: 'Always provide alt text',
      description: 'Every image needs meaningful alt text describing content và context',
      example: 'alt="Graph showing 25% increase in sales from Q1 to Q2"',
      benefit: 'Screen reader users understand image content và meaning',
    },
    {
      title: 'Optimize file sizes',
      description: 'Balance quality với file size cho optimal loading performance',
      example: 'Use WebP cho modern browsers, JPEG fallback cho older browsers',
      benefit: 'Faster page loads especially on mobile connections',
    },
    {
      title: 'Lazy loading implementation',
      description: 'Load images only when needed để improve initial page performance',
      example: 'loading="lazy" attribute cho below-fold images',
      benefit: 'Reduced initial bandwidth usage và faster perceived performance',
    },
  ],
  accessibility: [
    {
      title: 'Focus management',
      description: 'Proper focus indicators và logical navigation flow',
      benefit: 'Clear navigation pathways cho keyboard và screen reader users',
    },
    {
      title: 'Color contrast compliance',
      description: 'Ensure link colors meet WCAG contrast requirements',
      benefit: 'Readable links cho users với visual impairments',
    },
    {
      title: 'Skip links implementation',
      description: 'Provide skip-to-content links cho efficient navigation',
      benefit: 'Faster content access cho assistive technology users',
    },
  ],
};

// FAQ data với comprehensive answers
const linksMediaFAQs = [
  {
    id: 1,
    question: 'Khi nào nên sử dụng target="_blank" và tại sao cần rel="noopener"?',
    answer:
      'Sử dụng target="_blank" cho external links mà users cần reference while staying on your site. Always combine với rel="noopener noreferrer" để prevent security vulnerabilities và performance issues. Tránh overusing vì nó can disrupt user navigation flow.',
    level: 'junior',
    category: 'security',
    detailed: true,
  },
  {
    id: 2,
    question: 'Làm thế nào để implement responsive images effectively?',
    answer:
      'Sử dụng srcset attribute với width descriptors và sizes attribute để specify intended display sizes. For art direction, use picture element với source elements. Consider WebP format với JPEG fallback cho optimal compression và browser compatibility.',
    level: 'mid',
    category: 'performance',
    detailed: true,
  },
  {
    id: 3,
    question: 'Best practices cho video embedding và accessibility?',
    answer:
      'Always provide multiple format sources (MP4, WebM), include poster images, add comprehensive track elements cho subtitles và descriptions. Consider autoplay policies, provide controls, và ensure keyboard navigation works properly.',
    level: 'mid',
    category: 'accessibility',
    detailed: true,
  },
  {
    id: 4,
    question: 'SEO implications của link structure và media optimization?',
    answer:
      'Internal link structure affects page authority distribution. Use descriptive anchor text, implement proper heading hierarchy, optimize image alt text với relevant keywords. Structured data markup enhances rich snippets cho media content.',
    level: 'senior',
    category: 'seo',
    detailed: true,
  },
  {
    id: 5,
    question: 'Performance optimization strategies cho media-heavy pages?',
    answer:
      'Implement lazy loading, use appropriate image formats (WebP, AVIF), optimize video compression, consider CDN delivery, implement progressive loading cho large files. Monitor Core Web Vitals metrics để ensure good user experience.',
    level: 'senior',
    category: 'performance',
    detailed: true,
  },
  {
    id: 6,
    question: 'Modern link prefetching và preloading strategies?',
    answer:
      'Use dns-prefetch cho external domains, preconnect cho critical third-party resources, preload cho critical assets, modulepreload cho ES6 modules. Implement strategic prefetching based on user behavior patterns và analytics data.',
    level: 'senior',
    category: 'advanced',
    detailed: true,
  },
];

// Code examples với live previews
const codeExamples = [
  {
    category: 'Basic Links',
    examples: [
      {
        title: 'Various Link Types',
        description: 'Different types of links và their use cases',
        code: `<!-- Internal page link -->
<a href="/about">About Us</a>

<!-- External website link -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Site <span aria-label="(opens in new tab)">↗</span>
</a>

<!-- Email link -->
<a href="mailto:contact@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us: (123) 456-7890</a>

<!-- Download link -->
<a href="/files/document.pdf" download="user-guide.pdf">
  Download User Guide
</a>

<!-- Section anchor -->
<a href="#section1">Jump to Section 1</a>`,
        render: (
          <div className="space-y-3">
            <div>
              <a href="#" className="text-blue-600 hover:underline">
                About Us
              </a>
            </div>
            <div>
              <a href="#" className="text-blue-600 hover:underline">
                External Site <span className="text-sm">↗</span>
              </a>
            </div>
            <div>
              <a href="#" className="text-blue-600 hover:underline">
                Send Email
              </a>
            </div>
            <div>
              <a href="#" className="text-blue-600 hover:underline">
                Call Us: (123) 456-7890
              </a>
            </div>
            <div>
              <a href="#" className="text-blue-600 hover:underline">
                Download User Guide
              </a>
            </div>
            <div>
              <a href="#" className="text-blue-600 hover:underline">
                Jump to Section 1
              </a>
            </div>
          </div>
        ),
        explanation:
          'Different link types serve specific purposes. External links should open in new tabs với security attributes.',
      },
      {
        title: 'Link Accessibility Features',
        description: 'Making links accessible với proper attributes',
        code: `<!-- Descriptive link với context -->
<a href="/blog/html-best-practices"
   aria-describedby="blog-date">
  HTML Best Practices: Complete Guide
</a>
<span id="blog-date" class="sr-only">Published on March 15, 2024</span>

<!-- Skip navigation link -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- Button-styled link với role -->
<a href="/signup"
   class="btn btn-primary"
   role="button"
   aria-label="Sign up for free account">
  Get Started
</a>`,
        render: (
          <div className="space-y-4">
            <div>
              <a href="#" className="text-blue-600 hover:underline">
                HTML Best Practices: Complete Guide
              </a>
              <div className="text-sm text-gray-500">Published on March 15, 2024</div>
            </div>
            <div>
              <a
                href="#"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
              >
                Skip to main content
              </a>
            </div>
            <div>
              <a
                href="#"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 inline-block"
              >
                Get Started
              </a>
            </div>
          </div>
        ),
        explanation:
          'Accessible links provide context, skip navigation options, và clear labeling cho assistive technologies.',
      },
    ],
  },
  {
    category: 'Image Implementation',
    examples: [
      {
        title: 'Responsive Images',
        description: 'Images that adapt to different screen sizes',
        code: `<!-- Basic responsive image -->
<img
  src="https://via.placeholder.com/800x400/4F46E5/ffffff?text=Desktop"
  srcset="
    https://via.placeholder.com/400x200/4F46E5/ffffff?text=Mobile 400w,
    https://via.placeholder.com/800x400/4F46E5/ffffff?text=Desktop 800w,
    https://via.placeholder.com/1200x600/4F46E5/ffffff?text=Large 1200w
  "
  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
  alt="Responsive image demonstration"
  loading="lazy"
  class="responsive-img"
/>

<!-- Art direction với picture -->
<picture>
  <source
    media="(max-width: 600px)"
    srcset="https://via.placeholder.com/400x600/EF4444/ffffff?text=Mobile+Portrait">
  <source
    media="(max-width: 1000px)"
    srcset="https://via.placeholder.com/800x400/F59E0B/ffffff?text=Tablet+Landscape">
  <img
    src="https://via.placeholder.com/1200x400/10B981/ffffff?text=Desktop+Wide"
    alt="Art-directed responsive image"
    class="responsive-img">
</picture>`,
        render: (
          <div className="space-y-6">
            <div>
              <img
                src="https://via.placeholder.com/800x400/4F46E5/ffffff?text=Desktop"
                alt="Responsive image demonstration"
                className="w-full max-w-md rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600 mt-2">Responsive image với srcset</p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/800x400/10B981/ffffff?text=Desktop+Wide"
                alt="Art-directed responsive image"
                className="w-full max-w-md rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600 mt-2">Picture element cho art direction</p>
            </div>
          </div>
        ),
        explanation:
          'Responsive images automatically serve appropriate sizes based on device capabilities và display context.',
      },
      {
        title: 'Image Optimization Techniques',
        description: 'Performance-optimized image implementation',
        code: `<!-- Lazy loaded image với placeholder -->
<img
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E"
  data-src="https://via.placeholder.com/400x300/6366F1/ffffff?text=Lazy+Loaded"
  alt="Lazy loaded image example"
  loading="lazy"
  class="lazy-image"
/>

<!-- Figure với caption -->
<figure>
  <img
    src="https://via.placeholder.com/600x400/EC4899/ffffff?text=Chart+Data"
    alt="Sales growth chart showing 25% increase from Q1 to Q2 2024"
    width="600"
    height="400"
    loading="lazy"
  />
  <figcaption>
    Quarterly sales growth comparison - Q1 vs Q2 2024
  </figcaption>
</figure>

<!-- Decorative image -->
<img
  src="https://via.placeholder.com/200x200/8B5CF6/ffffff?text=Decorative"
  alt=""
  role="presentation"
  loading="lazy"
/>`,
        render: (
          <div className="space-y-6">
            <div>
              <img
                src="https://via.placeholder.com/400x300/6366F1/ffffff?text=Lazy+Loaded"
                alt="Lazy loaded image example"
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600 mt-2">Lazy loaded với placeholder</p>
            </div>
            <figure>
              <img
                src="https://via.placeholder.com/400x250/EC4899/ffffff?text=Chart+Data"
                alt="Sales growth chart"
                className="rounded-lg shadow-md"
              />
              <figcaption className="text-sm text-gray-600 mt-2 italic">
                Quarterly sales growth comparison - Q1 vs Q2 2024
              </figcaption>
            </figure>
            <div>
              <img
                src="https://via.placeholder.com/150x150/8B5CF6/ffffff?text=Decorative"
                alt=""
                className="rounded-full"
              />
              <p className="text-sm text-gray-600 mt-2">Decorative image (empty alt)</p>
            </div>
          </div>
        ),
        explanation:
          'Optimized images include lazy loading, proper dimensions, meaningful captions, và appropriate alt text.',
      },
    ],
  },
  {
    category: 'Media Elements',
    examples: [
      {
        title: 'Video Implementation',
        description: 'Comprehensive video element với accessibility',
        code: `<!-- Accessible video với multiple sources -->
<video
  controls
  poster="https://via.placeholder.com/640x360/1F2937/ffffff?text=Video+Poster"
  preload="metadata"
  width="640"
  height="360"
>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">

  <!-- Subtitles và descriptions -->
  <track
    kind="subtitles"
    src="subtitles-en.vtt"
    srclang="en"
    label="English"
    default>
  <track
    kind="subtitles"
    src="subtitles-vi.vtt"
    srclang="vi"
    label="Tiếng Việt">
  <track
    kind="descriptions"
    src="descriptions.vtt"
    srclang="en"
    label="Audio descriptions">

  <!-- Fallback content -->
  <p>
    Your browser doesn't support HTML5 video.
    <a href="video.mp4">Download the video file</a>.
  </p>
</video>

<!-- Audio element -->
<audio controls preload="none">
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  <p>
    Your browser doesn't support HTML5 audio.
    <a href="audio.mp3">Download the audio file</a>.
  </p>
</audio>`,
        render: (
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="bg-gray-800 text-white p-8 rounded text-center">
                <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p>Video Player Placeholder</p>
                <p className="text-sm text-gray-400 mt-2">
                  Multiple sources, subtitles, descriptions
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="bg-gray-700 text-white p-4 rounded flex items-center gap-4">
                <Music className="w-8 h-8 text-gray-400" />
                <div>
                  <p>Audio Player Placeholder</p>
                  <p className="text-sm text-gray-400">Multiple format support</p>
                </div>
              </div>
            </div>
          </div>
        ),
        explanation:
          'Comprehensive media implementation includes multiple formats, accessibility features, và graceful fallbacks.',
      },
    ],
  },
];

export default function HTMLLinksMediaPage() {
  const [activeSection, setActiveSection] = useState('theory');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [filterLevel, setFilterLevel] = useState<'all' | 'junior' | 'mid' | 'senior'>('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredFAQs = linksMediaFAQs.filter(faq => {
    const levelMatch = filterLevel === 'all' || faq.level === filterLevel;
    const categoryMatch = filterCategory === 'all' || faq.category === filterCategory;
    return levelMatch && categoryMatch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const copyCode = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'junior':
        return 'bg-green-100 text-green-800';
      case 'mid':
        return 'bg-yellow-100 text-yellow-800';
      case 'senior':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'security':
        return 'bg-red-100 text-red-800';
      case 'performance':
        return 'bg-blue-100 text-blue-800';
      case 'accessibility':
        return 'bg-green-100 text-green-800';
      case 'seo':
        return 'bg-purple-100 text-purple-800';
      case 'advanced':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <HTMLLayout
      currentLesson="Liên kết và Media"
      tableOfContents={HTML_TABLE_OF_CONTENTS}
      navigation={navigation}
      progress={progress}
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 text-lg">
            <Link className="w-5 h-5 mr-2" />
            HTML Links & Media
          </Badge>

          <h1 className="text-5xl font-bold text-gray-900" id="links-media">
            🔗 HTML Links & Media - Lý Thuyết Chuyên Sâu
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Khám phá comprehensive về HTML Links và Media elements: từ semantic linking,
            accessibility, performance optimization đến modern responsive media delivery techniques.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { id: 'theory', label: 'Lý thuyết cơ bản', icon: BookOpen },
            { id: 'links', label: 'Link Types', icon: ExternalLink },
            { id: 'media', label: 'Media Elements', icon: Image },
            { id: 'examples', label: 'Ví dụ thực tế', icon: Code },
            { id: 'practices', label: 'Best Practices', icon: Lightbulb },
            { id: 'advanced', label: 'Advanced Concepts', icon: Zap },
            { id: 'faqs', label: 'Q&A', icon: HelpCircle },
          ].map(section => {
            const Icon = section.icon;
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'outline'}
                onClick={() => setActiveSection(section.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {section.label}
              </Button>
            );
          })}
        </div>

        {/* Theory Section */}
        {activeSection === 'theory' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              Lý thuyết cơ bản về HTML Links & Media
            </h2>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">
                  {linksMediaTheory.introduction.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {linksMediaTheory.introduction.content.map((item, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>

                <Alert>
                  <Star className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Tại sao Links & Media quan trọng:</strong> Chúng tạo ra foundation cho
                    modern web experiences, combining navigation, content richness, và user
                    engagement.
                  </AlertDescription>
                </Alert>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-4">
                    Tầm quan trọng của Links & Media:
                  </h4>
                  <ul className="space-y-2">
                    {linksMediaTheory.introduction.importance.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Links Section */}
        {activeSection === 'links' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <ExternalLink className="w-8 h-8 text-blue-600" />
              Chi tiết các loại HTML Links
            </h2>

            <div className="space-y-8">
              {linksMediaTheory.linkTypes.map((linkType, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-800">{linkType.type}</CardTitle>
                    <p className="text-gray-600">{linkType.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Purposes:</h4>
                        <ul className="space-y-2">
                          {linkType.purposes.map((purpose, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <span className="text-gray-700">{purpose}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Attributes:</h4>
                        <ul className="space-y-2">
                          {linkType.attributes.map((attr, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              <span className="text-gray-700 text-sm">{attr}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Semantic meaning:</strong> {linkType.semantics}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Media Section */}
        {activeSection === 'media' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Image className="w-8 h-8 text-blue-600" />
              Chi tiết các Media Elements
            </h2>

            <div className="space-y-8">
              {linksMediaTheory.mediaTypes.map((mediaType, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-800">{mediaType.type}</CardTitle>
                    <p className="text-gray-600">{mediaType.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Supported Formats:</h4>
                        <div className="flex flex-wrap gap-2">
                          {mediaType.formats.map((format, i) => (
                            <Badge key={i} className="bg-blue-100 text-blue-800">
                              {format}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Attributes:</h4>
                        <ul className="space-y-1">
                          {mediaType.attributes.map((attr, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-700 font-mono bg-gray-100 px-2 py-1 rounded"
                            >
                              {attr}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Considerations:</h4>
                        <ul className="space-y-2">
                          {mediaType.considerations.map((consideration, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                              <span className="text-gray-700 text-sm">{consideration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Examples Section */}
        {activeSection === 'examples' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Code className="w-8 h-8 text-blue-600" />
              Ví dụ thực tế với giải thích chi tiết
            </h2>

            <div className="space-y-8">
              {codeExamples.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
                  {category.examples.map((example, exampleIndex) => (
                    <Card key={exampleIndex} className="shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-lg">{example.title}</CardTitle>
                        <p className="text-gray-600">{example.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Tabs defaultValue="code" className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="code" className="flex items-center gap-2">
                              <Code className="w-4 h-4" />
                              HTML Code
                            </TabsTrigger>
                            <TabsTrigger value="preview" className="flex items-center gap-2">
                              <Eye className="w-4 h-4" />
                              Live Preview
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent value="code" className="mt-4">
                            <div className="relative">
                              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                <code>{example.code}</code>
                              </pre>
                              <Button
                                size="sm"
                                variant="outline"
                                className="absolute top-2 right-2"
                                onClick={() =>
                                  copyCode(example.code, `example-${categoryIndex}-${exampleIndex}`)
                                }
                              >
                                {copiedCode === `example-${categoryIndex}-${exampleIndex}` ? (
                                  <Check className="w-4 h-4" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </TabsContent>

                          <TabsContent value="preview" className="mt-4">
                            <div className="border border-gray-200 p-6 rounded-lg bg-white">
                              {example.render}
                            </div>
                          </TabsContent>
                        </Tabs>

                        <Alert>
                          <Lightbulb className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Giải thích:</strong> {example.explanation}
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Best Practices Section */}
        {activeSection === 'practices' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-blue-600" />
              Best Practices chi tiết
            </h2>

            <div className="space-y-8">
              {Object.entries(bestPractices).map(([category, practices]) => (
                <Card key={category} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-800 capitalize">
                      {category} Best Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {practices.map((practice, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4 space-y-2">
                        <h4 className="font-semibold text-gray-900">{practice.title}</h4>
                        <p className="text-gray-700">{practice.description}</p>
                        {'example' in practice && practice.example && (
                          <p className="text-sm bg-gray-100 p-2 rounded font-mono">
                            {practice.example}
                          </p>
                        )}
                        {'benefit' in practice && practice.benefit && (
                          <p className="text-sm text-green-700">✓ {practice.benefit}</p>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Advanced Concepts */}
        {activeSection === 'advanced' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-600" />
              Advanced Concepts & Techniques
            </h2>

            <div className="space-y-6">
              {advancedConcepts.map((concept, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-800">{concept.title}</CardTitle>
                    <p className="text-gray-600">{concept.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{concept.example}</code>
                    </pre>
                    <Alert>
                      <Star className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Use case:</strong> {concept.useCase}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {activeSection === 'faqs' && (
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-blue-600" />
                Câu hỏi phỏng vấn chuyên sâu
              </h2>
              <Badge className="bg-blue-100 text-blue-800">{filteredFAQs.length} câu hỏi</Badge>
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
                  {['all', 'security', 'performance', 'accessibility', 'seo', 'advanced'].map(
                    category => (
                      <Button
                        key={category}
                        size="sm"
                        variant={filterCategory === category ? 'default' : 'outline'}
                        onClick={() => setFilterCategory(category)}
                        className="text-xs"
                      >
                        {category === 'all' ? 'Tất cả' : category}
                      </Button>
                    )
                  )}
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
                          {faq.detailed && (
                            <Badge className="bg-orange-100 text-orange-800">Chi tiết</Badge>
                          )}
                        </div>
                        <CardTitle
                          className="text-lg cursor-pointer hover:text-blue-600 transition-colors"
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
        )}

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-8 rounded-r-lg">
          <h3 className="font-bold text-blue-900 text-xl mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            Tóm tắt kiến thức chuyên sâu
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>
                  HTML Links tạo ra web connectivity và navigation foundation cho user experience
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>
                  Media elements enable rich content delivery với comprehensive accessibility
                  support
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>
                  Responsive images và progressive loading optimize performance across devices
                </span>
              </li>
            </ul>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>
                  Security attributes (rel="noopener") prevent vulnerabilities trong external links
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>
                  Accessibility features như alt text, captions critical cho inclusive design
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>
                  Modern techniques như preloading, lazy loading enhance performance significantly
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </HTMLLayout>
  );
}

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Zap, Rocket, BookOpen, Star } from 'lucide-react';
import Link from 'next/link';

interface KnowledgeCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  buttonText: string;
  gradient: string;
  badgeText: string;
  href: string;
}

const KnowledgeCard = ({
  title,
  description,
  features,
  icon: Icon,
  buttonText,
  gradient,
  badgeText,
  href,
}: KnowledgeCardProps) => (
  <Card className="group relative overflow-hidden border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    {/* Gradient Background */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
    />

    {/* Header với Icon */}
    <CardHeader className="relative pb-4">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`p-3 rounded-xl cursor-pointer bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <Badge variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
          {badgeText}
        </Badge>
      </div>
      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
        {title}
      </CardTitle>
      <CardDescription className="text-gray-600 leading-relaxed">{description}</CardDescription>
    </CardHeader>

    <CardContent className="relative space-y-6">
      {/* Features List */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`} />
            <span className="group-hover:text-gray-700 transition-colors">{feature}</span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <Link href={href}>
        <Button
          className={`w-full bg-gradient-to-r ${gradient} cursor-pointer hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium`}
          size="lg"
        >
          {buttonText}
        </Button>
      </Link>
    </CardContent>
  </Card>
);

export default function FrontendKnowledgeHub() {
  const knowledgeCards = [
    {
      icon: Code,
      title: 'HTML - Cấu trúc nền tảng',
      description: 'Ngôn ngữ đánh dấu siêu văn bản tạo cấu trúc và nội dung cho trang web hiện đại',
      features: [
        'Semantic HTML5 Elements',
        'Forms & Validation',
        'Accessibility (a11y)',
        'SEO & Meta Tags',
      ],
      gradient: 'from-orange-500 to-red-500',
      badgeText: 'Cơ bản',
      buttonText: 'Khám phá HTML',
      href: '/html',
    },
    {
      icon: Palette,
      title: 'CSS - Thiết kế & Giao diện',
      description: 'Cascading Style Sheets để tạo giao diện đẹp mắt và responsive',
      features: [
        'Flexbox & CSS Grid',
        'Responsive Design',
        'Animations & Transforms',
        'CSS Variables & Functions',
      ],
      gradient: 'from-blue-500 to-indigo-600',
      badgeText: 'Styling',
      buttonText: 'Học CSS',
      href: '/css',
    },
    {
      icon: Zap,
      title: 'JavaScript - Tương tác động',
      description: 'Ngôn ngữ lập trình mạnh mẽ cho web với khả năng tương tác phong phú',
      features: [
        'DOM Manipulation',
        'Event Handling',
        'Async/Await Programming',
        'Modern ES6+ Syntax',
      ],
      gradient: 'from-yellow-500 to-orange-500',
      badgeText: 'Tương tác',
      buttonText: 'Thực hành JS',
      href: '/js',
    },
  ];

  const techStack = [
    { name: 'HTML5', icon: '🌐', color: 'text-orange-600' },
    { name: 'CSS3', icon: '🎨', color: 'text-blue-600' },
    { name: 'JavaScript', icon: '⚡', color: 'text-yellow-600' },
    { name: 'React', icon: '⚛️', color: 'text-cyan-600' },
    { name: 'TypeScript', icon: '🔷', color: 'text-blue-700' },
    { name: 'Tailwind', icon: '🌊', color: 'text-teal-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Frontend Knowledge Hub</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
              Kiến Thức Frontend
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Từ HTML cơ bản đến JavaScript nâng cao - Hành trình trở thành Frontend Developer
              chuyên nghiệp
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className={`font-medium ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Cards */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {knowledgeCards.map((card, index) => (
              <KnowledgeCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Links */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white shadow-lg">
                  <Rocket className="w-5 h-5" />
                  <span className="font-medium">Bắt đầu ngay</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900">Sẵn sàng bắt đầu hành trình?</h2>

                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                  Mỗi công nghệ đều có vai trò quan trọng trong việc xây dựng website hiện đại. Hãy
                  bắt đầu từ HTML và tiến dần lên các công nghệ phức tạp hơn.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 text-sm hover:opacity-90 transition-opacity">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Tài liệu đầy đủ
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 text-sm hover:opacity-90 transition-opacity">
                  <Zap className="w-4 h-4 mr-2" />
                  Cập nhật liên tục
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 text-sm hover:opacity-90 transition-opacity">
                  <Star className="w-4 h-4 mr-2" />
                  Từ cơ bản đến nâng cao
                </Badge>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/html">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Code className="w-5 h-5 mr-2" />
                    Bắt đầu với HTML
                  </Button>
                </Link>

                <Link href="/css">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Palette className="w-5 h-5 mr-2" />
                    Tiếp tục với CSS
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

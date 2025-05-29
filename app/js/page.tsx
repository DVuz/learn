'use client';

import { motion } from 'framer-motion';
import { BookOpen, Check, ChevronDown, ChevronUp, Copy, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import JSLayout from './components/JSLayout';
import { JS_TABLE_OF_CONTENTS } from './constants/jsData';
import { jsFAQs, jsTheory } from './data/jsData';

export default function JavaScriptBasicsPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'interview'>('overview');
  const [selectedFAQLevel, setSelectedFAQLevel] = useState<'all' | 'junior' | 'mid' | 'senior'>(
    'all'
  );
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [expandedConcept, setExpandedConcept] = useState<number | null>(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Tổng quan JavaScript', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'interview', label: 'Câu hỏi phỏng vấn', icon: <MessageCircle className="w-4 h-4" /> },
  ] as const;

  const filteredFAQs =
    selectedFAQLevel === 'all' ? jsFAQs : jsFAQs.filter(faq => faq.level === selectedFAQLevel);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CodeBlock = ({ code, title, id }: { code: string; title?: string; id: string }) => (
    <div className="relative group">
      {title && <div className="text-sm font-medium text-gray-700 mb-2">{title}</div>}
      <div className="relative bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-sm">
          <span className="text-gray-300">JavaScript</span>
          <button
            onClick={() => copyToClipboard(code, id)}
            className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
          >
            {copiedCode === id ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-sm text-green-400 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );

  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-2xl">
            🚀
          </div>
          <h2 className="text-3xl font-bold text-yellow-800">{jsTheory.introduction.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {jsTheory.introduction.content.map((item, index) => (
              <p key={index} className="text-gray-700 leading-relaxed flex items-start gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                {item}
              </p>
            ))}
          </div>

          <div className="bg-white/70 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              📅 Lịch sử phát triển
            </h3>
            <div className="space-y-3">
              {jsTheory.introduction.history.slice(0, 4).map((event, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Core Concepts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl border border-gray-200 p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="text-2xl">🏗️</span>
          Khái niệm cơ bản JavaScript
        </h2>

        <div className="space-y-4">
          {jsTheory.fundamentals.map((concept, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedConcept(expandedConcept === index ? null : index)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{concept.concept}</h3>
                      <p className="text-gray-600 mt-1">{concept.description}</p>
                    </div>
                  </div>
                  {expandedConcept === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {expandedConcept === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-gray-200 p-6 bg-gray-50"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">📝 Giải thích chi tiết:</h4>
                      <p className="text-gray-700 mb-4">{concept.purpose}</p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                          <strong>Ứng dụng:</strong> {concept.useCase}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">💻 Ví dụ code:</h4>
                      <CodeBlock code={concept.examples.join('\n\n')} id={`concept-${index}`} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* JavaScript Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-200 p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="text-2xl">⚡</span>
          Tính năng đặc trưng của JavaScript
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jsTheory.features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{feature.feature}</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {feature.introduced}
                </span>
              </div>
              <p className="text-gray-600 mb-3">{feature.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    {feature.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{feature.importance}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderInterviewTab = () => (
    <div className="space-y-6">
      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          🎯 Lọc câu hỏi theo level:
        </h3>
        <div className="flex flex-wrap gap-3">
          {(['all', 'junior', 'mid', 'senior'] as const).map(level => (
            <button
              key={level}
              onClick={() => setSelectedFAQLevel(level)}
              className={`px-6 py-3 rounded-lg border-2 transition-all font-medium ${
                selectedFAQLevel === level
                  ? 'bg-purple-500 text-white border-purple-500 shadow-lg'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300 hover:bg-purple-50'
              }`}
            >
              {level === 'all' ? 'Tất cả' : level.charAt(0).toUpperCase() + level.slice(1)}
              <span className="ml-2 text-xs opacity-75">
                (
                {level === 'all' ? jsFAQs.length : jsFAQs.filter(faq => faq.level === level).length}
                )
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
              className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        faq.level === 'junior'
                          ? 'bg-green-100 text-green-800'
                          : faq.level === 'mid'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {faq.level}
                    </span>
                    <span className="text-xs text-gray-500">#{faq.id}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            </button>

            {expandedFAQ === faq.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-gray-200 p-6 bg-gray-50"
              >
                <div className="space-y-4">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>

                  {faq.example && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        💡 Ví dụ minh họa:
                      </h4>
                      <CodeBlock code={faq.example} id={`faq-${faq.id}`} />
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🤔</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Không có câu hỏi nào</h3>
          <p className="text-gray-500">Không tìm thấy câu hỏi nào cho level này.</p>
        </div>
      )}
    </div>
  );

  return (
    <JSLayout
      currentLesson="JavaScript Căn Bản"
      tableOfContents={JS_TABLE_OF_CONTENTS}
      navigation={{
        next: { title: 'Variables & Data Types', href: '/js/variables' },
      }}
      progress={{
        completed: 1,
        total: 15,
        percentage: 6.7,
      }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-xl mb-8 overflow-hidden">
        <div className="px-8 py-12 relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">JavaScript Căn Bản 🚀</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
              Khám phá ngôn ngữ lập trình phổ biến nhất thế giới với lý thuyết cơ bản và câu hỏi
              phỏng vấn thực tế
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-3 px-6 py-6 text-base font-medium transition-all ${
                activeTab === tab.id
                  ? 'text-purple-600 bg-purple-50 border-b-4 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'interview' && renderInterviewTab()}
      </div>
    </JSLayout>
  );
}

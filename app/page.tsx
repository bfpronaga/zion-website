import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary-blue mb-4 font-display">
            シオンとの架け橋
          </h1>
          <p className="text-xl text-gray-600">
            A Bridge between Zion and Japan
          </p>
          <p className="text-lg text-gray-500 mt-4">
            MVP Homepage Prototypes
          </p>
        </div>

        <div className="grid md:grid-columns gap-8">
          <Link 
            href="/modern"
            className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent-blue"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-blue text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                ✨
              </div>
              <h2 className="text-2xl font-bold text-primary-blue font-display">
                Modern Version
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              モダンなレイアウトで再構成されたホームページ。コンテンツの順序を最適化し、現代的なデザインパターンを採用しています。
            </p>
            <div className="flex items-center text-accent-blue font-semibold group-hover:translate-x-2 transition-transform">
              View Modern Version
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link 
            href="/original"
            className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-blue"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                📋
              </div>
              <h2 className="text-2xl font-bold text-primary-blue font-display">
                Original Structure
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              元のコンテンツ構造とテキストを維持しつつ、デザインのみを洗練させたバージョンです。
            </p>
            <div className="flex items-center text-primary-blue font-semibold group-hover:translate-x-2 transition-transform">
              View Original Structure
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>両バージョンをご確認いただき、ご希望のスタイルをお選びください</p>
        </div>
      </div>
    </div>
  );
}

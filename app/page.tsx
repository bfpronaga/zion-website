'use client';

import Link from 'next/link';
import Image from 'next/image';
import YouTubeGrid from '@/app/components/YouTubeGrid';
import './styles/home.css';

export default function Home() {
  // Prevent all link clicks and form submissions for mock demo
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* Logo Header */}
      <header className="logo-header">
        <div className="logo-container">
          <Link href="/" className="logo" onClick={handleClick}>
            <Image
              src="/images/logo-header.png"
              alt="シオンとの架け橋 | A Bridge between Zion and Japan"
              width={340}
              height={55}
              priority
            />
          </Link>
          <div className="header-cta">
            <p className="header-cta-text">
              シオンとの架け橋では、イスラエルの現地メディアから取材した情報を、週２回の無料メールマガジンで配信中です。
              イスラエル・中東和平に興味をお持なら、ぜひ今すぐご登録下さい！
            </p>
            <a href="#newsletter" className="header-cta-button" onClick={handleClick}>
              詳しくはこちらへ
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content-split">
          <div className="hero-text">
            <h2 className="hero-title-animated">
              イスラエルと日本を<br />つなぐ架け橋として
            </h2>
            <p className="hero-desc-animated">
              シオンとの架け橋では、イスラエルの現地メディアから取材した最新情報を、週2回の無料メールマガジンで配信しています。4000年の歴史、文化、そして今を知る旅へようこそ。
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">2,000+</div>
                <div className="stat-label">購読者</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20年</div>
                <div className="stat-label">活動実績</div>
              </div>
            </div>
            <a href="#newsletter" className="cta-button cta-animated" onClick={handleClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              無料メールマガジンに登録
            </a>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container arch-frame">
              <Image
                src="/images/western-wall-prayer.jpg"
                alt="嘆きの壁"
                fill
                className="hero-image"
                priority
                style={{ objectPosition: 'center center' }}
              />
              <div className="image-overlay"></div>
              <div className="arch-mask"></div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="youtube-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">イスラエル・ニュース YouTube配信中！</h2>
            <p className="section-subtitle">
              最新のイスラエル情勢や歴史、文化について、動画でわかりやすく解説しています。
            </p>
          </div>
          <YouTubeGrid
            videos={[
              {
                id: 'JMOkQ8ZGtCI',
                title: 'レバノンでイスラエル─神の中東の平和',
                badge: 'NEW',
              },
              {
                id: 'sNnZ3VaJGD8',
                title: 'なぜどこは破壊され、シメオンは？',
                badge: '教育コンテンツ',
              },
            ]}
          />
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">最新イベント情報</h2>
            <p className="section-subtitle">
              定期的に開催されるセミナーやフォーラムで、イスラエルについてより深く学べます。
            </p>
          </div>
          <div className="event-banner-image">
            <Image
              src="/images/asia-messianic-forum-2026.gif"
              alt="アジア・メシアニック・フォーラム 2026"
              width={1200}
              height={300}
              className="event-image"
              style={{ objectFit: 'contain', borderRadius: '16px' }}
              unoptimized
            />
          </div>
          <div className="event-banner-image">
            <Image
              src="/images/seminar-yosef-shulam-2026.jpg"
              alt="2026 ヨセフ・シュラム師 来日セミナー"
              width={1200}
              height={600}
              className="event-image"
              style={{ objectFit: 'cover', borderRadius: '16px' }}
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">コンテンツを探索</h2>
            <p className="section-subtitle">
              イスラエルの歴史、文化、最新ニュースまで、幅広いコンテンツをお届けします。
            </p>
          </div>
          <div className="content-cards">
            <div className="content-card">
              <div className="card-icon blue">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="card-title">ISRAEL NOW!</h3>
              <p className="card-description">
                週2回配信のメールマガジン。イスラエルの現地メディアから厳選した最新ニュースを日本語で。バックナンバーもご覧いただけます。
              </p>
              <a href="#" className="card-link" onClick={handleClick}>
                詳しく見る
                <span>→</span>
              </a>
            </div>
            <div className="content-card">
              <div className="card-icon coral">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="card-title">架け橋ビデオ</h3>
              <p className="card-description">
                証言ビデオ「イスラエルへの祈り～時を越えて」をはじめ、すべてのDVD動画をオンラインで公開。貴重な歴史的証言をご覧ください。
              </p>
              <a href="#" className="card-link" onClick={handleClick}>
                動画を見る
                <span>→</span>
              </a>
            </div>
            <div className="content-card">
              <div className="card-icon gold">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="card-title">イスラエルについて</h3>
              <p className="card-description">
                4000年の歴史、宗教、文化、そして現代のイスラエル。聖書の民から建国、和平プロセスまで、詳しく解説しています。
              </p>
              <a href="#" className="card-link" onClick={handleClick}>
                学ぶ
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section" id="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="section-title" style={{ color: 'white' }}>
              イスラエルメールマガジン
            </h2>
            <p style={{ opacity: 0.95, fontSize: '1.1rem', marginBottom: 0 }}>
              イスラエルの現地メディアから取材した情報を、週2回の無料メールマガジンで配信中です。
              <br />
              イスラエル・中東和平に興味をお持ちなら、ぜひ今すぐご登録ください！
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="メールアドレスを入力"
                required
              />
              <button type="submit" className="newsletter-button">
                無料登録
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">その他のコンテンツ</h2>
          </div>
          <div className="content-cards">
            <div className="content-card">
              <div className="card-icon blue">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <h3 className="card-title">バラガン・コラム</h3>
              <p className="card-description">
                イスラエル在住のスタッフが現地の生の情報をお届け。「バラガン」はヘブライ語で「ごちゃごちゃ」という意味。多様なイスラエルの日常を覗いてみませんか。
              </p>
              <a href="#" className="card-link" onClick={handleClick}>
                コラムを読む
                <span>→</span>
              </a>
            </div>
            <div className="content-card">
              <div className="card-icon coral">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="card-title">パラシャット・シャブア</h3>
              <p className="card-description">
                ユダヤ人の聖書の学び「パラシャット・シャブア」の毎週の学びを公開中。古代から続く伝統的な学びの方法を体験できます。
              </p>
              <a href="#" className="card-link" onClick={handleClick}>
                学びを始める
                <span>→</span>
              </a>
            </div>
            <div className="content-card">
              <div className="card-icon gold">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="card-title">オンライン聖書講座</h3>
              <p className="card-description">
                ご自宅で気軽に学べるオンライン聖書講座を開講中。イスラエルの歴史と文化を、聖書を通して深く理解できます。
              </p>
              <a href="#" className="card-link" onClick={handleClick}>
                講座を見る
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          {/* Contact Information */}
          <div className="footer-section footer-contact">
            <h3 className="footer-title">シオンとの架け橋事務局</h3>
            <p className="footer-subtitle">A Bridge between Zion and Japan (BBZJ)</p>
            <div className="footer-address">
              <p>〒650-0027 神戸市中央区中町通2-2-18 平戸ビル4F（JR神戸駅前）</p>
              <p>電話：078-341-7501</p>
              <p>ファックス：078-341-7502</p>
              <p>メールアドレス：<a href="mailto:news@zion-jpn.or.jp" onClick={handleClick}>news@zion-jpn.or.jp</a></p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-nav-columns">
            {/* Column 1 */}
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">メインメニュー</h4>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={handleClick}>Home</a></li>
                <li><a href="#" onClick={handleClick}>シオンとの架け橋とは</a></li>
                <li><a href="#" onClick={handleClick}>ISRAEL NOW! について</a></li>
                <li><a href="#" onClick={handleClick}>ISRAEL NOW! お申込み</a></li>
                <li><a href="#" onClick={handleClick}>バックナンバー2023年～</a></li>
                <li><a href="#" onClick={handleClick}>バックナンバー～2022年</a></li>
              </ul>
              <h4 className="footer-nav-title" style={{ marginTop: '1rem' }}>予備知識</h4>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={handleClick}>知っておくと便利な予備知識</a></li>
                <li><a href="#" onClick={handleClick}>イスラエルの国会・クネセト</a></li>
                <li><a href="#" onClick={handleClick}>ニュースによく出る政党</a></li>
                <li><a href="#" onClick={handleClick}>政治と宗教のややこしい関係</a></li>
                <li><a href="#" onClick={handleClick}>ニュース用語</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">イスラエルについて</h4>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={handleClick}>4000年の歴史</a></li>
                <li><a href="#" onClick={handleClick}>聖書の民</a></li>
                <li><a href="#" onClick={handleClick}>イエスも生きた第２神殿時代</a></li>
                <li><a href="#" onClick={handleClick}>ディアスポラ後のユダヤ人</a></li>
                <li><a href="#" onClick={handleClick}>建国とその後の歩み</a></li>
                <li><a href="#" onClick={handleClick}>和平への歩み</a></li>
                <li><a href="#" onClick={handleClick}>ガザ対イスラエル</a></li>
                <li><a href="#" onClick={handleClick}>イスラエルと近隣諸国</a></li>
              </ul>
              <h4 className="footer-nav-title" style={{ marginTop: '1rem' }}>イスラエルの宗教事情</h4>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={handleClick}>イスラエルの宗教モザイク</a></li>
                <li><a href="#" onClick={handleClick}>キリスト教とユダヤ教</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">ユダヤの文化</h4>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={handleClick}>ユダヤ歴</a></li>
                <li><a href="#" onClick={handleClick}>祭りと祭日</a></li>
                <li><a href="#" onClick={handleClick}>ヘブライ語</a></li>
                <li><a href="#" onClick={handleClick}>コシャー（食物規定）</a></li>
                <li><a href="#" onClick={handleClick}>イスラエルで大人気、日本食?</a></li>
              </ul>
              <h4 className="footer-nav-title" style={{ marginTop: '1rem' }}>バラガン・コラム　最新記事</h4>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={handleClick}>コロナ渦中のホロコースト追悼日</a></li>
                <li><a href="#" onClick={handleClick}>ホロコーストとジョーク？！</a></li>
                <li><a href="#" onClick={handleClick}>イスラエルでも好評、ホロコースト・コメディ「ジョジョ・ラビット」</a></li>
                <li><a href="#" onClick={handleClick}>再々総選挙とネタニヤフ免責問題</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">シオンとの架け橋出版部</h4>
              <div className="footer-video-section">
                <h5 className="footer-video-title">証言ビデオ：イスラエルへの祈り～時を越えて</h5>
                <p className="footer-video-desc">
                  イスラエル建国を誰も信じなかった昭和初年の祈りの運動を知る人達の貴重な証言ビデオです。
                </p>
              </div>
              <h4 className="footer-nav-title" style={{ marginTop: '1rem' }}>架け橋ビデオ</h4>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={handleClick}>架け橋ビデオ</a></li>
              </ul>
              <h4 className="footer-nav-title" style={{ marginTop: '1rem' }}>リンク集</h4>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={handleClick}>リンク集</a></li>
              </ul>
              <h4 className="footer-nav-title" style={{ marginTop: '1rem' }}>その他</h4>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={handleClick}>イスラエルの産業</a></li>
                <li><a href="#" onClick={handleClick}>ガリラヤ湖とガリラヤ地方</a></li>
                <li><a href="#" onClick={handleClick}>バラガン・コラム－イスラエルあれこれ</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-container">
            <p>&copy; 2026 シオンとの架け橋 | A Bridge between Zion and Japan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

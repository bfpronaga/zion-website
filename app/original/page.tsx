import Link from 'next/link';
import '../modern/modern.css'; // Reuse styling

export const metadata = {
  title: 'オリジナル版 | シオンとの架け橋',
  description: 'イスラエルの現地メディアから取材した情報を、週2回の無料メールマガジンで配信中です。',
};

export default function OriginalPage() {
  return (
    <div>
      {/* Logo Header */}
      <header className="logo-header">
        <div className="logo-container">
          <Link href="/original" className="logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"></path>
              </svg>
            </div>
            <div className="logo-text">
              <h1>シオンとの架け橋</h1>
              <p>A Bridge between Zion and Japan</p>
            </div>
          </Link>
          <Link href="/modern" className="version-toggle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            モダン版を見る
          </Link>
        </div>
      </header>

      {/* Announcements */}
      <section style={{ padding: '3rem 2rem', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ fontSize: '1.3rem', lineHeight: '2' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>
                <a href="#" style={{ color: 'var(--accent-blue)' }}>
                  ２０２６ アジア・メシアニック・フォーラムは １１月７日（土）大阪開催！
                </a>
              </strong>
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <a href="#" style={{ color: 'var(--primary-blue)' }}>
                ●ＡＭＦに続いてユダ・バハナ師来日セミナー：１１月１２日（木）名古屋、１４日（土）東京
              </a>
            </p>
            <p>
              <a href="#" style={{ color: 'var(--primary-blue)' }}>
                ●ユダヤ人の聖書の学び「パラシャット・シャブア」の毎週の学びを公開しています。
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="section-title" style={{ color: 'white' }}>
              シオンとの架け橋では、イスラエルメールマガジンを無料メールマガジンで配信中です。
            </h2>
            <p style={{ opacity: 0.95, fontSize: '1.1rem', marginBottom: 0 }}>
              シオンとの架け橋では、イスラエルの現地メディアから取材した情報を、週２回の無料メールマガジンで配信中です。
              <br />
              イスラエル・中東和平に興味をお持なら、ぜひ今すぐご登録下さい！
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="メールアドレスを入力"
                required
              />
              <button type="submit" className="newsletter-button">
                詳しくはこちらへ
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="youtube-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">イスラエル・ニュース　YouTube配信中！</h2>
          </div>
          <div className="video-grid">
            <div className="video-card">
              <div className="video-wrapper">
                <iframe
                  width="336"
                  height="189"
                  src="https://www.youtube.com/embed/G_aHzZN_XUI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="video-card">
              <div className="video-wrapper">
                <iframe
                  width="336"
                  height="189"
                  src="https://www.youtube.com/embed/HV-nNBbfW_g"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Bible Course */}
      <section style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 className="section-title">ご自宅で気軽に学べる オンライン聖書講座</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
            イスラエルの歴史と文化を、聖書を通して深く理解できます。
          </p>
          <a href="#" className="cta-button">
            詳しくはこちら
          </a>
        </div>
      </section>

      {/* ISRAEL NOW Section */}
      <section style={{ background: 'var(--bg-light)', padding: '3rem 2rem' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--primary-blue)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            「ISRAEL NOW!」は「イスラエルメールマガジン」に替わる週2回メールで配信するイスラエル関連時事ニュースです。
          </p>
          <div className="content-cards">
            <div className="content-card" style={{ textAlign: 'center' }}>
              <h3 className="card-title">バックナンバー2023年～</h3>
              <a href="#" className="card-link" style={{ justifyContent: 'center' }}>
                詳しく見る →
              </a>
            </div>
            <div className="content-card" style={{ textAlign: 'center' }}>
              <h3 className="card-title">メールでの購読申込</h3>
              <a href="#" className="card-link" style={{ justifyContent: 'center' }}>
                詳しく見る →
              </a>
            </div>
            <div className="content-card" style={{ textAlign: 'center' }}>
              <h3 className="card-title">バックナンバー～2022年</h3>
              <a href="#" className="card-link" style={{ justifyContent: 'center' }}>
                詳しく見る →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Cards */}
      <section>
        <div className="container">
          <div className="content-cards">
            <div className="content-card">
              <div className="card-icon blue">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="card-title">イスラエルについて</h3>
              <p className="card-description">
                イスラエル民族の歴史が書かれてる聖書は、最も多くの言語に翻訳され世界中で親しまれています。歴史を通じて現在に至るまで、詳しくイスラエル民族の歩みを解説しています。
              </p>
              <a href="#" className="card-link">
                イスラエルについてのページへ
                <span>→</span>
              </a>
            </div>

            <div className="content-card">
              <div className="card-icon coral">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <h3 className="card-title">バラガン・コラム</h3>
              <p className="card-description">
                バラガンとはヘブライ語のスラングで、「ごちゃごちゃ、散らかった」という意味があります。イスラエル在住のスタッフが、いろいろな現地の情報をお届けしています。
              </p>
              <a href="#" className="card-link">
                バラガン・コラム イスラエルあれこれ
                <span>→</span>
              </a>
            </div>

            <div className="content-card">
              <div className="card-icon gold">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="card-title">アジア・メシアニック・フォーラム</h3>
              <p className="card-description">
                2021年夏に開催されたAMF2021インド大会（オンライン開催）のビデオを公開中です。
              </p>
              <a href="#" className="card-link">
                動画サイトのページへ
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Video */}
      <section style={{ background: 'var(--light-blue)', padding: '4rem 2rem' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 className="section-title">証言ビデオ：イスラエルへの祈り～時を越えて</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>
            イスラエル建国を誰も信じなかった昭和初年の祈りの運動を知る人達の貴重な証言ビデオです。
          </p>
          <a href="#" className="cta-button">
            ビデオを見る
          </a>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <div className="wrap">
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-brand"><b>YO</b>MAMA</div>
        <div className="nav-right">
          <a href="#how">How</a>
          <a href="#features">Services</a>
          <a href="#pricing">Rates</a>
          <a href="#cta" className="nav-btn">Rent Now</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-tag">
          <span className="blink" />
          She&apos;s Available Now
        </div>
        <h1>
          Your mom.<br />
          <span className="mg">$10/hr.</span><br />
          From your<br />
          <span className="cy">terminal.</span>
        </h1>
        <p className="hero-p">
          She said she was &quot;working late.&quot; She is. On our platform.
          The world&apos;s first CLI for renting someone&apos;s mama by the
          hour. Fast. Affordable. She doesn&apos;t judge. Much.
        </p>

        <div className="term">
          <div className="term-bar">
            <div className="term-dots">
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-dot" />
            </div>
            <span>yomama v0.1.0</span>
          </div>
          <div className="term-body">
            <span className="g">$</span>{" "}
            npx <span className="m">yomama</span>{" "}
            rent --hourly 10 --type <span className="w">&quot;emotional support&quot;</span>
            <br /><br />
            <span className="g">[✓]</span> scanning available mamas in your area...
            <br />
            <span className="g">[✓]</span> matched: <span className="w">Linda M.</span>{" "}
            <span className="y">★4.2</span> · 11,847 bookings · <span className="m">&quot;no kissing&quot;</span>
            <br />
            <span className="g">[✓]</span> rate: <span className="m">$10/hr</span> · eta: 4 min · she&apos;s bringing leftovers
            <br />
            <span className="g">[✓]</span> <span className="w">session active.</span> don&apos;t tell your father.
          </div>
        </div>

        <div className="btns">
          <a href="#cta" className="btn btn-mg">Rent a Mama →</a>
          <a href="#how" className="btn btn-cy">See the Mamas</a>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <div className="marquee">
          <span><b>347,000+</b> mamas rented</span>
          <span><b>$10/hr</b> flat rate (tips welcome)</span>
          <span><b>98%</b> came back for seconds</span>
          <span><b>4.2★</b> avg mama rating</span>
          <span><b>47</b> countries serviced</span>
          <span><b>24/7</b> availability</span>
          <span><b>0</b> refunds (she always delivers)</span>
          <span><b>347,000+</b> mamas rented</span>
          <span><b>$10/hr</b> flat rate (tips welcome)</span>
          <span><b>98%</b> came back for seconds</span>
          <span><b>4.2★</b> avg mama rating</span>
          <span><b>47</b> countries serviced</span>
          <span><b>24/7</b> availability</span>
          <span><b>0</b> refunds (she always delivers)</span>
        </div>
      </div>

      {/* ── HOW ── */}
      <section id="how" className="how">
        <div className="label">// Process</div>
        <h2 className="section-h">Three steps to renting someone&apos;s mother.</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <h3>Install</h3>
            <p>One command. No signup. No ID verification. We don&apos;t ask questions and neither should you.</p>
            <code>$ npm i -g <span className="m">yomama</span></code>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h3>Browse</h3>
            <p>Filter by specialty, availability, hourly rate, and &quot;openness to new experiences.&quot; All mamas are background-checked. Most of them.</p>
            <code>$ yomama <span className="m">browse</span> --sort rating --available now</code>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h3>Rent</h3>
            <p>Book her by the hour. She shows up. Does whatever you need. Leaves. Sends a &quot;had a great time&quot; text. You don&apos;t reply. Classic.</p>
            <code>$ yomama <span className="m">rent</span> --id mama_linda --hours 2<br />
              {"  "}<span className="g">✓</span> booked. she&apos;s on her way. act natural.</code>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="feat">
        <div className="label">// Services</div>
        <h2 className="section-h">She does it all. No, seriously. All of it.</h2>

        <div className="feat-grid">
          <div className="feat-card">
            <div className="idx">001</div>
            <h3>&quot;Emotional Support&quot;</h3>
            <p>She&apos;ll listen to your problems, tell you you&apos;re special, and make you feel things you haven&apos;t felt since childhood. $10/hr. Tissues not included.</p>
          </div>
          <div className="feat-card">
            <div className="idx">002</div>
            <h3>Home Cooked Meals</h3>
            <p>She comes over. She cooks. She judges your apartment. She leaves tupperware. The whole experience. Your roommates will have questions.</p>
          </div>
          <div className="feat-card">
            <div className="idx">003</div>
            <h3>Code Reviews</h3>
            <p>&quot;What is this variable name? I didn&apos;t raise you to write code like this.&quot; Brutal but effective. Bug count drops 40%. Self-esteem drops 80%.</p>
          </div>
          <div className="feat-card">
            <div className="idx">004</div>
            <h3>Guilt Trips</h3>
            <p>Need motivation? Book a guilt session. She&apos;ll remind you that she &quot;sacrificed everything&quot; and you &quot;can&apos;t even ship a PR on time.&quot;</p>
          </div>
          <div className="feat-card">
            <div className="idx">005</div>
            <h3>The Girlfriend Experience</h3>
            <p>She meets your friends. Tells embarrassing stories. Pinches your cheeks in public. Asks when you&apos;re giving her grandchildren. $15/hr (premium).</p>
          </div>
          <div className="feat-card">
            <div className="idx">006</div>
            <h3>Enterprise Package</h3>
            <p>Dedicated mama for your entire team. She attends standups. Brings snacks. Calls your CEO &quot;sweetie.&quot; Nobody has the balls to fire her.</p>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="price-section">
        <div className="label">// Rates</div>
        <h2 className="section-h">Cheaper than therapy. More effective than both.</h2>

        <div className="price-grid">
          <div className="price-card">
            <div className="tier">Quickie</div>
            <div className="amt">$10<span>/hr</span></div>
            <div className="sub">Just the basics. In and out. No cuddling.</div>
            <ul>
              <li>1 mama per session</li>
              <li>Basic emotional support</li>
              <li>Standard guilt trips</li>
              <li>She leaves when the timer ends</li>
              <li>No leftovers</li>
            </ul>
            <a href="#cta" className="btn btn-cy">Quick Rent</a>
          </div>

          <div className="price-card hi">
            <div className="tier">The Full Experience</div>
            <div className="amt">$25<span>/hr</span></div>
            <div className="sub">She stays. She cooks. She has opinions about your life.</div>
            <ul>
              <li>Unlimited mama time</li>
              <li>Home cooked meal included</li>
              <li>Aggressive life advice</li>
              <li>Passive-aggressive cleaning</li>
              <li>&quot;When I was your age&quot; stories</li>
              <li>She calls you the next day</li>
            </ul>
            <a href="#cta" className="btn btn-mg">Get the Full Experience</a>
          </div>

          <div className="price-card">
            <div className="tier">Mama-as-a-Service</div>
            <div className="amt">$420<span>/mo</span></div>
            <div className="sub">She basically moves in. Good luck.</div>
            <ul>
              <li>24/7 mama on retainer</li>
              <li>Dedicated Slack channel</li>
              <li>She rearranges your furniture</li>
              <li>Comments on your weight</li>
              <li>Befriends your neighbors</li>
              <li>Monthly &quot;talk about your future&quot;</li>
            </ul>
            <a href="#cta" className="btn btn-cy">God Help You</a>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="quote-section">
        <p className="quote">
          &ldquo;I rented a mama for a code review. She called my
          architecture <span className="hl">&lsquo;a disappointment, just like
          your father.&rsquo;</span> Refactored the entire codebase that
          night. 10x improvement. I haven&apos;t slept in 3 days
          but the tests pass. She still texts me every morning
          to ask if I&apos;ve eaten.&rdquo;
        </p>
        <div className="quote-author">
          — Anonymous Senior Engineer who now has two moms
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="label">// FAQ</div>
        <h2 className="section-h">Questions we get a lot.</h2>

        <div className="faq-grid">
          <div className="faq">
            <h3>Is this legal?</h3>
            <p>We have lawyers and they said &quot;technically.&quot;</p>
          </div>
          <div className="faq">
            <h3>Is this my actual mom?</h3>
            <p>We can neither confirm nor deny. But she knew your name and that you &quot;never call.&quot;</p>
          </div>
          <div className="faq">
            <h3>What if I fall in love?</h3>
            <p>That&apos;s between you and your therapist. We charge by the hour, not the emotion.</p>
          </div>
          <div className="faq">
            <h3>Can I rent my own mom?</h3>
            <p>Yes, but she charges you double. She&apos;s still mad about 2014.</p>
          </div>
          <div className="faq">
            <h3>Cancellation policy?</h3>
            <p>You can cancel anytime. She&apos;ll say &quot;it&apos;s fine&quot; but it&apos;s not fine and you&apos;ll know it.</p>
          </div>
          <div className="faq">
            <h3>Bulk discounts?</h3>
            <p>If you need that many mamas, we have bigger questions. But yes. Email sales@yomama.dev.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="cta-section">
        <h2>
          She&apos;s not<br />
          gonna <span className="mg">wait</span><br />
          forever.
        </h2>
        <p>
          First 200 users get a free hour. That&apos;s right. One hour
          of mama. On us. After that you&apos;re paying like everyone else
          because she&apos;s worth it and she knows it.
        </p>
        <div className="btns">
          <a href="#" className="btn btn-mg">Rent a Mama →</a>
          <a href="https://github.com/mattbratos/yomama" className="btn btn-cy">GitHub ★</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="foot">
        <span>© 2026 YoMama Inc. All mamas consenting adults.</span>
        <div className="foot-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Mama Policy</a>
          <a href="#">Not a Brothel™</a>
        </div>
      </footer>
    </div>
  );
}

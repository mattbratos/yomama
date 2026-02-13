export default function Home() {
  const features = [
    {
      title: "One-Command Booking",
      description: "Book a certified mom in seconds with a single CLI command.",
    },
    {
      title: "Skill-Based Matching",
      description: "From pep talks to project planning, route to the right mom profile.",
    },
    {
      title: "Team Integrations",
      description: "Works with Slack and CI pipelines so support lands where teams already work.",
    },
  ];

  const steps = [
    "Install the CLI in under 30 seconds.",
    "Run rent-mama --task \"your problem\" --hours 2.",
    "Get a matched session link and start solving.",
  ];

  return (
    <main className="landing">
      <section className="hero reveal">
        <p className="eyebrow">Introducing YoMama CLI</p>
        <h1 className="heroTitle">Rent Your Mama From The Command Line</h1>
        <p className="heroSubtitle">
          Built for busy builders who need instant accountability, motivation, and practical help
          on demand.
        </p>
        <p className="terminalLine">
          <span>$</span> npx rent-mama --task &quot;ship MVP&quot; --hours 2
        </p>
        <div className="ctaRow">
          <a className="btn btnPrimary" href="#waitlist">
            Join Waitlist
          </a>
          <a className="btn btnGhost" href="#how-it-works">
            See How It Works
          </a>
        </div>
      </section>

      <section className="featureSection reveal">
        <h2>Why Teams Pick YoMama</h2>
        <div className="cardGrid">
          {features.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="workflow reveal">
        <h2>How It Works</h2>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section id="waitlist" className="finalCta reveal">
        <h2>Launching Soon</h2>
        <p>
          The first 200 users get unlimited sessions for beta month. Get in early and ship with
          mom-level confidence.
        </p>
        <a className="btn btnPrimary" href="#">
          Reserve My Spot
        </a>
      </section>
    </main>
  );
}

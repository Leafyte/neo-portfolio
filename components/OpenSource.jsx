const CONTRIBUTIONS = [
  { repo: 'your-org/edge-toolkit', context: '[Describe the project and why it matters.]', stats: '— stars · — contributions', prs: ['PR #001 · [Feature or fix title]', 'PR #002 · [Feature or fix title]'] },
  { repo: 'community/project-name', context: '[Describe the contribution you made.]', stats: '— stars · — contributions', prs: ['PR #001 · [Merged contribution]'] },
  { repo: 'your-handle/open-source-project', context: '[Describe your own open-source project.]', stats: '— users · — downloads', prs: ['Repository · [Project status]'] },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="section" data-section="">
      <h2 className="section-title reveal"><span className="section-num">05</span> Open source</h2>
      <p className="section-intro reveal">A place for merged pull requests, public tools, and contributions that show how you work with real codebases.</p>
      <div className="oss-list">
        {CONTRIBUTIONS.map((item) => (
          <article className="oss-card reveal" key={item.repo}>
            <div className="oss-card-head"><h3>{item.repo}</h3><span>{item.stats}</span></div>
            <p>{item.context}</p>
            <ul>{item.prs.map((pr) => <li key={pr}>↗ {pr}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

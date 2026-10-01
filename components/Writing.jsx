const POSTS = [
  ['[Your first technical article]', '[A useful one-sentence description of the idea.]', '— MIN READ'],
  ['[How you built a project]', '[Explain a decision, trade-off, or technical lesson.]', '— MIN READ'],
  ['[Research / learning note]', '[Turn a topic you are studying into a useful post.]', '— MIN READ'],
];

export default function Writing() {
  return (
    <section id="writing" className="section" data-section="">
      <h2 className="section-title reveal"><span className="section-num">07</span> Writing</h2>
      <p className="section-intro reveal">Optional, but this gives visitors a way to see how you think—not only what you ship.</p>
      <div className="post-list">
        {POSTS.map(([title, description, time], index) => (
          <article className="post-card reveal" key={title}>
            <span>0{index + 1}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
            <small>{time}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

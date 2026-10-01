/**
 * Work section — vertical timeline, static content, server component.
 * Each .timeline-item has .reveal for the scroll-in animation.
 */
export default function Work() {
  return (
    <section id="work" className="section" data-section="">
      <h2 className="section-title reveal">
        <span className="section-num" aria-hidden="true">02</span> Experience
      </h2>

      <ol className="timeline">
        <li className="timeline-item reveal">
          <span className="timeline-date">[MONTH YEAR — PRESENT]</span>
          <h3>[Company / Lab / Team]</h3>
          <p>[Your role · Location / Remote]<br />[One line on what you own or deliver.]</p>
        </li>

        <li className="timeline-item reveal">
          <span className="timeline-date">[MONTH YEAR — MONTH YEAR]</span>
          <h3>[Internship / Experience]</h3>
          <p>[Your role · Location / Remote]<br />[One strong achievement with a metric, if possible.]</p>
        </li>

        <li className="timeline-item reveal">
          <span className="timeline-date">[YEAR]</span>
          <h3>[Leadership / Competition]</h3>
          <p>[Your team, the challenge, and a clear outcome.]</p>
        </li>

        <li className="timeline-item reveal">
          <span className="timeline-date">[START YEAR — END YEAR]</span>
          <h3>[Education / Institution]</h3>
          <p>[Degree, university, CGPA or one meaningful highlight.]</p>
        </li>

        <li className="timeline-item reveal">
          <span className="timeline-date">[YEAR]</span>
          <h3>[Another relevant milestone]</h3>
          <p>[What you did and why it matters.]</p>
        </li>
      </ol>
    </section>
  );
}

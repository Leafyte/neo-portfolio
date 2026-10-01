// =========================================================
// Offline Q&A knowledge base
// Ported from script.js — pure JS, no React dependency.
// Import getAnswer() in any component that needs it.
// =========================================================

const KNOWLEDGE = [
  {
    topic: 'research',
    keys: ['research', 'paper', 'prism', 'offline', 'edge', 'conversational', 'icidtsm', 'publication'],
    answer:
      'My research is about fully offline conversational AI. The paper presents PRISM, a hybrid contextual reasoning architecture that runs on a Raspberry Pi 4B with no network connection. It was submitted to ICIDTSM 2026 at IIT Madras.',
    followups: [
      {
        keys: ['hardware', 'device', 'raspberry', 'pi', 'run', 'runs'],
        answer: 'PRISM runs on a Raspberry Pi 4B, entirely on-device.',
      },
      {
        keys: ['where', 'conference', 'venue', 'when', 'submitted', 'published'],
        answer: 'It was submitted to ICIDTSM 2026 at IIT Madras (20–22 July 2026).',
      },
      {
        keys: ['result', 'results', 'accuracy', 'latency', 'memory', 'performance', 'numbers'],
        answer: "I haven't put the headline numbers on this site yet. Email me and I'll share them.",
      },
    ],
  },
  {
    topic: 'projects',
    keys: ['projects', 'project', 'built', 'build', 'made', 'portfolio', 'shipped'],
    answer:
      'Three featured projects: SKY SENTINEL (a browser-based AI drone disaster-response simulator), SILKROUTE (a marketplace for Mysore Silk weavers with QR-based authentication), and MANAKSETU. Open the cards in the Projects section for details.',
  },
  {
    topic: 'skysentinel',
    keys: ['sky', 'sentinel', 'skysentinel', 'drone', 'drones', 'swarm', 'disaster'],
    answer:
      'SKY SENTINEL is a browser-based drone swarm simulator for disaster response, with A* pathfinding and swarm coordination. It has two interfaces: a Command Center and a Rescue Team view.',
    followups: [
      {
        keys: ['stack', 'tech', 'technologies', 'framework', 'frameworks', 'tools'],
        answer: 'SKY SENTINEL is built with Next.js, Three.js, A* pathfinding, and the Claude API.',
      },
    ],
  },
  {
    topic: 'silkroute',
    keys: ['silk', 'silkroute', 'weaver', 'weavers', 'artisan', 'marketplace', 'mysore', 'parivarthan'],
    answer:
      'SILKROUTE is a full-stack marketplace for Mysore Silk weavers, built for PARIVARTHAN 2026. It uses QR-based GI authentication so buyers can verify genuine silk, wrapped in a folk-art inspired interface.',
    followups: [
      {
        keys: ['stack', 'tech', 'technologies', 'framework', 'frameworks', 'tools'],
        answer:
          'SILKROUTE uses Supabase for the backend, with QR-based authentication and a full-stack web front end.',
      },
    ],
  },
  {
    topic: 'manaksetu',
    keys: ['manaksetu'],
    answer: 'MANAKSETU is one of my three featured projects. Open its card in the Projects section for details.',
  },
  {
    topic: 'stack',
    keys: [
      'skills', 'skill', 'technologies', 'technology', 'languages', 'language',
      'tools', 'tinyml', 'overall', 'expertise',
    ],
    answer:
      'Full-stack: Next.js, Flask, Supabase, Three.js. AI/ML: computer vision, predictive analytics, and TinyML / model compression. I also work in Python and Java.',
  },
  {
    topic: 'hiring',
    keys: ['hire', 'hiring', 'intern', 'internship', 'internships', 'available', 'open', 'job', 'role', 'roles', 'opportunity'],
    answer:
      "Yes. I'm open to internships in SWE, AI/ML, backend, full-stack, research, and embedded AI / TinyML.",
  },
  {
    topic: 'contact',
    keys: ['contact', 'email', 'mail', 'reach', 'github', 'linkedin', 'resume', 'touch'],
    answer:
      "Email is fastest: karthikm12790@gmail.com. I'm also on GitHub (leafyte) and LinkedIn (karthikm127).",
  },
  {
    topic: 'education',
    keys: ['college', 'vvce', 'mysuru', 'semester', 'study', 'studying', 'degree', 'education', 'university', 'student'],
    answer:
      "I'm a Computer Science & Engineering student at Vidyavardhaka College of Engineering (VVCE), Mysuru, currently in my 4th semester.",
  },
  {
    topic: 'team',
    keys: ['debugleaf', 'team', 'hackathon', 'hackathons'],
    answer: 'I build under the team name DebugLeaf, mostly at hackathons.',
  },
  {
    topic: 'about',
    keys: ['who', 'about', 'karthik', 'yourself', 'introduce', 'background'],
    answer:
      "I'm Karthik, a CSE student who builds full-stack products, computer vision systems, and TinyML for edge devices. I like making AI small enough to run where the internet can't reach.",
  },
];

const FALLBACK =
  "I don't have an answer for that yet. Try asking about my research, projects, tech stack, or how to contact me.";

// Remembers the previous topic so follow-up questions work.
// Module-level variable: persists for the lifetime of the page session.
let lastTopic = null;

// Turn text into lowercase words: "What's your stack?" -> ["what","s","your","stack"]
function tokenize(text) {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

// Count how many of `keys` appear in `tokens`
function score(tokens, keys) {
  let total = 0;
  for (const key of keys) {
    if (tokens.some((t) => t === key || (key.length >= 4 && t.startsWith(key)))) total++;
  }
  return total;
}

/**
 * Given a plain-text question, returns the best matching answer string.
 * No network call — all knowledge is local.
 */
export function getAnswer(question) {
  const tokens = tokenize(question);

  // Step 1: follow-up questions about the last topic
  const last = KNOWLEDGE.find((entry) => entry.topic === lastTopic);
  if (last && last.followups) {
    const hit = last.followups.find((f) => score(tokens, f.keys) > 0);
    if (hit) return hit.answer;
  }

  // Step 2: best-scoring topic
  let best = null;
  let bestScore = 0;
  for (const entry of KNOWLEDGE) {
    const s = score(tokens, entry.keys);
    if (s > bestScore) {
      best = entry;
      bestScore = s;
    }
  }

  if (best) {
    lastTopic = best.topic;
    return best.answer;
  }
  return FALLBACK;
}

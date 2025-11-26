import { promptIdeas } from "@/data/prompts";

const promptPayload = promptIdeas.map(({ id, title, synopsis, visualStyle, prompt }) => ({
  id,
  title,
  synopsis,
  visualStyle,
  prompt
}));

export default function Page() {
  return (
    <main>
      <span className="pill">Sora 2 Anime Concept Pack</span>
      <h1>Archetype Wars & Public Domain Legends</h1>
      <p>
        Curated anime-ready prompts blending cyberpunk mecha rivalries with public domain legends.
        Each entry is tuned for Sora 2 production with Solo Leveling and Jujutsu Kaisen energy.
      </p>
      <pre>
        <code>{JSON.stringify(promptPayload, null, 2)}</code>
      </pre>
    </main>
  );
}

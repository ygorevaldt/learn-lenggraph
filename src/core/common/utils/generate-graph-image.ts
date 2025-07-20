import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';

export async function generateGraphImage(graph: any, filename = 'graph.png') {
  if (!process.env.LANGCHAIN_CALLBACKS_BACKGROUND) return;

  const drawableGraph = graph.getGraph();
  const image = await drawableGraph.drawMermaidPng();
  const arrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const outputDir = resolve(process.cwd(), 'src', 'core', 'graphs', 'images');

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = join(outputDir, filename);
  writeFileSync(outputPath, buffer);

  console.log(`✅ Graph image saved in: ${outputPath}`);
}

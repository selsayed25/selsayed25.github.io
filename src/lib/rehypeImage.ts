import type { Root } from "hast";
import { visit } from "unist-util-visit";

interface ImageOptions {
  lazyLoad?: boolean;
}

export function rehypeImage(options: ImageOptions = {}) {
  const { lazyLoad = true } = options;

  return (tree: Root) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "img" || !parent || index === undefined) return;

      const src = node.properties?.src as string | undefined;
      const alt = (node.properties?.alt as string) || "";
      const title = node.properties?.title as string | undefined;

      if (!src) return;

      if (lazyLoad) {
        node.properties.loading = "lazy";
      }

      node.properties.className = "mdx-image";
      node.properties.decoding = "async";

      if (title) {
        const figure: any = {
          type: "element",
          tagName: "figure",
          properties: { className: "mdx-figure" },
          children: [
            { ...node, properties: { ...node.properties, title: undefined } },
            {
              type: "element",
              tagName: "figcaption",
              properties: { className: "mdx-figcaption" },
              children: [{ type: "text", value: title }],
            },
          ],
        };

        parent.children[index] = figure;
      }
    });
  };
}

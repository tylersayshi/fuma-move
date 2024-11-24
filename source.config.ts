import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { transformerTwoslash } from "fumadocs-twoslash";
// import { transformerNotationErrorLevel } from "@shikijs/transformers";
// import arktypeTextmate from "arkdark/tsWithArkType.tmLanguage.json" with { type: "json" };
// import arkdarkColors from "arkdark/arkdark.json" with { type: "json" };

export const { docs, meta } = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      // theme: arkdarkColors,
      // langs: [arktypeTextmate as never],
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
        // transformerNotationErrorLevel(),
      ],
    },
  },
});

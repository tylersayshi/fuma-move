import { createMDX } from "fumadocs-mdx/next";
import { transformerNotationErrorLevel } from "@shikijs/transformers";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { transformerTwoslash } from "fumadocs-twoslash";
import arktypeTextmate from "arkdark/tsWithArkType.tmLanguage.json" with { type: "json" };
import arkdarkColors from "arkdark/arkdark.json" with { type: "json" };

const withMDX = createMDX({
  mdxOptions: {
    rehypeCodeOptions: {
      theme: arkdarkColors,
      langs: [arktypeTextmate],
      transformers: [
        ...rehypeCodeDefaultOptions.transformers,
        transformerTwoslash(),
        transformerNotationErrorLevel(),
      ],
      wrap: true,
    },
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  serverExternalPackages: ["twoslash", "typescript"],
};

export default withMDX(config);

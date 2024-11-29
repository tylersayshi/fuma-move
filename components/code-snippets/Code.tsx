import { promises as fs } from "fs";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { highlight } from "fumadocs-core/server";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-twoslash/ui";
import { getSingletonHighlighter, bundledLanguages } from "shiki";
import { shikiConfig } from "@/lib/shiki";

type CodeProps = {
  filename: string;
  /** @default "ts" */
  lang?: string;
};

export const Code: React.FC<CodeProps> = async ({ filename, lang = "ts" }) => {
  const codeText = await fs.readFile(
    process.cwd() + "/components/code-snippets/snippets/" + filename,
    "utf8"
  );

  // preload languages for shiki
  // https://github.com/fuma-nama/fumadocs/issues/1095
  await getSingletonHighlighter({
    langs: Object.keys(bundledLanguages),
  });

  const rendered = await highlight(codeText, {
    ...shikiConfig,
    meta: {
      __raw: "twoslash",
    },
    lang,
    components: {
      // @ts-expect-error -- JSX component
      pre: Pre,
      Popup,
      PopupContent,
      PopupTrigger,
    },
  });

  return <CodeBlock keepBackground>{rendered}</CodeBlock>;
};

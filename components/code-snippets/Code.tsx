import { promises as fs } from "fs";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { highlight } from "fumadocs-core/server";
import arkdarkColors from "arkdark/arkdark.json" with { type: "json" };
import { transformerTwoslash } from "@shikijs/twoslash";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-twoslash/ui";

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

  const rendered = await highlight(codeText, {
    lang,
    meta: {
      __raw: "twoslash",
    },
    theme: arkdarkColors,
    transformers: [transformerTwoslash()],
    components: {
      // @ts-expect-error -- JSX component
      pre: Pre,
      Popup,
      PopupContent,
      PopupTrigger,
    },
  });

  return <CodeBlock>{rendered}</CodeBlock>;
};

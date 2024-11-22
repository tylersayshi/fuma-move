import { promises as fs } from "fs";
// import { arkHighlight } from "./highlight";

import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

type CodeProps = {
  filename: string;
};

export const Code: React.FC<CodeProps> = async ({ filename }) => {
  const codeText = await fs.readFile(
    process.cwd() + "/components/code-snippets/snippets/" + filename,
    "utf8"
  );

  // const highlightedText = await arkHighlight({ code: codeText });

  return (
    <CodeBlock>
      <Pre lang="ts">{codeText}</Pre>
    </CodeBlock>
  );
};

import { promises as fs } from "fs";
import { arkHighlight } from "./highlight";

type CodeProps = {
  filename: string;
};

export const Code: React.FC<CodeProps> = async ({ filename }) => {
  const codeText = await fs.readFile(
    process.cwd() + "/components/code-snippets/snippets/" + filename,
    "utf8"
  );

  const highlightedText = await arkHighlight({ code: codeText });
  console.log(highlightedText);
  return null;

  // return (
  //   <code
  //     dangerouslySetInnerHTML={{
  //       __html: highlightedText,
  //     }}
  //   ></code>
  // );
};

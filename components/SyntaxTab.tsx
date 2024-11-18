import { Tab } from "fumadocs-ui/components/tabs";
import type { SyntaxKind } from "./utils.js";
import { CodeBlock } from "fumadocs-ui/components/codeblock";

export const SyntaxTab: React.FC<{ children: string; kind: SyntaxKind }> = ({
  children,
  kind,
}) => (
  <Tab value={kind}>
    <CodeBlock>{children}</CodeBlock>
  </Tab>
);

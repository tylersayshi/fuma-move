// import { HeroBackdrop } from "@/components/HeroBackdrop";
import Link from "fumadocs-core/link";
import { Cards, Card } from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-8xl">Arktype</h1>
      <p className="text-fd-muted-foreground">
        Typescript's 1:1 validator, optimized from editor to runtime
      </p>
      <Link href="/docs/intro/setup">Set Sail</Link>
      {/* <HeroBackdrop /> */}
      <h2 className="text-xl">What awaits</h2>

      <Cards>
        <Card title="Unparalleled DX" icon="seti:tsconfig">
          Type syntax you already know with safety and completions unlike
          anything you've ever seen
          {/* TODO Code */}
        </Card>
        <Card title="Faster... everything" icon="rocket">
          100x faster than Zod at runtime with editor performance that will
          remind you how autocomplete is supposed to feel
          {/* <RuntimeBenchmarksGraph /> */}
        </Card>
        <Card title="Clarity and Concision" icon="comment-alt">
          Definitions are half as long, type errors are twice as readable, and
          hovers tell you just what really matters
          {/* <Code code={clarityAndConcision} /> */}
        </Card>
        <Card title="Better Errors" icon="error">
          Deeply customizable messages with great defaults
          {/* <Code code={betterErrors} /> */}
        </Card>
        <Card title="Deep Introspectability" icon="seti:code-search">
          ArkType uses set theory to understand and expose the relationships
          between your types at runtime the way TypeScript does at compile time
          {/* <Code code={deepIntrospectability} /> */}
        </Card>
        <Card title="Intrinsic Optimization" icon="seti:smarty">
          Every schema is internally normalized and reduced to its purest and
          fastest representation
          {/* <Code code={intrinsicOptimization} /> */}
        </Card>
        {/* <Card title="Portable" icon="seti:json">
		Most definitions are just objects and strings- take them across the stack or
		even outside JS altogether
	</Card> */}
      </Cards>

      {/* <LinkCard
  title="Doc up"
  description="Everything you need to know from installation to integration"
  href="/intro/setup"
/> */}
    </main>
  );
}

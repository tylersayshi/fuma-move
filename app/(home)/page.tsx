import { Code } from "@/components/code-snippets/Code";
import { Hero } from "@/components/Hero";
import { TsIcon } from "@/components/icons/ts";
import { RuntimeBenchmarksGraph } from "@/components/RuntimeBenchmarksGraph";
import { Cards, Card } from "fumadocs-ui/components/card";
import {
  RocketIcon,
  MessageSquareTextIcon,
  MessageCircleWarning,
  SearchIcon,
  LightbulbIcon,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex-1 pt-40 container relative">
      <Hero />
      <h2 className="text-4xl text-fd-accent font-semibold mb-3">
        What awaits
      </h2>

      <Cards>
        <Card
          title="Unparalleled DX"
          icon={<TsIcon height={20} className="opacity-40" />}
        >
          Type syntax you already know with safety and completions unlike
          anything you&apos;ve ever seen
          <Code filename="unparalleledDx.twoslash.js" />
        </Card>
        <Card title="Faster... everything" icon={<RocketIcon />}>
          100x faster than Zod at runtime with editor performance that will
          remind you how autocomplete is supposed to feel
          <RuntimeBenchmarksGraph />
        </Card>
        <Card title="Clarity and Concision" icon={<MessageSquareTextIcon />}>
          Definitions are half as long, type errors are twice as readable, and
          hovers tell you just what really matters
          <Code filename="clarityAndConcision.twoslash.js" />
        </Card>
        <Card title="Better Errors" icon={<MessageCircleWarning />}>
          Deeply customizable messages with great defaults
          <Code filename="betterErrors.twoslash.ts" />
        </Card>
        <Card title="Deep Introspectability" icon={<SearchIcon />}>
          ArkType uses set theory to understand and expose the relationships
          between your types at runtime the way TypeScript does at compile time
          <Code filename="deepIntrospectability.twoslash.js" />
        </Card>
        <Card title="Intrinsic Optimization" icon={<LightbulbIcon />}>
          Every schema is internally normalized and reduced to its purest and
          fastest representation
          <Code filename="intrinsicOptimization.twoslash.js" />
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
    </div>
  );
}

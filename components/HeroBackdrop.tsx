import { FloatYourBoat } from "./FloatYourBoat";
import { PlatformCloud } from "./PlatformCloud";

export const HeroBackdrop = () => (
  <div className="absolute top-12 left-0 right-0">
    <div className="flex justify-between">
      <PlatformCloud main="ts" right="vscode" top="neovim" left="intellij" />
      <PlatformCloud main="js" right="chromium" top="node" left="bun" />
    </div>
    <FloatYourBoat />
  </div>
);

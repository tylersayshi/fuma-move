import { FloatYourBoat } from "@/components/FloatYourBoat";
import { ArktypeLogo } from "@/components/icons/arktype-logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <ArktypeLogo />,
    children: <FloatYourBoat />,
  },
  disableThemeSwitch: true,
  githubUrl: "https://github.com/arktypeio/arktype",
};

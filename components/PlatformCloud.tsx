"use client";

import { motion } from "framer-motion";
import React from "react";
import { BunIcon } from "./icons/bun";
import { ChromiumIcon } from "./icons/chromium";
import { DenoIcon } from "./icons/deno";
import { IntellijIcon } from "./icons/intellij";
import { JsIcon } from "./icons/js";
import { NeovimIcon } from "./icons/neovim";
import { NodeIcon } from "./icons/node";
import { TsIcon } from "./icons/ts";
import { VscodeIcon } from "./icons/vscode";

export type SvgLogoProps = {
  name: PlatformName;
};

type PlatformName = keyof typeof platforms;

const platforms = {
  js: JsIcon,
  chromium: ChromiumIcon,
  node: NodeIcon,
  deno: DenoIcon,
  ts: TsIcon,
  neovim: NeovimIcon,
  vscode: VscodeIcon,
  intellij: IntellijIcon,
  bun: BunIcon,
};

type PlatformCloudProps = {
  main: PlatformName;
  right: PlatformName;
  top: PlatformName;
  left: PlatformName;
};

export const PlatformCloud = ({
  main,
  right,
  top,
  left,
}: PlatformCloudProps) => {
  const Main = platforms[main];
  const Right = platforms[right];
  const Top = platforms[top];
  const Left = platforms[left];
  return (
    <div className="relative h-full w-[200px]">
      <div
        style={{
          position: "absolute",
          height: 70,
          opacity: 0.1,
          top: 55,
          left: 70,
        }}
      >
        <Main height={70} />
      </div>
      <div
        style={{
          position: "absolute",
          height: 60,
          opacity: 0.25,
          top: 50,
          left: 130,
        }}
      >
        <Right height={60} />
      </div>
      <div
        style={{
          position: "absolute",
          height: 50,
          opacity: 0.25,
          top: 100,
          left: 30,
        }}
      >
        <Left height={50} />
      </div>
      <motion.div
        style={{
          position: "absolute",
          height: 45,
          opacity: 0.25,
          top: 50,
          left: 50,
        }}
      >
        <Top height={45} />
      </motion.div>
    </div>
  );
};

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = "up", className = "" }: Props) {
  const variants = {
    up: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -16 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 16 }, animate: { opacity: 1, x: 0 } },
  } as const;

  const v = variants[direction];

  return (
    <motion.div initial={v.initial} animate={v.animate} transition={{ duration: 0.45, delay }} className={className}>
      {children}
    </motion.div>
  );
}

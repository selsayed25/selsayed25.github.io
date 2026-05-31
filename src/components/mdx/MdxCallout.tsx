import type { ReactNode } from "react";

interface MdxCalloutProps {
  type?: "info" | "warning" | "danger" | "tip";
  children: ReactNode;
}

const styles = {
  info: {
    border: "border-sky-500/30",
    bg: "bg-sky-500/5",
    icon: "i",
    iconClass: "text-sky-400",
  },
  warning: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    icon: "!",
    iconClass: "text-amber-400",
  },
  danger: {
    border: "border-red-500/30",
    bg: "bg-red-500/5",
    icon: "✕",
    iconClass: "text-red-400",
  },
  tip: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    icon: "✓",
    iconClass: "text-emerald-400",
  },
};

export function MdxCallout({ type = "info", children }: MdxCalloutProps) {
  const s = styles[type];
  return (
    <div
      className={`my-6 flex gap-3 rounded-xl border ${s.border} ${s.bg} p-4`}
    >
      <span className={`mt-0.5 text-lg font-bold ${s.iconClass}`}>{s.icon}</span>
      <div className="text-sm leading-relaxed text-surface-300 [&>p:first-child]:mt-0 [&>p]:mt-2">
        {children}
      </div>
    </div>
  );
}

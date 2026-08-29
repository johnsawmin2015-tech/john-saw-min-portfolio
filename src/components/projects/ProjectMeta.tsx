import type { Project } from "@/types";

export function StatusTag({ status }: { status: Project["status"] }) {
  const active = status !== "COMPLETED";
  return (
    <span className="type-metadata inline-flex items-center gap-2 text-graphite">
      <span
        aria-hidden="true"
        className={
          active ? "h-1.5 w-1.5 rounded-full bg-champagne" : "h-1.5 w-1.5 rounded-full bg-graphite"
        }
      />
      {status}
    </span>
  );
}

export function StackList({ stack }: { stack: readonly string[] }) {
  return (
    <p className="type-metadata text-graphite">
      {stack.map((item, i) => (
        <span key={item}>
          {i > 0 ? <span className="text-champagne"> · </span> : null}
          {item}
        </span>
      ))}
    </p>
  );
}

export function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 border-t border-border py-4">
      <dt className="type-metadata text-graphite">{label}</dt>
      <dd className="text-sm text-foreground">{value}</dd>
    </div>
  );
}

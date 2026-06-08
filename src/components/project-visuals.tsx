function VeloMailVisual() {
  return (
    <div className="flex h-full min-h-[220px] items-center justify-center bg-[#eceae4] p-8 sm:min-h-[260px]">
      <div className="relative w-[120px] rounded-[28px] border-[6px] border-[#d8d4cc] bg-white p-2 shadow-sm">
        <div className="mb-2 h-1.5 w-8 rounded-full bg-[#eceae4]" />
        <div className="space-y-1.5 font-mono text-[7px] leading-tight text-[#888]">
          <div className="text-orange">&lt;html&gt;</div>
          <div className="pl-2">&lt;body&gt;</div>
          <div className="pl-4 text-[#666]">preview()</div>
          <div className="pl-2">&lt;/body&gt;</div>
          <div className="text-orange">&lt;/html&gt;</div>
        </div>
      </div>
    </div>
  );
}

function RadarAIVisual() {
  return (
    <div className="flex h-full min-h-[220px] items-center justify-center bg-[#eceae4] p-8 sm:min-h-[260px]">
      <div className="relative flex h-36 w-36 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-[#d8d4cc]" />
        <div className="absolute inset-4 rounded-full border border-[#d8d4cc]" />
        <div className="absolute inset-8 rounded-full border border-[#d8d4cc]" />
        <div className="h-3 w-3 rounded-full bg-orange" />
        <div className="absolute left-6 top-8 h-2 w-2 rounded-full bg-white shadow-sm" />
        <div className="absolute right-7 top-12 h-2 w-2 rounded-full bg-white shadow-sm" />
        <div className="absolute bottom-10 left-10 h-2 w-2 rounded-full bg-white shadow-sm" />
      </div>
    </div>
  );
}

function MetroRateVisual() {
  return (
    <div className="flex h-full min-h-[220px] items-center justify-center bg-[#eceae4] p-6 sm:min-h-[260px]">
      <div className="w-full max-w-[240px] overflow-hidden rounded-xl border border-[#d8d4cc] bg-white shadow-sm">
        <div className="flex h-28">
          <div className="w-12 border-r border-[#eceae4] bg-[#faf9f7] p-2">
            <div className="mb-2 h-1.5 w-full rounded bg-[#eceae4]" />
            <div className="mb-1.5 h-1.5 w-3/4 rounded bg-[#eceae4]" />
            <div className="h-1.5 w-2/3 rounded bg-[#eceae4]" />
          </div>
          <div className="flex-1 p-3">
            <div className="mb-3 h-2 w-16 rounded bg-[#eceae4]" />
            <div className="flex h-14 items-end gap-1.5">
              <div className="h-6 w-3 rounded-sm bg-[#eceae4]" />
              <div className="h-10 w-3 rounded-sm bg-orange/70" />
              <div className="h-8 w-3 rounded-sm bg-[#eceae4]" />
              <div className="h-12 w-3 rounded-sm bg-orange" />
              <div className="h-5 w-3 rounded-sm bg-[#eceae4]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const visuals = {
  velomail: VeloMailVisual,
  radarai: RadarAIVisual,
  metrorate: MetroRateVisual,
} as const;

export function ProjectVisual({ type }: { type: keyof typeof visuals }) {
  const Visual = visuals[type];
  return <Visual />;
}

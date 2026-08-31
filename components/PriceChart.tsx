import type { PriceObservation } from "@/lib/types";

type PriceChartProps = {
  observations: PriceObservation[];
};

export function PriceChart({ observations }: PriceChartProps) {
  const prices = observations.map((observation) => observation.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = Math.max(1, max - min);
  const points = observations
    .map((observation, index) => {
      const x = (index / Math.max(1, observations.length - 1)) * 100;
      const y = 92 - ((observation.price - min) / range) * 78;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="chart" aria-label="Fiyat geçmişi grafiği">
      <div className="chartLine">
        <svg viewBox="0 0 100 100" role="img" aria-hidden="true" preserveAspectRatio="none">
          <polyline
            points={points}
            fill="none"
            stroke="#8c1d3f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
}

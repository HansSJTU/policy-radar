'use client';

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts';

import type { TrafficPoint } from '@/app/analytics-model';
import type { Language } from '@/app/language';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

export function TrafficChart({ points, language }: { points: TrafficPoint[]; language: Language }) {
  const chartConfig = {
    visitors: { label: language === 'en' ? 'Unique visitors' : '独立访客', color: '#315f92' },
    pageViews: { label: language === 'en' ? 'Page views' : '页面浏览量', color: '#d95042' },
  } satisfies ChartConfig;
  const maximum = Math.max(
    1,
    ...points.flatMap((point) => [point.visitors, point.pageViews]),
  );

  return (
    <ChartContainer
      className="stats-chart"
      config={chartConfig}
      initialDimension={{ width: 900, height: 360 }}
    >
      <LineChart data={points} margin={{ top: 12, right: 14, left: -12, bottom: 4 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 5" />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          minTickGap={28}
          tickFormatter={(value: string) => value.slice(5).replace('-', '·')}
        />
        <YAxis
          allowDecimals={false}
          axisLine={false}
          tickLine={false}
          domain={[0, maximum]}
        />
        <ChartTooltip
          cursor={{ stroke: '#b8c0cb', strokeDasharray: '3 3' }}
          content={
            <ChartTooltipContent
              indicator="line"
              labelFormatter={(label) => String(label)}
            />
          }
        />
        <Line
          dataKey="visitors"
          type="monotone"
          stroke="var(--color-visitors)"
          strokeWidth={2.5}
          dot={{ r: 2.5, fill: 'var(--color-visitors)' }}
          activeDot={{ r: 5 }}
        />
        <Line
          dataKey="pageViews"
          type="monotone"
          stroke="var(--color-pageViews)"
          strokeWidth={2.5}
          dot={{ r: 2.5, fill: 'var(--color-pageViews)' }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ChartContainer>
  );
}

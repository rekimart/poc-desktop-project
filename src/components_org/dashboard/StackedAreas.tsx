import { ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { data } from '@tailus-ui/visualizations/data';
import { area, cartesianGrid } from '@tailus/themer';
import CustomTooltip from '@tailus-ui/visualizations/Tooltip';
import Card from '@tailus-ui/Card';
import { Text, Title } from '@tailus-ui/typography';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export const StackedAreaChart = () => {
  return (
    <Card className="space-y-6" variant="outlined">
      <div>
        <Title as="div" size="lg" weight="medium">
          New Customers
        </Title>
        <Text size="sm" className="mb-0 mt-1">
          New users by First user primary channel group (Default Channel Group)
        </Text>
      </div>
      <AspectRatio data-shade="900" ratio={16 / 9}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <YAxis className="text-[--caption-text-color]" width={34} fontSize={12} tickLine={false} axisLine={false} />
            <XAxis className="text-[--caption-text-color]" height={12} dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }} content={<CustomTooltip payload={[]} active mixed label={''} />} />
            <CartesianGrid className={cartesianGrid()} horizontal={false} stroke="currentColor" strokeDasharray={3} />

            <Area
              className={area({ intent: 'gray' })}
              fill="currentColor"
              stroke="currentColor"
              fillOpacity={0.1}
              dataKey="Neutral"
              activeDot={{
                color: 'var(--area-gray-stroke)',
                r: 3,
                stroke: 'white',
              }}
              stackId="1"
            />
            <Area
              className={area({ intent: 'primary' })}
              fill="currentColor"
              stroke="currentColor"
              fillOpacity={0.1}
              dataKey="Gray"
              activeDot={{
                color: 'var(--area-primary-stroke)',
                r: 3,
                stroke: 'white',
              }}
              stackId="1"
            />
            <Area
              className={area({ intent: 'accent' })}
              fill="currentColor"
              stroke="currentColor"
              fillOpacity={0.1}
              dataKey="Primary"
              activeDot={{
                color: 'var(--area-accent-stroke)',
                r: 3,
                stroke: 'white',
              }}
              stackId="1"
            />
          </AreaChart>
        </ResponsiveContainer>
      </AspectRatio>
    </Card>
  );
};

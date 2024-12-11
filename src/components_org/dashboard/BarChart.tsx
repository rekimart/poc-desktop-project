import { ResponsiveContainer, BarChart, Bar, XAxis, CartesianGrid, YAxis, Tooltip } from 'recharts';
import { area, cartesianGrid } from '@tailus/themer';
import { barData } from '@tailus-ui/visualizations/data';
import CustomTooltip from '@tailus-ui/visualizations/Tooltip';
import Card from '@tailus-ui/Card';
import { Text, Title } from '@tailus-ui/typography';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export const SimpleBarChart = () => {
  return (
    <Card className="space-y-6" variant="outlined">
      <div>
        <Title as="h2" size="lg" weight="medium" className="mb-1">
          New Orders
        </Title>
        <Text className="mb-0 mt-1" size="sm">
          Visualize your main activities data
        </Text>
      </div>
      <AspectRatio data-shade="900" ratio={16 / 9}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <YAxis className="text-[--caption-text-color]" width={34} fontSize={12} tickLine={false} axisLine={false} />
            <XAxis className="text-[--caption-text-color]" height={12} dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
            <CartesianGrid className={cartesianGrid()} vertical={false} stroke="currentColor" strokeDasharray={3} />
            <Tooltip cursor={{ fill: 'var(--ui-border-color)', strokeWidth: 1 }} content={<CustomTooltip payload={[]} active mixed label={''} />} />
            <Bar className={area({ gradient: true, intent: 'primary' })} radius={[4, 4, 0, 0]} fill="currentColor" dataKey="Primary" />
          </BarChart>
        </ResponsiveContainer>
      </AspectRatio>
    </Card>
  );
};

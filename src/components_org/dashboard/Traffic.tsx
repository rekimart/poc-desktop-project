import { ResponsiveContainer, Bar, BarChart, YAxis, XAxis, LabelList } from 'recharts';
import { area } from '@tailus/themer';
import { Text, Title } from '@tailus-ui/typography';
import Card from '@tailus-ui/Card';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export const barData = [
  { name: 'Direct', data: 9000 },
  { name: 'Organic Search', data: 5000 },
  { name: 'Referral', data: 4000 },
  { name: 'Organic Social', data: 3000 },
  { name: 'Organic Video', data: 2000 },
  { name: 'Other', data: 1000 },
];

export const Traffic = () => {
  return (
    <Card className="w-full space-y-6" variant="outlined">
      <div>
        <Title as="div" size="lg" weight="medium">
          Website Traffic
        </Title>
        <Text size="sm" className="mb-0 mt-1">
          New users by First user primary channel group (Default Channel Group)
        </Text>
      </div>

      <AspectRatio className="-mx-1" data-shade="900" ratio={16 / 9}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={barData}>
            <XAxis hide type="number" />
            <YAxis hide type="category" dataKey="name" />
            <Bar className={area({ gradient: true, intent: 'primary' })} radius={4} fill="currentColor" dataKey="data">
              <LabelList className="text-white" fontSize={12} position="insideLeft" fill="currentColor" stroke="none" dataKey="name" />
              <LabelList className="text-[--body-text-color]" fontSize={12} position="right" fill="currentColor" stroke="none" dataKey="data" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </AspectRatio>
    </Card>
  );
};

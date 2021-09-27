import * as C from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: C.theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltiop: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: C.theme.colors.gray[600],
    },
    axisTicks: {
      color: C.theme.colors.gray[600],
    },
    categories: [
      '2021-12-01T00:00:00.000Z',
      '2021-12-02T00:00:00.000Z',
      '2021-12-03T00:00:00.000Z',
      '2021-12-04T00:00:00.000Z',
      '2021-12-05T00:00:00.000Z',
      '2021-12-06T00:00:00.000Z',
      '2021-12-07T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109],
  },
];

export default function Dashboard(): React.ReactElement {
  return (
    <C.Flex direction="column" h="100vh">
      <Header />
      <C.Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <C.SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <C.Box p={['6', '8']} bg="gray.800" pb="4" borderRadius={8}>
            <C.Text fontSize="lg" mb="4">
              Inscritos da semana
            </C.Text>
            <Chart options={options} series={series} type="area" height={160} />
          </C.Box>
          <C.Box p={['6', '8']} bg="gray.800" pb="4" borderRadius={8}>
            <C.Text fontSize="lg" mb="4">
              Taxa de abertura
            </C.Text>
            <Chart options={options} series={series} type="area" height={160} />
          </C.Box>
        </C.SimpleGrid>
      </C.Flex>
    </C.Flex>
  );
}

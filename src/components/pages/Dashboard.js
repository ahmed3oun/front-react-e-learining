import React from 'react';

import { useSelector } from 'react-redux';
import { Alert, Button } from 'reactstrap';
import BackDash from './BackDash';
import { XYPlot, LineSeries, MarkSeries, VerticalBarSeries } from 'react-vis';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
} from 'recharts';

const Dashboard = () => {
  const data3 = [
    {
      name: '18-24',
      uv: 31.47,
      pv: 2400,
      fill: '#8884d8',
    },
    {
      name: '25-29',
      uv: 26.69,
      pv: 4567,
      fill: '#83a6ed',
    },
    {
      name: '30-34',
      uv: -15.69,
      pv: 1398,
      fill: '#8dd1e1',
    },
    {
      name: '35-39',
      uv: 8.22,
      pv: 9800,
      fill: '#82ca9d',
    },
    {
      name: '40-49',
      uv: -8.63,
      pv: 3908,
      fill: '#a4de6c',
    },
    {
      name: '50+',
      uv: -2.63,
      pv: 4800,
      fill: '#d0ed57',
    },
    {
      name: 'unknow',
      uv: 6.67,
      pv: 4800,
      fill: '#ffc658',
    },
  ];

  const data01 = [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
    {
      name: 'Group C',
      value: 300,
    },
    {
      name: 'Group D',
      value: 200,
    },
    {
      name: 'Group E',
      value: 278,
    },
    {
      name: 'Group F',
      value: 189,
    },
  ];
  const data02 = [
    {
      name: 'Group A',
      value: 2400,
    },
    {
      name: 'Group B',
      value: 4567,
    },
    {
      name: 'Group C',
      value: 1398,
    },
    {
      name: 'Group D',
      value: 9800,
    },
    {
      name: 'Group E',
      value: 3908,
    },
    {
      name: 'Group F',
      value: 4800,
    },
  ];

  const data1 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  const user = useSelector((state) => state.userReducer.user);
  if (!user) {
    return <h1>not allowed Please login or register</h1>;
  }

  return (
    <div>
      <BackDash />
      <main id='main'>
        <section class='breadcrumbs'>
          <div class='container'>
            <div class='d-flex justify-content-between align-items-center'>
              <div className='section-title'>
                <img src='/etudiklogo.png' alt='' width='200px' />
              </div>

              <ol></ol>
            </div>
          </div>
        </section>
        <section class='inner-page'>
          <div class='container'>
            <div className='circhart ' style={{ marginLeft: '120px' }}>
              <PieChart className='chart1' width={730} height={250}>
                <Pie
                  data={data01}
                  dataKey='value'
                  nameKey='name'
                  cx='50%'
                  cy='50%'
                  outerRadius={50}
                  fill='#8884d8'
                />
                <Pie
                  data={data02}
                  dataKey='value'
                  nameKey='name'
                  cx='50%'
                  cy='50%'
                  innerRadius={60}
                  outerRadius={80}
                  fill='#82ca9d'
                  label
                />
              </PieChart>
              <RadialBarChart
                className='chart1  p-2'
                width={730}
                height={250}
                innerRadius='10%'
                outerRadius='80%'
                data={data3}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  label={{ fill: '#666', position: 'insideStart' }}
                  background
                  clockWise={true}
                  dataKey='uv'
                />
                <Legend
                  iconSize={10}
                  width={120}
                  height={140}
                  layout='vertical'
                  verticalAlign='middle'
                  align='right'
                />
                <Tooltip />
              </RadialBarChart>
            </div>
          </div>
        </section>

        <div
          className='d-flex flex-wrap '
          style={{ marginLeft: '160px', marginTop: '50px' }}
        >
          <AreaChart
            width={730}
            height={250}
            data={data1}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stroke='#8884d8'
              fillOpacity={1}
              fill='url(#colorUv)'
            />
            <Area
              type='monotone'
              dataKey='pv'
              stroke='#82ca9d'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>

          {/* <XYPlot height={300} width={400}>
       <VerticalBarSeries data={data} color="red" />
        </XYPlot> */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
{
  /* <Alert color='primary'>Dashboard</Alert>
      </div>
      <div className='media border p-3'>
        <img src={user.avatar} className='mr-3 mt-3 rounded-circle'></img>
        <div className='media-body'>
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <h5>{user.email} </h5>
          <h5>{user.adress} </h5>
          <h5>{user.phone} </h5>
        </div> */
}

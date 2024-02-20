import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Grid } from "@mui/material"
import AspectRatio from '@mui/joy/AspectRatio';

// ChartJSの設定
ChartJS.register(
  ...registerables
);


const BarChart = (props) => {
  const { data } = props;
  // console.log(data)

  // dataがない場合
  if (data == undefined || data.length == 0) {
    return <>データがありません</>
  }
  const obj = {};
  for (let i = 0; i < data.length; i++) {
    obj[data[i][0]] = data[i].slice(1)
  };


  const labels = obj[Object.keys(obj)[0]];

  const cahrtData = {
    labels,
    datasets: [
      {
        label: obj["year"][0],
        data: obj["sales"],
        backgroundColor: 'green',
      },
    ],
  };


  return (
    <>
      <Grid container justifyContent="center" direction={'column'} alignItems={"center"}>
        部署毎の売上
        <AspectRatio variant="plain" ratio="2/1" sx={{ width: { xs: "100%", sm: "80%", md: "60%", ls: "50%" } }}>
          <Bar data={cahrtData} />
        </AspectRatio>
      </Grid>
    </>
  )
}

export default BarChart;
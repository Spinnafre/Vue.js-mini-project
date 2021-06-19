<template>
  <div id="app">
    <div id="chart">
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
// import Apex from "./components/Apex.vue";


export default {
  name: "App",
  data() {
    return {
      series: [
        {
          name: "Income",
          type: "column",
          // Dados
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        },
        {
          name: "Cashflow",
          type: "column",
          // Dados
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
        },
        {
          name: "Revenue",
          type: "line",
          // Dados
          data: [20, 29, 37, 36, 44, 45, 50, 58],
        },
      ],
      chartOptions: {
        // Configuração da exibição do gráfico
        chart: {
          height: 350,
          type: "line",
          // Não exibir gráficos em cima de outro
          stacked:false,
        },
        // Mostrar valroes em cada ponto do gráfico
        dataLabels: {
          enabled: true,
        },
        stroke: {
          width: [1, 1, 4],
        },
        // Título do meu gráfico
        title: {
          text: "XYZ - Stock Analysis (2009 - 2016)",
          align: "left",
          offsetX: 110,
        },
        // Valores exibidos no eixo X
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        // Configura a exibição dos dados no eixo Y
        yaxis: [
              {
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#008FFB'
                },
                labels: {
                  style: {
                    colors: '#008FFB',
                  }
                },
                title: {
                  text: "Income (thousand crores)",
                  style: {
                    color: '#008FFB',
                  }
                },
                tooltip: {
                  enabled: false
                }
              },
              {
                // Com quem irá se comparar? 
                // Irá adaptar o eixo Y do gráfico para comparar na mesma escala com o Income
                seriesName: 'Income',
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#00E396'
                },
                labels: {
                  style: {
                    colors: '#00E396',
                  }
                },
                title: {
                  text: "Operating Cashflow (thousand crores)",
                  style: {
                    color: '#00E396',
                  }
                },
              },
              {
                seriesName: 'Revenue',
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#FEB019'
                },
                labels: {
                  style: {
                    colors: '#FEB019',
                  },
                },
                title: {
                  text: "Revenue (thousand crores)",
                  style: {
                    color: '#FEB019',
                  }
                }
              },
            ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

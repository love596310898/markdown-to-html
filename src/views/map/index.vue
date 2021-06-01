<template>
  <div class="map-wrap">
    <Echarts ref="map"></Echarts>
  </div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';
import Echarts from '@/components/echarts/index.vue';

export default {
  components: { Echarts },
  data() {
    return {};
  },
  mounted() {
    this.initChart();
  },
  methods: {
    async initChart() {
      const res = await axios.get(require('@/views/map/effect.svg'));
      const mapName = 'path-chart';
      echarts.registerMap(mapName, { svg: res.data });
      this.$refs.map.setOption({
        title: {
          text: 'Visit Route',
          left: 'center',
          bottom: 10,
        },
        tooltip: {
        },
        geo: {
          map: mapName,
          roam: true,
          emphasis: {
            itemStyle: {
              color: null,
            },
            label: {
              show: true,
            },
          },
        },
        series: [{
          name: 'Route1',
          type: 'lines',
          coordinateSystem: 'geo',
          geoIndex: 0,
          zlevel: 1,
          emphasis: {
            label: {
              show: true,
            },
          },
          polyline: true,
          lineStyle: {
            width: 0,
          },
          effect: {
            show: true,
            period: 8,
            constantSpeed: 80,
            trailLength: 0.1,
            symbolSize: [7, 30],
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAeCAYAAADgiwSAAAABbUlEQVQokV2SzWoVQRCFv9PTowTkEpKV+Aau7ta9KwU3dycufb08Ql7EnRAIBEzw587MjciR6u75SQYaeqrqnDp1qsHenq9P/pM9n3fJvk32WfwrYgISIPgs2CU4zDF6O87ZC/t7bz/09nWLkTocVR8SvOzwqYO3CfYlnhAdPiQ8CZ0SRMGXoM0JvxHsjSZw6S783ug8d+gj8Ej9ahZZ8EmX9pXhtWpGMaCQDDc5wTkwUiELgeEid3ioQW14K0/OaHSh8lzhGZ87GDZiSoHaPWf8Z5Npbe0tcku33HOGIRaklbskY9hAHp/1XOgDeXQtbASaWQLpYR3/ySQhSJtRZoYFWXqW0VRnaP7W5ChcgoIfxpeznSGomA46gr+B9g1dlj2q9rkFTcZ3wC6yseyx7fC+Kb0z9EEdK5soFvpfUxle/wb1IWgy/FrtK2/op/GreAmBPK3OFerBgUxN7fLuatIhNAv+rqaVB17v8PgfLwO6kuZQkG0AAAAASUVORK5CYII=',
          },
          data: [
            {
              coords: [
                [1386.8648743255249, 227.24192336589056],
                [1387.375, 452.75],
                [1008.6250000000001, 452.75],
                [961.1250000000001, 424],
              ],
            },
            {
              coords: [
                [1367.8907365453397, 229.4494136809291],
                [1367.8907365453397, 333.17149832831063],
                [863.6250000000001, 331.5],
              ],
            },

            {
              coords: [
                [605.4230417493704, 312.02084239440023],
                [606.1250000000001, 174],
                [243.6250000000001, 175.25],
              ],
            },
            {
              coords: [
                [609.3092179016132, 347.0871566093408],
                [328.4834376998592, 348.49834143447526],
              ],
            },
            {
              coords: [
                [609.3092179016132, 347.0871566093408],
                [608.8446221647437, 481.84633931103224],
                [244.84980611731683, 482.36612315353534],
              ],
            },

          ],
        },
        {
          name: 'Route1',
          type: 'lines',
          coordinateSystem: 'geo',
          geoIndex: 0,
          zlevel: 2,
          emphasis: {
            label: {
              show: true,
            },
          },
          polyline: true,
          lineStyle: {
            width: 0,
          },
          effect: {
            show: true,
            period: 8,
            constantSpeed: 80,
            trailLength: 0.1,
            symbolSize: [7, 30],
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAeCAYAAADgiwSAAAABeUlEQVQokU2TsW4bQQxEH4VNYacQ7NJwnSqw+/RJZSEIUtqNC39ImnxFPix/YKRxgMQ6+Swtx+AuV9IBh+XukMPh3J5d/RQYIGJ9QPzCUOwXEshB4kTOD4lPuWfRgv5+k7OUc4tDvMfgvZxXnJU7p97ACu5cy/moylwr7+TcxHmrpHLnlVd3ZjmzV75HZXFnCXxGvKTmeK4xLovv+BqTYGz6NPuMVVFlJWPTJwNZn1LwJWjPEVPSYYapJy6DdjOYTOB2oC7aMcmQCfM00WK1UFuZNCqzKAVZqZXnPOynnbNFnTYzj+ZsUaPNIyW8T4rK9WjSyQ+No+f6iKxj2bdoyzo2UhthLzvC6DlMiDlbXtqYgjoaRjRvR5ewbxr6ZDwhznsYc9b+qZL6t8EHGe/D/FKdTaOD/wYvDo/AxaGyl/6JRfBkcBa3OXrG9dhhPCd5xfiLOC3yBnZgyIZ/GIugnSEVD1nGjJiLxBTKBnbAmaJym/Yd/1BIbN8AteMJLUaqxiUAAAAASUVORK5CYII=',
          },
          data: [{
            coords: [
              [852.3750000000001, 301.5],
              [893.6250000000001, 281.5],
              [892.3750000000001, 251.5],
              [1224.875, 250.25],
            ],
          },
          {
            coords: [
              [798.6250000000002, 281.56579059115376],
              [798.6250000000001, 156.5],
              [1212.0346339311027, 156.50000000000014],
            ],
          },
          {
            coords: [
              [330.0753247418479, 457.5280671961059],
              [447.804346492229, 456.9979451731406],
              [447.804346492229, 332.4192697762232],
              [591.1250000000001, 331.5],
            ],
          },
          {
            coords: [
              [354.8750000000001, 331.5],
              [447.804346492229, 332.4192697762232],
              [591.1250000000001, 331.5],
            ],
          },
          {
            coords: [
              [330.8388582235736, 207.463858223574],
              [448.42956149958064, 206.98192911178708],
              [447.804346492229, 332.4192697762232],
              [591.1250000000001, 331.5],
            ],
          },
          ],
        },
        {
          name: 'Route1',
          type: 'lines',
          coordinateSystem: 'geo',
          geoIndex: 0,
          zlevel: 3,
          emphasis: {
            label: {
              show: true,
            },
          },
          polyline: true,
          lineStyle: {
            width: 0,
          },
          effect: {
            show: true,
            period: 8,
            constantSpeed: 80,
            trailLength: 0.1,
            symbolSize: [7, 30],
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAeCAYAAADgiwSAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGTSURBVDhPVZM9TgNBDIVtzxY0pKHnBAhaTkBDkJCQaFIhrsIhaDgXJwAJJH4Eyc4mCC3f82wQJPL4zfj5jdfr9c9b+/u7xu4aNAsPN/OQHYNv8Dtt78YaeAgRC5YZ+ALMWRABWJQdeGfgDfiq5SjYJE7ZSG7ADrjsyLzozqLMS4IDeI3HyqJlRtnn8BAbwGt8xU7cyyxY5sn2qOAqBSRHK+U8rIRYYlcwhA6cxDkFdbuweiQrGT0EcCfingqasuSVlQGIXY9sWXGwCqzhkjhQo1qYZI4xSU8Yq8iGMpbKVtYvLmRrYdM7Mv+w5JGF3Uly1XDKgxXcbkRIvCVTbcoQnAzc7kZasvkoZDVpEYTlKSjLzg0FgVsAQhaUh7RORYBpn3NvPif9nLLU9IfpUdRGyYaC6swL+H7C6rfap00SHrlCL/xJAc6qgnq5IrxizFN5zjNMr2zgjjf8N0Ys6G0sM8hOI/KB3w637J1CCWpmcrA0qzmJxDQNrkyBsFFTryw+j5EBy0zG/suNP7L6LNyat4jND/Fhn3eZVMz2AAAAAElFTkSuQmCC',
          },
          data: [
            {
              coords: [
                [916.1250000000001, 421.5],
                [744.875, 520.7238483461762],
                [76.43635323593207, 520.9766409398267],
                [76.66082901820636, 455.7553759179219],
                [146.1250000000001, 455.25],
              ],
            },
            {
              coords: [
                [916.1250000000001, 421.5],
                [744.875, 520.7238483461762],
                [76.43635323593207, 520.9766409398267],
                [76.12500000000011, 332.75],
                [222.3750000000001, 331.5],
              ],
            },
            {
              coords: [
                [916.1250000000001, 421.5],
                [744.875, 520.7238483461762],
                [76.43635323593207, 520.9766409398267],
                [76.66896024184345, 212.35242478243782],
                [150.05057114883445, 210.94123995730337],
              ],
            },
          ],
        }],
      });
    },
  },
};
</script>

<style lang="scss">
.map-wrap {
  width: 1511px;
  height: 608px;
  margin: 50 auto;
}
</style>

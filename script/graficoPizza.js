  Highcharts.setOptions({
      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
          return {
              radialGradient: {
                  cx: 0.5,
                  cy: 0.3,
                  r: 0.7
              },
              stops: [
                  [0, color],
                  [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
              ]
          };
      })
  });

  function pie(vet, vet2) {
      //Variavel para parametro do gráfico
      let variavelPesq = []
      for (let i = 0; i < vet.length; i++) {
          let variAux = []
          variAux.push(vet2[i])
          variAux.push(vet[i])

          variavelPesq.push(variAux)

      }
      // Build the chart
      Highcharts.chart('container', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Grafico da tabela Qualitativa'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,

                      format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                      style: {
                          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                      },
                      connectorColor: 'silver'
                  },
                  showInlegend: true
              }
          },
          series: [{

              name: 'Quali',
              data: variavelPesq

          }]
      });
  };
  pie(grafico2, vetorLimpo)
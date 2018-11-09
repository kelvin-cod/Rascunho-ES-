function chama() {


}

function vet(Xindependente, dependente) {
    // Objeto para bolinhas
    for (let i = 0; i < Xindependente.length; i++) {
        //parametros para as bolinhas
        teste.push(([Xindependente[i], Ydependente[i]]))
    }
    return teste
}

//chart.reflow();

console.log(teste)
$(function () {
    $('#container').highcharts({
        lang: {
            downloadJPEG: 'Baixar imagem JPEG',
            downloadPDF: 'Baixar arquivo PDF',
            downloadPNG: 'Baixar imagem PNG',
            downloadSVG: 'Baixar vetor SVG',
            printChart: 'Imprimir gráfico',
            downloadCSV: 'Baixar arquivo CSV',
            downloadXLS: 'Baixar arquivo XLS',
            viewData: 'Tabela de dados',
            openInCloud: 'Abrir na Nuvem'

        },
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'GRAFICO DE DISPERSÃO'
        },
        subtitle: {
            text: 'Coeficiente de correlação de Pearson'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Independente(X)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Dependente(Y)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} x, {point.y} y'
                }
            }
        },
        series: [{
            regression: true,
            label: 'Equação',
            name: 'Pontos',
            color: 'rgba(0,204,105)',
            data: teste


        }]
    });
});

/* data: [
                [3, 1.5],
                [5, 2.0],
                [10, 6.0],
                [10, 7.0],
                [20, 10.0],
                [20, 12.0],
                [20, 15.0],
                [30, 8.0],
                [40, 10.0],

            ] */
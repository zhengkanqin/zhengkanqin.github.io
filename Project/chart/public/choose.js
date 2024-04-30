var zdy = document.getElementById('zdy');
var zkq = document.getElementById('zkq');
var cyw = document.getElementById('cyw');
var lfy = document.getElementById('lfy');
var myChart = echarts.init(document.getElementById('main'));

zdy.classList.toggle('highlighted');
var option = {
    title: {
        text: '各个学期选课数量',
        x: 'center',
    },
    tooltip: {},
    legend: {
        orient: 'vertical',
        padding: [50, 0, 0, 0],
        x: 'right',
        data: ['朱道勇']
    },
    xAxis: {
        data: ['大一上', '大一下', '大二上', '大二下', '大三上']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '朱道勇',
            type: 'line',
            smooth: true,
            data: [14, 14, 10, 12, 8]
        }]
};
myChart.setOption(option);

zdy.addEventListener('click', function () {
    zdy.classList.toggle('highlighted');
    zkq.classList.remove('highlighted');
    cyw.classList.remove('highlighted');
    lfy.classList.remove('highlighted');
    //alert('1');
    myChart.setOption({
        legend: {
            orient: 'vertical',
            padding: [50, 0, 0, 0],
            x: 'right',
            data: ['朱道勇']
        },
        series: [
            {
                name: '朱道勇',
                type: 'line',
                smooth: true,
                data: [14, 14, 10, 12, 8]
            }]
    });
});

zkq.addEventListener('click', function () {
    zkq.classList.toggle('highlighted');
    zdy.classList.remove('highlighted');
    cyw.classList.remove('highlighted');
    lfy.classList.remove('highlighted');
    //alert('2');
    myChart.setOption({
        legend: {
            orient: 'vertical',
            padding: [50, 0, 0, 0],
            x: 'right',
            data: ['郑堪钦']
        },
        series: [
            {
                name: '郑堪钦',
                type: 'line',
                smooth: true,
                data: [14, 15, 10, 9, 6]
            }]
    });
});

cyw.addEventListener('click', function () {
    cyw.classList.toggle('highlighted');
    zkq.classList.remove('highlighted');
    zdy.classList.remove('highlighted');
    lfy.classList.remove('highlighted');
    //alert('3');
    myChart.setOption({
        legend: {
            orient: 'vertical',
            padding: [50, 0, 0, 0],
            x: 'right',
            data: ['陈耀文']
        },
        series:
            [{
                    name: '陈耀文',
                    type: 'line',
                    smooth: true,
                    data: [15, 14, 11, 12, 8]
                }]
    });
});

lfy.addEventListener('click', function () {
    lfy.classList.toggle('highlighted');
    zkq.classList.remove('highlighted');
    cyw.classList.remove('highlighted');
    zdy.classList.remove('highlighted');
    //alert('4');
    myChart.setOption({
        legend: {
            orient: 'vertical',
            padding: [50, 0, 0, 0],
            x: 'right',
            data: ['刘方瑜']
        },
        series: [
            {
                name: '刘方瑜',
                type: 'line',
                smooth: true,
                data: [15, 15, 11, 14, 11]
            }]
    });
});
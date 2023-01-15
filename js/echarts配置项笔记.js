// 自调用函数可避免变量污染,必须以分号';'结尾
(function(){
    // 指定如表需要插入的位置
    var myChart=echarts.init(document.querySelector('.bar .chart'))
    // 指定图标配置项和数据,option需要定义
    var option={
        // grid控制图表大小坐标系内网格图
        grid:{
            top:'10px',
            bootom:'2%',
            left:'5%',
            right:'5%',
            // 是否显示刻度标签 true显示
            containLabel:true
        },
        // 数据提示框，鼠标放上面显示
        tooltip: {
            trigger: 'axis',//显示方式，axis折线和柱状图，item饼图
            backgroundColor:'rgba(13, 59, 116,.8)',
            borderColor:'rgba(13, 59, 116,.8)',
            // 文字设置
            textStyle:{
                  fontSize:'6',
                  color:'#fff'
            },
            // 提示数据
            formatter: '{a} <br><br>{b} : {c} ({d}%)'
        },
        // 图例
        legend: {
            data: ['Email', 'Union Ads'],//如果series有name则可不用设置
            // 图例标签的大小
            itemWidth:6,
            itemHeight:6,
            // 两个图例之间是距离
            itemGap:2,
            textStyle: {
              color: '#4c9bfd', // 图例文字颜色
              fontSize: "10",
            },
            // 图例显示位置
            right: '1%', 
            left: 'center',
            top: 'bottom',
        },
        // 每个柱子/扇形颜色
        color: ['#006cff', '#60cda0',],
        // x轴配置项，可以为数组，有两个，通过yAxisIndex/xAxisIndex控制位置
        xAxis: {
            // 刻度线
            axisTick:{
                  alignWithLabel:true//刻度线与标签对齐
            },
            // 刻度标签
            axisLabel: {
                  color: "rgba(255,255,255,.6) ",
                  fontSize: "10"
            },
            // x轴线
            axisLine:{show:false},
            // 网格线
            splitLine:{
                lineStyle:{
                    color: "rgba(255,255,255,.1)"
                }
            },
            // 坐标轴类型，类目轴
            type: 'category',
            inverse:true,//是否是反向坐标，数据是反的时使用
             //   坐标轴两侧留白
            boundaryGap: false,
            data: [ ],
        },
        series: [
            {
                name:'直接访问',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                type: 'bar',
                // 柱子间距
                barCategoryGap: 50,
                    //  柱子宽度 
                barWidth: '35%',
                //   控制柱子重叠显示层级
                yAxisIndex:0,
                itemStyle:{
                    barBorderRadius: 5,
                    color:function(params){
                        return myColor[params.dataIndex]

                    },
                    // 不显示条颜色值显示边框
                    color:'none',
                    borderColor:'#00c1de',
                    borderWidth:3,
                },
                 // 图形上的文本标签
                label: {
                    show:true,
                    position:'inside',
                    formatter:'{c}%',
                    fontSize:'8',
                    color:'#fff'
                },
                type: 'line',
                smooth:true,//圆滑曲线
                areaStyle: {
                    color:'skyblue'
                    },
                // 标记点大小
                symbolSize:8,
                // 是否显示标记点，false鼠标放上时才显示
                showSymbol: false,
                type: 'pie',
                // 第一个参数内径大小，第二个参数外径大小 
                radius: ['40%', '60%'],
                //饼图位置
                center: ['50%', '50%'],
                // 图例引线
                labelLine:{
                    length:8,//连扇形的线长
                    length2:5,//连文字的线长
                },
            },
            {}
        ]
    };
    // 使用指定的配置项和数据渲染图表
    myChart.setOption(option);
    // 图表和屏幕自适应
    window.addEventListener('resize',function(){
        myChart.resize()
    });
    // 点击切换数据,需要引入jquery
    $('.line h2').on('click','a',function(){
        // $(this).index()点击的a标签的索引
        var obj=yearData[$(this).index()]
        option.series[0].data=obj.data[0];
        option.series[1].data=obj.data[1]
        // 数据处理完需要重新渲染图标
        myChart.setOption(option)
    })
})();
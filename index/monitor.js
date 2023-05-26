function drawLayer02Label(canvasObj,text,textBeginX,lineEndX){
	var colorValue = '#04918B';

	var ctx = canvasObj.getContext("2d");

	ctx.beginPath();
	ctx.arc(35,55,2,0,2*Math.PI);
	ctx.closePath();
	ctx.fillStyle = colorValue;
	ctx.fill();

	ctx.moveTo(35,55);
	ctx.lineTo(60,80);
	ctx.lineTo(lineEndX,80);
	ctx.lineWidth = 1;
	ctx.strokeStyle = colorValue;
	ctx.stroke();

	ctx.font='14px Georgia';
	ctx.fillStyle = colorValue;
	ctx.fillText(text,textBeginX,92);
}

//接入机型占比

var COLOR = {
	MACHINE:{
		TYPE_A:'#0175EE',
		TYPE_B:'#D89446',
		TYPE_C:'#373693',
		TYPE_D:'#25AE4F',
		TYPE_E:'#06B5C6',
		TYPE_F:'#009E9A',
		TYPE_G:'#AC266F'
	}
};

// function renderLegend(){
// 	drawLegend(COLOR.MACHINE.TYPE_A,25,'A机型');
// 	drawLegend(COLOR.MACHINE.TYPE_B,50,'B机型');
// 	drawLegend(COLOR.MACHINE.TYPE_C,75,'C机型');
// 	drawLegend(COLOR.MACHINE.TYPE_D,100,'D机型');
// 	drawLegend(COLOR.MACHINE.TYPE_E,125,'E机型');
// 	drawLegend(COLOR.MACHINE.TYPE_F,150,'F机型');
// 	drawLegend(COLOR.MACHINE.TYPE_G,175,'G机型');
// }

function drawLegend(pointColor,pointY,text){
	var ctx = $("#layer03_left_01 canvas").get(0).getContext("2d");
	ctx.beginPath();
	ctx.arc(20,pointY,6,0,2*Math.PI);
	ctx.fillStyle = pointColor;
	ctx.fill();
	ctx.font='20px';
	ctx.fillStyle = '#FEFFFE';
	ctx.fillText(text,40,pointY+3);
}


//存储

function drawLayer03Right(ctx,colorValue,rate,value){

	var circle = {
        x : 65,    //圆心的x轴坐标值
        y : 80,    //圆心的y轴坐标值
        r : 60      //圆的半径
    };

	//画扇形
	// ctx.sector(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI);
	// ctx.fillStyle = colorValue;
	// ctx.fill();
	ctx.clearRect(0, 0, 130, 150);
	ctx.beginPath();
	ctx.arc(circle.x,circle.y,circle.r,0,Math.PI*2)
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#052639';
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI)
	ctx.lineWidth = 10;
	ctx.lineCap = 'round';
	ctx.strokeStyle = colorValue;
	ctx.stroke();
	ctx.closePath();
    
	ctx.fillStyle = 'white';
	ctx.font = '30px Calibri';
	ctx.fillText(value,circle.x-15,circle.y+10);

}


// function renderChartBar01(){
// 	var myChart = echarts.init(document.getElementById("layer03_left_02"));
// 		myChart.setOption(
// 					 {
// 						title : {
// 							text: '',
// 							subtext: '',
// 							x:'center'
// 						},
// 						tooltip : {
// 							trigger: 'item',
// 							formatter: "{b} : {c} ({d}%)"
// 						},
// 						legend: {
// 							show:false,
// 							x : 'center',
// 							y : 'bottom',
// 							data:['A机型','B机型','C机型','D机型','E机型','F机型','G机型']
// 						},
// 						toolbox: {
// 						},
// 						label:{
// 							normal:{
// 								show: true,
// 								formatter: "{b} \n{d}%"
// 							}
// 						},
// 						calculable : true,
// 						color:[COLOR.MACHINE.TYPE_A,COLOR.MACHINE.TYPE_B,COLOR.MACHINE.TYPE_C,COLOR.MACHINE.TYPE_D,COLOR.MACHINE.TYPE_E,COLOR.MACHINE.TYPE_F,COLOR.MACHINE.TYPE_G],
// 						series : [
// 							{
// 								name:'',
// 								type:'pie',
// 								radius : [40, 80],
// 								center : ['50%', '50%'],
// 								//roseType : 'area',
// 								data:[
// 									{value:4600, name:'A机型'},
// 									{value:4600, name:'B机型'},
// 									{value:15600, name:'C机型'},
// 									{value:6600, name:'D机型'},
// 									{value:5700, name:'E机型'},
// 									{value:7600, name:'F机型'},
// 									{value:3500, name:'G机型'}
// 								]
// 							}
// 						]
// 					}
// 		);
//
// }

/*
function renderChartBar02(){
	var myChart = echarts.init(document.getElementById("layer03_left_03"));
		myChart.setOption(
					{
						title : {
							text: '',
							subtext: '',
							x:'center'
						},
						tooltip : {
							show:true,
							trigger: 'item',
							formatter: "上线率<br>{b} : {c} ({d}%)"
						},
						legend: {
							show:false,
							orient: 'vertical',
							left: 'left',
							data: ['A机型','B机型','C机型','D机型','E机型','F机型','G机型']
						},
						series : [
							{
								name: '',
								type: 'pie',
								radius : '50%',
								center: ['50%', '60%'],
								data:[
									{value:7600, name:'A机型'},
									{value:6600, name:'B机型'},
									{value:15600, name:'C机型'},
									{value:5700, name:'D机型'},
									{value:4600, name:'E机型'},
									{value:4600, name:'F机型'},
									{value:3500, name:'G机型'}
								],
								itemStyle: {
									emphasis: {
										shadowBlur: 10,
										shadowOffsetX: 0,
										shadowColor: 'rgba(0, 0, 0, 0.5)'
									}
								}
							}
						],
						color:[COLOR.MACHINE.TYPE_A,COLOR.MACHINE.TYPE_B,COLOR.MACHINE.TYPE_C,COLOR.MACHINE.TYPE_D,COLOR.MACHINE.TYPE_E,COLOR.MACHINE.TYPE_F,COLOR.MACHINE.TYPE_G]
					}
		);
}*/

function InitChart_TEMP(myChart,init_data){
	myChart.setOption({
		title: {
		text: '温度实时走势图',
		left:'center',
			textStyle: {
			color: 'white'
			}
	 },
		textStyle:{
			color:'white'
		},
	tooltip: {
		trigger: 'axis',
			formatter: function (params) {
			params = params[0];
			var date = new Date(params.name);
			return params.value[0] + '  ' + params.value[1];
		},
		axisPointer: {
			animation: false
		}
	},
	xAxis: {
		type: 'time',
		splitLine: {
			show: false
		}
	},
	yAxis: {
		type: 'value',
			boundaryGap: [0, '100%'],
			splitLine: {
			show: false
		},
		name:'温度',
		min: -40,
		max: 40,
		axisLabel: {
			formatter: '{value} °C'
		}
	},
	series: [
		{
			name: 'Fake Data',
			type: 'line',
			showSymbol: false,
			data: init_data
		}
	]}
	);
}

function InitChart_CO2(myChart,init_data){
	myChart.setOption({
		title: {
			text: '二氧化碳浓度实时走势图',
			left:'center',
			textStyle: {
				color: 'white'
			}
		},
		textStyle:{
			color:'white',
		},
		tooltip: {
			trigger: 'axis',
			formatter: function (params) {
				params = params[0];
				var date = new Date(params.name);
				return params.value[0] + '  ' + params.value[1];
			},
			axisPointer: {
				animation: false
			}
		},
		xAxis: {
			type: 'time',
			splitLine: {
				show: false
			}
		},
		yAxis: {
			type: 'value',
			boundaryGap: [0, '100%'],
			splitLine: {
				show: false
			},
			name:'浓度(ppm)',
			min: 0,
			max: 1000,
			axisLabel: {
				formatter: '{value}'
			}
		},
		series: [
			{
				name: 'Fake Data',
				type: 'line',
				showSymbol: false,
				data: init_data,
			}
		]}
	);
}

function get10MinutesScale()
{
	var currDate = new Date();
	var odd = currDate.getMinutes()%10;
	var returnArr = new Array();
	currDate.setMinutes(currDate.getMinutes()-odd);
	for(var i = 0; i <7; i++){
		returnArr.push(currDate.getHours()+":"+(currDate.getMinutes()<10?("0"+currDate.getMinutes()):currDate.getMinutes()));
		currDate.setMinutes(currDate.getMinutes()-10);
	}
	return returnArr;
}


function getLatestDays(num)
{
	var currentDay = new Date();
	var returnDays = [];
	for (var i = 0 ; i < num ; i++)
	{
		currentDay.setDate(currentDay.getDate() - 1);
		returnDays.push((currentDay.getMonth()+1)+"/"+currentDay.getDate());
	}
	return returnDays;
}

function getUTCTime() {
	let d1 = new Date();
	let d2 = new Date( d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds() );
	return Date.parse(d2);
}
const getFormatTime = (stamp) => {
	let year = new Date(stamp).getFullYear()
	let month = new Date(stamp).getMonth() + 1
	month = month < 10 ? '0' + month : month
	let date = new Date(stamp).getDate()
	date = date < 10 ? '0' + date : date
	return year + '-' + month + '-' + date + ' ' + new Date(stamp).toLocaleTimeString('chinese', {hour12: false})}

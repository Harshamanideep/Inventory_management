var options={series:[{name:"Total Order",data:[4,10,25,12,25,18,40,22,7]}],chart:{height:105,type:"area",sparkline:{enabled:!0},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#20b799"],shadeIntensity:1,type:"vertical",opacityFrom:.75,opacityTo:.1}},colors:["#20b799"],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return""}}},marker:{show:!1}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}},chart=new ApexCharts(document.querySelector("#total-order"),options),options=(chart.render(),{series:[{name:"Total Sale",data:[35,65,47,35,44,32,27,54,44,61]}],chart:{height:105,type:"area",sparkline:{enabled:!0},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1.5,curve:"smooth"},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8b5cf6"],shadeIntensity:1,type:"vertical",opacityFrom:.75,opacityTo:.1}},colors:["#8b5cf6"],plotOptions:{bar:{horizontal:!1,borderRadius:3,columnWidth:"48%"}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}),options=((chart=new ApexCharts(document.querySelector("#total-sale"),options)).render(),{series:[{name:"Total Visits",data:[4,10,25,12,25,18,40,22,7]}],chart:{height:105,type:"area",sparkline:{enabled:!0},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#3cbade"],shadeIntensity:1,type:"vertical",opacityFrom:.75,opacityTo:.1}},colors:["#3cbade"],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return""}}},marker:{show:!1}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}),options=((chart=new ApexCharts(document.querySelector("#total-visits"),options)).render(),{chart:{height:260,type:"donut"},legend:{show:!1,position:"bottom",horizontalAlign:"center",offsetX:0,offsetY:-5,markers:{width:9,height:9,radius:6},itemMargin:{horizontal:10,vertical:0}},stroke:{width:0},plotOptions:{pie:{donut:{size:"70%",labels:{show:!0,total:{showAlways:!0,show:!0}}}}},series:[150,135,90,56],labels:["Electronics","Stationery","Beauty","Home & Kitchen"],colors:["#22c55e","#efb540","#4ecac2","#fa5944"],dataLabels:{enabled:!1}}),options=((chart=new ApexCharts(document.querySelector("#month-sales-chart"),options)).render(),{series:[{name:"Revenue",type:"bar",data:[52,34,68,46,63,42,70,61,49,67,44,78]},{name:"Order",type:"area",data:[29,5,12,7,11,35,8,21,9,17,12,7]}],chart:{height:313,type:"line",toolbar:{show:!1}},stroke:{dashArray:[0,0],width:[0,2],curve:"smooth"},fill:{opacity:[1,1],type:["solid","gradient"],gradient:{type:"vertical",inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90]}},markers:{size:[0,0],strokeWidth:2,hover:{size:4}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{min:0,axisBorder:{show:!1}},grid:{show:!0,strokeDashArray:3,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:0,right:-2,bottom:0,left:10}},legend:{show:!0,horizontalAlign:"center",offsetX:0,offsetY:5,markers:{width:9,height:9,radius:6},itemMargin:{horizontal:10,vertical:0}},plotOptions:{bar:{columnWidth:"30%",barHeight:"70%",borderRadius:10}},colors:["#8b5cf6","#fa5944"],tooltip:{shared:!0,y:[{formatter:function(e){return void 0!==e?e.toFixed(1)+"k":e}},{formatter:function(e){return void 0!==e?e.toFixed(1)+"k":e}}]}});(chart=new ApexCharts(document.querySelector("#revenue-chart"),options)).render();

        
$(document).ready(function(){
	
	
	

	// manage events - summary chart
	$(".manageEventSummaryChart").dxChart({
		dataSource: [
			{date: "Monday Nov 20", soldtickets: 256},
			{date: "Tuesday Nov 21", soldtickets: 1},
			{date: "Wednesday Nov 22", soldtickets: 678},
			{date: "Thursday Nov 23", soldtickets: 345},
			{date: "Friday Nov 24", soldtickets: 222},
			{date: "Saturday Nov 25", soldtickets: 888},
			{date: "Sunday Nov 26", soldtickets: 543} ],
	 
		series: {
			argumentField: "date",
			valueField: "soldtickets",
			name: "Ticket Sales",
			type: "bar",
			color: "#E7415E"
		}
	});



	// manage events - sales chart
	   $("#manageEventSalesChart").dxChart({
		dataSource: [
			{day: "Monday", tickets: 3},
			{day: "Tuesday", tickets: 2},
			{day: "Wednesday", tickets: 3},
			{day: "Thursday", tickets: 4},
			{day: "Friday", tickets: 6},
			{day: "Saturday", tickets: 11},
			{day: "Sunday", tickets: 4} ],
	 
		series: {
			argumentField: "day",
			valueField: "tickets",
			name: "Sales Revenue",
			type: "bar",
			color: '#E7415E'
		}
	});

      


	// manage events - attendee locations
	$(function ()  
					{
	   var markers = [
		{
			coordinates: [-0.1262, 51.5002],
			attributes: { name: 'London' }
		},
		{
			coordinates: [149.1286, -35.2820],
			attributes: {  name: 'Canberra' }
		},
		{
			coordinates: [139.6823, 35.6785],
			attributes: { name: 'Tokyo' }
		},
		{
			coordinates: [-77.0241, 38.8921],
			attributes: { name: 'Washington' }
		}
	];
	
	$('#attendeeLocations').dxVectorMap({
		mapData: DevExpress.viz.map.sources.world,
		markers: markers,
		markerSettings: {
			customize: function (arg) {
				return {
					text: arg.attributes.name
				};
			}
		}
	});
	}
	
	);




	// manage events - ticket sales
	renderTicketSalesChart();
	   
	
	
	
	


});

  function salesRevenueChart() {
    var timer = window.setTimeout(function(){
            var chart = $('#manageEventSalesChart').dxChart('instance');
        var renderOptions = {
            force: true
        };
        chart.render(renderOptions);
        }, 300);
       
        };
  function ticketSalesChart() {
      var timer = window.setTimeout(function(){
      var chart = $('#zoomedChart').dxChart('instance');
        var renderOptions = {
            force: true
        };
        chart.render(renderOptions);
        
      var rangeSelector = $('#rangedChart').dxRangeSelector('instance');
        rangeSelector.render(false);
        }, 300);
      
        };      
        
  function renderTicketSalesChart(){
      var series = [{
			argumentField: "arg",
			valueField: "y1"
		}, {
			argumentField: "arg",
			valueField: "y2"
		}, {
			argumentField: "arg",
			valueField: "y3"
		}];
	
	var model = {};
	model.chartOptions = {
		argumentAxis: {
		   minValueMargin: 0,
		   maxValueMargin: 0
		},
		dataSource: zoomingData,
		series: series,
		legend:{
			visible: false
		}
	};
	
	model.rangeOptions = {
		size: {
			height: 120
		},
		margin: {
			left: 10
		},
		dataSource: zoomingData,
		chart: {
			series: series
		},
		behavior: {
			callSelectedRangeChanged: "onMoving"
		},
		selectedRangeChanged: function (e) {
			var zoomedChart = $("#chartContainer #zoomedChart").dxChart("instance");
			zoomedChart.zoomArgument(e.startValue, e.endValue);
		}
	};
	
	var html = [
		'<div id="zoomedChart" data-bind="dxChart: chartOptions" style="height: 335px;margin: 0 0 15px"></div>',
		'<div id="rangedChart" data-bind="dxRangeSelector: rangeOptions" style="height: 80px"></div>'
	].join('');
	
	$("#chartContainer").append(html);
	ko.applyBindings(model, $("#chartContainer")[0]);
  }
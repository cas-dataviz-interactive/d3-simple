console.log(d3.version);

var svg = d3.select('body').append('svg')
    .attr('width',800)
    .attr('height',600)
    .append('g');

var xScale = d3.scalePoint();
var yScale = d3.scaleLinear();


d3.csv('population.csv').then(function(csv){
    console.log(csv);

    let cities = d3.set(csv,function(d){
        return d.city;
    }).values();
    console.log(cities);

    let maxVal = d3.max(csv,function(d){
        return d.population;
    })

    xScale.domain(cities).range([0,800]);
    yScale.domain([0,maxVal]).range([0,600]);

    render(csv);
});

function render(data){

    svg.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx',function(d){
            return xScale(d.city);
        })
        .attr('cy',200)
        .attr('r',function(d){
            //return yScale(d.population);
            return 10;
        });

}


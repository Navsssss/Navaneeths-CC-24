let brandData;
let Sales;
let colors = [];

function preload() {
  brandData = loadTable('Carsales.csv', 'csv', 'header');
}

function setup() {
  createCanvas(650, 500);
  background(5);

  Sales = getMaxSales();

  let brandObjects = [];
  for (let i = 0; i < brandData.getRowCount(); i++) {
    let brand = brandData.getString(i, 'Brand');
    let sales = parseFloat(brandData.getString(i, 'Sales'));
    brandObjects.push({ brand, sales });
  }

  brandObjects.sort((a, b) => b.sales - a.sales);

  drawGrid();

  drawBars(brandObjects);
  drawLegend(brandObjects);
}

function drawGrid() {
  stroke(240);
  strokeWeight(1);
  for (let i = 0; i < 10; i++) {
    line(0, i * 50, width, i * 50);
  }
  for (let i = 0; i < 16; i++) {
    line(i * 50, 0, i * 50, height);
  }
}

function drawBars(brandObjects) {
  let startX = 100;
  let startY = 400;
  let barWidth = 30;
  let barSpacing = 10;

  for (let i = 0; i < brandObjects.length; i++) {
    let brand = brandObjects[i].brand;
    let sales = brandObjects[i].sales;
    let x = startX + i * (barWidth + barSpacing);
    let barHeight = map(sales, 0, Sales, 0, 300);
    let y = startY - barHeight;
    let barColor = color(random(255), random(255), random(255));

    colors.push(barColor);

    fill(barColor);
    rect(x, y, barWidth, barHeight);

    fill(0);
    textAlign(CENTER);
    text(brand, x + barWidth / 2, startY + 20);

    textSize(12);
    text(sales, x + barWidth / 2, y - 5);
  }
}

function drawLegend(brandObjects) {
  let legendX = 500;
  let legendY = 50;
  let legendWidth = 250;
  let legendHeight = 200;

  fill(255);
  rect(legendX, legendY, legendWidth, legendHeight);
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("Sales Data", legendX + 10, legendY + 20);

  for (let i = 0; i < brandObjects.length; i++) {
    let brand = brandObjects[i].brand;
    let sales = brandObjects[i].sales;
    let barColor = colors[i];

    fill(barColor);
    rect(legendX + 10, legendY + 40 + i * 20 - 10, 20, 20);

    fill(0);
    text(`${brand}: ${sales}`, legendX + 35, legendY + 40 + i * 20);
  }
}

function getMaxSales() {
  let maxSales = 0;
  for (let i = 0; i < brandData.getRowCount(); i++) {
    let sales = parseFloat(brandData.getString(i, 'Sales'));
    if (sales > maxSales) {
      maxSales = sales;
    }
  }
  return maxSales;
}
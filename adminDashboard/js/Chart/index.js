function createChart(target) { 
    const ctx = document.getElementById(target).getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        
        data: {
            datasets: []
        },

        options: {
            elements: {
                point:{
                    radius: 0,
                    hoverRadius: 5,
                    hoverBorderWidth: 3,
                    hoverBackgroundColor: '#FFF',
                },
                line: {
                    tension: 0.4,
                }
            },
            layout: {
                legend: {
                    align: 'end',
                    labels: {
                        boxWidth: 16,
                        fotSize: 12,
                        fontFamily: 'Mulish-SemiBold',
                        fontColor: '#9FA2B4'
                    }
                }
            }
        }
    });
    
    return chart
}

function createRGBAColor() {
    // rgba(55, 81, 255, 0.05)

    const r = Math.floor(Math.random() * 255) 
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const a = Math.random().toFixed(5)

    // 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')'    

    return `rgba(${r}, ${g}, ${b}, ${a})`
}

function saveLocalChartData() {
    if(!(localStorage.getItem('chartData'))) {
        let obj = {
            year: {
                title: "Last Year",
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
                datasets: {
                    label: 'Today',
                    data: [14, 21, 27, 51, 42, 24, 35, 44, 48, 47, 41, 39],
                    backgroundColor: "rgba(55, 81, 255, 0.05)",
                    borderColor: '#3751FF'
                }
            },
            "six-month": {
                title: "Last Six month",
                labels: [1, 2, 3, 4, 5, 6],
                datasets: {
                    label: 'Today',
                    data: [35, 44, 30, 35, 41, 39],
                    backgroundColor: "rgba(255, 99, 132, 0.1)",
                    borderColor: 'rgb(255, 99, 132)'
                }
            },
            month: {
                title: "Last Month",
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                datasets: {
                    label: 'Today',
                    data: [6, 8, 9, 15, 7, 13, 19, 24, 25, 26, 26, 25, 17, 15, 9, 9, 8, 10, 17, 23, 30, 32, 33, 24, 20, 19, 18, 17, 24, 34, 39],
                    backgroundColor: "rgba(131, 35, 148, 0.05)",
                    borderColor: '#B856C9'
                }
            },
            week: {
                title: "Last Week",
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: {
                    label: 'Today',
                    data: [14, 21, 24, 35, 44, 47, 41],
                    backgroundColor: "rgba(247, 147, 59, 0.05)",
                    borderColor: '#b34180'
                }
            }
        }

        localStorage.setItem('chartData', JSON.stringify(obj));
    }
}

function setChartLabel(chart, labels) {
    if (!Array.isArray(labels)) {
        console.log('please provide array for labels')
        return
    }
    chart.data.labels = labels

    chart.update()
}

function setChartDataset(chart, dataset) {
    let isOk = true
    if (!dataset.label) {
        console.log('please provide label for dataset')
        isOk = false
    }

    if (!(dataset.data && dataset.data.length > 0)) {
        console.log('please provide an array of data in dataset')
        isOk = false
    }

    if (!dataset.backgroundColor) dataset.backgroundColor = createRGBAColor()
    if (!dataset.borderColor) dataset.borderColor = createRGBAColor()


    if (!isOk) return

    chart.data.datasets.length = 0;
    chart.data.datasets.push(dataset)

    chart.update()
}

function setInfo(data) {
    let info = {
        period: data.title,
        total: countTotal(data.datasets.data),
        max: Math.max(...data.datasets.data),
        min: Math.min(...data.datasets.data),
        average: countAverage(data.datasets.data)
    }
    initInfo(info);
}

function initInfo(info)  {
    let parent = document.querySelector("ul.chart-section__content-list");

    let spans = parent.querySelectorAll("span[data-value]");

    for (let i of spans) {
        i.innerHTML = info[i.dataset.value];
    }
}

function countTotal(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

function countAverage(array) {
    return Math.round(countTotal(array)/array.length);
}

function addCardsHandleFunction(mainChart) {
    let cards = document.getElementById('cards');

    cards.addEventListener('click', highlight);
    cards.addEventListener('click', handleCard);

    function handleCard() {
        if (!event.target.closest('.card')) return;

        let chartData = JSON.parse(localStorage.getItem('chartData'))[event.target.closest('.card').id];
        setChartLabel(mainChart, chartData.labels);
        setChartDataset(mainChart, chartData.datasets);
        setInfo(chartData);
    }

    function highlight(event) {
        if (!event.target.closest('.card')) return;

        let activeElement = document.querySelector('.active-card');

        activeElement.classList.remove('active-card');
        event.target.closest('.card').classList.add('active-card');
    }
}
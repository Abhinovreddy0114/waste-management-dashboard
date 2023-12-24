import { Component, OnInit } from '@angular/core';

import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js'

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrl: './maindashboard.component.css',

})
export class MaindashboardComponent implements OnInit {
  items: any = [
    {
      Sno: 1,
      District: 'Anantapuram',
      UlBs: 'Anantapur',
      'Total Micropockets': 271,
      'Not Scanned Micropockets': 271,
      'Total Gates': 24130,
      'N Gates Scanned': 0,
      'Residential (Total)': 20627,
      'Residential (Scanned)': 0,
      'Residential %': '0.00%',
      'Residential & Commercial (Total)': 3073,
      'Residential & Commercial (Scanned)': 0,
      'Residential & Commercial %': '0.00%',
      'Apartments (Total)': 68,
      'Apartments (Scanned)': 0,
      'Apartments %': '0.00%',
      'Bulk Commercial (Total)': 362,
      'Bulk Commercial (Scanned)': 0,
      'Bulk Commercial %': '0.00%'
    },
    {
      Sno: 2,
      District: 'Sri Sathya Sai',
      UlBs: 'Dharmavaram',
      'Total Micropockets': 95,
      'Not Scanned Micropockets': 95,
      'Total Gates': 34096,
      'N Gates Scanned': 0,
      'Residential (Total)': 31351,
      'Residential (Scanned)': 0,
      'Residential %': '0.00%',
      'Residential & Commercial (Total)': 776,
      'Residential & Commercial (Scanned)': 0,
      'Residential & Commercial %': '0.00%',
      'Apartments (Total)': 88,
      'Apartments (Scanned)': 0,
      'Apartments %': '0.00%',
      'Bulk Commercial (Total)': 1881,
      'Bulk Commercial (Scanned)': 0,
      'Bulk Commercial %': '0.00%'
    },
    {
      Sno: 3,
      District: 'Anantapuram',
      UlBs: 'Gooty',
      'Total Micropockets': 32,
      'Not Scanned Micropockets': 32,
      'Total Gates': 9498,
      'N Gates Scanned': 0,
      'Residential (Total)': 9446,
      'Residential (Scanned)': 0,
      'Residential %': '0.00%',
      'Residential & Commercial (Total)': 45,
      'Residential & Commercial (Scanned)': 0,
      'Residential & Commercial %': '0.00%',
      'Apartments (Total)': 7,
      'Apartments (Scanned)': 0,
      'Apartments %': '0.00%',
      'Bulk Commercial (Total)': 0,
      'Bulk Commercial (Scanned)': 0,
      'Bulk Commercial %': '0.00%'
    },
    {
      Sno: 4,
      District: 'Anantapuram',
      UlBs: 'Guntakal',
      'Total Micropockets': 87,
      'Not Scanned Micropockets': 87,
      'Total Gates': 25630,
      'N Gates Scanned': 0,
      'Residential (Total)': 25542,
      'Residential (Scanned)': 0,
      'Residential %': '0.00%',
      'Residential & Commercial (Total)': 42,
      'Residential & Commercial (Scanned)': 0,
      'Residential & Commercial %': '0.00%',
      'Apartments (Total)': 9,
      'Apartments (Scanned)': 0,
      'Apartments %': '0.00%',
      'Bulk Commercial (Total)': 37,
      'Bulk Commercial (Scanned)': 0,
      'Bulk Commercial %': '0.00%'
    },
    {
      Sno: 5,
      District: 'Sri Sathya Sai',
      UlBs: 'Hindupur',
      'Total Micropockets': 95,
      'Not Scanned Micropockets': 95,
      'Total Gates': 23031,
      'N Gates Scanned': 0,
      'Residential (Total)': 22441,
      'Residential (Scanned)': 0,
      'Residential %': '0.00%',
      'Residential & Commercial (Total)': 198,
      'Residential & Commercial (Scanned)': 0,
      'Residential & Commercial %': '0.00%',
      'Apartments (Total)': 7,
      'Apartments (Scanned)': 0,
      'Apartments %': '0.00%',
      'Bulk Commercial (Total)': 385,
      'Bulk Commercial (Scanned)': 0,
      'Bulk Commercial %': '0.00%'
    },
    {
      Sno: 6,
      District: 'Sri Sathya Sai',
      UlBs: 'Kadiri',
      'Total Micropockets': 59,
      'Not Scanned Micropockets': 59,
      'Total Gates': 14781,
      'N Gates Scanned': 0,
      'Residential (Total)': 13901,
      'Residential (Scanned)': 0,
      'Residential %': '0.00%',
      'Residential & Commercial (Total)': 457,
      'Residential & Commercial (Scanned)': 0,
      'Residential & Commercial %': '0.00%',
      'Apartments (Total)': 11,
      'Apartments (Scanned)': 0,
      'Apartments %': '0.00%',
      'Bulk Commercial (Total)': 412,
      'Bulk Commercial (Scanned)': 0,
      'Bulk Commercial %': '0.00%'
    },
    {
      Sno: 7,
      District: 'Anantapuram',
      UlBs: 'Kalyanadurgam',
      'Total Micropockets': 32,
      'Not Scanned Micropockets': 32,
      'Total Gates': 10591,
      'N Gates Scanned': 0,
      'Residential (Total)': 9381,
      'Residential (Scanned)': 0,
      'Residential %': '0.00%',
      'Residential & Commercial (Total)': 942,
      'Residential & Commercial (Scanned)': 0,
      'Residential & Commercial %': '0.00%',
      'Apartments (Total)': 3,
      'Apartments (Scanned)': 0,
      'Apartments %': '0.00%',
      'Bulk Commercial (Total)': 265,
      'Bulk Commercial (Scanned)': 0,
      'Bulk Commercial %': '0.00%'
    },
    {
      Sno: 8,
      District: 'Sri Sathya Sai',
      UlBs: 'Madakasira',
      'Total Micropockets': 13,
      'Not Scanned Micropockets': 13,
      'Total Gates': 3099,
      'N Gates Scanned': 0,
      'Residential (Total)': 3068,
      'Residential (Scanned)': 0,
      'Residential %': '0.00%',
      'Residential & Commercial (Total)': 31,
      'Residential & Commercial (Scanned)': 0,
      'Residential & Commercial %': '0.00%',
      'Apartments (Total)': 0,
      'Apartments (Scanned)': 0,
      'Apartments %': '0.00%',
      'Bulk Commercial (Total)': 0,
      'Bulk Commercial (Scanned)': 0,
      'Bulk Commercial %': '0.00%'
    },
    {
      Sno: 9,
      District: 'Srikakulam',
      UlBs: 'Pamidi',
      'Total Micropockets': 28,
      'Not Scanned Micropockets': 28,
      'Total Gates': 5143,
      'N Gates Scanned': 0,
      'Residential (Total)': 5143,
      'Residential (Scanned)': 0,
      'Residential %': '0.00%',
      'Residential & Commercial (Total)': 0,
      'Residential & Commercial (Scanned)': 0,
      'Residential & Commercial %': '0.00%',
      'Apartments (Total)': 0,
      'Apartments (Scanned)': 0,
      'Apartments %': '0.00%',
      'Bulk Commercial (Total)': 0,
      'Bulk Commercial (Scanned)': 0,
      'Bulk Commercial %': '0.00%'
    },
    {
      Sno: 10,
      District: 'Sri Sathya Sai',
      UlBs: 'Puttaparthy',
      'Total Micropockets': 29,
      'Not Scanned Micropockets': 29,
      'Total Gates': 5643,
      'N Gates Scanned': 0,
      'Residential (Total)': 4873,
      'Residential (Scanned)': 0,
      'Residential %': '0.00%',
      'Residential & Commercial (Total)': 373,
      'Residential & Commercial (Scanned)': 0,
      'Residential & Commercial %': '0.00%',
      'Apartments (Total)': 394,
      'Apartments (Scanned)': 0,
      'Apartments %': '0.00%',
      'Bulk Commercial (Total)': 3,
      'Bulk Commercial (Scanned)': 0,
      'Bulk Commercial %': '0.00%'
    }
    // Add more items if needed
  ];
  ngOnInit(): void {
    this.createChart()
  }
  createChart(): void {
    Chart.register(...registerables);
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 5, 2, 20, 30, 45],
      }]
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false
        }
      }
    }
    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: options
    }
    const chartItem: HTMLCanvasElement = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = chartItem.getContext('2d');
    if (ctx) {
      new Chart(ctx, config);
    }
    
    

  }
  buttonName = "Click Me";
  showTable = false;


  onMouseOver(): void {
    // Additional actions on mouseover if needed
  }

  onMouseOut(): void {
    // Additional actions on mouseout if needed
  }

  onButtonHover(): void {
    // Additional actions on button hover if needed
  }

  onButtonOut(): void {
    // Additional actions on button mouseout if needed
  }
  toggleTableVisibility(): void {
    this.showTable = !this.showTable;

  }


}

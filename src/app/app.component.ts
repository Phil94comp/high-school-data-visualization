import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Chart, Legend, plugins, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public studentTrack: any = {
      type: 'pie',
      data: {
        labels: [
          'College',
          'Workforce',
          'Military',
          'Trade programs'
        ],
        datasets: [{
          label: 'Student Career Path',
          data: [25, 50, 10, 27],
          backgroundColor: [
            'rgb(255, 255, 0)',
            'rgb(51, 255, 255)',
            'rgb(0, 255, 0)',
            'rgb(128, 128, 128)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 1
      }
  };
  public collegeAcceptance: any = {
    type: 'bar',
    data: {
      labels: [
        'Knight Academy',
        'Other high schools nationwide'
      ],
      datasets: [
        {
        label: 'College Acceptance by percentage',
        data: [75, 25],
        backgroundColor: [
          'rgb(137, 81, 41)',
          'rgb(0, 71, 171)'
        ],
        borderColor: [
          'rgb(137, 81, 41)',
          'rgb(0, 71, 171)'
        ],
        borderWidth: 2
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    },
  };
  public mathAndReadingProficiency: any = {
    type: 'bar',
    data: {
      labels: [
        'Knight Academy',
        'Other high schools across the nation'
      ],
      datasets: [
        {
        label: 'Math proficiency percentage',
        data: [90, 45],
        backgroundColor: [
          'rgb(0, 71, 171)',
          'rgb(0, 71, 171)'
        ],
        borderColor: [
          'rgb(0, 71, 171)',
          'rgb(0, 71, 171)'
        ],
        borderWidth: 2
        },
        {
          label: 'Reading proficiency percentage',
          data: [92, 50],
          backgroundColor: [
            'rgb(137, 81, 41)',
            'rgb(137, 81, 41)'
          ],
          borderColor: [
            'rgb(137, 81, 41)',
            'rgb(137, 81, 41)'
          ],
          borderWidth: 2
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  public scholarships: any = {
    type: 'bar',
    data: {
      labels: [
        '2020',
        '2021',
        '2022',
        '2023',
        '2024'
      ],
      datasets: [
        {
        label: 'Scholarships earned in dollar amount',
        data: [750000.00, 2245890.99, 3528961.29, 5789214.35, 10750432.89],
        backgroundColor: [
          'rgb(238, 75, 43)',
          'rgb(160, 32, 240)',
          'rgb(255, 192, 203)',
          'rgb(255, 165, 0)',
          'rgb(255, 0, 255)'
        ],
        borderColor: [
          'rgb(238, 75, 43)',
          'rgb(160, 32, 240)',
          'rgb(255, 192, 203)',
          'rgb(255, 165, 0)',
          'rgb(255, 0, 255)'
        ],
        borderWidth: 2
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    },
  };
  public financialAid: any = {
    type: 'bar',
    data: {
      labels: [
        '2020',
        '2021',
        '2022',
        '2023',
        '2024'
      ],
      datasets: [
        {
        label: 'Financial Aid in dollar amount',
        data: [250000.00, 575923.34, 812096.99, 1354926.11, 2987654.21],
        backgroundColor: [
          'rgb(238, 75, 43)',
          'rgb(160, 32, 240)',
          'rgb(255, 192, 203)',
          'rgb(255, 165, 0)',
          'rgb(255, 0, 255)'
        ],
        borderColor: [
          'rgb(238, 75, 43)',
          'rgb(160, 32, 240)',
          'rgb(255, 192, 203)',
          'rgb(255, 165, 0)',
          'rgb(255, 0, 255)'
        ],
        borderWidth: 2
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    },
  };
  pieChart: any;
  collegeAcceptanceChart: any;
  mathAndReadingProficiencyChart: any;
  scholarshipsChart: any;
  financialAidChart: any;
  ngOnInit(): void {
    this.pieChart = new Chart('StudentTrack', this.studentTrack);
    this.collegeAcceptanceChart = new Chart('CollegeAcceptance', this.collegeAcceptance);
    this.mathAndReadingProficiencyChart = new Chart('MathAndReadingProficiency', this.mathAndReadingProficiency);
    this.scholarshipsChart = new Chart('Scholarships', this.scholarships);
    this.financialAidChart = new Chart('FinancialAid', this.financialAid);
  }
  title = 'high-school-data-visualization';
}

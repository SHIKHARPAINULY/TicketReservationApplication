import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ticket';


//  Data Structuring of Train Seats , 2D Array is being Used for data delivering & easy handling
  public TrainseatNumbers = [
        [
          { 'seatNumber' : '01', 'booked': true },
          { 'seatNumber' : '02', 'booked': true},
          { 'seatNumber' : '03', 'booked': true},
          { 'seatNumber' : '04', 'booked': true},
          { 'seatNumber' : '05', 'booked': true},
          { 'seatNumber' : '06', 'booked': false},
          { 'seatNumber' : '07', 'booked': false}
        ],
        [
            { 'seatNumber' : '11', 'booked': false },
            { 'seatNumber' : '12', 'booked': false},
            { 'seatNumber' : '13', 'booked': false},
            { 'seatNumber' : '14', 'booked': false},
            { 'seatNumber' : '15', 'booked': false},
            { 'seatNumber' : '16', 'booked': false},
            { 'seatNumber' : '17', 'booked': false}
        ],   
        [
            { 'seatNumber' : '21', 'booked': false },
            { 'seatNumber' : '22', 'booked': false},
            { 'seatNumber' : '23', 'booked': false},
            { 'seatNumber' : '24', 'booked': false},
            { 'seatNumber' : '25', 'booked': false},
            { 'seatNumber' : '26', 'booked': false},
            { 'seatNumber' : '27', 'booked': false}
        ],
        [
          { 'seatNumber' : '31', 'booked': false },
          { 'seatNumber' : '32', 'booked': false},
          { 'seatNumber' : '33', 'booked': false},
          { 'seatNumber' : '34', 'booked': false},
          { 'seatNumber' : '35', 'booked': false},
          { 'seatNumber' : '36', 'booked': false},
          { 'seatNumber' : '37', 'booked': false}
        ],
        [
            { 'seatNumber' : '41', 'booked': false },
            { 'seatNumber' : '42', 'booked': false},
            { 'seatNumber' : '43', 'booked': false},
            { 'seatNumber' : '44', 'booked': false},
            { 'seatNumber' : '45', 'booked': false},
            { 'seatNumber' : '46', 'booked': false},
            { 'seatNumber' : '47', 'booked': false}
        ],   
          [
              { 'seatNumber' : '51', 'booked': false },
              { 'seatNumber' : '52', 'booked': false},
              { 'seatNumber' : '53', 'booked': false},
              { 'seatNumber' : '54', 'booked': false},
              { 'seatNumber' : '55', 'booked': false},
              { 'seatNumber' : '56', 'booked': false},
              { 'seatNumber' : '57', 'booked': false}
          ],
          [
            { 'seatNumber' : '61', 'booked': false },
            { 'seatNumber' : '62', 'booked': false},
            { 'seatNumber' : '63', 'booked': false},
            { 'seatNumber' : '64', 'booked': false},
            { 'seatNumber' : '65', 'booked': false},
            { 'seatNumber' : '66', 'booked': false},
            { 'seatNumber' : '67', 'booked': false}
        ],
        [
          { 'seatNumber' : '71', 'booked': false },
          { 'seatNumber' : '72', 'booked': false},
          { 'seatNumber' : '73', 'booked': false},
          { 'seatNumber' : '74', 'booked': false},
          { 'seatNumber' : '75', 'booked': false},
          { 'seatNumber' : '76', 'booked': false},
          { 'seatNumber' : '77', 'booked': false}
      ],
    [
      { 'seatNumber' : '81', 'booked': false },
      { 'seatNumber' : '82', 'booked': false},
      { 'seatNumber' : '83', 'booked': false},
      { 'seatNumber' : '84', 'booked': false},
      { 'seatNumber' : '85', 'booked': false},
      { 'seatNumber' : '86', 'booked': false},
      { 'seatNumber' : '87', 'booked': false}
    ],
    [
      { 'seatNumber' : '91', 'booked': false },
      { 'seatNumber' : '92', 'booked': false},
      { 'seatNumber' : '93', 'booked': false},
      { 'seatNumber' : '94', 'booked': false},
      { 'seatNumber' : '95', 'booked': false},
      { 'seatNumber' : '96', 'booked': false},
      { 'seatNumber' : '97', 'booked': false}
    ],
    [
      { 'seatNumber' : 'A1', 'booked': false },
      { 'seatNumber' : 'A2', 'booked': false},
      { 'seatNumber' : 'A3', 'booked': false},
      { 'seatNumber' : 'A4', 'booked': false},
      { 'seatNumber' : 'A5', 'booked': false},
      { 'seatNumber' : 'A6', 'booked': false},
      { 'seatNumber' : 'A7', 'booked': false}
    ],
    [
      { 'seatNumber' : 'A8', 'booked': false },
      { 'seatNumber' : 'A9', 'booked': false},
      { 'seatNumber' : 'A10', 'booked': false}
    ],
  ]

  ngOnInit(){};

  // Fn() for reserving Seats as per User entered seats via clicking the button
  public reserveSeat(val) {
    let count = val;
    // Filtering inside the array & checking Seat Booking true || false;
    this.TrainseatNumbers.filter( element => {
      element.filter( ele => {
        // Looping only till the count reached zero
        (ele.booked != true && count != 0)  ? (ele.booked = true,count = --count) : false;
      });
    })
  }
  
}

"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Trent Peterson
   Date:  2.19.19

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/
/*Set the date dispalyed in the calendar */
var thisDay = new Date("Augest 24, 2018");
//  Write the calendar to the element with the id "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);
// Function to generate the calendar table
function createCalendar(calDate) {
      var calendarHTML = "<table id='calendar_table'>";
      calendarHTML += calCaption(calDate)
      calendarHTML += "</table>";
      return calendarHTML
}

// Craete function to write the calendar caption
function calCaption(calDate) {
      // monthName array contains the list of month names
      var monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      // Determine the current month
      var thisMonth = calDate.getMonth();
      // Determine The current Year
      var thisYear = calDate.getFullYear();
      // Write the caption
      return "<caption>" + monthName[thisMonth] + "" + thisYear + "</caption>"
}
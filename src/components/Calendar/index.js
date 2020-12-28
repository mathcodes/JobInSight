import React from "react";

//change the state... title and URL of the number
function Calendar() {
  return (
    <iframe
      title="Calendar Title"
      src="https://calendar.google.com/calendar/embed?src=jonpchristie%40gmail.com&ctz=America%2FNew_York"
      width= "100%"
      height="600"
      frameborder="0"
      scrolling="yes"
    ></iframe>
  );
}

export default Calendar;

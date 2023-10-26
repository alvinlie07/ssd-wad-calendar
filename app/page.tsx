"use client";
import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import exportedConstant from "./helpers/consts";
import exportedFn from "./helpers/functions";
import { eventOnCalendar } from "./helpers/utils";

export default function Home() {
  

  const [events, setEvents] = useState<eventOnCalendar[]>([]);
  useEffect(() => {
    let allEvents = exportedConstant.events;
    const storedArray = localStorage.getItem("events");
    // console.log(storedArray);
    if (storedArray) {
      const parse = JSON.parse(storedArray);
      allEvents = parse.map((e: any) => ({
        ...e,
        date: new Date(e.date),
      }));
    }
    // console.log(allEvents);

    setEvents(allEvents);
  }, []);
  const threeEventsValidator = (date: Date) => {
      return events.filter(
        (event) =>
          new Date(event.date).toISOString().slice(0, 10) ===
          new Date(date).toISOString().slice(0, 10)
      ).length === 3
    ;
  };
  // localStorage.clear();
  const addEvent = (params: eventOnCalendar) => {
    // console.log(threeEventsValidator(params.date))
    if (threeEventsValidator(new Date(params.date))) {
      // console.log('Masuk if')
      alert("Sudah ada 3 event");
    } else {
      console.log('Masuk Sioni')
      let allEventsNext = [
        ...events,
        {
          id: exportedFn.getRandomColor(),
          date: params.date,
          name: params.name,
          email: params.email,
          time: params.time,
          color: `#${exportedFn.getRandomColor()}`,
        },
      ];

      setEvents(allEventsNext);
      localStorage.setItem("events", JSON.stringify(allEventsNext));
    }
  };
  const deleteEvent = (id: string) => {
    
    const updatedEvents = [...events].filter((ev) => ev.id !== id)
    // const updatedEvents = [...events].find((e) => e.id == id)
    // console.log(updatedEvents)
    setEvents(updatedEvents)
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };
  const editEvent = (params: eventOnCalendar) => {
    let updatedEvents = [...events].map((e) => {
      if(e.id == params.id){
        e.email = params.email;
        e.name = params.name;
        e.time = params.time;
      }
    })
    console.log('updated',updatedEvents);

    // setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  }
  return (
    <>
      <main className="__container p-5">
        <Calendar
        onEditEvent = {editEvent}
          onAddEvent={addEvent}
          onDeleteEvent={deleteEvent}
          listEvents={events}
        />
      </main>
    </>
  );
}

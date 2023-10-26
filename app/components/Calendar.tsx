"use client";
import React, { useState, useEffect } from "react";
import exportedConstant from "../helpers/consts";
import exportedFn from "../helpers/functions";
import AddForm from "../components/AddForm";
import { eventOnCalendar } from "../helpers/utils";
import Dialog from '../components/Dialog'

const Calendar = ({
  listEvents,
  onAddEvent,
  onEditEvent,
  onDeleteEvent,
}: {
  listEvents: eventOnCalendar[];
  onAddEvent?: Function;
  onEditEvent?: Function;
  onDeleteEvent?: Function;
}) => {
  const [selectedDate, setSelectedDate] = useState(Date);
  // const [listEvents, setListEvents] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [showAddForm, setshowAddForm] = useState(false);
  const [isEditVal, setIsEditVal] = useState(false);

  const [isDelete, setIsDelete] = useState(false);
  const [dataEvent, setDataEvent] = useState<eventOnCalendar>();

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let __daysInMonth = exportedFn.daysInMonth(currentMonth, currentYear);

  // console.log(listEvents)
  const selectedDateFn = (a: Date) => {
    setSelectedDate(a.toString());
    
    localStorage.setItem('idEvent', '')
    setIsDelete(false);
    // setIsEditVal(false);
    if (!isDelete) {
      openFormModal();
    }
    return;
  };

  const openModal = () => {
    setShowDialog(true);

  };
  const openFormModal = () => {
    // setShowDialog(false);    
    setshowAddForm(true);
  };

  const inputValidator = (e: any) => {
    return (
      exportedConstant.emailRegex.test(e.email) &&
      exportedConstant.timeRegex.test(e.time) &&
      e.name.trim() != ""
    );
  };

  const closeFn = (e: any) => {
    if (!inputValidator(e)) {
      alert("Silahkan untuk mengisi sesuai dengan placeholder yang tertera");
    } else {
      setshowAddForm(false);
      console.log('local on closeFn',localStorage.getItem('idEvent'));
      if (localStorage.getItem('idEvent') == '') {
        onAddEvent!({
          id: selectedDate.toString(),
          date: selectedDate,
          email: e.email,
          name: e.name,
          time: e.time,
        });
      }else{
        onEditEvent!({
          id: localStorage.getItem('idEvent'),
          date: selectedDate,
          email: e.email,
          name: e.name,
          // color: e.color,
          time: e.time,
        })
      }
    }
  };
  const handleOnClickEvent = (e: any, type: any) => {
    if (type == "hapus") {
      setIsDelete(true)
      setshowAddForm(false)
      setDataEvent(e)
      setShowDialog(true)
    }
    // openModal();
    //setIsDelete(true);
    //setDataEvent(event);
  };

  const handleEditEvent = (a: Date, event: eventOnCalendar) => {
    // state.isEdit = event.id;
    localStorage.setItem("idEvent", event.id);
    setSelectedDate(a.toString());
    setDataEvent(event);
    // setIsEditVal(true);
    setIsDelete(false);
    if (!isDelete) {
      openFormModal();
    }

    console.log('edit handle',localStorage.getItem('idEvent'))

  };
  const onDeleteHandler = () => {
    onDeleteEvent!(dataEvent!.id);
    setShowDialog(false);
  };

  return (
    <>
      <main className="__container p-5">
      <div className="__title">
          {exportedConstant.initialMonth(currentMonth) + " " + currentYear}
        </div>
        <div className="__day">
          {exportedConstant.dayName.map((day) => (
            <div className="m-5" key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className={`__date-container-${__daysInMonth === 28 ? "4" : "5"}`}>
          {exportedFn.getDateInMonth(currentYear, currentMonth).map((date) => (
            <span
              onClick={() => selectedDateFn(date)}
              className="__date-body p-5"
              key={date.getDate()}
            >
              <span className="__date-title">{date.getDate().toString()}</span>
              {listEvents.map((event) => {
                if (
                  new Date(event.date).toISOString() ==
                  new Date(date).toISOString()
                ) {
                  return (
                    <div
                      style={{
                        background: event.color,
                        padding: 5,
                      }}
                      key={`${event.id}}`}
                      className="__event-card __date-title z-50"
                    >
                      <div>{event.name}</div>
                      <div>{event.email}</div>
                      <div>{event.time}</div>
                      <button
                        className="__dialog-btn-delete"
                        onClick={() => handleOnClickEvent(event, "hapus")}
                      >
                        Hapus
                      </button>
                      {/* <button
                        className="__btn-edit"
                        onClick={() => handleEditEvent(date, event)}
                      >
                        Update
                      </button> */}
                    </div>
                  );
                }
              })}
            </span>
          ))}
        </div>

        <Dialog
          selectedDate={selectedDate}
          showModal={showDialog}
          closeModal={() => setShowDialog(false)}
          handleDelete={onDeleteHandler}
        />

        {showAddForm && (
          <AddForm
            selectedDate={selectedDate}
            closeModal={() => setshowAddForm(false)}
            handleClose={closeFn}
          />
        )}

      </main>
    </>
  );
};

export default Calendar;

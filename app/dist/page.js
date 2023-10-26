"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var Calendar_1 = require("./components/Calendar");
var consts_1 = require("./helpers/consts");
var functions_1 = require("./helpers/functions");
function Home() {
    var _a = react_1.useState([]), events = _a[0], setEvents = _a[1];
    react_1.useEffect(function () {
        var allEvents = consts_1["default"].events;
        var storedArray = localStorage.getItem("events");
        console.log(storedArray);
        if (storedArray) {
            var parse = JSON.parse(storedArray);
            allEvents = parse.map(function (e) { return (__assign(__assign({}, e), { date: new Date(e.date) })); });
        }
        // console.log(allEvents);
        setEvents(allEvents);
    }, []);
    var threeEventsValidator = function (date) {
        return events.filter(function (event) {
            return new Date(event.date).toISOString().slice(0, 10) ===
                new Date(date).toISOString().slice(0, 10);
        }).length === 3;
    };
    // localStorage.clear();
    var addEvent = function (params) {
        // console.log(threeEventsValidator(params.date))
        if (threeEventsValidator(new Date(params.date))) {
            console.log('Masuk if');
            alert("Sudah ada 3 event");
        }
        else {
            console.log('Masuk Sioni');
            var allEventsNext = __spreadArrays(events, [
                {
                    id: functions_1["default"].getRandomColor(),
                    date: params.date,
                    name: params.name,
                    email: params.email,
                    time: params.time,
                    color: "#" + functions_1["default"].getRandomColor()
                },
            ]);
            setEvents(allEventsNext);
            localStorage.setItem("events", JSON.stringify(allEventsNext));
        }
    };
    var deleteEvent = function (id) {
        var updatedEvents = __spreadArrays(events).filter(function (ev) { return ev.id !== id; });
        // const updatedEvents = [...events].find((e) => e.id == id)
        // console.log(updatedEvents)
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    };
    var editEvent = function (params) {
        var updatedEvents = __spreadArrays(events).map(function (e) {
            if (e.id == params.id) {
                e.email = params.email;
                e.name = params.name;
                e.time = params.time;
            }
        });
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("main", { className: "__container p-5" },
            react_1["default"].createElement(Calendar_1["default"], { onEditEvent: editEvent, onAddEvent: addEvent, onDeleteEvent: deleteEvent, listEvents: events }))));
}
exports["default"] = Home;

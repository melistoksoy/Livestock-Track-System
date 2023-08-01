import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Vacc() {
  

  const [events, setEvents] = useState([ {
    title: "456893 : Şap Aşısı",
    start: "2023-07-17", 
    allDay: true,
  },

 { title: "159357 : Veba Aşısı",
  start: "2023-07-07", 
  allDay: true, 
}]);
  const [selectedDate, setSelectedDate] = useState("");
  const [note, setNote] = useState("");
  const [showNoteDialog, setShowNoteDialog] = useState(false);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
    setShowNoteDialog(true);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveNote = () => {
    if (selectedDate && note.trim() !== "") {
      const newEvent = {
        title: note,
        date: selectedDate,
      };

      setEvents([...events, newEvent]);
      setShowNoteDialog(false);
      setNote("");
    }
  };

  return (
  
<div>

    
<div className="calendar" style={{ display: "flex", marginTop:"20px" }}>
      <div style={{ width: "60%" }}>
        <FullCalendar className="calendar-text"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            end: "prev,next",
            center: "title",
            start:"",
    
          }}
          height={"70vh"}
          events={events}
          dateClick={handleDateClick}
          locale="tr"
        />
      </div>

      {showNoteDialog && (
        <div className="m-3 note-dialog">
          <h4>Aşı Bilgisi Ekle</h4>

          <textarea
            rows="4"
            cols="50"
            value={note}
            onChange={handleNoteChange}
          ></textarea>
          <br />
          <button onClick={handleSaveNote}>Kaydet</button>
        </div>
      )}
    </div>
</div>
 
    
  );
}

export default Vacc;

import React from "react";
import "./dock.scss";
const Dock = ({ windowState, setwindowState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() =>
          setwindowState({ ...windowState, github: !windowState.github })
        }
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>
      <div
        onClick={() =>
          setwindowState({ ...windowState, note: !windowState.note })
        }
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>
      <div
        onClick={() =>
          setwindowState({ ...windowState, resume: !windowState.resume })
        }
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="icon calender"
      >
        <img src="/doc-icons/calender.svg" alt="" />
      </div>
      <div
        onClick={() =>
          setwindowState({ ...windowState, cli: !windowState.cli })
        }
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://mail.google.com/mail/u/0/#inbox?compose=new",
            "_blank",
          );
        }}
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("https://www.linkedin.com/in/ashish8822/", "_blank");
        }}
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="" />
      </div>
      <div
        onClick={() =>
          setwindowState({ ...windowState, spotify: !windowState.spotify })
        }
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;

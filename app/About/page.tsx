import React from "react";

function About() {
  return (
    <div className="p-4 font-fira-code flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="underline underline-offset-4">1987</div>
        <div className="flex-auto">I was born</div>
      </div>

      <div className="flex gap-4">
        <div className="underline underline-offset-4">2017</div>
        <div className="flex-auto">
          While climbing, I broke a bone in my foot due to a fall from a
          mountain cliff. And I did in rehab for a year.
        </div>
      </div>

      <div className="flex gap-4">
        <div className="underline underline-offset-4">2023</div>
        <div className="flex-auto">No Job.</div>
      </div>
    </div>
  );
}

export default About;

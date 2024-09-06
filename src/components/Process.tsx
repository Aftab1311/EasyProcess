import Image from "next/image";
import React from "react";

const Process = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          gap: "2.5rem",
          padding: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "3rem",
            fontWeight: "bold",
            color:"#d2042d"
          }}
        >
          Process
        </div>
        <div>
          <Image
            src="/main.gif"
            alt="Process"
            width={2000}
            height={2000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Process;

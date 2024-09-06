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
          }}
        >
          Process
        </div>
        <div>
          <Image
            src="/Process Model.png"
            alt="Process"
            width={100}
            height={100}
            style={{ width: "30rem", height: "30rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default Process;

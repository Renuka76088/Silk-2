import { useState, useEffect } from "react";

const locations = [
  { id: 1, name: "PAREKH Fabrics", city: "Ahmedabad", short: "Fabrics", x: 340, y: 495 },
  { id: 2, name: "PAREKH Silk", city: "Surat", short: "Silk", x: 350, y: 560 },
  { id: 3, name: "PAREKH Rayon", city: "Raipur", short: "Rayon", x: 510, y: 530 },
  { id: 4, name: "PAREKH Linen", city: "Kolkata", short: "Linen", x: 625, y: 525 },
  { id: 5, name: "Parekh e-Trade Market (Textile)", city: "Hyderabad", short: "e-Trade", x: 470, y: 615 },
  { id: 6, name: "PAREKH Chamber of Textile", city: "Bangalore", short: "Chamber", x: 415, y: 685 },
  { id: 7, name: "PAREKH Southern Polyfabrics", city: "Chennai", short: "Southern", x: 480, y: 715 },
];

const PIN_COLOR = "#8b1a1a";

function Pin({ loc, index, active, onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 120 + 100);
    return () => clearTimeout(t);
  }, [index]);

  let labelX = loc.x;
  let labelY = loc.y - 35;
  let textAnchor = "middle";

  if (loc.id === 6) {
    labelX = loc.x - 40;
    labelY = loc.y - 5;
    textAnchor = "end";
  } else if (loc.id === 7) {
    labelX = loc.x + 40;
    labelY = loc.y - 5;
    textAnchor = "start";
  }

  return (
    <g
      onClick={() => onClick(loc.id)}
      style={{ opacity: visible ? 1 : 0, cursor: "pointer" }}
    >
      {/* 🔴 Blink dot */}
   <circle cx={loc.x} cy={loc.y} r="6" fill="#d32f2f">

        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>

      {/* Glow */}
      <circle cx={loc.x} cy={loc.y} r="10" fill="none" stroke="#d32f2f">
        <animate attributeName="r" values="10;22" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* ✅ TEXT (NAME + CITY) */}
      <text
        x={labelX}
        y={labelY}
        textAnchor={textAnchor}
        fontSize="14"
        fontWeight="700"
        fill="#1a237e"
      >
        <tspan x={labelX}>{loc.name}</tspan>
        <tspan x={labelX} dy="16" fontSize="12" fill="#444">
          {loc.city}
        </tspan>
      </text>
    </g>
  );
}

export default function Associates() {
  const [active, setActive] = useState(null);

  return (
<>

{/* ✅ Container mein padding-top add kiya hai taaki header ke niche se shuru ho */}
{/* 🟢 Parent Container with Black Background */}
<div style={{ 
  backgroundColor: "#000000", // Poora piche ka background black
  minHeight: "120vh", // Taaki scroll space mile
  width: "100%",
  margin: "0",
  padding: "0"
}}>
  <div style={{ 
    maxWidth: "900px", 
    margin: "0 auto", 
    paddingTop: "120px", // Header height ke hisaab se space
    position: "relative",
    zIndex: "10" 
  }}>

    <svg
      viewBox="0 0 1000 1000"
      style={{
        width: "100%",
        display: "block",
        margin: "0 auto",
        overflow: "visible",
        filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.5))" // Black bg par depth ke liye
      }}
    >
      {/* 🔲 OUTER BORDER BOX (Ab isme White Background hai) */}
      <rect
        x="20"
        y="20"
        width="960"
        height="960"
        fill="#FFFFFF" // ⬅️ Box ke andar ka background white
        stroke="#C5A27D" 
        strokeWidth="2"
        rx="10" // Halka sa rounded corners premium dikhte hain
      />

      {/* 🏷️ HEADING */}
      <text
        x="500"
        y="80"
        textAnchor="middle"
        fontSize="32"
        fontWeight="900"
        fill="#4A4238"
        fontFamily="Arial Black, sans-serif"
      >
        HC PAREKH & ASSOCIATES
      </text>

      <text
        x="500"
        y="115"
        textAnchor="middle"
        fontSize="16"
        fill="#C5A27D"
        fontWeight="bold"
        letterSpacing="3"
      >
        WWW.HCPAREKH.COM
      </text>

      {/* 🗺️ IMAGE (India Map Outline) */}
      <image
        href="https://img.freepik.com/premium-vector/vector-map-black-outline-india-vector-illustration_686498-514.jpg?w=1060"
        x="50"
        y="140"
        width="900"
        height="750"
        preserveAspectRatio="xMidYMid meet"
        opacity="0.15" // Map ko thoda aur subtle kiya taaki pins highlight hon
      />

      {/* Pins Mapping */}
      {locations.map((loc, i) => (
        <Pin
          key={loc.id}
          loc={loc}
          index={i}
          active={active === loc.id}
          onClick={setActive}
        />
      ))}
    </svg>
  </div>
</div>
</>
  );
}

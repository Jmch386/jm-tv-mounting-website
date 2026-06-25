"use client";

import { Calculator } from "lucide-react";
import { useMemo, useState } from "react";

const tvPrices: Record<string, number> = {
  "Up to 55\"": 125,
  "65\"-75\"": 175,
  "85\"+": 225
};

const wallAdjustments: Record<string, number> = {
  Drywall: 0,
  Concrete: 40,
  Brick: 60,
  Fireplace: 85
};

export function QuoteCalculator() {
  const [tvSize, setTvSize] = useState("65\"-75\"");
  const [wallType, setWallType] = useState("Drywall");
  const [wire, setWire] = useState("None");
  const [soundbar, setSoundbar] = useState(false);
  const [shelf, setShelf] = useState(false);
  const [distance, setDistance] = useState("Local");

  const total = useMemo(() => {
    let estimate = tvPrices[tvSize] + wallAdjustments[wallType];
    if (wire === "External") estimate += 75;
    if (wire === "In-wall") estimate += 150;
    if (soundbar) estimate += 65;
    if (shelf) estimate += 50;
    if (distance === "Extended") estimate += 35;
    return estimate;
  }, [distance, shelf, soundbar, tvSize, wallType, wire]);

  return (
    <div className="grid gap-6 rounded-lg border border-neon/25 bg-white/[.045] p-5 shadow-glow lg:grid-cols-[1fr_340px]">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">TV Size<select className="field" value={tvSize} onChange={(event) => setTvSize(event.target.value)}>{Object.keys(tvPrices).map((size) => <option key={size}>{size}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-bold">Wall Type<select className="field" value={wallType} onChange={(event) => setWallType(event.target.value)}>{Object.keys(wallAdjustments).map((type) => <option key={type}>{type}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-bold">Wire Concealment<select className="field" value={wire} onChange={(event) => setWire(event.target.value)}>{["None", "External", "In-wall"].map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-bold">Travel Distance<select className="field" value={distance} onChange={(event) => setDistance(event.target.value)}>{["Local", "Extended"].map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-4 text-sm font-bold"><input type="checkbox" checked={soundbar} onChange={(event) => setSoundbar(event.target.checked)} /> Soundbar</label>
        <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-4 text-sm font-bold"><input type="checkbox" checked={shelf} onChange={(event) => setShelf(event.target.checked)} /> Shelf</label>
      </div>
      <div className="flex flex-col justify-between rounded-lg bg-black p-6">
        <div>
          <Calculator className="mb-5 text-neon" size={34} />
          <p className="text-sm font-bold uppercase text-white/55">Instant Estimate</p>
          <p className="mt-2 font-heading text-7xl text-neon">${total}</p>
          <p className="text-sm leading-6 text-white/60">Final pricing may vary after wall, mount, distance, and wiring details are confirmed.</p>
        </div>
        <a href="#quote" className="btn-primary mt-6 w-full">Get a Free Quote</a>
      </div>
    </div>
  );
}

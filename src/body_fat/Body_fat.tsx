import { useState } from "react";

import { IN2CM } from "../utils/conversion";
import Input from "../components/Input";
import Select from "../components/Select";
import Results from "../components/Results";

function Body_fat() {
  const [sex, setSex] = useState("male");
  const [unit, setUnit] = useState("metric");

  const [height, setHeight] = useState<number | null>(null);
  const [neck, setNeck] = useState<number | null>(null);
  const [waist, setWaist] = useState<number | null>(null);
  const [hips, setHips] = useState<number | null>(null);

  const heightInCM =
    height === null ? null : unit === "imperial" ? height * IN2CM : height;
  const neckInCM =
    neck === null ? null : unit === "imperial" ? neck * IN2CM : neck;
  const waistInCM =
    waist === null ? null : unit === "imperial" ? waist * IN2CM : waist;
  const hipsInCM =
    hips === null ? null : unit === "imperial" ? hips * IN2CM : hips;

  const body_fat =
    heightInCM !== null &&
    neckInCM !== null &&
    waistInCM !== null &&
    (sex === "male" || hipsInCM !== null)
      ? sex === "male"
        ? 495 /
            (1.0324 -
              0.19077 * Math.log10(waistInCM - neckInCM) +
              0.15456 * Math.log10(heightInCM)) -
          450
        : 495 /
            (1.29579 -
              0.35004 * Math.log10(waistInCM + hipsInCM! - neckInCM) +
              0.221 * Math.log10(heightInCM)) -
          450
      : null;

  return (
    <>
      <h1 className="text-lg font-bold md:mt-2 md:text-xl">U.S. Navy method</h1>
      <Select
        id="sex"
        labelText="Select your sex"
        value={sex}
        setValue={setSex}
        options={["male", "female"]}
      />
      <Select
        id="unit"
        labelText="Choose a unit system"
        value={unit}
        setValue={setUnit}
        options={["metric", "imperial"]}
      />
      <Input
        id="height"
        placeholder="170"
        value={height}
        setValue={setHeight}
        labelMT="mt-8"
        labelText={`Your weight in ${unit === "metric" ? "cm" : "in"}`}
      />
      <Input
        id="neck"
        placeholder="36"
        value={neck}
        setValue={setNeck}
        labelMT="mt-4"
        labelText={`Your neck circumference in ${unit === "metric" ? "cm" : "in"} (at narrowest)`}
      />
      <Input
        id="waist"
        placeholder="90"
        value={waist}
        setValue={setWaist}
        labelMT="mt-4"
        labelText={`Your waist circumference in ${unit === "metric" ? "cm" : "in"} ${sex === "male" ? "(at navel)" : "(at narrowest)"}`}
      />
      {sex === "female" && (
        <Input
          id="hips"
          placeholder="90"
          value={hips}
          setValue={setHips}
          labelMT="mt-4"
          labelText={`Your hips circumference in ${unit === "metric" ? "cm" : "in"} (at widest)`}
        />
      )}
      {body_fat !== null && (
        <Results>Your body fat percentage is {body_fat.toFixed(2)}%.</Results>
      )}
    </>
  );
}

export default Body_fat;

import { useState } from "react";

import Select from "../components/Select";
import Input from "../components/Input";

function Fat_loss() {
  const [unit, setUnit] = useState("metric");

  const [weight, setWeight] = useState<number | null>(null);
  const [body_fat_curr, set_body_fat_curr] = useState<number | null>(null);
  const [body_fat_goal, set_body_fat_goal] = useState<number | null>(null);
  const [caloric_deficit, set_caloric_deficit] = useState<number | null>(null);

  return (
    <>
      <h1 className="text-lg font-bold">How long to reach your goal?</h1>
      <Select
        id="unit"
        value={unit}
        setValue={setUnit}
        labelText="Choose a unit system"
        options={["metric", "imperial"]}
      />
      <Input
        id="weight"
        placeholder="80"
        value={weight}
        setValue={setWeight}
        labelMT="mt-8"
        labelText={`Your weight in kg`}
      />
      <Input
        id="body_fat_curr"
        placeholder="25"
        value={body_fat_curr}
        setValue={set_body_fat_curr}
        labelMT="mt-4"
        labelText="Your current body fat percentage"
      />
      <Input
        id="body_fat_goal"
        placeholder="15"
        value={body_fat_goal}
        setValue={set_body_fat_goal}
        labelMT="mt-4"
        labelText="Your goal body fat percentage"
      />
      <Input
        id="caloric_deficit"
        placeholder="500"
        value={caloric_deficit}
        setValue={set_caloric_deficit}
        labelMT="mt-4"
        labelText="Your caloric deficit"
      />
    </>
  );
}

export default Fat_loss;

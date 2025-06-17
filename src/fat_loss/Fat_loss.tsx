import { useState } from "react";

import { LBS2KG } from "../utils/conversion";
import Select from "../components/Select";
import Input from "../components/Input";
import Results from "../components/Results";

function Fat_loss() {
  const [unit, setUnit] = useState("metric");

  const [weight, setWeight] = useState<number | null>(null);
  const [body_fat_curr, set_body_fat_curr] = useState<number | null>(null);
  const [body_fat_goal, set_body_fat_goal] = useState<number | null>(null);
  const [caloric_deficit, set_caloric_deficit] = useState<number | null>(null);

  const weightInKG = weight
    ? unit === "metric"
      ? weight
      : weight * LBS2KG
    : null;

  const fatToLose =
    weightInKG && body_fat_curr && body_fat_goal
      ? weightInKG * ((body_fat_curr - body_fat_goal) / 100)
      : null;

  const caloriesToLose = fatToLose ? 7700 * fatToLose : null;

  const daysToGoal =
    caloriesToLose && caloric_deficit
      ? Math.round(caloriesToLose / caloric_deficit)
      : null;

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
      {daysToGoal && (
        <Results>
          Assuming you only burn fat and keep the deficit consistent, you will
          reach your goal in roughly {daysToGoal} days.
        </Results>
      )}
    </>
  );
}

export default Fat_loss;

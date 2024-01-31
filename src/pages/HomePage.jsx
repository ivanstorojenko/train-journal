import {Button} from "@nextui-org/react";
import WorkoutCard from "../components/WorkoutCard";

function HomePage() {
  return (
    <>
      <div className="hero flex items-center m-auto">
          <h1 className="text-3xl font-bold text-center">Дневник тренировок</h1>
      </div>
      <div
      className="flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold">Журнал тренировок</h2>
        <div
        className="flex flex-col gap-4"
        >
          <WorkoutCard></WorkoutCard>
          <WorkoutCard></WorkoutCard>
        </div>
        <div className="fixed bottom-8 w-full flex items-center">
          <Button color="primary" variant="shadow" className="sticky bottom-8 m-auto">
            Добавить тренировку
          </Button>
        </div>
      </div>
    </>
  )
}

export default HomePage
import React from 'react'
import { Button } from "@nextui-org/react";
import WorkoutCardList from "../components/WorkoutCardList";
import { nanoid } from "nanoid";

function HomePage() {
  const date = new Date
  const workoutExample = {
    id: nanoid(),
    date: "31.01.2024",
    exercises: [
      {
        id: nanoid(),
        name: "гиперэкстензия с акцентом на спину",
        approaches: [
          {
            id: nanoid(),
            weight: 10,
            qty: 15,
          },
          {
            id: nanoid(),
            weight: 10,
            qty: 14,
          },
          {
            id: nanoid(),
            weight: 10,
            qty: 13,
          },
        ]
      },
      {
        id: nanoid(),
        name: "подтягивания широким хватом",
        approaches: [
          {
            id: nanoid(),
            weight: "",
            qty: 14,
          },
          {
            id: nanoid(),
            weight: "",
            qty: 12,
          },
          {
            id: nanoid(),
            weight: "",
            qty: 10,
          },
          {
            id: nanoid(),
            weight: "",
            qty: 9,
          },
        ]
      },
      {
        id: nanoid(),
        name: "тяга верхнего блока с узкой ручкой",
        approaches: [
          {
            id: nanoid(),
            weight: "50",
            qty: 15,
          },
          {
            id: nanoid(),
            weight: "60",
            qty: 12,
          },
          {
            id: nanoid(),
            weight: "70",
            qty: 12,
          },
          {
            id: nanoid(),
            weight: "80",
            qty: 10,
          },
        ]
      },
    ]
  }

  const [journal, setJournal] = React.useState(
    () => JSON.parse(localStorage.getItem("journal")) || [workoutExample]
  )

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
          <WorkoutCardList journal={journal}>
          </WorkoutCardList>
        </div>
      </div>
      <div className="fixed bottom-8 w-full max-w-xl flex items-center">
          <Button color="primary" variant="shadow" className="m-auto">
            Добавить тренировку
          </Button>
      </div>
    </>
  )
}

export default HomePage
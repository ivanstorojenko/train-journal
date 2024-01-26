import {Button} from "@nextui-org/react";
import TrainCard from "./components/TrainCard";
import './App.css'

function App() {

  return (
    <>
      <div 
      className="max-w-xl m-auto flex flex-col py-4 px-4 gap-unit-10"
      >
        <h1>Дневник тренировок</h1>
        <h2>Журнал тренировок</h2>
        <TrainCard></TrainCard>
        <TrainCard></TrainCard>
        <Button color="primary" variant="shadow">
          Добавить тренировку
        </Button>
      </div>
    </>
  )
}

export default App

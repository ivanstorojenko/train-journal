import {Button} from "@nextui-org/react";

function EditWorkout() {
  return (
    <>
            <div
            className="flex flex-col gap-0">
                <span className="text-xs font-bold text-default-500">
                    Просмотр тренировки
                </span>
                <h2 className="text-2xl font-bold">
                    30.01.2024
                </h2>
            </div>
            <div className="fixed bottom-8 w-full max-w-xl flex items-center">
                <Button color="primary" variant="shadow" className="m-auto">
                    Редактировать тренировку
                </Button>
            </div>
    </>
  )
}

export default EditWorkout
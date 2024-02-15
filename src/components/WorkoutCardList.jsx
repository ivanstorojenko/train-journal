import React from "react"
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";
import { Link } from "react-router-dom";

function WorkoutCardList(props) {
    const journal = props.journal

    function listExercises(exercises) {
        let list = ""
        for(let i = 0; i < exercises.length; i++) {
            let name = exercises[i].name
            if(i == 0) {
                list += name.charAt(0).toUpperCase() + name.slice(1) + ", "
            } else if (i == exercises.length - 1) {
                list += `${exercises[i].name}`
            } else {
                list += `${exercises[i].name}, `
            }
        }
        return list
    }
    
    return (
        journal.map((workout, index) => (
            <Link key={workout.id} to={`/show-workout/`}>
                <Card  
                isPressable 
                onPress={() => console.log("item pressed")}
                >
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-base font-bold">
                                {workout.date}
                            </p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p
                        className="text-sm">
                            {listExercises(workout.exercises)}
                        </p>
                    </CardBody>
                </Card>
            </Link>
        ))
    )
}
  
export default WorkoutCardList
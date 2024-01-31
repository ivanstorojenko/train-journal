import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

function WorkoutCard() {

    return (
        <Card 
        key="" 
        isPressable 
        onPress={() => console.log("item pressed")}
        >
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-base font-bold">01.01.2024</p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p
                className="text-sm">
                    Гиперэкстензия на спину, жим лежа, бабочка, разводка рук с гантелями лежа, отжимания от пола, сгибание рук на скамье скота, концентрированные сгибания рук с гантелей
                </p>
            </CardBody>
        </Card>
    )
}
  
export default WorkoutCard
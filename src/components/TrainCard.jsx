import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

function TrainCard() {

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">01.01.2024</p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>Гиперэкстензия на спину, жим лежа, бабочка, разводка рук с гантелями лежа, отжимания от пола, сгибание рук на скамье скота, концентрированные сгибания рук с гантелей</p>
            </CardBody>
        </Card>
    )
}
  
export default TrainCard
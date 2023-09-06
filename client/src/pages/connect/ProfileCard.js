import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    ButtonGroup, 
    Button
  } from "@material-tailwind/react";
   
  export default function ProfileCard() {
    return (
        <div className="flex flex-wrap justify-around">
      <Card className="w-96 my-10">
        <CardHeader floated={false} className="h-80">
          <img src="https://www.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
        <div className="flex w-full flex-col gap-4">
                    <ButtonGroup className="fullwidth flex-wrap justify-center w-full" size="sm">
                      <Button className='w-40'>View</Button>
                      <Button className='w-40'>Follow</Button>
                    </ButtonGroup>
                  </div>
        </CardFooter>   
      </Card>
      <Card className="w-96 my-10">
        <CardHeader floated={false} className="h-80">
          <img src="https://www.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
        <div className="flex w-full flex-col gap-4">
                    <ButtonGroup className="fullwidth flex-wrap justify-center w-full" size="sm">
                      <Button className='w-40'>View</Button>
                      <Button className='w-40'>Follow</Button>
                    </ButtonGroup>
                  </div>
        </CardFooter>   
      </Card>
      <Card className="w-96 my-10">
        <CardHeader floated={false} className="h-80">
          <img src="https://www.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
        <div className="flex w-full flex-col gap-4">
                    <ButtonGroup className="fullwidth flex-wrap justify-center w-full" size="sm">
                      <Button className='w-40'>View</Button>
                      <Button className='w-40'>Follow</Button>
                    </ButtonGroup>
                  </div>
        </CardFooter>   
      </Card>
      </div>
    );
  }
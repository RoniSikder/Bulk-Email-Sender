import { Input } from "@/components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router";
import * from 'xlsx'

const Upload = () => {
  let location = useLocation();
  const data = location.state;
  console.log(data);
  const createdemoxlsx = (subcol,bodycol) =>{

  }
  return (
    <div className="template border-2 border-black rounded w-4/8 h-[40vh]">
      <Card className="rounded-[1px] h-full">
        <CardHeader>
          <CardTitle className="text-center">Upload Datasheet</CardTitle>
          <CardDescription className="text-center">
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center h-[20vh]">
            <div className="flex flex-col w-[60%]">
              <label htmlFor="upload_excel">Upload Excel</label>
              <Input
                placeholder="Upload File"
                type="file"
                accept=".csv,.xlsx,.xls"
                className=""
                id="upload_excel"
              />
            </div>
            <Button className="bg-amber-400 text-black w-[20%]">
              Download Template Excel
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-between w-full">
            <Button className="bg-red-800 text-white rounded-[3px]">
              Previous
            </Button>
            <Button className="bg-green-800 text-white rounded-[3px]">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Upload;

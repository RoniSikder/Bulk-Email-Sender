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
import * as XLSX from "xlsx";

const Upload = () => {
  let location = useLocation();
  const data = location.state;
  console.log(data);
  const createdemoxlsx = (subcol, bodycol) => {
    const wb = XLSX.utils.book_new();
    let sub = [];
    let body = [];
    for (let i = 0; i < subcol; i++) {
      sub.push(`svar${i + 1}`);
    }
    for (let i = 0; i < bodycol; i++) {
      body.push(`body${i + 1}`);
    }
    const ws = XLSX.utils.aoa_to_sheet([sub, body]);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "demo.xlsx");
  };
  return (
    <div className="template border-2 border-black rounded w-4/8">
      <Card className="rounded-[1px] h-full">
        <CardHeader>
          <CardTitle className="text-center">Upload Datasheet</CardTitle>
          <CardDescription className="text-center">
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center h-[20vh]">
            <div className="flex flex-col w-[60%] h-[13vh] flex-col-reverse">
              <Input
                placeholder="Upload File"
                type="file"
                accept=".csv,.xlsx,.xls"
                className=""
                id="upload_excel"
              />
              <label htmlFor="upload_excel">Upload Excel</label>
            </div>
            <div className="flex flex-col-reverse h-[13vh]">
              <Button
                onClick={() => createdemoxlsx(data.subCount, data.bodyCount)}
                className="bg-amber-400 text-black"
              >
                Download Template Excel
              </Button>
            </div>
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

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

const Upload = () => {
  return (
    <div className="template border-2 border-black rounded">
      <Card className="rounded-[1px]">
        <CardHeader>
          <CardTitle className="text-center">Upload Datasheet</CardTitle>
          <CardDescription className="text-center">
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Upload File"
            type="file"
            accept=".csv,.xlsx,.xls"
          />
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

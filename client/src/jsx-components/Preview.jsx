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

const Preview = () => {
  return (
    <div className="preview w-6/8">
      <Card className="mb-5">
        <CardHeader>
          <CardTitle className="text-center">Preview Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex justify-between">
              <div>SMTP Client :</div>
              <div className="text-right">{}</div>
            </div>
            <div className="flex justify-between">
              <div>Sender Mail Address :</div>
              <div className="text-right">{}</div>
            </div>
            <div className="flex justify-between">
              <div>Number of Recipients :</div>
              <div className="text-right">{}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mb-7">
        <CardHeader>
          <CardTitle className="text-center">Demographics Email</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex justify-between">
              <div>Subject</div>
              <div className="text-right">{}</div>
            </div>
            <div className="flex justify-between">
              <div>Mail Body</div>
              <div>{}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Button className="bg-red-800 text-white">Previous</Button>
        <Button className="bg-green-800 text-white">Send</Button>
      </div>
    </div>
  );
};

export default Preview;

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
import { Textarea } from "@/components/ui/textarea";

const Template = () => {
  return (
    <div className="template border-2 border-black rounded">
      <Card className="rounded-[1px]">
        <CardHeader>
          <CardTitle className="text-center">Template Creation</CardTitle>
          <CardDescription className="text-center">
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="gap-y-10">
            <div className="mb-2">
              <label htmlFor="senderEmail">Sender Email Address</label>
              <Input id="senderEmail" placeholder="Email" />
            </div>
            <div className="mb-2">
              <label htmlFor="appPassword">App Password</label>
              <Input id="appPassword" placeholder="App Password" />
            </div>
            <div className="mb-2">
              <label htmlFor="mailSubject">Mail Subject</label>
              <Input id="mailSubject" placeholder="Mail Subject" />
            </div>
            <div>
              <label htmlFor="mailbody-template">Mail Body Template</label>
              <Textarea
                id="mailbody-template"
                placeholder="Enter your mail body template here..."
                className="mb-1"
              />
              <p className="text-xs text-red-500">
                Add __#var#__ for adding variables in both Mail Subject and Body
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="bg-green-800 text-white rounded w-full"
            variant="outline"
          >
            Create Template
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Template;

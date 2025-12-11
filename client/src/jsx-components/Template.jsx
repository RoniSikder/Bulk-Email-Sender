import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "sonner";
import { useNavigate } from "react-router";

const Template = () => {
  const navigate = useNavigate();

  const email = useRef(null);
  const appPass = useRef(null);
  const mailSubject = useRef(null);
  const mailBody = useRef(null);

  // const mutate = useMutation({
  //   mutationFn: async (payload) => {
  //     const url = "http://localhost:2000/service/user/admin/srequest";
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });
  //     const responseData = await response.json().catch((Error) => Error);
  //     return responseData;
  //   },
  //   onSuccess: (data) => {
  //     toast(
  //       "Template is Initiated and Test Mail Send is Done" + " " + data.sender,
  //     );
  //   },
  //   onError: () => {
  //     toast("Sorry for Intereption but Client can not connect with the Server");
  //   },
  // });

  const counter = (sub, body) => {
    const subjectCount = sub.match(/__#var#__/gi).length;
    const bodyCount = body.match(/__#var#__/gi).length;
    return { subjectCount: subjectCount, bodyCount: bodyCount };
  };

  const sender = async () => {
    const user = email.current?.value ?? "";
    const pass = appPass.current?.value ?? "";
    const sub = mailSubject.current?.value ?? "";
    const body = mailBody.current?.value ?? "";
    if (!user || !pass || !sub || !body) {
      throw new Error("All Fields are Require to SetUp the Template");
    }
    const counterr = counter(sub, body);
    let payload = {
      sender: user,
      appPassword: pass,
      subject: sub,
      mailBody: body,
      subCount: counterr.subjectCount,
      bodyCount: counterr.bodyCount,
    };
    navigate("/upload", { state: payload });
  };

  return (
    <div className="template border-2 border-black rounded w-4/8">
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
              <Input id="senderEmail" ref={email} placeholder="Email" />
            </div>
            <div className="mb-2">
              <label htmlFor="appPassword">App Password</label>
              <Input
                id="appPassword"
                ref={appPass}
                placeholder="App Password"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="mailSubject">Mail Subject</label>
              <Input
                id="mailSubject"
                ref={mailSubject}
                placeholder="Mail Subject"
              />
            </div>
            <div>
              <label htmlFor="mailbody-template">Mail Body Template</label>
              <Textarea
                id="mailbody-template"
                ref={mailBody}
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
            onClick={() => sender()}
          >
            Create Template
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Template;

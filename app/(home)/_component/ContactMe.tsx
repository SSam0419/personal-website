import { Button, Input, Spacer, Textarea } from "@nextui-org/react";
import React from "react";
import Header from "./Header";
import { createClient } from "@/lib/supabase/client/client";

const ContactMe = () => {
  const supabase = createClient();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [formData, setFormData] = React.useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [hint, setHint] = React.useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsDisabled(true);
    setIsLoading(true);
    const { data, error } = await supabase.from("message").insert({
      message: formData.message,
      contact: formData.email,
      sender_name: formData.name,
    });
    if (!error) {
      setHint("Message Sent Successfully");
    } else {
      setHint("Something went wrong, try again later");
      setIsDisabled(false);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Header headerText="Contact Me" />
      <div className="my-5 bg-white p-5 rounded">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="flex justify-between w-full gap-5">
            <Input
              isRequired
              isDisabled={isDisabled}
              label="Name"
              placeholder="Mr. Lee"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <Input
              isRequired
              isDisabled={isDisabled}
              label="Email"
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <Spacer y={5} />
          <Textarea
            isRequired
            isDisabled={isDisabled}
            label="Message"
            placeholder="Hi... "
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
          />
          <Spacer y={5} />
          <Button
            className="w-full"
            color="default"
            variant="faded"
            type="submit"
            isLoading={isLoading}
            isDisabled={isDisabled}
          >
            Send Message
          </Button>
        </form>
        {hint && <p className="py-5 text-danger">{hint}</p>}
      </div>
    </div>
  );
};

export default ContactMe;

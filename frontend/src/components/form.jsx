import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export const Form = () => {
  const [name, num] = useState("");

  return (
    <Form>
      <Form.Field>
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Number
          placeholder="number"
          value={num}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Button
          onClick={async () => {
            const data = { name, num };
            const response = await fetch("/add_first", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(),
            });

            if (response.ok) {
              console.log("respond work");
            }
          }}
        ></Button>
      </Form.Field>
    </Form>
  );
};

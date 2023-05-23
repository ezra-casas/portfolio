import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Send } from "iconoir-react";
import * as Form from "@radix-ui/react-form";

import "./styles.css";

const ContactModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Contact</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Contact Me</Dialog.Title>

        <Form.Root className="FormRoot">
          <Form.Field className="FormField" name="email">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Email</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                * Please enter your email
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                * Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="Input"
              />
            </Form.Control>
          </Form.Field>

          <Form.Field className="FormField" name="message">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Message</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                * Please enter a message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea
                name="message"
                id="message"
                rows={10}
                required
                className="Textarea"
              ></textarea>
            </Form.Control>
          </Form.Field>

          <Form.Submit asChild>
            <button className="Button">
              Send
              <Send height={18} />
            </button>
          </Form.Submit>
        </Form.Root>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        ></div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default ContactModal;

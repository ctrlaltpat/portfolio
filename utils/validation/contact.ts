import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Please use at least 3 characters." })
    .max(50, {
      message: `That's a pretty long name... Please use 50 characters or less :P`,
    })
    .nonempty({ message: "Please provide your name!" }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address!" })
    .max(150, {
      message:
        "That's quite a long email address... can you provide one that is shorter than 150 characters please?",
    })
    .nonempty({ message: "Please provide your email address!" }),
  subject: z
    .string()
    .min(3, { message: "Please use at least 3 characters" })
    .max(50, { message: "Please use less than 50 charcters." })
    .nonempty({ message: "Please provide a subject!" }),
  message: z
    .string()
    .min(20, {
      message: "Please provide at least 20 characters for your message...",
    })
    .max(500, {
      message: "Please use less than 500 characters for your message.",
    })
    .nonempty({ message: "Please provide a message!" }),
});

export default contactSchema;

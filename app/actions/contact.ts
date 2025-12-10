"use server";

import { z } from "zod";
import contactSchema from "@/utils/validation/contact";
import { ContactFormData } from "@/lib/types";
import { CreateEmailOptions, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const unknownErrorMessage = "Hmmm, something went wrong there. Please try again later.";

export async function sendMessage(formData: ContactFormData) {
  try {
    contactSchema.parse({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });

    const text = `${formData.name} (${formData.email}) sent you a message: \n\n ${formData.message}`;

    const emailPayload: CreateEmailOptions = {
      from: "CtrlAltPat Visitor <contact@ctrlaltpat.com>",
      to: [process.env.NEXT_PUBLIC_EMAIL as string],
      subject: formData.subject,
      text,
    };

    const { error } = await resend.emails.send(emailPayload);

    if (error) {
      return {
        success: false,
        errors: { ...error },
        message: unknownErrorMessage,
      };
    }

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.reduce((acc, issue) => {
        const field = issue.path[0];
        acc[String(field)] = issue.message;
        return acc;
      }, {} as Record<string, string>);

      return {
        success: false,
        errors,
        message: "Please address the errors in the form.",
      };
    }

    return {
      success: false,
      errors: {},
      message: unknownErrorMessage,
    };
  }
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactSchema from "@/utils/validation/contact";
import { sendMessage } from "@/app/actions/contact";
import { ContactFormData } from "@/lib/types";
import Cloak from "../ui/cloak";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    mode: "onBlur",
    resolver: zodResolver(contactSchema),
  });

  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
    errors?: Record<string, string> | null;
  }>({
    success: false,
    message: "",
    errors: null,
  });

  const onSubmit = async (formData: ContactFormData) => {
    const actionResponse = await sendMessage(formData);
    if (!actionResponse.success) {
      
      const normalizedErrors: Record<string, string> | null = actionResponse.errors
        ? Object.fromEntries(
            Object.entries(actionResponse.errors)
              .filter(([, value]) => typeof value === 'string')
              .map(([key, value]) => [key, value as string])
          )
        : null;

      if (normalizedErrors) {
        Object.entries(normalizedErrors).forEach(([field, message]) => {
          setError(field as keyof ContactFormData, { type: "manual", message });
        });
      }

      setResponse({
        success: false,
        message: actionResponse.message,
        errors: normalizedErrors
      });
      return;
    }

    setResponse({
      success: true,
      message: actionResponse.message,
      errors: null
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {response?.success === true && <h5 aria-live="polite">{response.message}</h5>}
      <Cloak visibility={!isSubmitSuccessful && !response.success} delay={2000}>
        <h5>Feel free to send me a message &#128153;</h5>
        <div className="info">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input placeholder="Name" {...register("name")} aria-invalid={errors.name ? "true" : "false"} />
            <p>{errors.name && errors.name.message}</p>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input placeholder="Email" type="email" {...register("email")} aria-invalid={errors.email ? "true" : "false"} />
            <p>{errors.email && errors.email.message}</p>
          </div>
        </div>
        <div className="content">
          <div className="field subject">
            <label htmlFor="subject">Subject</label>
            <input placeholder="Subject" {...register("subject")} aria-invalid={errors.subject ? "true" : "false"} />
            <p>{errors.subject && errors.subject.message}</p>
          </div>
          <div className="field message">
            <label htmlFor="message">Message</label>
            <textarea placeholder="....." {...register("message")} aria-invalid={errors.message ? "true" : "false"} />
            <p>{errors.message && errors.message.message}</p>
          </div>
        </div>
        <button
          type="submit"
          className="cap-btn"
          style={{ fontSize: "1.2rem" }}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </Cloak>
      <p style={{ marginTop: "30px" }}>
        {response?.success === false && <span aria-live="assertive">{response.message}</span>}
      </p>
    </form>
  );
}

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactSchema from "@/utils/validation/contact";
import { sendMessage } from "@/app/actions/contact";
import { ContactFormData } from "@/lib/types";
import { useState } from "react";
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
    console.log({ actionResponse });
    if (!actionResponse.success) {
      if (actionResponse.errors) {
        Object.entries(actionResponse.errors).forEach(([field, message]) =>
          setError(field as keyof ContactFormData, { type: "manual", message })
        );
      }
      setResponse(actionResponse);
      return;
    }

    setResponse(actionResponse);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {response?.success === true && <h5>{response.message}</h5>}
      <Cloak visibility={!isSubmitSuccessful && !response.success} delay={2000}>
        <h5>Feel free to send me a message &#128153;</h5>
        <div className="info">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input placeholder="Name" {...register("name")} />
            <p>{errors.name && errors.name.message}</p>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input placeholder="Email" type="text" {...register("email")} />
            <p>{errors.email && errors.email.message}</p>
          </div>
        </div>
        <div className="content">
          <div className="field subject">
            <label htmlFor="subject">Subject</label>
            <input placeholder="Subject" {...register("subject")} />
            <p>{errors.subject && errors.subject.message}</p>
          </div>
          <div className="field message">
            <label htmlFor="message">Message</label>
            <textarea placeholder="....." {...register("message")} />
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
          {isSubmitting ? "Checking..." : "Submit"}
        </button>
      </Cloak>
      <p style={{ marginTop: "30px" }}>
        {response?.success === false && response.message}
      </p>
    </form>
  );
}

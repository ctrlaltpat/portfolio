import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<FormValues> = (data, e) => {
    e?.target.reset();
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Feel free to send me a message &#128153;</p>
      <div className="info">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Name"
            {...register("name", {
              required: "Who are you?!",
              minLength: {
                value: 3,
                message: "Please enter at least 3 characters...",
              },
            })}
          />
          <p>{errors.name && errors.name.message}</p>
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            type="text"
            {...register("email", {
              required: "Please provide an email!",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
            })}
          />
          <p>{errors.email && errors.email.message}</p>
        </div>
      </div>
      <div className="content">
        <div className="field subject">
          <label htmlFor="subject">Subject</label>
          <input
            placeholder="Subject"
            {...register("subject", {
              required: "What is this message about?",
              minLength: {
                value: 3,
                message: "Please enter at least 3 characters...",
              },
            })}
          />
          <p>{errors.subject && errors.subject.message}</p>
        </div>

        <div className="field message">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="....."
            {...register("message", {
              required: "What would you like to ask / tell me?",
              minLength: {
                value: 20,
                message: "Please enter at least 20 characters...",
              },
            })}
          />
          <p>{errors.message && errors.message.message}</p>
        </div>
      </div>
      <button type="submit" className="cap-btn" style={{ fontSize: "1.2rem" }}>
        Send
      </button>
    </form>
  );
}

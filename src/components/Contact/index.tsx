import { send } from "@emailjs/browser";
import React, {
  useEffect,
  useState,
  ChangeEvent,
  FocusEvent,
  FormEvent,
} from "react";
import { StyledContact } from "./styles";
import { SectionDivider } from "../SectionDivider";
import { GradientText } from "../GradientText";
import { GradientBtn } from "../GradientBtn";

interface ContactProps {}

interface EmailStatus {
  p1: string;
  p2: string;
}

interface ErrorSpan {
  name: boolean;
  email: boolean;
  message: boolean;
}

const Contact: React.FC<ContactProps> = () => {
  const TO_SEND_INITIAL_STATE = {
    name: "",
    email: "",
    message: "",
  };

  const SERVICE_ID = "service_5zhjoeq";
  const TEMPLATE_ID = "template_ghb6xrv";

  const [toSend, setToSend] = useState(TO_SEND_INITIAL_STATE);

  const [validForm, setValidForm] = useState(false);

  const [emailStatus, setEmailStatus] = useState("none");
  const [emailSpanText, setEmailSpanText] = useState<EmailStatus>({
    p1: "",
    p2: "",
  });
  const [errorSpan, setErrorSpan] = useState<ErrorSpan>({
    name: false,
    email: false,
    message: false,
  });

  const errorMessage = {
    name: "Nome deve ter 3 ou mais caracteres",
    email: "exemplo@exemplo.com",
    message: "Mensagem deve ter 10 ou mais caracteres",
  };

  const emailSent = (newEmailStatus: string, spanText: EmailStatus) => {
    setEmailStatus(newEmailStatus);
    setEmailSpanText(spanText);
    setTimeout(() => {
      setEmailStatus("none");
    }, 5000);
  };

  useEffect(() => {
    const validateForm = () => {
      const { name, message } = toSend;

      const isNameValid = name.length > 2;
      const isMessageValid = message.length >= 10;

      setValidForm(isNameValid && isMessageValid);
    };
    validateForm();
  }, [toSend]);

  const sendForm = (event: FormEvent) => {
    event.preventDefault();
    send(SERVICE_ID, TEMPLATE_ID, toSend)
      .then((response) => {
        emailSent("success", {
          p1: "Enviado com sucesso! ✔️",
          p2: "Muito obrigado pelo contato! 😊",
        });
        setToSend(TO_SEND_INITIAL_STATE);
        console.log(response.status, response.text);
      })
      .catch((err) => {
        emailSent("failed", {
          p1: "Falha ao enviar o email! ❌",
          p2: "Tente novamente 🥺",
        });
        console.log(err);
      });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleFocus = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setErrorSpan({ ...errorSpan, [e.target.name]: true });
  };

  return (
    <StyledContact id="contact" className="section-spacing">
      <SectionDivider />
      <GradientText text="Contato" classes="contact-heading" />
      <form>
        <label htmlFor="name-input">
          <input
            type="text"
            name="name"
            id="name-input"
            value={toSend.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={() => setErrorSpan({ ...errorSpan, name: false })}
            placeholder="nome"
          />
        </label>
        {errorSpan.name && (
          <span className="form-span">{errorMessage.name}</span>
        )}
        <label htmlFor="email-input">
          <input
            type="text"
            name="email"
            id="email-input"
            value={toSend.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={() => setErrorSpan({ ...errorSpan, email: false })}
            placeholder="email"
          />
        </label>
        {errorSpan.email && (
          <span className="form-span">{errorMessage.email}</span>
        )}
        <label htmlFor="subject-input">
          <textarea
            name="message"
            id="subject-input"
            cols={30}
            rows={10}
            value={toSend.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={() => setErrorSpan({ ...errorSpan, message: false })}
            placeholder="mensagem"
          />
        </label>
        {errorSpan.message && (
          <span className="form-span span-text-area">
            {errorMessage.message}
          </span>
        )}
        <GradientBtn
          text={"Enviar"}
          onClickFunc={() => sendForm}
          disabled={!validForm}
        />
        {emailStatus !== "none" && (
          <span className="email-status">
            <p>{emailSpanText.p1}</p>
            <p>{emailSpanText.p2}</p>
          </span>
        )}
      </form>
    </StyledContact>
  );
};

export default Contact;

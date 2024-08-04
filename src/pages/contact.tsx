import Button from "@/components/button";
import { useToast } from "@/components/ui/use-toast";
import React, { FormEvent, Fragment, useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3, MdMessage } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const { from_name, from_email, message } = formData;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email);
    const isFormValid =
      from_name.trim() !== "" && isEmailValid && message.trim() !== "";
    setIsFormValid(isFormValid);

    setValidationErrors({
      from_name:
        from_name.trim() === ""
          ? ""
          : from_name.trim() === ""
            ? "Name is required"
            : "",
      from_email:
        from_email.trim() === ""
          ? ""
          : !isEmailValid
            ? "Invalid email format"
            : "",
      message:
        message.trim() === ""
          ? ""
          : message.trim() === ""
            ? "Message is required"
            : "",
    });
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAIL_KEY as string,
        );

        if (result.text === "OK" && formRef.current) {
          formRef.current.reset();
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
          toast({
            title: "Successful",
            description: `Message Sent: ${result.text}`,
            className: "w-fit",
            duration: 3000,
          });
        } else {
          throw new Error(result.text);
        }
      } catch (error: any) {
        console.error("Error sending email:", error);
        toast({
          variant: "destructive",
          className: "w-fit",
          title: "An error occurred while sending the email",
          description: `${error.message || "Unknown error"}`,
          duration: 3000,
        });
        setError("An error occurred while sending the email");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Fragment>
      <section className="relative isolate text-white">
        <div className="absolute inset-0 z-[-1] flex flex-col">
          <div className="h-1/2 w-full overflow-hidden bg-[url(/assets/contactbg.jpg)] bg-cover"></div>
          <div className="h-1/2 bg-black"></div>
        </div>
        <div className="flex justify-between gap-7 px-16 py-10 md:flex-wrap md:px-8 md:py-8">
          <div className="flex flex-col justify-between gap-7 md:justify-normal">
            <div className="space-y-4">
              <Button
                asLink
                href="/contact"
                text={"Contact Us"}
                className="rounded-full bg-[#006CFE] p-2 font-normal text-white"
              />
              <h1 className="mb-7 text-8xl font-medium 2md:w-full 2md:text-5xl">
                Let’s hear from you
              </h1>
              <p className="mt-7">
                Contact us and we will get back to you right away!
              </p>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaLocationDot color="#006CFE" />
                  <span>
                    Unit C22 Imex Business Park Kings Road Tyseley Birmingham 
                    B11 2AL
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MdWifiCalling3 color="#006CFE" /> <span>+441213459225</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdMessage color="#006CFE" />
                  <span>info@consology.co.uk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 text-black shadow-lg md:w-full">
            <h3 className="mb-5 text-2xl font-medium">
              Fill out the form and we will be in touch!
            </h3>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="space-y-4">
                <label htmlFor="from_name" className="mb-4 block">
                  <p className="mb-2 text-sm font-semibold">Name</p>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-400 p-3"
                  />
                  {validationErrors.from_name && (
                    <p className="text-sm text-red-500">
                      {validationErrors.from_name}
                    </p>
                  )}
                </label>
                <label htmlFor="from_email" className="mb-4 block">
                  <p className="mb-2 text-sm font-semibold">Email</p>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-400 p-3"
                  />
                  {validationErrors.from_email && (
                    <p className="text-sm text-red-500">
                      {validationErrors.from_email}
                    </p>
                  )}
                </label>
                <label htmlFor="message" className="mb-4 block">
                  <p className="mb-2 text-sm font-semibold">
                    How can we help you
                  </p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    cols={30}
                    rows={10}
                    className="w-full rounded-lg border border-gray-400 p-3"
                  ></textarea>
                  {validationErrors.message && (
                    <p className="text-sm text-red-500">
                      {validationErrors.message}
                    </p>
                  )}
                </label>
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-black p-2 font-normal text-white disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={isLoading || !isFormValid}
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

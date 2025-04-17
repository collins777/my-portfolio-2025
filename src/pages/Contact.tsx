import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f1f1f1;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #0077cc;
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #0077cc;
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <Heading>Contact Me</Heading>
      <Subheading>Get in touch with me!</Subheading>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactSection>
  );
};

export default Contact;

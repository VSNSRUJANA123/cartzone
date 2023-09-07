import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated } = useAuth0();
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h1 className="common-heading">Feel Free Contact Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.778391717828!2d78.38917178395573!3d17.431103036912777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cc62a87613%3A0xa8317fa22362be49!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1693577898189!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0, padding: "2rem" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mwkdblky"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={isAuthenticated ? user.email : ""}
              placeholder="useremail"
              required
            />
            <textarea
              name="enter your message"
              id="text"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="enter your message"
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

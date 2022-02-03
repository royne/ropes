import styled from "@emotion/styled";

export const BoxForm = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;

  fieldset {
    margin: 2rem 0;
    border: 1px solid #e1e1e1;
    font-size: 2rem;
    padding: 2rem;
  }
`;

export const BoxField = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }
  input,
  textarea {
    flex: 1;
    padding: 1rem;
    border: 1px solid var(--gris3);
  }
  textarea {
    height: 400px;
  }
`;

export const ImputSubmit = styled.input`
  background-color: var(--red);
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  margin-bottom: 2rem;
  &:hover {
    cursor: pointer;
  }
`;


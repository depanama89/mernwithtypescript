import React from "react";
import { User } from "../models/user";
import { useForm } from "react-hook-form";
import { LoginCredentials } from "../network/note_api";
import * as NotesApi from "../network/note_api";
import { Button, Form, Modal } from "react-bootstrap";
import TextInputField from "./form/TextInputField";
import styleUtils from "../styles/utils.module.css";

interface LoginModalProps {
  onDismiss: () => void;
  onLoginSuccessful: (user: User) => void;
}

const LoginModal = ({ onDismiss, onLoginSuccessful }: LoginModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>();
  async function onSubmit(credentials: LoginCredentials) {
    try {
      const user = await NotesApi.login(credentials);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
  return (
    <Modal show onHide={onDismiss} className="p-4">
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <TextInputField
            name="username"
            label="Username"
            placeholder="Username"
            register={register}
            registerOption={{ required: "Required" }}
            error={errors.username}
          />
          <TextInputField 
          name="password"
          label="Password"
          placeholder="Password"
          register={register}
          registerOption={{ required: "Required" }}
          error={errors.password}
          
          />
          <Button
            type="submit"           
            className={styleUtils.width100}
            disabled={isSubmitting}>
                Log In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;

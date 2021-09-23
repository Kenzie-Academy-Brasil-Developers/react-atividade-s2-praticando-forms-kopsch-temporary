import {
  StyledForm,
  StyledInput,
  StyledInputPassword,
  StyledButton,
} from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({ setUserData }) => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Usuário obrigatório"),
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    emailcheck: yup
      .string()
      .oneOf([yup.ref("email"), null], "Os emails devem ser iguais."),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "Senha inválida"
      ),
    passwordcheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
    checkbox: yup
      .boolean()
      .oneOf([true], "É necessário aceitar os termos de condições."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitFunction = (data) => {
    setUserData(data);
  };

  return (
    <StyledForm className="form" onSubmit={handleSubmit(submitFunction)}>
      <StyledInput
        borderColor={errors.username && "red"}
        borderWidth={errors.username && "2px"}
        type="text"
        placeholder={
          errors.username ? errors.username.message : "Nome de usuário *"
        }
        {...register("username")}
      />
      <StyledInput
        borderColor={errors.name && "red"}
        borderWidth={errors.name && "2px"}
        type="text"
        placeholder={errors.name ? errors.name.message : "Nome completo *"}
        {...register("name")}
      />
      <StyledInput
        borderColor={errors.email && "red"}
        borderWidth={errors.email && "2px"}
        type="text"
        placeholder={errors.email ? errors.email.message : "Email *"}
        {...register("email")}
      />
      <StyledInput
        borderColor={errors.emailcheck && "red"}
        borderWidth={errors.emailcheck && "2px"}
        type="text"
        placeholder={
          errors.emailcheck ? errors.emailcheck.message : "Confirme seu email *"
        }
        {...register("emailcheck")}
      />

      <StyledInputPassword
        borderColor={errors.password && "red"}
        borderWidth={errors.password && "2px"}
        type="password"
        placeholder={errors.password ? errors.password.message : "Senha *"}
        className="form__password"
        {...register("password")}
      />
      <StyledInputPassword
        borderColor={errors.passwordcheck && "red"}
        borderWidth={errors.passwordcheck && "2px"}
        type="password"
        placeholder={
          errors.passwordcheck ? errors.passwordcheck.message : "Confirme sua senha *"
        }
        className="form__password"
        {...register("passwordcheck")}
      />

      <div>
        <input type="checkbox" name="checkbox" {...register("checkbox")} />
        <label>
          {errors.checkbox
            ? errors.checkbox.message
            : "Eu aceito os termos de uso da aplicação"}
        </label>
      </div>
      <div>
        <StyledButton type="submit">Cadastrar</StyledButton>
        <a href="#">Já possui uma conta?</a>
      </div>
    </StyledForm>
  );
};

export default Form;

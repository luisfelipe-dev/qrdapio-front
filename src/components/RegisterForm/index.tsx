import { Formik } from "formik";
import * as Yup from "yup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

export type RegisterFormProps = {};

const RegisterForm = (props: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="w-full max-w-md mx-auto flex flex-wrap justify-center mb-6">
        <div className="w-full flex justify-center">
          <img
            src="/images/logo.png"
            alt="QRDapio Logo"
            className="max-w-full h-auto mb-6"
          />
        </div>
        <p className="text-cardapio-title tagline text-base font-semibold mb-6">
          Crie sua conta gratuitamente!
        </p>

        <div className="w-full flex flex-col">
          <Formik
            initialValues={{
              enterprise: {
                name: "",
                cnpj: "",
              },
              user: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              },
            }}
            validationSchema={Yup.object({
              enterprise: Yup.object({
                name: Yup.string().required("Campo obrigatório"),
                cnpj: Yup.string()
                  .matches(/^\d{14}$/, "CNPJ inválido")
                  .required("Campo obrigatório"),
              }),
              user: Yup.object({
                name: Yup.string().required("Campo obrigatório"),
                email: Yup.string()
                  .email("E-mail inválido")
                  .required("Campo obrigatório"),
                password: Yup.string()
                  .required("Campo obrigatório")
                  .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
                  ),
                confirmPassword: Yup.string()
                  .required("Campo obrigatório")
                  .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
              }),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {(formik) => (
              <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                <div className="relative w-full mb-4">
                  <input
                    id="enterprise.name"
                    type="text"
                    className={`w-full h-12 px-4 py-0 bg-neutral-200 rounded-lg border focus:outline-none transition ${
                      formik.touched.enterprise?.name &&
                      formik.errors.enterprise?.name
                        ? "border-error"
                        : "border-neutral-500"
                    }`}
                    {...formik.getFieldProps("enterprise.name")}
                  />
                  <label
                    htmlFor="enterprise.name"
                    className={`absolute left-4 transition-all ${
                      formik.values.enterprise.name ||
                      document.activeElement ===
                        document.getElementById("enterprise.name")
                        ? "-top-3.5 text-xs text-neutral-500"
                        : "top-3.5 text-neutral-500"
                    }`}
                  >
                    Nome da empresa
                  </label>
                  {formik.touched.enterprise?.name &&
                  formik.errors.enterprise?.name ? (
                    <div>
                      <p className="text-error text-sm">
                        {formik.errors.enterprise.name}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="relative w-full mb-4">
                  <input
                    id="enterprise.cnpj"
                    type="text"
                    className={`w-full h-12 px-4 py-0 bg-neutral-200 rounded-lg border focus:outline-none transition ${
                      formik.touched.enterprise?.cnpj &&
                      formik.errors.enterprise?.cnpj
                        ? "border-error"
                        : "border-neutral-500"
                    }`}
                    {...formik.getFieldProps("enterprise.cnpj")}
                  />
                  <label
                    htmlFor="enterprise.cnpj"
                    className={`absolute left-4 transition-all ${
                      formik.values.enterprise.cnpj ||
                      document.activeElement ===
                        document.getElementById("enterprise.cnpj")
                        ? "-top-3.5 text-xs text-neutral-500"
                        : "top-3.5 text-neutral-500"
                    }`}
                  >
                    CNPJ
                  </label>
                  {formik.touched.enterprise?.cnpj &&
                  formik.errors.enterprise?.cnpj ? (
                    <div>
                      <p className="text-error text-sm">
                        {formik.errors.enterprise.cnpj}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="w-full relative mb-4">
                  <input
                    id="user.name"
                    type="text"
                    className={`w-full h-12 bg-neutral-200 px-4 py-0 rounded-lg border border-solid focus:outline-none ${
                      formik.touched.user?.name && formik.errors.user?.name
                        ? "border-error"
                        : "border-neutral-500"
                    }`}
                    {...formik.getFieldProps("user.name")}
                  />
                  <label
                    htmlFor="user.name"
                    className={`absolute left-4 transition-all ${
                      formik.values.user.name ||
                      document.activeElement ===
                        document.getElementById("user.name")
                        ? "-top-3.5 text-xs text-neutral-500"
                        : "top-3.5 text-neutral-500"
                    }`}
                  >
                    Seu nome
                  </label>
                  {formik.touched.user?.name && formik.errors.user?.name ? (
                    <div>
                      <p className="text-error text-sm">
                        {formik.errors.user.name}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="w-full relative mb-4">
                  <input
                    id="user.email"
                    type="text"
                    className={`w-full h-12 bg-neutral-200 px-4 py-0 rounded-lg border border-solid focus:outline-none ${
                      formik.touched.user?.email && formik.errors.user?.email
                        ? "border-error"
                        : "border-neutral-500"
                    }`}
                    {...formik.getFieldProps("user.email")}
                  />
                  <label
                    htmlFor="user.email"
                    className={`absolute left-4 transition-all ${
                      formik.values.user.email ||
                      document.activeElement ===
                        document.getElementById("user.email")
                        ? "-top-3.5 text-xs text-neutral-500"
                        : "top-3.5 text-neutral-500"
                    }`}
                  >
                    Seu e-mail
                  </label>
                  {formik.touched.user?.email && formik.errors.user?.email ? (
                    <div>
                      <p className="text-error text-sm">
                        {formik.errors.user.email}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="w-full relative mb-4">
                  <input
                    id="user.password"
                    type={"text"}
                    className={`w-full h-12 bg-neutral-200 px-4 py-0 rounded-lg border border-solid focus:outline-none relative ${
                      formik.touched.user?.password &&
                      formik.errors.user?.password
                        ? "border-error"
                        : "border-neutral-500"
                    }`}
                    {...formik.getFieldProps("user.password")}
                  />

                  <label
                    htmlFor="user.password"
                    className={`absolute left-4 transition-all ${
                      formik.values.user.password ||
                      document.activeElement ===
                        document.getElementById("user.password")
                        ? "-top-3.5 text-xs text-neutral-500"
                        : "top-3.5 text-neutral-500"
                    }`}
                  >
                    Senha
                  </label>
                  {formik.touched.user?.password &&
                  formik.errors.user?.password ? (
                    <div>
                      <p className="text-error text-sm">
                        {formik.errors.user.password}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="w-full relative mb-4">
                  <input
                    id="user.confirmPassword"
                    type={"text"}
                    className={`w-full h-12 bg-neutral-200 px-4 py-0 rounded-lg border border-solid focus:outline-none relative ${
                      formik.touched.user?.confirmPassword &&
                      formik.errors.user?.confirmPassword
                        ? "border-error"
                        : "border-neutral-500"
                    }`}
                    {...formik.getFieldProps("user.confirmPassword")}
                  />

                  <label
                    htmlFor="user.confirmPassword"
                    className={`absolute left-4 transition-all ${
                      formik.values.user.confirmPassword ||
                      document.activeElement ===
                        document.getElementById("user.confirmPassword")
                        ? "-top-3.5 text-xs text-neutral-500"
                        : "top-3.5 text-neutral-500"
                    }`}
                  >
                    Confirmar senha
                  </label>
                  {formik.touched.user?.confirmPassword &&
                  formik.errors.user?.confirmPassword ? (
                    <div>
                      <p className="text-error text-sm">
                        {formik.errors.user.confirmPassword}
                      </p>
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="w-28 h-12 px-6 rounded-full font-bold text-white bg-redmain-brand mx-auto"
                >
                  Acessar
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;

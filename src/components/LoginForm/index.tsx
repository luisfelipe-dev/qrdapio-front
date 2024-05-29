import { Formik } from "formik";
import * as Yup from "yup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

export type LoginFormProps = {};

const LoginForm = (props: LoginFormProps) => {
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
          Bem-vindo de volta!
        </p>

        <div className="w-full flex flex-col">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("E-mail inválido")
                .required("Campo obrigatório"),
              password: Yup.string().required("Campo obrigatório"),
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
                <div className="w-full relative mb-4">
                  <input
                    id="email"
                    type="text"
                    className={`
                      w-full 
                      h-12 
                      bg-neutral-200 
                      px-4 py-0 
                      rounded-lg 
                      border 
                      border-solid 
                      focus:outline-none 
                      ${
                        formik.touched.email && formik.errors.email
                          ? "border-error"
                          : "border-neutral-500"
                      }`}
                    placeholder="Seu e-mail"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="absolute bottom-0 right-2">
                      <p className="text-error text-sm">
                        {formik.errors.email}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="w-full relative mb-4">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className={`
                      w-full 
                      h-12 
                      bg-neutral-200 
                      px-4 py-0 
                      rounded-lg 
                      border 
                      border-solid 
                      focus:outline-none
                      relative
                      ${
                        formik.touched.password && formik.errors.password
                          ? "border-error"
                          : "border-neutral-500"
                      }`}
                    placeholder="Senha"
                    {...formik.getFieldProps("password")}
                  />

                  <button
                    type="button"
                    className="absolute bottom-4 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaRegEyeSlash style={{ color: "#8D99AE" }} />
                    ) : (
                      <FaRegEye style={{ color: "#8D99AE" }} />
                    )}
                  </button>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="absolute bottom-0 right-2">
                      <p className="text-error text-sm">
                        {formik.errors.password}
                      </p>
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="w-28 h-12 px-6  rounded-full font-bold text-white bg-redmain-brand mx-auto"
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

export default LoginForm;

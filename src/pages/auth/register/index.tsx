import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../../assets/logo.svg";
import { useAddItem } from "../../../utility/tanstackQuery";
import { UserType } from "../../../router";
import Loading from "../../../components/loader";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { useAuth } from "../protectRoute/authProvider";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type UserFormProps = {
  setUser: (user: UserType) => void;
};

export default function Register({ setUser }: UserFormProps) {
  const { mutateAsync, isPending } = useAddItem("auth/signup");
  const navigate = useNavigate();
  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Enter your username")
        .min(3, "Must be more than 3")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Username should not contain special characters"
        ),
      email: Yup.string()
        .email("Invalid email address")
        .required("Password is required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters long"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), ""], "Passwords must match"),
    }),
    onSubmit: async (values) => {
      try {
        const newUser = await mutateAsync({
          username: values.username,
          email: values.email,
          password: values.password,
        });
        console.log("new user here", newUser);
        setUser(newUser);
        localStorage.setItem("localuser", JSON.stringify(newUser));
        toast.success(newUser?.message || "Registered Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        auth?.login();
        navigate("/material");
      } catch (error) {
        console.error("can register user:", error);
        toast.error("Error occured", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
  });

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              alt="Your Company"
              src={logo}
              className="mx-auto h-[10%] w-[15%]"
            />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <form
                action="#"
                method="POST"
                className="space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                      required
                      autoComplete="username"
                      className={classNames(
                        formik.touched.username && formik.errors.username
                          ? "ring-red-500"
                          : "",
                        "block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      )}
                    />
                  </div>
                  {formik.touched.username && formik.errors.username ? (
                    <p className="text-red-500">{formik.errors.username}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      required
                      autoComplete="email"
                      className={classNames(
                        formik.touched.email && formik.errors.email
                          ? "ring-red-500"
                          : "",
                        "block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      )}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-500">{formik.errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      required
                      autoComplete="current-password"
                      className={classNames(
                        formik.touched.password && formik.errors.password
                          ? "ring-red-500"
                          : "",
                        "block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      )}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-500">{formik.errors.password}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      required
                      autoComplete="current-password"
                      className={classNames(
                        formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                          ? "ring-red-500"
                          : "",
                        "block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      )}
                    />
                  </div>
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <p className="text-red-500">
                      {formik.errors.confirmPassword}
                    </p>
                  ) : null}
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                </div>
              </form>

              <div>
                <div className="relative mt-10">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">
                      Google
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

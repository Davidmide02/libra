import { PhotoIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import * as Yup from "yup";
import { classNames } from "../../../utility/classesStyle";
import { toastWarning } from "../../../utility/toasterFn";

interface MyComponentProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
interface Materialprops {
  title: string;
  author: string[];
  category: string;
  count: number;
}

const CreateForm: React.FC<MyComponentProps> = ({ setIsOpen }) => {
  const [addMaterial, setAddMaterial] = useState<Materialprops | null>(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: [],
      category: "",
      count: 0,
      image: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Enter material title"),
      author: Yup.array()
        .of(
          Yup.string()
            .trim()
            .required("Author is required")
            .test(
              "not-empty",
              "Author name cannot be empty",
              (value) => value !== ""
            )
        )
        .required("Enter author name"),
      category: Yup.string().required("Enter material title"),
      count: Yup.number().required("Enter count").positive(),
      image: Yup.mixed()
        .required("Image is required")
        .test(
          "fileSize",
          "The file is too large",
          (value) => value instanceof File && value.size <= 1024 * 1024 // 1MB
        )
        .test(
          "fileType",
          "Unsupported file format",
          (value) =>
            value instanceof File &&
            ["image/jpeg", "image/png"].includes(value.type)
        ),
    }),
    onSubmit: async (values) => {
      console.log("form submitted");
      if (values.author.length <= 0) {
        toastWarning("Author can't be empty. Pls add author");
        return;
      }
      setAddMaterial(values);
      console.log("values here", values);

      console.log(values.category);

      console.log("add:", addMaterial);
    },
  });

  return (
    <form className="" onSubmit={formik.handleSubmit}>
      <h3 className="text-center text-2xl font-semibold">Add Material</h3>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 items-center">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Think and grow rich"
                    autoComplete="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={classNames(
                      formik.touched.title && formik.errors.title
                        ? "ring-red-500"
                        : "",
                      "block flex-1 border-0 bg-transparent outline-none py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    )}
                  />
                </div>
                {formik.touched.title && formik.errors.title ? (
                  <p className="text-red-500">{formik.errors.title}</p>
                ) : null}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="author"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Author
              </label>
              {(formik.values.author || []).map((_, index) => (
                <div key={index} className="flex space-x-2">
                  <input
                    type="text"
                    name={`author[${index}]`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.author[index]}
                    placeholder="Author name"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newAuthors = [...formik.values.author];
                      newAuthors.splice(index, 1);
                      formik.setFieldValue("author", newAuthors);
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() =>
                  formik.setFieldValue("author", [...formik.values.author, ""])
                }
              >
                Add Author
              </button>
              {formik.touched.author && formik.errors.author && (
                <p className="text-red-500">{formik.errors.author}</p>
              )}
            </div>

            <div>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" label="Select a category" />
                <option value="science" label="Science" />
                <option value="art" label="Art" />
                <option value="mathematics" label="Mathematics" />
                <option value="English" label="English" />
                <option value="others" label="Others" />
              </select>
              {formik.touched.category && formik.errors.category && (
                <p>{formik.errors.category}</p>
              )}
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="author"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Numbers available
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <select
                    id="count"
                    name="count"
                    value={formik.values.count}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                {formik.touched.count && formik.errors.count ? (
                  <p className="text-red-500">{formik.errors.count}</p>
                ) : null}
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Book cover
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    aria-hidden="true"
                    className="mx-auto h-12 w-12 text-gray-300"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={(event) => {
                          const file = event.currentTarget.files?.[0];
                          formik.setFieldValue("image", file);
                        }}
                        onBlur={formik.handleBlur}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                    {/* {formik.values.image && (
                      <p className="text-red-500">{formik.values.image}</p>
                    )} */}
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
                {formik.touched.image && formik.errors.image && (
                  <p className="text-red-500">{formik.errors.image}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default CreateForm;

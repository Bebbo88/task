import { useField } from "formik";
import Input from "./Input";
import ErrorMessage from "./ErrorMessage";

export default function FormikInput({ name, ...props }) {
  const [field, meta] = useField(name);
  return (
    <div>
      <Input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "border-red-500" : ""}
      />
      <ErrorMessage message={meta.touched && meta.error} />
    </div>
  );
}

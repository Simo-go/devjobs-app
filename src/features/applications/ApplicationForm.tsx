import { HiMiniXMark } from "react-icons/hi2";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useDialogContext } from "../../ui/Dialog";
import { FormValues, Job } from "./types";
import CVInput from "./components/CVInput";
import { useForm } from "react-hook-form";
import MotivationInput from "./components/MotivationInput";

function ApplicationForm({ position }: Pick<Job, "position">) {
  const { handleCloseDialog } = useDialogContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    control,
  } = useForm<FormValues>({ mode: "onChange" });

  function onSubmit(formData: FormValues) {
    console.log(formData);
    console.log(formData.cv[0]);
  }

  console.log(errors);

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Form.Header>
        <div className="flex justify-end">
          <Button onClick={handleCloseDialog} type="button">
            <HiMiniXMark size={24} />
          </Button>
        </div>
        <h2 className="text-preset-2">Apply for {position}</h2>
      </Form.Header>
      <CVInput
        {...register("cv", {
          required: {
            value: true,
            message: "Provide a file input first.",
          },
          validate: (files) => {
            const file = files.item(0);
            console.log(file);
            if (!file) return true;

            return (
              file.type === "application/pdf" || "Only pdf format is accepted"
            );
          },
        })}
        onClear={() => resetField("cv")}
        control={control}
      />
      <MotivationInput {...register("motivation")} />
      <Form.Submit>Submit</Form.Submit>
    </Form>
  );
}

export default ApplicationForm;

import { HiMiniXMark } from "react-icons/hi2";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useDialogContext } from "../../ui/Dialog";
import { FormValues, Job } from "./types";
import CVInput from "./components/CVInput";
import { useForm } from "react-hook-form";
import MotivationInput from "./components/MotivationInput";
import { getWordCount } from "../../utils/helpers";
import { MIN_WORD_COUNT } from "../../utils/constants";

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
            if (!file) return true;

            return (
              file.type === "application/pdf" || "Only pdf format is accepted"
            );
          },
        })}
        onClear={() => resetField("cv")}
        control={control}
        errorMsg={errors.cv?.message}
      />
      <MotivationInput
        {...register("motivation", {
          required: {
            value: true,
            message: "Provide a motivation first.",
          },
          validate: (motivationStr) =>
            getWordCount(motivationStr) >= MIN_WORD_COUNT ||
            `Please provide at least ${MIN_WORD_COUNT} words.`,
        })}
        control={control}
        errorMsg={errors.motivation?.message}
      />
      <Form.Container className="flex justify-end">
        <Form.Submit variant="primary" size="large">
          Submit
        </Form.Submit>
      </Form.Container>
    </Form>
  );
}

export default ApplicationForm;

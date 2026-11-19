import { HiMiniXMark } from "react-icons/hi2";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useDialogContext } from "../../ui/Dialog";
import { Job } from "./types";

function ApplicationForm({ position }: Pick<Job, "position">) {
  const { handleCloseDialog } = useDialogContext();
  console.log(position);

  return (
    <Form handleSubmit={(formState) => {}}>
      <Form.Header>
        <div className="flex justify-end">
          <Button onClick={handleCloseDialog}>
            <HiMiniXMark size={24} />
          </Button>
        </div>
        <h2 className="text-preset-2">Apply for {position}</h2>
      </Form.Header>
      <Form.InputContainer>
        <Form.Label>CV</Form.Label>
        <Form.FileInput name="cv" />
      </Form.InputContainer>
    </Form>
  );
}

export default ApplicationForm;

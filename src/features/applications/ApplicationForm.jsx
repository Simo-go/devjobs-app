import { HiMiniXMark } from "react-icons/hi2";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useDialogContext } from "../../ui/Dialog";

function ApplicationForm({ job }) {
  console.log(job);
  const { handleCloseDialog } = useDialogContext();

  return (
    <Form>
      <Form.Header>
        <div className="flex justify-end">
          <Button onClick={handleCloseDialog}>
            <HiMiniXMark size={24} />
          </Button>
        </div>
        <h2 className="text-preset-2">Apply for {job.position}</h2>
      </Form.Header>
      <Form.InputContainer>
        <Form.Label>CV</Form.Label>
        <Form.FileInput name="cv" />
      </Form.InputContainer>
    </Form>
  );
}

export default ApplicationForm;

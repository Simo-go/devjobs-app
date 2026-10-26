import Form from "../../ui/Form";
import IconSearch from "../../assets/icons/icon-search.svg?react";

function JobDetailsInput() {
  return (
    <Form.Container className="col-span-2 mr-4 flex grow items-center gap-0 border-r-slate-900/20 md:col-span-1 md:mr-0 md:gap-4 md:border-r">
      <Form.Label
        htmlFor="title"
        className="text-indigo-500 transition-colors duration-300 [&:has(+input:focus)]:text-indigo-300"
      >
        <IconSearch className="hidden md:block" />
      </Form.Label>
      <Form.Input
        name="title"
        placeholder="Filter by title, companies, expertise, ..."
      />
    </Form.Container>
  );
}

export default JobDetailsInput;

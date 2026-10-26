import IconSearch from "../../assets/icons/icon-search.svg?react";
import IconFilter from "../../assets/icons/icon-filter.svg?react";
import Dialog from "../../ui/Dialog";
import Form from "../../ui/Form";
import JobDetailsInput from "./JobDetailsInput";
import LocationInput from "./LocationInput";
import FullTimeCheckbox from "./FullTimeCheckbox";

function Search() {
  function handleSearch(formState) {
    console.log(formState);
  }

  return (
    <Dialog>
      <Form
        id="search-form"
        className="row-span-2 grid grid-cols-[1fr_1fr_auto] rounded-md bg-neutral-0 md:grid-cols-[1fr_1fr_auto] lg:grid-cols-[2fr_1fr_auto]"
        handleSubmit={handleSearch}
      >
        <JobDetailsInput />
        <LocationInput className="hidden md:flex" />
        <Form.Container className="flex items-center gap-6">
          <FullTimeCheckbox className="hidden md:flex" />
          <Dialog.Button size="icon" className="md:hidden">
            <IconFilter />
          </Dialog.Button>
          <Form.Submit size="small" className="fill-neutral-0 text-neutral-0">
            <IconSearch />
          </Form.Submit>
        </Form.Container>

        <Dialog.Window>
          <Form.Container className="flex flex-col gap-6">
            <LocationInput className="flex md:hidden" />
            <hr className="-mx-6 border-0 border-b border-slate-500/20" />
            <FullTimeCheckbox className="flex md:hidden" />
            <Form.Submit className="w-full grow p-3.5">Search</Form.Submit>
          </Form.Container>
        </Dialog.Window>
      </Form>
    </Dialog>
  );
  // Full Time Only</Form.Checkbox>
}

export default Search;

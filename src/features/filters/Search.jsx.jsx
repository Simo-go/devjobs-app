import IconLocation from "../../assets/icons/icon-location.svg?react";
import IconSearch from "../../assets/icons/icon-search.svg?react";
import IconFilter from "../../assets/icons/icon-filter.svg?react";
import Dialog from "../../ui/Dialog";
import Form from "../../ui/Form";

function Search() {
  function handleSearch(formState) {
    console.log(formState);
  }

  return (
    <Dialog>
      <Form
        id="search-form"
        className="row-span-2 grid grid-cols-[1fr_auto_auto] items-center gap-6 rounded-md bg-neutral-0 p-4"
        handleSubmit={handleSearch}
      >
        <Form.Container className="min-w-0 shrink grow">
          <Form.Label>
            <IconSearch className="hidden text-indigo-500" />
          </Form.Label>
          <Form.Input
            name="title"
            className="w-full truncate text-preset-4-regular text-slate-950 outline-0 placeholder-shown:text-ellipsis"
            placeholder="Filter by title, companies, expertise, ..."
          />
        </Form.Container>
        <Dialog.Button size="icon">
          <IconFilter />
        </Dialog.Button>
        <Form.Submit size="small" className="fill-neutral-0 text-neutral-0">
          <IconSearch />
        </Form.Submit>

        <Dialog.Window>
          <Form.Container className="flex flex-col gap-6">
            <Form.InputContainer>
              <Form.Label
                htmlFor="location"
                className="text-indigo-500 transition-colors duration-300 [&:has(+input:focus)]:text-indigo-300!"
              >
                <IconLocation />
              </Form.Label>
              <Form.Input name="location" placeholder="Filter by location" />
            </Form.InputContainer>
            <hr className="-mx-6 border-0 border-b border-slate-500/20" />
            <Form.InputContainer>
              <Form.Checkbox name="is-full-time" />
              <Form.Label
                className="cursor-pointer text-preset-4-bold"
                htmlFor="is-full-time"
              >
                Full-Time Only
              </Form.Label>
            </Form.InputContainer>
            <Form.Submit className="w-full grow p-3.5">Search</Form.Submit>
          </Form.Container>
        </Dialog.Window>
      </Form>
    </Dialog>
  );
  // Full Time Only</Form.Checkbox>
}

export default Search;

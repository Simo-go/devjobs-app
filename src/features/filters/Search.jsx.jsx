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
    <Form
      id="search-form"
      className="row-span-2 grid grid-cols-[1fr_auto_auto] items-center gap-6 rounded-md bg-neutral-0 p-4"
      handleSubmit={handleSearch}
    >
      <Form.Container className="min-w-0 shrink grow">
        {/* <Form.Label>
          <IconSearch className="hidden fill-indigo-500" />
        </Form.Label> */}
        <Form.Input
          name="title"
          className="w-full truncate text-preset-4-regular text-slate-950 outline-0 placeholder-shown:text-ellipsis"
          placeholder="Filter by title, companies, expertise, ..."
        />
      </Form.Container>
      <button>
        <IconFilter />
      </button>
      {/* <Dialog.Button>
          <IconFilter />
        </Dialog.Button> */}
      <Form.Submit size="small" className="fill-neutral-0 text-neutral-0">
        <IconSearch />
      </Form.Submit>

      {/* <Dialog.Window> */}
      {/* <Form.Input name="location" placeholder="Filter by location" />
      <Form.Checkbox name="is-full-time" />
      <Form.Submit>Search</Form.Submit> */}
      {/* </Dialog.Window> */}
    </Form>
  );
  // Full Time Only</Form.Checkbox>
}

export default Search;

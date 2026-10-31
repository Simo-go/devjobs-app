import { useSearchParams } from "react-router";
import { useDialogContext } from "../../ui/Dialog";

export function useSearch(formRef) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { handleCloseDialog } = useDialogContext();

  function handleSearch(formState) {
    if (formState?.q && formState?.q.length > 2)
      searchParams.set("q", formState.q);
    else searchParams.delete("q");
    if (formState?.loc && formState?.loc.length > 2)
      searchParams.set("loc", formState.loc);
    else searchParams.delete("loc");
    if (formState?.["full-time"])
      searchParams.set("full-time", formState?.["full-time"]);
    else searchParams.delete("full-time");

    setSearchParams(searchParams);

    handleCloseDialog();

    // remove focus from currently focused input element
    formRef.current.querySelector(":focus")?.blur();
  }

  return handleSearch;
}

import { useSearchParams } from "react-router";

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(formState) {
    console.log(formState);

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
  }

  return handleSearch;
}

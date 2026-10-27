import List from "../../ui/List";

function JobDetails({ job }) {
  const { description, requirements, role } = job;

  return (
    <div className="mb-10 flex flex-col gap-10 text-preset-4-regular text-slate-500">
      <p>{description}</p>

      <section>
        <h3 className="mb-3 text-preset-3 text-slate-900">Requirements</h3>
        <p className="mb-5">{requirements.content}</p>
        <List items={requirements.items}>
          {(item) => (
            <li className="pl-2" key={item}>
              {item}
            </li>
          )}
        </List>
      </section>

      <section>
        <h2 className="mb-3 text-preset-3 text-slate-900">What You will Do</h2>
        <p className="mb-8">{role.content}</p>
        <List items={role.items} numbered />
      </section>
    </div>
  );
}

export default JobDetails;

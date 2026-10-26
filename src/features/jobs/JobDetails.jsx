function JobDetails({ job }) {
  const { description, requirements, role } = job;

  return (
    <div className="flex flex-col gap-10 text-preset-4-regular text-slate-500">
      <p>{description}</p>
      <section>
        <h3 className="mb-6 text-preset-3 text-slate-900">Requirements</h3>
        <p className="mb-5">{requirements.content}</p>
        <ul className="list-outside list-disc space-y-2 pl-4">
          {requirements.items.map((req) => (
            <li className="pl-2" key={req}>
              {req}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mb-6 text-preset-3 text-slate-900">What You will Do</h2>
        <p className="mb-8">{role.content}</p>
        <ol className="[counter-reset:list-number]list-decimal">
          {role.items.map((item) => (
            <li
              className="flex items-center gap-4 [counter-increment:list-number] before:inline-block before:text-preset-4-bold before:text-indigo-500 before:content-[counter(list-number)]"
              key={item}
            >
              {item}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default JobDetails;

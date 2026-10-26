function JobDetails() {
  return (
    <div className="flex flex-col gap-10 text-preset-4-regular text-slate-500">
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
        vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
        id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
        lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
        euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
        dapibus eu, fermentum et, dapibus sed, urna.
      </p>
      <section>
        <h3 className="mb-6 text-preset-3 text-slate-900">Requirements</h3>
        <p className="mb-5">
          Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
          ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
          libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
          varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
          pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida
          vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
          vulputate vel, nisl.
        </p>
        <ul className="list-outside list-disc space-y-2 pl-4">
          <li className="pl-2">Morbi interdum mollis sapien. Sed</li>
          <li className="pl-2">Morbi interdum mollis sapien. Sed</li>
          <li className="pl-2">Morbi interdum mollis sapien. Sed</li>
          <li className="pl-2">Morbi interdum mollis sapien. Sed</li>
        </ul>
      </section>
      <section>
        <h2 className="mb-6 text-preset-3 text-slate-900">What You will Do</h2>
        <p className="mb-8">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
          dapibus sed, urna.
        </p>
        <ol className="[counter-reset:list-number]list-decimal">
          <li className="flex items-center gap-4 [counter-increment:list-number] before:inline-block before:text-preset-4-bold before:text-indigo-500 before:content-[counter(list-number)]">
            Morbi interdum mollis sapien. Sed
          </li>
          <li className="flex items-center gap-4 [counter-increment:list-number] before:inline-block before:text-preset-4-bold before:text-indigo-500 before:content-[counter(list-number)]">
            Morbi interdum mollis sapien. Sed
          </li>
          <li className="flex items-center gap-4 [counter-increment:list-number] before:inline-block before:text-preset-4-bold before:text-indigo-500 before:content-[counter(list-number)]">
            Morbi interdum mollis sapien. Sed
          </li>
          <li className="flex items-center gap-4 [counter-increment:list-number] before:inline-block before:text-preset-4-bold before:text-indigo-500 before:content-[counter(list-number)]">
            Morbi interdum mollis sapien. Sed
          </li>
        </ol>
      </section>
    </div>
  );
}

export default JobDetails;

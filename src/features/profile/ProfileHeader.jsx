function ProfileHeader({ firstName, lastName }) {
  return (
    <header className="mb-10 flex items-center gap-10">
      <img
        src="./assets/pictures/girl-avatar.jpg"
        alt=""
        className="size-20 rounded-full"
      />
      <h1 className="text-preset-2">
        {firstName} {lastName}
      </h1>
    </header>
  );
}

export default ProfileHeader;

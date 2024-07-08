function UserAvatar({ user }) {
  const { name, photo } = user ?? {};

  return (
    <div className="flex justify-center items-center gap-3 font-medium text-gray-600 text-sm">
      <img
        src={photo.url || "/default-user.jpg"}
        alt={`photo of ${name}`}
        className="block object-top border-2 border-gray-100 rounded-full w-12 h-12 object-cover"
      />
      {/* <span>{name}</span> */}
    </div>
  );
}

export default UserAvatar;

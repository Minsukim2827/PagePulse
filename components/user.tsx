import Image from "next/image";
import Link from "next/link";




function User({ user, href }: { user: UserI; href?: string }) {
  return (
    <div>
      <Link
        href={`/${href || user.username}`}
        className="flex flex-row items-center"
      >
        <div>
          {user.avatar && (
            <Image
              src={user.avatar}
              width={40}
              height={40}
              alt={user.username}
              className="rounded-full mr-3"
            />
          )}
          {!user.avatar && (
            <div
              style={{ width: 40, height: 40 }}
              className="bg-slate-600 rounded-full mr-3"
            ></div>
          )}
        </div>
        <div>{user.username}</div>
      </Link>
    </div>
  );
}

export default User;
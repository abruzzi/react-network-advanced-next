import {User} from "@/components/types";
import {About} from "@/components/about";
import {Friends} from "@/components/friends";
import {Feeds} from "@/components/feeds";

export const Profile = ({user, friends}: { user: User; friends: User[] }) => {
  return (
    <>
      <About user={user}/>
      <Friends users={friends}/>
      <Feeds category={user.interests[0]}/>
    </>
  );
};
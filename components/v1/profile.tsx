import {User} from "@/components/types";
import {About} from "@/components/v1/about";
import {Friends} from "@/components/v1/friends";
import {Feeds} from "@/components/v1/feeds";

export const Profile = ({user, friends}: { user: User; friends: User[] }) => {
  return (
    <>
      <About user={user}/>
      <Friends users={friends}/>
      <Feeds category={user.interests[0]}/>
    </>
  );
};
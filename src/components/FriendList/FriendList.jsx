import { FriendListItem } from '../FriendListItem/FriendListItem'; //
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friendsSection}>
      <ul className={css.friendsList}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </section>
  );
};

export default FriendList;

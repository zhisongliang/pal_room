import { List, Image } from "semantic-ui-react";

export default function EventListAttendee({ attendee }: any) {
  return (
    <List.Item>
      <Image size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
}

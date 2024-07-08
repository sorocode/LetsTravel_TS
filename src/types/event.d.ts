export type EventHandler<Event extends React.SyntheticEvent> = (
  e: Event
) => void | null;

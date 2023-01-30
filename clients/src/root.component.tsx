import { getCurrentUser } from "@myo/authentication";
export default function Root(props) {
  return <section>{getCurrentUser()?.name} is mounted!</section>;
}

import styled from "styled-components";
import useSWR from "swr";
import ReserveCard from "../../components/ReserveCard";

export default function Reserves() {
  const { data: reserves } = useSWR("/api/reserves", {
    fallbackData: [],
  });
  return (
    <ul>
      {reserves.map((reserve) => (
        <ReserveCard key={reserve._id} reserve={reserve} />
      ))}
    </ul>
  );
}

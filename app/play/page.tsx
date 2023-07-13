import Game from "@/components/game";

export default function Play({
  params,
}: {
  params: {
    room: string;
  };
}) {
  console.log(params.room);

  return <Game you="ali" opponent="CPU"/>;
}

export default function Play({
  params,
}: {
  params: {
    room: string;
  };
}) {
  console.log(params.room);

  return <>{params.room ? params.room : "room not found"}</>;
}

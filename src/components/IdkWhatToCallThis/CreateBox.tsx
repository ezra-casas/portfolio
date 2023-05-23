interface CreateBoxProps {
  project: string;
  key: number;
  id: string;
}

function handleClick(event: React.MouseEvent<HTMLElement>) {
  const element = event.target as HTMLElement;
  console.log(element.id);
}

export function CreateBox({ project, id }: CreateBoxProps) {
  return (
    <div className="box" id={id} onClick={handleClick}>
      <h2>{project}</h2>
    </div>
  );
}

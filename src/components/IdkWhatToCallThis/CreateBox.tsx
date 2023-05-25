interface CreateBoxProps {
  projectName: string;
  key: number;
  id: string;
  description?: string;
  show?: string;
}

function handleClick(event: React.MouseEvent<HTMLElement>) {
  const currentDiv = (event.target as HTMLElement)?.id;
  if (currentDiv === "kanaking") {
    console.log("pass");
    window.location.href = "https://kanaking.app";
  } else if (currentDiv === "keepassxc") {
    window.location.href = "https://github.com/ezra-casas/keepassxc-react";
  }
}

export function CreateBox({
  projectName,
  id,
  description,
  show,
}: CreateBoxProps) {
  return (
    <div className="box" id={id} onClick={handleClick}>
      <h2>{projectName}</h2>
      <p style={{ display: `${show}` }}>{description}</p>
    </div>
  );
}

// import { Typography } from "@mui/material";
import { JournalLayout } from "../layout";
import { NoteView } from "../views";

export const Journal = () => {
  return (
    <JournalLayout>
      {/* <NothingSelected /> */}

      <NoteView />
      {/* NotePage */}
    </JournalLayout>
  );
};

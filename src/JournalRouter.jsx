import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./auth/routes/AuthRoutes.jsx";
import { JournalRoutes } from "./journal/routes/JournalRoutes.jsx";
import { AppTheme } from "./theme/index.js";

export const JournalRouter = () => {
  return (
    <AppTheme>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/journal/*" element={<JournalRoutes />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </AppTheme>
  );
};

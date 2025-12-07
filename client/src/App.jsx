import react from "react";
import { Route, Routes } from "react-router";
const Template = react.lazy(() => import("./jsx-components/Template"));
const Upload = react.lazy(() => import("./jsx-components/Upload"));
const Preview = react.lazy(() => import("./jsx-components/Preview"));
const Result = react.lazy(() => import("./jsx-components/Result"));

function App() {
  return (
    <>
      <div className="bg-[#F5F5F5] h-[100vh]">
        <div className="text-center text-3xl p-2 mb-6">
          Bulk Mail Sender Using Gmail API
        </div>
        <div className="flex justify-center">
          <Routes>
            <Route path="/" element={<Template />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

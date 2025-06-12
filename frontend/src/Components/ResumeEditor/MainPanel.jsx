import JobPanel from './JobPanel';
import RightPanel from './RightPanel'; 
function MainPanel() {
  return (
    <div className="flex flex-row min-h-screen">
      {/* <Sidebar /> */}
      <JobPanel />
      <RightPanel />
    </div>
  );
}

export default MainPanel;
import LineChart from "./line-chart";

// route components always has to be default exported and inside the file page.tsx
// otherwise, the component wont be publicly accessible
// this allows to safely make additional components inside the same route folder or even file
// if we want to show them to the user, we can just import and use them inside default export component
// it's kinda same as using a seperate components folder, so choose your style?
// this is called colocation
const DashboardPage = () => {
  return (
    <div>
      Dashboard Page
      <LineChart />
    </div>
  );
};

export default DashboardPage;

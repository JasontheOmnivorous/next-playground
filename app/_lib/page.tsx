// folders starting with underscore in app router are private folders
// this means you cant view them in the browser, they aren't part of routing system
/* private folders can be useful for seperating UI logic from routing logic, 
   consistantly organizing internal files across a project, sorting and grouping files
   in text editors and avoiding potential naming conflicts with future Next.js file conventions
*/
const PrivateRoute = () => {
  return <div>You can't view this in browser</div>;
};

export default PrivateRoute;

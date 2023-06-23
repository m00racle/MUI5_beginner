import { useLocation } from 'react-router-dom';

function TourDetails() {
  let { state } = useLocation();
  console.log(state);

//   if (!tour) {
//     // Redirect to the "/" page if the tour object is not available
//     return <Navigate to={"/"} replace />;
//   }

  // Access and use the tour object as needed

  return (
    <div>
      {/* Render the tour details */}
      Welcome to {state.name} package
    </div>
  );
}

export default TourDetails;
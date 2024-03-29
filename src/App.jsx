import { motion, useScroll } from "framer-motion";

import {
  Footer,
  Navbar,
  Year1,
  Year2,
  Year3,
  Year4,
  Semester1,
  Semester2,
  MyDocuments,
  AddNew,
} from "./components";

import {
  Home,
  About,
  Kuppiya,
  Video,
  Contact,
  Login,
  Register,
  Profile,
  UpdateProfile,
  Docs,
} from "./pages";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="about" element={<About />} />

      <Route path="kuppiya" element={<Kuppiya />}>
        <Route path="First Year" element={<Year1  />}>
          <Route path="sem1" element={<Semester1 year='First Year' />} />
          <Route path="sem2" element={<Semester2 year='First Year' />} />
        </Route>

        <Route path="Second Year" element={<Year2 />}>
          <Route path="sem1" element={<Semester1 year='Second Year' />} />
          <Route path="sem2" element={<Semester2 year='Second Year' />} />
        </Route>

        <Route path="Third Year" element={<Year3 />}>
          <Route path="sem1" element={<Semester1 year='Third Year' />} />
          <Route path="sem2" element={<Semester2 year='Third Year' />} />
        </Route>

        <Route path="Fourth Year" element={<Year4 />}>
          <Route path="sem1" element={<Semester1 year='Fourth Year' />} />
          <Route path="sem2" element={<Semester2 year='Fourth Year' />} />
        </Route>
      </Route>

      <Route path="videos" element={<Video />} />
      <Route path="contact" element={<Contact />} />

      <Route path="profile" element={<Profile />}>
        <Route path="mydocuments" element={<MyDocuments />} />
        <Route path="addnew" element={<AddNew />} />
      </Route>
      <Route path="update_profile" element={<UpdateProfile />} />
      <Route path="docs" element={<Docs />} />
    </Route>
  )
);

const App = () => {
  const queryClient = new QueryClient();
  const { scrollYProgress } = useScroll();

  return (
    <div className=" overflow-hidden bg-[#002ead] w-full">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default App;

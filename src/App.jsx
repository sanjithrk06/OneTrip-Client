import React from "react";
import { RouterProvider } from "react-router-dom";

import router from './routers/Routers';

// CSS styles
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/css/bundle';
import 'wowjs/css/libs/animate.css';
import '../src/assets/css/elegant-icons.css';
import '../src/assets/css/flaticon-set.css';
import 'react-circular-progressbar/dist/styles.css';

import '../src/assets/css/validnavs.css';
import '../src/assets/css/unit-test.css';
import '../src/assets/css/spacing.css'
import '../src/assets/css/style.css'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
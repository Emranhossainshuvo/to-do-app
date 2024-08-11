import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes.tsx';
import TaskProvier from './Providers/TaskProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskProvier>
      <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </TaskProvier>
  </StrictMode>,
)

import { createBrowserRouter } from 'react-router';

import { CanvasPage } from '@/pages/canvas';
import { D3Page } from '@/pages/d3';
import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/not-found';
import { RealtimePage } from '@/pages/realtime';
import { RootLayout } from '@/widgets/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'd3', element: <D3Page /> },
      { path: 'canvas', element: <CanvasPage /> },
      { path: 'realtime', element: <RealtimePage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);

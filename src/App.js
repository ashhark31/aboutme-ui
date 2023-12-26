import './App.css';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import ErrorPage from './utils/error.page';
import BodyRoute from './pages/body.route';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deactivateNotify } from './reducers';
import { Notification } from './components';
import LoginAuthPage from './pages/auth.route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BodyRoute />,
    errorElement: <ErrorPage />
  },

  {
    path: '/auth/login',
    element: <LoginAuthPage />,
    errorElement: <ErrorPage />
  },

  // Nav Menus Routing
  {
    path: '/self',
    element: <BodyRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'base',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: 'education',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: 'experience',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: 'projects',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: 'skills',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: 'achievements',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: 'certifications',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      }
    ]
  },
  {
    path: '/dashboard',
    element: <BodyRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'intro',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: 'testimonials',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: 'blog',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      }
    ]
  },
  {
    path: '/config',
    element: <BodyRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'key',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'update',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      }
    ]
  },
  {
    path: '/setting',
    element: <BodyRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'profile',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'create',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'read',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          },
          {
            path: 'delete',
            element: <BodyRoute />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: 'change_password',
        element: <BodyRoute />,
        errorElement: <ErrorPage />,
      }
    ]
  }

  // self_routes
])

function App() {
  const notify = useSelector(state => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(deactivateNotify());
    }, 3000);
  }, [notify?.isActive]);

  return (
    <div>
      {
        notify?.isActive
        ? <Notification 
            type={notify?.notifyType} 
            message={notify?.notifyMessage}
          />
        : <></>
      }
      <div className="App">
        <main className="main border-l border-r">
          <div className="main-container">
            <RouterProvider key={'single'} router={router} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

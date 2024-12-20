import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/root-layout.tsx'
import OldLandingPage from './routes/OldLandingPage.tsx'
import DashboardLayout from './layouts/dashboard-layout.tsx'
import DashboardPage from './routes/DashboardPage.tsx'
import OnboardingPage from './routes/OnboardingPage.tsx'
import SeekerOnbPage from './routes/SeekerOnbPage.tsx'
import RecruiterOnbPage from './routes/RecruiterOnbPage.tsx'
import { UserProvider } from './contexts/UserContext.tsx'
import SignInUpPage from './routes/SignInUpPage.tsx'
import StudentCounselling from './routes/StudentCounselling.tsx'
import QuizPage from './routes/QuizPage.tsx'
import LessonsPage from './routes/LessonsPage.tsx'
import ListLessonsPage from './routes/ListLessonsPage.tsx'
import LessonPage from './routes/LessonPage.tsx'
import ExploreCareersPage from './routes/ExploreCareersPage.tsx'
import AICounselling from './routes/AICounselling.tsx'
import AICareerExplorer from './routes/AICareerExplorer.tsx'
import CareerPage from './routes/CareerPage.tsx'
import CounsellorMessagesPage from './routes/Counsellor/CounsellorMessagesPage.tsx'
import CounsellorDashboard from './routes/Counsellor/CounsellorDashboard.tsx'
import CounsellorChat from './routes/Counsellor/CounsellorChat.tsx'
import StudentChat from './routes/StudentChat.tsx'
import CareerFindQuiz from './routes/CareerFindQuiz.tsx'
import GamesPage from './routes/GamesPage.tsx'
import AIStudentTrainingHub from './routes/AIStudentTrainingHub.tsx'
import InterviewPrep from './routes/InterviewPrep.tsx'
import CounsellorAddLesson from './routes/Counsellor/CounsellorAddLesson.tsx'
import CareerPossibilities from './routes/CareerPossibilities.tsx'
import { ReactFlowProvider } from 'reactflow'
import LandingPage from './routes/LandingPage.tsx'
import ScholarshipsPage from './routes/ScholarshipsPage.tsx'
import CounsellorOnbPage from './routes/CounsellorOnbPage.tsx'
import CounsellorAprove from './routes/CounsellorAprove.tsx'
import CourseFinder from './routes/CourseFinder.tsx'
import CareerUnsure from './routes/CareerUnsure.tsx'

const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <RootLayout />
      </UserProvider>

    ),
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/signin/*', element: <SignInUpPage /> },
      {
        path: '/onboarding', element: (<OnboardingPage />)
      },
      {
        path: '/onboarding/student', element: (<SeekerOnbPage />)
      },
      { path: '/onboarding/counsellor', element: <CounsellorOnbPage /> },
      {
        element: (<DashboardLayout />),
        path: '',
        children: [
          { path: 'dashboard', element: <DashboardPage /> },
          { path: 'counselling', element: <StudentCounselling /> },
          { path: 'learn', element: <LessonsPage /> },
          { path: 'learn/:category', element: <ListLessonsPage /> },
          { path: 'learn/:category/:id', element: <LessonPage /> },
          { path: '/explore', element: <ExploreCareersPage /> },
          { path: '/explore/:careerCode', element: <CareerPage /> },
          { path: '/ai', element: <AICounselling /> },
          { path: '/careerai', element: <AICareerExplorer /> },
          { path: 'quiz/:id', element: <QuizPage /> },
          { path: '/counselchat/', element: <CounsellorMessagesPage /> },
          { path: '/counselling/chat/:chatId', element: <StudentChat /> },
          { path: '/cdashboard', element: <CounsellorDashboard /> },
          { path: '/counselchat/:chatId', element: <CounsellorChat /> },
          { path: '/careerquiz', element: <CareerFindQuiz /> },
          { path: '/aigames', element: <GamesPage /> },
          { path: '/aitraining', element: <AIStudentTrainingHub />, },
          { path: '/aitraining/interview-prep', element: <InterviewPrep /> },
          { path: '/addlesson', element: <CounsellorAddLesson /> },
          { path: '/careerroadmap', element: 
            <ReactFlowProvider>
              <CareerPossibilities />
            </ReactFlowProvider>
         },
         { path: '/admin', element: <CounsellorAprove /> },
         { path: '/coursefinder', element: <CourseFinder />},
         { path: '/careerunsure', element: <CareerUnsure />},
          { path: '*', element: <div>404</div> },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

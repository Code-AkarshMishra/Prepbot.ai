import React from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useLocation } from 'react-router-dom';

export default function LoginPage() {
  const location = useLocation();
  const isSignIn = location.pathname.includes('/sign-in');

  // Styles to center the Clerk component on the page
  const pageStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 80px)', // Full height minus navbar (adjust 80px if navbar height is different)
    padding: '20px'
  };

  return (
    <div style={pageStyles}>
      {isSignIn ? (
        <SignIn 
          path="/sign-in" 
          routing="path" 
          signUpUrl="/sign-up" 
          afterSignInUrl="/dashboard" 
        />
      ) : (
        <SignUp 
          path="/sign-up" 
          routing="path" 
          signInUrl="/sign-in" 
          afterSignUpUrl="/dashboard" 
        />
      )}
    </div>
  );
}
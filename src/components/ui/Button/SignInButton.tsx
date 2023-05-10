'use client';

// import { signIn } from 'next-auth/react'
import { FC, useState } from 'react';
import { toast } from '@/ui/toast';
import { Button } from './Button';

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWith = async () => {
    try {
      setIsLoading(true);
      // await signIn('')
      await new Promise((resolve) =>
        setTimeout(() => {
          setIsLoading(false);

          toast({
            title: 'Signed in',
            message: 'You are signed in successfully',
            type: 'success',
          });

          return resolve;
        }, 1500)
      );
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later.',
        type: 'error',
      });
    }
  };

  return (
    <Button onClick={signInWith} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;

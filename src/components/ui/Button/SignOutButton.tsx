'use client';

// import { signOut } from 'next-auth/react'
import { FC, useState } from 'react';
import { Button } from './Button';
import { toast } from '@/ui/toast';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOut = async () => {
    try {
      setIsLoading(true);
      // await signOut()
      await new Promise((resolve) =>
        setTimeout(() => {
          setIsLoading(false);
          return resolve;
        }, 1500)
      );
    } catch (error) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later.',
        type: 'error',
      });
    }
  };

  return (
    <Button onClick={signOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignOutButton;

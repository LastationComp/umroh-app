import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import ResetPasswordForm from './ResetPasswordForm';
import { checkHash } from '../action';

export default async function ResetPasswordPage({ params }: { params: { token: string } }) {
  await checkHash(params.token);
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <Card className="text-center max-w-lg mx-3">
        <CardHeader className="capitalize flex">Reset Password</CardHeader>
        <CardContent>
          {/* <Provider session={session}>
            <VerificationEmail hash={verifyEmail?.hash ?? ''} />
          </Provider> */}
          <ResetPasswordForm token={params.token} />
        </CardContent>
      </Card>
    </section>
  );
}

import Header from '@/app/components/Header';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function ProtectedPageLayout({ children }) {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get('access_token')?.value ? true : false;

  if (!isLoggedIn) {
    redirect('/noaccess');
  }

  return (
    <>
      <main>
        <div>{children}</div>
      </main>
    </>
  )
}
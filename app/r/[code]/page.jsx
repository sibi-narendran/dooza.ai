'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function ReferralPage() {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const code = params.code;
    if (code) {
      // Store referral code in a cookie (30 days expiry)
      const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `dooza_ref=${encodeURIComponent(code)}; path=/; expires=${expires}; SameSite=Lax`;
    }
    router.replace('/');
  }, [params.code, router]);

  return null;
}

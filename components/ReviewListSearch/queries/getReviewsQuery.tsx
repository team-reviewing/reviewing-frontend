import { useQuery } from '@tanstack/react-query';
import { getReviewsRole } from '../../../pages/api/inquire';

const ROLE = 'REVIEWS';

export function useGetRoleReviews(role: boolean) {
  const stringRole = !role ? 'reviewee' : 'reviewer';
  return useQuery(['getReviews', ROLE, stringRole], () => getReviewsRole(role), {
    retry: false,
    staleTime: 1000 * 20,
  });
}

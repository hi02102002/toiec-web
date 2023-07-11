import { PartType } from '@/types';

export const BASE_URL = 'http://localhost:4000';

export const ROUTES = {
   HOME: '/',
   LOGIN: '/login',
   REGISTER: '/register',
   FORGOT_PASSWORD: '/forgot-password',
   RESET_PASSWORD: '/reset-password',
   PROFILE: '/profile',
   NOT_FOUND: '/404',
   SERVER_ERROR: '/500',
   DASHBOARD: '/dashboard',
   TOIEC_TEST: '/toiec-tests',
   VOCABULARY: '/vocabulary',
   GRAMMAR: '/grammar',
   SETTINGS: '/settings',
   BLOGS: '/blogs',
   ADMIN: '/admin',
   ADMIN_USERS: '/admin/users',
   ADMIN_TOIEC_TESTS: '/admin/toiec-tests',
   ADMIN_NATIONAL_TESTS: '/admin/national-tests',
   ADMIN_BLOGS: '/admin/blogs',
   ADMIN_WORDS: '/admin/words',
   ADMIN_GRAMMARS: '/admin/grammars',
   ADMIN_CHILDREN_QUESTIONS: '/admin/children-questions',
};

export const ROUTES_AUTH = [
   ROUTES.LOGIN,
   ROUTES.REGISTER,
   ROUTES.FORGOT_PASSWORD,
   ROUTES.RESET_PASSWORD,
];

export const NUMBER_QUESTIONS_PART: Record<keyof typeof PartType, number> = {
   PART1: 6,
   PART2: 25,
   PART3: 39,
   PART4: 30,
   PART5: 30,
   PART6: 16,
   PART7: 54,
};

export const TIME_OF_TOIEC = 2 * 60 * 60 * 1000; // millisecond

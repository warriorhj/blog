/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-13 22:01:16
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-13 22:30:36
 * @FilePath: \react-blog-main\src\components\Main\index.tsx
 */
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';

import s from './index.scss';

const Home = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Home'));
const Articles = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Articles'));
const Classes = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Classes'));
const Tags = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Tags'));
const Gallery = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Gallery'));
const Img = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Img'));
const Say = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Say'));
const Msg = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Msg'));
const Link = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Link'));
const Show = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Show'));
const Log = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Log'));
const About = lazy(() => import(/* webpackPrefetch:true */ '@/pages/About'));
const Post = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Post'));
const ArtDetail = lazy(() => import(/* webpackPrefetch:true */ '@/pages/ArtDetail'));

const Main: React.FC = () => {
  return (
    <main className={s.main}>
      <div className={s.center}>
        <ErrorBoundary>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='articles' element={<Articles />} />
              <Route path='classes' element={<Classes />} />
              <Route path='tags' element={<Tags />} />
              <Route path='gallery' element={<Gallery />} />
              <Route path='img' element={<Img />} />
              <Route path='say' element={<Say />} />
              <Route path='msg' element={<Msg />} />
              <Route path='link' element={<Link />} />
              <Route path='show' element={<Show />} />
              <Route path='log' element={<Log />} />
              <Route path='about' element={<About />} />
              <Route path='post' element={<Post />} />
              <Route path='artDetail' element={<ArtDetail />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </Suspense>
        {/* </ErrorBoundary> */}
      </div>
    </main>
  );
};

export default Main;

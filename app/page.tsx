'use client'
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import BottomFooter from '@/components/re/bottomFooter';
import LetsTalk from '@/components/re/letsTalk';
import Hero from '@/components/home/hero';
import Optimizing from '@/components/home/optimizing';
import KeyDifference from '@/components/home/keyDifference';
import OurServices from '@/components/home/ourServices';
import BridgingTech from '@/components/home/bridgingTech';
import HelpClients from '@/components/home/helpClients';
import op from '../utils/op';

import Teams from "../components/teams/Teams"

export default function Home() {

  const letsTalkRef = useRef(null);

  const scrollTo = () => {
    window.location.replace('/enquiry')
    // letsTalkRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.main
        initial="initial"
        animate="animate"
        variants={op}
        transition={{
          duration: 1,
          delay: 0.1,
        }}
      >
        <Hero scrollTo={scrollTo} />
        <Optimizing />
        <KeyDifference />
        <OurServices />
        <BridgingTech />
        <HelpClients />

        <div className=" flex justify-center items-center max-w-screen bg-blue-100 p-5 box-border">
          <Teams />
        </div>
        <LetsTalk letsTalkRef={letsTalkRef} />
        <div className="mt-6">
          <BottomFooter />
        </div>
      </motion.main>
    </>
  );
}

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { HeroCardLink } from '../shared/ui';

// eslint-disable-next-line import/no-default-export
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <section className="container mx-auto grid grid-cols-1 gap-8 py-16 md:grid-cols-2 md:py-32">
        <div>
          <h1 className="mb-16 text-6xl lg:text-8xl">My organization</h1>
          <h2 className="text-4xl lg:text-6xl">Shared knowledge base</h2>
        </div>
        <div className="shrink grow-0 self-center justify-self-center">
          <HeroCardLink
            to="/docs/product-template/intro"
            icon="💁🏽‍♀️"
            label="About template"
            className="max-w-xl shadow-2xl"
          >
            It's designed as full-featured starter for medium-size products or even open source
            libraries repository
          </HeroCardLink>
        </div>
      </section>
      <div className="container mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <HeroCardLink to="/docs/intro" icon="👐" label="%Getting started% place">
          Something like "You're newcomer? Welcome! Start your journey from here"
        </HeroCardLink>
        <HeroCardLink to="/docs/product-template/intro" icon="️🪑" label="%Our projects% place">
          %Link to company's products overview%
        </HeroCardLink>
        <HeroCardLink to="/docs/libraries" icon="📚" label="Libraries">
          Explore our primary libraries
        </HeroCardLink>
      </div>
    </Layout>
  );
}

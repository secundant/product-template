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
      <section className="container mx-auto mb-16 py-32">
        <h1 className="mb-16 text-6xl lg:text-8xl">My organization</h1>
        <h2 className="text-4xl lg:text-6xl">Shared knowledge base</h2>
      </section>
      <div className="container mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <HeroCardLink to="/docs/intro" label="Getting started">
          You're newcomer? Welcome!
        </HeroCardLink>
        <HeroCardLink to="/docs/apps" label="Products">
          Here you can found documentation for your current project
        </HeroCardLink>
        <HeroCardLink to="/docs/libraries" label="Libraries">
          Explore our primary libraries
        </HeroCardLink>
      </div>
    </Layout>
  );
}

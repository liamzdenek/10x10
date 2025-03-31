import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

export const Route = createFileRoute('/10x10/faq')({
  component: FAQ,
});

function FAQ() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <p>This page will contain FAQs about the 10x10 project.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>What is the 10x10 project?</h2>
        <p>
          The 10x10 project is a challenge to build 10 different projects in 10 days,
          each one demonstrating different technical skills and problem-solving abilities.
        </p>
        
        <h2>Why did you create this portfolio?</h2>
        <p>
          This portfolio showcases my ability to rapidly prototype and build solutions
          across different domains and technologies. It demonstrates both technical
          breadth and depth.
        </p>
        
        <h2>How were the projects selected?</h2>
        <p>
          Each project was selected to demonstrate a different set of skills and
          to solve problems in various domains including healthcare, finance, 
          developer tools, and more.
        </p>
        
        <h2>Are these real projects?</h2>
        <p>
          Yes, these are real projects built as part of job applications to demonstrate
          my skills and problem-solving abilities to potential employers.
        </p>
        
        <h2>Can I see the source code?</h2>
        <p>
          For some projects, the source code is available on GitHub. Links are provided
          on the individual project pages where available.
        </p>
      </div>
    </div>
  );
}
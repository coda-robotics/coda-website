// components/external_links.js
import Link from 'next/link';
import React from 'react';
import { captureEvent } from '../PostHogProvider';

export default function ExternalLinks() {
  return (
    <>
      <div className="flex flex-col space-y-4 mb-6 sm:mb-0 ml-1 sm:ml-0">
        <Link 
          href="/why-coda" 
          className="hover:underline underline-offset-4 text-gray-600"
          onClick={() => {
            captureEvent('footer_link_clicked', {
              link_name: 'infrastructure',
              section: 'footer',
              page: typeof window !== 'undefined' ? window.location.pathname : ''
            });
          }}
        >
          WORLD MODELS
        </Link>
        <Link 
          href="https://huggingface.co/Coda-Robotics" 
          target="_blank" 
          className="hover:underline underline-offset-4 text-gray-600"
          onClick={() => {
            captureEvent('footer_external_link_clicked', {
              link_name: 'datasets',
              destination: 'huggingface',
              section: 'footer',
              page: typeof window !== 'undefined' ? window.location.pathname : ''
            });
          }}
        >
          DATASETS
        </Link>
        <Link 
          href="/company" 
          className="hover:underline underline-offset-4 text-gray-600"
          onClick={() => {
            captureEvent('footer_link_clicked', {
              link_name: 'company',
              section: 'footer',
              page: typeof window !== 'undefined' ? window.location.pathname : ''
            });
          }}
        >
          COMPANY
        </Link>
      </div>
      <div className="flex flex-col space-y-4 ml-1 sm:ml-0">
        <Link 
          href="/careers" 
          className="hover:underline underline-offset-4 text-gray-600"
          onClick={() => {
            captureEvent('footer_link_clicked', {
              link_name: 'careers',
              section: 'footer',
              page: typeof window !== 'undefined' ? window.location.pathname : ''
            });
          }}
        >
          CAREERS
        </Link>
        <Link 
          href="https://www.linkedin.com/in/juliansaks/" 
          target="_blank" 
          className="hover:underline underline-offset-4 text-gray-600"
          onClick={() => {
            captureEvent('footer_external_link_clicked', {
              link_name: 'linkedin',
              destination: 'linkedin',
              section: 'footer',
              page: typeof window !== 'undefined' ? window.location.pathname : ''
            });
          }}
        >
          LINKEDIN
        </Link>
        <Link 
          href="https://x.com/juliansaks" 
          target="_blank" 
          className="hover:underline text-gray-600 underline-offset-4"
          onClick={() => {
            captureEvent('footer_external_link_clicked', {
              link_name: 'x',
              destination: 'twitter',
              section: 'footer',
              page: typeof window !== 'undefined' ? window.location.pathname : ''
            });
          }}
        >
          X
        </Link>
      </div>
    </>
  );
}

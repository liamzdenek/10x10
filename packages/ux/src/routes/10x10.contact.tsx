import { createFileRoute } from '@tanstack/react-router';
import Contact from '../app/components/contact/Contact';

export const Route = createFileRoute('/10x10/contact')({
  component: Contact,
  head: () => ({
    meta: [
      {
        title: 'Contact Me | 10x10 Portfolio',
      },
      {
        name: 'description',
        content: 'Get in touch with me about my 10x10 Portfolio projects.'
      },
      {
        property: 'og:title',
        content: 'Contact Me | 10x10 Portfolio'
      },
      {
        property: 'og:description',
        content: 'Get in touch with me about my 10x10 Portfolio projects.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://10x10.dev/10x10/contact'
      }
    ]
  })
});

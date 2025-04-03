import * as React from 'react';
import { Fragment, ReactNode, useState } from 'react';
import { Tweet } from 'react-tweet';
import styles from './FAQ.module.css';

interface FAQItemProps {
  question: string;
  answer: string | ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className={styles.faqItem}>
      <button 
        className={styles.questionButton} 
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
          ▼
        </span>
      </button>
      <div 
        className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
        aria-hidden={!isOpen}
      >
        {typeof answer === 'string' ? <p>{answer}</p> : answer}
      </div>
    </div>
  );
};

// Wrap the Tweet component to center it
const CenteredTweet: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className={styles.tweetContainer}>
      <Tweet id={id} />
    </div>
  );
};

// Process the answer to replace Tweet with CenteredTweet
const processAnswer = (answer: string | ReactNode): string | ReactNode => {
  if (typeof answer === 'string') {
    return answer;
  }
  
  // Clone the answer element and replace Tweet with CenteredTweet
  const cloneElement = (element: React.ReactElement): React.ReactElement => {
    if (!element || typeof element !== 'object') {
      return element;
    }

    // Check if element is a Tweet component
    if (element.type === Tweet) {
      const tweetProps = element.props as { id: string };
      return <CenteredTweet id={tweetProps.id} />;
    }

    // If no props or no children, return the element as is
    if (!element.props) {
      return element;
    }
    
    // If no children, return the element as is
    const elementProps = element.props as { children?: React.ReactNode };
    if (!elementProps.children) {
      return element;
    }

    // Process children recursively
    const children = React.Children.map(elementProps.children, child => {
      if (React.isValidElement(child)) {
        return cloneElement(child);
      }
      return child;
    });

    return React.cloneElement(element, {}, children);
  };

  if (React.isValidElement(answer)) {
    return cloneElement(answer);
  }

  return answer;
};

export interface FAQProps {
  faqData: Array<{question: string, answer: string | ReactNode}>;
}

export const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (question: string) => {
    setOpenItems(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.faqList}>
        {faqData.map(datum => (
          <FAQItem 
            key={datum.question}
            question={datum.question}
            answer={processAnswer(datum.answer)}
            isOpen={!!openItems[datum.question]}
            toggleOpen={() => toggleItem(datum.question)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './fade.module.css';
import { useRef, type ReactNode } from 'react';

interface Props {
  currentKey: string;
  children: ReactNode;
}

const FadeTransition = ({ currentKey, children }: Props) => {
  const nodeRef = useRef(null);
  return (
    <SwitchTransition>
      <CSSTransition
        key={currentKey}
        nodeRef={nodeRef}
        timeout={300} // matches the transition duration in CSS
        classNames={{
          enter: styles.fadeEnter,
          enterActive: styles.fadeEnterActive,
          exit: styles.fadeExit,
          exitActive: styles.fadeExitActive,
        }}
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <div className="py-4" ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default FadeTransition;

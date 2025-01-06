import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './fade.module.css';
import { ReactNode } from 'react';

interface Props {
  currentKey: string;
  children: ReactNode;
}

const FadeTransition = ({ currentKey, children }: Props) => {
  return (
    <SwitchTransition>
      <CSSTransition
        key={currentKey}
        timeout={300} // matches the transition duration in CSS
        classNames={{
          enter: styles.fadeEnter,
          enterActive: styles.fadeEnterActive,
          exit: styles.fadeExit,
          exitActive: styles.fadeExitActive,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className="py-4">{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default FadeTransition;

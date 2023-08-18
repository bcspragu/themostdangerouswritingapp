import React from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import WriteButton from "./WriteButton";
import { withAppContext } from "./AppContext";

const Failure = ({ limit, type, lost, words }) => {
  return (
    <TransitionGroup>
      {lost && (
        <CSSTransition classNames="failure" timeout={{ enter: 500, exit: 100 }}>
          <div className="failure" key="failScreen">
            <Link to="/help" className="navButton helpButton white">
              Help
            </Link>
            <div className="inner">
              <h3>You failed.</h3>
              <h4>
                You wrote {words} words, and got them all deleted<br/>
                through your inaction.
                </h4>
              <WriteButton
                ghost
                noPanel
                color="white"
                label="Try
            Again."
                type={type}
                limit={limit}
              />
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default withAppContext(Failure);

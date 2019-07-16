import React from 'react'
import { connect } from 'react-redux'


const mapDispatchToProps = (dispatch, props) => ({
  dispatchToProps: {
    dispatch,
    props,
  },
});


const mapStateToProps = (state, props) => ({
  stateToProps: {
    state,
    props,
  },
});


const Index = ({ ...props }, ...args) => {
  console.log({ args, props });
  return (
    <div>
      <pre>
        { JSON.stringify(props, null, '  ') }
      </pre>
      Welcome to Next.js!
    </div>
  );
};



export default connect(mapStateToProps, mapDispatchToProps)(Index);

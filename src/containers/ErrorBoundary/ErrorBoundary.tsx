import React from 'react';

import { GraphQlError, ServerError } from '../../api';

export interface GraphqlErrorBoundaryState {
    error: any | null;
}

class GraphqlErrorBoundary extends React.Component<any, GraphqlErrorBoundaryState> {
  static getDerivedStateFromError(error: any) {
    return { error };
  }
    state: GraphqlErrorBoundaryState = { error: null };

  componentDidCatch(error: any) {
      // TODO: Log errors here ( sentry etc.)
  }

  render() {
      // TODO: In progress!    
    if (this.state.error && this.state.error.error.extensions.code === 'EMAIL_OR_PAS_INCORRECT') {
      return <div>{this.state.error.error.message}</div>;
    } else if (this.state.error instanceof ServerError ) {
      console.log('sosi xui');
    }

    return this.props.children;
  }
}
      
export default GraphqlErrorBoundary;
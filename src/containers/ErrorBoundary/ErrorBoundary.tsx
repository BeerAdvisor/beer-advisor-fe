import React from 'react';

import { ServerError } from '../../api';

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
    if (this.state.error) {
      const { error } = this.state.error;
    
      if (error && error instanceof ServerError ) {
        return <div>404 LOL</div>;
      }
    }

    return this.props.children;
  }
}
      
export default GraphqlErrorBoundary;
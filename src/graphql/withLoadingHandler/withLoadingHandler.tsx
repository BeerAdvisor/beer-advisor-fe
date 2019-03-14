import React from 'react';

const DefaultLoader = <div>Loading...</div>;

// TODO: Make data generic
const withLoadingHandler = <T extends any>(Component: React.ComponentType<T>, Loader = DefaultLoader) => ({ data, ...other }: any) => {
    if (data.loading) {
        return Loader;
    }
    
    return <Component data={data} {...other} />;
};

export default withLoadingHandler;

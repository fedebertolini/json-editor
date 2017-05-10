import React from 'react';
import { connect } from 'react-redux';
import { isImmutable, isKeyed, isIndexed } from 'immutable';
import { selectData } from '../../store/selectors/saved';
import ArrayElement from './ArrayElement';
import ValueElement from './ValueElement';
import ObjectElement from './ObjectElement';

const Element = ({ path, data }) => {
    if (isImmutable(data)) {
        if (isKeyed(data)) {
            return <ObjectElement path={path} data={data} />;
        } else if (isIndexed(data)) {
            return <ArrayElement path={path} data={data} />;
        }
        throw new Error(`Invalid immutable type: ${JSON.stringify(path)}`)
    }
    return <ValueElement path={path} data={data} />;
};

const mapStateToProps = (state, ownProps) => ({
    data: selectData(state, ownProps.path),
});

export default connect(mapStateToProps)(Element);
